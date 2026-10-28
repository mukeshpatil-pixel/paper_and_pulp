import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { SupervisedCockpit } from './components/SupervisedCockpit';
import { SupervisedPerformance } from './components/SupervisedPerformance';
import { FailureKnowledgeBase } from './components/FailureKnowledgeBase';
import { SupervisedDatasetsCatalog } from './components/SupervisedDatasetsCatalog';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('cockpit');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rgc_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      }
      localStorage.setItem('rgc_theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen antialiased p-3 sm:p-5 selection:bg-orange-600 selection:text-white transition-colors duration-200">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* HEADER BAR */}
        <header className="p-4 sm:p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-orange-500 via-rose-600 to-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-orange-500/20 font-bold">
              🛠️
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Compressor Train A (RGC_A) — Direct Instrument RCA Dashboard
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Instrument-Level Failure Classification • bearing_failure • air_leakage • oil_leakage • suction_filter_choke • normal_operation
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-mono text-slate-400">Direct RCA Model Accuracy</p>
              <p className="text-xs font-bold text-emerald-400">Test Accuracy: 99.50% • Macro F1: 0.9952</p>
            </div>

            {/* WHITE / DARK THEME TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-800/90 hover:bg-slate-700 border-slate-700 text-amber-300'
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-indigo-700'
              }`}
              title={`Switch to ${theme === 'dark' ? 'White' : 'Dark'} Theme`}
            >
              <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
              <span>{theme === 'dark' ? 'White Theme' : 'Dark Theme'}</span>
            </button>
          </div>
        </header>

        {/* NAVIGATION TABS */}
        <div className="border-b border-slate-800 bg-slate-900/60 backdrop-blur rounded-xl px-4 py-2 border">
          <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('cockpit')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'cockpit'
                  ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>🎮</span> 1. Direct RCA Cockpit
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'performance'
                  ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>📊</span> 2. Model Performance &amp; Confusion Matrix
            </button>
            <button
              onClick={() => setActiveTab('knowledge')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'knowledge'
                  ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>🔍</span> 3. Instrument RCA Knowledge Base
            </button>
            <button
              onClick={() => setActiveTab('datasets')}
              className={`px-3.5 py-2 rounded-lg border transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'datasets'
                  ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>💾</span> 4. Direct RCA Datasets Catalog
            </button>
          </nav>
        </div>

        {/* ACTIVE TAB CONTENT */}
        <main>
          {activeTab === 'cockpit' && <SupervisedCockpit />}
          {activeTab === 'performance' && <SupervisedPerformance />}
          {activeTab === 'knowledge' && <FailureKnowledgeBase />}
          {activeTab === 'datasets' && <SupervisedDatasetsCatalog />}
        </main>

        {/* FOOTER */}
        <footer className="text-center text-xs text-slate-500 py-4 border-t border-slate-800/80">
          Refinery Gas Compressor (RGC_A) Direct Instrument Root Cause Analysis (RCA) POC • Standalone React Dashboard
        </footer>

      </div>
    </div>
  );
};
