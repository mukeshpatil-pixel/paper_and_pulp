import React, { useState, useEffect, useRef } from 'react';
import { SIMULATION_DATA } from '../data/simulationData';
import { SimulationStep, ScenarioType } from '../types';

export const LiveSimulationCockpit: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(400);
  const [scenario, setScenario] = useState<ScenarioType>('all');
  
  const timerRef = useRef<number | null>(null);

  const stepData: SimulationStep = (SIMULATION_DATA as unknown as SimulationStep[])[currentStep] || (SIMULATION_DATA[0] as unknown as SimulationStep);

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= SIMULATION_DATA.length - 1) {
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

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetSim = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const stepSim = (delta: number) => {
    setIsPlaying(false);
    setCurrentStep((prev) => {
      const next = prev + delta;
      return Math.max(0, Math.min(SIMULATION_DATA.length - 1, next));
    });
  };

  const jumpToScenario = (type: ScenarioType) => {
    setIsPlaying(false);
    setScenario(type);
    if (type === 'recycle') {
      setCurrentStep(26);
    } else if (type === 'bearing') {
      setCurrentStep(76);
    } else if (type === 'choke') {
      setCurrentStep(126);
    } else {
      setCurrentStep(0);
    }
  };

  // Sparkline calculation for last 25 steps
  const windowSize = 25;
  const startIdx = Math.max(0, currentStep - windowSize + 1);
  const windowSlice = (SIMULATION_DATA as unknown as SimulationStep[]).slice(startIdx, currentStep + 1);

  const svgW = 300;
  const svgH = 100;
  const dx = svgW / (windowSize - 1);

  const ptsFlow: string[] = [];
  const ptsVib: string[] = [];
  const ptsValve: string[] = [];

  windowSlice.forEach((pt, i) => {
    const x = (svgW - (windowSlice.length - 1 - i) * dx).toFixed(1);
    const yFlow = (svgH - ((pt.sensors.forward_flow - 230) / 50) * svgH).toFixed(1);
    const yVib = (svgH - ((pt.sensors.casing_vib_de - 2) / 6) * svgH).toFixed(1);
    const yValve = (svgH - ((pt.sensors.antisurge_valve - 60) / 15) * svgH).toFixed(1);

    ptsFlow.push(`${x},${Math.max(5, Math.min(svgH - 5, Number(yFlow)))}`);
    ptsVib.push(`${x},${Math.max(5, Math.min(svgH - 5, Number(yVib)))}`);
    ptsValve.push(`${x},${Math.max(5, Math.min(svgH - 5, Number(yValve)))}`);
  });

  const ml = stepData.ml_inference;
  const s = stepData.sensors;
  const diag = stepData.diagnosis;

  // Determine gauge percent
  let gaugePct = 70;
  if (ml.status === 'NORMAL') {
    gaugePct = Math.min(100, Math.max(55, 55 + (ml.raw_score / 0.1) * 45));
  } else if (ml.status === 'WARNING') {
    gaugePct = Math.min(55, Math.max(30, 30 + (ml.raw_score / 0.04) * 25));
  } else {
    gaugePct = Math.max(5, 30 - (Math.abs(ml.raw_score) / 0.08) * 25);
  }

  return (
    <div className="space-y-5">
      
      {/* SCENARIO SELECTOR & PLAYBACK CONTROLS */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Select Industrial Demonstration Scenario:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => jumpToScenario('recycle')}
              className={`px-3 py-1.5 rounded-lg border transition ${
                scenario === 'recycle'
                  ? 'bg-blue-600 border-blue-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-blue-500'
              }`}
            >
              🚀 1. Anti-Surge Recycle Jam
            </button>
            <button
              onClick={() => jumpToScenario('bearing')}
              className={`px-3 py-1.5 rounded-lg border transition ${
                scenario === 'bearing'
                  ? 'bg-amber-600 border-amber-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500'
              }`}
            >
              ⚙️ 2. Bearing Friction &amp; Runaway
            </button>
            <button
              onClick={() => jumpToScenario('choke')}
              className={`px-3 py-1.5 rounded-lg border transition ${
                scenario === 'choke'
                  ? 'bg-purple-600 border-purple-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-purple-500'
              }`}
            >
              🌪️ 3. Suction Strainer Choke
            </button>
            <button
              onClick={() => jumpToScenario('all')}
              className={`px-3 py-1.5 rounded-lg border transition ${
                scenario === 'all'
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-emerald-500'
              }`}
            >
              🔄 Full Multi-Fault Sequence
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
              <span>{isPlaying ? '⏸ Pause' : '▶ Play Stream'}</span>
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
                className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 focus:outline-none focus:border-blue-500"
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
              max={SIMULATION_DATA.length - 1}
              value={currentStep}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentStep(Number(e.target.value));
              }}
              className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <span className="font-mono text-xs text-blue-400 font-bold whitespace-nowrap min-w-[80px] text-right">
              Step {currentStep} / {SIMULATION_DATA.length - 1}
            </span>
          </div>
        </div>

      </div>

      {/* COCKPIT GRID: INSTRUMENTATION & ROOT CAUSE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT COLUMN: STATUS & SIGNALS (5 COLS) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* STATE & SCORE BANNER */}
          <div
            className={`p-4 rounded-xl border transition-all duration-300 ${
              ml.status === 'NORMAL'
                ? 'border-emerald-500/30 bg-emerald-500/10'
                : ml.status === 'WARNING'
                ? 'border-amber-500/40 bg-amber-500/15'
                : 'border-rose-500/50 bg-rose-500/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Isolation Forest Real-Time State
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  ml.status === 'NORMAL'
                    ? 'bg-emerald-500 text-white'
                    : ml.status === 'WARNING'
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-rose-600 text-white animate-pulse'
                }`}
              >
                {ml.status === 'NORMAL' ? 'NORMAL' : ml.status === 'WARNING' ? 'WARNING (INCIPIENT)' : 'CRITICAL ALARM'}
              </span>
            </div>

            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <p className="text-xs text-slate-400">Anomaly Decision Score (s)</p>
                <p
                  className={`text-2xl font-mono font-bold ${
                    ml.status === 'NORMAL'
                      ? 'text-emerald-400'
                      : ml.status === 'WARNING'
                      ? 'text-amber-400'
                      : 'text-rose-400'
                  }`}
                >
                  {ml.raw_score >= 0 ? '+' : ''}{ml.raw_score.toFixed(4)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Timestamp</p>
                <p className="text-xs font-mono font-bold text-white">{stepData.timestamp}</p>
              </div>
            </div>

            {/* Threshold Progress Gauge */}
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-rose-400">🚨 Trip (s &lt; 0.0)</span>
                <span className="text-amber-400">⚠️ Warning (s &lt; 0.04)</span>
                <span className="text-emerald-400">Normal (s &gt; 0.04)</span>
              </div>
              <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full transition-all duration-200 ${
                    ml.status === 'NORMAL'
                      ? 'bg-emerald-500'
                      : ml.status === 'WARNING'
                      ? 'bg-amber-500'
                      : 'bg-rose-600'
                  }`}
                  style={{ width: `${gaugePct}%` }}
                />
              </div>
            </div>
          </div>

          {/* SENSOR VALUE CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="text-[11px] text-slate-400">Motor Current</p>
              <p className="text-sm font-mono font-bold text-blue-400">{s.motor_current.toFixed(1)} A</p>
              <p className="text-[10px] text-slate-500">Base: 142.5 A</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="text-[11px] text-slate-400">Forward Flow</p>
              <p className="text-sm font-mono font-bold text-emerald-400">{s.forward_flow.toFixed(1)} m³/h</p>
              <p className="text-[10px] text-slate-500">Base: 268.7 m³/h</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="text-[11px] text-slate-400">Anti-Surge Valve</p>
              <p className="text-sm font-mono font-bold text-purple-400">{s.antisurge_valve.toFixed(1)} %</p>
              <p className="text-[10px] text-slate-500">Base: 71.0 %</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="text-[11px] text-slate-400">Casing Vib DE</p>
              <p
                className={`text-sm font-mono font-bold ${
                  s.casing_vib_de > 4.5 ? 'text-rose-400 animate-pulse' : 'text-slate-200'
                }`}
              >
                {s.casing_vib_de.toFixed(2)} mm/s
              </p>
              <p className="text-[10px] text-amber-400 font-mono">Limit: 4.5 mm/s</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="text-[11px] text-slate-400">Bearing DE Temp</p>
              <p
                className={`text-sm font-mono font-bold ${
                  s.bearing_temp > 75.0 ? 'text-rose-400 animate-pulse' : 'text-slate-200'
                }`}
              >
                {s.bearing_temp.toFixed(1)} °C
              </p>
              <p className="text-[10px] text-rose-400 font-mono">Trip: 85.0 °C</p>
            </div>

            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
              <p className="text-[11px] text-slate-400">Suction Pressure</p>
              <p className="text-sm font-mono font-bold text-slate-200">{s.suction_press.toFixed(2)} kg/cm²</p>
              <p className="text-[10px] text-slate-500">Base: 29.2 kg/cm²</p>
            </div>
          </div>

          {/* OSCILLOSCOPE SPARKLINE */}
          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Rolling Telemetry Oscilloscope (Last 25 Steps)</span>
              <span className="text-[11px] text-slate-400">Multi-Signal Trend</span>
            </div>
            
            <div className="h-28 w-full bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-end">
              <svg className="w-full h-full" viewBox={`0 0 ${svgW} ${svgH}`} preserveAspectRatio="none">
                <polyline fill="none" stroke="#3b82f6" strokeWidth={2} points={ptsFlow.join(' ')} />
                <polyline fill="none" stroke="#f43f5e" strokeWidth={2} points={ptsVib.join(' ')} />
                <polyline fill="none" stroke="#a855f7" strokeWidth={1.5} strokeDasharray="3,3" points={ptsValve.join(' ')} />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full inline-block"></span> Flow
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-rose-500 rounded-full inline-block"></span> Casing Vib
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full inline-block"></span> Anti-Surge
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ROOT CAUSE ATTRIBUTION & OPERATOR GUIDANCE (7 COLS) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* REAL-TIME FEATURE ATTRIBUTION BARS */}
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-blue-500/10 text-blue-400 font-bold text-xs">🔬</span>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Instantaneous Feature Attribution (Top 5 Deviations)
                </h3>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Ranked by |Z-Score|</span>
            </div>

            <p className="text-xs text-slate-400">
              Shows which sensors are driving the machine vector away from the golden baseline normal envelope at this precise moment.
            </p>

            <div className="space-y-2.5 pt-1">
              {stepData.top_attributions.map((attr) => {
                const absZ = Math.abs(attr.z_score);
                let barColor = 'bg-blue-500';
                let badgeClass = 'text-blue-400 border-blue-500/30 bg-blue-500/10';

                if (absZ >= 3.0) {
                  barColor = 'bg-rose-500';
                  badgeClass = 'text-rose-400 border-rose-500/30 bg-rose-500/10 font-bold';
                } else if (absZ >= 1.8) {
                  barColor = 'bg-amber-500';
                  badgeClass = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
                }

                const barWidth = Math.min(100, Math.max(5, (absZ / 10.0) * 100));

                return (
                  <div key={attr.tag} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200 truncate max-w-[220px]" title={attr.name}>
                        {attr.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400 text-[11px]">
                          {attr.current_value} (Base: {attr.baseline_mean})
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${badgeClass}`}>
                          {attr.z_score >= 0 ? '+' : ''}{attr.z_score.toFixed(1)}σ
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                      <div className={`h-full ${barColor} transition-all duration-200`} style={{ width: `${barWidth}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OPERATOR DIAGNOSTIC ADVICE & ACTION CARD */}
          <div
            className={`p-4 rounded-xl border transition-all ${
              diag.severity === 'CRITICAL'
                ? 'border-rose-500/40 bg-rose-500/10'
                : diag.severity === 'WARNING'
                ? 'border-amber-500/40 bg-amber-500/10'
                : 'border-slate-800 bg-slate-900/90'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">
                  {diag.severity === 'CRITICAL' ? '🚨' : diag.severity === 'WARNING' ? '⚠️' : '🟢'}
                </span>
                <h4 className="text-sm font-bold text-white">{diag.title}</h4>
              </div>
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-bold border ${
                  diag.severity === 'CRITICAL'
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                    : diag.severity === 'WARNING'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                }`}
              >
                {diag.badge}
              </span>
            </div>

            <div className="mt-3 p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2 text-xs">
              <div>
                <span className="text-slate-400 font-semibold">Physical Mechanism:</span>
                <p className="text-slate-200 mt-0.5 leading-relaxed">{diag.cause}</p>
              </div>
              <div className="pt-2 border-t border-slate-900">
                <span className="text-slate-400 font-semibold">Prescribed Maintenance Action:</span>
                <p
                  className={`mt-0.5 font-medium ${
                    diag.severity === 'CRITICAL'
                      ? 'text-rose-400 font-bold'
                      : diag.severity === 'WARNING'
                      ? 'text-amber-400 font-semibold'
                      : 'text-emerald-400'
                  }`}
                >
                  {diag.action}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
