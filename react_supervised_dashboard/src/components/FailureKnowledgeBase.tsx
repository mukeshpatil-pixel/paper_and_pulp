import React from 'react';

export const FailureKnowledgeBase: React.FC = () => {
  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Instrument RCA Knowledge Base
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Compressor Train A (RGC_A)
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white">
          Direct Instrument RCA &amp; Failure Mechanics Reference
        </h2>
        <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
          Comprehensive engineering guide explaining the physical root causes, failed field instruments, and maintenance actions for each failure mode.
        </p>
      </div>

      {/* 5 FAILURE MODES CARDS */}
      <div className="space-y-4">
        
        {/* MODE 1: normal_operation */}
        <div className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">🟢</span>
              <div>
                <h3 className="text-base font-bold text-emerald-400">RCA 0: normal_operation</h3>
                <p className="text-xs text-slate-400">All 15 field instruments and mechanical subsystems operating nominal</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold">
              Class Code: 0 • Healthy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">🔍 Specific Component / Instrument</span>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-emerald-400">None (Healthy).</strong> All supervisory sensors (vibration proximity probes, RTD resistance thermometers, pneumatic positioners, differential pressure transmitters) are within factory calibration limits.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">📊 Sensor Telemetry Signature</span>
              <ul className="text-slate-400 space-y-1 list-disc list-inside">
                <li><strong className="text-slate-200">flow_rate_1:</strong> 265 - 272 m³/h</li>
                <li><strong className="text-slate-200">level_1 (Lube Tank):</strong> 86 - 88%</li>
                <li><strong className="text-slate-200">temperature_26:</strong> 59 - 62°C</li>
                <li><strong className="text-slate-200">vibration_3 (DE):</strong> 4.5 - 5.5 µm</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-emerald-400 block mb-1">💼 Business Value</span>
              <p className="text-slate-400 leading-relaxed">
                Maximum refinery hydrogen throughput. High model confidence ensures zero false alarms so maintenance engineers are not distracted by benign daily thermal oscillations.
              </p>
            </div>
          </div>
        </div>

        {/* MODE 2: oil_leakage */}
        <div className="p-5 bg-slate-900/90 border border-orange-500/40 rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-orange-500/10 border border-orange-500/20 rounded-xl">🟠</span>
              <div>
                <h3 className="text-base font-bold text-orange-400">RCA 1: oil_leakage</h3>
                <p className="text-xs text-slate-400">Instrument: Lube Oil Reservoir Level &amp; Supply Header Skid</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-orange-500/10 text-orange-300 border border-orange-500/30 font-bold">
              Class Code: 1 • Critical
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">🔍 Specific Component / Instrument</span>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-orange-300">Lube Oil Reservoir Console &amp; Skid Flanges.</strong> Monitored by level transmitter (<strong className="text-white">level_1</strong>) and header RTD (<strong className="text-white">temperature_30</strong>). External fluid escape depletes reservoir volume and diminishes thermal dissipation capacity.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">📊 Sensor Telemetry Signature</span>
              <ul className="text-slate-400 space-y-1 list-disc list-inside">
                <li><strong className="text-orange-300">level_1:</strong> Drops from 87% to &lt;65%</li>
                <li><strong className="text-orange-300">temperature_30 (Oil Temp):</strong> Rises +11.5°C</li>
                <li><strong className="text-orange-300">temperature_26 (Bearing):</strong> Rises +14.0°C</li>
                <li><strong className="text-slate-200">flow_rate_1 &amp; pressure_1:</strong> Normal</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-orange-400 block mb-1">💼 Business Value &amp; Action</span>
              <p className="text-slate-400 leading-relaxed">
                Prevents sudden bearing wipe and catastrophic rotor seizure ($250k+ repair and 3 weeks downtime). Automated alert directs operator to start auxiliary lube pump P-0760B and top up reservoir immediately.
              </p>
            </div>
          </div>
        </div>

        {/* MODE 3: bearing_failure */}
        <div className="p-5 bg-slate-900/90 border border-rose-500/40 rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-rose-500/10 border border-rose-500/20 rounded-xl">🔴</span>
              <div>
                <h3 className="text-base font-bold text-rose-400">RCA 2: bearing_failure</h3>
                <p className="text-xs text-slate-400">Instrument: Journal Bearing DE Sleeve &amp; Pad A</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 font-bold">
              Class Code: 2 • Emergency
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">🔍 Specific Component / Instrument</span>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-rose-300">Drive-End Journal Bearing Assembly (Pad A).</strong> Monitored by embedded pad thermocouple (<strong className="text-white">temperature_26</strong>) and eddy-current radial vibration proximity probes (<strong className="text-white">vibration_3</strong>). Babbitt metal wiping induces intense localized friction.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">📊 Sensor Telemetry Signature</span>
              <ul className="text-slate-400 space-y-1 list-disc list-inside">
                <li><strong className="text-rose-300">vibration_1 &amp; vibration_3:</strong> Spikes to 40 - 75 µm</li>
                <li><strong className="text-rose-300">temperature_26:</strong> Climbs to 82 - 88°C</li>
                <li><strong className="text-slate-200">level_1:</strong> Normal (&gt;85%)</li>
                <li><strong className="text-slate-200">flow_rate_1:</strong> Normal (~268 m³/h)</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-rose-400 block mb-1">💼 Business Value &amp; Action</span>
              <p className="text-slate-400 leading-relaxed">
                Differentiates pure mechanical bearing wear from process disturbances. Gives operations hours of early warning before automated vibration trip, enabling a controlled, safe plant trip sequence.
              </p>
            </div>
          </div>
        </div>

        {/* MODE 4: air_leakage */}
        <div className="p-5 bg-slate-900/90 border border-purple-500/40 rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-purple-500/10 border border-purple-500/20 rounded-xl">🟣</span>
              <div>
                <h3 className="text-base font-bold text-purple-400">RCA 3: air_leakage</h3>
                <p className="text-xs text-slate-400">Instrument: Instrument Air Supply Tubing &amp; ASV Pneumatic Positioner</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 font-bold">
              Class Code: 3 • High Alert
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">🔍 Specific Component / Instrument</span>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-purple-300">Instrument Air Line &amp; Pneumatic Actuator Diaphragm.</strong> Monitored by valve position feedback (<strong className="text-white">anti_surge_valve_1</strong>) and casing accelerometer (<strong className="text-white">vibration_4</strong>). Tubing air leak bleeds hold pressure, causing valve to drift open into bypass.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">📊 Sensor Telemetry Signature</span>
              <ul className="text-slate-400 space-y-1 list-disc list-inside">
                <li><strong className="text-purple-300">anti_surge_valve_1:</strong> Drops to 66%</li>
                <li><strong className="text-purple-300">flow_rate_1:</strong> Collapses to 254 m³/h (-7.5σ)</li>
                <li><strong className="text-purple-300">vibration_4 (Casing DE):</strong> Jumps to 7.2 mm/s</li>
                <li><strong className="text-slate-200">temperature_26:</strong> Normal (proves no bearing seizure)</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-purple-400 block mb-1">💼 Business Value &amp; Action</span>
              <p className="text-slate-400 leading-relaxed">
                Directly points maintenance to pneumatic instrument air lines rather than tearing apart compressor casing or bearings. Eliminates multi-day false shutdowns.
              </p>
            </div>
          </div>
        </div>

        {/* MODE 5: suction_filter_choke */}
        <div className="p-5 bg-slate-900/90 border border-amber-500/40 rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl">🟡</span>
              <div>
                <h3 className="text-base font-bold text-amber-400">RCA 4: suction_filter_choke</h3>
                <p className="text-xs text-slate-400">Instrument: Suction Strainer Basket &amp; Pressure Header Line</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
              Class Code: 4 • Warning
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">🔍 Specific Component / Instrument</span>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-amber-300">Suction Strainer Basket &amp; Demister Pad.</strong> Monitored by suction pressure transmitter (<strong className="text-white">pressure_1</strong>) and flow meter (<strong className="text-white">flow_rate_1</strong>). Particulate fouling starves the first compressor impeller stage.
              </p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-slate-300 block mb-1">📊 Sensor Telemetry Signature</span>
              <ul className="text-slate-400 space-y-1 list-disc list-inside">
                <li><strong className="text-amber-300">pressure_1 (Suction):</strong> Drops to 26.8 kg/cm² (-15σ)</li>
                <li><strong className="text-amber-300">flow_rate_1:</strong> Drops to 242 m³/h (-15σ)</li>
                <li><strong className="text-amber-300">temperature_10 (Stator):</strong> Rises +8.5°C</li>
                <li><strong className="text-slate-200">level_1 &amp; anti_surge_valve_1:</strong> Normal</li>
              </ul>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="font-bold text-amber-400 block mb-1">💼 Business Value &amp; Action</span>
              <p className="text-slate-400 leading-relaxed">
                Alerts operators early so they can execute an online backwash or filter switch before suction starvation induces compressor surge or causes motor insulation thermal degradation.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
