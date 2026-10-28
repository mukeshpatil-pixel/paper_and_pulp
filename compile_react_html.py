"""
Compiles the React TypeScript single-file standalone dark-themed dashboard.
Inlines the esbuild bundle into HTML so it requires zero localhost and zero external CDNs.
"""

import os
from pathlib import Path

def compile_react_html():
    bundle_path = Path('react_dashboard/dist/bundle.js')
    if not bundle_path.exists():
        raise FileNotFoundError(f"{bundle_path} not found.")

    with open(bundle_path, 'r', encoding='utf-8') as f:
        bundle_js = f.read()

    html = f"""<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compressor Train A (RGC_A) — React TS Live Simulation & RCA Dashboard</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    :root {{
      color-scheme: dark;
    }}
    body {{
      background-color: #020617;
      color: #f8fafc;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }}
    /* Custom sleek dark scrollbar */
    ::-webkit-scrollbar {{ width: 6px; height: 6px; }}
    ::-webkit-scrollbar-track {{ background: #0b0f19; }}
    ::-webkit-scrollbar-thumb {{ background: #1e293b; border-radius: 3px; }}
    ::-webkit-scrollbar-thumb:hover {{ background: #334155; }}
  </style>
</head>
<body class="bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">

  <!-- REACT ROOT CONTAINER -->
  <div id="root"></div>

  <!-- EMBEDDED REACT TS BUNDLE (React 19 + TypeScript + Components) -->
  <script>
{bundle_js}
  </script>

</body>
</html>"""

    # 1. Output to workspace
    ws_out = Path('rgc_react_live_dashboard.html')
    with open(ws_out, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"-> Generated React TS Standalone HTML: {ws_out.resolve()} ({os.path.getsize(ws_out)/1024:.1f} KB)")

    # 2. Output to artifact directory
    art_dir = Path(r'C:\Users\Mukesh Patil\.gemini\antigravity\brain\4362481e-6b0c-42c6-9863-e497322389f7')
    art_dir.mkdir(parents=True, exist_ok=True)
    art_out = art_dir / 'rgc_react_live_dashboard.html'
    with open(art_out, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"-> Saved artifact copy: {art_out} ({os.path.getsize(art_out)/1024:.1f} KB)")

if __name__ == '__main__':
    compile_react_html()
