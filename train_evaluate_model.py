"""
Trains Isolation Forest on Synthetic & Baseline Normal Data,
Evaluates on Unseen Synthetic Normal and Multi-Fault Abnormal Test Sets,
Computes PR-AUC, F1, Recall, Precision, Confusion Matrix, and saves plots.
"""

import os
import json
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from sklearn.ensemble import IsolationForest
from sklearn.metrics import (
    precision_score, recall_score, f1_score,
    roc_auc_score, average_precision_score,
    confusion_matrix, classification_report
)

KEY_FEATURES = [
    'CCRNIIK001AM1.PV',
    'CCRNFI0703BA.PV',
    'CCRNPI0704.PV',
    'CCRNPI0721AA.PV',
    'CCRNHIC0773A.PV',
    'CCRNVI0780AA.PV',
    'CCRNVI0780AC.PV',
    'CCRNVI0781A.PV',
    'CCRNVI0782A.PV',
    'CCRNVI0790AA.PV',
    'CCRNZI0780A.PV',
    'CCRNTI0780AA.PV',
    'CCRNTI0785AA.PV',
    'CCRNTI0781A.PV',
    'CCRNLI0760A.PV'
]

def train_and_evaluate():
    print("="*80)
    print("TRAINING & EVALUATION OF ISOLATION FOREST ON SYNTHETIC BENCHMARK")
    print("="*80)

    # 1. Load training data
    df_train = pd.read_csv('synthetic_normal_train.csv', index_col=0, parse_dates=True)
    X_train = df_train[KEY_FEATURES].values
    print(f"Loaded Training Data: {X_train.shape} (100% Normal Baseline)")

    # 2. Train Isolation Forest
    # Using n_estimators=150, contamination=0.01 (1% nominal baseline outlier tolerance)
    model = IsolationForest(
        n_estimators=150,
        contamination=0.01,
        max_samples='auto',
        random_state=42,
        n_jobs=-1
    )
    t0 = pd.Timestamp.now()
    model.fit(X_train)
    fit_duration = (pd.Timestamp.now() - t0).total_seconds()
    print(f"Trained IsolationForest in {fit_duration:.2f} seconds.")

    # 3. Evaluate on Unseen Synthetic Normal Test Set
    df_norm_test = pd.read_csv('synthetic_normal_test.csv', index_col=0, parse_dates=True)
    X_norm_test = df_norm_test[KEY_FEATURES].values
    norm_scores = model.decision_function(X_norm_test)
    norm_preds = (norm_scores < 0).astype(int)  # 1 = Anomaly, 0 = Normal
    
    fp_count = norm_preds.sum()
    norm_specificity = 1.0 - (fp_count / len(norm_preds))
    print(f"\n--- 1. Unseen Normal Test Evaluation ({len(X_norm_test)} samples) ---")
    print(f"False Positives: {fp_count} / {len(norm_preds)}")
    print(f"Specificity (True Negative Rate): {norm_specificity * 100:.2f}%")
    print(f"False Alarm Rate (FAR): {(1 - norm_specificity) * 100:.2f}%")

    # 4. Evaluate on Synthetic Multi-Fault Abnormal Test Set
    df_abnormal = pd.read_csv('synthetic_abnormal_test.csv', index_col=0, parse_dates=True)
    X_abnormal = df_abnormal[KEY_FEATURES].values
    y_true = df_abnormal['anomaly_label'].values
    fault_types = df_abnormal['fault_type'].values

    raw_scores = model.decision_function(X_abnormal)
    # Decision function: positive for normal, negative for anomaly.
    # Anomaly score: invert so that higher score = higher anomaly severity:
    anomaly_scores = -raw_scores
    preds = (raw_scores < 0).astype(int)

    precision = precision_score(y_true, preds)
    recall = recall_score(y_true, preds)
    f1 = f1_score(y_true, preds)
    pr_auc = average_precision_score(y_true, anomaly_scores)
    roc_auc = roc_auc_score(y_true, anomaly_scores)
    cm = confusion_matrix(y_true, preds)

    print(f"\n--- 2. Synthetic Multi-Fault Test Evaluation ({len(X_abnormal)} samples) ---")
    print(f"Overall Recall (Detection Rate): {recall * 100:.2f}%")
    print(f"Overall Precision:             {precision * 100:.2f}%")
    print(f"Overall F1-Score:              {f1:.4f}")
    print(f"Precision-Recall AUC (PR-AUC): {pr_auc:.4f}")
    print(f"ROC-AUC:                       {roc_auc:.4f}")
    print("\nConfusion Matrix:")
    print(f"  TN: {cm[0, 0]:5d} | FP: {cm[0, 1]:5d}")
    print(f"  FN: {cm[1, 0]:5d} | TP: {cm[1, 1]:5d}")

    # Fault-specific breakdown
    print("\n--- 3. Fault-Specific Breakdown ---")
    fault_breakdown = {}
    for ftype in ['anti_surge_recycle_jam', 'bearing_wear_thermal_friction', 'suction_filter_choke']:
        mask = (fault_types == ftype)
        if mask.sum() > 0:
            rec = preds[mask].sum() / mask.sum()
            fault_breakdown[ftype] = {
                'samples': int(mask.sum()),
                'detected': int(preds[mask].sum()),
                'recall': float(rec)
            }
            print(f"  {ftype:32s}: Detected {preds[mask].sum():4d}/{mask.sum():4d} ({rec*100:.1f}%)")

    # 5. Export metrics to JSON
    metrics = {
        'training_samples': len(X_train),
        'features_count': len(KEY_FEATURES),
        'unseen_normal_samples': len(X_norm_test),
        'unseen_normal_specificity': float(norm_specificity),
        'unseen_normal_false_alarm_rate': float(1.0 - norm_specificity),
        'abnormal_test_samples': len(X_abnormal),
        'precision': float(precision),
        'recall': float(recall),
        'f1_score': float(f1),
        'pr_auc': float(pr_auc),
        'roc_auc': float(roc_auc),
        'confusion_matrix': {
            'tn': int(cm[0, 0]),
            'fp': int(cm[0, 1]),
            'fn': int(cm[1, 0]),
            'tp': int(cm[1, 1])
        },
        'fault_breakdown': fault_breakdown
    }

    with open('model_evaluation_metrics.json', 'w', encoding='utf-8') as f:
        json.dump(metrics, f, indent=2)
    print("\n-> Saved model_evaluation_metrics.json successfully.")

    # 6. Generate Diagnostic Plots
    generate_evaluation_plots(df_norm_test, norm_scores, df_abnormal, raw_scores, y_true, preds, cm)

    return model, metrics

def generate_evaluation_plots(df_norm, norm_scores, df_abn, abn_scores, y_true, preds, cm):
    os.makedirs('anomaly_detection_results', exist_ok=True)
    
    # FIGURE A: Score Distribution Comparison
    fig, ax = plt.subplots(figsize=(10, 5), dpi=150)
    ax.hist(norm_scores, bins=40, density=True, alpha=0.6, color='#10b981', label=f'Unseen Normal (n={len(norm_scores)})')
    
    abn_normal_phase = abn_scores[y_true == 0]
    abn_fault_phase = abn_scores[y_true == 1]
    
    ax.hist(abn_fault_phase, bins=40, density=True, alpha=0.6, color='#ef4444', label=f'Injected Faults (n={len(abn_fault_phase)})')
    ax.axvline(0, color='#f59e0b', linestyle='--', linewidth=2, label='Decision Boundary (Threshold = 0.0)')
    
    ax.set_title('Isolation Forest Score Separation on Synthetic Benchmark\nHealthy Normal vs Multi-Fault Injections', fontsize=12, fontweight='bold', pad=12)
    ax.set_xlabel('Raw Decision Function Score (s > 0: Normal, s < 0: Anomaly)', fontsize=10)
    ax.set_ylabel('Probability Density', fontsize=10)
    ax.legend(frameon=True, facecolor='#1e293b', edgecolor='#334155', labelcolor='white')
    ax.set_facecolor('#0f172a')
    fig.patch.set_facecolor('#0b1120')
    ax.tick_params(colors='white')
    for spine in ax.spines.values():
        spine.set_color('#334155')
    ax.grid(True, linestyle=':', alpha=0.3, color='#475569')
    fig.tight_layout()
    fig.savefig('anomaly_detection_results/synthetic_score_distribution.png')
    plt.close(fig)
    print("-> Saved anomaly_detection_results/synthetic_score_distribution.png")

    # FIGURE B: Multi-Panel Fault Injection Timeline
    fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, figsize=(14, 11), sharex=True, dpi=150)
    
    t = df_abn.index
    
    # Panel 1: Inverted Anomaly Score
    anomaly_severity = -abn_scores
    ax1.plot(t, anomaly_severity, color='#38bdf8', linewidth=1.2, label='Anomaly Severity (-Score)')
    ax1.axhline(0, color='#f59e0b', linestyle='--', label='Anomaly Alarm Threshold (0.0)')
    ax1.fill_between(t, 0, anomaly_severity, where=(anomaly_severity > 0), color='#ef4444', alpha=0.3, label='Alarm Triggered')
    ax1.set_ylabel('Anomaly Severity', fontsize=9, color='white')
    ax1.set_title('Digital Twin Synthetic Simulation: Multi-Fault Ingestion Timeline & Root Causes', fontsize=12, fontweight='bold', color='white', pad=10)
    ax1.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)
    
    # Panel 2: Anti-Surge Valve & Net Flow
    ax2.plot(t, df_abn['CCRNHIC0773A.PV'], color='#f59e0b', linewidth=1.2, label='Anti-Surge Valve (%)')
    ax2_r = ax2.twinx()
    ax2_r.plot(t, df_abn['CCRNFI0703BA.PV'], color='#34d399', linewidth=1.2, label='Forward Flow (m3/h)')
    ax2.set_ylabel('Valve Position (%)', fontsize=9, color='#f59e0b')
    ax2_r.set_ylabel('Flow (m3/h)', fontsize=9, color='#34d399')
    ax2.legend(loc='upper left', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)
    ax2_r.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)

    # Panel 3: Casing Vibration & Radial Vibration
    ax3.plot(t, df_abn['CCRNVI0781A.PV'], color='#f43f5e', linewidth=1.2, label='Casing Vib DE (mm/s RMS)')
    ax3.axhline(4.5, color='#fb923c', linestyle=':', label='ISO Zone C/D Limit (4.5 mm/s)')
    ax3_r = ax3.twinx()
    ax3_r.plot(t, df_abn['CCRNVI0780AA.PV'], color='#c084fc', linewidth=1.2, label='Radial Vib NDE (um)')
    ax3.set_ylabel('Casing Vib (mm/s)', fontsize=9, color='#f43f5e')
    ax3_r.set_ylabel('Radial Vib (um)', fontsize=9, color='#c084fc')
    ax3.legend(loc='upper left', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)
    ax3_r.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)

    # Panel 4: Journal Bearing Temp & Suction Pressure
    ax4.plot(t, df_abn['CCRNTI0780AA.PV'], color='#fbbf24', linewidth=1.2, label='Bearing DE Temp (°C)')
    ax4_r = ax4.twinx()
    ax4_r.plot(t, df_abn['CCRNPI0704.PV'], color='#60a5fa', linewidth=1.2, label='Suction Pressure (kg/cm2)')
    ax4.set_ylabel('Temp (°C)', fontsize=9, color='#fbbf24')
    ax4_r.set_ylabel('Suction (kg/cm2)', fontsize=9, color='#60a5fa')
    ax4.legend(loc='upper left', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)
    ax4_r.legend(loc='upper right', facecolor='#1e293b', edgecolor='#334155', labelcolor='white', fontsize=8)

    for ax in [ax1, ax2, ax3, ax4]:
        ax.set_facecolor('#0f172a')
        ax.tick_params(colors='white')
        ax.grid(True, linestyle=':', alpha=0.3, color='#475569')
        for spine in ax.spines.values():
            spine.set_color('#334155')

    fig.patch.set_facecolor('#0b1120')
    fig.tight_layout()
    fig.savefig('anomaly_detection_results/synthetic_fault_timeline.png')
    plt.close(fig)
    print("-> Saved anomaly_detection_results/synthetic_fault_timeline.png")

if __name__ == '__main__':
    train_and_evaluate()
