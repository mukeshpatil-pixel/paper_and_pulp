export interface SupervisedTelemetrySensors {
  motor_current_1: number;
  flow_rate_1: number;
  pressure_1: number;
  pressure_4: number;
  anti_surge_valve_1: number;
  vibration_1: number;
  vibration_3: number;
  vibration_4: number;
  vibration_5: number;
  vibration_6: number;
  axial_displacement_1: number;
  temperature_26: number;
  temperature_10: number;
  temperature_30: number;
  level_1: number;
}

export interface FeatureAttribution {
  rank: number;
  tag: string;
  name: string;
  current_value: number;
  baseline_mean: number;
  z_score: number;
  direction: 'HIGH' | 'LOW';
}

export interface Diagnosis {
  headline: string;
  severity: string;
  failed_instrument: string;
  instrument_tag: string;
  direct_rca: string;
  business_impact: string;
  recommended_action: string;
}

export interface SupervisedInference {
  predicted_code: number;
  predicted_class: 'normal_operation' | 'oil_leakage' | 'bearing_failure' | 'air_leakage' | 'suction_filter_choke';
  confidence: number;
  probabilities: {
    normal_operation: number;
    oil_leakage: number;
    bearing_failure: number;
    air_leakage: number;
    suction_filter_choke: number;
  };
  status_theme: {
    color: string;
    badge: string;
    icon: string;
    display_name: string;
  };
}

export interface SimulationStep {
  step: number;
  timestamp: string;
  ground_truth: {
    fault_code: number;
    fault_class: string;
  };
  supervised_inference: SupervisedInference;
  top_attributions: FeatureAttribution[];
  diagnosis: Diagnosis;
  sensors: SupervisedTelemetrySensors;
}

export type TabType = 'cockpit' | 'performance' | 'knowledge' | 'datasets';
export type ScenarioType = 'all' | 'normal' | 'oil' | 'bearing' | 'air' | 'choke';
