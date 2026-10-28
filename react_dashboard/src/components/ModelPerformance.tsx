import React from 'react';

export const ModelPerformance: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* KPI METRIC CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-400">Precision-Recall AUC</p>
          <p className="text-xl font-bold text-blue-400 font-mono">0.9121</p>
          <p className="text-[11px] text-emerald-400 font-semibold">High Reliability</p>
        </div>
        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-400">ROC-AUC</p>
          <p className="text-xl font-bold text-indigo-400 font-mono">0.9543</p>
          <p className="text-[11px] text-slate-400">Global Separation</p>
        </div>
        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-400">Tuned Recall</p>
          <p className="text-xl font-bold text-emerald-400 font-mono">85.5%</p>
          <p className="text-[11px] text-slate-400">Incipient Detection</p>
        </div>
        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-400">Tuned Precision</p>
          <p className="text-xl font-bold text-purple-400 font-mono">88.4%</p>
          <p className="text-[11px] text-slate-400">Low False Alarms</p>
        </div>
        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-400">F1-Score</p>
          <p className="text-xl font-bold text-amber-400 font-mono">0.869</p>
          <p className="text-[11px] text-slate-400">Harmonic Balance</p>
        </div>
        <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-400">Normal Specificity</p>
          <p className="text-xl font-bold text-emerald-400 font-mono">97.87%</p>
          <p className="text-[11px] text-slate-400">Unseen Clean Data</p>
        </div>
      </div>

      {/* RESOLVING PRECISION RECALL PARADOX */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span>⚖️</span> Resolving the Industrial Precision vs. Recall Dilemma
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          In industrial compressor predictive maintenance, operators face two competing operational risks:
          <strong className="text-rose-400"> (1) Low Recall</strong> misses developing machine faults causing sudden catastrophic plant trips, while
          <strong className="text-amber-400"> (2) Low Precision</strong> generates endless false alarms causing technician alarm fatigue.
          The calibrated Two-Tier Thresholding strategy solves this dilemma:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-slate-800 rounded-lg overflow-hidden">
            <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3">Operating Strategy</th>
                <th className="p-3">Decision Score Cut</th>
                <th className="p-3">Recall</th>
                <th className="p-3">Precision</th>
                <th className="p-3">F1-Score</th>
                <th className="p-3">Operational Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-950/60 font-mono">
              <tr className="hover:bg-slate-900 transition">
                <td className="p-3 font-bold text-blue-400 font-sans">Two-Tier Early Warning (Tuned)</td>
                <td className="p-3 text-cyan-300 font-bold">s &lt; +0.04</td>
                <td className="p-3 text-emerald-400 font-bold">85.5%</td>
                <td className="p-3 text-purple-400 font-bold">88.4%</td>
                <td className="p-3 text-amber-400 font-bold">0.869</td>
                <td className="p-3 font-sans text-slate-300">
                  Recommended operational setting. Catches incipient ramping faults early before mechanical babbit wear or trip.
                </td>
              </tr>
              <tr className="hover:bg-slate-900 transition">
                <td className="p-3 font-bold text-rose-400 font-sans">Default Hard Trip Boundary</td>
                <td className="p-3 text-slate-400">s &lt; 0.00</td>
                <td className="p-3 text-rose-400">28.1%</td>
                <td className="p-3 text-purple-400 font-bold">93.3%</td>
                <td className="p-3 text-slate-400">0.431</td>
                <td className="p-3 font-sans text-slate-400">
                  Only alarms after full parameter deviation has already occurred. High precision, but misses early warning window.
                </td>
              </tr>
              <tr className="hover:bg-slate-900 transition">
                <td className="p-3 font-bold text-amber-400 font-sans">Maximum Sensitivity Mode</td>
                <td className="p-3 text-cyan-300">s &lt; +0.05</td>
                <td className="p-3 text-emerald-400 font-bold">92.6%</td>
                <td className="p-3 text-amber-400">85.5%</td>
                <td className="p-3 text-amber-400">0.889</td>
                <td className="p-3 font-sans text-slate-400">
                  Highest capture rate. Ideal during summer high-ambient operations or post-turnaround commissioning.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAULT SPECIFIC BREAKDOWN */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span>🎯</span> Fault-Specific Benchmark Detection Rates
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="font-bold text-rose-400 text-sm">Anti-Surge Recycle Jam</span>
            <p className="text-slate-400">
              ASV held open at 66%, net flow collapses -7.6σ, casing vibration spikes into ISO Zone D.
            </p>
            <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">Recall (Tuned):</span>
              <span className="text-emerald-400 font-bold">94.2%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="font-bold text-amber-400 text-sm">Bearing Wear &amp; Runaway</span>
            <p className="text-slate-400">
              Radial vibration climbs to 75 μm, Journal bearing temperature climbs +24 °C.
            </p>
            <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">Recall (Tuned):</span>
              <span className="text-emerald-400 font-bold">89.8%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="font-bold text-purple-400 text-sm">Suction Strainer Choke</span>
            <p className="text-slate-400">
              Suction pressure drops -11.2σ, gas starvation distorts compression pressure ratio.
            </p>
            <div className="pt-2 flex items-center justify-between font-mono text-[11px]">
              <span className="text-slate-400">Recall (Tuned):</span>
              <span className="text-emerald-400 font-bold">96.5%</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
