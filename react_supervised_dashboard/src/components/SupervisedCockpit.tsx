import React, { useState, useEffect, useRef } from 'react';
import { SUPERVISED_SIMULATION_DATA } from '../data/simulationData';
import { SimulationStep, ScenarioType } from '../types';
import { TelemetrySignalStudio } from './TelemetrySignalStudio';

export const SupervisedCockpit: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(400);
  const [scenario, setScenario] = useState<ScenarioType>('all');

  const timerRef = useRef<number | null>(null);

  const stepData: SimulationStep = (SUPERVISED_SIMULATION_DATA as unknown as SimulationStep[])[currentStep] || (SUPERVISED_SIMULATION_DATA[0] as unknown as SimulationStep);

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= SUPERVISED_SIMULATION_DATA.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, playSpeed);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, playSpeed]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const resetSim = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const stepSim = (delta: number) => {
    setIsPlaying(false);
    setCurrentStep((prev) => {
      const next = prev + delta;
      return Math.max(0, Math.min(SUPERVISED_SIMULATION_DATA.length - 1, next));
    });
  };

  const jumpToScenario = (type: ScenarioType) => {
    setIsPlaying(false);
    setScenario(type);
    if (type === 'normal') {
      setCurrentStep(5);
    } else if (type === 'oil') {
      setCurrentStep(35);
    } else if (type === 'bearing') {
      setCurrentStep(85);
    } else if (type === 'air') {
      setCurrentStep(132);
    } else if (type === 'choke') {
      setCurrentStep(165);
    } else {
      setCurrentStep(0);
    }
  };

  const inf = stepData.supervised_inference;
  const s = stepData.sensors;
  const diag = stepData.diagnosis;
  const gt = stepData.ground_truth;
  const isMatch = inf.predicted_class === gt.fault_class;

  // Status banner styling based on predicted class
  const getBannerStyle = (cls: string) => {
    switch (cls) {
      case 'normal_operation':
        return {
          bg: 'bg-emerald-950/40 border-emerald-500/40',
          badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          titleColor: 'text-emerald-400',
          barColor: 'bg-emerald-500',
          title: 'NORMAL OPERATION'
        };
      case 'oil_leakage':
        return {
          bg: 'bg-orange-950/40 border-orange-500/50 shadow-lg shadow-orange-500/10',
          badgeBg: 'bg-orange-500/20 text-orange-300 border-orange-500/30 animate-pulse',
          titleColor: 'text-orange-400',
          barColor: 'bg-orange-500',
          title: 'OIL LEAKAGE'
        };
      case 'bearing_failure':
        return {
          bg: 'bg-rose-950/40 border-rose-500/50 shadow-lg shadow-rose-500/10',
          badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30 animate-pulse',
          titleColor: 'text-rose-400',
          barColor: 'bg-rose-500',
          title: 'BEARING FAILURE'
        };
      case 'air_leakage':
        return {
          bg: 'bg-purple-950/40 border-purple-500/50 shadow-lg shadow-purple-500/10',
          badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse',
          titleColor: 'text-purple-400',
          barColor: 'bg-purple-500',
          title: 'AIR LEAKAGE'
        };
      case 'suction_filter_choke':
        return {
          bg: 'bg-amber-950/40 border-amber-500/50 shadow-lg shadow-amber-500/10',
          badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          titleColor: 'text-amber-400',
          barColor: 'bg-amber-500',
          title: 'SUCTION FILTER CHOKE'
        };
      default:
        return {
          bg: 'bg-slate-900 border-slate-800',
          badgeBg: 'bg-slate-800 text-slate-300 border-slate-700',
          titleColor: 'text-slate-200',
          barColor: 'bg-blue-500',
          title: 'UNKNOWN'
        };
    }
  };

  const banner = getBannerStyle(inf.predicted_class);

  return (
    <div className="space-y-5">
      
      {/* SCENARIO QUICK-SELECTORS & PLAYBACK CONTROLS */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        
        {/* Scenario Buttons Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Direct Instrument RCA Demonstration:
            </span>
            <span className="text-xs text-slate-400">
              (Click any specific failure mode to show direct root cause attribution to leadership)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => jumpToScenario('normal')}
              className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
                scenario === 'normal'
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-emerald-500'
              }`}
            >
              <span>🟢</span> Normal Operation
            </button>
            <button
              onClick={() => jumpToScenario('oil')}
              className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
                scenario === 'oil'
                  ? 'bg-orange-600 border-orange-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-orange-500'
              }`}
            >
              <span>🟠</span> Oil Leakage
            </button>
            <button
              onClick={() => jumpToScenario('bearing')}
              className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
                scenario === 'bearing'
                  ? 'bg-rose-600 border-rose-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-rose-500'
              }`}
            >
              <span>🔴</span> Bearing Failure
            </button>
            <button
              onClick={() => jumpToScenario('air')}
              className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
                scenario === 'air'
                  ? 'bg-purple-600 border-purple-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-purple-500'
              }`}
            >
              <span>🟣</span> Air Leakage
            </button>
            <button
              onClick={() => jumpToScenario('choke')}
              className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
                scenario === 'choke'
                  ? 'bg-amber-600 border-amber-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500'
              }`}
            >
              <span>🟡</span> Suction Filter Choke
            </button>
            <button
              onClick={() => jumpToScenario('all')}
              className={`px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 ${
                scenario === 'all'
                  ? 'bg-blue-600 border-blue-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-blue-500'
              }`}
            >
              <span>🔄</span> Full Multi-Fault Run
            </button>
          </div>
        </div>

        {/* Playback Controls & Timeline Scrubber */}
        <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={resetSim}
              className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition"
              title="Reset"
            >
              ⏮ Reset
            </button>
            <button
              onClick={togglePlay}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition shadow flex items-center gap-1.5 ${
                isPlaying
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              <span>{isPlaying ? '⏸ Pause' : '▶ Play Live Stream'}</span>
            </button>
            <button
              onClick={() => stepSim(1)}
              className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition"
              title="Step +1"
            >
              ⏭ Step +1
            </button>

            {/* Speed Control */}
            <div className="flex items-center gap-1.5 pl-3 border-l border-slate-800 text-xs">
              <span className="text-slate-400">Speed:</span>
              <select
                value={playSpeed}
                onChange={(e) => setPlaySpeed(Number(e.target.value))}
                className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-blue-500 text-xs"
              >
                <option value={1000}>0.5x (Slow)</option>
                <option value={400}>1.0x (Normal)</option>
                <option value={150}>2.5x (Fast)</option>
                <option value={60}>5.0x (Turbo)</option>
              </select>
            </div>
          </div>

          {/* Scrubber Bar */}
          <div className="flex-1 min-w-[220px] max-w-lg flex items-center gap-3">
            <input
              type="range"
              min={0}
              max={SUPERVISED_SIMULATION_DATA.length - 1}
              value={currentStep}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentStep(Number(e.target.value));
              }}
              className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <span className="font-mono text-xs text-blue-400 font-bold whitespace-nowrap min-w-[90px] text-right">
              Step {currentStep} / {SUPERVISED_SIMULATION_DATA.length - 1}
            </span>
          </div>
        </div>

      </div>

      {/* UNIFIED EXECUTIVE DIRECT RCA DIAGNOSTIC BANNER */}
      <div className={`p-5 rounded-2xl border transition-all duration-300 shadow-xl ${banner.bg}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          <div className="md:col-span-9 lg:col-span-10 flex items-start sm:items-center gap-4">
            <div className="text-3xl p-3 bg-slate-950/60 rounded-xl border border-slate-800 shadow-inner flex-shrink-0">
              {inf.status_theme.icon}
            </div>
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Direct Root Cause Analysis (RCA)
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${banner.badgeBg}`}>
                  {inf.status_theme.badge}
                </span>
                {isMatch ? (
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ✓ Ground Truth Verified
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    ⚠ Transition Phase
                  </span>
                )}
              </div>

              <h2 className={`text-xl sm:text-2xl font-black tracking-tight ${banner.titleColor}`}>
                ROOT CAUSE: {banner.title}
              </h2>

              {/* Line 1: Target Component */}
              <div className="text-xs pt-0.5 flex items-center gap-1.5">
                <span className="text-sm">🎯</span>
                <span className="text-slate-400">Target Component:</span>{' '}
                <strong className="text-white font-bold">{diag.failed_instrument}</strong>
              </div>

              {/* Line 2: Placed cleanly BELOW Target Component to maintain stable UI height */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="text-slate-500">🏷️</span>
                  <span>Key Tags:</span>
                  <span className="font-mono text-cyan-400 font-bold">{diag.instrument_tag}</span>
                </span>

                <span className="text-slate-500">•</span>

                <span>
                  Subsystem: <strong className="text-slate-200 font-bold">{diag.severity}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 text-left md:text-right md:border-l md:border-slate-800/60 md:pl-4 flex-shrink-0">
            <div className="text-xs font-mono text-slate-400">Diagnostic Certainty</div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white mt-0.5">
              {inf.confidence.toFixed(1)}%
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Timestamp: {stepData.timestamp}
            </div>
          </div>

        </div>
      </div>

      {/* 2-COLUMN LAYOUT: PROBABILITY GAUGE + NON-TECHNICAL BRIEF */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: MULTI-CLASS PROBABILITY DISTRIBUTION (6 COLS) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* MULTI-CLASS PROBABILITY BARS */}
          <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">Direct RCA Probability Distribution</h3>
                <p className="text-xs text-slate-400">Real-time softmax certainty across instrument failure modes</p>
              </div>
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                Direct Labels
              </span>
            </div>

            <div className="space-y-3 pt-1">
              {/* Class 1: normal_operation */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span>🟢</span> Normal Operation (Healthy)
                  </span>
                  <span className="font-mono font-bold text-white">{inf.probabilities.normal_operation.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(1, inf.probabilities.normal_operation)}%` }}
                  />
                </div>
              </div>

              {/* Class 2: oil_leakage */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-orange-400 flex items-center gap-1.5">
                    <span>🟠</span> Oil Leakage (Lube Skid Drain)
                  </span>
                  <span className="font-mono font-bold text-white">{inf.probabilities.oil_leakage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800">
                  <div
                    className="bg-orange-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(1, inf.probabilities.oil_leakage)}%` }}
                  />
                </div>
              </div>

              {/* Class 3: bearing_failure */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-rose-400 flex items-center gap-1.5">
                    <span>🔴</span> Bearing Failure (Journal Pad A)
                  </span>
                  <span className="font-mono font-bold text-white">{inf.probabilities.bearing_failure.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800">
                  <div
                    className="bg-rose-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(1, inf.probabilities.bearing_failure)}%` }}
                  />
                </div>
              </div>

              {/* Class 4: air_leakage */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-purple-400 flex items-center gap-1.5">
                    <span>🟣</span> Air Leakage (Instrument Air / ASV)
                  </span>
                  <span className="font-mono font-bold text-white">{inf.probabilities.air_leakage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800">
                  <div
                    className="bg-purple-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(1, inf.probabilities.air_leakage)}%` }}
                  />
                </div>
              </div>

              {/* Class 5: suction_filter_choke */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-amber-400 flex items-center gap-1.5">
                    <span>🟡</span> Suction Filter Choke (Strainer)
                  </span>
                  <span className="font-mono font-bold text-white">{inf.probabilities.suction_filter_choke.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(1, inf.probabilities.suction_filter_choke)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: DIRECT RCA BRIEF (6 COLS) */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* DIRECT RCA EXECUTIVE BRIEF CARD */}
          <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-base">📋</span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Direct RCA Brief &amp; Maintenance Action Plan
                </h3>
              </div>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${banner.badgeBg}`}>
                {diag.severity}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  1. Root Cause Mechanism
                </span>
                <p className="text-slate-200 text-sm font-medium leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  {diag.direct_rca}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <span>⚠️</span> Business &amp; Equipment Impact
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {diag.business_impact}
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <span>✅</span> Recommended Maintenance SOP
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {diag.recommended_action}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* FULL-WIDTH TELEMETRY SIGNAL & WAVEFORM STUDIO */}
      <TelemetrySignalStudio
        currentStep={currentStep}
        onSeekStep={(step) => {
          setIsPlaying(false);
          setCurrentStep(step);
        }}
      />

    </div>
  );
};
