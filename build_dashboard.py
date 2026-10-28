import os
import pandas as pd

def generate_html_viewer():
    df_dict = pd.read_csv('compressor_a_tag_dictionary.csv')

    groups_data = []
    chunk_size = 5
    for i in range(0, len(df_dict), chunk_size):
        chunk = df_dict.iloc[i:i+chunk_size]
        g_idx = i // chunk_size + 1
        start_tag = i + 1
        end_tag = i + len(chunk)
        
        jan_img = f"1_month_january_2020/compressor_a_jan2020_group_{g_idx:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        yr_img = f"1_year_hourly_2020/compressor_a_year2020_hourly_group_{g_idx:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        full_hr_img = f"entire_period_hourly/compressor_a_entire_period_hourly_group_{g_idx:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        full_raw_img = f"entire_period_raw_5min/compressor_a_entire_period_raw_group_{g_idx:02d}_cols_{start_tag:02d}-{end_tag:02d}.png"
        
        tags_info = []
        for _, row in chunk.iterrows():
            tags_info.append({
                'tag': row['Tag'],
                'desc': row['Description'],
                'unit': row['Unit'] if pd.notna(row['Unit']) else '',
                'cat': row['Category']
            })
            
        groups_data.append({
            'group_num': g_idx,
            'title': f"Group {g_idx:02d} (Tags {start_tag:02d}–{end_tag:02d})",
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

        #dictionarySection, #diagnosticSection {{
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
    <h1>Compressor Train A (RGC_A) — Process & Instrumentation Dashboard</h1>
    <p class="subtitle">
        Visualizing 71 telemetry and instrumentation columns in 5 rows &times; 1 column subplots across multiple time windows.<br>
        Dataset Span: <b>2020-01-01 to 2022-01-13</b> (214,110 records at 5-minute sampling).
    </p>
</header>

<div class="controls">
    <button class="tab-btn active" onclick="switchView('full_hr')">🌐 Entire Period (Hourly Resampled)</button>
    <button class="tab-btn" onclick="switchView('full_raw')">⚡ Entire Period (Raw 5-Min)</button>
    <button class="tab-btn" onclick="switchView('yearly')">📈 1-Year Trend (2020, Hourly)</button>
    <button class="tab-btn" onclick="switchView('january')">📅 1-Month Profile (Jan 2020, 5-Min)</button>
    <button class="tab-btn" onclick="switchView('diagnostic')">🔍 Diagnostic & Vibration Anomaly Analysis</button>
    <button class="tab-btn" onclick="switchView('dict')">📖 Tag Catalog (71 Columns)</button>
    
    <div style="width: 100%; margin-top: 10px;" id="pillsContainer">
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

<div class="container" id="diagnosticSection">
    <h2 style="color: #93c5fd; margin-top: 0;">Diagnostic Timeline: Current, Vibration, Anti-Surge Recycling & Pressure</h2>
    <p style="color: var(--text-sub); font-size: 14px; margin-bottom: 20px;">
        Multi-year cross-correlation examining when motor current was high, when vibration spiked, and why anti-surge recycling was active.
    </p>
    <div class="group-card">
        <div class="card-body">
            <a href="diagnostic_investigation_timeline.png" target="_blank">
                <img src="diagnostic_investigation_timeline.png" class="plot-img" style="width:100%;" alt="Diagnostic Timeline">
            </a>
        </div>
    </div>
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
        buttons.forEach(btn => btn.classList.remove('active'));

        const plotsCont = document.getElementById('plotsContainer');
        const dictSec = document.getElementById('dictionarySection');
        const diagSec = document.getElementById('diagnosticSection');
        const pillsCont = document.getElementById('pillsContainer');

        if (mode === 'full_hr') buttons[0].classList.add('active');
        else if (mode === 'full_raw') buttons[1].classList.add('active');
        else if (mode === 'yearly') buttons[2].classList.add('active');
        else if (mode === 'january') buttons[3].classList.add('active');
        else if (mode === 'diagnostic') buttons[4].classList.add('active');
        else if (mode === 'dict') buttons[5].classList.add('active');

        if (mode === 'dict') {
            plotsCont.style.display = 'none';
            diagSec.style.display = 'none';
            dictSec.style.display = 'block';
            pillsCont.style.display = 'none';
        } else if (mode === 'diagnostic') {
            plotsCont.style.display = 'none';
            dictSec.style.display = 'none';
            diagSec.style.display = 'block';
            pillsCont.style.display = 'none';
        } else {
            plotsCont.style.display = 'block';
            dictSec.style.display = 'none';
            diagSec.style.display = 'none';
            pillsCont.style.display = 'block';

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
    generate_html_viewer()
