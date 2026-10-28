import React from 'react';
import { SUPERVISED_METRICS_DATA } from '../data/metricsData';

export const SupervisedPerformance: React.FC = () => {
  const m = SUPERVISED_METRICS_DATA;
  const classes = m.target_classes;
  const cm = m.confusion_matrix;
  const rep = m.classification_report;
  const importances = m.feature_importances;

  return (
    <div className="space-y-6">
      
      {/* EXECUTIVE HIGHLIGHTS BANNER */}
      <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Direct Instrument RCA Supervised Benchmark
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              70-30 Chronological Train/Test Split
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
            Supervised Direct RCA Model Reliability
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Trained on 4,200 continuous operational steps and validated against 1,800 completely unseen test steps across 5 direct physical component failure modes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-center">
          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 min-w-[130px]">
            <div className="text-xs font-mono text-slate-400">Test Accuracy</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-0.5">
              {(m.accuracy * 100).toFixed(1)}%
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">1,791 / 1,800 Correct</div>
          </div>

          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 min-w-[130px]">
            <div className="text-xs font-mono text-slate-400">Macro F1 Score</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono mt-0.5">
              {m.macro_f1.toFixed(4)}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Harmonic Mean</div>
          </div>

          <div className="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 min-w-[130px]">
            <div className="text-xs font-mono text-slate-400">Normal Recall</div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono mt-0.5">
              100%
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Zero False Alarms</div>
          </div>
        </div>
      </div>

      {/* 2-COLUMN: CONFUSION MATRIX & PER-CLASS REPORT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* CONFUSION MATRIX (6 COLS) */}
        <div className="lg:col-span-6 p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Direct RCA Confusion Matrix</h3>
              <p className="text-xs text-slate-400">Rows: Actual Ground Truth • Columns: Model RCA Predictions</p>
            </div>
            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
              N=1,800
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                  <th className="p-2 text-left">Actual \ Pred</th>
                  <th className="p-2 text-emerald-400">NORM</th>
                  <th className="p-2 text-orange-400">OIL</th>
                  <th className="p-2 text-rose-400">BEAR</th>
                  <th className="p-2 text-purple-400">AIR</th>
                  <th className="p-2 text-amber-400">CHOKE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
                {classes.map((actualName: string, rIdx: number) => (
                  <tr key={actualName} className="hover:bg-slate-800/30 transition">
                    <td className="p-2 text-left font-sans font-bold text-slate-300">
                      {actualName.replace(/_/g, ' ')}
                    </td>
                    {cm[rIdx].map((count: number, cIdx: number) => {
                      const isDiag = rIdx === cIdx;
                      let bg = 'bg-slate-950/40 text-slate-500';
                      if (isDiag && count > 0) {
                        bg = 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30';
                      } else if (!isDiag && count > 0) {
                        bg = 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30';
                      }
                      return (
                        <td key={cIdx} className="p-2">
                          <span className={`px-2 py-1 rounded inline-block min-w-[36px] ${bg}`}>
                            {count}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            ✅ <strong className="text-slate-200">RCA Diagnostic Takeaway:</strong> 100% of Oil Leakage and Bearing Failure test incidents are classified correctly with zero cross-contamination. 9 initial ramp-in samples of pneumatic Air Leakage and Suction Filter Choke are caught in the transition zone before reaching full 3σ deviation.
          </p>
        </div>

        {/* PER-CLASS METRICS TABLE (6 COLS) */}
        <div className="lg:col-span-6 p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">Precision &amp; Recall By Direct RCA Mode</h3>
              <p className="text-xs text-slate-400">Component-specific reliability metrics</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              High Precision
            </span>
          </div>

          <div className="space-y-3">
            {classes.map((clsName: string) => {
              const row = rep[clsName];
              let color = 'text-blue-400';
              let badge = 'bg-blue-500/10 border-blue-500/20';
              if (clsName === 'normal_operation') {
                color = 'text-emerald-400';
                badge = 'bg-emerald-500/10 border-emerald-500/20';
              } else if (clsName === 'oil_leakage') {
                color = 'text-orange-400';
                badge = 'bg-orange-500/10 border-orange-500/20';
              } else if (clsName === 'bearing_failure') {
                color = 'text-rose-400';
                badge = 'bg-rose-500/10 border-rose-500/20';
              } else if (clsName === 'air_leakage') {
                color = 'text-purple-400';
                badge = 'bg-purple-500/10 border-purple-500/20';
              } else if (clsName === 'suction_filter_choke') {
                color = 'text-amber-400';
                badge = 'bg-amber-500/10 border-amber-500/20';
              }

              return (
                <div key={clsName} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${badge} ${color}`}>
                      {clsName.replace(/_/g, ' ')}
                    </span>
                    <span className="text-[11px] text-slate-500 ml-2 font-mono">
                      Support: {row.support}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Precision</span>
                      <span className="font-bold text-white">{(row.precision * 100).toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Recall</span>
                      <span className="font-bold text-white">{(row.recall * 100).toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">F1-Score</span>
                      <span className="font-bold text-cyan-400">{(row['f1-score'] * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            🛡️ <strong className="text-slate-200">100% Precision on Bearing Failure &amp; Oil Leakage:</strong> Guarantees that plant mechanical teams are never dispatched to inspect bearings or lube skids unless physical failure is genuine.
          </div>
        </div>

      </div>

      {/* FEATURE IMPORTANCE ATTRIBUTION */}
      <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white">Supervised Feature Importance Rankings (Sequential Sensor Tags)</h3>
            <p className="text-xs text-slate-400">Key instruments driving the supervised classification decisions</p>
          </div>
          <span className="text-xs text-slate-400 font-mono">Random Forest Gini Impurity</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {importances.slice(0, 8).map((item: any, idx: number) => (
            <div key={item.feature} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200 flex items-center gap-2">
                  <span className="text-blue-400 font-mono">#{idx + 1}</span> {item.label}
                </span>
                <span className="font-mono text-cyan-400 font-bold">{(item.importance * 100).toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span className="font-mono text-slate-500">Tag: {item.feature}</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                  style={{ width: `${(item.importance / importances[0].importance) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
