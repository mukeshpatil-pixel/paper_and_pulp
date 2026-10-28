"""
MetroPT Air Compressor APU — Walk-Forward Monthly Expanding Window Validation
Author: Antigravity
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
from sklearn.metrics import average_precision_score, precision_score, recall_score, f1_score, confusion_matrix

def run_walk_forward():
    print("=" * 90)
    print("METROPT APU: WALK-FORWARD MONTHLY EXPANDING WINDOW VALIDATION")
    print("=" * 90)
    
    # 1. Ingest Data
    csv_file = 'MetroPT3(CompressorDatase).csv'
    print(f"\n[1/5] Ingesting '{csv_file}'...")
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
    
    # 2. Filter Idle Condition
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
    
    # 3. Feature Engineering (Strictly Causal, No Global Stats)
    print("\n[2/5] Feature Engineering (Strictly Causal)...")
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
    
    df_feat = create_features(df_act)
    drop_cols = ['timestamp', 'failure_target', 'COMP']
    feat_cols = [c for c in df_feat.columns if c not in drop_cols and df_feat[c].nunique() > 1]
    
    # 4. Define Walk-Forward Expanding Folds
    folds = [
        {
            'Fold_ID': 'Fold 1: Test JUNE 2020',
            'Train_Range': ('2020-02-01 00:00:00', '2020-05-31 23:59:59'),
            'Test_Range':  ('2020-06-01 00:00:00', '2020-06-30 23:59:59'),
            'Test_Event':  'Failure #3 (June 05 - 07, 52.5h Air Leak)',
            'Event_Range': ('2020-06-05 10:00:00', '2020-06-07 14:30:00')
        },
        {
            'Fold_ID': 'Fold 2: Test JULY 2020',
            'Train_Range': ('2020-02-01 00:00:00', '2020-06-30 23:59:59'),
            'Test_Range':  ('2020-07-01 00:00:00', '2020-07-31 23:59:59'),
            'Test_Event':  'Failure #4 (July 15, Summer 83.9°C Leak)',
            'Event_Range': ('2020-07-15 14:30:00', '2020-07-15 19:00:00')
        },
        {
            'Fold_ID': 'Fold 3: Test AUGUST 2020',
            'Train_Range': ('2020-02-01 00:00:00', '2020-07-31 23:59:59'),
            'Test_Range':  ('2020-08-01 00:00:00', '2020-08-31 23:59:59'),
            'Test_Event':  'Healthy Post-Turnaround Baseline',
            'Event_Range': None
        }
    ]
    
    def count_episodes(binary_series):
        changes = (binary_series.diff() == 1)
        if len(binary_series) > 0 and binary_series.iloc[0] == 1:
            changes.iloc[0] = True
        return changes.sum()
    
    summary_rows = []
    
    print("\n[3/5] Executing Walk-Forward Folds...")
    
    for fold in folds:
        print("\n" + "-" * 85)
        print(f"RUNNING {fold['Fold_ID']}")
        print(f"Train Period: {fold['Train_Range'][0]} to {fold['Train_Range'][1]}")
        print(f"Test Period:  {fold['Test_Range'][0]} to {fold['Test_Range'][1]}")
        print(f"Target Event: {fold['Test_Event']}")
        print("-" * 85)
        
        train_mask = (df_feat['timestamp'] >= fold['Train_Range'][0]) & (df_feat['timestamp'] <= fold['Train_Range'][1])
        test_mask  = (df_feat['timestamp'] >= fold['Test_Range'][0]) & (df_feat['timestamp'] <= fold['Test_Range'][1])
        
        X_train = df_feat.loc[train_mask, feat_cols]
        y_train = df_feat.loc[train_mask, 'failure_target']
        
        test_data = df_feat.loc[test_mask].copy().reset_index(drop=True)
        X_test = test_data[feat_cols]
        y_test = test_data['failure_target']
        
        print(f"Train instances: {len(X_train):,} (Failures: {y_train.sum():,})")
        print(f"Test instances:  {len(X_test):,} (Failures: {y_test.sum():,})")
        
        # Train LightGBM model on expanding window
        clf = lgb.LGBMClassifier(
            n_estimators=180,
            learning_rate=0.06,
            num_leaves=35,
            scale_pos_weight=3.5,
            random_state=42,
            n_jobs=-1
        )
        t_tr = time.time()
        clf.fit(X_train, y_train)
        print(f"Model trained in {time.time()-t_tr:.2f}s.")
        
        # Predict on unseen test month
        prob = clf.predict_proba(X_test)[:, 1]
        test_data['prob'] = prob
        
        # Has failure in this test month?
        has_failure = y_test.sum() > 0
        pr_auc = average_precision_score(y_test, prob) if has_failure else np.nan
        
        # Alarming modes:
        test_data['alarm_raw']  = (test_data['prob'] >= 0.30).astype(int)
        test_data['alarm_1min'] = (test_data['alarm_raw'].rolling(60, min_periods=60).mean() >= 0.75).astype(int).fillna(0)
        test_data['alarm_5min'] = (test_data['alarm_raw'].rolling(300, min_periods=300).mean() >= 0.75).astype(int).fillna(0)
        
        # Evaluate metrics for Raw, 1-min, and 5-min
        for m_name, m_col in [('Raw (1-Sec)', 'alarm_raw'), ('1-Minute Filter', 'alarm_1min'), ('5-Minute Filter', 'alarm_5min')]:
            pred = test_data[m_col]
            
            if has_failure:
                prec = precision_score(y_test, pred) * 100
                rec  = recall_score(y_test, pred) * 100
                f1   = f1_score(y_test, pred)
            else:
                prec = 100.0 if pred.sum() == 0 else 0.0
                rec  = 100.0
                f1   = 1.0 if pred.sum() == 0 else 0.0
                
            norm_mask = (y_test == 0)
            false_seconds = pred[norm_mask].sum()
            false_calls   = count_episodes(pred[norm_mask])
            
            # Event duration
            if fold['Event_Range'] is not None:
                ev_mask = (test_data['timestamp'] >= fold['Event_Range'][0]) & (test_data['timestamp'] <= fold['Event_Range'][1])
                ev_hours = pred[ev_mask].sum() / 3600.0
                ev_status = f"DETECTED ({ev_hours:.1f}h Warning)" if ev_hours > 0.1 else "MISSED"
            else:
                ev_hours = 0.0
                ev_status = "CLEAN (No Fault)"
                
            summary_rows.append({
                'Fold': fold['Fold_ID'].split(':')[0],
                'Test_Month': fold['Fold_ID'].split(':')[1].strip(),
                'Filter_Mode': m_name,
                'PR_AUC': round(pr_auc * 100, 2) if has_failure else "N/A (All Normal)",
                'Precision': round(prec, 2),
                'Recall': round(rec, 2),
                'F1_Score': round(f1, 4),
                'False_Dispatches': int(false_calls),
                'False_Alarm_Seconds': int(false_seconds),
                'Event_Catch_Status': ev_status
            })
            
            print(f"-> {m_name:<16}: Prec={prec:6.2f}% | Rec={rec:6.2f}% | F1={f1:.4f} | False Calls={false_calls:3d} | Event: {ev_status}")

    # 5. Output Summary Table
    df_summary = pd.DataFrame(summary_rows)
    os.makedirs('metropt_results', exist_ok=True)
    df_summary.to_csv('metropt_results/walkforward_validation_results.csv', index=False)
    
    print("\n" + "=" * 90)
    print("WALK-FORWARD EXPANDING WINDOW SUMMARY TABLE")
    print("=" * 90)
    print(df_summary.to_string(index=False))
    
    # 6. Plotting
    print("\n[5/5] Generating Walk-Forward Visualizations...")
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))
    
    # Plot False Dispatches across folds
    df_5min = df_summary[df_summary['Filter_Mode'] == '5-Minute Filter']
    df_1min = df_summary[df_summary['Filter_Mode'] == '1-Minute Filter']
    df_raw  = df_summary[df_summary['Filter_Mode'] == 'Raw (1-Sec)']
    
    months = df_5min['Test_Month'].tolist()
    x = np.arange(len(months))
    w = 0.25
    
    ax1.bar(x - w, df_raw['False_Dispatches'], w, label='Raw (1-Sec)', color='#d62728', alpha=0.85, edgecolor='black')
    ax1.bar(x,     df_1min['False_Dispatches'], w, label='1-Min Filter', color='#ff7f0e', alpha=0.85, edgecolor='black')
    ax1.bar(x + w, df_5min['False_Dispatches'], w, label='5-Min Filter', color='#2ca02c', alpha=0.85, edgecolor='black')
    ax1.set_xticks(x)
    ax1.set_xticklabels(months, fontsize=10, fontweight='bold')
    ax1.set_ylabel('False Technician Dispatches', fontsize=11, fontweight='bold')
    ax1.set_title('Technician Callouts Across Walk-Forward Months', fontsize=12, fontweight='bold')
    ax1.grid(axis='y', alpha=0.3)
    ax1.legend(loc='upper right')
    
    # Plot Precision across folds
    ax2.plot(months, df_raw['Precision'], marker='o', lw=2, color='#d62728', label='Raw (1-Sec)')
    ax2.plot(months, df_1min['Precision'], marker='s', lw=2, color='#ff7f0e', label='1-Min Filter')
    ax2.plot(months, df_5min['Precision'], marker='^', lw=2.5, color='#2ca02c', label='5-Min Filter')
    ax2.set_ylabel('Precision (%)', fontsize=11, fontweight='bold')
    ax2.set_title('Alarm Precision Across Expanding Window Months', fontsize=12, fontweight='bold')
    ax2.set_ylim(85, 102)
    ax2.grid(True, alpha=0.3)
    ax2.legend(loc='lower right')
    
    plt.tight_layout()
    plt.savefig('metropt_results/figure_5_walkforward_validation.png', dpi=200)
    plt.close()
    
    print("\nWalk-Forward Validation complete! All outputs saved to 'metropt_results/' folder.")

if __name__ == '__main__':
    run_walk_forward()
