import os
import time
import pandas as pd
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

# Tag metadata dictionary
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

def plot_group_multiyear(df_data, group_cols, group_idx, total_groups, output_path, mode_title, is_hourly=True):
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
        desc, unit, cat = TAG_METADATA.get(col, (col, '', 'Process'))
        
        series = df_data[col].dropna()
        if not series.empty:
            lw = 1.0 if is_hourly else 0.7
            alpha = 0.9 if is_hourly else 0.8
            ax.plot(series.index, series.values, color=color, linewidth=lw, alpha=alpha)
            
            c_min = series.min()
            c_max = series.max()
            c_mean = series.mean()
            stats_str = f"Min: {c_min:.2f}  |  Mean: {c_mean:.2f}  |  Max: {c_max:.2f} {unit}"
        else:
            stats_str = "No Data"

        ax.set_title(f"[{start_tag_num + i:02d}] {col}  —  {desc} ({cat})", fontsize=11, fontweight='bold', loc='left', pad=4)
        ax.set_ylabel(f"{unit}" if unit else "Value", fontsize=10, fontweight='semibold')
        ax.grid(True, linestyle='--', alpha=0.5, linewidth=0.7)
        
        ax.text(0.99, 0.88, stats_str, transform=ax.transAxes,
                fontsize=9, verticalalignment='top', horizontalalignment='right',
                bbox=dict(boxstyle='round,pad=0.3', facecolor='white', edgecolor='#cccccc', alpha=0.85))

    bottom_ax = axes[-1]
    bottom_ax.set_xlabel("Timestamp", fontsize=11, fontweight='bold', labelpad=6)
    bottom_ax.xaxis.set_major_locator(mdates.MonthLocator(interval=2))
    bottom_ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
    plt.setp(bottom_ax.xaxis.get_majorticklabels(), rotation=20, ha='right', fontsize=9)

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
    
    df[ts_col] = pd.to_datetime(df[ts_col])
    for c in val_cols:
        df[c] = pd.to_numeric(df[c], errors='coerce')

    df.set_index(ts_col, inplace=True)
    min_date = df.index.min().strftime('%Y-%m-%d')
    max_date = df.index.max().strftime('%Y-%m-%d')
    print(f"Entire Period: {min_date} to {max_date} ({len(df):,} total 5-min records)")

    chunk_size = 5
    groups = [val_cols[i:i + chunk_size] for i in range(0, len(val_cols), chunk_size)]
    total_groups = len(groups)

    # -------------------------------------------------------------
    # 1. ENTIRE PERIOD HOURLY RESAMPLED
    # -------------------------------------------------------------
    out_dir_full_hourly = os.path.join('plots_compressor_a', 'entire_period_hourly')
    os.makedirs(out_dir_full_hourly, exist_ok=True)
    print("\n--- Resampling Entire Period to Hourly Mean ---")
    df_full_hourly = df[val_cols].resample('1h').mean()
    print(f"Hourly resampled points: {len(df_full_hourly):,}")

    for g_idx, g_cols in enumerate(groups):
        start_tag = g_idx * 5 + 1
        end_tag = start_tag + len(g_cols) - 1
        fname = f"compressor_a_entire_period_hourly_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        fpath = os.path.join(out_dir_full_hourly, fname)
        plot_group_multiyear(
            df_data=df_full_hourly,
            group_cols=g_cols,
            group_idx=g_idx,
            total_groups=total_groups,
            output_path=fpath,
            mode_title=f"Entire Period Trend ({min_date} to {max_date}, Hourly Resampled)",
            is_hourly=True
        )
        print(f"Saved [Hourly {g_idx+1}/{total_groups}]: {fname}")

    # -------------------------------------------------------------
    # 2. ENTIRE PERIOD RAW (5-MINUTE RESOLUTION)
    # -------------------------------------------------------------
    out_dir_full_raw = os.path.join('plots_compressor_a', 'entire_period_raw_5min')
    os.makedirs(out_dir_full_raw, exist_ok=True)
    print("\n--- Plotting Entire Period Raw 5-Min Resolution ---")

    for g_idx, g_cols in enumerate(groups):
        start_tag = g_idx * 5 + 1
        end_tag = start_tag + len(g_cols) - 1
        fname = f"compressor_a_entire_period_raw_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        fpath = os.path.join(out_dir_full_raw, fname)
        plot_group_multiyear(
            df_data=df,
            group_cols=g_cols,
            group_idx=g_idx,
            total_groups=total_groups,
            output_path=fpath,
            mode_title=f"Entire Period Full Profile ({min_date} to {max_date}, 5-Min Native)",
            is_hourly=False
        )
        print(f"Saved [Raw 5-Min {g_idx+1}/{total_groups}]: {fname}")

    # -------------------------------------------------------------
    # 3. Update Tag Dictionary with Entire Period Statistics
    # -------------------------------------------------------------
    dict_csv_path = 'compressor_a_tag_dictionary.csv'
    existing_dict = pd.read_csv(dict_csv_path)
    
    full_min = []
    full_mean = []
    full_max = []
    for col in existing_dict['Tag']:
        s = df[col]
        full_min.append(round(s.min(), 3))
        full_mean.append(round(s.mean(), 3))
        full_max.append(round(s.max(), 3))
    
    existing_dict['All_Min'] = full_min
    existing_dict['All_Mean'] = full_mean
    existing_dict['All_Max'] = full_max
    
    existing_dict.to_csv('compressor_a_tag_dictionary.csv', index=False)
    existing_dict.to_markdown('compressor_a_tag_dictionary.md', index=False)
    print("\nUpdated dictionary with All-Time stats in CSV and Markdown.")

    # -------------------------------------------------------------
    # 4. Update Interactive HTML Dashboard
    # -------------------------------------------------------------
    update_html_dashboard(existing_dict, groups, min_date, max_date)
    print(f"\nAll operations finished successfully in {time.time()-start_total:.2f}s!")

def update_html_dashboard(df_dict, groups, min_date, max_date):
    groups_data = []
    total_groups = len(groups)
    for g_idx, g_cols in enumerate(groups):
        chunk = df_dict[df_dict['Tag'].isin(g_cols)]
        start_tag = g_idx * 5 + 1
        end_tag = start_tag + len(g_cols) - 1
        
        jan_img = f"1_month_january_2020/compressor_a_jan2020_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        yr_img = f"1_year_hourly_2020/compressor_a_year2020_hourly_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        full_hr_img = f"entire_period_hourly/compressor_a_entire_period_hourly_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        full_raw_img = f"entire_period_raw_5min/compressor_a_entire_period_raw_group_{g_idx+1:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        
        tags_info = []
        for _, row in chunk.iterrows():
            tags_info.append({
                'tag': row['Tag'],
                'desc': row['Description'],
                'unit': row['Unit'] if pd.notna(row['Unit']) else '',
                'cat': row['Category']
            })
            
        groups_data.append({
            'group_num': g_idx + 1,
            'title': f"Group {g_idx+1:02d} (Tags {start_tag:02d}–{end_tag:02d})",
            'jan_img': jan_img,
            'yr_img': yr_img,
            'full_hr_img': full_hr_img,
            'full_raw_img': full_raw_img,
            'tags': tags_info
        })

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compressor A (RGC_A) - Process & Telemetry Dashboard</title>
    <style>
        :root {{
            --bg-main: #0f172a;
            --bg-card: #1e293b;
            --text-main: #f8fafc;
            --text-sub: #94a3b8;
            --primary: #3b82f6;
            --primary-hover: #2563eb;
            --border: #334155;
            --badge-bg: #0369a1;
        }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-main);
            color: var(--text-main);
            margin: 0;
            padding: 24px;
        }}
        header {{
            max-width: 1400px;
            margin: 0 auto 24px auto;
            border-bottom: 1px solid var(--border);
            padding-bottom: 16px;
        }}
        h1 {{ margin: 0 0 8px 0; font-size: 26px; color: #60a5fa; }}
        p.subtitle {{ margin: 0; color: var(--text-sub); font-size: 14px; line-height: 1.5; }}
        
        .controls {{
            max-width: 1400px;
            margin: 0 auto 20px auto;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        }}
        .tab-btn {{
            background: var(--bg-card);
            border: 1px solid var(--border);
            color: var(--text-main);
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            transition: all 0.2s ease;
        }}
        .tab-btn.active {{
            background: var(--primary);
            border-color: var(--primary);
            color: #ffffff;
        }}
        .nav-pills {{
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-top: 10px;
        }}
        .pill-btn {{
            background: #1e293b;
            color: var(--text-sub);
            border: 1px solid var(--border);
            border-radius: 4px;
            padding: 4px 10px;
            font-size: 12px;
            text-decoration: none;
            cursor: pointer;
        }}
        .pill-btn:hover {{
            background: #334155;
            color: #ffffff;
        }}

        .container {{
            max-width: 1400px;
            margin: 0 auto;
        }}
        .group-card {{
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 8px;
            margin-bottom: 28px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
        }}
        .card-header {{
            padding: 14px 20px;
            background: #111e33;
            border-bottom: 1px solid var(--border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }}
        .card-header h2 {{
            margin: 0;
            font-size: 17px;
            color: #93c5fd;
        }}
        .tag-list {{
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }}
        .tag-badge {{
            background: #0f172a;
            border: 1px solid #334155;
            border-radius: 4px;
            padding: 3px 8px;
            font-size: 12px;
            color: #cbd5e1;
        }}
        .card-body {{
            padding: 16px;
            text-align: center;
        }}
        .plot-img {{
            max-width: 100%;
            height: auto;
            border-radius: 4px;
            border: 1px solid #334155;
            background: #ffffff;
            cursor: pointer;
        }}
        .plot-img:hover {{
            border-color: var(--primary);
        }}

        #dictionarySection {{
            display: none;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
        }}
        th, td {{
            padding: 8px 12px;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }}
        th {{
            background: #0f172a;
            color: #93c5fd;
            position: sticky;
            top: 0;
        }}
        tr:hover {{
            background: rgba(255,255,255,0.02);
        }}
    </style>
</head>
<body>

<header>
    <h1>Compressor A (RGC_A) — Process & Instrumentation Dashboard</h1>
    <p class="subtitle">
        Visualizing 71 telemetry and instrumentation columns in 5 rows &times; 1 column subplots across multiple time windows.<br>
        Dataset Span: <b>{min_date}</b> to <b>{max_date}</b> (214,110 records at 5-minute sampling).
    </p>
</header>

<div class="controls">
    <button class="tab-btn active" onclick="switchView('full_hr')">🌐 Entire Period ({min_date} to {max_date}, Hourly Resampled)</button>
    <button class="tab-btn" onclick="switchView('full_raw')">⚡ Entire Period ({min_date} to {max_date}, Raw 5-Min)</button>
    <button class="tab-btn" onclick="switchView('yearly')">📈 1-Year Trend (2020, Hourly Resampled)</button>
    <button class="tab-btn" onclick="switchView('january')">📅 1-Month Profile (Jan 2020, 5-Min)</button>
    <button class="tab-btn" onclick="switchView('dict')">📖 Tag Catalog (71 Columns)</button>
    
    <div style="width: 100%; margin-top: 10px;">
        <span style="font-size: 12px; color: var(--text-sub); margin-right: 8px;">Jump to Group:</span>
        <div class="nav-pills">
"""

    for g in groups_data:
        html_content += f'<a class="pill-btn" href="#group-{g["group_num"]}">{g["group_num"]}</a>\n'

    html_content += """
        </div>
    </div>
</div>

<div class="container" id="plotsContainer">
"""

    for g in groups_data:
        tags_badges = "".join([f'<span class="tag-badge" title="{t["desc"]}">{t["tag"]}</span>' for t in g["tags"]])
        html_content += f"""
    <div class="group-card" id="group-{g['group_num']}">
        <div class="card-header">
            <h2>{g['title']}</h2>
            <div class="tag-list">
                {tags_badges}
            </div>
        </div>
        <div class="card-body">
            <a href="{g['full_hr_img']}" target="_blank" class="img-link" 
               data-jan="{g['jan_img']}" 
               data-yr="{g['yr_img']}" 
               data-fullhr="{g['full_hr_img']}" 
               data-fullraw="{g['full_raw_img']}">
                <img src="{g['full_hr_img']}" class="plot-img" alt="{g['title']}" loading="lazy">
            </a>
        </div>
    </div>
"""

    html_content += """
</div>

<div class="container" id="dictionarySection">
    <h2 style="color: #93c5fd; margin-top: 0;">Compressor A Instrumentation Catalog</h2>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Tag</th>
                <th>Description</th>
                <th>Category</th>
                <th>Unit</th>
                <th>Jan Mean</th>
                <th>Year Mean</th>
                <th>All-Time Mean</th>
                <th>All-Time Min - Max</th>
            </tr>
        </thead>
        <tbody>
"""

    for _, row in df_dict.iterrows():
        html_content += f"""
            <tr>
                <td>{row['Index']}</td>
                <td><b>{row['Tag']}</b></td>
                <td>{row['Description']}</td>
                <td>{row['Category']}</td>
                <td>{row['Unit'] if pd.notna(row['Unit']) else '-'}</td>
                <td>{row['Jan_Mean']}</td>
                <td>{row['Year_Mean']}</td>
                <td>{row['All_Mean']}</td>
                <td>{row['All_Min']} to {row['All_Max']}</td>
            </tr>
"""

    html_content += """
        </tbody>
    </table>
</div>

<script>
    let currentMode = 'full_hr';

    function switchView(mode) {
        currentMode = mode;
        const buttons = document.querySelectorAll('.tab-btn');
        buttons[0].classList.toggle('active', mode === 'full_hr');
        buttons[1].classList.toggle('active', mode === 'full_raw');
        buttons[2].classList.toggle('active', mode === 'yearly');
        buttons[3].classList.toggle('active', mode === 'january');
        buttons[4].classList.toggle('active', mode === 'dict');

        const plotsCont = document.getElementById('plotsContainer');
        const dictSec = document.getElementById('dictionarySection');

        if (mode === 'dict') {
            plotsCont.style.display = 'none';
            dictSec.style.display = 'block';
        } else {
            plotsCont.style.display = 'block';
            dictSec.style.display = 'none';

            const links = document.querySelectorAll('.img-link');
            links.forEach(link => {
                let targetSrc = '';
                if (mode === 'january') targetSrc = link.getAttribute('data-jan');
                else if (mode === 'yearly') targetSrc = link.getAttribute('data-yr');
                else if (mode === 'full_hr') targetSrc = link.getAttribute('data-fullhr');
                else if (mode === 'full_raw') targetSrc = link.getAttribute('data-fullraw');

                link.setAttribute('href', targetSrc);
                const img = link.querySelector('img');
                img.setAttribute('src', targetSrc);
            });
        }
    }
</script>

</body>
</html>
"""

    output_path = os.path.join('plots_compressor_a', 'index.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Updated HTML dashboard saved to '{output_path}'")

if __name__ == '__main__':
    main()
