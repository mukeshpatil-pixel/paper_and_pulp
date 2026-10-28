export const SUPERVISED_SIMULATION_DATA = [
  {
    "step": 0,
    "timestamp": "2022-03-01 08:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.01,
        "baseline_mean": 4.23,
        "z_score": -1.13,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 269.92,
        "baseline_mean": 268.67,
        "z_score": 0.67,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.01,
        "baseline_mean": 9.17,
        "z_score": -0.57,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 52.52,
        "baseline_mean": 52.93,
        "z_score": -0.46,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.72,
        "baseline_mean": 86.85,
        "z_score": -0.43,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.57,
      "flow_rate_1": 269.92,
      "pressure_1": 29.21,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.5,
      "vibration_1": 9.01,
      "vibration_3": 4.94,
      "vibration_4": 4.01,
      "vibration_5": 3.46,
      "vibration_6": 1.4,
      "axial_displacement_1": 12.42,
      "temperature_26": 60.6,
      "temperature_10": 40.0,
      "temperature_30": 52.5,
      "level_1": 86.7
    }
  },
  {
    "step": 1,
    "timestamp": "2022-03-01 08:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.46,
        "baseline_mean": 1.38,
        "z_score": 1.57,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.41,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.97,
        "baseline_mean": 4.23,
        "z_score": -1.34,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.97,
        "baseline_mean": 40.89,
        "z_score": 1.05,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 74.87,
        "baseline_mean": 25.05,
        "z_score": 0.82,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.92,
      "flow_rate_1": 269.83,
      "pressure_1": 29.25,
      "pressure_4": 40.97,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.04,
      "vibration_3": 4.9,
      "vibration_4": 3.97,
      "vibration_5": 3.28,
      "vibration_6": 1.46,
      "axial_displacement_1": 74.87,
      "temperature_26": 60.6,
      "temperature_10": 39.7,
      "temperature_30": 52.4,
      "level_1": 86.6
    }
  },
  {
    "step": 2,
    "timestamp": "2022-03-01 08:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.45,
        "baseline_mean": 1.38,
        "z_score": 1.42,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.1,
        "baseline_mean": 142.51,
        "z_score": 0.97,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 270.28,
        "baseline_mean": 268.67,
        "z_score": 0.87,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.07,
        "baseline_mean": 4.23,
        "z_score": -0.82,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.62,
        "baseline_mean": 86.85,
        "z_score": -0.75,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.1,
      "flow_rate_1": 270.28,
      "pressure_1": 29.2,
      "pressure_4": 40.9,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.99,
      "vibration_3": 4.8,
      "vibration_4": 4.07,
      "vibration_5": 3.36,
      "vibration_6": 1.45,
      "axial_displacement_1": 67.29,
      "temperature_26": 60.7,
      "temperature_10": 40.2,
      "temperature_30": 52.7,
      "level_1": 86.6
    }
  },
  {
    "step": 3,
    "timestamp": "2022-03-01 08:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.48,
        "baseline_mean": 1.38,
        "z_score": 1.93,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.96,
        "baseline_mean": 4.23,
        "z_score": -1.37,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 270.71,
        "baseline_mean": 268.67,
        "z_score": 1.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 60.17,
        "baseline_mean": 60.77,
        "z_score": -0.85,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 52.22,
        "baseline_mean": 52.93,
        "z_score": -0.78,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.79,
      "flow_rate_1": 270.71,
      "pressure_1": 29.21,
      "pressure_4": 40.88,
      "anti_surge_valve_1": 71.0,
      "vibration_1": 9.13,
      "vibration_3": 4.82,
      "vibration_4": 3.96,
      "vibration_5": 3.39,
      "vibration_6": 1.48,
      "axial_displacement_1": 68.39,
      "temperature_26": 60.2,
      "temperature_10": 40.3,
      "temperature_30": 52.2,
      "level_1": 86.7
    }
  },
  {
    "step": 4,
    "timestamp": "2022-03-01 08:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.52,
        "baseline_mean": 1.38,
        "z_score": 2.75,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.56,
        "baseline_mean": 142.51,
        "z_score": 1.73,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.63,
        "baseline_mean": 268.67,
        "z_score": 1.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.96,
        "baseline_mean": 40.89,
        "z_score": 0.95,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.26,
        "baseline_mean": 3.41,
        "z_score": -0.79,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.56,
      "flow_rate_1": 271.63,
      "pressure_1": 29.2,
      "pressure_4": 40.96,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.02,
      "vibration_3": 4.8,
      "vibration_4": 4.14,
      "vibration_5": 3.26,
      "vibration_6": 1.52,
      "axial_displacement_1": 29.19,
      "temperature_26": 60.4,
      "temperature_10": 41.6,
      "temperature_30": 52.8,
      "level_1": 86.7
    }
  },
  {
    "step": 5,
    "timestamp": "2022-03-01 08:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.85,
        "baseline_mean": 142.51,
        "z_score": 2.22,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.02,
        "baseline_mean": 40.89,
        "z_score": 1.75,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.8,
        "baseline_mean": 268.67,
        "z_score": 1.69,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.72,
        "baseline_mean": 40.74,
        "z_score": 1.58,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.18,
        "baseline_mean": 52.93,
        "z_score": 1.37,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.85,
      "flow_rate_1": 271.8,
      "pressure_1": 29.23,
      "pressure_4": 41.02,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.04,
      "vibration_3": 4.71,
      "vibration_4": 4.3,
      "vibration_5": 3.28,
      "vibration_6": 1.43,
      "axial_displacement_1": 64.77,
      "temperature_26": 61.3,
      "temperature_10": 43.7,
      "temperature_30": 54.2,
      "level_1": 87.0
    }
  },
  {
    "step": 6,
    "timestamp": "2022-03-01 08:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.26,
        "baseline_mean": 268.67,
        "z_score": 2.48,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.04,
        "baseline_mean": 3.41,
        "z_score": -1.97,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.36,
        "baseline_mean": 40.74,
        "z_score": 1.92,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 122.53,
        "baseline_mean": 25.05,
        "z_score": 1.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.44,
        "baseline_mean": 142.51,
        "z_score": 1.54,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.44,
      "flow_rate_1": 273.26,
      "pressure_1": 29.21,
      "pressure_4": 40.97,
      "anti_surge_valve_1": 71.0,
      "vibration_1": 9.09,
      "vibration_3": 4.69,
      "vibration_4": 4.28,
      "vibration_5": 3.04,
      "vibration_6": 1.43,
      "axial_displacement_1": 122.53,
      "temperature_26": 61.3,
      "temperature_10": 44.4,
      "temperature_30": 54.3,
      "level_1": 87.0
    }
  },
  {
    "step": 7,
    "timestamp": "2022-03-01 08:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.5,
      "probabilities": {
        "normal_operation": 99.5,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.5,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.05,
        "baseline_mean": 268.67,
        "z_score": 2.36,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.02,
        "baseline_mean": 3.41,
        "z_score": -2.09,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 119.95,
        "baseline_mean": 25.05,
        "z_score": 1.56,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.43,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.35,
        "baseline_mean": 40.74,
        "z_score": 1.39,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.99,
      "flow_rate_1": 273.05,
      "pressure_1": 29.25,
      "pressure_4": 40.94,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.2,
      "vibration_3": 4.72,
      "vibration_4": 4.03,
      "vibration_5": 3.02,
      "vibration_6": 1.41,
      "axial_displacement_1": 119.95,
      "temperature_26": 61.2,
      "temperature_10": 43.3,
      "temperature_30": 54.0,
      "level_1": 86.9
    }
  },
  {
    "step": 8,
    "timestamp": "2022-03-01 08:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 163.52,
        "baseline_mean": 25.05,
        "z_score": 2.28,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.35,
        "baseline_mean": 268.67,
        "z_score": 1.98,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.68,
        "baseline_mean": 40.74,
        "z_score": 1.56,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.27,
        "baseline_mean": 52.93,
        "z_score": 1.46,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.24,
        "baseline_mean": 29.2,
        "z_score": 1.25,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.08,
      "flow_rate_1": 272.35,
      "pressure_1": 29.24,
      "pressure_4": 40.98,
      "anti_surge_valve_1": 70.6,
      "vibration_1": 9.11,
      "vibration_3": 4.84,
      "vibration_4": 4.24,
      "vibration_5": 3.26,
      "vibration_6": 1.41,
      "axial_displacement_1": 163.52,
      "temperature_26": 61.3,
      "temperature_10": 43.7,
      "temperature_30": 54.3,
      "level_1": 86.9
    }
  },
  {
    "step": 9,
    "timestamp": "2022-03-01 08:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.11,
        "baseline_mean": 268.67,
        "z_score": 1.86,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.52,
        "baseline_mean": 142.51,
        "z_score": 1.67,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 116.63,
        "baseline_mean": 25.05,
        "z_score": 1.51,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.48,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.08,
        "baseline_mean": 52.93,
        "z_score": 1.26,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.52,
      "flow_rate_1": 272.11,
      "pressure_1": 29.25,
      "pressure_4": 40.97,
      "anti_surge_valve_1": 71.2,
      "vibration_1": 8.82,
      "vibration_3": 5.05,
      "vibration_4": 4.35,
      "vibration_5": 3.42,
      "vibration_6": 1.39,
      "axial_displacement_1": 116.63,
      "temperature_26": 61.0,
      "temperature_10": 42.9,
      "temperature_30": 54.1,
      "level_1": 86.7
    }
  },
  {
    "step": 10,
    "timestamp": "2022-03-01 08:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.96,
        "baseline_mean": 142.51,
        "z_score": 2.39,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.56,
        "baseline_mean": 52.93,
        "z_score": 1.79,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.72,
        "baseline_mean": 9.17,
        "z_score": -1.62,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.53,
        "baseline_mean": 268.67,
        "z_score": 1.54,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.0,
        "baseline_mean": 40.89,
        "z_score": 1.49,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.96,
      "flow_rate_1": 271.53,
      "pressure_1": 29.24,
      "pressure_4": 41.0,
      "anti_surge_valve_1": 71.6,
      "vibration_1": 8.72,
      "vibration_3": 4.97,
      "vibration_4": 4.5,
      "vibration_5": 3.34,
      "vibration_6": 1.35,
      "axial_displacement_1": 93.49,
      "temperature_26": 61.4,
      "temperature_10": 43.5,
      "temperature_30": 54.6,
      "level_1": 86.8
    }
  },
  {
    "step": 11,
    "timestamp": "2022-03-01 08:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.96,
        "baseline_mean": 142.51,
        "z_score": 2.38,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.59,
        "baseline_mean": 4.23,
        "z_score": 1.89,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.58,
        "baseline_mean": 52.93,
        "z_score": 1.81,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.0,
        "baseline_mean": 40.89,
        "z_score": 1.47,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.51,
        "baseline_mean": 40.74,
        "z_score": 1.47,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.96,
      "flow_rate_1": 271.24,
      "pressure_1": 29.22,
      "pressure_4": 41.0,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.78,
      "vibration_3": 5.05,
      "vibration_4": 4.59,
      "vibration_5": 3.3,
      "vibration_6": 1.33,
      "axial_displacement_1": 52.68,
      "temperature_26": 61.5,
      "temperature_10": 43.5,
      "temperature_30": 54.6,
      "level_1": 86.7
    }
  },
  {
    "step": 12,
    "timestamp": "2022-03-01 09:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.48,
        "baseline_mean": 142.51,
        "z_score": 1.61,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.77,
        "baseline_mean": 9.17,
        "z_score": -1.45,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.24,
        "baseline_mean": 40.74,
        "z_score": 1.33,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.1,
        "baseline_mean": 52.93,
        "z_score": 1.27,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.24,
        "baseline_mean": 29.2,
        "z_score": 1.22,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.48,
      "flow_rate_1": 270.41,
      "pressure_1": 29.24,
      "pressure_4": 40.98,
      "anti_surge_valve_1": 71.1,
      "vibration_1": 8.77,
      "vibration_3": 5.02,
      "vibration_4": 4.46,
      "vibration_5": 3.57,
      "vibration_6": 1.38,
      "axial_displacement_1": 75.97,
      "temperature_26": 61.3,
      "temperature_10": 43.2,
      "temperature_30": 54.1,
      "level_1": 86.7
    }
  },
  {
    "step": 13,
    "timestamp": "2022-03-01 09:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.2,
        "baseline_mean": 9.17,
        "z_score": -3.47,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.58,
        "baseline_mean": 4.23,
        "z_score": 1.85,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.58,
        "baseline_mean": 52.93,
        "z_score": 1.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.59,
        "baseline_mean": 142.51,
        "z_score": 1.78,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.02,
        "baseline_mean": 40.89,
        "z_score": 1.66,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.59,
      "flow_rate_1": 270.67,
      "pressure_1": 29.24,
      "pressure_4": 41.02,
      "anti_surge_valve_1": 70.6,
      "vibration_1": 8.2,
      "vibration_3": 4.98,
      "vibration_4": 4.58,
      "vibration_5": 3.44,
      "vibration_6": 1.36,
      "axial_displacement_1": 31.37,
      "temperature_26": 61.7,
      "temperature_10": 43.7,
      "temperature_30": 54.6,
      "level_1": 86.8
    }
  },
  {
    "step": 14,
    "timestamp": "2022-03-01 09:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.19,
        "baseline_mean": 9.17,
        "z_score": -3.49,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.13,
        "baseline_mean": 52.93,
        "z_score": 2.41,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.88,
        "baseline_mean": 40.74,
        "z_score": 2.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.21,
        "baseline_mean": 60.77,
        "z_score": 2.01,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.01,
      "flow_rate_1": 270.74,
      "pressure_1": 29.24,
      "pressure_4": 40.99,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.19,
      "vibration_3": 4.77,
      "vibration_4": 4.6,
      "vibration_5": 3.28,
      "vibration_6": 1.26,
      "axial_displacement_1": 46.5,
      "temperature_26": 62.2,
      "temperature_10": 44.9,
      "temperature_30": 55.1,
      "level_1": 87.0
    }
  },
  {
    "step": 15,
    "timestamp": "2022-03-01 09:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.14,
        "baseline_mean": 9.17,
        "z_score": -3.68,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.2,
        "baseline_mean": 1.38,
        "z_score": -3.46,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.18,
        "baseline_mean": 52.93,
        "z_score": 2.47,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.22,
        "baseline_mean": 40.74,
        "z_score": 2.38,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.43,
        "baseline_mean": 60.77,
        "z_score": 2.31,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.22,
      "flow_rate_1": 272.46,
      "pressure_1": 29.22,
      "pressure_4": 40.94,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.14,
      "vibration_3": 4.64,
      "vibration_4": 4.56,
      "vibration_5": 3.13,
      "vibration_6": 1.2,
      "axial_displacement_1": 10.27,
      "temperature_26": 62.4,
      "temperature_10": 45.2,
      "temperature_30": 55.2,
      "level_1": 87.0
    }
  },
  {
    "step": 16,
    "timestamp": "2022-03-01 09:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.25,
        "baseline_mean": 1.38,
        "z_score": -2.59,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.51,
        "baseline_mean": 9.17,
        "z_score": -2.37,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.41,
        "baseline_mean": 60.77,
        "z_score": 2.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.03,
        "baseline_mean": 52.93,
        "z_score": 2.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.84,
        "baseline_mean": 142.51,
        "z_score": 2.19,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.84,
      "flow_rate_1": 272.54,
      "pressure_1": 29.21,
      "pressure_4": 40.99,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.51,
      "vibration_3": 4.89,
      "vibration_4": 4.58,
      "vibration_5": 3.15,
      "vibration_6": 1.25,
      "axial_displacement_1": 16.1,
      "temperature_26": 62.4,
      "temperature_10": 44.6,
      "temperature_30": 55.0,
      "level_1": 86.9
    }
  },
  {
    "step": 17,
    "timestamp": "2022-03-01 09:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.75,
        "baseline_mean": 60.77,
        "z_score": 2.77,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.24,
        "baseline_mean": 1.38,
        "z_score": -2.71,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.38,
        "baseline_mean": 52.93,
        "z_score": 2.68,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.49,
        "baseline_mean": 9.17,
        "z_score": -2.44,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.53,
        "baseline_mean": 40.74,
        "z_score": 2.01,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.64,
      "flow_rate_1": 271.55,
      "pressure_1": 29.19,
      "pressure_4": 40.98,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.49,
      "vibration_3": 4.92,
      "vibration_4": 4.48,
      "vibration_5": 3.33,
      "vibration_6": 1.24,
      "axial_displacement_1": 10.77,
      "temperature_26": 62.8,
      "temperature_10": 44.5,
      "temperature_30": 55.4,
      "level_1": 86.9
    }
  },
  {
    "step": 18,
    "timestamp": "2022-03-01 09:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.86,
        "baseline_mean": 60.77,
        "z_score": 2.92,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.4,
        "baseline_mean": 52.93,
        "z_score": 2.71,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.29,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.33,
        "baseline_mean": 40.74,
        "z_score": 1.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.64,
        "baseline_mean": 9.17,
        "z_score": -1.88,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.64,
      "flow_rate_1": 271.47,
      "pressure_1": 29.21,
      "pressure_4": 41.01,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.64,
      "vibration_3": 4.97,
      "vibration_4": 4.35,
      "vibration_5": 3.35,
      "vibration_6": 1.26,
      "axial_displacement_1": 13.51,
      "temperature_26": 62.9,
      "temperature_10": 44.3,
      "temperature_30": 55.4,
      "level_1": 86.8
    }
  },
  {
    "step": 19,
    "timestamp": "2022-03-01 09:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.1,
        "baseline_mean": 40.89,
        "z_score": 2.65,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.0,
        "baseline_mean": 142.51,
        "z_score": 2.46,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.44,
        "baseline_mean": 60.77,
        "z_score": 2.34,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.72,
        "baseline_mean": 52.93,
        "z_score": 1.96,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.63,
        "baseline_mean": 9.17,
        "z_score": -1.94,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 144.0,
      "flow_rate_1": 270.4,
      "pressure_1": 29.23,
      "pressure_4": 41.1,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.63,
      "vibration_3": 5.13,
      "vibration_4": 4.36,
      "vibration_5": 3.4,
      "vibration_6": 1.32,
      "axial_displacement_1": -6.38,
      "temperature_26": 62.4,
      "temperature_10": 43.2,
      "temperature_30": 54.7,
      "level_1": 86.6
    }
  },
  {
    "step": 20,
    "timestamp": "2022-03-01 09:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.58,
        "baseline_mean": 60.77,
        "z_score": 2.53,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.82,
        "baseline_mean": 40.74,
        "z_score": 2.17,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.88,
        "baseline_mean": 52.93,
        "z_score": 2.14,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.05,
        "baseline_mean": 40.89,
        "z_score": 2.06,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.62,
        "baseline_mean": 9.17,
        "z_score": -1.96,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.2,
      "flow_rate_1": 271.08,
      "pressure_1": 29.21,
      "pressure_4": 41.05,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.62,
      "vibration_3": 5.11,
      "vibration_4": 4.47,
      "vibration_5": 3.33,
      "vibration_6": 1.29,
      "axial_displacement_1": 22.09,
      "temperature_26": 62.6,
      "temperature_10": 44.8,
      "temperature_30": 54.9,
      "level_1": 86.7
    }
  },
  {
    "step": 21,
    "timestamp": "2022-03-01 09:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.71,
        "baseline_mean": 60.77,
        "z_score": 2.71,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.51,
        "baseline_mean": 9.17,
        "z_score": -2.37,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.12,
        "baseline_mean": 40.74,
        "z_score": 2.33,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.93,
        "baseline_mean": 52.93,
        "z_score": 2.19,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.05,
        "baseline_mean": 40.89,
        "z_score": 2.08,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.31,
      "flow_rate_1": 271.05,
      "pressure_1": 29.21,
      "pressure_4": 41.05,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.51,
      "vibration_3": 4.99,
      "vibration_4": 4.49,
      "vibration_5": 3.4,
      "vibration_6": 1.29,
      "axial_displacement_1": -12.95,
      "temperature_26": 62.7,
      "temperature_10": 45.1,
      "temperature_30": 54.9,
      "level_1": 86.7
    }
  },
  {
    "step": 22,
    "timestamp": "2022-03-01 09:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 89.0,
      "probabilities": {
        "normal_operation": 89.0,
        "oil_leakage": 2.0,
        "bearing_failure": 5.0,
        "air_leakage": 3.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 63.92,
        "baseline_mean": 60.77,
        "z_score": 4.41,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 7.96,
        "baseline_mean": 9.17,
        "z_score": -4.32,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.92,
        "baseline_mean": 40.74,
        "z_score": 3.81,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.12,
        "baseline_mean": 52.93,
        "z_score": 3.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.15,
        "baseline_mean": 40.89,
        "z_score": 3.41,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.47,
      "flow_rate_1": 271.52,
      "pressure_1": 29.21,
      "pressure_4": 41.15,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 7.96,
      "vibration_3": 4.89,
      "vibration_4": 4.6,
      "vibration_5": 3.41,
      "vibration_6": 1.21,
      "axial_displacement_1": -11.47,
      "temperature_26": 63.9,
      "temperature_10": 47.9,
      "temperature_30": 56.1,
      "level_1": 87.1
    }
  },
  {
    "step": 23,
    "timestamp": "2022-03-01 09:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 95.0,
      "probabilities": {
        "normal_operation": 95.0,
        "oil_leakage": 1.0,
        "bearing_failure": 2.0,
        "air_leakage": 1.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 63.73,
        "baseline_mean": 60.77,
        "z_score": 4.14,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.2,
        "baseline_mean": 40.89,
        "z_score": 4.03,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.13,
        "baseline_mean": 9.17,
        "z_score": -3.73,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.23,
        "baseline_mean": 40.74,
        "z_score": 3.44,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.9,
        "baseline_mean": 52.93,
        "z_score": 3.26,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.18,
      "flow_rate_1": 270.5,
      "pressure_1": 29.23,
      "pressure_4": 41.2,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.13,
      "vibration_3": 4.99,
      "vibration_4": 4.6,
      "vibration_5": 3.32,
      "vibration_6": 1.29,
      "axial_displacement_1": -16.24,
      "temperature_26": 63.7,
      "temperature_10": 47.2,
      "temperature_30": 55.9,
      "level_1": 86.9
    }
  },
  {
    "step": 24,
    "timestamp": "2022-03-01 10:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 89.0,
      "probabilities": {
        "normal_operation": 89.0,
        "oil_leakage": 3.0,
        "bearing_failure": 5.0,
        "air_leakage": 2.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 63.94,
        "baseline_mean": 60.77,
        "z_score": 4.43,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.19,
        "baseline_mean": 40.74,
        "z_score": 3.95,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.91,
        "baseline_mean": 52.93,
        "z_score": 3.27,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.35,
        "baseline_mean": 9.17,
        "z_score": -2.92,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.11,
        "baseline_mean": 40.89,
        "z_score": 2.86,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.03,
      "flow_rate_1": 271.12,
      "pressure_1": 29.19,
      "pressure_4": 41.11,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.35,
      "vibration_3": 4.73,
      "vibration_4": 4.16,
      "vibration_5": 3.11,
      "vibration_6": 1.26,
      "axial_displacement_1": -44.08,
      "temperature_26": 63.9,
      "temperature_10": 48.2,
      "temperature_30": 55.9,
      "level_1": 87.0
    }
  },
  {
    "step": 25,
    "timestamp": "2022-03-01 10:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 97.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 3.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 63.47,
        "baseline_mean": 60.77,
        "z_score": 3.78,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.74,
        "baseline_mean": 40.74,
        "z_score": 3.72,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 8.44,
        "baseline_mean": 9.17,
        "z_score": -2.62,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.28,
        "baseline_mean": 52.93,
        "z_score": 2.58,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.96,
        "baseline_mean": 3.41,
        "z_score": -2.43,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.26,
      "flow_rate_1": 271.59,
      "pressure_1": 29.19,
      "pressure_4": 41.07,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.44,
      "vibration_3": 4.72,
      "vibration_4": 4.12,
      "vibration_5": 2.96,
      "vibration_6": 1.34,
      "axial_displacement_1": -25.87,
      "temperature_26": 63.5,
      "temperature_10": 47.7,
      "temperature_30": 55.3,
      "level_1": 87.0
    }
  },
  {
    "step": 26,
    "timestamp": "2022-03-01 10:10",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 76.0,
      "probabilities": {
        "normal_operation": 23.0,
        "oil_leakage": 76.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 82.99,
        "baseline_mean": 86.85,
        "z_score": -12.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 6.77,
        "baseline_mean": 4.89,
        "z_score": 12.06,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 65.1,
        "baseline_mean": 60.77,
        "z_score": 6.06,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.33,
        "baseline_mean": 9.17,
        "z_score": 4.13,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.3,
        "baseline_mean": 52.93,
        "z_score": 3.69,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (76.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 143.25,
      "flow_rate_1": 271.56,
      "pressure_1": 29.22,
      "pressure_4": 41.04,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 10.33,
      "vibration_3": 6.77,
      "vibration_4": 4.13,
      "vibration_5": 3.2,
      "vibration_6": 1.37,
      "axial_displacement_1": -68.38,
      "temperature_26": 65.1,
      "temperature_10": 45.9,
      "temperature_30": 56.3,
      "level_1": 83.0
    }
  },
  {
    "step": 27,
    "timestamp": "2022-03-01 10:15",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 77.0,
      "probabilities": {
        "normal_operation": 20.0,
        "oil_leakage": 77.0,
        "bearing_failure": 3.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 82.07,
        "baseline_mean": 86.85,
        "z_score": -15.47,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 6.98,
        "baseline_mean": 4.89,
        "z_score": 13.43,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 65.68,
        "baseline_mean": 60.77,
        "z_score": 6.88,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.86,
        "baseline_mean": 52.93,
        "z_score": 4.31,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.32,
        "baseline_mean": 9.17,
        "z_score": 4.08,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (77.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 143.23,
      "flow_rate_1": 273.57,
      "pressure_1": 29.21,
      "pressure_4": 40.99,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 10.32,
      "vibration_3": 6.98,
      "vibration_4": 4.27,
      "vibration_5": 2.93,
      "vibration_6": 1.36,
      "axial_displacement_1": -100.11,
      "temperature_26": 65.7,
      "temperature_10": 46.6,
      "temperature_30": 56.9,
      "level_1": 82.1
    }
  },
  {
    "step": 28,
    "timestamp": "2022-03-01 10:20",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 99.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 81.26,
        "baseline_mean": 86.85,
        "z_score": -18.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 7.27,
        "baseline_mean": 4.89,
        "z_score": 15.32,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 66.5,
        "baseline_mean": 60.77,
        "z_score": 8.02,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.9,
        "baseline_mean": 9.17,
        "z_score": 6.16,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 57.81,
        "baseline_mean": 52.93,
        "z_score": 5.35,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (99.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.29,
      "flow_rate_1": 271.75,
      "pressure_1": 29.21,
      "pressure_4": 40.93,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 10.9,
      "vibration_3": 7.27,
      "vibration_4": 4.02,
      "vibration_5": 3.28,
      "vibration_6": 1.26,
      "axial_displacement_1": -33.28,
      "temperature_26": 66.5,
      "temperature_10": 46.8,
      "temperature_30": 57.8,
      "level_1": 81.3
    }
  },
  {
    "step": 29,
    "timestamp": "2022-03-01 10:25",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 99.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 80.2,
        "baseline_mean": 86.85,
        "z_score": -21.55,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 7.73,
        "baseline_mean": 4.89,
        "z_score": 18.23,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 66.59,
        "baseline_mean": 60.77,
        "z_score": 8.15,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 11.14,
        "baseline_mean": 9.17,
        "z_score": 7.03,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 57.89,
        "baseline_mean": 52.93,
        "z_score": 5.44,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (99.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.29,
      "flow_rate_1": 270.4,
      "pressure_1": 29.2,
      "pressure_4": 40.91,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 11.14,
      "vibration_3": 7.73,
      "vibration_4": 3.9,
      "vibration_5": 3.45,
      "vibration_6": 1.31,
      "axial_displacement_1": -67.02,
      "temperature_26": 66.6,
      "temperature_10": 45.9,
      "temperature_30": 57.9,
      "level_1": 80.2
    }
  },
  {
    "step": 30,
    "timestamp": "2022-03-01 10:30",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 98.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 98.0,
        "bearing_failure": 2.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 79.32,
        "baseline_mean": 86.85,
        "z_score": -24.41,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 8.09,
        "baseline_mean": 4.89,
        "z_score": 20.55,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 11.58,
        "baseline_mean": 9.17,
        "z_score": 8.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 66.83,
        "baseline_mean": 60.77,
        "z_score": 8.48,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 58.19,
        "baseline_mean": 52.93,
        "z_score": 5.77,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (98.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.68,
      "flow_rate_1": 270.36,
      "pressure_1": 29.2,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 11.58,
      "vibration_3": 8.09,
      "vibration_4": 4.01,
      "vibration_5": 3.39,
      "vibration_6": 1.35,
      "axial_displacement_1": -13.89,
      "temperature_26": 66.8,
      "temperature_10": 45.6,
      "temperature_30": 58.2,
      "level_1": 79.3
    }
  },
  {
    "step": 31,
    "timestamp": "2022-03-01 10:35",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 99.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 78.36,
        "baseline_mean": 86.85,
        "z_score": -27.51,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 8.56,
        "baseline_mean": 4.89,
        "z_score": 23.57,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 12.06,
        "baseline_mean": 9.17,
        "z_score": 10.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 67.06,
        "baseline_mean": 60.77,
        "z_score": 8.81,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 58.28,
        "baseline_mean": 52.93,
        "z_score": 5.86,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (99.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.06,
      "flow_rate_1": 269.2,
      "pressure_1": 29.17,
      "pressure_4": 40.79,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 12.06,
      "vibration_3": 8.56,
      "vibration_4": 3.95,
      "vibration_5": 3.44,
      "vibration_6": 1.36,
      "axial_displacement_1": -18.98,
      "temperature_26": 67.1,
      "temperature_10": 45.1,
      "temperature_30": 58.3,
      "level_1": 78.4
    }
  },
  {
    "step": 32,
    "timestamp": "2022-03-01 10:40",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 99.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 77.59,
        "baseline_mean": 86.85,
        "z_score": -30.01,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 8.89,
        "baseline_mean": 4.89,
        "z_score": 25.67,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 12.29,
        "baseline_mean": 9.17,
        "z_score": 11.12,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 67.97,
        "baseline_mean": 60.77,
        "z_score": 10.08,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 59.3,
        "baseline_mean": 52.93,
        "z_score": 6.98,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (99.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.69,
      "flow_rate_1": 269.55,
      "pressure_1": 29.2,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 12.29,
      "vibration_3": 8.89,
      "vibration_4": 3.9,
      "vibration_5": 3.41,
      "vibration_6": 1.32,
      "axial_displacement_1": -19.51,
      "temperature_26": 68.0,
      "temperature_10": 46.8,
      "temperature_30": 59.3,
      "level_1": 77.6
    }
  },
  {
    "step": 33,
    "timestamp": "2022-03-01 10:45",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 99.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 76.68,
        "baseline_mean": 86.85,
        "z_score": -32.94,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 9.32,
        "baseline_mean": 4.89,
        "z_score": 28.45,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 12.93,
        "baseline_mean": 9.17,
        "z_score": 13.41,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 68.2,
        "baseline_mean": 60.77,
        "z_score": 10.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 59.67,
        "baseline_mean": 52.93,
        "z_score": 7.39,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (99.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.41,
      "flow_rate_1": 269.87,
      "pressure_1": 29.19,
      "pressure_4": 40.79,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 12.93,
      "vibration_3": 9.32,
      "vibration_4": 3.95,
      "vibration_5": 3.43,
      "vibration_6": 1.33,
      "axial_displacement_1": -54.28,
      "temperature_26": 68.2,
      "temperature_10": 46.4,
      "temperature_30": 59.7,
      "level_1": 76.7
    }
  },
  {
    "step": 34,
    "timestamp": "2022-03-01 10:50",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 98.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 98.0,
        "bearing_failure": 2.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 75.9,
        "baseline_mean": 86.85,
        "z_score": -35.48,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 9.81,
        "baseline_mean": 4.89,
        "z_score": 31.62,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 13.38,
        "baseline_mean": 9.17,
        "z_score": 14.99,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 69.12,
        "baseline_mean": 60.77,
        "z_score": 11.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 60.62,
        "baseline_mean": 52.93,
        "z_score": 8.44,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (98.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.62,
      "flow_rate_1": 270.73,
      "pressure_1": 29.24,
      "pressure_4": 40.83,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 13.38,
      "vibration_3": 9.81,
      "vibration_4": 4.23,
      "vibration_5": 3.36,
      "vibration_6": 1.29,
      "axial_displacement_1": -16.35,
      "temperature_26": 69.1,
      "temperature_10": 47.0,
      "temperature_30": 60.6,
      "level_1": 75.9
    }
  },
  {
    "step": 35,
    "timestamp": "2022-03-01 10:55",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 97.0,
        "bearing_failure": 3.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 74.87,
        "baseline_mean": 86.85,
        "z_score": -38.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 10.46,
        "baseline_mean": 4.89,
        "z_score": 35.75,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 13.65,
        "baseline_mean": 9.17,
        "z_score": 15.98,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 69.61,
        "baseline_mean": 60.77,
        "z_score": 12.38,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.09,
        "baseline_mean": 52.93,
        "z_score": 8.95,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (97.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.09,
      "flow_rate_1": 270.37,
      "pressure_1": 29.23,
      "pressure_4": 40.83,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 13.65,
      "vibration_3": 10.46,
      "vibration_4": 4.44,
      "vibration_5": 3.56,
      "vibration_6": 1.33,
      "axial_displacement_1": -14.95,
      "temperature_26": 69.6,
      "temperature_10": 45.9,
      "temperature_30": 61.1,
      "level_1": 74.9
    }
  },
  {
    "step": 36,
    "timestamp": "2022-03-01 11:00",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 98.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 98.0,
        "bearing_failure": 2.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 74.05,
        "baseline_mean": 86.85,
        "z_score": -41.46,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 10.75,
        "baseline_mean": 4.89,
        "z_score": 37.64,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 14.1,
        "baseline_mean": 9.17,
        "z_score": 17.57,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 70.14,
        "baseline_mean": 60.77,
        "z_score": 13.13,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.65,
        "baseline_mean": 52.93,
        "z_score": 9.56,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (98.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.16,
      "flow_rate_1": 271.44,
      "pressure_1": 29.2,
      "pressure_4": 40.8,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 14.1,
      "vibration_3": 10.75,
      "vibration_4": 4.44,
      "vibration_5": 3.41,
      "vibration_6": 1.31,
      "axial_displacement_1": -18.01,
      "temperature_26": 70.1,
      "temperature_10": 45.8,
      "temperature_30": 61.6,
      "level_1": 74.1
    }
  },
  {
    "step": 37,
    "timestamp": "2022-03-01 11:05",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 96.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 96.0,
        "bearing_failure": 4.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 73.1,
        "baseline_mean": 86.85,
        "z_score": -44.56,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 11.21,
        "baseline_mean": 4.89,
        "z_score": 40.55,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 14.63,
        "baseline_mean": 9.17,
        "z_score": 19.48,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 70.52,
        "baseline_mean": 60.77,
        "z_score": 13.65,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.71,
        "baseline_mean": 52.93,
        "z_score": 9.63,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (96.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.56,
      "flow_rate_1": 272.06,
      "pressure_1": 29.23,
      "pressure_4": 40.77,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 14.63,
      "vibration_3": 11.21,
      "vibration_4": 4.23,
      "vibration_5": 3.42,
      "vibration_6": 1.33,
      "axial_displacement_1": -10.84,
      "temperature_26": 70.5,
      "temperature_10": 45.7,
      "temperature_30": 61.7,
      "level_1": 73.1
    }
  },
  {
    "step": 38,
    "timestamp": "2022-03-01 11:10",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 94.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 94.0,
        "bearing_failure": 6.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 72.06,
        "baseline_mean": 86.85,
        "z_score": -47.91,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 11.78,
        "baseline_mean": 4.89,
        "z_score": 44.22,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 14.64,
        "baseline_mean": 9.17,
        "z_score": 19.49,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 71.6,
        "baseline_mean": 60.77,
        "z_score": 15.17,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 62.55,
        "baseline_mean": 52.93,
        "z_score": 10.55,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (94.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.61,
      "flow_rate_1": 271.84,
      "pressure_1": 29.23,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 14.64,
      "vibration_3": 11.78,
      "vibration_4": 4.6,
      "vibration_5": 3.47,
      "vibration_6": 1.31,
      "axial_displacement_1": -79.88,
      "temperature_26": 71.6,
      "temperature_10": 46.0,
      "temperature_30": 62.6,
      "level_1": 72.1
    }
  },
  {
    "step": 39,
    "timestamp": "2022-03-01 11:15",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 97.0,
        "bearing_failure": 3.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 71.21,
        "baseline_mean": 86.85,
        "z_score": -50.68,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 12.27,
        "baseline_mean": 4.89,
        "z_score": 47.37,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 15.02,
        "baseline_mean": 9.17,
        "z_score": 20.85,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 72.03,
        "baseline_mean": 60.77,
        "z_score": 15.76,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 62.88,
        "baseline_mean": 52.93,
        "z_score": 10.92,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (97.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.53,
      "flow_rate_1": 271.52,
      "pressure_1": 29.27,
      "pressure_4": 40.94,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 15.02,
      "vibration_3": 12.27,
      "vibration_4": 4.6,
      "vibration_5": 3.41,
      "vibration_6": 1.35,
      "axial_displacement_1": -65.51,
      "temperature_26": 72.0,
      "temperature_10": 47.1,
      "temperature_30": 62.9,
      "level_1": 71.2
    }
  },
  {
    "step": 40,
    "timestamp": "2022-03-01 11:20",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 97.0,
        "bearing_failure": 3.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 70.28,
        "baseline_mean": 86.85,
        "z_score": -53.67,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 12.69,
        "baseline_mean": 4.89,
        "z_score": 50.09,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 15.67,
        "baseline_mean": 9.17,
        "z_score": 23.17,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 72.21,
        "baseline_mean": 60.77,
        "z_score": 16.02,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 62.88,
        "baseline_mean": 52.93,
        "z_score": 10.92,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (97.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.63,
      "flow_rate_1": 272.14,
      "pressure_1": 29.27,
      "pressure_4": 40.91,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 15.67,
      "vibration_3": 12.69,
      "vibration_4": 4.6,
      "vibration_5": 3.62,
      "vibration_6": 1.37,
      "axial_displacement_1": -63.59,
      "temperature_26": 72.2,
      "temperature_10": 45.8,
      "temperature_30": 62.9,
      "level_1": 70.3
    }
  },
  {
    "step": 41,
    "timestamp": "2022-03-01 11:25",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 96.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 96.0,
        "bearing_failure": 4.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 69.24,
        "baseline_mean": 86.85,
        "z_score": -57.04,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 13.15,
        "baseline_mean": 4.89,
        "z_score": 53.01,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 16.28,
        "baseline_mean": 9.17,
        "z_score": 25.35,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 72.48,
        "baseline_mean": 60.77,
        "z_score": 16.41,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 62.8,
        "baseline_mean": 52.93,
        "z_score": 10.83,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (96.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.9,
      "flow_rate_1": 271.49,
      "pressure_1": 29.27,
      "pressure_4": 40.86,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 16.28,
      "vibration_3": 13.15,
      "vibration_4": 4.6,
      "vibration_5": 3.77,
      "vibration_6": 1.38,
      "axial_displacement_1": -75.25,
      "temperature_26": 72.5,
      "temperature_10": 44.3,
      "temperature_30": 62.8,
      "level_1": 69.2
    }
  },
  {
    "step": 42,
    "timestamp": "2022-03-01 11:30",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 97.0,
        "bearing_failure": 3.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 68.33,
        "baseline_mean": 86.85,
        "z_score": -60.01,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 13.78,
        "baseline_mean": 4.89,
        "z_score": 57.04,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 16.84,
        "baseline_mean": 9.17,
        "z_score": 27.35,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 72.8,
        "baseline_mean": 60.77,
        "z_score": 16.85,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 63.28,
        "baseline_mean": 52.93,
        "z_score": 11.35,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (97.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.32,
      "flow_rate_1": 272.44,
      "pressure_1": 29.29,
      "pressure_4": 40.95,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 16.84,
      "vibration_3": 13.78,
      "vibration_4": 4.6,
      "vibration_5": 3.67,
      "vibration_6": 1.41,
      "axial_displacement_1": -82.99,
      "temperature_26": 72.8,
      "temperature_10": 43.7,
      "temperature_30": 63.3,
      "level_1": 68.3
    }
  },
  {
    "step": 43,
    "timestamp": "2022-03-01 11:35",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 99.0,
        "bearing_failure": 1.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 67.31,
        "baseline_mean": 86.85,
        "z_score": -63.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 14.09,
        "baseline_mean": 4.89,
        "z_score": 59.07,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 17.27,
        "baseline_mean": 9.17,
        "z_score": 28.89,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 72.91,
        "baseline_mean": 60.77,
        "z_score": 17.01,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 63.3,
        "baseline_mean": 52.93,
        "z_score": 11.37,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (99.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.68,
      "flow_rate_1": 271.04,
      "pressure_1": 29.33,
      "pressure_4": 40.93,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 17.27,
      "vibration_3": 14.09,
      "vibration_4": 4.53,
      "vibration_5": 3.79,
      "vibration_6": 1.45,
      "axial_displacement_1": -48.43,
      "temperature_26": 72.9,
      "temperature_10": 42.7,
      "temperature_30": 63.3,
      "level_1": 67.3
    }
  },
  {
    "step": 44,
    "timestamp": "2022-03-01 11:40",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 97.0,
        "bearing_failure": 3.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 66.57,
        "baseline_mean": 86.85,
        "z_score": -65.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 14.45,
        "baseline_mean": 4.89,
        "z_score": 61.35,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 17.41,
        "baseline_mean": 9.17,
        "z_score": 29.36,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 73.75,
        "baseline_mean": 60.77,
        "z_score": 18.18,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 63.88,
        "baseline_mean": 52.93,
        "z_score": 12.01,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (97.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.92,
      "flow_rate_1": 270.41,
      "pressure_1": 29.31,
      "pressure_4": 40.97,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 17.41,
      "vibration_3": 14.45,
      "vibration_4": 4.58,
      "vibration_5": 3.71,
      "vibration_6": 1.39,
      "axial_displacement_1": -72.26,
      "temperature_26": 73.8,
      "temperature_10": 44.2,
      "temperature_30": 63.9,
      "level_1": 66.6
    }
  },
  {
    "step": 45,
    "timestamp": "2022-03-01 11:45",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 96.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 96.0,
        "bearing_failure": 4.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 65.58,
        "baseline_mean": 86.85,
        "z_score": -68.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 14.81,
        "baseline_mean": 4.89,
        "z_score": 63.67,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 17.36,
        "baseline_mean": 9.17,
        "z_score": 29.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 74.47,
        "baseline_mean": 60.77,
        "z_score": 19.18,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 64.51,
        "baseline_mean": 52.93,
        "z_score": 12.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (96.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.32,
      "flow_rate_1": 270.98,
      "pressure_1": 29.3,
      "pressure_4": 40.97,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 17.36,
      "vibration_3": 14.81,
      "vibration_4": 4.6,
      "vibration_5": 3.76,
      "vibration_6": 1.37,
      "axial_displacement_1": -133.67,
      "temperature_26": 74.5,
      "temperature_10": 44.6,
      "temperature_30": 64.5,
      "level_1": 65.6
    }
  },
  {
    "step": 46,
    "timestamp": "2022-03-01 11:50",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 91.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 91.0,
        "bearing_failure": 9.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 64.52,
        "baseline_mean": 86.85,
        "z_score": -72.35,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 15.33,
        "baseline_mean": 4.89,
        "z_score": 67.01,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 17.69,
        "baseline_mean": 9.17,
        "z_score": 30.36,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 74.5,
        "baseline_mean": 60.77,
        "z_score": 19.22,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 64.54,
        "baseline_mean": 52.93,
        "z_score": 12.73,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (91.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.01,
      "flow_rate_1": 270.86,
      "pressure_1": 29.26,
      "pressure_4": 40.9,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 17.69,
      "vibration_3": 15.33,
      "vibration_4": 4.53,
      "vibration_5": 3.59,
      "vibration_6": 1.42,
      "axial_displacement_1": -127.91,
      "temperature_26": 74.5,
      "temperature_10": 44.6,
      "temperature_30": 64.5,
      "level_1": 64.5
    }
  },
  {
    "step": 47,
    "timestamp": "2022-03-01 11:55",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 91.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 91.0,
        "bearing_failure": 9.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 63.42,
        "baseline_mean": 86.85,
        "z_score": -75.91,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 15.77,
        "baseline_mean": 4.89,
        "z_score": 69.81,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 18.09,
        "baseline_mean": 9.17,
        "z_score": 31.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 74.72,
        "baseline_mean": 60.77,
        "z_score": 19.54,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 64.76,
        "baseline_mean": 52.93,
        "z_score": 12.98,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (91.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 142.03,
      "flow_rate_1": 270.1,
      "pressure_1": 29.27,
      "pressure_4": 40.91,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 18.09,
      "vibration_3": 15.77,
      "vibration_4": 4.59,
      "vibration_5": 3.64,
      "vibration_6": 1.43,
      "axial_displacement_1": -136.89,
      "temperature_26": 74.7,
      "temperature_10": 43.5,
      "temperature_30": 64.8,
      "level_1": 63.4
    }
  },
  {
    "step": 48,
    "timestamp": "2022-03-01 12:00",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 95.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 95.0,
        "bearing_failure": 5.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 62.39,
        "baseline_mean": 86.85,
        "z_score": -79.27,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 16.26,
        "baseline_mean": 4.89,
        "z_score": 72.97,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 18.81,
        "baseline_mean": 9.17,
        "z_score": 34.39,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 74.54,
        "baseline_mean": 60.77,
        "z_score": 19.28,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 64.01,
        "baseline_mean": 52.93,
        "z_score": 12.16,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (95.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.21,
      "flow_rate_1": 269.48,
      "pressure_1": 29.29,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 18.81,
      "vibration_3": 16.26,
      "vibration_4": 4.57,
      "vibration_5": 3.58,
      "vibration_6": 1.5,
      "axial_displacement_1": -145.05,
      "temperature_26": 74.5,
      "temperature_10": 42.1,
      "temperature_30": 64.0,
      "level_1": 62.4
    }
  },
  {
    "step": 49,
    "timestamp": "2022-03-01 12:05",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 86.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 86.0,
        "bearing_failure": 14.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 61.48,
        "baseline_mean": 86.85,
        "z_score": -82.19,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 16.73,
        "baseline_mean": 4.89,
        "z_score": 76.0,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 19.28,
        "baseline_mean": 9.17,
        "z_score": 36.06,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 74.92,
        "baseline_mean": 60.77,
        "z_score": 19.82,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 64.33,
        "baseline_mean": 52.93,
        "z_score": 12.51,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (86.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.02,
      "flow_rate_1": 270.17,
      "pressure_1": 29.26,
      "pressure_4": 40.82,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 19.28,
      "vibration_3": 16.73,
      "vibration_4": 4.6,
      "vibration_5": 3.47,
      "vibration_6": 1.48,
      "axial_displacement_1": -130.31,
      "temperature_26": 74.9,
      "temperature_10": 41.9,
      "temperature_30": 64.3,
      "level_1": 61.5
    }
  },
  {
    "step": 50,
    "timestamp": "2022-03-01 12:10",
    "ground_truth": {
      "fault_code": 1,
      "fault_class": "oil_leakage"
    },
    "supervised_inference": {
      "predicted_code": 1,
      "predicted_class": "oil_leakage",
      "confidence": 71.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 71.0,
        "bearing_failure": 29.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "orange",
        "badge": "OIL LEAK",
        "icon": "\ud83d\udfe0",
        "display_name": "Oil Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 60.76,
        "baseline_mean": 86.85,
        "z_score": -84.53,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 16.98,
        "baseline_mean": 4.89,
        "z_score": 77.56,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 19.97,
        "baseline_mean": 9.17,
        "z_score": 38.52,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 75.74,
        "baseline_mean": 60.77,
        "z_score": 20.96,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 65.23,
        "baseline_mean": 52.93,
        "z_score": 13.49,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Oil Leakage in Lube Console (71.0% Confidence)",
      "severity": "CRITICAL",
      "failed_instrument": "Lube Oil Reservoir Level & Supply Header Piping",
      "instrument_tag": "level_1 (Level) & temperature_30 (Supply Temp)",
      "direct_rca": "Lube oil reservoir level (level_1) rapidly declining with oil supply temperature (temperature_30) climbing +11.5\u00b0C, confirming an external hydraulic oil leak on the lube console skid.",
      "business_impact": "Loss of hydrodynamic oil wedge will cause catastrophic journal bearing sleeve wipe and rotor seizure ($250k+ repair, multi-week plant outage).",
      "recommended_action": "Dispatch field operator to inspect lube skid piping/seals, start auxiliary lube pump P-0760B immediately, and top up lube oil reservoir."
    },
    "sensors": {
      "motor_current_1": 141.41,
      "flow_rate_1": 270.45,
      "pressure_1": 29.26,
      "pressure_4": 40.93,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 19.97,
      "vibration_3": 16.98,
      "vibration_4": 4.52,
      "vibration_5": 3.23,
      "vibration_6": 1.45,
      "axial_displacement_1": -106.9,
      "temperature_26": 75.7,
      "temperature_10": 42.5,
      "temperature_30": 65.2,
      "level_1": 60.8
    }
  },
  {
    "step": 51,
    "timestamp": "2022-03-01 12:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.52,
        "baseline_mean": 1.38,
        "z_score": 2.76,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.44,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.23,
        "baseline_mean": 142.51,
        "z_score": -2.12,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -96.98,
        "baseline_mean": 25.05,
        "z_score": -2.01,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.23,
      "flow_rate_1": 270.54,
      "pressure_1": 29.28,
      "pressure_4": 40.95,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.57,
      "vibration_3": 5.11,
      "vibration_4": 4.6,
      "vibration_5": 3.31,
      "vibration_6": 1.52,
      "axial_displacement_1": -96.98,
      "temperature_26": 61.4,
      "temperature_10": 41.6,
      "temperature_30": 53.4,
      "level_1": 86.6
    }
  },
  {
    "step": 52,
    "timestamp": "2022-03-01 12:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.29,
        "baseline_mean": 29.2,
        "z_score": 2.74,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -116.9,
        "baseline_mean": 25.05,
        "z_score": -2.34,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.33,
        "baseline_mean": 142.51,
        "z_score": -1.95,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.87,
        "baseline_mean": 268.67,
        "z_score": 1.72,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.33,
      "flow_rate_1": 271.87,
      "pressure_1": 29.29,
      "pressure_4": 40.94,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.17,
      "vibration_3": 4.86,
      "vibration_4": 4.6,
      "vibration_5": 3.23,
      "vibration_6": 1.46,
      "axial_displacement_1": -116.9,
      "temperature_26": 61.7,
      "temperature_10": 42.1,
      "temperature_30": 53.9,
      "level_1": 86.6
    }
  },
  {
    "step": 53,
    "timestamp": "2022-03-01 12:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.39,
        "baseline_mean": 60.77,
        "z_score": 2.27,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.78,
        "baseline_mean": 52.93,
        "z_score": 2.03,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.31,
        "baseline_mean": 142.51,
        "z_score": -1.97,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.3,
        "baseline_mean": 40.74,
        "z_score": 1.89,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.26,
        "baseline_mean": 29.2,
        "z_score": 1.86,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.31,
      "flow_rate_1": 270.51,
      "pressure_1": 29.26,
      "pressure_4": 40.94,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.05,
      "vibration_3": 4.68,
      "vibration_4": 4.57,
      "vibration_5": 3.15,
      "vibration_6": 1.42,
      "axial_displacement_1": -65.93,
      "temperature_26": 62.4,
      "temperature_10": 44.3,
      "temperature_30": 54.8,
      "level_1": 86.9
    }
  },
  {
    "step": 54,
    "timestamp": "2022-03-01 12:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.36,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.71,
        "baseline_mean": 52.93,
        "z_score": 1.95,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.42,
        "baseline_mean": 142.51,
        "z_score": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.08,
        "baseline_mean": 3.41,
        "z_score": -1.76,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.96,
        "baseline_mean": 40.74,
        "z_score": 1.71,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.42,
      "flow_rate_1": 271.8,
      "pressure_1": 29.28,
      "pressure_4": 40.94,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.32,
      "vibration_3": 4.88,
      "vibration_4": 4.5,
      "vibration_5": 3.08,
      "vibration_6": 1.42,
      "axial_displacement_1": -61.69,
      "temperature_26": 62.0,
      "temperature_10": 44.0,
      "temperature_30": 54.7,
      "level_1": 86.9
    }
  },
  {
    "step": 55,
    "timestamp": "2022-03-01 12:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.3,
        "baseline_mean": 29.2,
        "z_score": 2.83,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.95,
        "baseline_mean": 3.41,
        "z_score": -2.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.0,
        "baseline_mean": 52.93,
        "z_score": 2.26,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.39,
        "baseline_mean": 60.77,
        "z_score": 2.26,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.88,
        "baseline_mean": 40.74,
        "z_score": 2.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.72,
      "flow_rate_1": 272.26,
      "pressure_1": 29.3,
      "pressure_4": 40.97,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.37,
      "vibration_3": 4.82,
      "vibration_4": 4.6,
      "vibration_5": 2.95,
      "vibration_6": 1.36,
      "axial_displacement_1": -74.5,
      "temperature_26": 62.4,
      "temperature_10": 44.9,
      "temperature_30": 55.0,
      "level_1": 87.0
    }
  },
  {
    "step": 56,
    "timestamp": "2022-03-01 12:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.85,
        "baseline_mean": 3.41,
        "z_score": -3.03,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -152.46,
        "baseline_mean": 25.05,
        "z_score": -2.92,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.68,
        "baseline_mean": 52.93,
        "z_score": 1.91,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.1,
        "baseline_mean": 60.77,
        "z_score": 1.86,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.58,
        "baseline_mean": 4.23,
        "z_score": 1.82,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.16,
      "flow_rate_1": 271.39,
      "pressure_1": 29.25,
      "pressure_4": 40.95,
      "anti_surge_valve_1": 71.1,
      "vibration_1": 9.26,
      "vibration_3": 4.94,
      "vibration_4": 4.58,
      "vibration_5": 2.85,
      "vibration_6": 1.39,
      "axial_displacement_1": -152.46,
      "temperature_26": 62.1,
      "temperature_10": 43.0,
      "temperature_30": 54.7,
      "level_1": 86.8
    }
  },
  {
    "step": 57,
    "timestamp": "2022-03-01 12:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.75,
        "baseline_mean": 3.41,
        "z_score": -3.59,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -171.37,
        "baseline_mean": 25.05,
        "z_score": -3.23,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.94,
        "baseline_mean": 268.67,
        "z_score": 2.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.05,
        "baseline_mean": 60.77,
        "z_score": 1.79,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.4,
      "flow_rate_1": 272.94,
      "pressure_1": 29.26,
      "pressure_4": 40.98,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.12,
      "vibration_3": 4.88,
      "vibration_4": 4.6,
      "vibration_5": 2.75,
      "vibration_6": 1.41,
      "axial_displacement_1": -171.37,
      "temperature_26": 62.1,
      "temperature_10": 43.7,
      "temperature_30": 54.5,
      "level_1": 86.9
    }
  },
  {
    "step": 58,
    "timestamp": "2022-03-01 12:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -237.45,
        "baseline_mean": 25.05,
        "z_score": -4.32,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.06,
        "baseline_mean": 3.41,
        "z_score": -1.88,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.02,
        "baseline_mean": 268.67,
        "z_score": 1.81,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.26,
        "baseline_mean": 29.2,
        "z_score": 1.77,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.54,
        "baseline_mean": 4.23,
        "z_score": 1.62,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.39,
      "flow_rate_1": 272.02,
      "pressure_1": 29.26,
      "pressure_4": 40.99,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 8.91,
      "vibration_3": 4.84,
      "vibration_4": 4.54,
      "vibration_5": 3.06,
      "vibration_6": 1.44,
      "axial_displacement_1": -237.45,
      "temperature_26": 61.7,
      "temperature_10": 42.5,
      "temperature_30": 54.2,
      "level_1": 86.7
    }
  },
  {
    "step": 59,
    "timestamp": "2022-03-01 12:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -210.89,
        "baseline_mean": 25.05,
        "z_score": -3.88,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.74,
        "baseline_mean": 3.41,
        "z_score": -3.62,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.52,
        "baseline_mean": 268.67,
        "z_score": 2.61,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.34,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.45,
        "baseline_mean": 1.38,
        "z_score": 1.33,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.93,
      "flow_rate_1": 273.52,
      "pressure_1": 29.25,
      "pressure_4": 40.9,
      "anti_surge_valve_1": 71.0,
      "vibration_1": 8.87,
      "vibration_3": 4.74,
      "vibration_4": 4.39,
      "vibration_5": 2.74,
      "vibration_6": 1.45,
      "axial_displacement_1": -210.89,
      "temperature_26": 61.6,
      "temperature_10": 42.5,
      "temperature_30": 53.8,
      "level_1": 86.6
    }
  },
  {
    "step": 60,
    "timestamp": "2022-03-01 13:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.71,
        "baseline_mean": 3.41,
        "z_score": -3.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -198.9,
        "baseline_mean": 25.05,
        "z_score": -3.69,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.07,
        "baseline_mean": 268.67,
        "z_score": 2.37,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.62,
        "baseline_mean": 52.93,
        "z_score": 1.86,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.05,
        "baseline_mean": 60.77,
        "z_score": 1.79,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.29,
      "flow_rate_1": 273.07,
      "pressure_1": 29.16,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 8.77,
      "vibration_3": 4.68,
      "vibration_4": 4.48,
      "vibration_5": 2.71,
      "vibration_6": 1.37,
      "axial_displacement_1": -198.9,
      "temperature_26": 62.1,
      "temperature_10": 42.9,
      "temperature_30": 54.6,
      "level_1": 86.7
    }
  },
  {
    "step": 61,
    "timestamp": "2022-03-01 13:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -174.3,
        "baseline_mean": 25.05,
        "z_score": -3.28,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.92,
        "baseline_mean": 60.77,
        "z_score": 1.61,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.32,
        "baseline_mean": 52.93,
        "z_score": 1.52,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.45,
        "baseline_mean": 268.67,
        "z_score": 1.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.85,
      "flow_rate_1": 271.45,
      "pressure_1": 29.17,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.04,
      "vibration_3": 4.74,
      "vibration_4": 4.6,
      "vibration_5": 3.17,
      "vibration_6": 1.36,
      "axial_displacement_1": -174.3,
      "temperature_26": 61.9,
      "temperature_10": 42.2,
      "temperature_30": 54.3,
      "level_1": 86.7
    }
  },
  {
    "step": 62,
    "timestamp": "2022-03-01 13:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.67,
        "baseline_mean": 60.77,
        "z_score": 2.66,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -109.49,
        "baseline_mean": 25.05,
        "z_score": -2.21,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.84,
        "baseline_mean": 52.93,
        "z_score": 2.09,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.21,
        "baseline_mean": 40.74,
        "z_score": 1.84,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.36,
      "flow_rate_1": 271.68,
      "pressure_1": 29.19,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.21,
      "vibration_3": 4.68,
      "vibration_4": 4.6,
      "vibration_5": 3.22,
      "vibration_6": 1.29,
      "axial_displacement_1": -109.49,
      "temperature_26": 62.7,
      "temperature_10": 44.2,
      "temperature_30": 54.8,
      "level_1": 87.0
    }
  },
  {
    "step": 63,
    "timestamp": "2022-03-01 13:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.11,
        "baseline_mean": 60.77,
        "z_score": 1.87,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.56,
        "baseline_mean": 4.23,
        "z_score": 1.74,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.75,
        "baseline_mean": 40.89,
        "z_score": -1.74,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.7,
        "baseline_mean": 268.67,
        "z_score": 1.64,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.13,
        "baseline_mean": 52.93,
        "z_score": 1.32,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.01,
      "flow_rate_1": 271.7,
      "pressure_1": 29.16,
      "pressure_4": 40.75,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.26,
      "vibration_3": 4.72,
      "vibration_4": 4.56,
      "vibration_5": 3.23,
      "vibration_6": 1.35,
      "axial_displacement_1": -48.31,
      "temperature_26": 62.1,
      "temperature_10": 43.0,
      "temperature_30": 54.1,
      "level_1": 86.9
    }
  },
  {
    "step": 64,
    "timestamp": "2022-03-01 13:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.45,
        "baseline_mean": 60.77,
        "z_score": 2.35,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.57,
        "baseline_mean": 4.89,
        "z_score": -2.04,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.75,
        "baseline_mean": 40.89,
        "z_score": -1.75,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.56,
        "baseline_mean": 4.23,
        "z_score": 1.74,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.49,
        "baseline_mean": 52.93,
        "z_score": 1.71,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.45,
      "flow_rate_1": 271.48,
      "pressure_1": 29.18,
      "pressure_4": 40.75,
      "anti_surge_valve_1": 71.0,
      "vibration_1": 8.79,
      "vibration_3": 4.57,
      "vibration_4": 4.56,
      "vibration_5": 3.21,
      "vibration_6": 1.32,
      "axial_displacement_1": -23.06,
      "temperature_26": 62.5,
      "temperature_10": 43.8,
      "temperature_30": 54.5,
      "level_1": 87.0
    }
  },
  {
    "step": 65,
    "timestamp": "2022-03-01 13:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.69,
        "baseline_mean": 40.89,
        "z_score": -2.47,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.52,
        "baseline_mean": 60.77,
        "z_score": 2.45,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.55,
        "baseline_mean": 4.89,
        "z_score": -2.19,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.28,
        "baseline_mean": 1.38,
        "z_score": -1.92,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.54,
        "baseline_mean": 52.93,
        "z_score": 1.76,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.66,
      "flow_rate_1": 271.06,
      "pressure_1": 29.2,
      "pressure_4": 40.69,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.04,
      "vibration_3": 4.55,
      "vibration_4": 4.45,
      "vibration_5": 3.42,
      "vibration_6": 1.28,
      "axial_displacement_1": -29.39,
      "temperature_26": 62.5,
      "temperature_10": 44.0,
      "temperature_30": 54.5,
      "level_1": 87.0
    }
  },
  {
    "step": 66,
    "timestamp": "2022-03-01 13:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.62,
        "baseline_mean": 40.89,
        "z_score": -3.34,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.7,
        "baseline_mean": 60.77,
        "z_score": 2.69,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.47,
        "baseline_mean": 4.89,
        "z_score": -2.68,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.28,
        "baseline_mean": 1.38,
        "z_score": -1.94,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.08,
        "baseline_mean": 40.74,
        "z_score": 1.77,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.45,
      "flow_rate_1": 271.28,
      "pressure_1": 29.18,
      "pressure_4": 40.62,
      "anti_surge_valve_1": 71.3,
      "vibration_1": 9.09,
      "vibration_3": 4.47,
      "vibration_4": 4.47,
      "vibration_5": 3.23,
      "vibration_6": 1.28,
      "axial_displacement_1": 12.67,
      "temperature_26": 62.7,
      "temperature_10": 44.1,
      "temperature_30": 54.5,
      "level_1": 87.1
    }
  },
  {
    "step": 67,
    "timestamp": "2022-03-01 13:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.67,
        "baseline_mean": 60.77,
        "z_score": 2.66,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.27,
        "baseline_mean": 1.38,
        "z_score": -2.22,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.72,
        "baseline_mean": 40.89,
        "z_score": -2.18,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.96,
        "baseline_mean": 40.74,
        "z_score": 1.71,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.66,
        "baseline_mean": 4.89,
        "z_score": -1.48,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.68,
      "flow_rate_1": 271.41,
      "pressure_1": 29.23,
      "pressure_4": 40.72,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.05,
      "vibration_3": 4.66,
      "vibration_4": 4.37,
      "vibration_5": 3.28,
      "vibration_6": 1.27,
      "axial_displacement_1": -9.18,
      "temperature_26": 62.7,
      "temperature_10": 44.0,
      "temperature_30": 54.3,
      "level_1": 87.1
    }
  },
  {
    "step": 68,
    "timestamp": "2022-03-01 13:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.11,
        "baseline_mean": 60.77,
        "z_score": 1.88,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.76,
        "baseline_mean": 40.89,
        "z_score": -1.56,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.71,
        "baseline_mean": 142.51,
        "z_score": -1.32,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.08,
        "baseline_mean": 268.67,
        "z_score": 1.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -35.48,
        "baseline_mean": 25.05,
        "z_score": -1.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.71,
      "flow_rate_1": 271.08,
      "pressure_1": 29.22,
      "pressure_4": 40.76,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.38,
      "vibration_3": 4.89,
      "vibration_4": 4.35,
      "vibration_5": 3.28,
      "vibration_6": 1.36,
      "axial_displacement_1": -35.48,
      "temperature_26": 62.1,
      "temperature_10": 42.6,
      "temperature_30": 53.5,
      "level_1": 86.9
    }
  },
  {
    "step": 69,
    "timestamp": "2022-03-01 13:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.02,
        "baseline_mean": 142.51,
        "z_score": -2.45,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.96,
        "baseline_mean": 3.41,
        "z_score": -2.41,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.83,
        "baseline_mean": 268.67,
        "z_score": 2.24,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.76,
        "baseline_mean": 40.89,
        "z_score": -1.64,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.9,
        "baseline_mean": 60.77,
        "z_score": 1.57,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.02,
      "flow_rate_1": 272.83,
      "pressure_1": 29.24,
      "pressure_4": 40.76,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.11,
      "vibration_3": 4.72,
      "vibration_4": 4.34,
      "vibration_5": 2.96,
      "vibration_6": 1.4,
      "axial_displacement_1": 0.44,
      "temperature_26": 61.9,
      "temperature_10": 43.6,
      "temperature_30": 53.2,
      "level_1": 86.9
    }
  },
  {
    "step": 70,
    "timestamp": "2022-03-01 13:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.62,
        "baseline_mean": 268.67,
        "z_score": 2.67,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.03,
        "baseline_mean": 3.41,
        "z_score": -2.04,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.26,
        "baseline_mean": 29.2,
        "z_score": 1.71,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.78,
        "baseline_mean": 40.74,
        "z_score": 1.62,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.81,
        "baseline_mean": 60.77,
        "z_score": 1.45,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.67,
      "flow_rate_1": 273.62,
      "pressure_1": 29.26,
      "pressure_4": 40.82,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.45,
      "vibration_3": 4.78,
      "vibration_4": 4.24,
      "vibration_5": 3.03,
      "vibration_6": 1.39,
      "axial_displacement_1": -0.69,
      "temperature_26": 61.8,
      "temperature_10": 43.8,
      "temperature_30": 53.4,
      "level_1": 87.0
    }
  },
  {
    "step": 71,
    "timestamp": "2022-03-01 13:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.8,
        "baseline_mean": 268.67,
        "z_score": 2.77,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.52,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.94,
        "baseline_mean": 4.23,
        "z_score": -1.49,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.56,
        "baseline_mean": 9.17,
        "z_score": 1.38,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.09,
        "baseline_mean": 40.74,
        "z_score": 1.25,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.97,
      "flow_rate_1": 273.8,
      "pressure_1": 29.25,
      "pressure_4": 40.82,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.56,
      "vibration_3": 5.0,
      "vibration_4": 3.94,
      "vibration_5": 3.19,
      "vibration_6": 1.38,
      "axial_displacement_1": 44.52,
      "temperature_26": 61.6,
      "temperature_10": 43.1,
      "temperature_30": 53.3,
      "level_1": 87.0
    }
  },
  {
    "step": 72,
    "timestamp": "2022-03-01 14:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 99.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 1.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.85,
        "baseline_mean": 268.67,
        "z_score": 2.79,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.24,
        "baseline_mean": 4.89,
        "z_score": 2.27,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.61,
        "baseline_mean": 60.77,
        "z_score": 1.17,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.02,
        "baseline_mean": 4.23,
        "z_score": -1.08,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.41,
        "baseline_mean": 9.17,
        "z_score": 0.86,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.28,
      "flow_rate_1": 273.85,
      "pressure_1": 29.22,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.41,
      "vibration_3": 5.24,
      "vibration_4": 4.02,
      "vibration_5": 3.37,
      "vibration_6": 1.34,
      "axial_displacement_1": 34.03,
      "temperature_26": 61.6,
      "temperature_10": 41.6,
      "temperature_30": 53.0,
      "level_1": 86.9
    }
  },
  {
    "step": 73,
    "timestamp": "2022-03-01 14:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.09,
        "baseline_mean": 268.67,
        "z_score": 2.39,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.17,
        "baseline_mean": 4.89,
        "z_score": 1.83,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.83,
        "baseline_mean": 60.77,
        "z_score": 1.48,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.33,
        "baseline_mean": 1.38,
        "z_score": -0.91,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 42.11,
        "baseline_mean": 40.74,
        "z_score": 0.73,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.68,
      "flow_rate_1": 273.09,
      "pressure_1": 29.2,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.22,
      "vibration_3": 5.17,
      "vibration_4": 4.2,
      "vibration_5": 3.35,
      "vibration_6": 1.33,
      "axial_displacement_1": 16.59,
      "temperature_26": 61.8,
      "temperature_10": 42.1,
      "temperature_30": 53.3,
      "level_1": 87.0
    }
  },
  {
    "step": 74,
    "timestamp": "2022-03-01 14:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.16,
        "baseline_mean": 4.89,
        "z_score": 1.73,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.37,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.55,
        "baseline_mean": 60.77,
        "z_score": 1.08,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 270.61,
        "baseline_mean": 268.67,
        "z_score": 1.04,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.45,
        "baseline_mean": 9.17,
        "z_score": 0.99,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.09,
      "flow_rate_1": 270.61,
      "pressure_1": 29.25,
      "pressure_4": 40.95,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.45,
      "vibration_3": 5.16,
      "vibration_4": 4.05,
      "vibration_5": 3.57,
      "vibration_6": 1.37,
      "axial_displacement_1": 20.8,
      "temperature_26": 61.5,
      "temperature_10": 40.9,
      "temperature_30": 52.9,
      "level_1": 86.9
    }
  },
  {
    "step": 75,
    "timestamp": "2022-03-01 14:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.24,
        "baseline_mean": 29.2,
        "z_score": 1.28,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.8,
        "baseline_mean": 40.89,
        "z_score": -1.16,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.54,
        "baseline_mean": 60.77,
        "z_score": 1.07,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 83.93,
        "baseline_mean": 25.05,
        "z_score": 0.97,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.58,
        "baseline_mean": 3.41,
        "z_score": 0.93,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.34,
      "flow_rate_1": 269.88,
      "pressure_1": 29.24,
      "pressure_4": 40.8,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.16,
      "vibration_3": 4.88,
      "vibration_4": 4.08,
      "vibration_5": 3.58,
      "vibration_6": 1.35,
      "axial_displacement_1": 83.93,
      "temperature_26": 61.5,
      "temperature_10": 41.4,
      "temperature_30": 53.1,
      "level_1": 87.1
    }
  },
  {
    "step": 76,
    "timestamp": "2022-03-01 14:20",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 51.0,
      "probabilities": {
        "normal_operation": 17.0,
        "oil_leakage": 32.0,
        "bearing_failure": 51.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 8.37,
        "baseline_mean": 4.89,
        "z_score": 22.33,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 13.27,
        "baseline_mean": 9.17,
        "z_score": 14.61,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 63.67,
        "baseline_mean": 60.77,
        "z_score": 4.06,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.77,
        "baseline_mean": 40.89,
        "z_score": -1.43,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.41,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (51.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.55,
      "flow_rate_1": 269.93,
      "pressure_1": 29.25,
      "pressure_4": 40.77,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 13.27,
      "vibration_3": 8.37,
      "vibration_4": 4.05,
      "vibration_5": 3.53,
      "vibration_6": 1.38,
      "axial_displacement_1": 51.33,
      "temperature_26": 63.7,
      "temperature_10": 40.2,
      "temperature_30": 53.1,
      "level_1": 86.9
    }
  },
  {
    "step": 77,
    "timestamp": "2022-03-01 14:25",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 76.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 23.0,
        "bearing_failure": 76.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 9.62,
        "baseline_mean": 4.89,
        "z_score": 30.4,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 14.64,
        "baseline_mean": 9.17,
        "z_score": 19.48,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 64.75,
        "baseline_mean": 60.77,
        "z_score": 5.57,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.57,
        "baseline_mean": 142.51,
        "z_score": 1.75,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (76.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.57,
      "flow_rate_1": 270.18,
      "pressure_1": 29.25,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 14.64,
      "vibration_3": 9.62,
      "vibration_4": 4.2,
      "vibration_5": 3.43,
      "vibration_6": 1.39,
      "axial_displacement_1": 25.73,
      "temperature_26": 64.8,
      "temperature_10": 40.8,
      "temperature_30": 53.9,
      "level_1": 86.9
    }
  },
  {
    "step": 78,
    "timestamp": "2022-03-01 14:30",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 82.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 17.0,
        "bearing_failure": 82.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 10.9,
        "baseline_mean": 4.89,
        "z_score": 38.57,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 16.09,
        "baseline_mean": 9.17,
        "z_score": 24.68,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 66.35,
        "baseline_mean": 60.77,
        "z_score": 7.81,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.33,
        "baseline_mean": 142.51,
        "z_score": 3.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 54.91,
        "baseline_mean": 52.93,
        "z_score": 2.17,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (82.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 144.33,
      "flow_rate_1": 269.67,
      "pressure_1": 29.24,
      "pressure_4": 40.89,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 16.09,
      "vibration_3": 10.9,
      "vibration_4": 4.22,
      "vibration_5": 3.46,
      "vibration_6": 1.34,
      "axial_displacement_1": 13.03,
      "temperature_26": 66.3,
      "temperature_10": 41.1,
      "temperature_30": 54.9,
      "level_1": 87.0
    }
  },
  {
    "step": 79,
    "timestamp": "2022-03-01 14:35",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 85.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 14.0,
        "bearing_failure": 85.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 12.07,
        "baseline_mean": 4.89,
        "z_score": 46.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 17.45,
        "baseline_mean": 9.17,
        "z_score": 29.54,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 67.91,
        "baseline_mean": 60.77,
        "z_score": 10.0,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.93,
        "baseline_mean": 52.93,
        "z_score": 3.29,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.4,
        "baseline_mean": 142.51,
        "z_score": 3.12,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (85.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 144.4,
      "flow_rate_1": 271.91,
      "pressure_1": 29.22,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 17.45,
      "vibration_3": 12.07,
      "vibration_4": 4.49,
      "vibration_5": 3.38,
      "vibration_6": 1.27,
      "axial_displacement_1": 66.45,
      "temperature_26": 67.9,
      "temperature_10": 43.9,
      "temperature_30": 55.9,
      "level_1": 87.4
    }
  },
  {
    "step": 80,
    "timestamp": "2022-03-01 14:40",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 88.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 11.0,
        "bearing_failure": 88.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 13.38,
        "baseline_mean": 4.89,
        "z_score": 54.52,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 18.77,
        "baseline_mean": 9.17,
        "z_score": 34.21,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 68.56,
        "baseline_mean": 60.77,
        "z_score": 10.91,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 55.72,
        "baseline_mean": 52.93,
        "z_score": 3.06,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.07,
        "baseline_mean": 142.51,
        "z_score": 2.58,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (88.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 144.07,
      "flow_rate_1": 272.44,
      "pressure_1": 29.2,
      "pressure_4": 40.8,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 18.77,
      "vibration_3": 13.38,
      "vibration_4": 4.47,
      "vibration_5": 3.41,
      "vibration_6": 1.32,
      "axial_displacement_1": 6.8,
      "temperature_26": 68.6,
      "temperature_10": 43.5,
      "temperature_30": 55.7,
      "level_1": 87.2
    }
  },
  {
    "step": 81,
    "timestamp": "2022-03-01 14:45",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 95.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 4.0,
        "bearing_failure": 95.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 14.84,
        "baseline_mean": 4.89,
        "z_score": 63.85,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 20.77,
        "baseline_mean": 9.17,
        "z_score": 41.36,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 69.44,
        "baseline_mean": 60.77,
        "z_score": 12.14,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.24,
        "baseline_mean": 52.93,
        "z_score": 3.62,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.32,
        "baseline_mean": 268.67,
        "z_score": 1.97,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (95.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.63,
      "flow_rate_1": 272.32,
      "pressure_1": 29.23,
      "pressure_4": 40.86,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 20.77,
      "vibration_3": 14.84,
      "vibration_4": 4.5,
      "vibration_5": 3.42,
      "vibration_6": 1.33,
      "axial_displacement_1": 57.14,
      "temperature_26": 69.4,
      "temperature_10": 43.7,
      "temperature_30": 56.2,
      "level_1": 87.4
    }
  },
  {
    "step": 82,
    "timestamp": "2022-03-01 14:50",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 98.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 2.0,
        "bearing_failure": 98.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 16.31,
        "baseline_mean": 4.89,
        "z_score": 73.31,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 22.93,
        "baseline_mean": 9.17,
        "z_score": 49.07,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 69.99,
        "baseline_mean": 60.77,
        "z_score": 12.91,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.23,
        "baseline_mean": 52.93,
        "z_score": 3.62,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.27,
        "baseline_mean": 29.2,
        "z_score": 1.94,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (98.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.37,
      "flow_rate_1": 269.87,
      "pressure_1": 29.27,
      "pressure_4": 40.88,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 22.93,
      "vibration_3": 16.31,
      "vibration_4": 4.35,
      "vibration_5": 3.64,
      "vibration_6": 1.39,
      "axial_displacement_1": 99.28,
      "temperature_26": 70.0,
      "temperature_10": 42.8,
      "temperature_30": 56.2,
      "level_1": 87.2
    }
  },
  {
    "step": 83,
    "timestamp": "2022-03-01 14:55",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 3.0,
        "bearing_failure": 97.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 17.66,
        "baseline_mean": 4.89,
        "z_score": 81.93,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 24.62,
        "baseline_mean": 9.17,
        "z_score": 55.09,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 70.89,
        "baseline_mean": 60.77,
        "z_score": 14.17,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.61,
        "baseline_mean": 52.93,
        "z_score": 4.03,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.37,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (97.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.22,
      "flow_rate_1": 270.16,
      "pressure_1": 29.25,
      "pressure_4": 40.85,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 24.62,
      "vibration_3": 17.66,
      "vibration_4": 4.4,
      "vibration_5": 3.55,
      "vibration_6": 1.37,
      "axial_displacement_1": 85.81,
      "temperature_26": 70.9,
      "temperature_10": 42.5,
      "temperature_30": 56.6,
      "level_1": 87.3
    }
  },
  {
    "step": 84,
    "timestamp": "2022-03-01 15:00",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 1.0,
        "bearing_failure": 99.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 18.82,
        "baseline_mean": 4.89,
        "z_score": 89.4,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 26.11,
        "baseline_mean": 9.17,
        "z_score": 60.42,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 71.89,
        "baseline_mean": 60.77,
        "z_score": 15.57,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 56.97,
        "baseline_mean": 52.93,
        "z_score": 4.42,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.77,
        "baseline_mean": 40.89,
        "z_score": -1.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (99.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.23,
      "flow_rate_1": 270.0,
      "pressure_1": 29.21,
      "pressure_4": 40.77,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 26.11,
      "vibration_3": 18.82,
      "vibration_4": 4.31,
      "vibration_5": 3.47,
      "vibration_6": 1.37,
      "axial_displacement_1": 68.39,
      "temperature_26": 71.9,
      "temperature_10": 42.9,
      "temperature_30": 57.0,
      "level_1": 87.1
    }
  },
  {
    "step": 85,
    "timestamp": "2022-03-01 15:05",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 96.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 4.0,
        "bearing_failure": 96.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 20.38,
        "baseline_mean": 4.89,
        "z_score": 99.42,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 27.65,
        "baseline_mean": 9.17,
        "z_score": 65.91,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 72.65,
        "baseline_mean": 60.77,
        "z_score": 16.64,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 57.01,
        "baseline_mean": 52.93,
        "z_score": 4.48,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.64,
        "baseline_mean": 142.51,
        "z_score": 1.87,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (96.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.64,
      "flow_rate_1": 269.36,
      "pressure_1": 29.2,
      "pressure_4": 40.86,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 27.65,
      "vibration_3": 20.38,
      "vibration_4": 4.3,
      "vibration_5": 3.55,
      "vibration_6": 1.4,
      "axial_displacement_1": 41.11,
      "temperature_26": 72.7,
      "temperature_10": 41.9,
      "temperature_30": 57.0,
      "level_1": 87.0
    }
  },
  {
    "step": 86,
    "timestamp": "2022-03-01 15:10",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 96.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 4.0,
        "bearing_failure": 96.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 21.72,
        "baseline_mean": 4.89,
        "z_score": 108.02,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 29.23,
        "baseline_mean": 9.17,
        "z_score": 71.53,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 73.66,
        "baseline_mean": 60.77,
        "z_score": 18.06,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 57.72,
        "baseline_mean": 52.93,
        "z_score": 5.26,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.48,
        "baseline_mean": 142.51,
        "z_score": 1.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (96.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.48,
      "flow_rate_1": 269.45,
      "pressure_1": 29.22,
      "pressure_4": 40.92,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 29.23,
      "vibration_3": 21.72,
      "vibration_4": 4.11,
      "vibration_5": 3.45,
      "vibration_6": 1.37,
      "axial_displacement_1": 51.24,
      "temperature_26": 73.7,
      "temperature_10": 41.4,
      "temperature_30": 57.7,
      "level_1": 87.2
    }
  },
  {
    "step": 87,
    "timestamp": "2022-03-01 15:15",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 98.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 2.0,
        "bearing_failure": 98.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 23.15,
        "baseline_mean": 4.89,
        "z_score": 117.14,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 30.61,
        "baseline_mean": 9.17,
        "z_score": 76.45,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 74.05,
        "baseline_mean": 60.77,
        "z_score": 18.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 57.44,
        "baseline_mean": 52.93,
        "z_score": 4.94,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.89,
        "baseline_mean": 4.23,
        "z_score": -1.73,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (98.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.4,
      "flow_rate_1": 269.65,
      "pressure_1": 29.22,
      "pressure_4": 40.9,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 30.61,
      "vibration_3": 23.15,
      "vibration_4": 3.89,
      "vibration_5": 3.3,
      "vibration_6": 1.39,
      "axial_displacement_1": 6.48,
      "temperature_26": 74.0,
      "temperature_10": 41.1,
      "temperature_30": 57.4,
      "level_1": 87.0
    }
  },
  {
    "step": 88,
    "timestamp": "2022-03-01 15:20",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 24.28,
        "baseline_mean": 4.89,
        "z_score": 124.43,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 32.12,
        "baseline_mean": 9.17,
        "z_score": 81.85,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 75.35,
        "baseline_mean": 60.77,
        "z_score": 20.42,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 58.1,
        "baseline_mean": 52.93,
        "z_score": 5.67,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.78,
        "baseline_mean": 4.23,
        "z_score": -2.31,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.45,
      "flow_rate_1": 271.77,
      "pressure_1": 29.27,
      "pressure_4": 40.99,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 32.12,
      "vibration_3": 24.28,
      "vibration_4": 3.78,
      "vibration_5": 3.18,
      "vibration_6": 1.31,
      "axial_displacement_1": 3.23,
      "temperature_26": 75.4,
      "temperature_10": 42.4,
      "temperature_30": 58.1,
      "level_1": 87.1
    }
  },
  {
    "step": 89,
    "timestamp": "2022-03-01 15:25",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 25.61,
        "baseline_mean": 4.89,
        "z_score": 132.96,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 34.13,
        "baseline_mean": 9.17,
        "z_score": 89.01,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 76.35,
        "baseline_mean": 60.77,
        "z_score": 21.82,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 58.32,
        "baseline_mean": 52.93,
        "z_score": 5.91,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.3,
        "baseline_mean": 29.2,
        "z_score": 2.84,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.54,
      "flow_rate_1": 273.61,
      "pressure_1": 29.3,
      "pressure_4": 41.02,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 34.13,
      "vibration_3": 25.61,
      "vibration_4": 3.72,
      "vibration_5": 3.01,
      "vibration_6": 1.29,
      "axial_displacement_1": 11.75,
      "temperature_26": 76.4,
      "temperature_10": 42.8,
      "temperature_30": 58.3,
      "level_1": 87.3
    }
  },
  {
    "step": 90,
    "timestamp": "2022-03-01 15:30",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 26.83,
        "baseline_mean": 4.89,
        "z_score": 140.75,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 35.71,
        "baseline_mean": 9.17,
        "z_score": 94.66,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 77.29,
        "baseline_mean": 60.77,
        "z_score": 23.14,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 58.97,
        "baseline_mean": 52.93,
        "z_score": 6.62,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.29,
        "baseline_mean": 29.2,
        "z_score": 2.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.7,
      "flow_rate_1": 273.38,
      "pressure_1": 29.29,
      "pressure_4": 41.02,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 35.71,
      "vibration_3": 26.83,
      "vibration_4": 3.76,
      "vibration_5": 2.96,
      "vibration_6": 1.33,
      "axial_displacement_1": 63.46,
      "temperature_26": 77.3,
      "temperature_10": 43.0,
      "temperature_30": 59.0,
      "level_1": 87.2
    }
  },
  {
    "step": 91,
    "timestamp": "2022-03-01 15:35",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 28.21,
        "baseline_mean": 4.89,
        "z_score": 149.61,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 37.18,
        "baseline_mean": 9.17,
        "z_score": 99.87,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 78.08,
        "baseline_mean": 60.77,
        "z_score": 24.25,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 59.12,
        "baseline_mean": 52.93,
        "z_score": 6.79,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.32,
        "baseline_mean": 29.2,
        "z_score": 3.55,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.83,
      "flow_rate_1": 274.05,
      "pressure_1": 29.32,
      "pressure_4": 41.05,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 37.18,
      "vibration_3": 28.21,
      "vibration_4": 3.92,
      "vibration_5": 2.95,
      "vibration_6": 1.32,
      "axial_displacement_1": 56.77,
      "temperature_26": 78.1,
      "temperature_10": 43.2,
      "temperature_30": 59.1,
      "level_1": 87.3
    }
  },
  {
    "step": 92,
    "timestamp": "2022-03-01 15:40",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 29.56,
        "baseline_mean": 4.89,
        "z_score": 158.28,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 38.57,
        "baseline_mean": 9.17,
        "z_score": 104.83,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 78.69,
        "baseline_mean": 60.77,
        "z_score": 25.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 59.09,
        "baseline_mean": 52.93,
        "z_score": 6.75,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.31,
        "baseline_mean": 29.2,
        "z_score": 3.19,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 143.75,
      "flow_rate_1": 271.88,
      "pressure_1": 29.31,
      "pressure_4": 41.06,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 38.57,
      "vibration_3": 29.56,
      "vibration_4": 3.89,
      "vibration_5": 3.17,
      "vibration_6": 1.41,
      "axial_displacement_1": 24.33,
      "temperature_26": 78.7,
      "temperature_10": 42.7,
      "temperature_30": 59.1,
      "level_1": 87.1
    }
  },
  {
    "step": 93,
    "timestamp": "2022-03-01 15:45",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 30.89,
        "baseline_mean": 4.89,
        "z_score": 166.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 40.22,
        "baseline_mean": 9.17,
        "z_score": 110.71,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 79.31,
        "baseline_mean": 60.77,
        "z_score": 25.97,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 59.38,
        "baseline_mean": 52.93,
        "z_score": 7.08,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.27,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.9,
      "flow_rate_1": 271.42,
      "pressure_1": 29.28,
      "pressure_4": 40.98,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 40.22,
      "vibration_3": 30.89,
      "vibration_4": 3.93,
      "vibration_5": 3.36,
      "vibration_6": 1.4,
      "axial_displacement_1": 53.76,
      "temperature_26": 79.3,
      "temperature_10": 42.5,
      "temperature_30": 59.4,
      "level_1": 87.1
    }
  },
  {
    "step": 94,
    "timestamp": "2022-03-01 15:50",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 31.94,
        "baseline_mean": 4.89,
        "z_score": 173.55,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 41.78,
        "baseline_mean": 9.17,
        "z_score": 116.31,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 80.48,
        "baseline_mean": 60.77,
        "z_score": 27.61,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 60.11,
        "baseline_mean": 52.93,
        "z_score": 7.87,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.26,
        "baseline_mean": 29.2,
        "z_score": 1.74,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.83,
      "flow_rate_1": 270.91,
      "pressure_1": 29.26,
      "pressure_4": 40.96,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 41.78,
      "vibration_3": 31.94,
      "vibration_4": 4.03,
      "vibration_5": 3.34,
      "vibration_6": 1.36,
      "axial_displacement_1": 60.45,
      "temperature_26": 80.5,
      "temperature_10": 42.6,
      "temperature_30": 60.1,
      "level_1": 87.1
    }
  },
  {
    "step": 95,
    "timestamp": "2022-03-01 15:55",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 33.09,
        "baseline_mean": 4.89,
        "z_score": 180.91,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 43.45,
        "baseline_mean": 9.17,
        "z_score": 122.23,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 81.38,
        "baseline_mean": 60.77,
        "z_score": 28.87,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 60.58,
        "baseline_mean": 52.93,
        "z_score": 8.39,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.32,
        "baseline_mean": 40.74,
        "z_score": 1.9,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.8,
      "flow_rate_1": 271.28,
      "pressure_1": 29.24,
      "pressure_4": 40.88,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 43.45,
      "vibration_3": 33.09,
      "vibration_4": 3.9,
      "vibration_5": 3.2,
      "vibration_6": 1.34,
      "axial_displacement_1": 44.36,
      "temperature_26": 81.4,
      "temperature_10": 44.3,
      "temperature_30": 60.6,
      "level_1": 87.4
    }
  },
  {
    "step": 96,
    "timestamp": "2022-03-01 16:00",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 1.0,
        "bearing_failure": 99.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 34.43,
        "baseline_mean": 4.89,
        "z_score": 189.52,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 44.92,
        "baseline_mean": 9.17,
        "z_score": 127.49,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 82.37,
        "baseline_mean": 60.77,
        "z_score": 30.26,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 60.85,
        "baseline_mean": 52.93,
        "z_score": 8.68,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.71,
        "baseline_mean": 40.74,
        "z_score": 2.64,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (99.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.64,
      "flow_rate_1": 271.33,
      "pressure_1": 29.25,
      "pressure_4": 40.9,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 44.92,
      "vibration_3": 34.43,
      "vibration_4": 3.76,
      "vibration_5": 3.01,
      "vibration_6": 1.35,
      "axial_displacement_1": 87.66,
      "temperature_26": 82.4,
      "temperature_10": 45.7,
      "temperature_30": 60.8,
      "level_1": 87.6
    }
  },
  {
    "step": 97,
    "timestamp": "2022-03-01 16:05",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 1.0,
        "bearing_failure": 99.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 35.68,
        "baseline_mean": 4.89,
        "z_score": 197.54,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 46.69,
        "baseline_mean": 9.17,
        "z_score": 133.79,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 83.42,
        "baseline_mean": 60.77,
        "z_score": 31.73,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.29,
        "baseline_mean": 52.93,
        "z_score": 9.17,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.83,
        "baseline_mean": 86.85,
        "z_score": 3.18,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (99.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.8,
      "flow_rate_1": 271.06,
      "pressure_1": 29.24,
      "pressure_4": 40.93,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 46.69,
      "vibration_3": 35.68,
      "vibration_4": 3.73,
      "vibration_5": 3.13,
      "vibration_6": 1.32,
      "axial_displacement_1": 96.98,
      "temperature_26": 83.4,
      "temperature_10": 46.5,
      "temperature_30": 61.3,
      "level_1": 87.8
    }
  },
  {
    "step": 98,
    "timestamp": "2022-03-01 16:10",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 37.01,
        "baseline_mean": 4.89,
        "z_score": 206.07,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 48.15,
        "baseline_mean": 9.17,
        "z_score": 139.0,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 84.01,
        "baseline_mean": 60.77,
        "z_score": 32.55,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.43,
        "baseline_mean": 52.93,
        "z_score": 9.32,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.72,
        "baseline_mean": 86.85,
        "z_score": 2.83,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.18,
      "flow_rate_1": 269.56,
      "pressure_1": 29.2,
      "pressure_4": 40.79,
      "anti_surge_valve_1": 71.2,
      "vibration_1": 48.15,
      "vibration_3": 37.01,
      "vibration_4": 3.77,
      "vibration_5": 3.56,
      "vibration_6": 1.3,
      "axial_displacement_1": 104.52,
      "temperature_26": 84.0,
      "temperature_10": 45.2,
      "temperature_30": 61.4,
      "level_1": 87.7
    }
  },
  {
    "step": 99,
    "timestamp": "2022-03-01 16:15",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 38.42,
        "baseline_mean": 4.89,
        "z_score": 215.13,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 49.78,
        "baseline_mean": 9.17,
        "z_score": 144.82,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 85.13,
        "baseline_mean": 60.77,
        "z_score": 34.13,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.71,
        "baseline_mean": 52.93,
        "z_score": 9.63,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.78,
        "baseline_mean": 86.85,
        "z_score": 3.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.97,
      "flow_rate_1": 269.26,
      "pressure_1": 29.21,
      "pressure_4": 40.83,
      "anti_surge_valve_1": 70.2,
      "vibration_1": 49.78,
      "vibration_3": 38.42,
      "vibration_4": 3.78,
      "vibration_5": 3.8,
      "vibration_6": 1.24,
      "axial_displacement_1": 66.56,
      "temperature_26": 85.1,
      "temperature_10": 45.6,
      "temperature_30": 61.7,
      "level_1": 87.8
    }
  },
  {
    "step": 100,
    "timestamp": "2022-03-01 16:20",
    "ground_truth": {
      "fault_code": 2,
      "fault_class": "bearing_failure"
    },
    "supervised_inference": {
      "predicted_code": 2,
      "predicted_class": "bearing_failure",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 100.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "rose",
        "badge": "BEARING FAILURE",
        "icon": "\ud83d\udd34",
        "display_name": "Bearing Failure"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 39.7,
        "baseline_mean": 4.89,
        "z_score": 223.35,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 51.33,
        "baseline_mean": 9.17,
        "z_score": 150.35,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 85.79,
        "baseline_mean": 60.77,
        "z_score": 35.05,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 61.77,
        "baseline_mean": 52.93,
        "z_score": 9.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.91,
        "baseline_mean": 86.85,
        "z_score": 3.44,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\ud83d\udea8 Direct RCA: Journal Bearing Failure (DE Pad A) (100.0% Confidence)",
      "severity": "EMERGENCY",
      "failed_instrument": "Drive-End Journal Bearing Assembly (Pad A Metal Sensor & Proximity Probes)",
      "instrument_tag": "temperature_26 (Bearing Temp) & vibration_3 (Radial Vib DE)",
      "direct_rca": "Drive-End radial shaft vibration (vibration_3) surged to 45-70 \u00b5m while journal pad temperature (temperature_26) spiked +24\u00b0C, proving active babbitt metal micro-welding and mechanical sleeve wear.",
      "business_impact": "Imminent bearing sleeve destruction and catastrophic rotor-to-stator labyrinth seal clash if run continuously.",
      "recommended_action": "Verify lube oil header delivery pressure, reduce compressor throughput/speed immediately, and initiate a controlled shutdown for bearing sleeve replacement."
    },
    "sensors": {
      "motor_current_1": 142.69,
      "flow_rate_1": 270.93,
      "pressure_1": 29.23,
      "pressure_4": 40.86,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 51.33,
      "vibration_3": 39.7,
      "vibration_4": 3.77,
      "vibration_5": 3.57,
      "vibration_6": 1.31,
      "axial_displacement_1": 105.57,
      "temperature_26": 85.8,
      "temperature_10": 46.3,
      "temperature_30": 61.8,
      "level_1": 87.9
    }
  },
  {
    "step": 101,
    "timestamp": "2022-03-01 16:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.83,
        "baseline_mean": 86.85,
        "z_score": 3.19,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.78,
        "baseline_mean": 60.77,
        "z_score": 2.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.52,
        "baseline_mean": 40.74,
        "z_score": 2.54,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.83,
        "baseline_mean": 9.17,
        "z_score": 2.36,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.85,
        "baseline_mean": 4.23,
        "z_score": -1.97,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.4,
      "flow_rate_1": 270.61,
      "pressure_1": 29.19,
      "pressure_4": 40.82,
      "anti_surge_valve_1": 71.5,
      "vibration_1": 9.83,
      "vibration_3": 4.95,
      "vibration_4": 3.85,
      "vibration_5": 3.55,
      "vibration_6": 1.4,
      "axial_displacement_1": 106.65,
      "temperature_26": 62.8,
      "temperature_10": 45.5,
      "temperature_30": 54.3,
      "level_1": 87.8
    }
  },
  {
    "step": 102,
    "timestamp": "2022-03-01 16:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.9,
      "probabilities": {
        "normal_operation": 99.9,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.1,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.89,
        "baseline_mean": 9.17,
        "z_score": 2.57,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.82,
        "baseline_mean": 4.23,
        "z_score": -2.09,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.46,
        "baseline_mean": 40.74,
        "z_score": 1.98,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.11,
        "baseline_mean": 60.77,
        "z_score": 1.87,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.42,
        "baseline_mean": 86.85,
        "z_score": 1.83,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.43,
      "flow_rate_1": 270.1,
      "pressure_1": 29.18,
      "pressure_4": 40.76,
      "anti_surge_valve_1": 71.0,
      "vibration_1": 9.89,
      "vibration_3": 5.09,
      "vibration_4": 3.82,
      "vibration_5": 3.61,
      "vibration_6": 1.47,
      "axial_displacement_1": 110.01,
      "temperature_26": 62.1,
      "temperature_10": 44.5,
      "temperature_30": 53.5,
      "level_1": 87.4
    }
  },
  {
    "step": 103,
    "timestamp": "2022-03-01 16:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.25,
        "baseline_mean": 60.77,
        "z_score": 2.07,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.31,
        "baseline_mean": 40.74,
        "z_score": 1.89,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.93,
        "baseline_mean": 4.23,
        "z_score": -1.53,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 114.86,
        "baseline_mean": 25.05,
        "z_score": 1.48,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.73,
        "baseline_mean": 142.51,
        "z_score": -1.29,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.73,
      "flow_rate_1": 268.3,
      "pressure_1": 29.19,
      "pressure_4": 40.81,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.52,
      "vibration_3": 4.99,
      "vibration_4": 3.93,
      "vibration_5": 3.53,
      "vibration_6": 1.41,
      "axial_displacement_1": 114.86,
      "temperature_26": 62.3,
      "temperature_10": 44.3,
      "temperature_30": 53.9,
      "level_1": 87.2
    }
  },
  {
    "step": 104,
    "timestamp": "2022-03-01 16:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.71,
        "baseline_mean": 40.89,
        "z_score": -2.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.93,
        "baseline_mean": 60.77,
        "z_score": 1.62,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.93,
        "baseline_mean": 4.23,
        "z_score": -1.54,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.79,
        "baseline_mean": 142.51,
        "z_score": -1.19,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.16,
        "baseline_mean": 29.2,
        "z_score": -1.09,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.79,
      "flow_rate_1": 267.45,
      "pressure_1": 29.16,
      "pressure_4": 40.71,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.22,
      "vibration_3": 5.0,
      "vibration_4": 3.93,
      "vibration_5": 3.56,
      "vibration_6": 1.43,
      "axial_displacement_1": 86.53,
      "temperature_26": 61.9,
      "temperature_10": 42.7,
      "temperature_30": 53.2,
      "level_1": 87.0
    }
  },
  {
    "step": 105,
    "timestamp": "2022-03-01 16:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.65,
        "baseline_mean": 40.89,
        "z_score": -3.06,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.2,
        "baseline_mean": 60.77,
        "z_score": 2.0,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.47,
        "baseline_mean": 40.74,
        "z_score": 1.98,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.13,
        "baseline_mean": 29.2,
        "z_score": -1.89,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.9,
        "baseline_mean": 4.23,
        "z_score": -1.67,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.71,
      "flow_rate_1": 269.7,
      "pressure_1": 29.13,
      "pressure_4": 40.65,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.38,
      "vibration_3": 4.98,
      "vibration_4": 3.9,
      "vibration_5": 3.32,
      "vibration_6": 1.33,
      "axial_displacement_1": 76.73,
      "temperature_26": 62.2,
      "temperature_10": 44.5,
      "temperature_30": 53.3,
      "level_1": 87.2
    }
  },
  {
    "step": 106,
    "timestamp": "2022-03-01 16:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 98.0,
      "probabilities": {
        "normal_operation": 98.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 2.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.59,
        "baseline_mean": 40.89,
        "z_score": -3.76,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.84,
        "baseline_mean": 4.23,
        "z_score": -2.02,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 62.14,
        "baseline_mean": 60.77,
        "z_score": 1.92,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.29,
        "baseline_mean": 40.74,
        "z_score": 1.88,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.15,
        "baseline_mean": 29.2,
        "z_score": -1.51,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.68,
      "flow_rate_1": 271.1,
      "pressure_1": 29.15,
      "pressure_4": 40.59,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.52,
      "vibration_3": 4.82,
      "vibration_4": 3.84,
      "vibration_5": 3.35,
      "vibration_6": 1.34,
      "axial_displacement_1": 80.0,
      "temperature_26": 62.1,
      "temperature_10": 44.3,
      "temperature_30": 52.7,
      "level_1": 87.1
    }
  },
  {
    "step": 107,
    "timestamp": "2022-03-01 16:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 93.0,
      "probabilities": {
        "normal_operation": 93.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 7.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.57,
        "baseline_mean": 40.89,
        "z_score": -4.04,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.24,
        "baseline_mean": 40.74,
        "z_score": 1.86,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.52,
        "baseline_mean": 142.51,
        "z_score": -1.63,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.96,
        "baseline_mean": 4.23,
        "z_score": -1.36,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 61.74,
        "baseline_mean": 60.77,
        "z_score": 1.35,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.52,
      "flow_rate_1": 270.97,
      "pressure_1": 29.16,
      "pressure_4": 40.57,
      "anti_surge_valve_1": 71.2,
      "vibration_1": 9.54,
      "vibration_3": 4.83,
      "vibration_4": 3.96,
      "vibration_5": 3.38,
      "vibration_6": 1.36,
      "axial_displacement_1": 101.62,
      "temperature_26": 61.7,
      "temperature_10": 44.2,
      "temperature_30": 52.5,
      "level_1": 87.1
    }
  },
  {
    "step": 108,
    "timestamp": "2022-03-01 17:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 91.0,
      "probabilities": {
        "normal_operation": 91.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 9.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.54,
        "baseline_mean": 40.89,
        "z_score": -4.41,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 140.8,
        "baseline_mean": 142.51,
        "z_score": -2.82,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.7,
        "baseline_mean": 9.17,
        "z_score": 1.88,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.14,
        "baseline_mean": 29.2,
        "z_score": -1.72,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.97,
        "baseline_mean": 4.23,
        "z_score": -1.31,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 140.8,
      "flow_rate_1": 270.69,
      "pressure_1": 29.14,
      "pressure_4": 40.54,
      "anti_surge_valve_1": 71.3,
      "vibration_1": 9.7,
      "vibration_3": 4.8,
      "vibration_4": 3.97,
      "vibration_5": 3.29,
      "vibration_6": 1.34,
      "axial_displacement_1": 78.69,
      "temperature_26": 61.5,
      "temperature_10": 43.0,
      "temperature_30": 51.9,
      "level_1": 87.0
    }
  },
  {
    "step": 109,
    "timestamp": "2022-03-01 17:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 88.0,
      "probabilities": {
        "normal_operation": 88.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 12.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.53,
        "baseline_mean": 40.89,
        "z_score": -4.52,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.22,
        "baseline_mean": 142.51,
        "z_score": -2.12,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.7,
        "baseline_mean": 9.17,
        "z_score": 1.89,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.22,
        "baseline_mean": 52.93,
        "z_score": -1.88,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.13,
        "baseline_mean": 29.2,
        "z_score": -1.87,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.22,
      "flow_rate_1": 270.4,
      "pressure_1": 29.13,
      "pressure_4": 40.53,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.7,
      "vibration_3": 4.93,
      "vibration_4": 4.17,
      "vibration_5": 3.17,
      "vibration_6": 1.39,
      "axial_displacement_1": 75.26,
      "temperature_26": 61.2,
      "temperature_10": 42.1,
      "temperature_30": 51.2,
      "level_1": 86.8
    }
  },
  {
    "step": 110,
    "timestamp": "2022-03-01 17:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 97.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 3.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.6,
        "baseline_mean": 40.89,
        "z_score": -3.69,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.1,
        "baseline_mean": 9.17,
        "z_score": 3.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.37,
        "baseline_mean": 268.67,
        "z_score": 2.0,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.34,
        "baseline_mean": 142.51,
        "z_score": -1.93,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.27,
        "baseline_mean": 52.93,
        "z_score": -1.83,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.34,
      "flow_rate_1": 272.37,
      "pressure_1": 29.16,
      "pressure_4": 40.6,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 10.1,
      "vibration_3": 4.93,
      "vibration_4": 4.29,
      "vibration_5": 3.16,
      "vibration_6": 1.39,
      "axial_displacement_1": 118.75,
      "temperature_26": 61.2,
      "temperature_10": 42.8,
      "temperature_30": 51.3,
      "level_1": 86.9
    }
  },
  {
    "step": 111,
    "timestamp": "2022-03-01 17:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 99.0,
        "oil_leakage": 1.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.09,
        "baseline_mean": 9.17,
        "z_score": 3.28,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.66,
        "baseline_mean": 40.89,
        "z_score": -2.84,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.38,
        "baseline_mean": 52.93,
        "z_score": -1.71,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.15,
        "baseline_mean": 29.2,
        "z_score": -1.48,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.19,
        "baseline_mean": 268.67,
        "z_score": 1.36,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.26,
      "flow_rate_1": 271.19,
      "pressure_1": 29.15,
      "pressure_4": 40.66,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 10.09,
      "vibration_3": 4.95,
      "vibration_4": 4.43,
      "vibration_5": 3.31,
      "vibration_6": 1.43,
      "axial_displacement_1": 78.12,
      "temperature_26": 61.1,
      "temperature_10": 42.0,
      "temperature_30": 51.4,
      "level_1": 86.7
    }
  },
  {
    "step": 112,
    "timestamp": "2022-03-01 17:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 99.0,
        "oil_leakage": 1.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.04,
        "baseline_mean": 9.17,
        "z_score": 3.09,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.71,
        "baseline_mean": 40.89,
        "z_score": -2.27,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 272.12,
        "baseline_mean": 268.67,
        "z_score": 1.86,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.14,
        "baseline_mean": 29.2,
        "z_score": -1.71,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.45,
        "baseline_mean": 52.93,
        "z_score": -1.63,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.3,
      "flow_rate_1": 272.12,
      "pressure_1": 29.14,
      "pressure_4": 40.71,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 10.04,
      "vibration_3": 4.99,
      "vibration_4": 4.34,
      "vibration_5": 3.36,
      "vibration_6": 1.39,
      "axial_displacement_1": 86.06,
      "temperature_26": 61.2,
      "temperature_10": 41.3,
      "temperature_30": 51.4,
      "level_1": 86.6
    }
  },
  {
    "step": 113,
    "timestamp": "2022-03-01 17:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.33,
        "baseline_mean": 268.67,
        "z_score": 2.51,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.7,
        "baseline_mean": 40.89,
        "z_score": -2.34,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.14,
        "baseline_mean": 29.2,
        "z_score": -1.65,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.58,
        "baseline_mean": 9.17,
        "z_score": 1.47,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.63,
        "baseline_mean": 52.93,
        "z_score": -1.43,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.26,
      "flow_rate_1": 273.33,
      "pressure_1": 29.14,
      "pressure_4": 40.7,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.58,
      "vibration_3": 4.83,
      "vibration_4": 4.27,
      "vibration_5": 3.38,
      "vibration_6": 1.33,
      "axial_displacement_1": 60.48,
      "temperature_26": 61.6,
      "temperature_10": 42.3,
      "temperature_30": 51.6,
      "level_1": 86.7
    }
  },
  {
    "step": 114,
    "timestamp": "2022-03-01 17:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.68,
        "baseline_mean": 40.89,
        "z_score": -2.61,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.64,
        "baseline_mean": 52.93,
        "z_score": -2.51,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.81,
        "baseline_mean": 268.67,
        "z_score": 1.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.52,
        "baseline_mean": 86.85,
        "z_score": -1.07,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.16,
        "baseline_mean": 29.2,
        "z_score": -1.01,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.08,
      "flow_rate_1": 271.81,
      "pressure_1": 29.16,
      "pressure_4": 40.68,
      "anti_surge_valve_1": 70.1,
      "vibration_1": 9.43,
      "vibration_3": 4.9,
      "vibration_4": 4.04,
      "vibration_5": 3.53,
      "vibration_6": 1.41,
      "axial_displacement_1": 45.07,
      "temperature_26": 61.0,
      "temperature_10": 40.0,
      "temperature_30": 50.6,
      "level_1": 86.5
    }
  },
  {
    "step": 115,
    "timestamp": "2022-03-01 17:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.2,
        "baseline_mean": 52.93,
        "z_score": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.42,
        "baseline_mean": 268.67,
        "z_score": 1.48,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.77,
        "baseline_mean": 40.89,
        "z_score": -1.44,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.5,
        "baseline_mean": 9.17,
        "z_score": 1.18,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.16,
        "baseline_mean": 29.2,
        "z_score": -1.16,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.94,
      "flow_rate_1": 271.42,
      "pressure_1": 29.16,
      "pressure_4": 40.77,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.5,
      "vibration_3": 4.99,
      "vibration_4": 4.1,
      "vibration_5": 3.6,
      "vibration_6": 1.4,
      "axial_displacement_1": 70.24,
      "temperature_26": 61.3,
      "temperature_10": 40.1,
      "temperature_30": 51.2,
      "level_1": 86.6
    }
  },
  {
    "step": 116,
    "timestamp": "2022-03-01 17:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.75,
        "baseline_mean": 52.93,
        "z_score": -2.39,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 270.96,
        "baseline_mean": 268.67,
        "z_score": 1.23,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.51,
        "baseline_mean": 9.17,
        "z_score": 1.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.55,
        "baseline_mean": 86.85,
        "z_score": -0.98,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.04,
        "baseline_mean": 4.23,
        "z_score": -0.97,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.68,
      "flow_rate_1": 270.96,
      "pressure_1": 29.17,
      "pressure_4": 40.82,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.51,
      "vibration_3": 4.99,
      "vibration_4": 4.04,
      "vibration_5": 3.51,
      "vibration_6": 1.42,
      "axial_displacement_1": 70.88,
      "temperature_26": 60.8,
      "temperature_10": 39.5,
      "temperature_30": 50.8,
      "level_1": 86.5
    }
  },
  {
    "step": 117,
    "timestamp": "2022-03-01 17:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.43,
        "baseline_mean": 52.93,
        "z_score": -2.74,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.75,
        "baseline_mean": 9.17,
        "z_score": 2.07,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.7,
        "baseline_mean": 3.41,
        "z_score": 1.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.08,
        "baseline_mean": 4.89,
        "z_score": 1.26,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 270.81,
        "baseline_mean": 268.67,
        "z_score": 1.15,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.37,
      "flow_rate_1": 270.81,
      "pressure_1": 29.2,
      "pressure_4": 40.85,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.75,
      "vibration_3": 5.08,
      "vibration_4": 4.0,
      "vibration_5": 3.7,
      "vibration_6": 1.42,
      "axial_displacement_1": 52.09,
      "temperature_26": 60.4,
      "temperature_10": 39.2,
      "temperature_30": 50.4,
      "level_1": 86.5
    }
  },
  {
    "step": 118,
    "timestamp": "2022-03-01 17:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.54,
        "baseline_mean": 52.93,
        "z_score": -2.63,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.77,
        "baseline_mean": 40.89,
        "z_score": -1.55,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.58,
        "baseline_mean": 3.41,
        "z_score": 0.97,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.17,
        "baseline_mean": 29.2,
        "z_score": -0.96,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.6,
        "baseline_mean": 86.85,
        "z_score": -0.82,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.41,
      "flow_rate_1": 269.9,
      "pressure_1": 29.17,
      "pressure_4": 40.77,
      "anti_surge_valve_1": 71.8,
      "vibration_1": 9.4,
      "vibration_3": 4.85,
      "vibration_4": 4.09,
      "vibration_5": 3.58,
      "vibration_6": 1.38,
      "axial_displacement_1": 56.15,
      "temperature_26": 60.4,
      "temperature_10": 39.2,
      "temperature_30": 50.5,
      "level_1": 86.6
    }
  },
  {
    "step": 119,
    "timestamp": "2022-03-01 17:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.58,
        "baseline_mean": 52.93,
        "z_score": -2.58,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.51,
        "baseline_mean": 86.85,
        "z_score": -1.1,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.81,
        "baseline_mean": 40.89,
        "z_score": -1.01,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.06,
        "baseline_mean": 4.23,
        "z_score": -0.88,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 39.09,
        "baseline_mean": 40.74,
        "z_score": -0.87,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.1,
      "flow_rate_1": 270.06,
      "pressure_1": 29.18,
      "pressure_4": 40.81,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.17,
      "vibration_3": 4.83,
      "vibration_4": 4.06,
      "vibration_5": 3.39,
      "vibration_6": 1.4,
      "axial_displacement_1": 59.2,
      "temperature_26": 60.4,
      "temperature_10": 39.1,
      "temperature_30": 50.6,
      "level_1": 86.5
    }
  },
  {
    "step": 120,
    "timestamp": "2022-03-01 18:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.7,
        "baseline_mean": 52.93,
        "z_score": -2.45,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.9,
        "baseline_mean": 4.23,
        "z_score": -1.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.49,
        "baseline_mean": 9.17,
        "z_score": 1.14,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.89,
        "baseline_mean": 142.51,
        "z_score": -1.02,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 85.67,
        "baseline_mean": 25.05,
        "z_score": 1.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.89,
      "flow_rate_1": 270.29,
      "pressure_1": 29.2,
      "pressure_4": 40.83,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.49,
      "vibration_3": 4.8,
      "vibration_4": 3.9,
      "vibration_5": 3.45,
      "vibration_6": 1.36,
      "axial_displacement_1": 85.67,
      "temperature_26": 60.2,
      "temperature_10": 39.4,
      "temperature_30": 50.7,
      "level_1": 86.7
    }
  },
  {
    "step": 121,
    "timestamp": "2022-03-01 18:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 49.92,
        "baseline_mean": 52.93,
        "z_score": -3.31,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.41,
        "baseline_mean": 60.77,
        "z_score": -1.92,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.35,
        "baseline_mean": 142.51,
        "z_score": -1.91,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.68,
        "baseline_mean": 9.17,
        "z_score": 1.82,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.34,
        "baseline_mean": 40.74,
        "z_score": -1.27,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.35,
      "flow_rate_1": 269.81,
      "pressure_1": 29.22,
      "pressure_4": 40.82,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.68,
      "vibration_3": 4.86,
      "vibration_4": 4.03,
      "vibration_5": 3.43,
      "vibration_6": 1.41,
      "axial_displacement_1": 89.45,
      "temperature_26": 59.4,
      "temperature_10": 38.3,
      "temperature_30": 49.9,
      "level_1": 86.7
    }
  },
  {
    "step": 122,
    "timestamp": "2022-03-01 18:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.17,
        "baseline_mean": 52.93,
        "z_score": -3.03,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.59,
        "baseline_mean": 60.77,
        "z_score": -1.67,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.6,
        "baseline_mean": 142.51,
        "z_score": -1.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.54,
        "baseline_mean": 9.17,
        "z_score": 1.32,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.3,
        "baseline_mean": 40.74,
        "z_score": -1.29,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.6,
      "flow_rate_1": 268.76,
      "pressure_1": 29.22,
      "pressure_4": 40.85,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.54,
      "vibration_3": 4.9,
      "vibration_4": 4.22,
      "vibration_5": 3.53,
      "vibration_6": 1.4,
      "axial_displacement_1": 97.29,
      "temperature_26": 59.6,
      "temperature_10": 38.3,
      "temperature_30": 50.2,
      "level_1": 86.7
    }
  },
  {
    "step": 123,
    "timestamp": "2022-03-01 18:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 49.32,
        "baseline_mean": 52.93,
        "z_score": -3.97,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.04,
        "baseline_mean": 60.77,
        "z_score": -2.42,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.75,
        "baseline_mean": 9.17,
        "z_score": 2.08,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.86,
        "baseline_mean": 40.74,
        "z_score": -1.52,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.66,
        "baseline_mean": 142.51,
        "z_score": -1.41,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.66,
      "flow_rate_1": 268.41,
      "pressure_1": 29.23,
      "pressure_4": 40.81,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.75,
      "vibration_3": 4.97,
      "vibration_4": 4.09,
      "vibration_5": 3.4,
      "vibration_6": 1.45,
      "axial_displacement_1": 106.92,
      "temperature_26": 59.0,
      "temperature_10": 37.9,
      "temperature_30": 49.3,
      "level_1": 86.7
    }
  },
  {
    "step": 124,
    "timestamp": "2022-03-01 18:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 48.99,
        "baseline_mean": 52.93,
        "z_score": -4.33,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.88,
        "baseline_mean": 60.77,
        "z_score": -2.65,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.95,
        "baseline_mean": 40.74,
        "z_score": -2.01,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.58,
        "baseline_mean": 142.51,
        "z_score": -1.54,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.6,
        "baseline_mean": 9.17,
        "z_score": 1.52,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.58,
      "flow_rate_1": 267.09,
      "pressure_1": 29.24,
      "pressure_4": 40.79,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.6,
      "vibration_3": 4.99,
      "vibration_4": 4.05,
      "vibration_5": 3.56,
      "vibration_6": 1.45,
      "axial_displacement_1": 107.61,
      "temperature_26": 58.9,
      "temperature_10": 36.9,
      "temperature_30": 49.0,
      "level_1": 86.5
    }
  },
  {
    "step": 125,
    "timestamp": "2022-03-01 18:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 49.17,
        "baseline_mean": 52.93,
        "z_score": -4.12,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.59,
        "baseline_mean": 60.77,
        "z_score": -3.06,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.18,
        "baseline_mean": 40.74,
        "z_score": -2.42,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.71,
        "baseline_mean": 9.17,
        "z_score": 1.91,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 121.7,
        "baseline_mean": 25.05,
        "z_score": 1.59,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.12,
      "flow_rate_1": 267.09,
      "pressure_1": 29.25,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 9.71,
      "vibration_3": 5.03,
      "vibration_4": 4.15,
      "vibration_5": 3.52,
      "vibration_6": 1.46,
      "axial_displacement_1": 121.7,
      "temperature_26": 58.6,
      "temperature_10": 36.2,
      "temperature_30": 49.2,
      "level_1": 86.4
    }
  },
  {
    "step": 126,
    "timestamp": "2022-03-01 18:30",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 54.0,
      "probabilities": {
        "normal_operation": 46.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 54.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 48.97,
        "baseline_mean": 52.93,
        "z_score": -4.34,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.09,
        "baseline_mean": 60.77,
        "z_score": -3.77,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.81,
        "baseline_mean": 4.23,
        "z_score": 3.04,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 10.02,
        "baseline_mean": 9.17,
        "z_score": 3.02,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 35.41,
        "baseline_mean": 40.74,
        "z_score": -2.83,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (54.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 142.01,
      "flow_rate_1": 266.68,
      "pressure_1": 29.26,
      "pressure_4": 40.83,
      "anti_surge_valve_1": 72.0,
      "vibration_1": 10.02,
      "vibration_3": 5.22,
      "vibration_4": 4.81,
      "vibration_5": 3.74,
      "vibration_6": 1.46,
      "axial_displacement_1": 173.4,
      "temperature_26": 58.1,
      "temperature_10": 35.4,
      "temperature_30": 49.0,
      "level_1": 86.3
    }
  },
  {
    "step": 127,
    "timestamp": "2022-03-01 18:35",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 49.16,
        "baseline_mean": 52.93,
        "z_score": -4.14,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.38,
        "baseline_mean": 60.77,
        "z_score": -3.36,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 35.64,
        "baseline_mean": 40.74,
        "z_score": -2.71,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.92,
        "baseline_mean": 9.17,
        "z_score": 2.66,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.22,
        "baseline_mean": 4.89,
        "z_score": 2.13,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.35,
      "flow_rate_1": 265.63,
      "pressure_1": 29.26,
      "pressure_4": 40.88,
      "anti_surge_valve_1": 71.7,
      "vibration_1": 9.92,
      "vibration_3": 5.22,
      "vibration_4": 3.97,
      "vibration_5": 3.78,
      "vibration_6": 1.4,
      "axial_displacement_1": 152.5,
      "temperature_26": 58.4,
      "temperature_10": 35.6,
      "temperature_30": 49.2,
      "level_1": 86.3
    }
  },
  {
    "step": 128,
    "timestamp": "2022-03-01 18:40",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 53.0,
      "probabilities": {
        "normal_operation": 47.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 53.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 49.53,
        "baseline_mean": 52.93,
        "z_score": -3.73,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.53,
        "baseline_mean": 60.77,
        "z_score": -3.14,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 35.51,
        "baseline_mean": 40.74,
        "z_score": -2.77,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.92,
        "baseline_mean": 9.17,
        "z_score": 2.65,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 178.49,
        "baseline_mean": 25.05,
        "z_score": 2.52,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (53.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 142.84,
      "flow_rate_1": 264.8,
      "pressure_1": 29.23,
      "pressure_4": 40.92,
      "anti_surge_valve_1": 71.5,
      "vibration_1": 9.92,
      "vibration_3": 5.15,
      "vibration_4": 4.71,
      "vibration_5": 3.7,
      "vibration_6": 1.43,
      "axial_displacement_1": 178.49,
      "temperature_26": 58.5,
      "temperature_10": 35.5,
      "temperature_30": 49.5,
      "level_1": 86.2
    }
  },
  {
    "step": 129,
    "timestamp": "2022-03-01 18:45",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 53.0,
      "probabilities": {
        "normal_operation": 47.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 53.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.94,
        "baseline_mean": 4.23,
        "z_score": 3.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.22,
        "baseline_mean": 52.93,
        "z_score": -2.97,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 202.63,
        "baseline_mean": 25.05,
        "z_score": 2.92,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.83,
        "baseline_mean": 9.17,
        "z_score": 2.35,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.19,
        "baseline_mean": 60.77,
        "z_score": -2.21,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (53.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 143.44,
      "flow_rate_1": 264.77,
      "pressure_1": 29.24,
      "pressure_4": 41.03,
      "anti_surge_valve_1": 71.2,
      "vibration_1": 9.83,
      "vibration_3": 5.02,
      "vibration_4": 4.94,
      "vibration_5": 3.45,
      "vibration_6": 1.39,
      "axial_displacement_1": 202.63,
      "temperature_26": 59.2,
      "temperature_10": 37.1,
      "temperature_30": 50.2,
      "level_1": 86.5
    }
  },
  {
    "step": 130,
    "timestamp": "2022-03-01 18:50",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.12,
        "baseline_mean": 40.89,
        "z_score": 2.98,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 169.98,
        "baseline_mean": 25.05,
        "z_score": 2.38,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.91,
        "baseline_mean": 142.51,
        "z_score": 2.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 264.59,
        "baseline_mean": 268.67,
        "z_score": -2.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.05,
        "baseline_mean": 52.93,
        "z_score": -2.07,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.91,
      "flow_rate_1": 264.59,
      "pressure_1": 29.22,
      "pressure_4": 41.12,
      "anti_surge_valve_1": 70.9,
      "vibration_1": 9.74,
      "vibration_3": 5.03,
      "vibration_4": 4.53,
      "vibration_5": 3.46,
      "vibration_6": 1.32,
      "axial_displacement_1": 169.98,
      "temperature_26": 59.9,
      "temperature_10": 38.9,
      "temperature_30": 51.1,
      "level_1": 86.8
    }
  },
  {
    "step": 131,
    "timestamp": "2022-03-01 18:55",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 53.1,
      "probabilities": {
        "normal_operation": 45.9,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 53.1,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.9,
        "baseline_mean": 4.23,
        "z_score": 3.51,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.11,
        "baseline_mean": 40.89,
        "z_score": 2.89,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.07,
        "baseline_mean": 142.51,
        "z_score": 2.57,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 264.35,
        "baseline_mean": 268.67,
        "z_score": -2.33,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 166.23,
        "baseline_mean": 25.05,
        "z_score": 2.32,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (53.1% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.07,
      "flow_rate_1": 264.35,
      "pressure_1": 29.2,
      "pressure_4": 41.11,
      "anti_surge_valve_1": 70.7,
      "vibration_1": 9.58,
      "vibration_3": 5.2,
      "vibration_4": 4.9,
      "vibration_5": 3.39,
      "vibration_6": 1.34,
      "axial_displacement_1": 166.23,
      "temperature_26": 59.8,
      "temperature_10": 38.6,
      "temperature_30": 50.8,
      "level_1": 86.6
    }
  },
  {
    "step": 132,
    "timestamp": "2022-03-01 19:00",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 51.0,
      "probabilities": {
        "normal_operation": 47.0,
        "oil_leakage": 1.0,
        "bearing_failure": 0.0,
        "air_leakage": 51.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.19,
        "baseline_mean": 40.89,
        "z_score": 3.85,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.95,
        "baseline_mean": 4.23,
        "z_score": 3.73,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.27,
        "baseline_mean": 142.51,
        "z_score": 2.91,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 50.73,
        "baseline_mean": 52.93,
        "z_score": -2.41,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 264.78,
        "baseline_mean": 268.67,
        "z_score": -2.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (51.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.27,
      "flow_rate_1": 264.78,
      "pressure_1": 29.19,
      "pressure_4": 41.19,
      "anti_surge_valve_1": 70.4,
      "vibration_1": 9.43,
      "vibration_3": 5.16,
      "vibration_4": 4.95,
      "vibration_5": 3.42,
      "vibration_6": 1.33,
      "axial_displacement_1": 137.42,
      "temperature_26": 59.8,
      "temperature_10": 38.3,
      "temperature_30": 50.7,
      "level_1": 86.5
    }
  },
  {
    "step": 133,
    "timestamp": "2022-03-01 19:05",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 54.0,
      "probabilities": {
        "normal_operation": 45.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 54.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 5.54,
        "baseline_mean": 4.23,
        "z_score": 6.83,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.28,
        "baseline_mean": 40.89,
        "z_score": 4.96,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 145.03,
        "baseline_mean": 142.51,
        "z_score": 4.16,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.31,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.7,
        "baseline_mean": 52.93,
        "z_score": -1.35,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (54.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 145.03,
      "flow_rate_1": 266.46,
      "pressure_1": 29.19,
      "pressure_4": 41.28,
      "anti_surge_valve_1": 70.2,
      "vibration_1": 9.06,
      "vibration_3": 4.93,
      "vibration_4": 5.54,
      "vibration_5": 3.21,
      "vibration_6": 1.26,
      "axial_displacement_1": 68.08,
      "temperature_26": 60.2,
      "temperature_10": 39.9,
      "temperature_30": 51.7,
      "level_1": 86.8
    }
  },
  {
    "step": 134,
    "timestamp": "2022-03-01 19:10",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 81.0,
      "probabilities": {
        "normal_operation": 81.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 18.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.28,
        "baseline_mean": 40.89,
        "z_score": 5.03,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.34,
        "baseline_mean": 142.51,
        "z_score": 3.01,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.95,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 265.55,
        "baseline_mean": 268.67,
        "z_score": -1.69,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 109.68,
        "baseline_mean": 25.05,
        "z_score": 1.39,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 144.34,
      "flow_rate_1": 265.55,
      "pressure_1": 29.17,
      "pressure_4": 41.28,
      "anti_surge_valve_1": 69.9,
      "vibration_1": 9.33,
      "vibration_3": 4.9,
      "vibration_4": 4.6,
      "vibration_5": 3.34,
      "vibration_6": 1.32,
      "axial_displacement_1": 109.68,
      "temperature_26": 60.1,
      "temperature_10": 40.0,
      "temperature_30": 51.7,
      "level_1": 86.8
    }
  },
  {
    "step": 135,
    "timestamp": "2022-03-01 19:15",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 90.0,
      "probabilities": {
        "normal_operation": 9.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 90.0,
        "suction_filter_choke": 1.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 5.99,
        "baseline_mean": 4.23,
        "z_score": 9.12,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.3,
        "baseline_mean": 40.89,
        "z_score": 5.31,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.11,
        "baseline_mean": 142.51,
        "z_score": 2.64,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.0,
        "baseline_mean": 3.41,
        "z_score": -2.19,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 265.94,
        "baseline_mean": 268.67,
        "z_score": -1.48,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (90.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.11,
      "flow_rate_1": 265.94,
      "pressure_1": 29.15,
      "pressure_4": 41.3,
      "anti_surge_valve_1": 69.6,
      "vibration_1": 9.28,
      "vibration_3": 4.8,
      "vibration_4": 5.99,
      "vibration_5": 3.0,
      "vibration_6": 1.32,
      "axial_displacement_1": 80.53,
      "temperature_26": 60.2,
      "temperature_10": 41.0,
      "temperature_30": 51.9,
      "level_1": 86.8
    }
  },
  {
    "step": 136,
    "timestamp": "2022-03-01 19:20",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 95.0,
      "probabilities": {
        "normal_operation": 5.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 95.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 6.76,
        "baseline_mean": 4.23,
        "z_score": 13.12,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.39,
        "baseline_mean": 40.89,
        "z_score": 6.42,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.15,
        "baseline_mean": 142.51,
        "z_score": 2.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 264.33,
        "baseline_mean": 268.67,
        "z_score": -2.34,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.29,
        "baseline_mean": 52.93,
        "z_score": -1.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (95.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.15,
      "flow_rate_1": 264.33,
      "pressure_1": 29.19,
      "pressure_4": 41.39,
      "anti_surge_valve_1": 68.1,
      "vibration_1": 9.32,
      "vibration_3": 4.85,
      "vibration_4": 6.76,
      "vibration_5": 3.14,
      "vibration_6": 1.38,
      "axial_displacement_1": 37.67,
      "temperature_26": 59.8,
      "temperature_10": 40.1,
      "temperature_30": 51.3,
      "level_1": 86.8
    }
  },
  {
    "step": 137,
    "timestamp": "2022-03-01 19:25",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 94.0,
      "probabilities": {
        "normal_operation": 6.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 94.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 6.14,
        "baseline_mean": 4.23,
        "z_score": 9.92,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.52,
        "baseline_mean": 40.89,
        "z_score": 8.0,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.53,
        "baseline_mean": 142.51,
        "z_score": 3.33,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 263.22,
        "baseline_mean": 268.67,
        "z_score": -2.94,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.85,
        "baseline_mean": 52.93,
        "z_score": -1.19,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (94.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.53,
      "flow_rate_1": 263.22,
      "pressure_1": 29.22,
      "pressure_4": 41.52,
      "anti_surge_valve_1": 67.7,
      "vibration_1": 9.17,
      "vibration_3": 4.9,
      "vibration_4": 6.14,
      "vibration_5": 3.34,
      "vibration_6": 1.35,
      "axial_displacement_1": -29.61,
      "temperature_26": 60.0,
      "temperature_10": 40.5,
      "temperature_30": 51.9,
      "level_1": 86.8
    }
  },
  {
    "step": 138,
    "timestamp": "2022-03-01 19:30",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 95.0,
      "probabilities": {
        "normal_operation": 5.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 95.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 6.46,
        "baseline_mean": 4.23,
        "z_score": 11.58,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.5,
        "baseline_mean": 40.89,
        "z_score": 7.78,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 262.15,
        "baseline_mean": 268.67,
        "z_score": -3.52,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.89,
        "baseline_mean": 142.51,
        "z_score": 2.28,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.54,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (95.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 143.89,
      "flow_rate_1": 262.15,
      "pressure_1": 29.25,
      "pressure_4": 41.5,
      "anti_surge_valve_1": 66.8,
      "vibration_1": 9.25,
      "vibration_3": 4.7,
      "vibration_4": 6.46,
      "vibration_5": 3.52,
      "vibration_6": 1.31,
      "axial_displacement_1": -40.42,
      "temperature_26": 60.0,
      "temperature_10": 41.0,
      "temperature_30": 52.2,
      "level_1": 86.8
    }
  },
  {
    "step": 139,
    "timestamp": "2022-03-01 19:35",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 99.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 6.05,
        "baseline_mean": 4.23,
        "z_score": 9.45,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.56,
        "baseline_mean": 40.89,
        "z_score": 8.51,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 259.55,
        "baseline_mean": 268.67,
        "z_score": -4.92,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.84,
        "baseline_mean": 142.51,
        "z_score": 2.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.58,
        "baseline_mean": 4.89,
        "z_score": -1.96,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (99.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 143.84,
      "flow_rate_1": 259.55,
      "pressure_1": 29.25,
      "pressure_4": 41.56,
      "anti_surge_valve_1": 66.6,
      "vibration_1": 8.91,
      "vibration_3": 4.58,
      "vibration_4": 6.05,
      "vibration_5": 3.66,
      "vibration_6": 1.34,
      "axial_displacement_1": -11.56,
      "temperature_26": 60.4,
      "temperature_10": 41.0,
      "temperature_30": 52.5,
      "level_1": 86.8
    }
  },
  {
    "step": 140,
    "timestamp": "2022-03-01 19:40",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 92.0,
      "probabilities": {
        "normal_operation": 8.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 92.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 6.46,
        "baseline_mean": 4.23,
        "z_score": 11.57,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.61,
        "baseline_mean": 40.89,
        "z_score": 9.23,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 260.99,
        "baseline_mean": 268.67,
        "z_score": -4.14,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.16,
        "baseline_mean": 142.51,
        "z_score": 2.72,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "anti_surge_valve_1",
        "name": "Anti-Surge Valve Opening (%)",
        "current_value": 66.4,
        "baseline_mean": 71.0,
        "z_score": -1.29,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (92.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.16,
      "flow_rate_1": 260.99,
      "pressure_1": 29.22,
      "pressure_4": 41.61,
      "anti_surge_valve_1": 66.4,
      "vibration_1": 9.23,
      "vibration_3": 4.69,
      "vibration_4": 6.46,
      "vibration_5": 3.22,
      "vibration_6": 1.32,
      "axial_displacement_1": -41.23,
      "temperature_26": 60.3,
      "temperature_10": 41.5,
      "temperature_30": 52.3,
      "level_1": 87.0
    }
  },
  {
    "step": 141,
    "timestamp": "2022-03-01 19:45",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 99.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 6.49,
        "baseline_mean": 4.23,
        "z_score": 11.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.65,
        "baseline_mean": 40.89,
        "z_score": 9.71,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 259.13,
        "baseline_mean": 268.67,
        "z_score": -5.15,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.93,
        "baseline_mean": 142.51,
        "z_score": 2.35,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -79.13,
        "baseline_mean": 25.05,
        "z_score": -1.71,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (99.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 143.93,
      "flow_rate_1": 259.13,
      "pressure_1": 29.2,
      "pressure_4": 41.65,
      "anti_surge_valve_1": 66.4,
      "vibration_1": 9.2,
      "vibration_3": 4.76,
      "vibration_4": 6.49,
      "vibration_5": 3.27,
      "vibration_6": 1.38,
      "axial_displacement_1": -79.13,
      "temperature_26": 60.1,
      "temperature_10": 41.0,
      "temperature_30": 52.2,
      "level_1": 86.9
    }
  },
  {
    "step": 142,
    "timestamp": "2022-03-01 19:50",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 100.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 7.33,
        "baseline_mean": 4.23,
        "z_score": 16.05,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.75,
        "baseline_mean": 40.89,
        "z_score": 10.97,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 258.56,
        "baseline_mean": 268.67,
        "z_score": -5.46,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.49,
        "baseline_mean": 142.51,
        "z_score": 3.26,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -91.21,
        "baseline_mean": 25.05,
        "z_score": -1.91,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (100.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.49,
      "flow_rate_1": 258.56,
      "pressure_1": 29.19,
      "pressure_4": 41.75,
      "anti_surge_valve_1": 65.8,
      "vibration_1": 9.16,
      "vibration_3": 4.88,
      "vibration_4": 7.33,
      "vibration_5": 3.22,
      "vibration_6": 1.39,
      "axial_displacement_1": -91.21,
      "temperature_26": 59.9,
      "temperature_10": 41.4,
      "temperature_30": 52.3,
      "level_1": 86.7
    }
  },
  {
    "step": 143,
    "timestamp": "2022-03-01 19:55",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 100.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 7.17,
        "baseline_mean": 4.23,
        "z_score": 15.25,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.72,
        "baseline_mean": 40.89,
        "z_score": 10.58,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 256.44,
        "baseline_mean": 268.67,
        "z_score": -6.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.62,
        "baseline_mean": 142.51,
        "z_score": 3.47,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.48,
        "baseline_mean": 60.77,
        "z_score": -1.81,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (100.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.62,
      "flow_rate_1": 256.44,
      "pressure_1": 29.18,
      "pressure_4": 41.72,
      "anti_surge_valve_1": 65.5,
      "vibration_1": 9.3,
      "vibration_3": 4.98,
      "vibration_4": 7.17,
      "vibration_5": 3.38,
      "vibration_6": 1.42,
      "axial_displacement_1": -22.15,
      "temperature_26": 59.5,
      "temperature_10": 41.3,
      "temperature_30": 52.1,
      "level_1": 86.7
    }
  },
  {
    "step": 144,
    "timestamp": "2022-03-01 20:00",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 100.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 7.0,
        "baseline_mean": 4.23,
        "z_score": 14.34,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.79,
        "baseline_mean": 40.89,
        "z_score": 11.49,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 256.01,
        "baseline_mean": 268.67,
        "z_score": -6.83,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.7,
        "baseline_mean": 142.51,
        "z_score": 3.61,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.85,
        "baseline_mean": 60.77,
        "z_score": -2.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (100.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.7,
      "flow_rate_1": 256.01,
      "pressure_1": 29.2,
      "pressure_4": 41.79,
      "anti_surge_valve_1": 65.3,
      "vibration_1": 9.58,
      "vibration_3": 5.19,
      "vibration_4": 7.0,
      "vibration_5": 3.37,
      "vibration_6": 1.48,
      "axial_displacement_1": -55.1,
      "temperature_26": 58.8,
      "temperature_10": 40.2,
      "temperature_30": 51.1,
      "level_1": 86.6
    }
  },
  {
    "step": 145,
    "timestamp": "2022-03-01 20:05",
    "ground_truth": {
      "fault_code": 3,
      "fault_class": "air_leakage"
    },
    "supervised_inference": {
      "predicted_code": 3,
      "predicted_class": "air_leakage",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 100.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "purple",
        "badge": "AIR LEAKAGE",
        "icon": "\ud83d\udfe3",
        "display_name": "Air Leakage"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 7.01,
        "baseline_mean": 4.23,
        "z_score": 14.42,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.83,
        "baseline_mean": 40.89,
        "z_score": 12.03,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 253.9,
        "baseline_mean": 268.67,
        "z_score": -7.98,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 144.78,
        "baseline_mean": 142.51,
        "z_score": 3.75,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.07,
        "baseline_mean": 60.77,
        "z_score": -2.39,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Air Leakage in Pneumatic Actuator Supply (100.0% Confidence)",
      "severity": "HIGH_ALERT",
      "failed_instrument": "Instrument Air Pneumatic Supply Tubing & ASV Positioner",
      "instrument_tag": "anti_surge_valve_1 (ASV Opening) & vibration_4 (Casing Vib)",
      "direct_rca": "Instrument air supply tubing leak or actuator diaphragm rupture caused pneumatic hold pressure to bleed off, dropping Anti-Surge Valve (anti_surge_valve_1) into bypass opening (66%), collapsing forward gas flow by -7.5\u03c3 and triggering casing acoustic vibration.",
      "business_impact": "15-20% drive motor electrical power wasted recycling gas. Downstream refinery hydrotreater starved of recycle gas.",
      "recommended_action": "Dispatch instrument technician to inspect pneumatic air regulator, check instrument air tubing fittings for audible hiss/leakage, and exercise valve stroke manually from DCS."
    },
    "sensors": {
      "motor_current_1": 144.78,
      "flow_rate_1": 253.9,
      "pressure_1": 29.17,
      "pressure_4": 41.83,
      "anti_surge_valve_1": 65.0,
      "vibration_1": 9.43,
      "vibration_3": 5.05,
      "vibration_4": 7.01,
      "vibration_5": 3.46,
      "vibration_6": 1.48,
      "axial_displacement_1": -47.51,
      "temperature_26": 59.1,
      "temperature_10": 40.4,
      "temperature_30": 51.5,
      "level_1": 86.5
    }
  },
  {
    "step": 146,
    "timestamp": "2022-03-01 20:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.58,
        "baseline_mean": 60.77,
        "z_score": -3.08,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.5,
        "baseline_mean": 1.38,
        "z_score": 2.32,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.19,
        "baseline_mean": 52.93,
        "z_score": -1.92,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.35,
        "baseline_mean": 86.85,
        "z_score": -1.63,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.59,
        "baseline_mean": 142.51,
        "z_score": -1.52,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.59,
      "flow_rate_1": 268.51,
      "pressure_1": 29.2,
      "pressure_4": 40.9,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.41,
      "vibration_3": 5.01,
      "vibration_4": 4.3,
      "vibration_5": 3.33,
      "vibration_6": 1.5,
      "axial_displacement_1": -61.84,
      "temperature_26": 58.6,
      "temperature_10": 39.8,
      "temperature_30": 51.2,
      "level_1": 86.3
    }
  },
  {
    "step": 147,
    "timestamp": "2022-03-01 20:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.78,
        "baseline_mean": 60.77,
        "z_score": -2.79,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.31,
        "baseline_mean": 86.85,
        "z_score": -1.74,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.13,
        "baseline_mean": 3.41,
        "z_score": -1.48,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.64,
        "baseline_mean": 52.93,
        "z_score": -1.42,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -54.02,
        "baseline_mean": 25.05,
        "z_score": -1.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.98,
      "flow_rate_1": 269.0,
      "pressure_1": 29.18,
      "pressure_4": 40.87,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.26,
      "vibration_3": 5.0,
      "vibration_4": 4.43,
      "vibration_5": 3.13,
      "vibration_6": 1.43,
      "axial_displacement_1": -54.02,
      "temperature_26": 58.8,
      "temperature_10": 39.7,
      "temperature_30": 51.6,
      "level_1": 86.3
    }
  },
  {
    "step": 148,
    "timestamp": "2022-03-01 20:20",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.47,
        "baseline_mean": 60.77,
        "z_score": -3.23,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.48,
        "baseline_mean": 1.38,
        "z_score": 1.88,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.18,
        "baseline_mean": 4.89,
        "z_score": 1.86,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.39,
        "baseline_mean": 52.93,
        "z_score": -1.7,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.61,
        "baseline_mean": 9.17,
        "z_score": 1.56,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.31,
      "flow_rate_1": 269.6,
      "pressure_1": 29.18,
      "pressure_4": 40.92,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.61,
      "vibration_3": 5.18,
      "vibration_4": 4.29,
      "vibration_5": 3.2,
      "vibration_6": 1.48,
      "axial_displacement_1": -50.36,
      "temperature_26": 58.5,
      "temperature_10": 39.6,
      "temperature_30": 51.4,
      "level_1": 86.4
    }
  },
  {
    "step": 149,
    "timestamp": "2022-03-01 20:25",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.78,
        "baseline_mean": 60.77,
        "z_score": -2.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -57.97,
        "baseline_mean": 25.05,
        "z_score": -1.37,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 86.44,
        "baseline_mean": 86.85,
        "z_score": -1.34,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.73,
        "baseline_mean": 52.93,
        "z_score": -1.32,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 5.04,
        "baseline_mean": 4.89,
        "z_score": 1.01,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.98,
      "flow_rate_1": 269.62,
      "pressure_1": 29.2,
      "pressure_4": 40.84,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.39,
      "vibration_3": 5.04,
      "vibration_4": 4.17,
      "vibration_5": 3.3,
      "vibration_6": 1.39,
      "axial_displacement_1": -57.97,
      "temperature_26": 58.8,
      "temperature_10": 39.7,
      "temperature_30": 51.7,
      "level_1": 86.4
    }
  },
  {
    "step": 150,
    "timestamp": "2022-03-01 20:30",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.93,
        "baseline_mean": 60.77,
        "z_score": -2.58,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.19,
        "baseline_mean": 142.51,
        "z_score": -2.18,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -74.33,
        "baseline_mean": 25.05,
        "z_score": -1.64,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 271.31,
        "baseline_mean": 268.67,
        "z_score": 1.42,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.68,
        "baseline_mean": 52.93,
        "z_score": -1.37,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.19,
      "flow_rate_1": 271.31,
      "pressure_1": 29.21,
      "pressure_4": 40.81,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.45,
      "vibration_3": 4.93,
      "vibration_4": 4.23,
      "vibration_5": 3.2,
      "vibration_6": 1.38,
      "axial_displacement_1": -74.33,
      "temperature_26": 58.9,
      "temperature_10": 40.7,
      "temperature_30": 51.7,
      "level_1": 86.6
    }
  },
  {
    "step": 151,
    "timestamp": "2022-03-01 20:35",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.81,
        "baseline_mean": 60.77,
        "z_score": -2.75,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.03,
        "baseline_mean": 142.51,
        "z_score": -2.44,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.78,
        "baseline_mean": 9.17,
        "z_score": 2.15,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.45,
        "baseline_mean": 52.93,
        "z_score": -1.63,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.11,
        "baseline_mean": 3.41,
        "z_score": -1.63,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.03,
      "flow_rate_1": 271.31,
      "pressure_1": 29.19,
      "pressure_4": 40.78,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.78,
      "vibration_3": 4.93,
      "vibration_4": 4.02,
      "vibration_5": 3.11,
      "vibration_6": 1.39,
      "axial_displacement_1": -46.67,
      "temperature_26": 58.8,
      "temperature_10": 40.6,
      "temperature_30": 51.4,
      "level_1": 86.7
    }
  },
  {
    "step": 152,
    "timestamp": "2022-03-01 20:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 140.89,
        "baseline_mean": 142.51,
        "z_score": -2.68,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.07,
        "baseline_mean": 60.77,
        "z_score": -2.39,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.81,
        "baseline_mean": 9.17,
        "z_score": 2.28,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.72,
        "baseline_mean": 40.89,
        "z_score": -2.11,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": -67.88,
        "baseline_mean": 25.05,
        "z_score": -1.53,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 140.89,
      "flow_rate_1": 271.47,
      "pressure_1": 29.18,
      "pressure_4": 40.72,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.81,
      "vibration_3": 4.86,
      "vibration_4": 4.2,
      "vibration_5": 3.15,
      "vibration_6": 1.36,
      "axial_displacement_1": -67.88,
      "temperature_26": 59.1,
      "temperature_10": 40.9,
      "temperature_30": 51.7,
      "level_1": 86.8
    }
  },
  {
    "step": 153,
    "timestamp": "2022-03-01 20:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.69,
        "baseline_mean": 40.89,
        "z_score": -2.53,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.52,
        "baseline_mean": 4.89,
        "z_score": -2.33,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.15,
        "baseline_mean": 142.51,
        "z_score": -2.25,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.59,
        "baseline_mean": 60.77,
        "z_score": -1.67,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 29.15,
        "baseline_mean": 29.2,
        "z_score": -1.38,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.15,
      "flow_rate_1": 270.97,
      "pressure_1": 29.15,
      "pressure_4": 40.69,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.4,
      "vibration_3": 4.52,
      "vibration_4": 4.05,
      "vibration_5": 3.24,
      "vibration_6": 1.37,
      "axial_displacement_1": -11.69,
      "temperature_26": 59.6,
      "temperature_10": 42.2,
      "temperature_30": 52.1,
      "level_1": 87.0
    }
  },
  {
    "step": 154,
    "timestamp": "2022-03-01 20:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.55,
        "baseline_mean": 4.89,
        "z_score": -2.16,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.74,
        "baseline_mean": 40.89,
        "z_score": -1.91,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.29,
        "baseline_mean": 1.38,
        "z_score": -1.68,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.62,
        "baseline_mean": 142.51,
        "z_score": -1.47,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.89,
        "baseline_mean": 60.77,
        "z_score": -1.24,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.62,
      "flow_rate_1": 270.93,
      "pressure_1": 29.18,
      "pressure_4": 40.74,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.42,
      "vibration_3": 4.55,
      "vibration_4": 4.0,
      "vibration_5": 3.29,
      "vibration_6": 1.29,
      "axial_displacement_1": -6.64,
      "temperature_26": 59.9,
      "temperature_10": 42.1,
      "temperature_30": 52.4,
      "level_1": 87.0
    }
  },
  {
    "step": 155,
    "timestamp": "2022-03-01 20:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.48,
        "baseline_mean": 4.89,
        "z_score": -2.58,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.94,
        "baseline_mean": 3.41,
        "z_score": -2.54,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.33,
        "baseline_mean": 268.67,
        "z_score": 2.51,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.37,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.72,
        "baseline_mean": 40.89,
        "z_score": -2.15,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.24,
      "flow_rate_1": 273.33,
      "pressure_1": 29.18,
      "pressure_4": 40.72,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.27,
      "vibration_3": 4.48,
      "vibration_4": 3.98,
      "vibration_5": 2.94,
      "vibration_6": 1.26,
      "axial_displacement_1": -29.57,
      "temperature_26": 60.1,
      "temperature_10": 43.2,
      "temperature_30": 52.6,
      "level_1": 87.0
    }
  },
  {
    "step": 156,
    "timestamp": "2022-03-01 21:00",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 2.95,
        "baseline_mean": 3.41,
        "z_score": -2.48,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.24,
        "baseline_mean": 268.67,
        "z_score": 2.46,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.27,
        "baseline_mean": 1.38,
        "z_score": -2.06,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.74,
        "baseline_mean": 40.89,
        "z_score": -1.87,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.64,
        "baseline_mean": 4.89,
        "z_score": -1.61,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.64,
      "flow_rate_1": 273.24,
      "pressure_1": 29.17,
      "pressure_4": 40.74,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.34,
      "vibration_3": 4.64,
      "vibration_4": 3.97,
      "vibration_5": 2.95,
      "vibration_6": 1.27,
      "axial_displacement_1": -3.74,
      "temperature_26": 60.1,
      "temperature_10": 42.5,
      "temperature_30": 52.7,
      "level_1": 87.1
    }
  },
  {
    "step": 157,
    "timestamp": "2022-03-01 21:05",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 99.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 1.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.65,
        "baseline_mean": 40.89,
        "z_score": -2.98,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 140.74,
        "baseline_mean": 142.51,
        "z_score": -2.92,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.4,
        "baseline_mean": 268.67,
        "z_score": 2.55,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.36,
        "baseline_mean": 60.77,
        "z_score": -1.98,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.09,
        "baseline_mean": 3.41,
        "z_score": -1.71,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 140.74,
      "flow_rate_1": 273.4,
      "pressure_1": 29.18,
      "pressure_4": 40.65,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.6,
      "vibration_3": 4.68,
      "vibration_4": 3.91,
      "vibration_5": 3.09,
      "vibration_6": 1.3,
      "axial_displacement_1": 2.48,
      "temperature_26": 59.4,
      "temperature_10": 41.5,
      "temperature_30": 51.8,
      "level_1": 87.2
    }
  },
  {
    "step": 158,
    "timestamp": "2022-03-01 21:10",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 99.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 1.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.63,
        "baseline_mean": 40.89,
        "z_score": -3.24,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 140.74,
        "baseline_mean": 142.51,
        "z_score": -2.93,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.26,
        "baseline_mean": 268.67,
        "z_score": 2.48,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.27,
        "baseline_mean": 1.38,
        "z_score": -2.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.48,
        "baseline_mean": 60.77,
        "z_score": -1.81,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 140.74,
      "flow_rate_1": 273.26,
      "pressure_1": 29.19,
      "pressure_4": 40.63,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.44,
      "vibration_3": 4.62,
      "vibration_4": 4.09,
      "vibration_5": 3.28,
      "vibration_6": 1.27,
      "axial_displacement_1": -30.57,
      "temperature_26": 59.5,
      "temperature_10": 40.8,
      "temperature_30": 51.4,
      "level_1": 87.1
    }
  },
  {
    "step": 159,
    "timestamp": "2022-03-01 21:15",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "vibration_6",
        "name": "Motor Bearing Vibration (\u00b5m)",
        "current_value": 1.24,
        "baseline_mean": 1.38,
        "z_score": -2.81,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.67,
        "baseline_mean": 40.89,
        "z_score": -2.73,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 273.65,
        "baseline_mean": 268.67,
        "z_score": 2.69,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.31,
        "baseline_mean": 142.51,
        "z_score": -1.98,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "vibration_3",
        "name": "Shaft Radial Vibration DE (\u00b5m)",
        "current_value": 4.59,
        "baseline_mean": 4.89,
        "z_score": -1.93,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 141.31,
      "flow_rate_1": 273.65,
      "pressure_1": 29.17,
      "pressure_4": 40.67,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.58,
      "vibration_3": 4.59,
      "vibration_4": 4.1,
      "vibration_5": 3.23,
      "vibration_6": 1.24,
      "axial_displacement_1": -14.52,
      "temperature_26": 59.9,
      "temperature_10": 41.9,
      "temperature_30": 51.8,
      "level_1": 87.4
    }
  },
  {
    "step": 160,
    "timestamp": "2022-03-01 21:20",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 64.0,
      "probabilities": {
        "normal_operation": 35.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 1.0,
        "suction_filter_choke": 64.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 28.72,
        "baseline_mean": 29.2,
        "z_score": -13.61,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.59,
        "baseline_mean": 40.89,
        "z_score": -3.72,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.02,
        "baseline_mean": 3.41,
        "z_score": -2.08,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.49,
        "baseline_mean": 86.85,
        "z_score": 2.06,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.02,
        "baseline_mean": 40.74,
        "z_score": 1.74,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (64.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 141.48,
      "flow_rate_1": 269.49,
      "pressure_1": 28.72,
      "pressure_4": 40.59,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.54,
      "vibration_3": 4.7,
      "vibration_4": 4.12,
      "vibration_5": 3.02,
      "vibration_6": 1.3,
      "axial_displacement_1": -9.92,
      "temperature_26": 60.0,
      "temperature_10": 44.0,
      "temperature_30": 52.1,
      "level_1": 87.5
    }
  },
  {
    "step": 161,
    "timestamp": "2022-03-01 21:25",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 74.0,
      "probabilities": {
        "normal_operation": 26.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 74.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 28.61,
        "baseline_mean": 29.2,
        "z_score": -16.78,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.51,
        "baseline_mean": 40.89,
        "z_score": -4.77,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.59,
        "baseline_mean": 60.77,
        "z_score": -1.66,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.13,
        "baseline_mean": 3.41,
        "z_score": -1.52,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 141.64,
        "baseline_mean": 142.51,
        "z_score": -1.43,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (74.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 141.64,
      "flow_rate_1": 267.1,
      "pressure_1": 28.61,
      "pressure_4": 40.51,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.24,
      "vibration_3": 4.77,
      "vibration_4": 4.09,
      "vibration_5": 3.13,
      "vibration_6": 1.36,
      "axial_displacement_1": -4.14,
      "temperature_26": 59.6,
      "temperature_10": 43.2,
      "temperature_30": 51.8,
      "level_1": 87.2
    }
  },
  {
    "step": 162,
    "timestamp": "2022-03-01 21:30",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 73.0,
      "probabilities": {
        "normal_operation": 27.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 73.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 28.48,
        "baseline_mean": 29.2,
        "z_score": -20.54,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.55,
        "baseline_mean": 40.89,
        "z_score": -4.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "vibration_5",
        "name": "Casing Vibration NDE (mm/s RMS)",
        "current_value": 3.01,
        "baseline_mean": 3.41,
        "z_score": -2.16,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.94,
        "baseline_mean": 40.74,
        "z_score": 1.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 265.7,
        "baseline_mean": 268.67,
        "z_score": -1.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (73.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.26,
      "flow_rate_1": 265.7,
      "pressure_1": 28.48,
      "pressure_4": 40.55,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.42,
      "vibration_3": 4.82,
      "vibration_4": 4.16,
      "vibration_5": 3.01,
      "vibration_6": 1.38,
      "axial_displacement_1": 22.69,
      "temperature_26": 59.7,
      "temperature_10": 43.9,
      "temperature_30": 51.9,
      "level_1": 87.3
    }
  },
  {
    "step": 163,
    "timestamp": "2022-03-01 21:35",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 76.0,
      "probabilities": {
        "normal_operation": 24.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 76.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 28.4,
        "baseline_mean": 29.2,
        "z_score": -22.84,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.54,
        "baseline_mean": 40.89,
        "z_score": -4.41,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 264.31,
        "baseline_mean": 268.67,
        "z_score": -2.35,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.98,
        "baseline_mean": 40.74,
        "z_score": 1.72,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.63,
        "baseline_mean": 9.17,
        "z_score": 1.63,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (76.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.43,
      "flow_rate_1": 264.31,
      "pressure_1": 28.4,
      "pressure_4": 40.54,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.63,
      "vibration_3": 4.86,
      "vibration_4": 3.91,
      "vibration_5": 3.11,
      "vibration_6": 1.42,
      "axial_displacement_1": 52.78,
      "temperature_26": 59.6,
      "temperature_10": 44.0,
      "temperature_30": 51.7,
      "level_1": 87.2
    }
  },
  {
    "step": 164,
    "timestamp": "2022-03-01 21:40",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 84.0,
      "probabilities": {
        "normal_operation": 16.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 84.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 28.26,
        "baseline_mean": 29.2,
        "z_score": -27.06,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.44,
        "baseline_mean": 40.89,
        "z_score": -5.71,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 262.81,
        "baseline_mean": 268.67,
        "z_score": -3.16,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.27,
        "baseline_mean": 60.77,
        "z_score": -2.11,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.4,
        "baseline_mean": 52.93,
        "z_score": -1.69,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (84.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 141.83,
      "flow_rate_1": 262.81,
      "pressure_1": 28.26,
      "pressure_4": 40.44,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.49,
      "vibration_3": 4.85,
      "vibration_4": 3.97,
      "vibration_5": 3.2,
      "vibration_6": 1.41,
      "axial_displacement_1": 72.04,
      "temperature_26": 59.3,
      "temperature_10": 43.7,
      "temperature_30": 51.4,
      "level_1": 87.2
    }
  },
  {
    "step": 165,
    "timestamp": "2022-03-01 21:45",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 87.0,
      "probabilities": {
        "normal_operation": 13.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 87.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 28.09,
        "baseline_mean": 29.2,
        "z_score": -31.86,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.32,
        "baseline_mean": 40.89,
        "z_score": -7.23,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 260.77,
        "baseline_mean": 268.67,
        "z_score": -4.27,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.03,
        "baseline_mean": 60.77,
        "z_score": -2.44,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.13,
        "baseline_mean": 52.93,
        "z_score": -1.98,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (87.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 141.65,
      "flow_rate_1": 260.77,
      "pressure_1": 28.09,
      "pressure_4": 40.32,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.42,
      "vibration_3": 4.87,
      "vibration_4": 4.26,
      "vibration_5": 3.2,
      "vibration_6": 1.44,
      "axial_displacement_1": 33.77,
      "temperature_26": 59.0,
      "temperature_10": 43.2,
      "temperature_30": 51.1,
      "level_1": 87.1
    }
  },
  {
    "step": 166,
    "timestamp": "2022-03-01 21:50",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 99.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.96,
        "baseline_mean": 29.2,
        "z_score": -35.67,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.35,
        "baseline_mean": 40.89,
        "z_score": -6.9,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 259.36,
        "baseline_mean": 268.67,
        "z_score": -5.02,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.8,
        "baseline_mean": 9.17,
        "z_score": 2.22,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.39,
        "baseline_mean": 40.74,
        "z_score": 1.94,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (99.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.31,
      "flow_rate_1": 259.36,
      "pressure_1": 27.96,
      "pressure_4": 40.35,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.8,
      "vibration_3": 4.83,
      "vibration_4": 4.24,
      "vibration_5": 3.3,
      "vibration_6": 1.41,
      "axial_displacement_1": 47.13,
      "temperature_26": 59.4,
      "temperature_10": 44.4,
      "temperature_30": 51.7,
      "level_1": 87.1
    }
  },
  {
    "step": 167,
    "timestamp": "2022-03-01 21:55",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.8,
        "baseline_mean": 29.2,
        "z_score": -40.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.29,
        "baseline_mean": 40.89,
        "z_score": -7.55,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 258.24,
        "baseline_mean": 268.67,
        "z_score": -5.63,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.32,
        "baseline_mean": 40.74,
        "z_score": 2.43,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.7,
        "baseline_mean": 9.17,
        "z_score": 1.87,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 143.04,
      "flow_rate_1": 258.24,
      "pressure_1": 27.8,
      "pressure_4": 40.29,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.7,
      "vibration_3": 5.02,
      "vibration_4": 4.3,
      "vibration_5": 3.36,
      "vibration_6": 1.4,
      "axial_displacement_1": 42.54,
      "temperature_26": 59.5,
      "temperature_10": 45.3,
      "temperature_30": 52.0,
      "level_1": 87.1
    }
  },
  {
    "step": 168,
    "timestamp": "2022-03-01 22:00",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.72,
        "baseline_mean": 29.2,
        "z_score": -42.56,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.31,
        "baseline_mean": 40.89,
        "z_score": -7.38,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 259.65,
        "baseline_mean": 268.67,
        "z_score": -4.87,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.23,
        "baseline_mean": 40.74,
        "z_score": 3.44,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.77,
        "baseline_mean": 9.17,
        "z_score": 2.13,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 143.17,
      "flow_rate_1": 259.65,
      "pressure_1": 27.72,
      "pressure_4": 40.31,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.77,
      "vibration_3": 5.04,
      "vibration_4": 4.48,
      "vibration_5": 3.04,
      "vibration_6": 1.36,
      "axial_displacement_1": 46.29,
      "temperature_26": 59.5,
      "temperature_10": 47.2,
      "temperature_30": 52.4,
      "level_1": 87.3
    }
  },
  {
    "step": 169,
    "timestamp": "2022-03-01 22:05",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 99.0,
      "probabilities": {
        "normal_operation": 1.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 99.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.6,
        "baseline_mean": 29.2,
        "z_score": -45.85,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.31,
        "baseline_mean": 40.89,
        "z_score": -7.29,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 256.69,
        "baseline_mean": 268.67,
        "z_score": -6.47,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 46.35,
        "baseline_mean": 40.74,
        "z_score": 2.98,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "motor_current_1",
        "name": "Motor Operating Current (A)",
        "current_value": 143.95,
        "baseline_mean": 142.51,
        "z_score": 2.38,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (99.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 143.95,
      "flow_rate_1": 256.69,
      "pressure_1": 27.6,
      "pressure_4": 40.31,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.7,
      "vibration_3": 5.23,
      "vibration_4": 4.45,
      "vibration_5": 3.23,
      "vibration_6": 1.41,
      "axial_displacement_1": 34.9,
      "temperature_26": 59.4,
      "temperature_10": 46.4,
      "temperature_30": 52.0,
      "level_1": 87.1
    }
  },
  {
    "step": 170,
    "timestamp": "2022-03-01 22:10",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.46,
        "baseline_mean": 29.2,
        "z_score": -49.94,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.17,
        "baseline_mean": 40.89,
        "z_score": -9.15,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 254.35,
        "baseline_mean": 268.67,
        "z_score": -7.73,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 46.44,
        "baseline_mean": 40.74,
        "z_score": 3.02,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.86,
        "baseline_mean": 9.17,
        "z_score": 2.46,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 143.54,
      "flow_rate_1": 254.35,
      "pressure_1": 27.46,
      "pressure_4": 40.17,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.86,
      "vibration_3": 5.22,
      "vibration_4": 4.39,
      "vibration_5": 3.42,
      "vibration_6": 1.42,
      "axial_displacement_1": 61.0,
      "temperature_26": 59.2,
      "temperature_10": 46.4,
      "temperature_30": 51.8,
      "level_1": 87.0
    }
  },
  {
    "step": 171,
    "timestamp": "2022-03-01 22:15",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.34,
        "baseline_mean": 29.2,
        "z_score": -53.45,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 39.98,
        "baseline_mean": 40.89,
        "z_score": -11.57,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 251.41,
        "baseline_mean": 268.67,
        "z_score": -9.31,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.71,
        "baseline_mean": 60.77,
        "z_score": -2.89,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.6,
        "baseline_mean": 40.74,
        "z_score": 2.58,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.65,
      "flow_rate_1": 251.41,
      "pressure_1": 27.34,
      "pressure_4": 39.98,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.71,
      "vibration_3": 5.06,
      "vibration_4": 4.26,
      "vibration_5": 3.74,
      "vibration_6": 1.41,
      "axial_displacement_1": 144.64,
      "temperature_26": 58.7,
      "temperature_10": 45.6,
      "temperature_30": 51.5,
      "level_1": 86.9
    }
  },
  {
    "step": 172,
    "timestamp": "2022-03-01 22:20",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.21,
        "baseline_mean": 29.2,
        "z_score": -57.06,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 39.9,
        "baseline_mean": 40.89,
        "z_score": -12.55,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 249.82,
        "baseline_mean": 268.67,
        "z_score": -10.17,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.28,
        "baseline_mean": 40.74,
        "z_score": 3.47,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 177.87,
        "baseline_mean": 25.05,
        "z_score": 2.51,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.42,
      "flow_rate_1": 249.82,
      "pressure_1": 27.21,
      "pressure_4": 39.9,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.51,
      "vibration_3": 4.94,
      "vibration_4": 4.16,
      "vibration_5": 3.66,
      "vibration_6": 1.38,
      "axial_displacement_1": 177.87,
      "temperature_26": 59.1,
      "temperature_10": 47.3,
      "temperature_30": 51.9,
      "level_1": 87.2
    }
  },
  {
    "step": 173,
    "timestamp": "2022-03-01 22:25",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.14,
        "baseline_mean": 29.2,
        "z_score": -59.18,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 39.82,
        "baseline_mean": 40.89,
        "z_score": -13.55,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 249.78,
        "baseline_mean": 268.67,
        "z_score": -10.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.67,
        "baseline_mean": 40.74,
        "z_score": 3.68,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.03,
        "baseline_mean": 60.77,
        "z_score": -2.44,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.42,
      "flow_rate_1": 249.78,
      "pressure_1": 27.14,
      "pressure_4": 39.82,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.48,
      "vibration_3": 4.96,
      "vibration_4": 4.15,
      "vibration_5": 3.71,
      "vibration_6": 1.38,
      "axial_displacement_1": 153.62,
      "temperature_26": 59.0,
      "temperature_10": 47.7,
      "temperature_30": 51.7,
      "level_1": 87.2
    }
  },
  {
    "step": 174,
    "timestamp": "2022-03-01 22:30",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 27.0,
        "baseline_mean": 29.2,
        "z_score": -63.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 39.78,
        "baseline_mean": 40.89,
        "z_score": -14.08,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 248.81,
        "baseline_mean": 268.67,
        "z_score": -10.72,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.08,
        "baseline_mean": 40.74,
        "z_score": 3.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.2,
        "baseline_mean": 60.77,
        "z_score": -2.21,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 142.87,
      "flow_rate_1": 248.81,
      "pressure_1": 27.0,
      "pressure_4": 39.78,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.5,
      "vibration_3": 5.05,
      "vibration_4": 4.38,
      "vibration_5": 3.68,
      "vibration_6": 1.4,
      "axial_displacement_1": 156.07,
      "temperature_26": 59.2,
      "temperature_10": 48.1,
      "temperature_30": 51.8,
      "level_1": 87.3
    }
  },
  {
    "step": 175,
    "timestamp": "2022-03-01 22:35",
    "ground_truth": {
      "fault_code": 4,
      "fault_class": "suction_filter_choke"
    },
    "supervised_inference": {
      "predicted_code": 4,
      "predicted_class": "suction_filter_choke",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 0.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 100.0
      },
      "status_theme": {
        "color": "amber",
        "badge": "FILTER CHOKE",
        "icon": "\ud83d\udfe1",
        "display_name": "Suction Filter Choke"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "pressure_1",
        "name": "Suction Header Pressure (kg/cm\u00b2)",
        "current_value": 26.81,
        "baseline_mean": 29.2,
        "z_score": -68.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 39.72,
        "baseline_mean": 40.89,
        "z_score": -14.91,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "flow_rate_1",
        "name": "Forward Gas Flow (m\u00b3/h)",
        "current_value": 247.39,
        "baseline_mean": 268.67,
        "z_score": -11.49,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_10",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 49.58,
        "baseline_mean": 40.74,
        "z_score": 4.69,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 158.93,
        "baseline_mean": 25.05,
        "z_score": 2.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "\u26a0\ufe0f Direct RCA: Suction Strainer Filter Choke (100.0% Confidence)",
      "severity": "WARNING",
      "failed_instrument": "Suction Header Strainer Basket & Mesh Filter",
      "instrument_tag": "pressure_1 (Suction Press) & flow_rate_1 (Flow)",
      "direct_rca": "Suction line strainer basket clogged with particulate debris, collapsing suction header pressure (pressure_1) by -15\u03c3 and starving gas flow, forcing motor into severe thermal head ratio.",
      "business_impact": "Flow restriction forces compressor towards aerodynamic choke boundary and thermally stresses motor stator windings (temperature_10).",
      "recommended_action": "Perform online backwash or switch to standby suction filter basket. Check upstream knockout drum demister pad for fouling."
    },
    "sensors": {
      "motor_current_1": 143.23,
      "flow_rate_1": 247.39,
      "pressure_1": 26.81,
      "pressure_4": 39.72,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.62,
      "vibration_3": 5.07,
      "vibration_4": 4.39,
      "vibration_5": 3.68,
      "vibration_6": 1.4,
      "axial_displacement_1": 158.93,
      "temperature_26": 59.3,
      "temperature_10": 49.6,
      "temperature_30": 51.9,
      "level_1": 87.5
    }
  },
  {
    "step": 176,
    "timestamp": "2022-03-01 22:40",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 97.0,
      "probabilities": {
        "normal_operation": 97.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 3.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 182.81,
        "baseline_mean": 25.05,
        "z_score": 2.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.22,
        "baseline_mean": 60.77,
        "z_score": -2.18,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.46,
        "baseline_mean": 86.85,
        "z_score": 1.97,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.69,
        "baseline_mean": 9.17,
        "z_score": 1.84,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 40.77,
        "baseline_mean": 40.89,
        "z_score": -1.43,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.82,
      "flow_rate_1": 268.14,
      "pressure_1": 29.17,
      "pressure_4": 40.77,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.69,
      "vibration_3": 4.94,
      "vibration_4": 4.05,
      "vibration_5": 3.48,
      "vibration_6": 1.4,
      "axial_displacement_1": 182.81,
      "temperature_26": 59.2,
      "temperature_10": 40.6,
      "temperature_30": 51.7,
      "level_1": 87.5
    }
  },
  {
    "step": 177,
    "timestamp": "2022-03-01 22:45",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 97.5,
      "probabilities": {
        "normal_operation": 97.5,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 2.5,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 205.02,
        "baseline_mean": 25.05,
        "z_score": 2.96,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.61,
        "baseline_mean": 86.85,
        "z_score": 2.46,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.17,
        "baseline_mean": 60.77,
        "z_score": -2.24,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "vibration_1",
        "name": "Shaft Radial Vibration NDE (\u00b5m)",
        "current_value": 9.69,
        "baseline_mean": 9.17,
        "z_score": 1.83,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.98,
        "baseline_mean": 4.23,
        "z_score": -1.25,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.27,
      "flow_rate_1": 268.18,
      "pressure_1": 29.19,
      "pressure_4": 40.93,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.69,
      "vibration_3": 5.08,
      "vibration_4": 3.98,
      "vibration_5": 3.53,
      "vibration_6": 1.43,
      "axial_displacement_1": 205.02,
      "temperature_26": 59.2,
      "temperature_10": 41.2,
      "temperature_30": 52.1,
      "level_1": 87.6
    }
  },
  {
    "step": 178,
    "timestamp": "2022-03-01 22:50",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 201.7,
        "baseline_mean": 25.05,
        "z_score": 2.91,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 58.85,
        "baseline_mean": 60.77,
        "z_score": -2.69,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.58,
        "baseline_mean": 86.85,
        "z_score": 2.36,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.8,
        "baseline_mean": 4.23,
        "z_score": -2.23,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "temperature_30",
        "name": "Lube Oil Supply Temp (\u00b0C)",
        "current_value": 51.92,
        "baseline_mean": 52.93,
        "z_score": -1.12,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 142.68,
      "flow_rate_1": 267.89,
      "pressure_1": 29.19,
      "pressure_4": 40.89,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.47,
      "vibration_3": 4.95,
      "vibration_4": 3.8,
      "vibration_5": 3.5,
      "vibration_6": 1.44,
      "axial_displacement_1": 201.7,
      "temperature_26": 58.9,
      "temperature_10": 40.9,
      "temperature_30": 51.9,
      "level_1": 87.6
    }
  },
  {
    "step": 179,
    "timestamp": "2022-03-01 22:55",
    "ground_truth": {
      "fault_code": 0,
      "fault_class": "normal_operation"
    },
    "supervised_inference": {
      "predicted_code": 0,
      "predicted_class": "normal_operation",
      "confidence": 100.0,
      "probabilities": {
        "normal_operation": 100.0,
        "oil_leakage": 0.0,
        "bearing_failure": 0.0,
        "air_leakage": 0.0,
        "suction_filter_choke": 0.0
      },
      "status_theme": {
        "color": "emerald",
        "badge": "HEALTHY",
        "icon": "\ud83d\udfe2",
        "display_name": "Normal Operation"
      }
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "level_1",
        "name": "Lube Oil Reservoir Level (%)",
        "current_value": 87.74,
        "baseline_mean": 86.85,
        "z_score": 2.89,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "axial_displacement_1",
        "name": "Rotor Axial Float (\u00b5m)",
        "current_value": 199.33,
        "baseline_mean": 25.05,
        "z_score": 2.87,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "vibration_4",
        "name": "Casing Vibration DE (mm/s RMS)",
        "current_value": 3.86,
        "baseline_mean": 4.23,
        "z_score": -1.88,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "temperature_26",
        "name": "Journal Bearing DE Temp (\u00b0C)",
        "current_value": 59.49,
        "baseline_mean": 60.77,
        "z_score": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "pressure_4",
        "name": "Discharge Pressure (kg/cm\u00b2)",
        "current_value": 41.0,
        "baseline_mean": 40.89,
        "z_score": 1.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "headline": "Normal Operating Regime \u2014 All Instruments Calibrated & Healthy",
      "severity": "NOMINAL",
      "failed_instrument": "None (All 15 Supervisory Instruments Healthy)",
      "instrument_tag": "All 15 Sensors Normal",
      "direct_rca": "Steady-state operation. No instrument drift, pneumatic loss, or mechanical degradation detected across any subsystem.",
      "business_impact": "Compressor operating at peak energy efficiency with zero risk of unplanned trip or downtime.",
      "recommended_action": "Routine monitoring. No operator or maintenance intervention required."
    },
    "sensors": {
      "motor_current_1": 143.27,
      "flow_rate_1": 269.4,
      "pressure_1": 29.23,
      "pressure_4": 41.0,
      "anti_surge_valve_1": 70.0,
      "vibration_1": 9.14,
      "vibration_3": 4.83,
      "vibration_4": 3.86,
      "vibration_5": 3.36,
      "vibration_6": 1.38,
      "axial_displacement_1": 199.33,
      "temperature_26": 59.5,
      "temperature_10": 42.7,
      "temperature_30": 52.7,
      "level_1": 87.7
    }
  }
];
