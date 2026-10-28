export interface TelemetrySensors {
  motor_current: number;
  forward_flow: number;
  suction_press: number;
  discharge_press: number;
  antisurge_valve: number;
  radial_vib_nde: number;
  casing_vib_de: number;
  bearing_temp: number;
  stator_temp: number;
  lube_temp: number;
}

export interface FeatureAttribution {
  rank: number;
  tag: string;
  name: string;
  current_value: number;
  baseline_mean: number;
  z_score: number;
  pct_change: number;
  direction: 'HIGH' | 'LOW';
}

export interface OperatorDiagnosis {
  title: string;
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  cause: string;
  action: string;
  badge: string;
}

export interface GroundTruth {
  label: number;
  fault_type: string;
}

export interface MLInference {
  raw_score: number;
  anomaly_severity: number;
  status: 'NORMAL' | 'WARNING' | 'CRITICAL';
  status_color: 'emerald' | 'amber' | 'rose';
  alarm_active: boolean;
}

export interface SimulationStep {
  step: number;
  timestamp: string;
  ground_truth: GroundTruth;
  ml_inference: MLInference;
  top_attributions: FeatureAttribution[];
  diagnosis: OperatorDiagnosis;
  sensors: TelemetrySensors;
}

export type TabType = 'simulation' | 'performance' | 'physics' | 'datasets';
export type ScenarioType = 'all' | 'recycle' | 'bearing' | 'choke';
