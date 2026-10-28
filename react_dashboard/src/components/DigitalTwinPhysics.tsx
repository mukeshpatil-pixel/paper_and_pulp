import React from 'react';

export const DigitalTwinPhysics: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* HEADER SECTION */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">
            📐
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Mathematical Architecture of the Digital Twin
            </h2>
            <p className="text-xs text-slate-400">
              Multivariate AR(1) Gaussian Process with Empirical Covariance &amp; Conservation Constraints
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Industrial compressor telemetry cannot be simulated with naive independent Gaussian noise because adjacent 5-minute samples possess high temporal autocorrelation (
          <span className="font-mono text-cyan-300 font-semibold">ρ ≈ 0.95</span>
          ) and coupled cross-subsystem physics (e.g., flow directly correlates with motor current, suction pressure, and discharge pressure).
        </p>

        {/* 3 CORE MATHEMATICAL PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* CARD 1: AR(1) DYNAMICS */}
          <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                  Multivariate AR(1) Dynamics
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                The state vector <span className="font-serif italic text-slate-200">X<sub>t</sub></span> transitions according to:
              </p>
              
              {/* Formula Display Box */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/90 font-mono text-xs sm:text-sm text-center shadow-inner text-cyan-300 tracking-wide">
                <span className="font-serif italic font-bold">X<sub>t</sub></span>
                {' = '}
                <span className="font-serif italic text-amber-300">μ</span>
                {' + '}
                <span className="font-serif italic text-purple-400">Φ</span>
                {' ('}
                <span className="font-serif italic">X<sub>t−1</sub></span>
                {' − '}
                <span className="font-serif italic text-amber-300">μ</span>
                {') + '}
                <span className="font-serif italic text-emerald-400">ϵ<sub>t</sub></span>
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-900">
              where <span className="font-mono text-purple-300">Φ = diag(ϕ₁, ..., ϕ₁₅)</span> captures individual sensor momentum calibrated to real baseline empirical autocorrelation (
              <span className="font-mono text-cyan-300">0.85 ≤ ϕ ≤ 0.98</span>
              ).
            </p>
          </div>

          {/* CARD 2: CHOLESKY COVARIANCE */}
          <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wide">
                  Cholesky Cross-Covariance
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Driving noise <span className="font-serif italic text-emerald-400">ϵ<sub>t</sub></span> preserves physical sensor coupling:
              </p>

              {/* Formula Display Box */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/90 font-mono text-xs sm:text-sm text-center shadow-inner text-purple-300 tracking-wide">
                <span className="font-serif italic font-bold text-emerald-400">ϵ<sub>t</sub></span>
                {' = '}
                <span className="font-serif italic font-bold text-purple-300">L</span>
                {' · '}
                <span className="font-serif italic font-bold text-slate-200">w<sub>t</sub></span>
                {',  '}
                <span className="font-serif italic text-slate-400">w<sub>t</sub></span>
                {' ~ '}
                <span className="font-serif text-cyan-300">N</span>
                {'(0, '}
                <span className="font-serif italic">I</span>
                {')'}
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-900">
              where <span className="font-mono text-purple-300">L</span> is the lower Cholesky decomposition of the regularized driving noise covariance matrix:
              <br />
              <span className="font-mono text-cyan-300 font-semibold">Σ<sub>ϵ</sub> = L · L<sup>T</sup></span>.
            </p>
          </div>

          {/* CARD 3: DIURNAL WAVES & BOUNDS */}
          <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  Diurnal Waves &amp; Physics Bounds
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Adds 24-hour diurnal thermal cycle on temperatures:
              </p>

              {/* Formula Display Box */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/90 font-mono text-xs sm:text-sm text-center shadow-inner text-emerald-300 tracking-wide">
                <span className="font-serif italic font-bold">D<sub>t</sub></span>
                {' = '}
                <span className="font-serif italic">A</span>
                {' · sin('}
                <span className="font-serif">2πt / 288</span>
                {')'}
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2 border-t border-slate-900">
              Enforces hard operational physical limits:
              <br />
              <span className="font-mono text-amber-300">Q ≥ 0 m³/h</span>,{' '}
              <span className="font-mono text-blue-300">I ≥ 135 A</span>,{' '}
              <span className="font-mono text-purple-300">0% ≤ ASV ≤ 100%</span>.
            </p>
          </div>

        </div>
      </div>

      {/* DETAILED EQUATIONS & PHYSICS IMPLEMENTATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* PHYSICAL SUBSYSTEM COUPLING */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Coupled Physical Subsystems in Model Vector (15 Features)
          </h3>
          
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-blue-400">Gas Thermodynamics &amp; Compression Ratio</p>
                <p className="text-slate-400 mt-0.5">
                  Suction pressure (<span className="text-slate-200 font-mono">29.2 kg/cm²</span>), discharge pressure (<span className="text-slate-200 font-mono">40.9 kg/cm²</span>), and net forward gas flow (<span className="text-slate-200 font-mono">268.7 m³/h</span>).
                </p>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">r<sub>p</sub> ≈ 1.40</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-rose-400">Vibration &amp; Aerodynamic Turbulence</p>
                <p className="text-slate-400 mt-0.5">
                  Radial NDE/DE proximity probes (<span className="text-slate-200 font-mono">9.2 / 4.9 μm</span>) and Casing seismic velocity (<span className="text-slate-200 font-mono">4.2 mm/s RMS</span>).
                </p>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-rose-500/10 text-rose-400 border border-rose-500/20">ISO 10816</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
              <div>
                <p className="font-bold text-amber-400">Thermal Equilibrium &amp; Lubrication</p>
                <p className="text-slate-400 mt-0.5">
                  Journal bearing temp (<span className="text-slate-200 font-mono">60.8 °C</span>), Stator winding (<span className="text-slate-200 font-mono">40.7 °C</span>), and Lube oil supply (<span className="text-slate-200 font-mono">52.9 °C</span>).
                </p>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Trip: 85 °C</span>
            </div>
          </div>
        </div>

        {/* FAULT INJECTION MECHANICS */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Deterministic Fault Ingestion Equations
          </h3>
          
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-rose-400">Fault 1: Anti-Surge Recycle Jam</span>
                <span className="font-mono text-[10px] text-slate-500">July 2021 Signature</span>
              </div>
              <p className="text-slate-400">
                <code className="text-cyan-300 font-mono">ASV(t) = ASV₀ − 5.0 · σ(t)</code> (valve opens 66%)<br />
                <code className="text-cyan-300 font-mono">Flow(t) = Flow₀ − 14.2 · σ(t)</code> (−7.6σ forward collapse)<br />
                <code className="text-cyan-300 font-mono">CasingVib(t) = Vib₀ + 2.8 · σ(t) + ε_turb</code> (7.3 mm/s Zone D)
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-400">Fault 2: Bearing Wear &amp; Runaway</span>
                <span className="font-mono text-[10px] text-slate-500">Mechanical Friction</span>
              </div>
              <p className="text-slate-400">
                <code className="text-cyan-300 font-mono">RadialVib(t) = Vib₀ + 42.0 · t/T</code> (climbing to 75 μm)<br />
                <code className="text-cyan-300 font-mono">BearingTemp(t) = Temp₀ + 24.0 · t/T</code> (runaway to 85 °C)<br />
                <span className="text-slate-500">Pressures and flows stay completely normal.</span>
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-purple-400">Fault 3: Suction Strainer Choke</span>
                <span className="font-mono text-[10px] text-slate-500">Inlet Restriction</span>
              </div>
              <p className="text-slate-400">
                <code className="text-cyan-300 font-mono">P_suc(t) = P₀ − 2.4 · t/T</code> (−11.2σ suction collapse)<br />
                <code className="text-cyan-300 font-mono">Flow(t) = Flow₀ − 22.0 · t/T</code> (severe starvation)
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
