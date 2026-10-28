"""
MetroPT Air Compressor APU — Supervised LightGBM Failure Prediction Pipeline
Dataset: MetroPT3(CompressorDatase).csv
Author: Antigravity
"""

import os
import time
import json
import pyarrow.csv as pv
import pandas as pd
import numpy as np
import lightgbm as lgb
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import (
    precision_recall_curve,
    average_precision_score,
    auc,
    f1_score,
    recall_score,
    precision_score,
    confusion_matrix,
    classification_report
)

def run_pipeline():
    print("=" * 90)
    print("METROPT AIR PRODUCTION UNIT (APU) — SUPERVISED LIGHTGBM PIPELINE")
    print("=" * 90)
    
    # ---------------------------------------------------------
    # 1. Dataset Ingestion & Metadata Overview
    # ---------------------------------------------------------
    csv_file = 'MetroPT3(CompressorDatase).csv'
    if not os.path.exists(csv_file):
        raise FileNotFoundError(f"File '{csv_file}' not found.")
        
    print(f"\n[1/6] Ingesting '{csv_file}' using PyArrow engine...")
    t0 = time.time()
    table = pv.read_csv(csv_file)
    df_raw = table.to_pandas()
    print(f"-> Ingested {df_raw.shape[0]:,} rows and {df_raw.shape[1]} columns in {time.time()-t0:.2f} seconds.")
    
    # Clean index columns
    if '' in df_raw.columns:
        df_raw.drop(columns=[''], inplace=True)
    if 'Unnamed: 0' in df_raw.columns:
        df_raw.drop(columns=['Unnamed: 0'], inplace=True)
        
    df_raw['timestamp'] = pd.to_datetime(df_raw['timestamp'])
    df_raw = df_raw.sort_values('timestamp').reset_index(drop=True)
    
    ts_start = df_raw['timestamp'].min()
    ts_end = df_raw['timestamp'].max()
    total_days = (ts_end - ts_start).total_seconds() / (24 * 3600)
    
    print(f"-> Timestamp Span: {ts_start} to {ts_end}")
    print(f"-> Total Calendar Duration: {total_days:.1f} days (~{round(total_days/30.4):.0f} months)")
    print(f"-> Sampling Frequency: 1 Hz (1 reading per second)")

    # ---------------------------------------------------------
    # 2. Tag Catalog Documentation
    # ---------------------------------------------------------
    tags_meta = [
        {"Tag": "TP2", "Description": "Compressor Stage 2 Pressure", "Unit": "bar", "Category": "Pressure Stage"},
        {"Tag": "TP3", "Description": "Compressor Stage 3 Pressure", "Unit": "bar", "Category": "Pressure Stage"},
        {"Tag": "H1", "Description": "High-Pressure Line (Pre-Dryer)", "Unit": "bar", "Category": "Pneumatic Line"},
        {"Tag": "DV_pressure", "Description": "Drain Valve / Purge Pressure", "Unit": "bar", "Category": "Purge / Drain"},
        {"Tag": "Reservoirs", "Description": "Main Reservoir Delivery Pressure", "Unit": "bar", "Category": "Air Delivery"},
        {"Tag": "Oil_temperature", "Description": "Compressor Lubricating Oil Temp", "Unit": "°C", "Category": "Thermal"},
        {"Tag": "Motor_current", "Description": "Drive Motor Electric Current", "Unit": "A", "Category": "Electrical Load"},
        {"Tag": "COMP", "Description": "Air Intake Valve Signal (0=Load, 1=Idle)", "Unit": "Binary", "Category": "Intake Valve"},
        {"Tag": "DV_eletric", "Description": "Drain Valve Electrical Command", "Unit": "Binary", "Category": "Purge Valve"},
        {"Tag": "Towers", "Description": "Dryer Desiccant Tower Cycling (A/B)", "Unit": "Binary", "Category": "Air Dryer"},
        {"Tag": "MPG", "Description": "Main Pressure Governor Signal", "Unit": "Binary", "Category": "Governor Control"},
        {"Tag": "LPS", "Description": "Low Pressure Safety Signal (<6.5 bar)", "Unit": "Binary", "Category": "Safety Alarm"},
        {"Tag": "Pressure_switch", "Description": "Pneumatic Safety Pressure Switch", "Unit": "Binary", "Category": "Safety Switch"},
        {"Tag": "Oil_level", "Description": "Compressor Oil Reservoir Level Switch", "Unit": "Binary", "Category": "Lube Safety"},
        {"Tag": "Caudal_impulses", "Description": "Flow Pulse Meter Counter Signal", "Unit": "Binary", "Category": "Airflow Pulse"}
    ]
    df_tags = pd.DataFrame(tags_meta)
    os.makedirs('metropt_results', exist_ok=True)
    df_tags.to_csv('metropt_results/metropt_tag_catalog.csv', index=False)
    
    # ---------------------------------------------------------
    # 3. Ground Truth Failure Definition (Table 1)
    # ---------------------------------------------------------
    print("\n[2/6] Labeling Ground Truth Failure Events (Table 1)...")
    failures = [
        {"Failure_ID": "F1_Apr18", "Start": "2020-04-18 00:00:00", "End": "2020-04-18 23:59:59", "Type": "Air leak (High stress)"},
        {"Failure_ID": "F2_May29", "Start": "2020-05-29 23:30:00", "End": "2020-05-30 06:00:00", "Type": "Air leak (High stress)"},
        {"Failure_ID": "F3_Jun05", "Start": "2020-06-05 10:00:00", "End": "2020-06-07 14:30:00", "Type": "Air leak (Prolonged 52.5h)"},
        {"Failure_ID": "F4_Jul15", "Start": "2020-07-15 14:30:00", "End": "2020-07-15 19:00:00", "Type": "Air leak (High stress)"}
    ]
    
    is_failure = np.zeros(len(df_raw), dtype=int)
    for f in failures:
        mask_f = (df_raw['timestamp'] >= f['Start']) & (df_raw['timestamp'] <= f['End'])
        is_failure[mask_f] = 1
        print(f"-> {f['Failure_ID']}: {f['Start']} to {f['End']} | Total rows: {mask_f.sum():,}")
    df_raw['failure_target'] = is_failure
    
    # ---------------------------------------------------------
    # 4. Removing Idle Condition Data
    # ---------------------------------------------------------
    print("\n[3/6] Filtering out Idle / Off Condition Data...")
    # In MetroPT: COMP == 0.0 means intake valve is open (active compression under load).
    # COMP == 1.0 or Motor_current < 3.5 A means idle/off (not compressing air).
    mask_active = (df_raw['COMP'] == 0.0) & (df_raw['Motor_current'] >= 3.5)
    
    raw_total = len(df_raw)
    active_total = mask_active.sum()
    idle_total = raw_total - active_total
    
    fail_raw = (df_raw['failure_target'] == 1).sum()
    fail_active = (df_raw['failure_target'] == 1)[mask_active].sum()
    
    print(f"-> Raw Dataset Rows:       {raw_total:,}")
    print(f"-> Idle / Off Rows Removed: {idle_total:,} ({idle_total/raw_total*100:.1f}%)")
    print(f"-> Active Loaded Rows Kept: {active_total:,} ({active_total/raw_total*100:.1f}%)")
    print(f"-> Failure Data Preserved: {fail_active:,} / {fail_raw:,} ({fail_active/fail_raw*100:.2f}%)")
    
    df_active = df_raw[mask_active].copy().reset_index(drop=True)
    del df_raw # Free RAM
    
    # ---------------------------------------------------------
    # 5. Chronological Train / Test Split (Strictly No Leakage)
    # ---------------------------------------------------------
    print("\n[4/6] Chronological Train/Test Partitioning...")
    # Split: Train on February 1 to May 31, 2020 (contains F1 and F2)
    #        Test on June 1 to August 31, 2020 (contains F3 and F4)
    split_date = pd.Timestamp('2020-06-01 00:00:00')
    train_df = df_active[df_active['timestamp'] < split_date].copy().reset_index(drop=True)
    test_df  = df_active[df_active['timestamp'] >= split_date].copy().reset_index(drop=True)
    
    print(f"-> Train Set (Feb 01 - May 31): {len(train_df):,} rows | Failures: {train_df['failure_target'].sum():,} ({train_df['failure_target'].mean()*100:.2f}%)")
    print(f"-> Test Set  (Jun 01 - Aug 31): {len(test_df):,} rows | Failures: {test_df['failure_target'].sum():,} ({test_df['failure_target'].mean()*100:.2f}%)")
    
    # ---------------------------------------------------------
    # 6. Feature Engineering (Strictly Backward-Looking, No Global Mean/Std)
    # ---------------------------------------------------------
    print("\n[5/6] Feature Engineering (Strictly Causal, No Global Stats)...")
    def create_features(data):
        d = data.copy()
        # Physical Differentials & Head
        d['delta_P_TP3_TP2'] = (d['TP3'] - d['TP2']).astype(np.float32)
        d['delta_P_TP3_H1']  = (d['TP3'] - d['H1']).astype(np.float32)
        d['delta_P_H1_Res']  = (d['H1'] - d['Reservoirs']).astype(np.float32)
        d['pressure_ratio']  = ((d['TP3'] + 1.0) / (d['TP2'] + 1.0).clip(lower=0.1)).astype(np.float32)
        d['power_proxy']     = (d['Motor_current'] * d['Reservoirs']).astype(np.float32)
        
        # Temporal Differences & Backward Rolling Windows (strictly shift(1) or past lag)
        for col in ['Reservoirs', 'TP3', 'Oil_temperature', 'Motor_current', 'DV_pressure']:
            d[f'{col}_diff10']      = (d[col] - d[col].shift(10).bfill()).astype(np.float32)
            d[f'{col}_diff30']      = (d[col] - d[col].shift(30).bfill()).astype(np.float32)
            d[f'{col}_roll_mean30'] = (d[col].shift(1).rolling(30, min_periods=5).mean().bfill()).astype(np.float32)
            d[f'{col}_roll_std30']  = (d[col].shift(1).rolling(30, min_periods=5).std().bfill()).astype(np.float32)
        return d
    
    X_train_df = create_features(train_df)
    X_test_df  = create_features(test_df)
    
    drop_cols = ['timestamp', 'failure_target', 'COMP']
    feat_cols = [c for c in X_train_df.columns if c not in drop_cols and X_train_df[c].nunique() > 1]
    
    print(f"-> Total Extracted Features: {len(feat_cols)}")
    print(f"-> Selected Features: {feat_cols}")
    
    X_train = X_train_df[feat_cols].values.astype(np.float32)
    y_train = train_df['failure_target'].values.astype(np.int32)
    X_test  = X_test_df[feat_cols].values.astype(np.float32)
    y_test  = test_df['failure_target'].values.astype(np.int32)
    
    # ---------------------------------------------------------
    # 7. LightGBM Model Training
    # ---------------------------------------------------------
    print("\n[6/6] Training LightGBM Supervised Model...")
    # Scale positive weight set to 3.0 to penalize missed faults (Recall focus)
    clf = lgb.LGBMClassifier(
        n_estimators=180,
        learning_rate=0.06,
        num_leaves=35,
        max_depth=7,
        scale_pos_weight=3.5,
        subsample=0.85,
        colsample_bytree=0.85,
        random_state=42,
        n_jobs=-1
    )
    
    t_tr = time.time()
    clf.fit(X_train, y_train)
    print(f"-> LightGBM fitted in {time.time()-t_tr:.2f} seconds.")
    
    # Predict probabilities on unseen test set
    y_prob = clf.predict_proba(X_test)[:, 1]
    
    # Compute PR-AUC (Average Precision)
    pr_auc = average_precision_score(y_test, y_prob)
    precision_curve, recall_curve, thresholds_pr = precision_recall_curve(y_test, y_prob)
    auc_pr = auc(recall_curve, precision_curve)
    
    print("\n" + "=" * 90)
    print("EVALUATION RESULTS ON UNSEEN TEST SET (JUNE 01 - AUGUST 31, 2020)")
    print("=" * 90)
    print(f"PR-AUC (Average Precision Score): {pr_auc:.4f} ({pr_auc*100:.2f}%)")
    print(f"PR Curve Area:                   {auc_pr:.4f}")
    
    # Threshold Tuning Table
    thresh_results = []
    print("\nTHRESHOLD PERFORMANCE TABLE (Prioritizing High Recall):")
    print("-" * 80)
    print(f"{'Threshold':<12}{'Precision':<15}{'Recall':<15}{'F1-Score':<15}{'False Alarms':<15}")
    print("-" * 80)
    
    best_thresh = 0.5
    best_f1 = 0
    
    for th in [0.50, 0.40, 0.30, 0.25, 0.20, 0.15, 0.10]:
        y_pred = (y_prob >= th).astype(int)
        rec = recall_score(y_test, y_pred)
        prec = precision_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)
        cm = confusion_matrix(y_test, y_pred)
        fp = cm[0, 1]
        
        thresh_results.append({
            'Threshold': th,
            'Precision': round(prec, 4),
            'Recall': round(rec, 4),
            'F1_Score': round(f1, 4),
            'False_Positives': int(fp),
            'True_Positives': int(cm[1, 1]),
            'False_Negatives': int(cm[1, 0])
        })
        print(f"{th:<12.2f}{prec*100:<15.2f}%{rec*100:<15.2f}%{f1:<15.4f}{fp:<15,}")
        if f1 > best_f1:
            best_f1 = f1
            best_thresh = th
    print("-" * 80)
    
    df_thresh = pd.DataFrame(thresh_results)
    df_thresh.to_csv('metropt_results/threshold_evaluation_metrics.csv', index=False)
    
    # Detailed Breakdown on Failure Events F3 and F4
    test_df['y_prob'] = y_prob
    test_df['y_pred'] = (y_prob >= 0.25).astype(int)
    
    f3_mask = (test_df['timestamp'] >= '2020-06-05 10:00:00') & (test_df['timestamp'] <= '2020-06-07 14:30:00')
    f4_mask = (test_df['timestamp'] >= '2020-07-15 14:30:00') & (test_df['timestamp'] <= '2020-07-15 19:00:00')
    norm_mask = test_df['failure_target'] == 0
    
    f3_rec = test_df.loc[f3_mask, 'y_pred'].mean() * 100
    f4_rec = test_df.loc[f4_mask, 'y_pred'].mean() * 100
    norm_spec = (1 - test_df.loc[norm_mask, 'y_pred'].mean()) * 100
    
    print("\nPER-FAILURE DETECTION BREAKDOWN (@ Threshold = 0.25):")
    print(f"-> Failure #3 (June 05 - 07, 2020, 52.5h Air Leak): {test_df.loc[f3_mask, 'y_pred'].sum():,} / {f3_mask.sum():,} ({f3_rec:.2f}% Detected)")
    print(f"-> Failure #4 (July 15, 2020, High Stress Air Leak): {test_df.loc[f4_mask, 'y_pred'].sum():,} / {f4_mask.sum():,} ({f4_rec:.2f}% Detected)")
    print(f"-> Unseen Normal Operation Specificity:              {norm_spec:.2f}% (False Alarm Rate: {100-norm_spec:.2f}%)")
    
    # ---------------------------------------------------------
    # 8. Feature Importance Ranking
    # ---------------------------------------------------------
    importances = clf.feature_importances_
    df_imp = pd.DataFrame({
        'Feature': feat_cols,
        'Importance': importances
    }).sort_values('Importance', ascending=False).reset_index(drop=True)
    
    df_imp.to_csv('metropt_results/lightgbm_feature_importances.csv', index=False)
    print("\nTOP 10 MOST INFLUENTIAL FEATURES:")
    for idx, r in df_imp.head(10).iterrows():
        print(f"  {idx+1:>2}. {r['Feature']:<25} (Splits: {r['Importance']:,})")
        
    # ---------------------------------------------------------
    # 9. Visualizations
    # ---------------------------------------------------------
    print("\nGenerating Diagnostic Visualizations...")
    
    # Figure 1: Precision-Recall Curve
    plt.figure(figsize=(8, 6))
    plt.plot(recall_curve, precision_curve, color='#1f77b4', lw=2.5, label=f'LightGBM PR Curve (PR-AUC = {pr_auc:.4f})')
    plt.axhline(test_df['failure_target'].mean(), color='navy', linestyle='--', label=f'No-Skill Baseline ({test_df["failure_target"].mean()*100:.1f}%)')
    plt.xlabel('Recall (Sensitivity: Faults Captured)', fontsize=11, fontweight='bold')
    plt.ylabel('Precision (True Faults / All Alarms)', fontsize=11, fontweight='bold')
    plt.title('Precision-Recall Curve on Unseen MetroPT Test Data\n(Evaluating Air Leak Fault Detection)', fontsize=12, fontweight='bold')
    plt.grid(True, alpha=0.3)
    plt.legend(loc='lower left', frameon=True, facecolor='white', framealpha=0.9)
    plt.tight_layout()
    plt.savefig('metropt_results/figure_1_precision_recall_curve.png', dpi=200)
    plt.close()
    
    # Figure 2: Top 15 Feature Importances
    plt.figure(figsize=(10, 6.5))
    top15 = df_imp.head(15).iloc[::-1]
    plt.barh(np.arange(len(top15)), top15['Importance'], color='#2ca02c', alpha=0.85, edgecolor='black', linewidth=0.5)
    plt.yticks(np.arange(len(top15)), top15['Feature'], fontsize=10, fontweight='semibold')
    plt.xlabel('LightGBM Feature Importance (Split Frequency)', fontsize=11, fontweight='bold')
    plt.title('Top 15 Predictive Features for Compressor Air Leak Detection', fontsize=12, fontweight='bold')
    plt.grid(axis='x', alpha=0.3)
    plt.tight_layout()
    plt.savefig('metropt_results/figure_2_feature_importances.png', dpi=200)
    plt.close()
    
    # Figure 3: Test Timeline Predictions
    # Resample to 1-minute for crisp visualization of June-August
    test_df_ts = test_df.set_index('timestamp')
    resampled_prob = test_df_ts['y_prob'].resample('10min').mean()
    resampled_true = test_df_ts['failure_target'].resample('10min').max()
    resampled_pres = test_df_ts['Reservoirs'].resample('10min').mean()
    
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(14, 7), sharex=True)
    
    ax1.plot(resampled_pres.index, resampled_pres.values, color='#4169e1', lw=1.2, label='Main Reservoir Pressure (bar)')
    ax1.set_ylabel('Reservoir Pressure (bar)', fontsize=10, fontweight='bold')
    ax1.set_title('Unseen Test Period: Sensor Pressure vs Predicted Air Leak Failure Probability (June - August 2020)', fontsize=12, fontweight='bold')
    ax1.grid(True, alpha=0.3)
    ax1.legend(loc='upper right')
    
    ax2.plot(resampled_prob.index, resampled_prob.values, color='#d62728', lw=1.5, label='LightGBM Fault Probability P(Leak)')
    ax2.fill_between(resampled_true.index, 0, resampled_true.values, color='orange', alpha=0.35, label='Ground Truth Air Leak Events (F3, F4)')
    ax2.axhline(0.25, color='black', linestyle=':', label='Operating Threshold (0.25)')
    ax2.set_ylabel('Fault Probability', fontsize=10, fontweight='bold')
    ax2.set_xlabel('Timestamp', fontsize=10, fontweight='bold')
    ax2.set_ylim(-0.05, 1.05)
    ax2.grid(True, alpha=0.3)
    ax2.legend(loc='upper right')
    
    plt.tight_layout()
    plt.savefig('metropt_results/figure_3_test_timeline_predictions.png', dpi=200)
    plt.close()
    
    print("\nPipeline completed successfully! All results saved in 'metropt_results/' folder.")

if __name__ == '__main__':
    run_pipeline()
