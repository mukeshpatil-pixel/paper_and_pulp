"""
Compressor Train A (RGC_A) - Supervised Multi-Class Dataset Generator & Direct Instrument RCA Pipeline
Generates synthetic telemetry with 5 direct instrument-specific failure RCA modes:
  0: normal_operation (All supervisory instruments and mechanical components healthy)
  1: oil_leakage (Instrument: Lube Oil Reservoir Tank & Console - level_1, temperature_30)
  2: bearing_failure (Instrument: Journal Bearing DE Pad & Sleeve - vibration_3, temperature_26)
  3: air_leakage (Instrument: Instrument Air Line & ASV Actuator - anti_surge_valve_1, vibration_4)
  4: suction_filter_choke (Instrument: Suction Strainer Basket & Header - pressure_1, flow_rate_1)

Maps all telemetry signals to sequential engineering tags:
  motor_current_1, flow_rate_1, pressure_1, pressure_4, anti_surge_valve_1,
  vibration_1, vibration_3, vibration_4, vibration_5, vibration_6,
  axial_displacement_1, temperature_26, temperature_10, temperature_30, level_1

Exports:
  - rgc_supervised_labeled_dataset.csv (Full continuous multi-fault dataset with direct RCA labels)
  - rgc_supervised_train.csv (70% Train split)
  - rgc_supervised_test.csv (30% Test split)
  - rgc_supervised_model_metrics.json (Supervised performance & confusion matrix)
  - rgc_supervised_simulation_trace.json (Step-by-step playback with direct RCA & probability vectors)
"""

import os
import json
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score, f1_score
from rgc_digital_twin_simulator import CompressorDigitalTwin, KEY_FEATURES

# Sequential tag names mapping as per RGC_A_Sequential_Tag_Mapping.csv
SEQUENTIAL_TAG_MAP = {
    'CCRNIIK001AM1.PV': 'motor_current_1',
    'CCRNFI0703BA.PV':  'flow_rate_1',
    'CCRNPI0704.PV':    'pressure_1',
    'CCRNPI0721AA.PV':  'pressure_4',
    'CCRNHIC0773A.PV':  'anti_surge_valve_1',
    'CCRNVI0780AA.PV':  'vibration_1',
    'CCRNVI0780AC.PV':  'vibration_3',
    'CCRNVI0781A.PV':   'vibration_4',
    'CCRNVI0782A.PV':   'vibration_5',
    'CCRNVI0790AA.PV':  'vibration_6',
    'CCRNZI0780A.PV':   'axial_displacement_1',
    'CCRNTI0780AA.PV':  'temperature_26',
    'CCRNTI0785AA.PV':  'temperature_10',
    'CCRNTI0781A.PV':   'temperature_30',
    'CCRNLI0760A.PV':   'level_1'
}

HUMAN_LABEL_MAP = {
    'motor_current_1': 'Motor Operating Current (A)',
    'flow_rate_1': 'Forward Gas Flow (m³/h)',
    'pressure_1': 'Suction Header Pressure (kg/cm²)',
    'pressure_4': 'Discharge Pressure (kg/cm²)',
    'anti_surge_valve_1': 'Anti-Surge Valve Opening (%)',
    'vibration_1': 'Shaft Radial Vibration NDE (µm)',
    'vibration_3': 'Shaft Radial Vibration DE (µm)',
    'vibration_4': 'Casing Vibration DE (mm/s RMS)',
    'vibration_5': 'Casing Vibration NDE (mm/s RMS)',
    'vibration_6': 'Motor Bearing Vibration (µm)',
    'axial_displacement_1': 'Rotor Axial Float (µm)',
    'temperature_26': 'Journal Bearing DE Temp (°C)',
    'temperature_10': 'Stator Winding Temp (°C)',
    'temperature_30': 'Lube Oil Supply Temp (°C)',
    'level_1': 'Lube Oil Reservoir Level (%)'
}

FAULT_CLASSES = [
    'normal_operation',
    'oil_leakage',
    'bearing_failure',
    'air_leakage',
    'suction_filter_choke'
]

FAULT_CODE_MAP = {name: i for i, name in enumerate(FAULT_CLASSES)}

INSTRUMENT_RCA_MAP = {
    'normal_operation': {
        'failed_instrument': 'None (All Supervisory Instruments Healthy)',
        'instrument_tag': 'All 15 Sensors',
        'subsystem': 'Compressor Train A Supervisory System',
        'direct_rca': 'Nominal steady-state operation. All pressures, flows, levels, and thermal indicators within design envelope.'
    },
    'oil_leakage': {
        'failed_instrument': 'Lube Oil Reservoir & Console Piping',
        'instrument_tag': 'level_1 & temperature_30',
        'subsystem': 'Lube Oil & Hydraulic Supply Skid',
        'direct_rca': 'Lube oil console piping leak or seal failure causing reservoir level drain and loss of hydrodynamic cooling capacity.'
    },
    'bearing_failure': {
        'failed_instrument': 'Journal Bearing DE Sleeve & Pad A',
        'instrument_tag': 'temperature_26 & vibration_3',
        'subsystem': 'Drive-End Rotor Bearing Housing',
        'direct_rca': 'Journal bearing babbitt metal wiping and micro-welding friction between shaft journal and bearing sleeve.'
    },
    'air_leakage': {
        'failed_instrument': 'Instrument Air Supply Line & ASV Pneumatic Positioner',
        'instrument_tag': 'anti_surge_valve_1 & vibration_4',
        'subsystem': 'Pneumatic Actuation & Anti-Surge Control',
        'direct_rca': 'Instrument air supply line leak or actuator diaphragm rupture causing pneumatic pressure loss, dropping anti-surge valve into bypass.'
    },
    'suction_filter_choke': {
        'failed_instrument': 'Suction Line Strainer Basket & Mesh Filter',
        'instrument_tag': 'pressure_1 & flow_rate_1',
        'subsystem': 'Compressor Suction Header & Gas Intake',
        'direct_rca': 'Suction filter basket choked by particulate debris/fines, inducing gas starvation and high compression head.'
    }
}

def inject_oil_leakage_fault(df, start_idx, duration=576, severity=1.0):
    """
    RCA Fault: oil_leakage (Instrument: Lube Oil Tank Console - level_1, temperature_30)
    """
    end_idx = min(start_idx + duration, len(df))
    actual_len = end_idx - start_idx
    ramp = np.linspace(0.15, 1.0, actual_len)

    # 1. Reservoir level decay (-26% * severity)
    df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNLI0760A.PV')] -= (26.0 * severity) * ramp

    # 2. Lube oil header temp rise (+11.5°C * severity)
    df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNTI0781A.PV')] += (11.5 * severity) * ramp

    # 3. Journal bearing temperature rise (+14.0°C * severity)
    df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNTI0780AA.PV')] += (14.0 * severity) * ramp

    # 4. Radial vibration increase (+12 µm * severity)
    df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNVI0780AC.PV')] += (12.0 * severity) * ramp
    df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNVI0780AA.PV')] += (10.5 * severity) * ramp

    # Multi-class ground truth
    df.iloc[start_idx:end_idx, df.columns.get_loc('fault_class')] = 'oil_leakage'
    df.iloc[start_idx:end_idx, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['oil_leakage']
    df.iloc[start_idx:end_idx, df.columns.get_loc('anomaly_label')] = 1

def generate_multi_fault_time_series(twin, n_steps=6000, start_dt=datetime(2022, 2, 1, 0, 0), seed=42):
    """
    Generates a continuous synthetic stream containing repeated episodes of each fault mode
    across both train (0-4200) and test (4200-6000) segments with direct RCA labels.
    """
    df = twin.generate_normal_series(n_steps=n_steps, start_dt=start_dt, seed=seed)
    df['fault_class'] = 'normal_operation'
    df['fault_code'] = FAULT_CODE_MAP['normal_operation']
    df['anomaly_label'] = 0

    # --- TRAINING WINDOW (0 to 4200) ---
    # Train 1: oil_leakage (Steps 500 - 850)
    inject_oil_leakage_fault(df, start_idx=500, duration=350, severity=1.0)

    # Train 2: air_leakage (Pneumatic air loss causing ASV drop, Steps 1300 - 1650)
    twin.inject_antisurge_recycle_fault(df, start_idx=1300, duration=350, severity=1.0)
    df.iloc[1300:1650, df.columns.get_loc('fault_class')] = 'air_leakage'
    df.iloc[1300:1650, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['air_leakage']

    # Train 3: bearing_failure (Journal babbit friction, Steps 2100 - 2450)
    twin.inject_bearing_wear_fault(df, start_idx=2100, duration=350, severity=1.0)
    df.iloc[2100:2450, df.columns.get_loc('fault_class')] = 'bearing_failure'
    df.iloc[2100:2450, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['bearing_failure']

    # Train 4: suction_filter_choke (Steps 2900 - 3250)
    twin.inject_suction_choke_fault(df, start_idx=2900, duration=350, severity=1.0)
    df.iloc[2900:3250, df.columns.get_loc('fault_class')] = 'suction_filter_choke'
    df.iloc[2900:3250, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['suction_filter_choke']

    # Train 5: Repeat oil_leakage (Steps 3600 - 3900)
    inject_oil_leakage_fault(df, start_idx=3600, duration=300, severity=0.9)

    # --- TESTING UNSEEN WINDOW (4200 to 6000) ---
    # Test 1: oil_leakage (Steps 4350 - 4600)
    inject_oil_leakage_fault(df, start_idx=4350, duration=250, severity=0.95)

    # Test 2: air_leakage (Steps 4750 - 5000)
    twin.inject_antisurge_recycle_fault(df, start_idx=4750, duration=250, severity=0.95)
    df.iloc[4750:5000, df.columns.get_loc('fault_class')] = 'air_leakage'
    df.iloc[4750:5000, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['air_leakage']

    # Test 3: bearing_failure (Steps 5150 - 5400)
    twin.inject_bearing_wear_fault(df, start_idx=5150, duration=250, severity=0.9)
    df.iloc[5150:5400, df.columns.get_loc('fault_class')] = 'bearing_failure'
    df.iloc[5150:5400, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['bearing_failure']

    # Test 4: suction_filter_choke (Steps 5550 - 5800)
    twin.inject_suction_choke_fault(df, start_idx=5550, duration=250, severity=0.9)
    df.iloc[5550:5800, df.columns.get_loc('fault_class')] = 'suction_filter_choke'
    df.iloc[5550:5800, df.columns.get_loc('fault_code')] = FAULT_CODE_MAP['suction_filter_choke']

    return df

def run_pipeline():
    print("=" * 80)
    print("COMPRESSOR TRAIN A (RGC_A) - DIRECT INSTRUMENT RCA PIPELINE")
    print("=" * 80)

    # 1. Initialize digital twin
    twin = CompressorDigitalTwin()

    # 2. Generate 6000 steps continuous telemetry (~21 days @ 5-min intervals)
    raw_df = generate_multi_fault_time_series(twin, n_steps=6000, start_dt=datetime(2022, 2, 1, 0, 0), seed=42)

    # 3. Rename columns to sequential tag names
    df_seq = raw_df.rename(columns=SEQUENTIAL_TAG_MAP)
    
    # Add explicit Instrument RCA columns to the CSV
    df_seq['failed_instrument'] = df_seq['fault_class'].apply(lambda x: INSTRUMENT_RCA_MAP[x]['failed_instrument'])
    df_seq['primary_instrument_tag'] = df_seq['fault_class'].apply(lambda x: INSTRUMENT_RCA_MAP[x]['instrument_tag'])
    df_seq['direct_rca'] = df_seq['fault_class'].apply(lambda x: INSTRUMENT_RCA_MAP[x]['direct_rca'])

    # Save complete labeled dataset
    dataset_file = 'rgc_supervised_labeled_dataset.csv'
    df_seq.to_csv(dataset_file)
    print(f"-> Saved full supervised dataset: {dataset_file} ({df_seq.shape[0]} rows, {df_seq.shape[1]} cols)")

    # 4. 70-30 Chronological Split
    split_idx = int(len(df_seq) * 0.70)
    df_train = df_seq.iloc[:split_idx].copy()
    df_test = df_seq.iloc[split_idx:].copy()

    train_file = 'rgc_supervised_train.csv'
    test_file = 'rgc_supervised_test.csv'
    df_train.to_csv(train_file)
    df_test.to_csv(test_file)
    print(f"-> Saved 70% Train split: {train_file} ({df_train.shape[0]} samples)")
    print(f"-> Saved 30% Test split:  {test_file} ({df_test.shape[0]} samples)")

    # Display class balance
    print("\nClass distribution in Training:")
    print(df_train['fault_class'].value_counts())
    print("\nClass distribution in Testing:")
    print(df_test['fault_class'].value_counts())

    # 5. Train Supervised Multi-Class Random Forest Model
    feature_cols = [SEQUENTIAL_TAG_MAP[k] for k in KEY_FEATURES]
    X_train = df_train[feature_cols].values
    y_train = df_train['fault_code'].values
    X_test = df_test[feature_cols].values
    y_test = df_test['fault_code'].values

    clf = RandomForestClassifier(n_estimators=100, max_depth=12, random_state=42, n_jobs=-1)
    clf.fit(X_train, y_train)

    # 6. Evaluate Model on Unseen Test Split
    y_pred = clf.predict(X_test)
    y_proba = clf.predict_proba(X_test)

    acc = accuracy_score(y_test, y_pred)
    macro_f1 = f1_score(y_test, y_pred, average='macro')
    cm = confusion_matrix(y_test, y_pred, labels=[0, 1, 2, 3, 4]).tolist()
    report = classification_report(y_test, y_pred, labels=[0, 1, 2, 3, 4], target_names=FAULT_CLASSES, output_dict=True)

    print("\n" + "=" * 50)
    print(f"SUPERVISED EVALUATION ACCURACY: {acc * 100:.2f}% | MACRO F1: {macro_f1:.4f}")
    print("=" * 50)
    for cls in FAULT_CLASSES:
        m = report[cls]
        print(f"  {cls:<24} Precision: {m['precision']*100:5.1f}% | Recall: {m['recall']*100:5.1f}% | F1: {m['f1-score']*100:5.1f}% | Support: {int(m['support'])}")

    # Feature importances
    importances = [
        {
            'feature': feat,
            'label': HUMAN_LABEL_MAP[feat],
            'importance': round(float(imp), 4)
        }
        for feat, imp in sorted(zip(feature_cols, clf.feature_importances_), key=lambda x: x[1], reverse=True)
    ]

    # Save metrics JSON
    metrics_summary = {
        'model_name': 'Supervised Multi-Class Random Forest',
        'accuracy': round(acc, 4),
        'macro_f1': round(macro_f1, 4),
        'target_classes': FAULT_CLASSES,
        'confusion_matrix': cm,
        'classification_report': report,
        'feature_importances': importances,
        'train_samples': len(df_train),
        'test_samples': len(df_test)
    }

    with open('rgc_supervised_model_metrics.json', 'w', encoding='utf-8') as f:
        json.dump(metrics_summary, f, indent=2)
    print("-> Saved rgc_supervised_model_metrics.json")

    # 7. Generate Demonstration Live Playback Trace (180 Steps)
    # Timeline:
    # 0 - 25:   normal_operation
    # 26 - 55:  Fault 1: oil_leakage (Lube console drain leak, level falls, oil temp climbs)
    # 56 - 75:  Normal recovery (Level restored, oil flushed)
    # 76 - 105: Fault 2: bearing_failure (Journal babbit friction, radial vibs spike)
    # 106 - 125: Normal recovery (Bearing inspected, lube balanced)
    # 126 - 150: Fault 3: air_leakage (Instrument air pressure loss, ASV drops, casing rumble)
    # 151 - 165: Normal recovery
    # 166 - 180: Fault 4: suction_filter_choke (Suction pressure drop, motor stator temp rise)
    demo_steps = 180
    demo_df = twin.generate_normal_series(n_steps=demo_steps, start_dt=datetime(2022, 3, 1, 8, 0), seed=999)
    demo_df['fault_class'] = 'normal_operation'
    demo_df['fault_code'] = 0
    demo_df['anomaly_label'] = 0

    # Inject Fault 1: oil_leakage (26 to 50, recover 51-55)
    inject_oil_leakage_fault(demo_df, start_idx=26, duration=25, severity=1.0)

    # Inject Fault 2: bearing_failure (76 to 100, recover 101-105)
    twin.inject_bearing_wear_fault(demo_df, start_idx=76, duration=25, severity=1.0)
    demo_df.iloc[76:101, demo_df.columns.get_loc('fault_class')] = 'bearing_failure'
    demo_df.iloc[76:101, demo_df.columns.get_loc('fault_code')] = 2

    # Inject Fault 3: air_leakage (126 to 145, recover 146-150)
    twin.inject_antisurge_recycle_fault(demo_df, start_idx=126, duration=20, severity=1.0)
    demo_df.iloc[126:146, demo_df.columns.get_loc('fault_class')] = 'air_leakage'
    demo_df.iloc[126:146, demo_df.columns.get_loc('fault_code')] = 3

    # Inject Fault 4: suction_filter_choke (160 to 175)
    twin.inject_suction_choke_fault(demo_df, start_idx=160, duration=16, severity=1.0)
    demo_df.iloc[160:176, demo_df.columns.get_loc('fault_class')] = 'suction_filter_choke'
    demo_df.iloc[160:176, demo_df.columns.get_loc('fault_code')] = 4

    # Map sequential columns for inference
    demo_df_seq = demo_df.rename(columns=SEQUENTIAL_TAG_MAP)

    means = twin.means
    stds = twin.stds

    trace_records = []
    for step_idx in range(demo_steps):
        row = demo_df_seq.iloc[step_idx]
        x_vec = row[feature_cols].values.reshape(1, -1)
        
        # Supervised probabilities across all 5 classes
        probs = clf.predict_proba(x_vec)[0]
        # Ensure all 5 classes are present
        class_prob_map = {cls: 0.0 for cls in FAULT_CLASSES}
        for c_idx, prob in enumerate(probs):
            cls_name = FAULT_CLASSES[clf.classes_[c_idx]]
            class_prob_map[cls_name] = round(float(prob) * 100, 1)

        predicted_code = int(clf.predict(x_vec)[0])
        predicted_class = FAULT_CLASSES[predicted_code]
        confidence = float(class_prob_map[predicted_class])

        true_class = str(row['fault_class'])
        true_code = int(row['fault_code'])

        # Feature deviations (Z-scores) from nominal means
        z_scores = (x_vec[0] - means) / np.maximum(stds, 1e-4)
        top_feat_indices = np.argsort(np.abs(z_scores))[::-1]

        top_attributions = []
        for rank, f_idx in enumerate(top_feat_indices[:5]):
            f_tag = feature_cols[f_idx]
            top_attributions.append({
                'rank': rank + 1,
                'tag': f_tag,
                'name': HUMAN_LABEL_MAP[f_tag],
                'current_value': round(float(x_vec[0, f_idx]), 2),
                'baseline_mean': round(float(means[f_idx]), 2),
                'z_score': round(float(z_scores[f_idx]), 2),
                'direction': 'HIGH' if z_scores[f_idx] > 0 else 'LOW'
            })

        # Non-technical Executive & Operator Diagnosis with Direct Instrument RCA
        diagnosis = generate_direct_instrument_rca(predicted_class, confidence, top_attributions)

        # Snapshot of sensors with human friendly sequential naming
        sensors_snapshot = {
            'motor_current_1': round(float(row['motor_current_1']), 2),
            'flow_rate_1': round(float(row['flow_rate_1']), 2),
            'pressure_1': round(float(row['pressure_1']), 2),
            'pressure_4': round(float(row['pressure_4']), 2),
            'anti_surge_valve_1': round(float(row['anti_surge_valve_1']), 1),
            'vibration_1': round(float(row['vibration_1']), 2),
            'vibration_3': round(float(row['vibration_3']), 2),
            'vibration_4': round(float(row['vibration_4']), 2),
            'vibration_5': round(float(row['vibration_5']), 2),
            'vibration_6': round(float(row['vibration_6']), 2),
            'axial_displacement_1': round(float(row['axial_displacement_1']), 2),
            'temperature_26': round(float(row['temperature_26']), 1),
            'temperature_10': round(float(row['temperature_10']), 1),
            'temperature_30': round(float(row['temperature_30']), 1),
            'level_1': round(float(row['level_1']), 1)
        }

        trace_records.append({
            'step': step_idx,
            'timestamp': str(demo_df_seq.index[step_idx].strftime('%Y-%m-%d %H:%M')),
            'ground_truth': {
                'fault_code': true_code,
                'fault_class': true_class
            },
            'supervised_inference': {
                'predicted_code': predicted_code,
                'predicted_class': predicted_class,
                'confidence': confidence,
                'probabilities': class_prob_map,
                'status_theme': get_status_theme(predicted_class)
            },
            'top_attributions': top_attributions,
            'diagnosis': diagnosis,
            'sensors': sensors_snapshot
        })

    trace_file = 'rgc_supervised_simulation_trace.json'
    with open(trace_file, 'w', encoding='utf-8') as f:
        json.dump(trace_records, f, indent=2)
    print(f"-> Generated {len(trace_records)} supervised simulation steps into {trace_file}")

def get_status_theme(predicted_class):
    mapping = {
        'normal_operation': {'color': 'emerald', 'badge': 'HEALTHY', 'icon': '🟢', 'display_name': 'Normal Operation'},
        'oil_leakage': {'color': 'orange', 'badge': 'OIL LEAK', 'icon': '🟠', 'display_name': 'Oil Leakage'},
        'bearing_failure': {'color': 'rose', 'badge': 'BEARING FAILURE', 'icon': '🔴', 'display_name': 'Bearing Failure'},
        'air_leakage': {'color': 'purple', 'badge': 'AIR LEAKAGE', 'icon': '🟣', 'display_name': 'Air Leakage'},
        'suction_filter_choke': {'color': 'amber', 'badge': 'FILTER CHOKE', 'icon': '🟡', 'display_name': 'Suction Filter Choke'}
    }
    return mapping.get(predicted_class, {'color': 'slate', 'badge': 'UNKNOWN', 'icon': '⚪', 'display_name': predicted_class})

def generate_direct_instrument_rca(predicted_class, confidence, attributions):
    """
    Produces direct instrument-level Root Cause Analysis (RCA) and non-technical explanations.
    """
    if predicted_class == 'normal_operation':
        return {
            'headline': 'Normal Operating Regime — All Instruments Calibrated & Healthy',
            'severity': 'NOMINAL',
            'failed_instrument': 'None (All 15 Supervisory Instruments Healthy)',
            'instrument_tag': 'All 15 Sensors Normal',
            'direct_rca': 'Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.',
            'business_impact': 'Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.',
            'recommended_action': 'Routine monitoring. No operator or maintenance intervention required.'
        }
    
    if predicted_class == 'oil_leakage':
        return {
            'headline': f'🚨 Direct RCA: Oil Leakage in Lube Console ({confidence:.1f}% Confidence)',
            'severity': 'CRITICAL',
            'failed_instrument': 'Lube Oil Reservoir Level & Supply Header Piping',
            'instrument_tag': 'level_1 (Level) & temperature_30 (Supply Temp)',
            'direct_rca': 'Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5°C, confirming an external hydraulic oil leak on the lube console skid.',
            'business_impact': 'Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).',
            'recommended_action': 'Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir.'
        }

    if predicted_class == 'bearing_failure':
        return {
            'headline': f'🚨 Direct RCA: Journal Bearing Failure (DE Pad A) ({confidence:.1f}% Confidence)',
            'severity': 'EMERGENCY',
            'failed_instrument': 'Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)',
            'instrument_tag': 'temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)',
            'direct_rca': 'Drive-End radial shaft vibration (vibration_3) surged to 45-70 µm while journal pad temperature (temperature_26) spiked +24°C, proving active babbitt metal micro-welding and mechanical sleeve wear.',
            'business_impact': 'Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.',
            'recommended_action': 'Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement.'
        }

    if predicted_class == 'air_leakage':
        return {
            'headline': f'⚠️ Direct RCA: Air Leakage in Pneumatic Actuator Supply ({confidence:.1f}% Confidence)',
            'severity': 'HIGH_ALERT',
            'failed_instrument': 'Instrument Air Pneumatic Supply Tubing & ASV Positioner',
            'instrument_tag': 'anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)',
            'direct_rca': 'Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5σ and triggering casing acoustic vibration.',
            'business_impact': '15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.',
            'recommended_action': 'Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS.'
        }

    if predicted_class == 'suction_filter_choke':
        return {
            'headline': f'⚠️ Direct RCA: Suction Strainer Filter Choke ({confidence:.1f}% Confidence)',
            'severity': 'WARNING',
            'failed_instrument': 'Suction Header Strainer Basket & Mesh Filter',
            'instrument_tag': 'pressure_1 (Suction Press) & flow_rate_1 (Flow)',
            'direct_rca': 'Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15σ and starving gas flow, forcing motor into severe thermal head ratio.',
            'business_impact': 'Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).',
            'recommended_action': 'Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling.'
        }

    return {
        'headline': f'⚠️ Direct RCA: Instrument Telemetry Deviation ({confidence:.1f}% Confidence)',
        'severity': 'WARNING',
        'failed_instrument': 'Telemetry Transmitter',
        'instrument_tag': attributions[0]['tag'],
        'direct_rca': f"Abnormal sensor deviation detected on {attributions[0]['name']}.",
        'business_impact': 'Potential process instability.',
        'recommended_action': 'Cross-reference transmitter calibration.'
    }

if __name__ == '__main__':
    run_pipeline()
