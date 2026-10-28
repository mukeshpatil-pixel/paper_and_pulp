import pandas as pd
import numpy as np

def analyze_loading_states():
    print("Loading RGC_A to analyze loading/unloading dynamics...")
    df = pd.read_excel('2020_RGC.xlsx', sheet_name='RGC_A', header=1, engine='calamine')
    ts = pd.to_datetime(df.iloc[:, 1])
    df.set_index(ts, inplace=True)

    tags = {
        'Current': 'CCRNIIK001AM1.PV',
        'Flow': 'CCRNFI0703BA.PV',
        'Suct_P': 'CCRNPI0704.PV',
        'Disc_P': 'CCRNPI0721AA.PV',
        'ASV_HIC': 'CCRNHIC0773A.PV',
        'Vib_NDE_X': 'CCRNVI0780AA.PV',
        'Vib_DE': 'CCRNVI0780AC.PV',
        'Casing_DE': 'CCRNVI0781A.PV',
        'Casing_NDE': 'CCRNVI0782A.PV',
        'Motor_Vib_DE': 'CCRNVI0790AA.PV',
        'Axial_Z1': 'CCRNZI0780A.PV',
        'Journal_DE_T': 'CCRNTI0780AA.PV',
        'Stator_T': 'CCRNTI0785AA.PV',
        'Lube_Oil_T': 'CCRNTI0781A.PV',
        'Lube_Level': 'CCRNLI0760A.PV'
    }

    data = pd.DataFrame()
    for name, tag in tags.items():
        data[name] = pd.to_numeric(df[tag], errors='coerce')

    data['Delta_P'] = data['Disc_P'] - data['Suct_P']

    # 1. Inspect rapid transitions in Current and ASV
    # Are there frequent step changes (loading / unloading cycling)?
    diff_curr = data['Current'].diff().abs()
    diff_asv = data['ASV_HIC'].diff().abs()
    
    print("\n--- Distribution of Changes between Consecutive 5-min Samples ---")
    print("Current step changes > 10A count:", (diff_curr > 10).sum(), "out of", len(data), f"({(diff_curr > 10).sum()/len(data)*100:.3f}%)")
    print("ASV step changes > 10% count:", (diff_asv > 10).sum(), "out of", len(data), f"({(diff_asv > 10).sum()/len(data)*100:.3f}%)")

    # Group into sustained continuous running blocks:
    # Running: Current > 50 A
    # Stopped / Standby: Current < 10 A
    data['Is_Running'] = data['Current'] > 50
    # Group consecutive identical states
    data['Run_Block'] = (data['Is_Running'] != data['Is_Running'].shift()).cumsum()

    blocks = data.groupby('Run_Block').agg(
        Is_Running=('Is_Running', 'first'),
        Start=('Current', lambda x: x.index[0]),
        End=('Current', lambda x: x.index[-1]),
        Duration_Hours=('Current', lambda x: (x.index[-1] - x.index[0]).total_seconds() / 3600),
        Mean_Current=('Current', 'mean'),
        Mean_ASV=('ASV_HIC', 'mean'),
        Mean_Flow=('Flow', 'mean'),
        Mean_Casing_Vib=('Casing_DE', 'mean'),
        Mean_Vib_NDE=('Vib_NDE_X', 'mean')
    )

    # Filter blocks longer than 12 hours
    sustained_blocks = blocks[blocks['Duration_Hours'] >= 12].copy()
    print("\n" + "="*115)
    print("SUSTAINED OPERATING RUN BLOCKS (Duration >= 12 Hours)")
    print("="*115)
    print(f"{'State':<9} | {'Start':<16} | {'End':<16} | {'Hours':<7} | {'Current':<8} | {'ASV %':<6} | {'Flow':<7} | {'Casing Vib':<10} | {'Radial Vib':<10}")
    print("-" * 115)
    for _, b in sustained_blocks.iterrows():
        st_name = "RUNNING" if b['Is_Running'] else "STANDBY"
        s_str = b['Start'].strftime('%Y-%m-%d %H:%M')
        e_str = b['End'].strftime('%Y-%m-%d %H:%M')
        print(f"{st_name:<9} | {s_str:<16} | {e_str:<16} | {b['Duration_Hours']:7.1f} | {b['Mean_Current']:8.1f} | {b['Mean_ASV']:6.1f} | {b['Mean_Flow']:7.1f} | {b['Mean_Casing_Vib']:10.2f} | {b['Mean_Vib_NDE']:10.2f}")

    # 2. Check for Loading / Unloading modulation while Running
    # When running (Current > 50 A), how does ASV vary?
    running_data = data[data['Is_Running']].copy()
    print("\n" + "="*115)
    print("RUNNING STATE REGIMES (Current > 50 A): Distribution of Anti-Surge Recycle Valve (ASV)")
    print("="*115)
    print(running_data['ASV_HIC'].describe())
    print("\nASV quantiles while running:")
    print(running_data['ASV_HIC'].quantile([0.05, 0.1, 0.25, 0.5, 0.75, 0.9, 0.95]))

    # Does ASV modulate frequently or are there distinct periods?
    # Let's search for the cleanest periods:
    # A) Cleanest Loaded Period:
    # Running, low standard deviation of Current, low standard deviation of Flow, low Casing Vib (< 4.5 mm/s)
    # B) Cleanest Standby / No-load Period:
    # Current < 1 A, steady pressure, steady temperature, no missing values.
    
    # Let's evaluate prospective windows:
    # Let's check candidate windows for clean loaded:
    # 1. March 2020: 2020-03-01 to 2020-03-25
    # 2. May 2021: 2021-05-15 to 2021-06-15
    # 3. Dec 2021: 2021-12-01 to 2021-12-25
    # 4. Feb 2020
    test_windows = [
        ("March 2020 Loaded", "2020-03-01 00:00", "2020-03-28 00:00"),
        ("April 2021 Transition", "2021-04-15 00:00", "2021-04-30 00:00"),
        ("June 2021 Loaded High ASV", "2021-06-01 00:00", "2021-06-25 00:00"),
        ("December 2021 Loaded Stable", "2021-12-01 00:00", "2021-12-28 00:00"),
        ("January 2020 Standby Clean", "2020-01-02 00:00", "2020-01-28 00:00"),
        ("June 2020 Standby Clean", "2020-06-01 00:00", "2020-06-28 00:00"),
        ("October 2020 Standby Clean", "2020-10-01 00:00", "2020-10-28 00:00")
    ]

    print("\n" + "="*115)
    print("EVALUATING CANDIDATE CLEAN WINDOWS FOR BASELINE ANOMALY TESTING")
    print("="*115)
    for title, start_w, end_w in test_windows:
        sub = data.loc[start_w:end_w]
        c_mean, c_std = sub['Current'].mean(), sub['Current'].std()
        f_mean, f_std = sub['Flow'].mean(), sub['Flow'].std()
        v_mean, v_max = sub['Casing_DE'].mean(), sub['Casing_DE'].max()
        asv_mean = sub['ASV_HIC'].mean()
        dp_mean = sub['Delta_P'].mean()
        print(f"{title:<28} | N={len(sub):<5} | Curr: {c_mean:5.1f}±{c_std:4.1f}A | Flow: {f_mean:5.1f}±{f_std:4.1f} | ASV: {asv_mean:4.1f}% | CasingVib: {v_mean:4.2f} (max {v_max:4.2f}) | DeltaP: {dp_mean:5.1f}")

if __name__ == '__main__':
    analyze_loading_states()
