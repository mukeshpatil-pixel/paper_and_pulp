"""
MetroPT APU Predictive Maintenance — Persistence Filter Comparison (1-min vs 5-min vs Raw)
Evaluates alarm fatigue reduction and operational metrics.
"""

import os
import time
import pyarrow.csv as pv
import pandas as pd
import numpy as np
import lightgbm as lgb
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix

def run_comparison():
    print("=" * 85)
    print("ALARM FATIGUE ANALYSIS: COMPARING 1-MINUTE VS 5-MINUTE PERSISTENCE FILTERS")
    print("=" * 85)
    
    # 1. Ingest Data
    csv_file = 'MetroPT3(CompressorDatase).csv'
    print(f"\n[1/4] Ingesting '{csv_file}'...")
    t0 = time.time()
    table = pv.read_csv(csv_file)
    df = table.to_pandas()
    if '' in df.columns:
        df.drop(columns=[''], inplace=True)
    if 'Unnamed: 0' in df.columns:
        df.drop(columns=['Unnamed: 0'], inplace=True)
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df = df.sort_values('timestamp').reset_index(drop=True)
    print(f"-> Ingested {len(df):,} rows in {time.time()-t0:.2f}s.")
    
    # 2. Filter Idle State
    mask_active = (df['COMP'] == 0.0) & (df['Motor_current'] >= 3.5)
    
    failures = [
        ('F1_Apr18', '2020-04-18 00:00:00', '2020-04-18 23:59:59'),
        ('F2_May29', '2020-05-29 23:30:00', '2020-05-30 06:00:00'),
        ('F3_Jun05', '2020-06-05 10:00:00', '2020-06-07 14:30:00'),
        ('F4_Jul15', '2020-07-15 14:30:00', '2020-07-15 19:00:00')
    ]
    is_fail = np.zeros(len(df), dtype=int)
    for name, s, e in failures:
        sub_mask = (df['timestamp'] >= s) & (df['timestamp'] <= e)
        is_fail[sub_mask] = 1
    df['failure_target'] = is_fail
    
    df_act = df[mask_active].copy().reset_index(drop=True)
    del df
    
    # 3. Split Train / Test
    split_date = pd.Timestamp('2020-06-01 00:00:00')
    train_df = df_act[df_act['timestamp'] < split_date].copy().reset_index(drop=True)
    test_df  = df_act[df_act['timestamp'] >= split_date].copy().reset_index(drop=True)
    
    # 4. Feature Engineering
    print("\n[2/4] Engineering Features & Training LightGBM...")
    def create_features(data):
        d = data.copy()
        d['delta_P_TP3_TP2'] = (d['TP3'] - d['TP2']).astype(np.float32)
        d['delta_P_TP3_H1']  = (d['TP3'] - d['H1']).astype(np.float32)
        d['delta_P_H1_Res']  = (d['H1'] - d['Reservoirs']).astype(np.float32)
        d['pressure_ratio']  = ((d['TP3'] + 1.0) / (d['TP2'] + 1.0).clip(lower=0.1)).astype(np.float32)
        d['power_proxy']     = (d['Motor_current'] * d['Reservoirs']).astype(np.float32)
        for col in ['Reservoirs', 'TP3', 'Oil_temperature', 'Motor_current', 'DV_pressure']:
            d[col + '_diff10']      = (d[col] - d[col].shift(10).bfill()).astype(np.float32)
            d[col + '_diff30']      = (d[col] - d[col].shift(30).bfill()).astype(np.float32)
            d[col + '_roll_mean30'] = (d[col].shift(1).rolling(30, min_periods=5).mean().bfill()).astype(np.float32)
            d[col + '_roll_std30']  = (d[col].shift(1).rolling(30, min_periods=5).std().bfill()).astype(np.float32)
        return d
    
    X_tr = create_features(train_df)
    X_te = create_features(test_df)
    drop_cols = ['timestamp', 'failure_target', 'COMP']
    feat_cols = [c for c in X_tr.columns if c not in drop_cols and X_tr[c].nunique() > 1]
    
    clf = lgb.LGBMClassifier(
        n_estimators=180,
        learning_rate=0.06,
        num_leaves=35,
        scale_pos_weight=3.5,
        random_state=42,
        n_jobs=-1
    )
    clf.fit(X_tr[feat_cols], train_df['failure_target'])
    prob = clf.predict_proba(X_te[feat_cols])[:, 1]
    test_df['prob'] = prob
    
    # 5. Persistence Filter Evaluation
    print("\n[3/4] Evaluating Persistence Filters on Unseen Test Data (June - August 2020)...")
    
    # Base probability threshold
    base_thresh = 0.30
    test_df['alarm_raw'] = (test_df['prob'] >= base_thresh).astype(int)
    
    # Rolling persistence: signal must remain high for at least W seconds
    windows = {
        'Raw 1-Second (No Filter)': 1,
        '1-Minute Persistence':    60,
        '2-Minute Persistence':    120,
        '5-Minute Persistence':    300
    }
    
    def count_episodes(binary_series):
        # Count distinct contiguous alarm blocks (episodes)
        changes = (binary_series.diff() == 1)
        if len(binary_series) > 0 and binary_series.iloc[0] == 1:
            changes.iloc[0] = True
        return changes.sum()
    
    results = []
    y_true = test_df['failure_target']
    
    # F3 mask (June 05 - 07)
    f3_mask = (test_df['timestamp'] >= '2020-06-05 10:00:00') & (test_df['timestamp'] <= '2020-06-07 14:30:00')
    norm_mask = (y_true == 0)
    
    for name, w_sec in windows.items():
        if w_sec == 1:
            pred = test_df['alarm_raw']
        else:
            # Requires mean over past w_sec to be at least 0.75 (sustained alarm)
            pred = (test_df['alarm_raw'].rolling(w_sec, min_periods=w_sec).mean() >= 0.75).astype(int).fillna(0)
            
        prec = precision_score(y_true, pred)
        rec  = recall_score(y_true, pred)
        f1   = f1_score(y_true, pred)
        
        cm = confusion_matrix(y_true, pred)
        fp_seconds = cm[0, 1]
        tp_seconds = cm[1, 1]
        
        # Count false alarm episodes on normal data
        norm_pred = pred[norm_mask]
        false_episodes = count_episodes(norm_pred)
        
        # Detection on F3
        f3_detected_seconds = pred[f3_mask].sum()
        f3_hours = f3_detected_seconds / 3600.0
        
        results.append({
            'Filter_Mode': name,
            'Window_Seconds': w_sec,
            'Precision': round(prec * 100, 2),
            'Recall': round(rec * 100, 2),
            'F1_Score': round(f1, 4),
            'False_Alarm_Seconds': int(fp_seconds),
            'False_Alarm_Calls (Dispatches)': int(false_episodes),
            'Failure_3_Alarm_Duration (Hours)': round(f3_hours, 1),
            'Failure_3_Detected': 'YES (100% Incident Catch)' if f3_hours > 1.0 else 'NO'
        })
        
    df_res = pd.DataFrame(results)
    os.makedirs('metropt_results', exist_ok=True)
    df_res.to_csv('metropt_results/persistence_filter_comparison.csv', index=False)
    
    print("\n" + "=" * 90)
    print(f"{'Filter Mode':<28}{'Precision':<12}{'Recall':<12}{'F1':<10}{'False Calls':<15}{'F3 Duration':<12}")
    print("=" * 90)
    for _, r in df_res.iterrows():
        print(f"{r['Filter_Mode']:<28}{r['Precision']:<11}%{r['Recall']:<11}%{r['F1_Score']:<10}{r['False_Alarm_Calls (Dispatches)']:<15}{r['Failure_3_Alarm_Duration (Hours)']} hrs")
    print("=" * 90)
    
    # 6. Generate Diagnostic Plots
    print("\n[4/4] Generating Comparison Visualizations...")
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5.5))
    
    # Subplot 1: Precision vs Recall
    x = np.arange(len(df_res))
    width = 0.35
    
    rects1 = ax1.bar(x - width/2, df_res['Precision'], width, label='Precision (%)', color='#2ca02c', alpha=0.9, edgecolor='black')
    rects2 = ax1.bar(x + width/2, df_res['Recall'], width, label='Recall (%)', color='#1f77b4', alpha=0.9, edgecolor='black')
    
    ax1.set_ylabel('Percentage (%)', fontsize=11, fontweight='bold')
    ax1.set_title('Precision vs Recall Across Persistence Windows', fontsize=12, fontweight='bold')
    ax1.set_xticks(x)
    ax1.set_xticklabels(df_res['Filter_Mode'], rotation=15, ha='right', fontsize=9, fontweight='semibold')
    ax1.set_ylim(0, 115)
    ax1.grid(axis='y', alpha=0.3)
    ax1.legend(loc='lower left', frameon=True)
    
    for bar in rects1:
        h = bar.get_height()
        ax1.text(bar.get_x() + bar.get_width()/2, h + 1.5, f"{h:.1f}%", ha='center', va='bottom', fontsize=8, fontweight='bold')
    for bar in rects2:
        h = bar.get_height()
        ax1.text(bar.get_x() + bar.get_width()/2, h + 1.5, f"{h:.1f}%", ha='center', va='bottom', fontsize=8, fontweight='bold')
        
    # Subplot 2: False Alarm Calls (Technician Dispatches)
    colors = ['#d62728', '#ff7f0e', '#bcbd22', '#2ca02c']
    bars3 = ax2.bar(df_res['Filter_Mode'], df_res['False_Alarm_Calls (Dispatches)'], color=colors, alpha=0.85, edgecolor='black')
    ax2.set_ylabel('Total False Alarm Technician Dispatches (June-Aug)', fontsize=11, fontweight='bold')
    ax2.set_title('Technician Alarm Fatigue: False Dispatches in 3 Months', fontsize=12, fontweight='bold')
    ax2.set_xticklabels(df_res['Filter_Mode'], rotation=15, ha='right', fontsize=9, fontweight='semibold')
    ax2.grid(axis='y', alpha=0.3)
    
    for bar in bars3:
        h = bar.get_height()
        ax2.text(bar.get_x() + bar.get_width()/2, h + 0.5, f"{int(h)} calls", ha='center', va='bottom', fontsize=9, fontweight='bold')
        
    plt.tight_layout()
    plt.savefig('metropt_results/figure_4_persistence_comparison.png', dpi=200)
    plt.close()
    
    print("Comparison complete! Results saved to 'metropt_results/persistence_filter_comparison.csv' and 'figure_4_persistence_comparison.png'.")

if __name__ == '__main__':
    run_comparison()
