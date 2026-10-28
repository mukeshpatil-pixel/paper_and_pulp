import os
import io
import base64
import pandas as pd
from pathlib import Path
from PIL import Image

def get_compressed_b64(path, max_w=900, quality=82):
    im = Image.open(path).convert('RGB')
    if im.width > max_w:
        ratio = max_w / im.width
        im = im.resize((max_w, int(im.height * ratio)), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, format='JPEG', quality=quality)
    return base64.b64encode(buf.getvalue()).decode('utf-8')

def build_inline():
    print("Building inline viewer...")
    b64_timeline = get_compressed_b64('plots_compressor_a/diagnostic_investigation_timeline.png')
    b64_fig1 = get_compressed_b64('anomaly_detection_results/figure_1_anomaly_score_distribution.png')
    b64_fig2 = get_compressed_b64('anomaly_detection_results/figure_2_timeline_anomaly_scores.png')
    b64_fig3 = get_compressed_b64('anomaly_detection_results/figure_3_root_cause_sensor_attribution.png')

    tag_rows = []
    if os.path.exists('compressor_a_tag_dictionary.csv'):
        df = pd.read_csv('compressor_a_tag_dictionary.csv')
        for _, r in df.head(30).iterrows():
            tag_rows.append({
                'tag': str(r['Tag']),
                'desc': str(r['Description']),
                'cat': str(r['Category']),
                'unit': str(r['Unit']) if pd.notna(r['Unit']) else '',
                'mean': f"{r['All_Mean']:.2f}" if pd.notna(r['All_Mean']) else '-'
            })

    # Prepare table rows HTML
    rows_html = ""
    for t in tag_rows:
        rows_html += f"""
        <tr class="border-b border-[var(--border)] hover:bg-[var(--background)] transition">
          <td class="p-2 font-mono font-bold text-xs text-blue-400">{t['tag']}</td>
          <td class="p-2 text-xs"><span class="px-1.5 py-0.5 rounded bg-[var(--background)] border border-[var(--border)] text-[var(--muted-foreground)] text-xs">{t['cat']}</span></td>
          <td class="p-2 text-xs text-[var(--foreground)]">{t['desc']}</td>
          <td class="p-2 font-mono text-xs text-[var(--muted-foreground)]">{t['unit']}</td>
          <td class="p-2 font-mono text-xs text-right text-[var(--foreground)]">{t['mean']}</td>
        </tr>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    .iv-tab-content {{ display: none; }}
    .iv-tab-content.active {{ display: block; }}
    .iv-tab-btn.active {{
      background-color: var(--primary);
      color: var(--primary-foreground);
      border-color: var(--primary);
    }}
    .gallery-fig {{ display: none; }}
    .gallery-fig.active {{ display: block; }}
    .gal-btn.active {{
      border-color: #3b82f6;
      background-color: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
    }}
  </style>
</head>
<body class="bg-transparent text-[var(--foreground)] antialiased p-3">

  <div class="bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] rounded-xl shadow-md overflow-hidden">
    
    <!-- HEADER -->
    <div class="p-4 border-b border-[var(--border)] bg-[var(--card)] flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <div class="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow">
          ⚙️
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-sm font-bold text-[var(--foreground)] leading-tight">Compressor Train A (RGC_A)</h2>
            <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Verified Pipeline</span>
          </div>
          <p class="text-xs text-[var(--muted-foreground)]">Standalone Local Telemetry & Anomaly Diagnosis • 214,110 Timestamps</p>
        </div>
      </div>
      
      <div class="flex items-center gap-2">
        <a href="file:///c:/Users/Mukesh Patil/Documents/compressor/rgc_ml_visual_explanation.html" target="_blank" class="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition flex items-center gap-1.5">
          <span>🚀 Open Standalone File</span>
        </a>
      </div>
    </div>

    <!-- TABS NAVIGATION -->
    <div class="px-4 py-2 border-b border-[var(--border)] bg-[var(--background)] flex items-center gap-2 overflow-x-auto text-xs font-medium">
      <button onclick="setTab('summary')" id="iv-btn-summary" class="iv-tab-btn active px-3 py-1.5 rounded-lg border border-[var(--border)] transition whitespace-nowrap">
        📊 Findings & KPIs
      </button>
      <button onclick="setTab('gallery')" id="iv-btn-gallery" class="iv-tab-btn px-3 py-1.5 rounded-lg border border-[var(--border)] transition whitespace-nowrap">
        📈 Visual Plots Gallery
      </button>
      <button onclick="setTab('rca')" id="iv-btn-rca" class="iv-tab-btn px-3 py-1.5 rounded-lg border border-[var(--border)] transition whitespace-nowrap">
        🚨 Root Cause (July 2021)
      </button>
      <button onclick="setTab('tags')" id="iv-btn-tags" class="iv-tab-btn px-3 py-1.5 rounded-lg border border-[var(--border)] transition whitespace-nowrap">
        🏷️ DCS Tag Catalog
      </button>
    </div>

    <!-- TAB 1: SUMMARY & KPIS -->
    <div id="iv-tab-summary" class="iv-tab-content active p-4 space-y-4">
      <!-- KPI GRID -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
          <p class="text-xs text-[var(--muted-foreground)]">Processed Rows</p>
          <p class="text-lg font-bold text-blue-500">214,110</p>
          <p class="text-xs text-[var(--muted-foreground)]">5-Min Cadence (2020-22)</p>
        </div>
        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
          <p class="text-xs text-[var(--muted-foreground)]">DCS Tag Count</p>
          <p class="text-lg font-bold text-purple-500">73 Sensors</p>
          <p class="text-xs text-[var(--muted-foreground)]">Fully Renamed & Verified</p>
        </div>
        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
          <p class="text-xs text-[var(--muted-foreground)]">Baseline Specificity</p>
          <p class="text-lg font-bold text-emerald-500">99.44%</p>
          <p class="text-xs text-[var(--muted-foreground)]">Unseen Clean Test Data</p>
        </div>
        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
          <p class="text-xs text-[var(--muted-foreground)]">Crisis Recall</p>
          <p class="text-lg font-bold text-rose-500">99.69%</p>
          <p class="text-xs text-[var(--muted-foreground)]">July 2021 Anomaly Window</p>
        </div>
      </div>

      <!-- 4 PHYSICAL INSIGHTS -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)] space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs">1</span>
            <h4 class="text-xs font-bold text-[var(--foreground)]">Duty vs Standby Regimes</h4>
          </div>
          <p class="text-xs text-[var(--muted-foreground)]">Discovered Compressor Train A was completely unpowered in January 2020 (<span class="font-mono text-blue-400">0.1 A</span>, suction <span class="font-mono text-blue-400">1.8 kg/cm²</span>) and entered active production on Feb 01, 2020 (<span class="font-mono text-blue-400">142.5 A</span>, discharge <span class="font-mono text-blue-400">12.0 kg/cm²</span>). Two clean golden datasets were extracted.</p>
        </div>

        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)] space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs">2</span>
            <h4 class="text-xs font-bold text-[var(--foreground)]">Missing Voltage Sensor Mystery</h4>
          </div>
          <p class="text-xs text-[var(--muted-foreground)]">Tag <code class="font-mono text-amber-400">CCRNIIT0701A.PV</code> is hardcoded to constant <span class="font-mono text-amber-400">142.5</span> (motor rated FLA) with 0 variance. There is no line voltage in DCS telemetry. Fixed and documented to prevent model overfitting.</p>
        </div>

        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)] space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs">3</span>
            <h4 class="text-xs font-bold text-[var(--foreground)]">Why Scaling Is Not Required</h4>
          </div>
          <p class="text-xs text-[var(--muted-foreground)]">Isolation Forest uses orthogonal coordinate-aligned random splits. Monotonic transforms preserve order: \(x_a < x_b \iff \text{{scale}}(x_a) < \text{{scale}}(x_b)\). Tree depth and isolation partition metrics are mathematically invariant. Raw engineering units are preserved!</p>
        </div>

        <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)] space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xs">4</span>
            <h4 class="text-xs font-bold text-[var(--foreground)]">July 2021 Failure Mechanism</h4>
          </div>
          <p class="text-xs text-[var(--muted-foreground)]">Anti-surge valve stuck open at <span class="font-mono text-rose-400 font-bold">66.6%</span>. 2/3 of gas recycled back to suction. Motor drew full power (<span class="font-mono text-rose-400">144.4 A</span>) but net downstream flow crashed by <span class="font-mono text-rose-400 font-bold">-8.0σ</span>. Acoustic recycle turbulence spiked vibration to <span class="font-mono text-rose-400 font-bold">7.3 mm/s (Danger Zone D)</span>.</p>
        </div>
      </div>
    </div>

    <!-- TAB 2: VISUAL PLOTS GALLERY -->
    <div id="iv-tab-gallery" class="iv-tab-content p-4 space-y-3">
      <!-- Selector buttons -->
      <div class="flex flex-wrap items-center gap-1.5 text-xs font-semibold pb-2 border-b border-[var(--border)]">
        <button onclick="setFig(1)" id="gal-btn-1" class="gal-btn active px-3 py-1 rounded-md border border-[var(--border)] transition">
          1. Operational Timeline (2020-22)
        </button>
        <button onclick="setFig(2)" id="gal-btn-2" class="gal-btn px-3 py-1 rounded-md border border-[var(--border)] transition">
          2. Score Distribution (KDE)
        </button>
        <button onclick="setFig(3)" id="gal-btn-3" class="gal-btn px-3 py-1 rounded-md border border-[var(--border)] transition">
          3. Anomaly Timeline & Vibration
        </button>
        <button onclick="setFig(4)" id="gal-btn-4" class="gal-btn px-3 py-1 rounded-md border border-[var(--border)] transition">
          4. Root-Cause Z-Score Attribution
        </button>
      </div>

      <!-- Figures -->
      <div id="gallery-fig-1" class="gallery-fig active space-y-2">
        <div class="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40">
          <img src="data:image/jpeg;base64,{b64_timeline}" class="w-full h-auto object-contain max-h-[380px]" alt="Operational Timeline">
        </div>
        <p class="text-xs text-[var(--muted-foreground)]">
          <strong class="text-[var(--foreground)]">Timeline Analysis:</strong> Motor current (top), discharge pressure (middle), and anti-surge valve (bottom) illustrating unpowered standby (Jan 2020), baseline loaded operation (March 2020), and the persistent recycle crisis in mid-2021.
        </p>
      </div>

      <div id="gallery-fig-2" class="gallery-fig space-y-2">
        <div class="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40">
          <img src="data:image/jpeg;base64,{b64_fig1}" class="w-full h-auto object-contain max-h-[380px]" alt="Anomaly Score Distribution">
        </div>
        <p class="text-xs text-[var(--muted-foreground)]">
          <strong class="text-[var(--foreground)]">KDE Score Separation:</strong> Isolation Forest anomaly score distribution shows near-perfect separation between clean baseline test data (centered at \(s \approx -0.12\)) and July 2021 failure period (shifted to \(s \approx +0.16\)). Decision threshold = 0.00.
        </p>
      </div>

      <div id="gallery-fig-3" class="gallery-fig space-y-2">
        <div class="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40">
          <img src="data:image/jpeg;base64,{b64_fig2}" class="w-full h-auto object-contain max-h-[380px]" alt="Anomaly Scores vs Dynamics">
        </div>
        <p class="text-xs text-[var(--muted-foreground)]">
          <strong class="text-[var(--foreground)]">Multi-Panel Dynamics:</strong> Anomaly score trajectory correlates directly with casing vibration jumping from 1.5 mm/s to 7.3 mm/s (ISO 10816 Zone D) while motor current remains loaded at 144.4 A.
        </p>
      </div>

      <div id="gallery-fig-4" class="gallery-fig space-y-2">
        <div class="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40">
          <img src="data:image/jpeg;base64,{b64_fig3}" class="w-full h-auto object-contain max-h-[380px]" alt="Z-Score Attribution">
        </div>
        <p class="text-xs text-[var(--muted-foreground)]">
          <strong class="text-[var(--foreground)]">Root Cause Attribution:</strong> Ranked Z-score deviations pinpoint Anti-Surge valve (<span class="text-rose-400 font-semibold">+5.68σ</span>) and Forward Gas Flow collapse (<span class="text-rose-400 font-semibold">-7.97σ</span>) as the primary physical anomaly drivers.
        </p>
      </div>
    </div>

    <!-- TAB 3: ROOT CAUSE ANALYSIS -->
    <div id="iv-tab-rca" class="iv-tab-content p-4 space-y-3">
      <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)] space-y-2">
        <div class="flex items-center gap-2">
          <span class="text-rose-500 font-bold">🔍</span>
          <h3 class="text-xs font-bold text-[var(--foreground)]">Aerodynamic Recirculation vs Bearing Seizure Diagnosis</h3>
        </div>
        <p class="text-xs text-[var(--muted-foreground)]">
          When casing vibration spiked to <strong class="text-rose-400">7.3 mm/s (ISO Zone D Danger)</strong>, a standard threshold alarm might lead maintenance to mistakenly order an expensive mechanical bearing overhaul.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
          <div class="p-2.5 rounded border border-emerald-500/20 bg-emerald-500/5">
            <p class="font-bold text-emerald-500">Bearing Temperatures: Normal</p>
            <p class="text-[var(--muted-foreground)] mt-0.5">NDE bearing temps remained stable at <span class="font-mono text-[var(--foreground)]">54-57°C</span>. Lubrication oil headers and journal friction were healthy.</p>
          </div>
          <div class="p-2.5 rounded border border-rose-500/20 bg-rose-500/5">
            <p class="font-bold text-rose-500">Anti-Surge Bypass: 66.6% Open</p>
            <p class="text-[var(--muted-foreground)] mt-0.5">High-velocity bypass back into suction caused aerodynamic turbulence, pressure fluctuations, and acoustic casing shudder.</p>
          </div>
        </div>
        <p class="text-xs text-[var(--foreground)] font-medium pt-1">
          ✅ <strong class="text-emerald-400">Prescription:</strong> Operators must inspect and unstick the pneumatic actuator on anti-surge valve <code class="font-mono text-blue-400">CCRNHIC0773A.PV</code>, instead of tearing down the compressor bearings.
        </p>
      </div>
    </div>

    <!-- TAB 4: TAG CATALOG -->
    <div id="iv-tab-tags" class="iv-tab-content p-4 space-y-2">
      <div class="flex items-center justify-between gap-3">
        <input type="text" id="iv-tag-search" oninput="filterIvTags()" placeholder="Search tag, code, or description..." class="w-full max-w-sm px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-xs text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:border-blue-500">
        <span class="text-xs text-[var(--muted-foreground)] whitespace-nowrap">Showing Top Process Tags</span>
      </div>
      <div class="border border-[var(--border)] rounded-lg overflow-x-auto max-h-[300px]">
        <table class="w-full text-left border-collapse text-xs">
          <thead class="bg-[var(--background)] text-[var(--muted-foreground)] sticky top-0 border-b border-[var(--border)]">
            <tr>
              <th class="p-2">DCS Tag Code</th>
              <th class="p-2">Category</th>
              <th class="p-2">Corrected Engineering Description</th>
              <th class="p-2">Unit</th>
              <th class="p-2 text-right">Mean</th>
            </tr>
          </thead>
          <tbody id="iv-tag-body">
            {rows_html}
          </tbody>
        </table>
      </div>
    </div>

  </div>

  <script>
    function setTab(name) {{
      document.querySelectorAll('.iv-tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.iv-tab-btn').forEach(el => el.classList.remove('active'));
      const t = document.getElementById('iv-tab-' + name);
      const b = document.getElementById('iv-btn-' + name);
      if (t) t.classList.add('active');
      if (b) b.classList.add('active');
    }}

    function setFig(idx) {{
      document.querySelectorAll('.gallery-fig').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.gal-btn').forEach(el => el.classList.remove('active'));
      const f = document.getElementById('gallery-fig-' + idx);
      const b = document.getElementById('gal-btn-' + idx);
      if (f) f.classList.add('active');
      if (b) b.classList.add('active');
    }}

    function filterIvTags() {{
      const q = document.getElementById('iv-tag-search').value.toLowerCase();
      const rows = document.querySelectorAll('#iv-tag-body tr');
      rows.forEach(r => {{
        r.style.display = r.innerText.toLowerCase().includes(q) ? '' : 'none';
      }});
    }}
  </script>
</body>
</html>"""

    # Save to artifact directory
    artifact_dir = Path(r'C:\Users\Mukesh Patil\.gemini\antigravity\brain\4362481e-6b0c-42c6-9863-e497322389f7')
    artifact_dir.mkdir(parents=True, exist_ok=True)
    artifact_file = artifact_dir / 'rgc_inline_viewer.html'
    with open(artifact_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated inline viewer in artifact: {artifact_file} ({os.path.getsize(artifact_file)/1024:.1f} KB)")

    # Save to workspace as well
    ws_file = Path(r'c:\Users\Mukesh Patil\Documents\compressor\rgc_inline_viewer.html')
    with open(ws_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated inline viewer in workspace: {ws_file} ({os.path.getsize(ws_file)/1024:.1f} KB)")

if __name__ == '__main__':
    build_inline()
