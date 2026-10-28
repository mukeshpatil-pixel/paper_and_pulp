import os
import pandas as pd
import numpy as np

def export_clean_baselines():
    print("Loading RGC_A to extract and export clean baseline datasets...")
    df = pd.read_excel('2020_RGC.xlsx', sheet_name='RGC_A', header=1, engine='calamine')
    ts_col = df.columns[1]
    df[ts_col] = pd.to_datetime(df[ts_col])
    df.set_index(ts_col, inplace=True)
    df.drop(columns=[df.columns[0]], inplace=True) # drop Unnamed: 0

    # Convert all to numeric
    for c in df.columns:
        df[c] = pd.to_numeric(df[c], errors='coerce')

    # 1. Clean Loaded Baseline: March 02, 2020 00:00 to March 28, 2020 23:55 (27 Days)
    # Steady running, motor current ~142.5 A, no dropouts, stable flow
    loaded_start = '2020-03-02 00:00:00'
    loaded_end   = '2020-03-28 23:55:00'
    df_clean_loaded = df.loc[loaded_start:loaded_end].copy()
    
    loaded_csv_path = 'baseline_clean_loaded_march_2020.csv'
    df_clean_loaded.to_csv(loaded_csv_path)
    print(f"Exported Clean Loaded Dataset: '{loaded_csv_path}' ({len(df_clean_loaded):,} rows, {df_clean_loaded.shape[1]} columns)")

    # 2. Clean Standby / No-Load Baseline: January 02, 2020 00:00 to January 28, 2020 23:55 (27 Days)
    # Clean zero-current standby, steady header, zero mechanical anomalies
    standby_start = '2020-01-02 00:00:00'
    standby_end   = '2020-01-28 23:55:00'
    df_clean_standby = df.loc[standby_start:standby_end].copy()
    
    standby_csv_path = 'baseline_clean_standby_january_2020.csv'
    df_clean_standby.to_csv(standby_csv_path)
    print(f"Exported Clean Standby Dataset: '{standby_csv_path}' ({len(df_clean_standby):,} rows, {df_clean_standby.shape[1]} columns)")

    # 3. Anomaly Test Dataset: July 01, 2021 00:00 to July 28, 2021 23:55 (28 Days)
    # The anomaly regime (High Vibration Zone D, high current, anti-surge wide open)
    anomaly_start = '2021-07-01 00:00:00'
    anomaly_end   = '2021-07-28 23:55:00'
    df_anomaly_test = df.loc[anomaly_start:anomaly_end].copy()
    anomaly_csv_path = 'test_anomaly_period_july_2021.csv'
    df_anomaly_test.to_csv(anomaly_csv_path)
    print(f"Exported Anomaly Test Dataset: '{anomaly_csv_path}' ({len(df_anomaly_test):,} rows, {df_anomaly_test.shape[1]} columns)")

    # 4. Generate comparison statistics table for anomaly detection modeling
    key_tags = {
        'CCRNIIK001AM1.PV': 'Motor Current (A)',
        'CCRNFI0703BA.PV':  'Suction Flow (m³/h)',
        'CCRNPI0704.PV':    'Suction Header Press (kg/cm²)',
        'CCRNPI0721AA.PV':  'Discharge Press (kg/cm²)',
        'CCRNHIC0773A.PV':  'Anti-Surge Valve (%)',
        'CCRNVI0780AA.PV':  'Radial Vib NDE X (µm)',
        'CCRNVI0780AC.PV':  'Radial Vib DE (µm)',
        'CCRNVI0781A.PV':   'Casing Vib DE (mm/s)',
        'CCRNVI0782A.PV':   'Casing Vib NDE (mm/s)',
        'CCRNVI0790AA.PV':  'Motor Bearing Vib (µm)',
        'CCRNZI0780A.PV':   'Axial Thrust Float (µm)',
        'CCRNTI0780AA.PV':  'Journal Bearing DE (°C)',
        'CCRNTI0785AA.PV':  'Stator Winding U1 (°C)',
        'CCRNTI0781A.PV':   'Lube Oil Header Temp (°C)',
        'CCRNLI0760A.PV':   'Lube Oil Tank Level (%)'
    }

    records = []
    for tag, desc in key_tags.items():
        s_load = df_clean_loaded[tag]
        s_sb = df_clean_standby[tag]
        s_anom = df_anomaly_test[tag]

        records.append({
            'Tag': tag,
            'Description': desc,
            'Standby_Mean': round(s_sb.mean(), 2),
            'Standby_Std': round(s_sb.std(), 2),
            'Loaded_Mean': round(s_load.mean(), 2),
            'Loaded_Std': round(s_load.std(), 2),
            'Anomaly_Mean': round(s_anom.mean(), 2),
            'Anomaly_Std': round(s_anom.std(), 2),
            'Anomaly_Shift_Z': round((s_anom.mean() - s_load.mean()) / (s_load.std() if s_load.std() > 0.001 else 1.0), 2)
        })

    stat_df = pd.DataFrame(records)
    stat_df.to_csv('baseline_operating_regimes_summary.csv', index=False)
    stat_df.to_markdown('baseline_operating_regimes_summary.md', index=False)
    print("\nSaved baseline operating regimes comparison summary to CSV and Markdown.")

    # Print summary
    print("\n" + "="*120)
    print("KEY TELEMETRY COMPARISON: STANDBY BASELINE vs LOADED BASELINE vs ANOMALY TEST PERIOD")
    print("="*120)
    print(stat_df.to_string(index=False))

if __name__ == '__main__':
    export_clean_baselines()
