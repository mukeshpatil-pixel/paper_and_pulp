import pandas as pd
import numpy as np

def run_analysis():
    print("Loading RGC_A for detailed physical correlation analysis...")
    df = pd.read_excel('2020_RGC.xlsx', sheet_name='RGC_A', header=1, engine='calamine')
    ts_col = df.columns[1]
    df[ts_col] = pd.to_datetime(df[ts_col])
    df.set_index(ts_col, inplace=True)

    # Key columns
    current_col = 'CCRNIIK001AM1.PV'
    flow_cols = ['CCRNFI0703BA.PV', 'CCRNFI0703BB.PV', 'CCRNFI0703BC.PV']
    vib_cols = [
        'CCRNVI0780AA.PV', 'CCRNVI0780AB.PV', 'CCRNVI0780AC.PV',
        'CCRNVI0781A.PV', 'CCRNVI0782A.PV',
        'CCRNVI0790AA.PV', 'CCRNVI0790AB.PV'
    ]
    disp_cols = ['CCRNZI0780A.PV', 'CCRNZI0781A.PV']
    press_suct = 'CCRNPI0704.PV'
    press_disc = 'CCRNPI0721AA.PV'
    asv_col = 'CCRNHIC0773A.PV'
    temp_suct = 'CCRNTI0715.PV'
    temp_bearings = ['CCRNTI0780AA.PV', 'CCRNTI0780AB.PV', 'CCRNTI0780AC.PV', 'CCRNTI0780AD.PV']

    all_cols = [current_col, press_suct, press_disc, asv_col, temp_suct] + flow_cols + vib_cols + disp_cols + temp_bearings
    for c in all_cols:
        df[c] = pd.to_numeric(df[c], errors='coerce')

    df['Flow_Mean'] = df[flow_cols].mean(axis=1)
    df['Delta_P'] = df[press_disc] - df[press_suct]
    df['Press_Ratio'] = df[press_disc] / df[press_suct].replace(0, np.nan)

    # Calculate monthly summary
    monthly_mean = df[[current_col, 'Flow_Mean', press_suct, press_disc, 'Delta_P', 'Press_Ratio', asv_col, temp_suct] + vib_cols + disp_cols].resample('ME').mean()
    monthly_max = df[[current_col, 'Flow_Mean'] + vib_cols + disp_cols].resample('ME').max()

    print("\n" + "="*115)
    print("MONTHLY MEAN TELEMETRY SUMMARY FOR COMPRESSOR A (2020 - 2022)")
    print("="*115)
    print(f"{'Month':<8} | {'Current (A)':<11} | {'Flow (m3/h)':<11} | {'Disc P':<7} | {'DeltaP':<7} | {'ASV (%)':<7} | {'Vib0780AA':<9} | {'CasingDE':<8} | {'CasingNDE':<9} | {'ZI0780':<8}")
    print("-" * 115)
    for idx, row in monthly_mean.iterrows():
        m_str = idx.strftime('%Y-%m')
        print(f"{m_str:<8} | {row[current_col]:11.2f} | {row['Flow_Mean']:11.2f} | {row[press_disc]:7.2f} | {row['Delta_P']:7.2f} | {row[asv_col]:7.1f} | {row['CCRNVI0780AA.PV']:9.2f} | {row['CCRNVI0781A.PV']:8.2f} | {row['CCRNVI0782A.PV']:9.2f} | {row['CCRNZI0780A.PV']:8.1f}")

    print("\n" + "="*115)
    print("MONTHLY MAXIMUM TELEMETRY (PEAK VALUES) FOR COMPRESSOR A")
    print("="*115)
    print(f"{'Month':<8} | {'Max Current':<11} | {'Max Flow':<10} | {'Max Vib0780AA':<13} | {'Max Vib0780AC':<13} | {'Max CasingDE':<12} | {'Max CasingNDE':<13} | {'Max ZI0780':<10}")
    print("-" * 115)
    for idx, row in monthly_max.iterrows():
        m_str = idx.strftime('%Y-%m')
        print(f"{m_str:<8} | {row[current_col]:11.2f} | {row['Flow_Mean']:10.2f} | {row['CCRNVI0780AA.PV']:13.2f} | {row['CCRNVI0780AC.PV']:13.2f} | {row['CCRNVI0781A.PV']:12.2f} | {row['CCRNVI0782A.PV']:13.2f} | {row['CCRNZI0780A.PV']:10.1f}")

    # Inspect Current vs Flow relationship
    # Filter running hours (where compressor is active: Flow > 50 m3/h)
    running = df[df['Flow_Mean'] > 50].copy()
    print("\n" + "="*115)
    print(f"RUNNING STATE ANALYSIS (Flow > 50 m3/h): Total running 5-min samples: {len(running):,} ({len(running)*5/60:.1f} hours)")
    print("="*115)

    # Let's inspect the distribution of Motor Current
    print("Motor Current (CCRNIIK001AM1.PV) Statistics while running:")
    print(running[current_col].describe())

    # Check periods where Current is high
    # What are the quantiles of Current?
    print("\nCurrent quantiles while running:")
    print(running[current_col].quantile([0.1, 0.25, 0.5, 0.75, 0.9, 0.95, 0.99]))

    # Correlation between variables during running state
    corr_cols = [current_col, 'Flow_Mean', press_suct, press_disc, 'Delta_P', asv_col, temp_suct] + vib_cols + disp_cols
    corr_matrix = running[corr_cols].corr()
    print("\nCorrelation with Motor Current (CCRNIIK001AM1.PV):")
    print(corr_matrix[current_col].sort_values(ascending=False).to_string())

    print("\nCorrelation with Suction Flow (Flow_Mean):")
    print(corr_matrix['Flow_Mean'].sort_values(ascending=False).to_string())

    print("\nCorrelation with Vibration (CCRNVI0780AA.PV):")
    print(corr_matrix['CCRNVI0780AA.PV'].sort_values(ascending=False).to_string())

    # Check for anomalies:
    # 1. High vibration periods: when does CCRNVI0780AA or CasingDE exceed threshold?
    # 2. High Current & Low Flow: (Current > 75th percentile and Flow < 25th percentile)
    q_curr_high = running[current_col].quantile(0.75)
    q_flow_low = running['Flow_Mean'].quantile(0.25)
    anom = running[(running[current_col] > q_curr_high) & (running['Flow_Mean'] < q_flow_low)]
    print(f"\nSamples with High Current (>{q_curr_high:.1f}A) AND Low Output Flow (<{q_flow_low:.1f} m3/h): {len(anom):,} ({len(anom)/len(running)*100:.1f}% of running time)")

    # When did these anomalies occur? Group by month
    if len(anom) > 0:
        print("\nDistribution of High Current / Low Output anomaly by month:")
        print(anom.resample('ME').size())

if __name__ == '__main__':
    run_analysis()
