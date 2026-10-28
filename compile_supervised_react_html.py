"""
Compiles the Supervised Multi-Class React TypeScript standalone dashboard.
Inlines the esbuild bundle into HTML so it requires zero localhost and zero external CDNs.
Saves both in the workspace and in the artifacts directory.
"""

import os
from pathlib import Path

def compile_supervised_react_html():
    bundle_path = Path('react_supervised_dashboard/dist/bundle.js')
    if not bundle_path.exists():
        raise FileNotFoundError(f"{bundle_path} not found.")

    with open(bundle_path, 'r', encoding='utf-8') as f:
        bundle_js = f.read()

    html = f"""<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compressor Train A (RGC_A) — Supervised Multi-Class Diagnostic POC</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    :root {{
      color-scheme: dark;
    }}
    body {{
      background-color: #020617;
      color: #f8fafc;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      transition: background-color 0.2s ease, color 0.2s ease;
    }}
    /* Custom sleek dark scrollbar */
    ::-webkit-scrollbar {{ width: 6px; height: 6px; }}
    ::-webkit-scrollbar-track {{ background: #0b0f19; }}
    ::-webkit-scrollbar-thumb {{ background: #1e293b; border-radius: 3px; }}
    ::-webkit-scrollbar-thumb:hover {{ background: #334155; }}

    /* ========================================================= */
    /* WHITE / LIGHT THEME COMPLETE EXECUTIVE STYLES             */
    /* ========================================================= */
    html.light {{
      color-scheme: light;
    }}
    html.light body {{
      background-color: #f1f5f9 !important; /* slate-100 */
      color: #0f172a !important; /* slate-900 */
    }}
    html.light ::-webkit-scrollbar-track {{ background: #e2e8f0; }}
    html.light ::-webkit-scrollbar-thumb {{ background: #94a3b8; border-radius: 3px; }}
    html.light ::-webkit-scrollbar-thumb:hover {{ background: #64748b; }}

    /* Outer and inner container backgrounds */
    html.light .bg-slate-950 {{
      background-color: #f8fafc !important; /* slate-50 */
    }}
    html.light .bg-slate-900,
    html.light .bg-slate-900\/90,
    html.light .bg-slate-900\/80,
    html.light .bg-slate-900\/60,
    html.light .bg-slate-900\/50 {{
      background-color: #ffffff !important;
    }}
    html.light .bg-slate-950\/80,
    html.light .bg-slate-950\/70,
    html.light .bg-slate-950\/60,
    html.light .bg-slate-950\/40 {{
      background-color: #f1f5f9 !important;
    }}
    html.light .bg-slate-800,
    html.light .bg-slate-800\/80,
    html.light .bg-slate-800\/60,
    html.light .bg-slate-800\/40 {{
      background-color: #e2e8f0 !important;
    }}
    html.light .hover\:bg-slate-800:hover {{
      background-color: #e2e8f0 !important;
    }}
    html.light .hover\:bg-slate-700:hover {{
      background-color: #cbd5e1 !important;
    }}

    /* Light Theme Borders */
    html.light .border-slate-800,
    html.light .border-slate-800\/90,
    html.light .border-slate-800\/80,
    html.light .border-slate-800\/60 {{
      border-color: #e2e8f0 !important;
    }}
    html.light .border-slate-700 {{
      border-color: #cbd5e1 !important;
    }}
    html.light .divide-slate-800 > :not([hidden]) ~ :not([hidden]),
    html.light .divide-slate-800\/60 > :not([hidden]) ~ :not([hidden]) {{
      border-color: #e2e8f0 !important;
    }}

    /* Light Theme Text Colors */
    html.light .text-white,
    html.light .text-slate-100,
    html.light .text-slate-200 {{
      color: #0f172a !important; /* crisp slate-900 */
    }}
    html.light .text-slate-300 {{
      color: #1e293b !important;
    }}
    html.light .text-slate-400 {{
      color: #475569 !important; /* slate-600 */
    }}
    html.light .text-slate-500 {{
      color: #64748b !important; /* slate-500 */
    }}

    /* Light Theme Executive Status Banners */
    html.light .bg-emerald-950\/40 {{
      background-color: #ecfdf5 !important;
      border-color: #a7f3d0 !important;
    }}
    html.light .text-emerald-400 {{
      color: #059669 !important;
    }}
    html.light .bg-emerald-500\/20,
    html.light .bg-emerald-500\/10 {{
      background-color: #d1fae5 !important;
      color: #047857 !important;
      border-color: #a7f3d0 !important;
    }}

    html.light .bg-orange-950\/40 {{
      background-color: #fff7ed !important;
      border-color: #fed7aa !important;
    }}
    html.light .text-orange-400 {{
      color: #c2410c !important;
    }}
    html.light .bg-orange-500\/20,
    html.light .bg-orange-500\/10 {{
      background-color: #ffedd5 !important;
      color: #c2410c !important;
      border-color: #fed7aa !important;
    }}

    html.light .bg-rose-950\/40 {{
      background-color: #fff1f2 !important;
      border-color: #fecdd3 !important;
    }}
    html.light .text-rose-400 {{
      color: #e11d48 !important;
    }}
    html.light .bg-rose-500\/20,
    html.light .bg-rose-500\/10 {{
      background-color: #ffe4e6 !important;
      color: #be123c !important;
      border-color: #fecdd3 !important;
    }}

    html.light .bg-purple-950\/40 {{
      background-color: #faf5ff !important;
      border-color: #e9d5ff !important;
    }}
    html.light .text-purple-400 {{
      color: #7c3aed !important;
    }}
    html.light .bg-purple-500\/20,
    html.light .bg-purple-500\/10 {{
      background-color: #f3e8ff !important;
      color: #6d28d9 !important;
      border-color: #e9d5ff !important;
    }}

    html.light .bg-amber-950\/40 {{
      background-color: #fffbeb !important;
      border-color: #fde68a !important;
    }}
    html.light .text-amber-400 {{
      color: #d97706 !important;
    }}
    html.light .bg-amber-500\/20,
    html.light .bg-amber-500\/10 {{
      background-color: #fef3c7 !important;
      color: #b45309 !important;
      border-color: #fde68a !important;
    }}

    html.light .text-cyan-400 {{
      color: #0284c7 !important;
    }}
    html.light .bg-blue-500\/10,
    html.light .bg-blue-500\/20 {{
      background-color: #eff6ff !important;
      color: #1d4ed8 !important;
      border-color: #bfdbfe !important;
    }}
    html.light .text-blue-400 {{
      color: #2563eb !important;
    }}

    /* Card Shadows in Light Mode */
    html.light .shadow-xl,
    html.light .shadow-2xl,
    html.light .shadow-lg {{
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04) !important;
    }}

    /* Waveform chart SVG in light mode */
    html.light .rounded-xl.bg-slate-900\/60 {{
      background-color: #f8fafc !important;
      border-color: #e2e8f0 !important;
    }}
    html.light circle[stroke="#020617"] {{
      stroke: #ffffff !important;
    }}
    html.light line[stroke="#334155"] {{
      stroke: #cbd5e1 !important;
    }}

    /* Selects and range inputs in light mode */
    html.light select.bg-slate-900 {{
      background-color: #ffffff !important;
      color: #0f172a !important;
      border-color: #cbd5e1 !important;
    }}
    html.light input[type="range"] {{
      background-color: #cbd5e1 !important;
    }}
  </style>
</head>
<body class="bg-slate-950 text-slate-100 antialiased selection:bg-orange-600 selection:text-white">

  <!-- REACT ROOT CONTAINER -->
  <div id="root"></div>

  <!-- EMBEDDED REACT TS BUNDLE (React 19 + TypeScript + Multi-Class Supervised Components) -->
  <script>
{bundle_js}
  </script>

</body>
</html>"""

    # 1. Output to workspace
    ws_out = Path('rgc_supervised_live_dashboard.html')
    with open(ws_out, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"-> Generated Supervised HTML in workspace: {ws_out.resolve()} ({os.path.getsize(ws_out)/1024:.1f} KB)")

    # 2. Output to artifact directory
    art_dir = Path(r'C:\Users\Mukesh Patil\.gemini\antigravity\brain\4362481e-6b0c-42c6-9863-e497322389f7')
    art_dir.mkdir(parents=True, exist_ok=True)
    art_out = art_dir / 'rgc_supervised_live_dashboard.html'
    with open(art_out, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"-> Saved artifact copy: {art_out} ({os.path.getsize(art_out)/1024:.1f} KB)")

if __name__ == '__main__':
    compile_supervised_react_html()
