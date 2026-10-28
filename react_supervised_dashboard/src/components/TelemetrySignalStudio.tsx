import React, { useState } from 'react';
import { SUPERVISED_SIMULATION_DATA } from '../data/simulationData';
import { SimulationStep } from '../types';

interface TelemetrySignalStudioProps {
  currentStep: number;
  onSeekStep?: (step: number) => void;
}

interface SensorConfig {
  id: keyof SimulationStep['sensors'];
  name: string;
  tag: string;
  unit: string;
  icon: string;
  baseline: number;
  minScale: number;
  maxScale: number;
  warningLow?: number;
  warningHigh?: number;
  themeColor: string;
  alarmColor: string;
  category: 'lube' | 'bearing' | 'process';
  description: string;
}

const SENSOR_CONFIGS: SensorConfig[] = [
  {
    id: 'level_1',
    name: 'Lube Oil Tank Level',
    tag: 'level_1',
    unit: '%',
    icon: '🛢️',
    baseline: 86.8,
    minScale: 55,
    maxScale: 92,
    warningLow: 75.0,
    themeColor: '#06b6d4', // cyan-500
    alarmColor: '#f97316', // orange-500
    category: 'lube',
    description: 'Sump inventory & drain integrity'
  },
  {
    id: 'temperature_30',
    name: 'Lube Oil Supply Temp',
    tag: 'temperature_30',
    unit: '°C',
    icon: '🌡️',
    baseline: 52.9,
    minScale: 46,
    maxScale: 70,
    warningHigh: 58.0,
    themeColor: '#10b981', // emerald-500
    alarmColor: '#f97316', // orange-500
    category: 'lube',
    description: 'Cooler discharge supply header'
  },
  {
    id: 'temperature_26',
    name: 'Journal Bearing DE Temp',
    tag: 'temperature_26',
    unit: '°C',
    icon: '⚙️',
    baseline: 60.8,
    minScale: 52,
    maxScale: 92,
    warningHigh: 70.0,
    themeColor: '#14b8a6', // teal-500
    alarmColor: '#f43f5e', // rose-500
    category: 'bearing',
    description: 'Babbitt metal sleeve temperature'
  },
  {
    id: 'vibration_3',
    name: 'Radial Vibration DE',
    tag: 'vibration_3',
    unit: 'µm',
    icon: '📳',
    baseline: 4.9,
    minScale: 2,
    maxScale: 42,
    warningHigh: 12.0,
    themeColor: '#8b5cf6', // violet-500
    alarmColor: '#f43f5e', // rose-500
    category: 'bearing',
    description: 'Shaft dynamic radial displacement'
  },
  {
    id: 'flow_rate_1',
    name: 'Forward Gas Flow',
    tag: 'flow_rate_1',
    unit: 'm³/h',
    icon: '💨',
    baseline: 268.7,
    minScale: 240,
    maxScale: 280,
    warningLow: 258.0,
    themeColor: '#0284c7', // sky-600
    alarmColor: '#eab308', // amber-500
    category: 'process',
    description: 'Mass throughput to discharge header'
  },
  {
    id: 'anti_surge_valve_1',
    name: 'Anti-Surge Valve (ASV)',
    tag: 'anti_surge_valve_1',
    unit: '%',
    icon: '🎚️',
    baseline: 71.0,
    minScale: 62,
    maxScale: 76,
    warningLow: 68.0,
    themeColor: '#6366f1', // indigo-500
    alarmColor: '#a855f7', // purple-500
    category: 'process',
    description: 'Pneumatic recycle actuator position'
  }
];

export const TelemetrySignalStudio: React.FC<TelemetrySignalStudioProps> = ({
  currentStep
}) => {
  const [windowSize, setWindowSize] = useState<number>(30); // 30 or 60 steps

  const allData = SUPERVISED_SIMULATION_DATA as unknown as SimulationStep[];
  const currentStepData = allData[currentStep] || allData[0];

  // Window slice for sparklines
  const startIdx = Math.max(0, currentStep - windowSize + 1);
  const windowSlice = allData.slice(startIdx, currentStep + 1);

  // Helper to generate ultra-smooth cubic Bezier path
  const buildSmoothCurve = (
    pts: { x: number; y: number }[],
    svgH: number
  ): { linePath: string; areaPath: string } => {
    if (pts.length === 0) return { linePath: '', areaPath: '' };
    if (pts.length === 1) {
      return {
        linePath: `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`,
        areaPath: `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)} L ${pts[0].x.toFixed(1)} ${svgH} Z`
      };
    }

    let linePath = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const dx = curr.x - prev.x;
      const cpX1 = (prev.x + dx * 0.45).toFixed(1);
      const cpY1 = prev.y.toFixed(1);
      const cpX2 = (curr.x - dx * 0.45).toFixed(1);
      const cpY2 = curr.y.toFixed(1);
      linePath += ` C ${cpX1},${cpY1} ${cpX2},${cpY2} ${curr.x.toFixed(1)},${curr.y.toFixed(1)}`;
    }

    const firstX = pts[0].x.toFixed(1);
    const lastX = pts[pts.length - 1].x.toFixed(1);
    const areaPath = `${linePath} L ${lastX},${svgH} L ${firstX},${svgH} Z`;

    return { linePath, areaPath };
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-5">
      
      {/* CLEAN UNCLUTTERED HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
            📈
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Live Instrument Telemetry &amp; Waveform Studio
            </h3>
            <p className="text-xs text-slate-400">
              Continuous high-definition signal monitoring with calibrated physical baselines &amp; threshold alarms
            </p>
          </div>
        </div>

        {/* Minimal Window Size Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setWindowSize(30)}
              className={`px-3 py-1 rounded-lg transition font-medium ${
                windowSize === 30 ? 'bg-blue-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              30 Steps
            </button>
            <button
              onClick={() => setWindowSize(60)}
              className={`px-3 py-1 rounded-lg transition font-medium ${
                windowSize === 60 ? 'bg-blue-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              60 Steps
            </button>
          </div>

          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-950 text-slate-400 border border-slate-800">
            6 Sensors Monitored
          </span>
        </div>
      </div>

      {/* 6 EXECUTIVE SENSOR WAVEFORM CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SENSOR_CONFIGS.map((sensor) => {
          const currentVal = currentStepData.sensors[sensor.id];
          const isBreached =
            (sensor.warningLow !== undefined && currentVal <= sensor.warningLow) ||
            (sensor.warningHigh !== undefined && currentVal >= sensor.warningHigh);

          const activeColor = isBreached ? sensor.alarmColor : sensor.themeColor;
          const delta = currentVal - sensor.baseline;
          const deltaPercent = (delta / sensor.baseline) * 100;

          // Compute SVG points
          const svgW = 340;
          const svgH = 90;
          const padTop = 10;
          const padBottom = 16;
          const plotH = svgH - padTop - padBottom;

          // Find min and max within current visible window for dynamic badge
          const windowVals = windowSlice.map((pt) => pt.sensors[sensor.id]);
          const winMin = Math.min(...windowVals);
          const winMax = Math.max(...windowVals);

          // X and Y coords
          const pts = windowSlice.map((pt, idx) => {
            const x =
              windowSlice.length > 1
                ? (idx / (windowSlice.length - 1)) * svgW
                : svgW;
            const clampedVal = Math.max(
              sensor.minScale,
              Math.min(sensor.maxScale, pt.sensors[sensor.id])
            );
            const norm = (clampedVal - sensor.minScale) / (sensor.maxScale - sensor.minScale);
            const y = padTop + (1 - norm) * plotH;
            return { x, y };
          });

          const { linePath, areaPath } = buildSmoothCurve(pts, svgH);

          // Baseline guide line Y
          const baseNorm = (sensor.baseline - sensor.minScale) / (sensor.maxScale - sensor.minScale);
          const baseY = padTop + (1 - Math.max(0, Math.min(1, baseNorm))) * plotH;

          // Warning guide line Y (if any)
          let warnY: number | null = null;
          if (sensor.warningLow !== undefined) {
            const warnNorm = (sensor.warningLow - sensor.minScale) / (sensor.maxScale - sensor.minScale);
            warnY = padTop + (1 - Math.max(0, Math.min(1, warnNorm))) * plotH;
          } else if (sensor.warningHigh !== undefined) {
            const warnNorm = (sensor.warningHigh - sensor.minScale) / (sensor.maxScale - sensor.minScale);
            warnY = padTop + (1 - Math.max(0, Math.min(1, warnNorm))) * plotH;
          }

          const lastPt = pts[pts.length - 1] || { x: svgW, y: baseY };
          const gradId = `grad_${sensor.id}`;

          return (
            <div
              key={sensor.id}
              className={`p-4 bg-slate-950/80 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                isBreached
                  ? 'border-rose-500/50 shadow-lg shadow-rose-500/10'
                  : 'border-slate-800/90 hover:border-slate-700 shadow-md'
              }`}
            >
              {/* Background glow when in alarm */}
              {isBreached && (
                <div
                  className="absolute -right-8 -top-8 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: activeColor }}
                />
              )}

              {/* Card Header: Icon, Name, Tag & Status Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">{sensor.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">
                      {sensor.name}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-500 block">
                      tag: {sensor.tag}
                    </span>
                  </div>
                </div>

                <div>
                  {isBreached ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1 animate-pulse">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                      ALARM
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      NOMINAL
                    </span>
                  )}
                </div>
              </div>

              {/* Current Value & Baseline Comparison */}
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className={`text-2xl font-black font-mono tracking-tight ${
                      isBreached ? '' : 'text-slate-900 dark:text-white'
                    }`}
                    style={isBreached ? { color: activeColor } : undefined}
                  >
                    {currentVal.toFixed(1)}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{sensor.unit}</span>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Norm: <span className="font-mono font-semibold text-slate-800 dark:text-slate-300">{sensor.baseline}{sensor.unit}</span>
                  </div>
                  <div
                    className={`text-[10px] font-mono font-bold ${
                      Math.abs(deltaPercent) > 10
                        ? isBreached ? 'text-rose-600 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {delta >= 0 ? `+${delta.toFixed(1)}` : delta.toFixed(1)} ({deltaPercent > 0 ? `+${deltaPercent.toFixed(0)}` : deltaPercent.toFixed(0)}%)
                  </div>
                </div>
              </div>

              {/* THE HIGH-DEFINITION SMOOTH SVG WAVEFORM */}
              <div className="relative w-full rounded-xl bg-slate-900/60 p-1 border border-slate-800/60 overflow-hidden">
                
                {/* Min / Max Badges inside chart */}
                <div className="absolute top-1 left-2 text-[9px] font-mono text-slate-500 z-10 flex items-center gap-1 pointer-events-none">
                  <span>Max: {winMax.toFixed(1)}{sensor.unit}</span>
                </div>
                <div className="absolute bottom-1 left-2 text-[9px] font-mono text-slate-500 z-10 flex items-center gap-1 pointer-events-none">
                  <span>Min: {winMin.toFixed(1)}{sensor.unit}</span>
                </div>
                <div className="absolute top-1 right-2 text-[9px] font-mono text-slate-400 z-10 pointer-events-none">
                  {windowSlice.length}s window
                </div>

                <svg
                  viewBox={`0 0 ${svgW} ${svgH}`}
                  className="w-full h-24 overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={activeColor} stopOpacity="0.4" />
                      <stop offset="60%" stopColor={activeColor} stopOpacity="0.12" />
                      <stop offset="100%" stopColor={activeColor} stopOpacity="0.0" />
                    </linearGradient>
                    <filter id={`glow_${sensor.id}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={activeColor} floodOpacity="0.5" />
                    </filter>
                  </defs>

                  {/* Subtle grid lines */}
                  <line x1="0" y1={padTop} x2={svgW} y2={padTop} stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
                  <line x1="0" y1={padTop + plotH * 0.5} x2={svgW} y2={padTop + plotH * 0.5} stroke="#334155" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
                  <line x1="0" y1={padTop + plotH} x2={svgW} y2={padTop + plotH} stroke="#334155" strokeWidth="0.75" opacity="0.4" />

                  {/* Nominal Baseline Reference Line */}
                  <line
                    x1="0"
                    y1={baseY}
                    x2={svgW}
                    y2={baseY}
                    stroke="#94a3b8"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.45"
                  />

                  {/* Warning Limit Guide Line (if configured) */}
                  {warnY !== null && (
                    <line
                      x1="0"
                      y1={warnY}
                      x2={svgW}
                      y2={warnY}
                      stroke={sensor.alarmColor}
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.6"
                    />
                  )}

                  {/* Area Gradient Fill */}
                  {areaPath && (
                    <path d={areaPath} fill={`url(#${gradId})`} />
                  )}

                  {/* Smooth Cubic Bezier Stroke */}
                  {linePath && (
                    <path
                      d={linePath}
                      fill="none"
                      stroke={activeColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter={`url(#glow_${sensor.id})`}
                    />
                  )}

                  {/* Glowing Live Head Dot with Ping Pulse */}
                  <circle
                    cx={lastPt.x}
                    cy={lastPt.y}
                    r="7"
                    fill={activeColor}
                    opacity="0.3"
                    className="animate-ping"
                  />
                  <circle
                    cx={lastPt.x}
                    cy={lastPt.y}
                    r="4"
                    fill={activeColor}
                    stroke="#020617"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2">
                <span>{sensor.description}</span>
                <span className="font-mono">
                  Limit: {sensor.warningLow ? `< ${sensor.warningLow}` : `> ${sensor.warningHigh}`}{sensor.unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
