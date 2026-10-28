import React from 'react';

export const DatasetsCatalog: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
      <h3 className="text-sm font-bold text-white flex items-center gap-2">
        <span>💾</span> Exported Machine Learning Datasets &amp; Telemetry Catalog
      </h3>
      <p className="text-xs text-slate-300">
        These datasets were synthesized by the Digital Twin simulator and used to train and verify the Isolation Forest pipeline:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse border border-slate-800 rounded-lg overflow-hidden">
          <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
            <tr>
              <th className="p-3">File Name</th>
              <th className="p-3">Rows / Sampling</th>
              <th className="p-3">Operating Regimes</th>
              <th className="p-3">Ground Truth Anomaly %</th>
              <th className="p-3">Purpose in Pipeline</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-950/60 font-mono">
            <tr className="hover:bg-slate-900 transition">
              <td className="p-3 font-bold text-blue-400">synthetic_normal_train.csv</td>
              <td className="p-3">2,880 rows (10 days @ 5-min)</td>
              <td className="p-3 font-sans text-slate-200">100% Steady Normal Baseline</td>
              <td className="p-3 text-emerald-400 font-bold">0.0%</td>
              <td className="p-3 font-sans text-slate-400">Model training baseline (uncontaminated healthy normal).</td>
            </tr>
            <tr className="hover:bg-slate-900 transition">
              <td className="p-3 font-bold text-purple-400">synthetic_normal_test.csv</td>
              <td className="p-3">2,016 rows (7 days @ 5-min)</td>
              <td className="p-3 font-sans text-slate-200">100% Unseen Normal Test Data</td>
              <td className="p-3 text-emerald-400 font-bold">0.0%</td>
              <td className="p-3 font-sans text-slate-400">Specificity &amp; False Alarm Rate (FAR) validation.</td>
            </tr>
            <tr className="hover:bg-slate-900 transition">
              <td className="p-3 font-bold text-rose-400">synthetic_abnormal_test.csv</td>
              <td className="p-3">4,032 rows (14 days @ 5-min)</td>
              <td className="p-3 font-sans text-slate-200">Recycle Jam, Bearing Friction, Suction Choke</td>
              <td className="p-3 text-rose-400 font-bold">42.9% (1,728 faults)</td>
              <td className="p-3 font-sans text-slate-400">Detection Recall, Precision, and PR-AUC benchmark.</td>
            </tr>
            <tr className="hover:bg-slate-900 transition">
              <td className="p-3 font-bold text-amber-400">live_simulation_trace.json</td>
              <td className="p-3">160 steps (13.3 hours @ 5-min)</td>
              <td className="p-3 font-sans text-slate-200">Continuous Streaming Transitions</td>
              <td className="p-3 text-amber-400 font-bold">46.9% (75 faults)</td>
              <td className="p-3 font-sans text-slate-400">Real-time simulation engine driving this live cockpit.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
