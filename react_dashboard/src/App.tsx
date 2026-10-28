import React, { useState } from 'react';
import { TabType } from './types';
import { LiveSimulationCockpit } from './components/LiveSimulationCockpit';
import { ModelPerformance } from './components/ModelPerformance';
import { DigitalTwinPhysics } from './components/DigitalTwinPhysics';
import { DatasetsCatalog } from './components/DatasetsCatalog';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('simulation');

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen antialiased p-3 sm:p-5 selection:bg-blue-600 selection:text-white">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* HEADER BAR */}
        <header className="p-4 sm:p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/20 font-bold">
              ⚡
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Compressor Train A (RGC_A)
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  React 19 • TypeScript
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Dark Theme
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Multivariate AR(1) Synthetic Telemetry • Isolation Forest Real-Time Streaming &amp; Root-Cause Attribution
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-mono text-slate-400">Benchmark Model</p>
              <p className="text-xs font-bold text-emerald-400">PR-AUC: 0.9121 • F1: 0.869</p>
            </div>
          </div>
        </header>

        {/* NAVIGATION TABS */}
        <div className="border-b border-slate-800 bg-slate-900/60 backdrop-blur rounded-xl px-4 py-2 border">
          <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'simulation'
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>🎮</span> 1. Live Streaming Cockpit
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'performance'
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>📊</span> 2. Model Performance &amp; PR-AUC
            </button>
            <button
              onClick={() => setActiveTab('physics')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'physics'
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>📐</span> 3. Digital Twin Physics &amp; AR(1)
            </button>
            <button
              onClick={() => setActiveTab('datasets')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'datasets'
                  ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>💾</span> 4. Datasets Catalog
            </button>
          </nav>
        </div>

        {/* ACTIVE TAB CONTENT */}
        <main>
          {activeTab === 'simulation' && <LiveSimulationCockpit />}
          {activeTab === 'performance' && <ModelPerformance />}
          {activeTab === 'physics' && <DigitalTwinPhysics />}
          {activeTab === 'datasets' && <DatasetsCatalog />}
        </main>

      </div>

    </div>
  );
};
