import React from 'react';

export const SupervisedDatasetsCatalog: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Direct RCA Data Catalog
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Instrument-Specific Labels
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Supervised Telemetry Datasets &amp; Direct RCA Schema
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            All files are pre-processed with sequential engineering tags and include explicit columns for <strong>fault_class</strong>, <strong>failed_instrument</strong>, <strong>primary_instrument_tag</strong>, and <strong>direct_rca</strong>.
          </p>
        </div>
      </div>

      {/* DATASET CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Full Dataset */}
        <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl">💾</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                6,000 Samples
              </span>
            </div>
            <h3 className="text-base font-bold text-white">Full Direct RCA Dataset</h3>
            <p className="font-mono text-xs text-cyan-400">rgc_supervised_labeled_dataset.csv</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuous 21-day telemetry stream containing nominal baseline operation interleaved with 4 direct instrument failure modes: <strong>bearing_failure</strong>, <strong>air_leakage</strong>, <strong>oil_leakage</strong>, and <strong>suction_filter_choke</strong>.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Columns:</span>
              <span className="font-mono text-slate-200">22 (15 Sensors + 7 RCA Meta)</span>
            </div>
            <div className="flex justify-between">
              <span>Direct RCA Labels:</span>
              <span className="font-mono text-emerald-400">5 Instrument Classes</span>
            </div>
          </div>
        </div>

        {/* Card 2: 70% Train Split */}
        <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🏋️‍♂️</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">
                70% Split (4,200 Steps)
              </span>
            </div>
            <h3 className="text-base font-bold text-white">Supervised Training Split</h3>
            <p className="font-mono text-xs text-indigo-400">rgc_supervised_train.csv</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Chronological training partition (~14.6 days). Used to train multi-class supervised models (Random Forest, LightGBM) to directly classify which instrument has failed.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Normal Samples:</span>
              <span className="font-mono text-slate-200">2,500</span>
            </div>
            <div className="flex justify-between">
              <span>Component Failures:</span>
              <span className="font-mono text-orange-400">1,700 (4 Failure Modes)</span>
            </div>
          </div>
        </div>

        {/* Card 3: 30% Test Split */}
        <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🎯</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                30% Split (1,800 Steps)
              </span>
            </div>
            <h3 className="text-base font-bold text-white">Unseen Test Benchmark Split</h3>
            <p className="font-mono text-xs text-emerald-400">rgc_supervised_test.csv</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strictly held-out chronological test window (~6.3 days). Contains unseen instances of all failure modes to validate out-of-sample diagnostic accuracy (99.50% achieved).
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Test Accuracy:</span>
              <span className="font-mono text-emerald-400 font-bold">99.50%</span>
            </div>
            <div className="flex justify-between">
              <span>Macro F1:</span>
              <span className="font-mono text-cyan-400 font-bold">0.9952</span>
            </div>
          </div>
        </div>

      </div>

      {/* DATA SCHEMA & SEQUENTIAL TAG TABLE */}
      <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-sm font-bold text-white">Direct RCA Target Columns Schema</h3>
            <p className="text-xs text-slate-400">Explicit root-cause columns added to the telemetry dataset</p>
          </div>
          <span className="text-xs font-mono text-slate-400">Metadata Reference</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                <th className="p-2.5">Column Name</th>
                <th className="p-2.5">Data Type</th>
                <th className="p-2.5">Example Value</th>
                <th className="p-2.5">Operational Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs font-mono">
              <tr className="hover:bg-slate-800/20">
                <td className="p-2.5 text-blue-400 font-bold">fault_class</td>
                <td className="p-2.5 text-slate-400">string</td>
                <td className="p-2.5 text-emerald-400">bearing_failure, air_leakage, oil_leakage</td>
                <td className="p-2.5 text-slate-200 font-sans">Direct component failure RCA label</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-2.5 text-blue-400 font-bold">fault_code</td>
                <td className="p-2.5 text-slate-400">int (0-4)</td>
                <td className="p-2.5 text-cyan-400">0, 1, 2, 3, 4</td>
                <td className="p-2.5 text-slate-200 font-sans">Numerical target class encoding</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-2.5 text-blue-400 font-bold">failed_instrument</td>
                <td className="p-2.5 text-slate-400">string</td>
                <td className="p-2.5 text-orange-400">Journal Bearing DE Sleeve &amp; Pad A</td>
                <td className="p-2.5 text-slate-200 font-sans">Physical instrument / assembly identified</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-2.5 text-blue-400 font-bold">primary_instrument_tag</td>
                <td className="p-2.5 text-slate-400">string</td>
                <td className="p-2.5 text-purple-400">temperature_26 &amp; vibration_3</td>
                <td className="p-2.5 text-slate-200 font-sans">Sequential sensors providing primary evidence</td>
              </tr>
              <tr className="hover:bg-slate-800/20">
                <td className="p-2.5 text-blue-400 font-bold">direct_rca</td>
                <td className="p-2.5 text-slate-400">string</td>
                <td className="p-2.5 text-slate-300">Journal bearing babbitt metal wiping...</td>
                <td className="p-2.5 text-slate-200 font-sans">Plain-English physical failure explanation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
