import pandas as pd
import numpy as np

def detailed_investigation():
    df = pd.read_excel('2020_RGC.xlsx', sheet_name='RGC_A', header=1, engine='calamine')
    ts = pd.to_datetime(df.iloc[:, 1])
    df.set_index(ts, inplace=True)

    tags = {
        'Current': 'CCRNIIK001AM1.PV',
        'Flow_A': 'CCRNFI0703BA.PV',
        'Suct_P': 'CCRNPI0704.PV',
        'Suct_T': 'CCRNTI0715.PV',
        'Disc_P': 'CCRNPI0721AA.PV',
        'ASV_HIC': 'CCRNHIC0773A.PV',
        'Vib_NDE_X': 'CCRNVI0780AA.PV',
        'Vib_NDE_Y': 'CCRNVI0780AB.PV',
        'Vib_DE': 'CCRNVI0780AC.PV',
        'Casing_DE': 'CCRNVI0781A.PV',
        'Casing_NDE': 'CCRNVI0782A.PV',
        'Motor_Vib_DE': 'CCRNVI0790AA.PV',
        'Motor_Vib_NDE': 'CCRNVI0790AB.PV',
        'Axial_Z1': 'CCRNZI0780A.PV',
        'Axial_Z2': 'CCRNZI0781A.PV',
        'Journal_DE_A': 'CCRNTI0780AA.PV',
        'Journal_NDE_A': 'CCRNTI0780AC.PV',
        'Stator_U1': 'CCRNTI0785AA.PV',
        'Lube_Oil_T': 'CCRNTI0781A.PV',
        'Filter_DP': 'CCRNPDI0716A.PV'
    }

    sub_df = pd.DataFrame()
    for name, tag in tags.items():
        sub_df[name] = pd.to_numeric(df[tag], errors='coerce')

    sub_df['Delta_P'] = sub_df['Disc_P'] - sub_df['Suct_P']
    sub_df['Press_Ratio'] = sub_df['Disc_P'] / sub_df['Suct_P'].replace(0, np.nan)
    # Apparent specific energy / efficiency indicator: Current / Flow
    sub_df['Amp_per_Flow'] = sub_df['Current'] / sub_df['Flow_A'].replace(0, np.nan)

    # Compare 3 distinct operational regimes:
    # 1. March 2020: Compressor A running in 2020
    # 2. July 2021: Compressor A running with high vibration & high current in 2021
    # 3. December 2021: Compressor A running later in 2021
    # 4. January 2020: Compressor A on standby (Compressor B running)

    p_mar20 = sub_df.loc['2020-03-01':'2020-03-31']
    p_jul21 = sub_df.loc['2021-07-01':'2021-07-31']
    p_dec21 = sub_df.loc['2021-12-01':'2021-12-31']
    p_jan20_standby = sub_df.loc['2020-01-01':'2020-01-31']

    periods = {
        'Standby (Jan 2020)': p_jan20_standby,
        'Running 2020 (Mar 2020)': p_mar20,
        'Running High Vib (Jul 2021)': p_jul21,
        'Running Late (Dec 2021)': p_dec21
    }

    summary = []
    for pname, pdata in periods.items():
        summary.append({
            'Period': pname,
            'Current (A)': f"{pdata['Current'].mean():.2f}",
            'Flow (m3/h)': f"{pdata['Flow_A'].mean():.2f}",
            'Suct P (kg/cm2)': f"{pdata['Suct_P'].mean():.2f}",
            'Disc P (kg/cm2)': f"{pdata['Disc_P'].mean():.2f}",
            'Delta P': f"{pdata['Delta_P'].mean():.2f}",
            'ASV Opening (%)': f"{pdata['ASV_HIC'].mean():.1f}%",
            'Vib NDE X (um)': f"{pdata['Vib_NDE_X'].mean():.2f}",
            'Vib NDE Max (um)': f"{pdata['Vib_NDE_X'].max():.2f}",
            'Casing DE (mm/s)': f"{pdata['Casing_DE'].mean():.2f}",
            'Casing DE Max (mm/s)': f"{pdata['Casing_DE'].max():.2f}",
            'Axial Z1 (um)': f"{pdata['Axial_Z1'].mean():.1f}",
            'Journal Temp (°C)': f"{pdata['Journal_DE_A'].mean():.1f}",
            'Stator Temp (°C)': f"{pdata['Stator_U1'].mean():.1f}",
            'Amp/Flow Ratio': f"{pdata['Amp_per_Flow'].mean():.3f}"
        })

    sum_df = pd.DataFrame(summary)
    print("\n" + "="*120)
    print("OPERATIONAL REGIME COMPARISON FOR COMPRESSOR A")
    print("="*120)
    print(sum_df.to_string(index=False))

    # Check for voltage tags or if voltage exists anywhere
    print("\n" + "="*120)
    print("CHECKING FOR VOLTAGE AND ELECTRICAL TAGS IN FULL SHEET")
    print("="*120)
    print("Total columns:", len(df.columns))
    volt_tags = [c for c in df.columns if any(k in c.upper() for k in ['VOLT', 'KV', 'V.', 'VAC', 'VDC', 'PT', 'VT'])]
    print("Voltage candidate tags found:", volt_tags)
    
    # Save a diagnostic chart comparing Current, Vibration, Flow, and ASV across the full timeline
    plot_diagnostic_timeline(sub_df)

def plot_diagnostic_timeline(df):
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    import matplotlib.dates as mdates

    res = df.resample('1D').mean()
    fig, axes = plt.subplots(5, 1, figsize=(16, 14), sharex=True)

    # 1. Motor Current
    axes[0].plot(res.index, res['Current'], color='#1f77b4', linewidth=1.2)
    axes[0].set_ylabel('Motor Current\n(Amperes)', fontsize=10, fontweight='bold')
    axes[0].set_title('Compressor A Motor Current (CCRNIIK001AM1.PV) — Duty vs Standby Cycles', fontsize=11, fontweight='bold', loc='left')
    axes[0].grid(True, linestyle='--', alpha=0.5)

    # 2. Radial Vibration
    axes[1].plot(res.index, res['Vib_NDE_X'], color='#d62728', linewidth=1.2, label='Radial NDE X (CCRNVI0780AA)')
    axes[1].plot(res.index, res['Vib_DE'], color='#ff7f0e', linewidth=1.2, label='Radial DE (CCRNVI0780AC)')
    axes[1].set_ylabel('Radial Vibration\n(µm pk-pk)', fontsize=10, fontweight='bold')
    axes[1].set_title('Shaft Radial Vibration — Severe Elevation During 2021 Duty Run', fontsize=11, fontweight='bold', loc='left')
    axes[1].legend(loc='upper right', fontsize=9)
    axes[1].grid(True, linestyle='--', alpha=0.5)

    # 3. Casing Vibration
    axes[2].plot(res.index, res['Casing_DE'], color='#9467bd', linewidth=1.2, label='Casing DE (CCRNVI0781A)')
    axes[2].plot(res.index, res['Casing_NDE'], color='#8c564b', linewidth=1.2, label='Casing NDE (CCRNVI0782A)')
    axes[2].set_ylabel('Casing Vibration\n(mm/s RMS)', fontsize=10, fontweight='bold')
    axes[2].set_title('Compressor Casing Vibration (Seismic) — Exceeding 5-6 mm/s in mid-2021', fontsize=11, fontweight='bold', loc='left')
    axes[2].legend(loc='upper right', fontsize=9)
    axes[2].grid(True, linestyle='--', alpha=0.5)

    # 4. Anti-Surge Valve Opening & Flow
    ax_flow = axes[3]
    ax_asv = ax_flow.twinx()
    l1 = ax_flow.plot(res.index, res['Flow_A'], color='#2ca02c', linewidth=1.2, label='Suction Flow (m³/h)')
    l2 = ax_asv.plot(res.index, res['ASV_HIC'], color='#e377c2', linewidth=1.2, linestyle='--', label='Anti-Surge Valve % (HIC)')
    ax_flow.set_ylabel('Flow Rate (m³/h)', fontsize=10, fontweight='bold', color='#2ca02c')
    ax_asv.set_ylabel('ASV Opening (%)', fontsize=10, fontweight='bold', color='#e377c2')
    axes[3].set_title('Suction Flow vs Anti-Surge Recycle Valve (ASV) Opening — ASV Opened up to ~68% in 2021', fontsize=11, fontweight='bold', loc='left')
    axes[3].grid(True, linestyle='--', alpha=0.5)
    lines = l1 + l2
    labels = [l.get_label() for l in lines]
    axes[3].legend(lines, labels, loc='upper right', fontsize=9)

    # 5. Pressures and Delta P
    axes[4].plot(res.index, res['Disc_P'], color='#332288', linewidth=1.2, label='Discharge Pressure')
    axes[4].plot(res.index, res['Suct_P'], color='#44aa99', linewidth=1.2, label='Suction Pressure')
    axes[4].plot(res.index, res['Delta_P'], color='#aa4499', linewidth=1.2, linestyle=':', label='Differential Pressure (Delta P)')
    axes[4].set_ylabel('Pressure\n(kg/cm² g)', fontsize=10, fontweight='bold')
    axes[4].set_xlabel('Timeline', fontsize=11, fontweight='bold')
    axes[4].set_title('Pressure Profile (Suction vs Discharge vs Delta P)', fontsize=11, fontweight='bold', loc='left')
    axes[4].legend(loc='upper right', fontsize=9)
    axes[4].grid(True, linestyle='--', alpha=0.5)

    axes[4].xaxis.set_major_locator(mdates.MonthLocator(interval=2))
    axes[4].xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
    plt.setp(axes[4].xaxis.get_majorticklabels(), rotation=20, ha='right', fontsize=9)

    fig.suptitle('Compressor A — Multi-Year Diagnostic Timeline: Current, Vibration, ASV, and Output Pressures', fontsize=13, fontweight='bold', y=0.995)
    plt.tight_layout(rect=[0, 0.02, 1, 0.98])
    plt.savefig('plots_compressor_a/diagnostic_investigation_timeline.png', dpi=180, bbox_inches='tight')
    plt.close()
    print("Saved diagnostic chart to 'plots_compressor_a/diagnostic_investigation_timeline.png'")

if __name__ == '__main__':
    detailed_investigation()
