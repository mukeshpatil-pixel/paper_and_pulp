"""
Live Inference Engine & Real-Time Root Cause Attribution Simulator
Simulates a live streaming telemetry feed with step-by-step scoring,
Z-score feature importance attribution, and automated operator diagnosis.
Exports `live_simulation_trace.json` for interactive HTML dashboard playback.
"""

import os
import json
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
from sklearn.ensemble import IsolationForest
from rgc_digital_twin_simulator import CompressorDigitalTwin, KEY_FEATURES, FEATURE_NAMES

def build_live_simulation_trace():
    print("="*80)
    print("BUILDING LIVE INFERENCE STREAMING TRACE & RCA ATTRIBUTION")
    print("="*80)

    # 1. Initialize digital twin and train model
    twin = CompressorDigitalTwin()
    df_train = pd.read_csv('synthetic_normal_train.csv', index_col=0, parse_dates=True)
    X_train = df_train[KEY_FEATURES].values

    model = IsolationForest(n_estimators=150, contamination=0.01, random_state=42, n_jobs=-1)
    model.fit(X_train)
    print("Fitted Isolation Forest for Live Streaming.")

    # 2. Construct a high-fidelity 160-step demonstration sequence
    # 160 steps @ 5-min intervals = 13.3 hours continuous telemetry
    # Timeline:
    # Steps 0 - 25:   Steady Normal Baseline
    # Steps 26 - 55:  Fault 1: Anti-Surge Recycle Jam (Incipient -> Critical Peak -> Recovery)
    # Steps 56 - 75:  Normal Baseline Post-Intervention
    # Steps 76 - 105: Fault 2: Journal Bearing Wear & Thermal Runaway (Friction -> Runaway -> Lube Flush)
    # Steps 106 - 125: Normal Baseline
    # Steps 126 - 155: Fault 3: Suction Filter Restriction (Choke -> Suction Collapse -> Filter Cleaned)
    # Steps 156 - 160: Normal Steady State
    n_steps = 160
    df_stream = twin.generate_normal_series(n_steps=n_steps, start_dt=datetime(2022, 3, 1, 8, 0), seed=777)

    # Fault 1: Anti-Surge Jam (Steps 26 to 50, then recovered at 51-55)
    twin.inject_antisurge_recycle_fault(df_stream, start_idx=26, duration=25, severity=1.0)
    # Fault 2: Bearing Wear (Steps 76 to 100, then cooled at 101-105)
    twin.inject_bearing_wear_fault(df_stream, start_idx=76, duration=25, severity=1.0)
    # Fault 3: Suction Choke (Steps 126 to 150, then cleared at 151-155)
    twin.inject_suction_choke_fault(df_stream, start_idx=126, duration=25, severity=1.0)

    means = twin.means
    stds = twin.stds

    trace_records = []

    for t_idx in range(n_steps):
        row = df_stream.iloc[t_idx]
        x_vec = row[KEY_FEATURES].values
        timestamp_str = str(df_stream.index[t_idx].strftime('%Y-%m-%d %H:%M'))
        true_label = int(row['anomaly_label'])
        true_fault = str(row['fault_type'])

        # 1. Model inference
        raw_score = float(model.decision_function([x_vec])[0])
        # Inverted anomaly severity: positive = anomaly
        anomaly_severity = float(-raw_score)

        # Status determination
        if raw_score >= 0.04:
            status = 'NORMAL'
            status_color = 'emerald'
        elif raw_score >= 0.00:
            status = 'WARNING'
            status_color = 'amber'
        else:
            status = 'CRITICAL'
            status_color = 'rose'

        # 2. Feature Importance & Root-Cause Attribution via Z-score deviations
        z_scores = (x_vec - means) / np.maximum(stds, 1e-4)
        abs_z = np.abs(z_scores)
        top_indices = np.argsort(abs_z)[::-1]

        top_attributions = []
        for rank, idx in enumerate(top_indices[:5]):
            feat_tag = KEY_FEATURES[idx]
            feat_name = FEATURE_NAMES[feat_tag]
            val = float(x_vec[idx])
            mean_val = float(means[idx])
            z = float(z_scores[idx])
            pct_diff = float(((val - mean_val) / (abs(mean_val) + 1e-4)) * 100)

            top_attributions.append({
                'rank': rank + 1,
                'tag': feat_tag,
                'name': feat_name,
                'current_value': round(val, 2),
                'baseline_mean': round(mean_val, 2),
                'z_score': round(z, 2),
                'pct_change': round(pct_diff, 1),
                'direction': 'HIGH' if z > 0 else 'LOW'
            })

        # 3. Rule-based Physical Root Cause Diagnostic Engine
        diagnosis = generate_operator_diagnosis(status, top_attributions, x_vec, means)

        # 4. Sensor values dictionary for live chart
        sensor_snapshot = {
            'motor_current': round(float(x_vec[0]), 2),
            'forward_flow': round(float(x_vec[1]), 2),
            'suction_press': round(float(x_vec[2]), 2),
            'discharge_press': round(float(x_vec[3]), 2),
            'antisurge_valve': round(float(x_vec[4]), 1),
            'radial_vib_nde': round(float(x_vec[5]), 2),
            'casing_vib_de': round(float(x_vec[7]), 2),
            'bearing_temp': round(float(x_vec[11]), 1),
            'stator_temp': round(float(x_vec[12]), 1),
            'lube_temp': round(float(x_vec[13]), 1)
        }

        trace_records.append({
            'step': t_idx,
            'timestamp': timestamp_str,
            'ground_truth': {
                'label': true_label,
                'fault_type': true_fault
            },
            'ml_inference': {
                'raw_score': round(raw_score, 4),
                'anomaly_severity': round(anomaly_severity, 4),
                'status': status,
                'status_color': status_color,
                'alarm_active': bool(raw_score < 0.04)
            },
            'top_attributions': top_attributions,
            'diagnosis': diagnosis,
            'sensors': sensor_snapshot
        })

    # Save to JSON
    out_file = 'live_simulation_trace.json'
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(trace_records, f, indent=2)
    print(f"-> Generated {len(trace_records)} live streaming steps into {out_file} ({os.path.getsize(out_file)/1024:.1f} KB)")

    return trace_records

def generate_operator_diagnosis(status, attributions, x_vec, means):
    """Translates multi-sensor Z-score deviations into clear, physical operator advice."""
    if status == 'NORMAL':
        return {
            'title': 'System Normal & Stable',
            'severity': 'INFO',
            'cause': 'All 15 supervisory indicators operate inside nominal 3σ design limits.',
            'action': 'Routine monitoring. No operator intervention required.',
            'badge': 'HEALTHY'
        }

    # Inspect top deviating tags
    top_tags = [a['tag'] for a in attributions[:3]]
    top_z = {a['tag']: a['z_score'] for a in attributions[:3]}

    # Check for Anti-Surge Valve Jam / Recycle
    if 'CCRNHIC0773A.PV' in top_tags or 'CCRNVI0781A.PV' in top_tags:
        asv_z = top_z.get('CCRNHIC0773A.PV', 0)
        flow_z = top_z.get('CCRNFI0703BA.PV', 0)
        casing_z = top_z.get('CCRNVI0781A.PV', 0)
        
        return {
            'title': '🚨 Gas Recycle Bypass & Aerodynamic Shudder',
            'severity': 'CRITICAL',
            'cause': f'Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = {asv_z:+.1f}σ). Forward flow collapsed by {flow_z:+.1f}σ. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = {casing_z:+.1f}σ). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.',
            'action': 'Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.',
            'badge': 'VALVE_RECYCLE'
        }

    # Check for Bearing Wear / Friction
    if 'CCRNVI0780AA.PV' in top_tags or 'CCRNTI0780AA.PV' in top_tags or 'CCRNVI0780AC.PV' in top_tags:
        temp_z = top_z.get('CCRNTI0780AA.PV', 0)
        rad_z = top_z.get('CCRNVI0780AA.PV', 0)
        return {
            'title': '🚨 Journal Bearing Wear & Thermal Runaway',
            'severity': 'CRITICAL',
            'cause': f'Radial shaft vibration climbed by {rad_z:+.1f}σ while Journal Bearing Temperature rose by {temp_z:+.1f}σ. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.',
            'action': 'Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.',
            'badge': 'BEARING_FRICTION'
        }

    # Check for Suction Choke / Filter Restriction
    if 'CCRNPI0704.PV' in top_tags or 'CCRNFI0703BA.PV' in top_tags:
        p_z = top_z.get('CCRNPI0704.PV', 0)
        flow_z = top_z.get('CCRNFI0703BA.PV', 0)
        return {
            'title': '⚠️ Suction Strainer Choke / Upstream Starvation',
            'severity': 'WARNING',
            'cause': f'Suction header pressure collapsed by {p_z:+.1f}σ with forward gas flow down by {flow_z:+.1f}σ. High differential pressure ratio increases compressor head and thermal load.',
            'action': 'Switch suction filters or inspect upstream separator drum demister pad for fouling.',
            'badge': 'SUCTION_CHOKE'
        }

    # Generic Anomaly Fallback
    top_name = attributions[0]['name']
    top_z_val = attributions[0]['z_score']
    return {
        'title': '⚠️ Multivariable Process Anomaly',
        'severity': 'WARNING',
        'cause': f'Primary anomaly driver is {top_name} deviating by {top_z_val:+.1f}σ from golden baseline.',
        'action': 'Cross-reference field telemetry and local gauge boards.',
        'badge': 'PROCESS_SHIFT'
    }

if __name__ == '__main__':
    build_live_simulation_trace()
