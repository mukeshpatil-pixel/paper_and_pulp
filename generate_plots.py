import os
import time
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

# Tag metadata dictionary: tag name -> (human description, engineering unit, category)
TAG_METADATA = {
    'CCRNFI0703BA.PV': ('CCR Recycle Gas Suction Flow (Ch A)', 'm³/h', 'Flow Rate'),
    'CCRNFI0703BB.PV': ('CCR Recycle Gas Suction Flow (Ch B)', 'm³/h', 'Flow Rate'),
    'CCRNFI0703BC.PV': ('CCR Recycle Gas Suction Flow (Ch C)', 'm³/h', 'Flow Rate'),
    'CCRNPI0704.PV':   ('Compressor Suction Header Pressure', 'kg/cm² g', 'Pressure'),
    'CCRNTI0715.PV':   ('Process Gas Suction Temperature', '°C', 'Temperature'),
    'CCRNVI0780AA.PV': ('Compressor Radial Vibration NDE (X-Probe)', 'µm pk-pk', 'Vibration'),
    'CCRNVI0780AB.PV': ('Compressor Radial Vibration NDE (Y-Probe)', 'µm pk-pk', 'Vibration'),
    'CCRNVI0780AC.PV': ('Compressor Radial Vibration DE Probe', 'µm pk-pk', 'Vibration'),
    'CCRNVI0781A.PV':  ('Compressor Casing Vibration (DE)', 'mm/s RMS', 'Vibration'),
    'CCRNVI0782A.PV':  ('Compressor Casing Vibration (NDE)', 'mm/s RMS', 'Vibration'),
    'CCRNZI0780A.PV':  ('Rotor Axial Displacement (Thrust Probe A)', 'µm', 'Rotor Position'),
    'CCRNZI0781A.PV':  ('Rotor Axial Displacement (Thrust Probe B)', 'µm', 'Rotor Position'),
    'CCRNIIK001AM1.PV': ('Drive Motor Operating Current (M1)', 'Amperes (A)', 'Motor Current'),
    'CCRNVI0790AA.PV': ('Motor Bearing Radial Vibration (DE)', 'µm pk-pk', 'Vibration'),
    'CCRNVI0790AB.PV': ('Motor Bearing Radial Vibration (NDE)', 'µm pk-pk', 'Vibration'),
    'CCRNTXI0790AA.PV': ('Bearing Metal Temperature (Pad 1)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AB.PV': ('Bearing Metal Temperature (Pad 2)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AC.PV': ('Bearing Metal Temperature (Pad 3)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AD.PV': ('Bearing Metal Temperature (Pad 4)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AE.PV': ('Bearing Metal Temperature (Pad 5)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AF.PV': ('Bearing Metal Temperature (Pad 6)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AG.PV': ('Bearing Metal Temperature (Pad 7)', '°C', 'Bearing Temp'),
    'CCRNTXI0790AH.PV': ('Bearing Metal Temperature (Pad 8)', '°C', 'Bearing Temp'),
    'CCRNTI0785AA.PV': ('Motor Stator Winding Temp Phase U (Slot 1)', '°C', 'Motor Stator Temp'),
    'CCRNTI0785AB.PV': ('Motor Stator Winding Temp Phase U (Slot 2)', '°C', 'Motor Stator Temp'),
    'CCRNTI0785AC.PV': ('Motor Stator Winding Temp Phase U (Slot 3)', '°C', 'Motor Stator Temp'),
    'CCRNTI0785AD.PV': ('Motor Stator Winding Temp Phase U (Slot 4)', '°C', 'Motor Stator Temp'),
    'CCRNTI0786AA.PV': ('Motor Stator Winding Temp Phase V (Slot 1)', '°C', 'Motor Stator Temp'),
    'CCRNTI0786AB.PV': ('Motor Stator Winding Temp Phase V (Slot 2)', '°C', 'Motor Stator Temp'),
    'CCRNTI0786AC.PV': ('Motor Stator Winding Temp Phase V (Slot 3)', '°C', 'Motor Stator Temp'),
    'CCRNTI0786AD.PV': ('Motor Stator Winding Temp Phase V (Slot 4)', '°C', 'Motor Stator Temp'),
    'CCRNTI0787AA.PV': ('Motor Stator Winding Temp Phase W (Slot 1)', '°C', 'Motor Stator Temp'),
    'CCRNTI0787AB.PV': ('Motor Stator Winding Temp Phase W (Slot 2)', '°C', 'Motor Stator Temp'),
    'CCRNTI0787AC.PV': ('Motor Stator Winding Temp Phase W (Slot 3)', '°C', 'Motor Stator Temp'),
    'CCRNTI0787AD.PV': ('Motor Stator Winding Temp Phase W (Slot 4)', '°C', 'Motor Stator Temp'),
    'CCRNTI0788AA.PV': ('Motor Core / Bearing Temperature 1', '°C', 'Motor Temp'),
    'CCRNTI0788AB.PV': ('Motor Core / Bearing Temperature 2', '°C', 'Motor Temp'),
    'CCRNTI0788AC.PV': ('Motor Core / Bearing Temperature 3', '°C', 'Motor Temp'),
    'CCRNTI0788AD.PV': ('Motor Core / Bearing Temperature 4', '°C', 'Motor Temp'),
    'CCRNKI0780A.PV':  ('Compressor Keyphasor / Shaft Speed Indicator', 'RPM / Pulse', 'Speed'),
    'CCRNTI0780AA.PV': ('Journal Bearing Temperature (DE Pad A)', '°C', 'Bearing Temp'),
    'CCRNTI0780AB.PV': ('Journal Bearing Temperature (DE Pad B)', '°C', 'Bearing Temp'),
    'CCRNTI0780AC.PV': ('Journal Bearing Temperature (NDE Pad A)', '°C', 'Bearing Temp'),
    'CCRNTI0780AD.PV': ('Journal Bearing Temperature (NDE Pad B)', '°C', 'Bearing Temp'),
    'CCRNTI0781A.PV':  ('Lube Oil Supply / Header Temperature', '°C', 'Lube Oil'),
    'CCRNTI0782A.PV':  ('Lube Oil Return / Drain Temperature', '°C', 'Lube Oil'),
    'CCRNPI0718A.PV':  ('Interstage / Stage 1 Discharge Pressure (Ch A)', 'kg/cm² g', 'Pressure'),
    'CCRNPI0719A.PV':  ('Interstage / Stage 1 Discharge Pressure (Ch B)', 'kg/cm² g', 'Pressure'),
    'CCRNPDI0716A.PV': ('Suction / Lube Filter Differential Pressure', 'kg/cm²', 'Differential Pressure'),
    'CCRNTI0702AA.PV': ('Stage 1 Suction Gas Temperature (Ch A)', '°C', 'Temperature'),
    'CCRNTI0702AB.PV': ('Stage 1 Suction Gas Temperature (Ch B)', '°C', 'Temperature'),
    'CCRNTI0702AC.PV': ('Stage 1 Suction Gas Temperature (Ch C)', '°C', 'Temperature'),
    'CCRNTI0717AA.PV': ('Stage 1 Discharge Gas Temperature (Ch A)', '°C', 'Temperature'),
    'CCRNTI0717AB.PV': ('Stage 1 Discharge Gas Temperature (Ch B)', '°C', 'Temperature'),
    'CCRNTI0717AC.PV': ('Stage 1 Discharge Gas Temperature (Ch C)', '°C', 'Temperature'),
    'CCRNPI0721AA.PV': ('Final Discharge Pressure (Ch A)', 'kg/cm² g', 'Pressure'),
    'CCRNPI0721AB.PV': ('Final Discharge Pressure (Ch B)', 'kg/cm² g', 'Pressure'),
    'CCRNPI0721AC.PV': ('Final Discharge Pressure (Ch C)', 'kg/cm² g', 'Pressure'),
    'CCRNPI0760A.PV':  ('Seal Gas / Balance Pressure', 'kg/cm² g', 'Seal Gas'),
    'CCRNLI0760A.PV':  ('Lube Oil Reservoir Level', '%', 'Lube Oil Level'),
    'CCRNTI0760A.PV':  ('Lube Oil Tank Oil Temperature', '°C', 'Lube Oil'),
    'CCRNHIC0773A.PV': ('Anti-Surge Control Valve Opening (ASV HIC)', '%', 'Anti-Surge Valve'),
    'CCRNLI0701A.PV':  ('Suction Knockout Drum Level (Ch A)', '%', 'Knockout Drum Level'),
    'CCRNLI0701B.PV':  ('Suction Knockout Drum Level (Ch B)', '%', 'Knockout Drum Level'),
    'CCRNLI0701C.PV':  ('Suction Knockout Drum Level (Ch C)', '%', 'Knockout Drum Level'),
    'CCRNPI0851A.PV':  ('Seal Gas Vent / Flare Header Pressure', 'kg/cm² g', 'Pressure'),
    'CCRNTI0852AA.PV': ('Gas Aftercooler Inlet Temperature', '°C', 'Temperature'),
    'CCRNTI0853AA.PV': ('Gas Aftercooler Outlet Temperature', '°C', 'Temperature'),
    'CCRNPI0750A.PV':  ('Suction Header Pressure (Ch A)', 'kg/cm² g', 'Pressure'),
    'CCRNPI0750B.PV':  ('Suction Header Pressure (Ch B)', 'kg/cm² g', 'Pressure'),
    'CCRNPI0750C.PV':  ('Suction Header Pressure (Ch C)', 'kg/cm² g', 'Pressure')
}

PLOT_COLORS = ['#1f77b4', '#2ca02c', '#d62728', '#9467bd', '#ff7f0e']

def plot_group(df_data, group_cols, group_idx, total_groups, output_path, mode_title, is_hourly=False):
    """
    Plots a group of up to 5 columns in a 5 rows x 1 col subplot layout.
    """
    n_cols = len(group_cols)
    fig_height = max(4.0, n_cols * 2.8)
    fig, axes = plt.subplots(nrows=n_cols, ncols=1, figsize=(15, fig_height), sharex=True)
    if n_cols == 1:
        axes = [axes]
    
    start_tag_num = group_idx * 5 + 1
    end_tag_num = start_tag_num + n_cols - 1
    fig.suptitle(
        f"Compressor A (RGC_A) — {mode_title}\nGroup {group_idx+1:02d} of {total_groups:02d}: Columns {start_tag_num:02d} to {end_tag_num:02d}",
        fontsize=14, fontweight='bold', y=0.995
    )

    for i, col in enumerate(group_cols):
        ax = axes[i]
        color = PLOT_COLORS[i % len(PLOT_COLORS)]
        
        # Meta info
        desc, unit, cat = TAG_METADATA.get(col, (col, '', 'Process'))
        
        # Plot data line
        series = df_data[col].dropna()
        if not series.empty:
            ax.plot(series.index, series.values, color=color, linewidth=1.1, label=col, alpha=0.9)
            
            # Stats for display
            c_min = series.min()
            c_max = series.max()
            c_mean = series.mean()
            stats_str = f"Min: {c_min:.2f}  |  Mean: {c_mean:.2f}  |  Max: {c_max:.2f} {unit}"
        else:
            stats_str = "No Data"

        # Styling
        ax.set_title(f"[{start_tag_num + i:02d}] {col}  —  {desc} ({cat})", fontsize=11, fontweight='bold', loc='left', pad=4)
        ax.set_ylabel(f"{unit}" if unit else "Value", fontsize=10, fontweight='semibold')
        ax.grid(True, linestyle='--', alpha=0.5, linewidth=0.7)
        
        # Text box with stats
        ax.text(0.99, 0.88, stats_str, transform=ax.transAxes,
                fontsize=9, verticalalignment='top', horizontalalignment='right',
                bbox=dict(boxstyle='round,pad=0.3', facecolor='white', edgecolor='#cccccc', alpha=0.85))

    # Bottom axis date formatting
    bottom_ax = axes[-1]
    bottom_ax.set_xlabel("Timestamp", fontsize=11, fontweight='bold', labelpad=6)
    if is_hourly:
        bottom_ax.xaxis.set_major_locator(mdates.MonthLocator())
        bottom_ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
        plt.setp(bottom_ax.xaxis.get_majorticklabels(), rotation=0, ha='center', fontsize=9)
    else:
        bottom_ax.xaxis.set_major_locator(mdates.DayLocator(interval=2))
        bottom_ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %d'))
        plt.setp(bottom_ax.xaxis.get_majorticklabels(), rotation=30, ha='right', fontsize=9)

    plt.tight_layout(rect=[0, 0.02, 1, 0.97])
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    plt.savefig(output_path, dpi=180, bbox_inches='tight')
    plt.close(fig)

def main():
    start_total = time.time()
    excel_path = '2020_RGC.xlsx'
    sheet_name = 'RGC_A'

    print(f"Loading '{sheet_name}' from {excel_path} via calamine...")
    t0 = time.time()
    df = pd.read_excel(excel_path, sheet_name=sheet_name, header=1, engine='calamine')
    print(f"Data loaded in {time.time()-t0:.2f}s. Shape: {df.shape}")

    ts_col = df.columns[1]
    val_cols = df.columns[2:].tolist()
    print(f"Timestamp column: {ts_col}")
    print(f"Number of value columns: {len(val_cols)}")

    df[ts_col] = pd.to_datetime(df[ts_col])
    # Convert all value columns to numeric
    for c in val_cols:
        df[c] = pd.to_numeric(df[c], errors='coerce')

    # Group into chunks of 5
    chunk_size = 5
    groups = [val_cols[i:i + chunk_size] for i in range(0, len(val_cols), chunk_size)]
    total_groups = len(groups)
    print(f"Total groups of up to 5 columns: {total_groups}")

    # Set up folders
    out_dir_month = os.path.join('plots_compressor_a', '1_month_january_2020')
    out_dir_year = os.path.join('plots_compressor_a', '1_year_hourly_2020')
    os.makedirs(out_dir_month, exist_ok=True)
    os.makedirs(out_dir_year, exist_ok=True)

    # -------------------------------------------------------------
    # 1. ONE MONTH OF DATA: January 2020 (Native 5-minute sampling)
    # -------------------------------------------------------------
    print("\n--- Processing Set 1: 1 Month of Data (January 2020, 5-min intervals) ---")
    df_jan = df[(df[ts_col] >= '2020-01-01') & (df[ts_col] < '2020-02-01')].copy()
    df_jan.set_index(ts_col, inplace=True)
    print(f"January 2020 records: {len(df_jan)}")

    for g_idx, g_cols in enumerate(groups):
        start_tag = g_idx * 5 + 1
        end_tag = start_tag + len(g_cols) - 1
        fname = f"compressor_a_jan2020_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        fpath = os.path.join(out_dir_month, fname)
        plot_group(
            df_data=df_jan,
            group_cols=g_cols,
            group_idx=g_idx,
            total_groups=total_groups,
            output_path=fpath,
            mode_title="1-Month Profile (Jan 2020, 5-Min Intervals)",
            is_hourly=False
        )
        print(f"Saved [{g_idx+1}/{total_groups}]: {fname}")

    # -------------------------------------------------------------
    # 2. ONE YEAR OF DATA: 2020 (Resampled Hourly)
    # -------------------------------------------------------------
    print("\n--- Processing Set 2: 1 Year of Data (2020, Resampled Hourly) ---")
    df_year = df[(df[ts_col] >= '2020-01-01') & (df[ts_col] < '2021-01-01')].copy()
    df_year.set_index(ts_col, inplace=True)
    print(f"Raw 2020 records before resampling: {len(df_year)}")
    
    # Hourly resampling with mean
    df_year_hourly = df_year[val_cols].resample('1h').mean()
    print(f"Resampled 2020 hourly records: {len(df_year_hourly)}")

    for g_idx, g_cols in enumerate(groups):
        start_tag = g_idx * 5 + 1
        end_tag = start_tag + len(g_cols) - 1
        fname = f"compressor_a_year2020_hourly_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        fpath = os.path.join(out_dir_year, fname)
        plot_group(
            df_data=df_year_hourly,
            group_cols=g_cols,
            group_idx=g_idx,
            total_groups=total_groups,
            output_path=fpath,
            mode_title="1-Year Trend (2020, Hourly Resampled)",
            is_hourly=True
        )
        print(f"Saved [{g_idx+1}/{total_groups}]: {fname}")

    # Generate metadata dictionary CSV and Markdown
    dict_records = []
    for idx, col in enumerate(val_cols, 1):
        desc, unit, cat = TAG_METADATA.get(col, (col, '', 'Process'))
        jan_series = df_jan[col]
        yr_series = df_year_hourly[col]
        dict_records.append({
            'Index': idx,
            'Tag': col,
            'Description': desc,
            'Category': cat,
            'Unit': unit,
            'Jan_Min': round(jan_series.min(), 3),
            'Jan_Mean': round(jan_series.mean(), 3),
            'Jan_Max': round(jan_series.max(), 3),
            'Year_Min': round(yr_series.min(), 3),
            'Year_Mean': round(yr_series.mean(), 3),
            'Year_Max': round(yr_series.max(), 3),
        })
    dict_df = pd.DataFrame(dict_records)
    dict_df.to_csv('compressor_a_tag_dictionary.csv', index=False)
    dict_df.to_markdown('compressor_a_tag_dictionary.md', index=False)
    print("\nSaved metadata dictionary to 'compressor_a_tag_dictionary.csv' and 'compressor_a_tag_dictionary.md'")

    print(f"\nAll operations finished successfully in {time.time()-start_total:.2f}s!")

if __name__ == '__main__':
    main()
