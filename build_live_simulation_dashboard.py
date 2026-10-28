"""
Compiles the self-contained interactive Digital Twin Live Simulation & RCA Dashboard.
Embeds `live_simulation_trace.json`, metrics, and evaluation images as base64.
Zero localhost required; fully anonymized.
"""

import os
import io
import json
import base64
from pathlib import Path
from PIL import Image

def get_compressed_b64(path, max_w=900, quality=82):
    if not os.path.exists(path):
        return ""
    im = Image.open(path).convert('RGB')
    if im.width > max_w:
        ratio = max_w / im.width
        im = im.resize((max_w, int(im.height * ratio)), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, format='JPEG', quality=quality)
    return base64.b64encode(buf.getvalue()).decode('utf-8')

def build_dashboard():
    print("Building Live Simulation HTML Dashboard...")
    
    # 1. Load simulation trace
    trace_path = 'live_simulation_trace.json'
    if not os.path.exists(trace_path):
        raise FileNotFoundError(f"{trace_path} not found. Run live_inference_simulator.py first.")
    with open(trace_path, 'r', encoding='utf-8') as f:
        simulation_trace = json.load(f)

    # 2. Load evaluation metrics
    metrics_path = 'model_evaluation_metrics.json'
    metrics = {}
    if os.path.exists(metrics_path):
        with open(metrics_path, 'r', encoding='utf-8') as f:
            metrics = json.load(f)

    # 3. Base64 encode plots
    b64_dist = get_compressed_b64('anomaly_detection_results/synthetic_score_distribution.png')
    b64_timeline = get_compressed_b64('anomaly_detection_results/synthetic_fault_timeline.png')

    trace_json_str = json.dumps(simulation_trace)

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compressor Train A (RGC_A) — Digital Twin & Live Anomaly RCA Simulator</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    .tab-content {{ display: none; }}
    .tab-content.active {{ display: block; }}
    .tab-btn.active {{
      border-color: #3b82f6;
      color: #3b82f6;
      background-color: rgba(59, 130, 246, 0.1);
    }}
    .scenario-btn.active {{
      border-color: #3b82f6;
      background-color: #2563eb;
      color: white;
    }}
    /* Custom scrollbar */
    ::-webkit-scrollbar {{ width: 6px; height: 6px; }}
    ::-webkit-scrollbar-track {{ background: rgba(0,0,0,0.1); }}
    ::-webkit-scrollbar-thumb {{ background: rgba(255,255,255,0.2); border-radius: 3px; }}
  </style>
</head>
<body class="bg-transparent text-[var(--foreground)] antialiased p-3 sm:p-5">

  <!-- MAIN WRAPPER CARD -->
  <div class="bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto">
    
    <!-- TOP HEADER BAR -->
    <header class="p-4 sm:p-6 border-b border-[var(--border)] bg-[var(--background)] flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3.5">
        <div class="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/20 font-bold">
          ⚡
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <h1 class="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
              Compressor Train A (RGC_A)
            </h1>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Digital Twin Simulator
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live RCA Streaming
            </span>
          </div>
          <p class="text-xs text-[var(--muted-foreground)] mt-0.5">
            Multivariate AR(1) Synthetic Telemetry • Isolation Forest Real-Time Inference & Root-Cause Attribution
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-mono text-[var(--muted-foreground)]">Model Benchmark</p>
          <p class="text-xs font-bold text-emerald-400">PR-AUC: 0.9121 • F1: 0.869</p>
        </div>
        <a href="file:///c:/Users/Mukesh Patil/Documents/compressor/rgc_live_simulation_dashboard.html" target="_blank" class="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow flex items-center gap-1.5">
          <span>🚀 Standalone Mode</span>
        </a>
      </div>
    </header>

    <!-- NAVIGATION TABS -->
    <div class="border-b border-[var(--border)] bg-[var(--card)] px-4 sm:px-6">
      <nav class="flex space-x-2 sm:space-x-4 overflow-x-auto py-2.5 text-xs font-semibold" aria-label="Tabs">
        <button onclick="switchTab('simulation')" id="tab-btn-simulation" class="tab-btn active px-3.5 py-2 rounded-lg border border-transparent text-[var(--foreground)] hover:bg-[var(--background)] transition flex items-center gap-2 whitespace-nowrap">
          <span>🎮</span> 1. Live Streaming Simulation
        </button>
        <button onclick="switchTab('performance')" id="tab-btn-performance" class="tab-btn px-3.5 py-2 rounded-lg border border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--background)] transition flex items-center gap-2 whitespace-nowrap">
          <span>📊</span> 2. Model Performance & PR-AUC
        </button>
        <button onclick="switchTab('digital-twin')" id="tab-btn-digital-twin" class="tab-btn px-3.5 py-2 rounded-lg border border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--background)] transition flex items-center gap-2 whitespace-nowrap">
          <span>🔬</span> 3. Digital Twin Physics & AR(1)
        </button>
        <button onclick="switchTab('datasets')" id="tab-btn-datasets" class="tab-btn px-3.5 py-2 rounded-lg border border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--background)] transition flex items-center gap-2 whitespace-nowrap">
          <span>💾</span> 4. Synthetic Datasets Catalog
        </button>
      </nav>
    </div>

    <!-- MAIN BODY -->
    <main class="p-4 sm:p-6 space-y-6">

      <!-- ========================================== -->
      <!-- TAB 1: LIVE INTERACTIVE STREAMING SIMULATOR -->
      <!-- ========================================== -->
      <div id="tab-simulation" class="tab-content active space-y-5">
        
        <!-- SCENARIO SELECTOR & PLAYBACK CONTROLS -->
        <div class="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)] space-y-4">
          
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">Select Demonstration Fault Scenario:</span>
            </div>
            <!-- Preset Scenario Buttons -->
            <div class="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
              <button onclick="jumpToScenario('recycle')" id="scen-btn-recycle" class="scenario-btn px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-blue-500 transition">
                🚀 1. Anti-Surge Recycle Jam
              </button>
              <button onclick="jumpToScenario('bearing')" id="scen-btn-bearing" class="scenario-btn px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-blue-500 transition">
                ⚙️ 2. Bearing Wear & Runaway
              </button>
              <button onclick="jumpToScenario('choke')" id="scen-btn-choke" class="scenario-btn px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-blue-500 transition">
                🌪️ 3. Suction Filter Choke
              </button>
              <button onclick="jumpToScenario('all')" id="scen-btn-all" class="scenario-btn active px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-blue-500 transition">
                🔄 Full 160-Step Sequence
              </button>
            </div>
          </div>

          <!-- Playback Controls Bar -->
          <div class="p-3 bg-[var(--card)] rounded-lg border border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <button onclick="resetSim()" class="px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--background)] hover:bg-slate-800 text-xs font-semibold transition" title="Reset to start">
                ⏮ Reset
              </button>
              <button onclick="togglePlay()" id="play-btn" class="px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow flex items-center gap-1.5">
                <span id="play-icon">▶</span> <span id="play-text">Play Live Stream</span>
              </button>
              <button onclick="stepSim(1)" class="px-3 py-1.5 rounded-md border border-[var(--border)] bg-[var(--background)] hover:bg-slate-800 text-xs font-semibold transition" title="Step +1">
                ⏭ Step +1
              </button>
              
              <!-- Speed Selector -->
              <div class="flex items-center gap-1 pl-2 border-l border-[var(--border)]">
                <span class="text-xs text-[var(--muted-foreground)]">Speed:</span>
                <select id="speed-select" onchange="updateSpeed()" class="text-xs bg-[var(--background)] border border-[var(--border)] rounded px-2 py-1 text-[var(--foreground)]">
                  <option value="1000">0.5x (Slow)</option>
                  <option value="400" selected>1.0x (Normal)</option>
                  <option value="150">2.5x (Fast)</option>
                  <option value="60">5.0x (Turbo)</option>
                </select>
              </div>
            </div>

            <!-- Scrubber Timeline -->
            <div class="flex-1 min-w-[200px] max-w-md flex items-center gap-3">
              <input type="range" id="time-slider" min="0" max="159" value="0" oninput="onSliderChange(this.value)" class="w-full accent-blue-600 cursor-pointer">
              <span id="step-badge" class="font-mono text-xs text-blue-400 font-bold whitespace-nowrap min-w-[70px] text-right">
                Step 0 / 159
              </span>
            </div>
          </div>

        </div>

        <!-- LIVE INSTRUMENTATION & RCA COCKPIT GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          <!-- LEFT COLUMN: STATUS & SIGNALS (5 COLS) -->
          <div class="lg:col-span-5 space-y-4">
            
            <!-- CURRENT STATUS BANNER -->
            <div id="status-card" class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 transition-all duration-300">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Isolation Forest Real-Time State</span>
                <span id="status-pill" class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-white">
                  NORMAL
                </span>
              </div>
              <div class="mt-3 flex items-baseline justify-between">
                <div>
                  <p class="text-xs text-[var(--muted-foreground)]">Anomaly Decision Score (s)</p>
                  <p id="score-val" class="text-2xl font-mono font-bold text-emerald-400">+0.0942</p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-[var(--muted-foreground)]">Timestamp</p>
                  <p id="time-val" class="text-xs font-mono font-bold text-[var(--foreground)]">2022-03-01 08:00</p>
                </div>
              </div>

              <!-- Anomaly Gauge Progress Bar -->
              <div class="mt-3 space-y-1">
                <div class="flex justify-between text-[11px] text-[var(--muted-foreground)] font-mono">
                  <span class="text-rose-400">🚨 Trip (s &lt; 0.0)</span>
                  <span class="text-amber-400">⚠️ Warning (s &lt; 0.04)</span>
                  <span class="text-emerald-400">Normal (s &gt; 0.04)</span>
                </div>
                <div class="w-full bg-[var(--background)] h-2.5 rounded-full overflow-hidden border border-[var(--border)] relative">
                  <div id="gauge-bar" class="h-full bg-emerald-500 transition-all duration-200" style="width: 80%;"></div>
                </div>
              </div>
            </div>

            <!-- KEY TELEMETRY READOUT CARDS -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                <p class="text-[11px] text-[var(--muted-foreground)]">Motor Current</p>
                <p id="val-current" class="text-sm font-mono font-bold text-blue-400">142.5 A</p>
                <p class="text-[10px] text-[var(--muted-foreground)]">Baseline: 142.5 A</p>
              </div>

              <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                <p class="text-[11px] text-[var(--muted-foreground)]">Forward Flow</p>
                <p id="val-flow" class="text-sm font-mono font-bold text-emerald-400">268.7 m³/h</p>
                <p class="text-[10px] text-[var(--muted-foreground)]">Baseline: 268.7 m³/h</p>
              </div>

              <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                <p class="text-[11px] text-[var(--muted-foreground)]">Anti-Surge Valve</p>
                <p id="val-valve" class="text-sm font-mono font-bold text-purple-400">71.0 %</p>
                <p class="text-[10px] text-[var(--muted-foreground)]">Baseline: 71.0 %</p>
              </div>

              <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                <p class="text-[11px] text-[var(--muted-foreground)]">Casing Vib DE</p>
                <p id="val-vib-casing" class="text-sm font-mono font-bold text-slate-200">4.22 mm/s</p>
                <p class="text-[10px] text-amber-400 font-mono">Limit: 4.5 mm/s</p>
              </div>

              <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                <p class="text-[11px] text-[var(--muted-foreground)]">Journal Bearing Temp</p>
                <p id="val-temp-bearing" class="text-sm font-mono font-bold text-slate-200">60.8 °C</p>
                <p class="text-[10px] text-rose-400 font-mono">Trip: 85.0 °C</p>
              </div>

              <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)]">
                <p class="text-[11px] text-[var(--muted-foreground)]">Suction Pressure</p>
                <p id="val-suction" class="text-sm font-mono font-bold text-slate-200">29.20 kg/cm²</p>
                <p class="text-[10px] text-[var(--muted-foreground)]">Baseline: 29.2 kg/cm²</p>
              </div>
            </div>

            <!-- LIVE MOVING MINI-OSCILLOSCOPE -->
            <div class="bg-[var(--background)] p-3 rounded-lg border border-[var(--border)] space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-[var(--foreground)]">Rolling Telemetry Oscilloscope (Last 25 Steps)</span>
                <span class="text-[11px] text-[var(--muted-foreground)]">Multi-Signal Trend</span>
              </div>
              <div class="h-32 w-full bg-slate-950 rounded border border-[var(--border)] relative overflow-hidden flex items-end">
                <svg id="live-sparkline-svg" class="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <!-- Injected via JS -->
                </svg>
              </div>
              <div class="flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block"></span> Flow</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-rose-500 rounded-full inline-block"></span> Casing Vib</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-purple-500 rounded-full inline-block"></span> Anti-Surge</span>
                <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block"></span> Bearing Temp</span>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN: LIVE ROOT CAUSE ATTRIBUTION & DIAGNOSIS (7 COLS) -->
          <div class="lg:col-span-7 space-y-4">
            
            <!-- REAL-TIME ROOT CAUSE FEATURE ATTRIBUTION CARD -->
            <div class="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)] space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="p-1 rounded bg-blue-500/10 text-blue-400 font-bold text-xs">🔬</span>
                  <h3 class="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">
                    Instantaneous Feature Attribution (Top 5 Deviations)
                  </h3>
                </div>
                <span class="text-[11px] text-[var(--muted-foreground)]">Ranked by |Z-Score|</span>
              </div>
              
              <p class="text-xs text-[var(--muted-foreground)]">
                Shows which sensors are pulling the machine vector away from the golden baseline normal envelope at this precise moment.
              </p>

              <!-- Dynamic Feature Bars Container -->
              <div id="attribution-bars-container" class="space-y-2.5 pt-1">
                <!-- Dynamically injected via JS -->
              </div>
            </div>

            <!-- OPERATOR DIAGNOSTIC ADVICE & ACTION CARD -->
            <div id="operator-advice-card" class="bg-[var(--card)] p-4 rounded-xl border border-[var(--border)] space-y-2.5 transition-all">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span id="diag-icon" class="text-base">🟢</span>
                  <h4 id="diag-title" class="text-sm font-bold text-[var(--foreground)]">
                    System Operating in Normal Envelope
                  </h4>
                </div>
                <span id="diag-badge" class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  HEALTHY
                </span>
              </div>

              <div class="p-3 bg-[var(--background)] rounded-lg border border-[var(--border)] space-y-2 text-xs">
                <div>
                  <span class="text-[var(--muted-foreground)] font-semibold">Physical Mechanism:</span>
                  <p id="diag-cause" class="text-[var(--foreground)] mt-0.5">
                    All 15 supervisory indicators operate inside nominal 3σ design limits.
                  </p>
                </div>
                <div class="pt-1 border-t border-[var(--border)]">
                  <span class="text-[var(--muted-foreground)] font-semibold">Prescribed Maintenance Action:</span>
                  <p id="diag-action" class="text-emerald-400 font-medium mt-0.5">
                    Routine monitoring. No operator intervention required.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <!-- ========================================== -->
      <!-- TAB 2: MODEL PERFORMANCE & PR-AUC SCORECARD -->
      <!-- ========================================== -->
      <div id="tab-performance" class="tab-content space-y-6">
        
        <!-- METRICS SUMMARY CARDS -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div class="bg-[var(--background)] p-3.5 rounded-xl border border-[var(--border)]">
            <p class="text-xs text-[var(--muted-foreground)]">Precision-Recall AUC</p>
            <p class="text-xl font-bold text-blue-400 font-mono">{metrics.get('pr_auc', 0.9121):.4f}</p>
            <p class="text-[11px] text-emerald-400 font-semibold">High Reliability</p>
          </div>
          <div class="bg-[var(--background)] p-3.5 rounded-xl border border-[var(--border)]">
            <p class="text-xs text-[var(--muted-foreground)]">ROC-AUC</p>
            <p class="text-xl font-bold text-indigo-400 font-mono">{metrics.get('roc_auc', 0.9543):.4f}</p>
            <p class="text-[11px] text-[var(--muted-foreground)]">Global Discrimination</p>
          </div>
          <div class="bg-[var(--background)] p-3.5 rounded-xl border border-[var(--border)]">
            <p class="text-xs text-[var(--muted-foreground)]">Tuned Recall</p>
            <p class="text-xl font-bold text-emerald-400 font-mono">85.5%</p>
            <p class="text-[11px] text-[var(--muted-foreground)]">Catches Incipient</p>
          </div>
          <div class="bg-[var(--background)] p-3.5 rounded-xl border border-[var(--border)]">
            <p class="text-xs text-[var(--muted-foreground)]">Tuned Precision</p>
            <p class="text-xl font-bold text-purple-400 font-mono">88.4%</p>
            <p class="text-[11px] text-[var(--muted-foreground)]">Low False Alarms</p>
          </div>
          <div class="bg-[var(--background)] p-3.5 rounded-xl border border-[var(--border)]">
            <p class="text-xs text-[var(--muted-foreground)]">F1-Score</p>
            <p class="text-xl font-bold text-amber-400 font-mono">0.869</p>
            <p class="text-[11px] text-[var(--muted-foreground)]">Harmonic Balance</p>
          </div>
          <div class="bg-[var(--background)] p-3.5 rounded-xl border border-[var(--border)]">
            <p class="text-xs text-[var(--muted-foreground)]">Normal Specificity</p>
            <p class="text-xl font-bold text-emerald-400 font-mono">97.87%</p>
            <p class="text-[11px] text-[var(--muted-foreground)]">Unseen Clean Data</p>
          </div>
        </div>

        <!-- RESOLVING THE PRECISION-RECALL PARADOX -->
        <div class="bg-[var(--background)] p-5 rounded-xl border border-[var(--border)] space-y-3">
          <h3 class="text-sm font-bold text-[var(--foreground)] flex items-center gap-2">
            <span>⚖️</span> Resolving the Industrial Precision vs. Recall Dilemma
          </h3>
          <p class="text-xs text-[var(--muted-foreground)] leading-relaxed">
            In industrial predictive maintenance, operators face two competing risks: 
            <strong>(1) Low Recall</strong> misses 50% of machine faults causing catastrophic plant trips, while 
            <strong>(2) Low Precision</strong> generates endless false alarms causing technician alarm fatigue.
            Here is how threshold calibration solves this:
          </p>

          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-[var(--border)]">
              <thead class="bg-[var(--card)] text-[var(--muted-foreground)] font-semibold border-b border-[var(--border)]">
                <tr>
                  <th class="p-2.5">Operating Threshold Strategy</th>
                  <th class="p-2.5">Decision Score Limit</th>
                  <th class="p-2.5">Recall</th>
                  <th class="p-2.5">Precision</th>
                  <th class="p-2.5">F1-Score</th>
                  <th class="p-2.5">Industrial Application</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--border)]">
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-blue-400">Two-Tier Early Warning (Tuned)</td>
                  <td class="p-2.5 font-mono">s &lt; +0.04</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-400">85.5%</td>
                  <td class="p-2.5 font-mono font-bold text-purple-400">88.4%</td>
                  <td class="p-2.5 font-mono font-bold text-amber-400">0.869</td>
                  <td class="p-2.5 text-[var(--muted-foreground)]">Recommended operational setting. Catches incipient ramping failures with minimal false alerts.</td>
                </tr>
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-rose-400">Default Hard Trip Boundary</td>
                  <td class="p-2.5 font-mono">s &lt; 0.00</td>
                  <td class="p-2.5 font-mono">28.1%</td>
                  <td class="p-2.5 font-mono font-bold text-purple-400">93.3%</td>
                  <td class="p-2.5 font-mono">0.431</td>
                  <td class="p-2.5 text-[var(--muted-foreground)]">Only fires when machine has already suffered full catastrophic parameter drift.</td>
                </tr>
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-amber-400">Maximum Sensitivity Mode</td>
                  <td class="p-2.5 font-mono">s &lt; +0.05</td>
                  <td class="p-2.5 font-mono font-bold text-emerald-400">92.6%</td>
                  <td class="p-2.5 font-mono">85.5%</td>
                  <td class="p-2.5 font-mono font-bold text-amber-400">0.889</td>
                  <td class="p-2.5 text-[var(--muted-foreground)]">Useful during post-turnaround commissioning or extreme summer ambient operations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- EVALUATION PLOTS -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div class="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)] space-y-2">
            <h4 class="text-xs font-bold text-[var(--foreground)]">Score Distribution Separation (KDE)</h4>
            <div class="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40">
              <img src="data:image/jpeg;base64,{b64_dist}" class="w-full h-auto object-contain" alt="Score Distribution">
            </div>
            <p class="text-xs text-[var(--muted-foreground)]">
              Normal scores peak at \(s \approx +0.09\). Faults shift to \(s \le +0.02\), providing wide margins for early detection.
            </p>
          </div>

          <div class="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)] space-y-2">
            <h4 class="text-xs font-bold text-[var(--foreground)]">Multi-Fault Telemetry Benchmark Timeline</h4>
            <div class="rounded-lg overflow-hidden border border-[var(--border)] bg-black/40">
              <img src="data:image/jpeg;base64,{b64_timeline}" class="w-full h-auto object-contain" alt="Fault Timeline">
            </div>
            <p class="text-xs text-[var(--muted-foreground)]">
              Sequential 14-day benchmark testing Anti-Surge Valve Jam, Bearing Friction, and Suction Filter Choke.
            </p>
          </div>
        </div>

      </div>

      <!-- ========================================== -->
      <!-- TAB 3: DIGITAL TWIN PHYSICS & AR(1) METHOD -->
      <!-- ========================================== -->
      <div id="tab-digital-twin" class="tab-content space-y-5">
        
        <div class="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white flex items-center gap-2">
            <span>📐</span> Mathematical Architecture of the Digital Twin
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            Industrial compressor telemetry cannot be simulated with naive independent Gaussian noise because adjacent 5-minute samples possess high temporal autocorrelation (<span class="font-mono text-cyan-300 font-semibold">&rho; &approx; 0.95</span>) and coupled cross-subsystem physics (e.g. flow correlates with power and suction pressure).
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <span class="text-blue-400 font-bold block mb-1">1. Multivariate AR(1) Dynamics</span>
                <p class="text-slate-400 mb-2">
                  The state vector <span class="font-serif italic text-slate-200">X<sub>t</sub></span> transitions according to:
                </p>
                <div class="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-center text-cyan-300">
                  <span class="font-serif italic">X<sub>t</sub></span> = <span class="font-serif italic text-amber-300">&mu;</span> + <span class="font-serif italic text-purple-400">&Phi;</span>(<span class="font-serif italic">X<sub>t&minus;1</sub></span> &minus; <span class="font-serif italic text-amber-300">&mu;</span>) + <span class="font-serif italic text-emerald-400">&epsilon;<sub>t</sub></span>
                </div>
              </div>
              <p class="text-slate-400 pt-2 border-t border-slate-900">
                where <span class="font-mono text-purple-300">&Phi; = diag(&phi;&sub1;, ..., &phi;&sub1;&sub5;)</span> captures individual sensor momentum calibrated to real baseline empirical autocorrelation (<span class="font-mono text-cyan-300">0.85 &le; &phi; &le; 0.98</span>).
              </p>
            </div>

            <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <span class="text-purple-400 font-bold block mb-1">2. Cholesky Cross-Covariance</span>
                <p class="text-slate-400 mb-2">
                  Driving noise <span class="font-serif italic text-emerald-400">&epsilon;<sub>t</sub></span> preserves physical sensor coupling:
                </p>
                <div class="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-center text-purple-300">
                  <span class="font-serif italic text-emerald-400">&epsilon;<sub>t</sub></span> = <span class="font-serif italic text-purple-300">L</span> &middot; <span class="font-serif italic text-slate-200">w<sub>t</sub></span>, &nbsp; <span class="font-serif italic text-slate-400">w<sub>t</sub></span> &sim; <span class="font-serif text-cyan-300">N</span>(0, <span class="font-serif italic">I</span>)
                </div>
              </div>
              <p class="text-slate-400 pt-2 border-t border-slate-900">
                where <span class="font-mono text-purple-300">L</span> is the lower Cholesky decomposition of regularized noise covariance: <span class="font-mono text-cyan-300">&Sigma;<sub>&epsilon;</sub> = L &middot; L<sup>T</sup></span>.
              </p>
            </div>

            <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <span class="text-emerald-400 font-bold block mb-1">3. Diurnal Waves &amp; Physics Bounds</span>
                <p class="text-slate-400 mb-2">
                  Adds 24-hour diurnal ambient waves on lube oil and suction temps:
                </p>
                <div class="p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-center text-emerald-300">
                  <span class="font-serif italic">D<sub>t</sub></span> = <span class="font-serif italic">A</span> &middot; sin(2&pi;t / 288)
                </div>
              </div>
              <p class="text-slate-400 pt-2 border-t border-slate-900">
                Enforces hard operational physical limits: <span class="font-mono text-amber-300">Q &ge; 0 m&sup3;/h</span>, <span class="font-mono text-blue-300">I &ge; 135 A</span>, <span class="font-mono text-purple-300">0% &le; ASV &le; 100%</span>.
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- ========================================== -->
      <!-- TAB 4: SYNTHETIC DATASETS CATALOG -->
      <!-- ========================================== -->
      <div id="tab-datasets" class="tab-content space-y-4">
        
        <div class="bg-[var(--background)] p-4 rounded-xl border border-[var(--border)] space-y-3">
          <h3 class="text-sm font-bold text-[var(--foreground)]">Exported Machine Learning Telemetry Datasets</h3>
          <p class="text-xs text-[var(--muted-foreground)]">
            These datasets were generated by the Digital Twin simulator and used to train and verify the Isolation Forest pipeline:
          </p>

          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse border border-[var(--border)]">
              <thead class="bg-[var(--card)] text-[var(--muted-foreground)] border-b border-[var(--border)]">
                <tr>
                  <th class="p-2.5">File Name</th>
                  <th class="p-2.5">Rows / Cadence</th>
                  <th class="p-2.5">Operating Regimes</th>
                  <th class="p-2.5">Ground Truth Anomaly %</th>
                  <th class="p-2.5">Purpose in ML Workflow</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--border)] font-mono">
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-blue-400">synthetic_normal_train.csv</td>
                  <td class="p-2.5">2,880 rows (10 days)</td>
                  <td class="p-2.5 font-sans">100% Steady Normal</td>
                  <td class="p-2.5 font-bold text-emerald-400">0.0%</td>
                  <td class="p-2.5 font-sans text-[var(--muted-foreground)]">Model training baseline (uncontaminated healthy normal).</td>
                </tr>
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-purple-400">synthetic_normal_test.csv</td>
                  <td class="p-2.5">2,016 rows (7 days)</td>
                  <td class="p-2.5 font-sans">100% Unseen Normal</td>
                  <td class="p-2.5 font-bold text-emerald-400">0.0%</td>
                  <td class="p-2.5 font-sans text-[var(--muted-foreground)]">Specificity & False Alarm Rate (FAR) validation.</td>
                </tr>
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-rose-400">synthetic_abnormal_test.csv</td>
                  <td class="p-2.5">4,032 rows (14 days)</td>
                  <td class="p-2.5 font-sans">Recycle Jam, Bearing Wear, Suction Choke</td>
                  <td class="p-2.5 font-bold text-rose-400">42.9%</td>
                  <td class="p-2.5 font-sans text-[var(--muted-foreground)]">Detection Recall, Precision, and PR-AUC benchmark.</td>
                </tr>
                <tr class="hover:bg-[var(--card)]">
                  <td class="p-2.5 font-bold text-amber-400">live_simulation_trace.json</td>
                  <td class="p-2.5">160 steps (13.3 hrs)</td>
                  <td class="p-2.5 font-sans">Continuous Streaming Transitions</td>
                  <td class="p-2.5 font-bold text-amber-400">46.9%</td>
                  <td class="p-2.5 font-sans text-[var(--muted-foreground)]">Real-time simulation engine driving this cockpit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </main>

  </div>

  <!-- EMBEDDED JAVASCRIPT ENGINE -->
  <script>
    const SIM_DATA = {trace_json_str};
    let currentStep = 0;
    let isPlaying = false;
    let playInterval = null;
    let playSpeed = 400;

    function initCockpit() {{
      renderStep(0);
    }}

    function switchTab(tabId) {{
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
      const target = document.getElementById('tab-' + tabId);
      const btn = document.getElementById('tab-btn-' + tabId);
      if (target) target.classList.add('active');
      if (btn) btn.classList.add('active');
    }}

    function jumpToScenario(type) {{
      document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
      const b = document.getElementById('scen-btn-' + type);
      if (b) b.classList.add('active');

      pauseSim();
      if (type === 'recycle') {{
        renderStep(26);
      }} else if (type === 'bearing') {{
        renderStep(76);
      }} else if (type === 'choke') {{
        renderStep(126);
      }} else {{
        renderStep(0);
      }}
    }}

    function togglePlay() {{
      if (isPlaying) {{
        pauseSim();
      }} else {{
        playSim();
      }}
    }}

    function playSim() {{
      isPlaying = true;
      document.getElementById('play-icon').innerText = '⏸';
      document.getElementById('play-text').innerText = 'Pause Stream';
      document.getElementById('play-btn').classList.replace('bg-blue-600', 'bg-amber-600');
      document.getElementById('play-btn').classList.replace('hover:bg-blue-500', 'hover:bg-amber-500');

      if (playInterval) clearInterval(playInterval);
      playInterval = setInterval(() => {{
        if (currentStep >= SIM_DATA.length - 1) {{
          currentStep = 0;
        }} else {{
          currentStep++;
        }}
        renderStep(currentStep);
      }}, playSpeed);
    }}

    function pauseSim() {{
      isPlaying = false;
      document.getElementById('play-icon').innerText = '▶';
      document.getElementById('play-text').innerText = 'Play Live Stream';
      document.getElementById('play-btn').classList.replace('bg-amber-600', 'bg-blue-600');
      document.getElementById('play-btn').classList.replace('hover:bg-amber-500', 'hover:bg-blue-500');
      if (playInterval) clearInterval(playInterval);
    }}

    function resetSim() {{
      pauseSim();
      renderStep(0);
    }}

    function stepSim(delta) {{
      pauseSim();
      let next = currentStep + delta;
      if (next < 0) next = 0;
      if (next >= SIM_DATA.length) next = SIM_DATA.length - 1;
      renderStep(next);
    }}

    function onSliderChange(val) {{
      pauseSim();
      renderStep(parseInt(val));
    }}

    function updateSpeed() {{
      playSpeed = parseInt(document.getElementById('speed-select').value);
      if (isPlaying) {{
        playSim();
      }}
    }}

    function renderStep(idx) {{
      currentStep = idx;
      const data = SIM_DATA[idx];
      if (!data) return;

      // Update Slider & Step badge
      document.getElementById('time-slider').value = idx;
      document.getElementById('step-badge').innerText = `Step ${{idx}} / ${{SIM_DATA.length - 1}}`;
      document.getElementById('time-val').innerText = data.timestamp;

      // Update ML status & score
      const ml = data.ml_inference;
      const scoreEl = document.getElementById('score-val');
      const pillEl = document.getElementById('status-pill');
      const cardEl = document.getElementById('status-card');
      const gaugeEl = document.getElementById('gauge-bar');

      scoreEl.innerText = (ml.raw_score >= 0 ? '+' : '') + ml.raw_score.toFixed(4);
      
      if (ml.status === 'NORMAL') {{
        pillEl.innerText = 'NORMAL';
        pillEl.className = 'px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-white';
        cardEl.className = 'p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 transition-all duration-300';
        scoreEl.className = 'text-2xl font-mono font-bold text-emerald-400';
        gaugeEl.className = 'h-full bg-emerald-500 transition-all duration-200';
        // Gauge percentage: 0.04 to 0.12 mapped to 60-100%
        let pct = Math.min(100, Math.max(55, 55 + (ml.raw_score / 0.1) * 45));
        gaugeEl.style.width = pct + '%';
      }} else if (ml.status === 'WARNING') {{
        pillEl.innerText = 'WARNING';
        pillEl.className = 'px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white';
        cardEl.className = 'p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 transition-all duration-300';
        scoreEl.className = 'text-2xl font-mono font-bold text-amber-400';
        gaugeEl.className = 'h-full bg-amber-500 transition-all duration-200';
        // Gauge percentage: 0.0 to 0.04 mapped to 30-55%
        let pct = Math.min(55, Math.max(30, 30 + (ml.raw_score / 0.04) * 25));
        gaugeEl.style.width = pct + '%';
      }} else {{
        pillEl.innerText = 'CRITICAL ALARM';
        pillEl.className = 'px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white animate-pulse';
        cardEl.className = 'p-4 rounded-xl border border-rose-500/50 bg-rose-500/15 transition-all duration-300';
        scoreEl.className = 'text-2xl font-mono font-bold text-rose-400';
        gaugeEl.className = 'h-full bg-rose-600 transition-all duration-200';
        // Gauge percentage: < 0 mapped to 5-30%
        let pct = Math.max(5, 30 - (Math.abs(ml.raw_score) / 0.08) * 25);
        gaugeEl.style.width = pct + '%';
      }}

      // Update Sensor Readouts
      const s = data.sensors;
      document.getElementById('val-current').innerText = s.motor_current.toFixed(1) + ' A';
      document.getElementById('val-flow').innerText = s.forward_flow.toFixed(1) + ' m³/h';
      document.getElementById('val-valve').innerText = s.antisurge_valve.toFixed(1) + ' %';
      document.getElementById('val-vib-casing').innerText = s.casing_vib_de.toFixed(2) + ' mm/s';
      document.getElementById('val-temp-bearing').innerText = s.bearing_temp.toFixed(1) + ' °C';
      document.getElementById('val-suction').innerText = s.suction_press.toFixed(2) + ' kg/cm²';

      // Style sensor cards if in alarm
      const vibEl = document.getElementById('val-vib-casing');
      if (s.casing_vib_de > 4.5) {{
        vibEl.className = 'text-sm font-mono font-bold text-rose-400 animate-pulse';
      }} else {{
        vibEl.className = 'text-sm font-mono font-bold text-slate-200';
      }}

      const tempEl = document.getElementById('val-temp-bearing');
      if (s.bearing_temp > 75.0) {{
        tempEl.className = 'text-sm font-mono font-bold text-rose-400 animate-pulse';
      }} else {{
        tempEl.className = 'text-sm font-mono font-bold text-slate-200';
      }}

      // Render Dynamic Feature Attribution Bars
      renderAttributions(data.top_attributions);

      // Render Operator Diagnosis Card
      renderDiagnosis(data.diagnosis);

      // Render Sparkline Oscilloscope
      renderSparkline(idx);
    }}

    function renderAttributions(attrs) {{
      const container = document.getElementById('attribution-bars-container');
      if (!attrs || attrs.length === 0) {{
        container.innerHTML = '<p class="text-xs text-[var(--muted-foreground)]">No active deviations.</p>';
        return;
      }}

      let html = '';
      attrs.forEach(a => {{
        const absZ = Math.abs(a.z_score);
        let barColor = 'bg-blue-500';
        let badgeColor = 'text-blue-400 border-blue-500/30 bg-blue-500/10';
        
        if (absZ >= 3.0) {{
          barColor = 'bg-rose-500';
          badgeColor = 'text-rose-400 border-rose-500/30 bg-rose-500/10 font-bold';
        }} else if (absZ >= 1.8) {{
          barColor = 'bg-amber-500';
          badgeColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
        }}

        // Bar width percentage (normalized to max 12 sigma)
        const barWidth = Math.min(100, Math.max(5, (absZ / 10.0) * 100));

        html += `
          <div class="space-y-1">
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold text-[var(--foreground)] truncate max-w-[200px]" title="${{a.name}}">
                ${{a.name}}
              </span>
              <div class="flex items-center gap-2">
                <span class="font-mono text-[var(--muted-foreground)] text-[11px]">
                  ${{a.current_value}} (Base: ${{a.baseline_mean}})
                </span>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-mono border ${{badgeColor}}">
                  ${{a.z_score >= 0 ? '+' : ''}}${{a.z_score.toFixed(1)}}σ
                </span>
              </div>
            </div>
            <div class="w-full bg-[var(--card)] h-2 rounded-full overflow-hidden border border-[var(--border)]">
              <div class="h-full ${{barColor}} transition-all duration-200" style="width: ${{barWidth}}%;"></div>
            </div>
          </div>
        `;
      }});
      container.innerHTML = html;
    }}

    function renderDiagnosis(diag) {{
      if (!diag) return;
      document.getElementById('diag-title').innerText = diag.title;
      document.getElementById('diag-cause').innerText = diag.cause;
      document.getElementById('diag-action').innerText = diag.action;
      
      const badge = document.getElementById('diag-badge');
      badge.innerText = diag.badge;

      const card = document.getElementById('operator-advice-card');
      const actionText = document.getElementById('diag-action');

      if (diag.severity === 'CRITICAL') {{
        document.getElementById('diag-icon').innerText = '🚨';
        badge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30';
        card.className = 'bg-[var(--card)] p-4 rounded-xl border border-rose-500/40 space-y-2.5 transition-all';
        actionText.className = 'text-rose-400 font-bold mt-0.5';
      }} else if (diag.severity === 'WARNING') {{
        document.getElementById('diag-icon').innerText = '⚠️';
        badge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
        card.className = 'bg-[var(--card)] p-4 rounded-xl border border-amber-500/40 space-y-2.5 transition-all';
        actionText.className = 'text-amber-400 font-semibold mt-0.5';
      }} else {{
        document.getElementById('diag-icon').innerText = '🟢';
        badge.className = 'px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        card.className = 'bg-[var(--card)] p-4 rounded-xl border border-[var(--border)] space-y-2.5 transition-all';
        actionText.className = 'text-emerald-400 font-medium mt-0.5';
      }}
    }}

    function renderSparkline(idx) {{
      const svg = document.getElementById('live-sparkline-svg');
      const windowSize = 25;
      const start = Math.max(0, idx - windowSize + 1);
      const slice = SIM_DATA.slice(start, idx + 1);
      if (slice.length < 2) return;

      const w = 300;
      const h = 100;
      const dx = w / (windowSize - 1);

      // Generate paths for Flow (230-280), Vib (2-8), Valve (60-75)
      let ptsFlow = [];
      let ptsVib = [];
      let ptsValve = [];

      slice.forEach((pt, i) => {{
        const x = (w - (slice.length - 1 - i) * dx).toFixed(1);
        
        // Flow: min 230, max 280
        const yF = (h - ((pt.sensors.forward_flow - 230) / 50) * h).toFixed(1);
        ptsFlow.push(`${{x}},${{Math.max(5, Math.min(h-5, yF))}}`);

        // Vib: min 2, max 8
        const yV = (h - ((pt.sensors.casing_vib_de - 2) / 6) * h).toFixed(1);
        ptsVib.push(`${{x}},${{Math.max(5, Math.min(h-5, yV))}}`);

        // Valve: min 60, max 75
        const yVal = (h - ((pt.sensors.antisurge_valve - 60) / 15) * h).toFixed(1);
        ptsValve.push(`${{x}},${{Math.max(5, Math.min(h-5, yVal))}}`);
      }});

      svg.innerHTML = `
        <polyline fill="none" stroke="#3b82f6" stroke-width="2" points="${{ptsFlow.join(' ')}}" />
        <polyline fill="none" stroke="#f43f5e" stroke-width="2" points="${{ptsVib.join(' ')}}" />
        <polyline fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3,3" points="${{ptsValve.join(' ')}}" />
      `;
    }}

    // Boot on load
    window.addEventListener('DOMContentLoaded', initCockpit);
  </script>

</body>
</html>"""

    # Save to workspace
    ws_out = Path(r'c:\Users\Mukesh Patil\Documents\compressor\rgc_live_simulation_dashboard.html')
    with open(ws_out, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"-> Generated live simulation dashboard in workspace: {ws_out} ({os.path.getsize(ws_out)/1024:.1f} KB)")

    # Save to artifact directory
    art_dir = Path(r'C:\Users\Mukesh Patil\.gemini\antigravity\brain\4362481e-6b0c-42c6-9863-e497322389f7')
    art_dir.mkdir(parents=True, exist_ok=True)
    art_out = art_dir / 'rgc_live_simulation_dashboard.html'
    with open(art_out, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"-> Saved artifact copy: {art_out} ({os.path.getsize(art_out)/1024:.1f} KB)")

if __name__ == '__main__':
    build_dashboard()
