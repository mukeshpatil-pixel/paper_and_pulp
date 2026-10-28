"""
Exports JSON trace and metrics into TypeScript files for react_supervised_dashboard.
"""

import json
from pathlib import Path

def export_data():
    trace_path = Path('rgc_supervised_simulation_trace.json')
    metrics_path = Path('rgc_supervised_model_metrics.json')

    with open(trace_path, 'r', encoding='utf-8') as f:
        trace_data = json.load(f)

    with open(metrics_path, 'r', encoding='utf-8') as f:
        metrics_data = json.load(f)

    out_sim = Path('react_supervised_dashboard/src/data/simulationData.ts')
    with open(out_sim, 'w', encoding='utf-8') as f:
        f.write("export const SUPERVISED_SIMULATION_DATA = ")
        json.dump(trace_data, f, indent=2)
        f.write(";\n")
    print(f"Exported {out_sim} ({len(trace_data)} steps)")

    out_metrics = Path('react_supervised_dashboard/src/data/metricsData.ts')
    with open(out_metrics, 'w', encoding='utf-8') as f:
        f.write("export const SUPERVISED_METRICS_DATA = ")
        json.dump(metrics_data, f, indent=2)
        f.write(";\n")
    print(f"Exported {out_metrics}")

if __name__ == '__main__':
    export_data()
