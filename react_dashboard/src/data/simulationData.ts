export const SIMULATION_DATA = [
  {
    "step": 0,
    "timestamp": "2022-03-01 08:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1485,
      "anomaly_severity": -0.1485,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.46,
        "baseline_mean": 1.38,
        "z_score": 1.47,
        "pct_change": 5.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.01,
        "baseline_mean": 4.23,
        "z_score": -1.1,
        "pct_change": -5.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 52.07,
        "baseline_mean": 52.93,
        "z_score": -0.95,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.61,
        "baseline_mean": 86.85,
        "z_score": -0.79,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.0,
        "baseline_mean": 4.89,
        "z_score": 0.7,
        "pct_change": 2.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.3,
      "forward_flow": 267.9,
      "suction_press": 29.19,
      "discharge_press": 40.85,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.32,
      "casing_vib_de": 4.01,
      "bearing_temp": 60.4,
      "stator_temp": 39.5,
      "lube_temp": 52.1
    }
  },
  {
    "step": 1,
    "timestamp": "2022-03-01 08:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1446,
      "anomaly_severity": -0.1446,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.46,
        "baseline_mean": 1.38,
        "z_score": 1.57,
        "pct_change": 5.9,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 266.78,
        "baseline_mean": 268.67,
        "z_score": -1.02,
        "pct_change": -0.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.57,
        "baseline_mean": 86.85,
        "z_score": -0.91,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.02,
        "baseline_mean": 4.89,
        "z_score": 0.88,
        "pct_change": 2.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 52.21,
        "baseline_mean": 52.93,
        "z_score": -0.79,
        "pct_change": -1.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.09,
      "forward_flow": 266.78,
      "suction_press": 29.18,
      "discharge_press": 40.85,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.06,
      "casing_vib_de": 4.14,
      "bearing_temp": 60.7,
      "stator_temp": 39.7,
      "lube_temp": 52.2
    }
  },
  {
    "step": 2,
    "timestamp": "2022-03-01 08:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.136,
      "anomaly_severity": -0.136,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.75,
        "baseline_mean": 9.17,
        "z_score": -1.51,
        "pct_change": -4.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.45,
        "baseline_mean": 1.38,
        "z_score": 1.31,
        "pct_change": 4.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.45,
        "baseline_mean": 4.23,
        "z_score": 1.18,
        "pct_change": 5.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 61.49,
        "baseline_mean": 60.77,
        "z_score": 1.0,
        "pct_change": 1.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 266.98,
        "baseline_mean": 268.67,
        "z_score": -0.91,
        "pct_change": -0.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.58,
      "forward_flow": 266.98,
      "suction_press": 29.17,
      "discharge_press": 40.89,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.75,
      "casing_vib_de": 4.45,
      "bearing_temp": 61.5,
      "stator_temp": 41.8,
      "lube_temp": 53.1
    }
  },
  {
    "step": 3,
    "timestamp": "2022-03-01 08:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.146,
      "anomaly_severity": -0.146,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.14,
        "baseline_mean": 29.2,
        "z_score": -1.66,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.72,
        "baseline_mean": 268.67,
        "z_score": -1.59,
        "pct_change": -1.1,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 61.43,
        "baseline_mean": 60.77,
        "z_score": 0.92,
        "pct_change": 1.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.82,
        "baseline_mean": 40.89,
        "z_score": -0.85,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.96,
        "baseline_mean": 9.17,
        "z_score": -0.77,
        "pct_change": -2.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.25,
      "forward_flow": 265.72,
      "suction_press": 29.14,
      "discharge_press": 40.82,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.96,
      "casing_vib_de": 4.31,
      "bearing_temp": 61.4,
      "stator_temp": 41.3,
      "lube_temp": 53.1
    }
  },
  {
    "step": 4,
    "timestamp": "2022-03-01 08:20",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1465,
      "anomaly_severity": -0.1465,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.14,
        "baseline_mean": 3.41,
        "z_score": -1.45,
        "pct_change": -7.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 61.73,
        "baseline_mean": 60.77,
        "z_score": 1.33,
        "pct_change": 1.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.16,
        "baseline_mean": 29.2,
        "z_score": -1.26,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.84,
        "baseline_mean": 9.17,
        "z_score": -1.17,
        "pct_change": -3.6,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 266.81,
        "baseline_mean": 268.67,
        "z_score": -1.01,
        "pct_change": -0.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.17,
      "forward_flow": 266.81,
      "suction_press": 29.16,
      "discharge_press": 40.86,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.84,
      "casing_vib_de": 4.31,
      "bearing_temp": 61.7,
      "stator_temp": 41.6,
      "lube_temp": 53.5
    }
  },
  {
    "step": 5,
    "timestamp": "2022-03-01 08:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1412,
      "anomaly_severity": -0.1412,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 62.03,
        "baseline_mean": 60.77,
        "z_score": 1.75,
        "pct_change": 2.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 108.04,
        "baseline_mean": 25.05,
        "z_score": 1.37,
        "pct_change": 331.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.15,
        "baseline_mean": 3.41,
        "z_score": -1.36,
        "pct_change": -7.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.83,
        "baseline_mean": 9.17,
        "z_score": -1.21,
        "pct_change": -3.7,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.02,
        "baseline_mean": 52.93,
        "z_score": 1.19,
        "pct_change": 2.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.05,
      "forward_flow": 266.61,
      "suction_press": 29.16,
      "discharge_press": 40.87,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.83,
      "casing_vib_de": 4.38,
      "bearing_temp": 62.0,
      "stator_temp": 42.4,
      "lube_temp": 54.0
    }
  },
  {
    "step": 6,
    "timestamp": "2022-03-01 08:30",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1308,
      "anomaly_severity": -0.1308,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.41,
        "baseline_mean": 9.17,
        "z_score": -2.73,
        "pct_change": -8.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 62.08,
        "baseline_mean": 60.77,
        "z_score": 1.82,
        "pct_change": 2.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.08,
        "baseline_mean": 3.41,
        "z_score": -1.79,
        "pct_change": -9.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.11,
        "baseline_mean": 52.93,
        "z_score": 1.29,
        "pct_change": 2.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.7,
        "baseline_mean": 4.89,
        "z_score": -1.19,
        "pct_change": -3.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.74,
      "forward_flow": 266.71,
      "suction_press": 29.18,
      "discharge_press": 40.9,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.41,
      "casing_vib_de": 4.25,
      "bearing_temp": 62.1,
      "stator_temp": 42.3,
      "lube_temp": 54.1
    }
  },
  {
    "step": 7,
    "timestamp": "2022-03-01 08:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1149,
      "anomaly_severity": -0.1149,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.46,
        "baseline_mean": 9.17,
        "z_score": -2.55,
        "pct_change": -7.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 2.94,
        "baseline_mean": 3.41,
        "z_score": -2.53,
        "pct_change": -13.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 62.12,
        "baseline_mean": 60.77,
        "z_score": 1.89,
        "pct_change": 2.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.4,
        "baseline_mean": 52.93,
        "z_score": 1.6,
        "pct_change": 2.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 117.28,
        "baseline_mean": 25.05,
        "z_score": 1.52,
        "pct_change": 368.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.22,
      "forward_flow": 267.89,
      "suction_press": 29.2,
      "discharge_press": 40.97,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.46,
      "casing_vib_de": 4.27,
      "bearing_temp": 62.1,
      "stator_temp": 43.4,
      "lube_temp": 54.4
    }
  },
  {
    "step": 8,
    "timestamp": "2022-03-01 08:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1461,
      "anomaly_severity": -0.1461,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 141.24,
        "baseline_mean": 25.05,
        "z_score": 1.91,
        "pct_change": 463.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.46,
        "baseline_mean": 1.38,
        "z_score": 1.46,
        "pct_change": 5.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 266.18,
        "baseline_mean": 268.67,
        "z_score": -1.34,
        "pct_change": -0.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.97,
        "baseline_mean": 40.89,
        "z_score": 1.09,
        "pct_change": 0.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 53.67,
        "baseline_mean": 52.93,
        "z_score": 0.81,
        "pct_change": 1.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.58,
      "forward_flow": 266.18,
      "suction_press": 29.21,
      "discharge_press": 40.97,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.96,
      "casing_vib_de": 4.2,
      "bearing_temp": 61.3,
      "stator_temp": 41.5,
      "lube_temp": 53.7
    }
  },
  {
    "step": 9,
    "timestamp": "2022-03-01 08:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1306,
      "anomaly_severity": -0.1306,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 164.93,
        "baseline_mean": 25.05,
        "z_score": 2.3,
        "pct_change": 558.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.36,
        "baseline_mean": 268.67,
        "z_score": -1.79,
        "pct_change": -1.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.47,
        "baseline_mean": 1.38,
        "z_score": 1.76,
        "pct_change": 6.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.12,
        "baseline_mean": 4.89,
        "z_score": 1.48,
        "pct_change": 4.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.54,
        "baseline_mean": 86.85,
        "z_score": -1.0,
        "pct_change": -0.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.33,
      "forward_flow": 265.36,
      "suction_press": 29.22,
      "discharge_press": 40.94,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.1,
      "casing_vib_de": 4.18,
      "bearing_temp": 61.0,
      "stator_temp": 40.1,
      "lube_temp": 53.4
    }
  },
  {
    "step": 10,
    "timestamp": "2022-03-01 08:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0956,
      "anomaly_severity": -0.0956,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 189.9,
        "baseline_mean": 25.05,
        "z_score": 2.71,
        "pct_change": 658.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.0,
        "baseline_mean": 268.67,
        "z_score": -2.52,
        "pct_change": -1.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.21,
        "baseline_mean": 4.89,
        "z_score": 2.09,
        "pct_change": 6.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.49,
        "baseline_mean": 1.38,
        "z_score": 2.02,
        "pct_change": 7.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.5,
        "pct_change": 0.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.41,
      "forward_flow": 264.0,
      "suction_press": 29.25,
      "discharge_press": 41.0,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.51,
      "casing_vib_de": 4.06,
      "bearing_temp": 60.9,
      "stator_temp": 39.3,
      "lube_temp": 53.0
    }
  },
  {
    "step": 11,
    "timestamp": "2022-03-01 08:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0707,
      "anomaly_severity": -0.0707,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.41,
        "pct_change": 0.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.25,
        "baseline_mean": 4.89,
        "z_score": 2.35,
        "pct_change": 7.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.34,
        "baseline_mean": 268.67,
        "z_score": -2.34,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.5,
        "baseline_mean": 1.38,
        "z_score": 2.33,
        "pct_change": 8.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 157.66,
        "baseline_mean": 25.05,
        "z_score": 2.18,
        "pct_change": 529.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.64,
      "forward_flow": 264.34,
      "suction_press": 29.28,
      "discharge_press": 41.04,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.28,
      "casing_vib_de": 4.15,
      "bearing_temp": 60.7,
      "stator_temp": 38.5,
      "lube_temp": 52.6
    }
  },
  {
    "step": 12,
    "timestamp": "2022-03-01 09:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0381,
      "anomaly_severity": -0.0381,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.42,
        "baseline_mean": 268.67,
        "z_score": -3.37,
        "pct_change": -2.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.41,
        "baseline_mean": 4.89,
        "z_score": 3.37,
        "pct_change": 10.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.1,
        "baseline_mean": 40.89,
        "z_score": 2.7,
        "pct_change": 0.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.29,
        "baseline_mean": 29.2,
        "z_score": 2.54,
        "pct_change": 0.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 150.71,
        "baseline_mean": 25.05,
        "z_score": 2.07,
        "pct_change": 501.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.76,
      "forward_flow": 262.42,
      "suction_press": 29.29,
      "discharge_press": 41.1,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.45,
      "casing_vib_de": 4.0,
      "bearing_temp": 60.7,
      "stator_temp": 37.7,
      "lube_temp": 52.9
    }
  },
  {
    "step": 13,
    "timestamp": "2022-03-01 09:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0295,
      "anomaly_severity": -0.0295,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.47,
        "baseline_mean": 4.89,
        "z_score": 3.74,
        "pct_change": 11.9,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.23,
        "baseline_mean": 268.67,
        "z_score": -3.48,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.91,
        "baseline_mean": 3.41,
        "z_score": 2.75,
        "pct_change": 14.9,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.29,
        "baseline_mean": 29.2,
        "z_score": 2.72,
        "pct_change": 0.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.17,
        "baseline_mean": 40.74,
        "z_score": -2.43,
        "pct_change": -11.2,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.22,
      "forward_flow": 262.23,
      "suction_press": 29.29,
      "discharge_press": 41.02,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.59,
      "casing_vib_de": 4.01,
      "bearing_temp": 60.3,
      "stator_temp": 36.2,
      "lube_temp": 52.3
    }
  },
  {
    "step": 14,
    "timestamp": "2022-03-01 09:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0095,
      "anomaly_severity": -0.0095,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.46,
        "baseline_mean": 268.67,
        "z_score": -3.89,
        "pct_change": -2.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.39,
        "baseline_mean": 4.89,
        "z_score": 3.24,
        "pct_change": 10.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.3,
        "baseline_mean": 29.2,
        "z_score": 2.88,
        "pct_change": 0.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.89,
        "baseline_mean": 3.41,
        "z_score": 2.61,
        "pct_change": 14.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.05,
        "baseline_mean": 40.74,
        "z_score": -2.49,
        "pct_change": -11.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.81,
      "forward_flow": 261.46,
      "suction_press": 29.3,
      "discharge_press": 41.06,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.51,
      "casing_vib_de": 3.82,
      "bearing_temp": 60.3,
      "stator_temp": 36.1,
      "lube_temp": 52.3
    }
  },
  {
    "step": 15,
    "timestamp": "2022-03-01 09:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0345,
      "anomaly_severity": -0.0345,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.9,
        "baseline_mean": 268.67,
        "z_score": -3.65,
        "pct_change": -2.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 35.7,
        "baseline_mean": 40.74,
        "z_score": -2.67,
        "pct_change": -12.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.3,
        "baseline_mean": 4.89,
        "z_score": 2.66,
        "pct_change": 8.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.11,
        "baseline_mean": 86.85,
        "z_score": -2.41,
        "pct_change": -0.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.78,
        "baseline_mean": 4.23,
        "z_score": -2.29,
        "pct_change": -10.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.65,
      "forward_flow": 261.9,
      "suction_press": 29.28,
      "discharge_press": 41.0,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.58,
      "casing_vib_de": 3.78,
      "bearing_temp": 60.3,
      "stator_temp": 35.7,
      "lube_temp": 52.4
    }
  },
  {
    "step": 16,
    "timestamp": "2022-03-01 09:20",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.044,
      "anomaly_severity": -0.044,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.31,
        "baseline_mean": 268.67,
        "z_score": -3.43,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 85.81,
        "baseline_mean": 86.85,
        "z_score": -3.37,
        "pct_change": -1.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.35,
        "baseline_mean": 4.89,
        "z_score": 2.94,
        "pct_change": 9.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 35.32,
        "baseline_mean": 40.74,
        "z_score": -2.87,
        "pct_change": -13.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.85,
        "baseline_mean": 4.23,
        "z_score": -1.94,
        "pct_change": -8.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.11,
      "forward_flow": 262.31,
      "suction_press": 29.23,
      "discharge_press": 40.89,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.5,
      "casing_vib_de": 3.85,
      "bearing_temp": 59.9,
      "stator_temp": 35.3,
      "lube_temp": 51.5
    }
  },
  {
    "step": 17,
    "timestamp": "2022-03-01 09:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0069,
      "anomaly_severity": -0.0069,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 85.7,
        "baseline_mean": 86.85,
        "z_score": -3.74,
        "pct_change": -1.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.49,
        "baseline_mean": 268.67,
        "z_score": -3.34,
        "pct_change": -2.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.41,
        "baseline_mean": 4.89,
        "z_score": 3.33,
        "pct_change": 10.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 34.55,
        "baseline_mean": 40.74,
        "z_score": -3.28,
        "pct_change": -15.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.72,
        "baseline_mean": 4.23,
        "z_score": -2.6,
        "pct_change": -11.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.15,
      "forward_flow": 262.49,
      "suction_press": 29.21,
      "discharge_press": 40.91,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.79,
      "casing_vib_de": 3.72,
      "bearing_temp": 59.4,
      "stator_temp": 34.5,
      "lube_temp": 51.2
    }
  },
  {
    "step": 18,
    "timestamp": "2022-03-01 09:30",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0137,
      "anomaly_severity": -0.0137,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 85.62,
        "baseline_mean": 86.85,
        "z_score": -4.0,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 34.33,
        "baseline_mean": 40.74,
        "z_score": -3.4,
        "pct_change": -15.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.41,
        "baseline_mean": 4.89,
        "z_score": 3.35,
        "pct_change": 10.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.98,
        "baseline_mean": 268.67,
        "z_score": -3.07,
        "pct_change": -2.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.9,
        "baseline_mean": 9.17,
        "z_score": 2.61,
        "pct_change": 8.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.46,
      "forward_flow": 262.98,
      "suction_press": 29.19,
      "discharge_press": 40.9,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.9,
      "casing_vib_de": 3.83,
      "bearing_temp": 59.5,
      "stator_temp": 34.3,
      "lube_temp": 51.3
    }
  },
  {
    "step": 19,
    "timestamp": "2022-03-01 09:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0184,
      "anomaly_severity": -0.0184,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 85.71,
        "baseline_mean": 86.85,
        "z_score": -3.68,
        "pct_change": -1.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 35.02,
        "baseline_mean": 40.74,
        "z_score": -3.03,
        "pct_change": -14.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.68,
        "baseline_mean": 4.23,
        "z_score": -2.82,
        "pct_change": -12.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.48,
        "baseline_mean": 268.67,
        "z_score": -2.8,
        "pct_change": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 188.04,
        "baseline_mean": 25.05,
        "z_score": 2.68,
        "pct_change": 650.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by +0.0\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = -2.8\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.51,
      "forward_flow": 263.48,
      "suction_press": 29.15,
      "discharge_press": 40.86,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.84,
      "casing_vib_de": 3.68,
      "bearing_temp": 59.6,
      "stator_temp": 35.0,
      "lube_temp": 51.4
    }
  },
  {
    "step": 20,
    "timestamp": "2022-03-01 09:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": -0.0177,
      "anomaly_severity": 0.0177,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.47,
        "baseline_mean": 4.23,
        "z_score": -3.92,
        "pct_change": -17.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 85.7,
        "baseline_mean": 86.85,
        "z_score": -3.73,
        "pct_change": -1.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.1,
        "baseline_mean": 268.67,
        "z_score": -3.55,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 34.82,
        "baseline_mean": 40.74,
        "z_score": -3.14,
        "pct_change": -14.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 202.03,
        "baseline_mean": 25.05,
        "z_score": 2.91,
        "pct_change": 706.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -3.5\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = -3.9\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.13,
      "forward_flow": 262.1,
      "suction_press": 29.16,
      "discharge_press": 40.96,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.77,
      "casing_vib_de": 3.47,
      "bearing_temp": 59.7,
      "stator_temp": 34.8,
      "lube_temp": 51.6
    }
  },
  {
    "step": 21,
    "timestamp": "2022-03-01 09:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0229,
      "anomaly_severity": -0.0229,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 243.9,
        "baseline_mean": 25.05,
        "z_score": 3.6,
        "pct_change": 873.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.25,
        "baseline_mean": 268.67,
        "z_score": -3.47,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.63,
        "baseline_mean": 4.23,
        "z_score": -3.11,
        "pct_change": -14.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 34.98,
        "baseline_mean": 40.74,
        "z_score": -3.05,
        "pct_change": -14.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 85.91,
        "baseline_mean": 86.85,
        "z_score": -3.05,
        "pct_change": -1.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -3.5\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = -3.1\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.19,
      "forward_flow": 262.25,
      "suction_press": 29.19,
      "discharge_press": 40.92,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.73,
      "casing_vib_de": 3.63,
      "bearing_temp": 59.6,
      "stator_temp": 35.0,
      "lube_temp": 51.7
    }
  },
  {
    "step": 22,
    "timestamp": "2022-03-01 09:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0766,
      "anomaly_severity": -0.0766,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.0,
        "baseline_mean": 268.67,
        "z_score": -3.06,
        "pct_change": -2.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 203.71,
        "baseline_mean": 25.05,
        "z_score": 2.94,
        "pct_change": 713.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.73,
        "baseline_mean": 4.23,
        "z_score": -2.55,
        "pct_change": -11.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.89,
        "baseline_mean": 40.74,
        "z_score": -2.04,
        "pct_change": -9.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.25,
        "baseline_mean": 86.85,
        "z_score": -1.95,
        "pct_change": -0.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.25,
      "forward_flow": 263.0,
      "suction_press": 29.2,
      "discharge_press": 40.99,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.55,
      "casing_vib_de": 3.73,
      "bearing_temp": 60.0,
      "stator_temp": 36.9,
      "lube_temp": 52.2
    }
  },
  {
    "step": 23,
    "timestamp": "2022-03-01 09:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0599,
      "anomaly_severity": -0.0599,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 211.38,
        "baseline_mean": 25.05,
        "z_score": 3.07,
        "pct_change": 743.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.66,
        "baseline_mean": 4.23,
        "z_score": -2.94,
        "pct_change": -13.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.39,
        "baseline_mean": 268.67,
        "z_score": -2.85,
        "pct_change": -2.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.05,
        "baseline_mean": 3.41,
        "z_score": -1.95,
        "pct_change": -10.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.6,
        "baseline_mean": 9.17,
        "z_score": 1.52,
        "pct_change": 4.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.77,
      "forward_flow": 263.39,
      "suction_press": 29.17,
      "discharge_press": 40.99,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.6,
      "casing_vib_de": 3.66,
      "bearing_temp": 60.3,
      "stator_temp": 38.6,
      "lube_temp": 52.8
    }
  },
  {
    "step": 24,
    "timestamp": "2022-03-01 10:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0385,
      "anomaly_severity": -0.0385,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 258.58,
        "baseline_mean": 25.05,
        "z_score": 3.84,
        "pct_change": 932.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.19,
        "baseline_mean": 268.67,
        "z_score": -3.5,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.69,
        "baseline_mean": 4.23,
        "z_score": -2.77,
        "pct_change": -12.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.21,
        "baseline_mean": 4.89,
        "z_score": 2.07,
        "pct_change": 6.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.04,
        "baseline_mean": 40.89,
        "z_score": 1.93,
        "pct_change": 0.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -3.5\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = -2.8\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.3,
      "forward_flow": 262.19,
      "suction_press": 29.17,
      "discharge_press": 41.04,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.63,
      "casing_vib_de": 3.69,
      "bearing_temp": 60.4,
      "stator_temp": 38.8,
      "lube_temp": 53.0
    }
  },
  {
    "step": 25,
    "timestamp": "2022-03-01 10:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.056,
      "anomaly_severity": -0.056,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 257.95,
        "baseline_mean": 25.05,
        "z_score": 3.83,
        "pct_change": 929.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.82,
        "baseline_mean": 268.67,
        "z_score": -3.7,
        "pct_change": -2.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.7,
        "baseline_mean": 4.23,
        "z_score": -2.74,
        "pct_change": -12.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.12,
        "baseline_mean": 29.2,
        "z_score": -2.24,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.42,
        "baseline_mean": 86.85,
        "z_score": -1.39,
        "pct_change": -0.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.06,
      "forward_flow": 261.82,
      "suction_press": 29.12,
      "discharge_press": 40.89,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.37,
      "casing_vib_de": 3.7,
      "bearing_temp": 60.1,
      "stator_temp": 38.7,
      "lube_temp": 52.5
    }
  },
  {
    "step": 26,
    "timestamp": "2022-03-01 10:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0266,
      "anomaly_severity": -0.0266,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 2.73,
        "baseline_mean": 4.23,
        "z_score": -7.75,
        "pct_change": -35.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 315.34,
        "baseline_mean": 25.05,
        "z_score": 4.78,
        "pct_change": 1158.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.66,
        "baseline_mean": 268.67,
        "z_score": -3.79,
        "pct_change": -2.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.11,
        "baseline_mean": 29.2,
        "z_score": -2.55,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.12,
        "baseline_mean": 3.41,
        "z_score": -1.58,
        "pct_change": -8.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -3.8\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = -7.8\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.39,
      "forward_flow": 261.66,
      "suction_press": 29.11,
      "discharge_press": 40.93,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.4,
      "casing_vib_de": 2.73,
      "bearing_temp": 60.3,
      "stator_temp": 38.7,
      "lube_temp": 52.6
    }
  },
  {
    "step": 27,
    "timestamp": "2022-03-01 10:15",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0484,
      "anomaly_severity": -0.0484,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 325.05,
        "baseline_mean": 25.05,
        "z_score": 4.94,
        "pct_change": 1197.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.23,
        "baseline_mean": 268.67,
        "z_score": -3.48,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.26,
        "baseline_mean": 4.89,
        "z_score": 2.41,
        "pct_change": 7.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.07,
        "baseline_mean": 3.41,
        "z_score": -1.83,
        "pct_change": -9.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.03,
        "baseline_mean": 40.89,
        "z_score": 1.8,
        "pct_change": 0.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.6,
      "forward_flow": 262.23,
      "suction_press": 29.15,
      "discharge_press": 41.03,
      "antisurge_valve": 71.8,
      "radial_vib_nde": 9.36,
      "casing_vib_de": 4.16,
      "bearing_temp": 60.4,
      "stator_temp": 39.0,
      "lube_temp": 52.6
    }
  },
  {
    "step": 28,
    "timestamp": "2022-03-01 10:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0148,
      "anomaly_severity": -0.0148,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 260.08,
        "baseline_mean": 268.67,
        "z_score": -4.64,
        "pct_change": -3.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 304.04,
        "baseline_mean": 25.05,
        "z_score": 4.59,
        "pct_change": 1113.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.43,
        "baseline_mean": 4.89,
        "z_score": 3.46,
        "pct_change": 11.0,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.96,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.51,
        "baseline_mean": 1.38,
        "z_score": 2.53,
        "pct_change": 9.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.34,
      "forward_flow": 260.08,
      "suction_press": 29.1,
      "discharge_press": 40.95,
      "antisurge_valve": 71.6,
      "radial_vib_nde": 9.35,
      "casing_vib_de": 4.31,
      "bearing_temp": 59.5,
      "stator_temp": 36.5,
      "lube_temp": 51.7
    }
  },
  {
    "step": 29,
    "timestamp": "2022-03-01 10:25",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0208,
      "anomaly_severity": -0.0208,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 260.09,
        "baseline_mean": 268.67,
        "z_score": -4.63,
        "pct_change": -3.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 280.07,
        "baseline_mean": 25.05,
        "z_score": 4.2,
        "pct_change": 1017.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.09,
        "baseline_mean": 29.2,
        "z_score": -3.25,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.81,
        "baseline_mean": 4.23,
        "z_score": -2.15,
        "pct_change": -9.8,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.36,
        "baseline_mean": 40.74,
        "z_score": -1.79,
        "pct_change": -8.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -3.2\u03c3 with forward gas flow down by -4.6\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 141.93,
      "forward_flow": 260.09,
      "suction_press": 29.09,
      "discharge_press": 40.88,
      "antisurge_valve": 71.4,
      "radial_vib_nde": 9.4,
      "casing_vib_de": 3.81,
      "bearing_temp": 59.5,
      "stator_temp": 37.4,
      "lube_temp": 51.6
    }
  },
  {
    "step": 30,
    "timestamp": "2022-03-01 10:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0152,
      "anomaly_severity": -0.0152,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 258.74,
        "baseline_mean": 268.67,
        "z_score": -5.36,
        "pct_change": -3.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 263.88,
        "baseline_mean": 25.05,
        "z_score": 3.93,
        "pct_change": 953.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.11,
        "baseline_mean": 29.2,
        "z_score": -2.47,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.75,
        "baseline_mean": 4.23,
        "z_score": -2.46,
        "pct_change": -11.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.49,
        "baseline_mean": 1.38,
        "z_score": 2.2,
        "pct_change": 8.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -2.5\u03c3 with forward gas flow down by -5.4\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 142.24,
      "forward_flow": 258.74,
      "suction_press": 29.11,
      "discharge_press": 40.99,
      "antisurge_valve": 71.2,
      "radial_vib_nde": 9.6,
      "casing_vib_de": 3.75,
      "bearing_temp": 59.4,
      "stator_temp": 36.9,
      "lube_temp": 51.7
    }
  },
  {
    "step": 31,
    "timestamp": "2022-03-01 10:35",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0119,
      "anomaly_severity": -0.0119,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.29,
        "baseline_mean": 4.23,
        "z_score": 5.5,
        "pct_change": 25.2,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 258.79,
        "baseline_mean": 268.67,
        "z_score": -5.34,
        "pct_change": -3.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 242.53,
        "baseline_mean": 25.05,
        "z_score": 3.58,
        "pct_change": 868.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.8,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.05,
        "baseline_mean": 40.89,
        "z_score": 2.07,
        "pct_change": 0.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -5.3\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +5.5\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.08,
      "forward_flow": 258.79,
      "suction_press": 29.1,
      "discharge_press": 41.05,
      "antisurge_valve": 71.0,
      "radial_vib_nde": 9.09,
      "casing_vib_de": 5.29,
      "bearing_temp": 59.9,
      "stator_temp": 38.1,
      "lube_temp": 52.4
    }
  },
  {
    "step": 32,
    "timestamp": "2022-03-01 10:40",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0375,
      "anomaly_severity": -0.0375,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 257.45,
        "baseline_mean": 268.67,
        "z_score": -6.06,
        "pct_change": -4.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 228.18,
        "baseline_mean": 25.05,
        "z_score": 3.34,
        "pct_change": 810.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.93,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.04,
        "baseline_mean": 40.89,
        "z_score": 1.9,
        "pct_change": 0.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.58,
        "baseline_mean": 40.74,
        "z_score": -1.67,
        "pct_change": -7.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -2.9\u03c3 with forward gas flow down by -6.1\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 142.56,
      "forward_flow": 257.45,
      "suction_press": 29.1,
      "discharge_press": 41.04,
      "antisurge_valve": 70.8,
      "radial_vib_nde": 9.43,
      "casing_vib_de": 4.54,
      "bearing_temp": 59.6,
      "stator_temp": 37.6,
      "lube_temp": 52.4
    }
  },
  {
    "step": 33,
    "timestamp": "2022-03-01 10:45",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": -0.0063,
      "anomaly_severity": 0.0063,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 255.86,
        "baseline_mean": 268.67,
        "z_score": -6.92,
        "pct_change": -4.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.38,
        "baseline_mean": 4.23,
        "z_score": 5.96,
        "pct_change": 27.2,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 286.85,
        "baseline_mean": 25.05,
        "z_score": 4.31,
        "pct_change": 1045.0,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.07,
        "baseline_mean": 29.2,
        "z_score": -3.62,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.05,
        "baseline_mean": 40.74,
        "z_score": -2.49,
        "pct_change": -11.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -6.9\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +6.0\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.39,
      "forward_flow": 255.86,
      "suction_press": 29.07,
      "discharge_press": 41.04,
      "antisurge_valve": 70.5,
      "radial_vib_nde": 9.64,
      "casing_vib_de": 5.38,
      "bearing_temp": 59.1,
      "stator_temp": 36.0,
      "lube_temp": 51.7
    }
  },
  {
    "step": 34,
    "timestamp": "2022-03-01 10:50",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.021,
      "anomaly_severity": -0.021,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 255.29,
        "baseline_mean": 268.67,
        "z_score": -7.22,
        "pct_change": -5.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.27,
        "baseline_mean": 4.23,
        "z_score": 5.42,
        "pct_change": 24.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 282.7,
        "baseline_mean": 25.05,
        "z_score": 4.24,
        "pct_change": 1028.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.07,
        "baseline_mean": 29.2,
        "z_score": -3.79,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.07,
        "baseline_mean": 40.89,
        "z_score": 2.29,
        "pct_change": 0.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -7.2\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +5.4\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.72,
      "forward_flow": 255.29,
      "suction_press": 29.07,
      "discharge_press": 41.07,
      "antisurge_valve": 70.3,
      "radial_vib_nde": 9.48,
      "casing_vib_de": 5.27,
      "bearing_temp": 59.6,
      "stator_temp": 36.6,
      "lube_temp": 52.3
    }
  },
  {
    "step": 35,
    "timestamp": "2022-03-01 10:55",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0291,
      "anomaly_severity": -0.0291,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.26,
        "baseline_mean": 4.23,
        "z_score": 10.52,
        "pct_change": 48.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 255.26,
        "baseline_mean": 268.67,
        "z_score": -7.24,
        "pct_change": -5.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 277.2,
        "baseline_mean": 25.05,
        "z_score": 4.15,
        "pct_change": 1006.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.15,
        "baseline_mean": 40.89,
        "z_score": 3.34,
        "pct_change": 0.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.08,
        "baseline_mean": 29.2,
        "z_score": -3.29,
        "pct_change": -0.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -7.2\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +10.5\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.99,
      "forward_flow": 255.26,
      "suction_press": 29.08,
      "discharge_press": 41.15,
      "antisurge_valve": 70.1,
      "radial_vib_nde": 9.56,
      "casing_vib_de": 6.26,
      "bearing_temp": 59.8,
      "stator_temp": 37.4,
      "lube_temp": 52.5
    }
  },
  {
    "step": 36,
    "timestamp": "2022-03-01 11:00",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0064,
      "anomaly_severity": -0.0064,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.01,
        "baseline_mean": 4.23,
        "z_score": 9.24,
        "pct_change": 42.2,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 254.78,
        "baseline_mean": 268.67,
        "z_score": -7.5,
        "pct_change": -5.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.22,
        "baseline_mean": 40.89,
        "z_score": 4.26,
        "pct_change": 0.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 265.21,
        "baseline_mean": 25.05,
        "z_score": 3.95,
        "pct_change": 958.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.75,
        "pct_change": -0.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -7.5\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +9.2\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.02,
      "forward_flow": 254.78,
      "suction_press": 29.1,
      "discharge_press": 41.22,
      "antisurge_valve": 69.9,
      "radial_vib_nde": 9.86,
      "casing_vib_de": 6.01,
      "bearing_temp": 60.0,
      "stator_temp": 37.2,
      "lube_temp": 52.6
    }
  },
  {
    "step": 37,
    "timestamp": "2022-03-01 11:05",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0157,
      "anomaly_severity": -0.0157,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 254.51,
        "baseline_mean": 268.67,
        "z_score": -7.64,
        "pct_change": -5.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.22,
        "baseline_mean": 4.23,
        "z_score": 5.12,
        "pct_change": 23.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 281.43,
        "baseline_mean": 25.05,
        "z_score": 4.22,
        "pct_change": 1023.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.21,
        "baseline_mean": 40.89,
        "z_score": 4.08,
        "pct_change": 0.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 10.08,
        "baseline_mean": 9.17,
        "z_score": 3.23,
        "pct_change": 9.9,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -7.6\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +5.1\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 142.74,
      "forward_flow": 254.51,
      "suction_press": 29.12,
      "discharge_press": 41.21,
      "antisurge_valve": 69.7,
      "radial_vib_nde": 10.08,
      "casing_vib_de": 5.22,
      "bearing_temp": 60.0,
      "stator_temp": 37.4,
      "lube_temp": 52.3
    }
  },
  {
    "step": 38,
    "timestamp": "2022-03-01 11:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0121,
      "anomaly_severity": -0.0121,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.81,
        "baseline_mean": 268.67,
        "z_score": -8.02,
        "pct_change": -5.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.36,
        "baseline_mean": 40.89,
        "z_score": 6.08,
        "pct_change": 1.2,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 296.14,
        "baseline_mean": 25.05,
        "z_score": 4.46,
        "pct_change": 1082.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.08,
        "baseline_mean": 4.23,
        "z_score": 4.43,
        "pct_change": 20.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 10.34,
        "baseline_mean": 9.17,
        "z_score": 4.17,
        "pct_change": 12.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by +0.0\u03c3 with forward gas flow down by -8.0\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 143.67,
      "forward_flow": 253.81,
      "suction_press": 29.14,
      "discharge_press": 41.36,
      "antisurge_valve": 69.5,
      "radial_vib_nde": 10.34,
      "casing_vib_de": 5.08,
      "bearing_temp": 60.3,
      "stator_temp": 37.6,
      "lube_temp": 52.5
    }
  },
  {
    "step": 39,
    "timestamp": "2022-03-01 11:15",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0214,
      "anomaly_severity": -0.0214,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.09,
        "baseline_mean": 4.23,
        "z_score": 9.64,
        "pct_change": 44.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 254.39,
        "baseline_mean": 268.67,
        "z_score": -7.71,
        "pct_change": -5.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.41,
        "baseline_mean": 40.89,
        "z_score": 6.69,
        "pct_change": 1.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 10.43,
        "baseline_mean": 9.17,
        "z_score": 4.5,
        "pct_change": 13.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 277.06,
        "baseline_mean": 25.05,
        "z_score": 4.15,
        "pct_change": 1005.9,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -7.7\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +9.6\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.94,
      "forward_flow": 254.39,
      "suction_press": 29.16,
      "discharge_press": 41.41,
      "antisurge_valve": 69.3,
      "radial_vib_nde": 10.43,
      "casing_vib_de": 6.09,
      "bearing_temp": 60.6,
      "stator_temp": 37.7,
      "lube_temp": 53.0
    }
  },
  {
    "step": 40,
    "timestamp": "2022-03-01 11:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0267,
      "anomaly_severity": -0.0267,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.67,
        "baseline_mean": 268.67,
        "z_score": -8.1,
        "pct_change": -5.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.45,
        "baseline_mean": 40.89,
        "z_score": 7.14,
        "pct_change": 1.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.47,
        "baseline_mean": 4.23,
        "z_score": 6.43,
        "pct_change": 29.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 10.56,
        "baseline_mean": 9.17,
        "z_score": 4.95,
        "pct_change": 15.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 296.27,
        "baseline_mean": 25.05,
        "z_score": 4.46,
        "pct_change": 1082.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -8.1\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +6.4\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.37,
      "forward_flow": 253.67,
      "suction_press": 29.19,
      "discharge_press": 41.45,
      "antisurge_valve": 69.1,
      "radial_vib_nde": 10.56,
      "casing_vib_de": 5.47,
      "bearing_temp": 60.6,
      "stator_temp": 37.8,
      "lube_temp": 53.1
    }
  },
  {
    "step": 41,
    "timestamp": "2022-03-01 11:25",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0487,
      "anomaly_severity": -0.0487,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.74,
        "baseline_mean": 268.67,
        "z_score": -8.06,
        "pct_change": -5.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.47,
        "baseline_mean": 40.89,
        "z_score": 7.37,
        "pct_change": 1.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 305.36,
        "baseline_mean": 25.05,
        "z_score": 4.61,
        "pct_change": 1118.9,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 10.25,
        "baseline_mean": 9.17,
        "z_score": 3.84,
        "pct_change": 11.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.25,
        "baseline_mean": 142.51,
        "z_score": 1.23,
        "pct_change": 0.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.25,
      "forward_flow": 253.74,
      "suction_press": 29.2,
      "discharge_press": 41.47,
      "antisurge_valve": 68.9,
      "radial_vib_nde": 10.25,
      "casing_vib_de": 4.28,
      "bearing_temp": 60.4,
      "stator_temp": 38.7,
      "lube_temp": 53.1
    }
  },
  {
    "step": 42,
    "timestamp": "2022-03-01 11:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0418,
      "anomaly_severity": -0.0418,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 5.9,
        "baseline_mean": 4.23,
        "z_score": 8.69,
        "pct_change": 39.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.08,
        "baseline_mean": 268.67,
        "z_score": -8.42,
        "pct_change": -5.8,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.47,
        "baseline_mean": 40.89,
        "z_score": 7.46,
        "pct_change": 1.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 272.16,
        "baseline_mean": 25.05,
        "z_score": 4.07,
        "pct_change": 986.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.8,
        "baseline_mean": 9.17,
        "z_score": 2.23,
        "pct_change": 6.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.46,
      "forward_flow": 253.08,
      "suction_press": 29.18,
      "discharge_press": 41.47,
      "antisurge_valve": 68.7,
      "radial_vib_nde": 9.8,
      "casing_vib_de": 5.9,
      "bearing_temp": 60.5,
      "stator_temp": 39.8,
      "lube_temp": 53.5
    }
  },
  {
    "step": 43,
    "timestamp": "2022-03-01 11:35",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0391,
      "anomaly_severity": -0.0391,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.73,
        "baseline_mean": 4.23,
        "z_score": 12.98,
        "pct_change": 59.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 252.38,
        "baseline_mean": 268.67,
        "z_score": -8.79,
        "pct_change": -6.1,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.53,
        "baseline_mean": 40.89,
        "z_score": 8.19,
        "pct_change": 1.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 240.65,
        "baseline_mean": 25.05,
        "z_score": 3.55,
        "pct_change": 860.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.93,
        "baseline_mean": 142.51,
        "z_score": 2.35,
        "pct_change": 1.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -8.8\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +13.0\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.93,
      "forward_flow": 252.38,
      "suction_press": 29.19,
      "discharge_press": 41.53,
      "antisurge_valve": 68.5,
      "radial_vib_nde": 9.83,
      "casing_vib_de": 6.73,
      "bearing_temp": 60.4,
      "stator_temp": 38.9,
      "lube_temp": 53.3
    }
  },
  {
    "step": 44,
    "timestamp": "2022-03-01 11:40",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0292,
      "anomaly_severity": -0.0292,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.2,
        "baseline_mean": 4.23,
        "z_score": 10.22,
        "pct_change": 46.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.61,
        "baseline_mean": 40.89,
        "z_score": 9.16,
        "pct_change": 1.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.33,
        "baseline_mean": 268.67,
        "z_score": -8.28,
        "pct_change": -5.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 209.95,
        "baseline_mean": 25.05,
        "z_score": 3.04,
        "pct_change": 738.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.26,
        "baseline_mean": 142.51,
        "z_score": 2.88,
        "pct_change": 1.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -8.3\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +10.2\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 144.26,
      "forward_flow": 253.33,
      "suction_press": 29.2,
      "discharge_press": 41.61,
      "antisurge_valve": 68.2,
      "radial_vib_nde": 9.84,
      "casing_vib_de": 6.2,
      "bearing_temp": 60.2,
      "stator_temp": 38.6,
      "lube_temp": 53.0
    }
  },
  {
    "step": 45,
    "timestamp": "2022-03-01 11:45",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0184,
      "anomaly_severity": -0.0184,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.69,
        "baseline_mean": 40.89,
        "z_score": 10.23,
        "pct_change": 2.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.14,
        "baseline_mean": 4.23,
        "z_score": 9.9,
        "pct_change": 45.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 252.05,
        "baseline_mean": 268.67,
        "z_score": -8.97,
        "pct_change": -6.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 212.77,
        "baseline_mean": 25.05,
        "z_score": 3.09,
        "pct_change": 749.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.15,
        "baseline_mean": 142.51,
        "z_score": 2.71,
        "pct_change": 1.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -9.0\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +9.9\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 144.15,
      "forward_flow": 252.05,
      "suction_press": 29.22,
      "discharge_press": 41.69,
      "antisurge_valve": 68.0,
      "radial_vib_nde": 9.87,
      "casing_vib_de": 6.14,
      "bearing_temp": 59.9,
      "stator_temp": 38.1,
      "lube_temp": 52.8
    }
  },
  {
    "step": 46,
    "timestamp": "2022-03-01 11:50",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0088,
      "anomaly_severity": -0.0088,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.81,
        "baseline_mean": 40.89,
        "z_score": 11.79,
        "pct_change": 2.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.33,
        "baseline_mean": 4.23,
        "z_score": 10.91,
        "pct_change": 49.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 252.62,
        "baseline_mean": 268.67,
        "z_score": -8.67,
        "pct_change": -6.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.86,
        "baseline_mean": 142.51,
        "z_score": 3.88,
        "pct_change": 1.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 190.17,
        "baseline_mean": 25.05,
        "z_score": 2.72,
        "pct_change": 659.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -8.7\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +10.9\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 144.86,
      "forward_flow": 252.62,
      "suction_press": 29.27,
      "discharge_press": 41.81,
      "antisurge_valve": 67.8,
      "radial_vib_nde": 9.84,
      "casing_vib_de": 6.33,
      "bearing_temp": 59.9,
      "stator_temp": 38.3,
      "lube_temp": 52.7
    }
  },
  {
    "step": 47,
    "timestamp": "2022-03-01 11:55",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": -0.0005,
      "anomaly_severity": 0.0005,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 7.76,
        "baseline_mean": 4.23,
        "z_score": 18.29,
        "pct_change": 83.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.8,
        "baseline_mean": 40.89,
        "z_score": 11.61,
        "pct_change": 2.2,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.08,
        "baseline_mean": 268.67,
        "z_score": -8.42,
        "pct_change": -5.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.54,
        "baseline_mean": 1.38,
        "z_score": 3.02,
        "pct_change": 11.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.29,
        "baseline_mean": 142.51,
        "z_score": 2.93,
        "pct_change": 1.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -8.4\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +18.3\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 144.29,
      "forward_flow": 253.08,
      "suction_press": 29.23,
      "discharge_press": 41.8,
      "antisurge_valve": 66.0,
      "radial_vib_nde": 9.87,
      "casing_vib_de": 7.76,
      "bearing_temp": 59.6,
      "stator_temp": 37.1,
      "lube_temp": 52.2
    }
  },
  {
    "step": 48,
    "timestamp": "2022-03-01 12:00",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": -0.0043,
      "anomaly_severity": 0.0043,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 6.97,
        "baseline_mean": 4.23,
        "z_score": 14.23,
        "pct_change": 65.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.87,
        "baseline_mean": 40.89,
        "z_score": 12.46,
        "pct_change": 2.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 252.43,
        "baseline_mean": 268.67,
        "z_score": -8.77,
        "pct_change": -6.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 238.6,
        "baseline_mean": 25.05,
        "z_score": 3.51,
        "pct_change": 852.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.3,
        "baseline_mean": 142.51,
        "z_score": 2.96,
        "pct_change": 1.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -8.8\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +14.2\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 144.3,
      "forward_flow": 252.43,
      "suction_press": 29.24,
      "discharge_press": 41.87,
      "antisurge_valve": 67.3,
      "radial_vib_nde": 9.91,
      "casing_vib_de": 6.97,
      "bearing_temp": 59.7,
      "stator_temp": 37.9,
      "lube_temp": 52.4
    }
  },
  {
    "step": 49,
    "timestamp": "2022-03-01 12:05",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0134,
      "anomaly_severity": -0.0134,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 7.32,
        "baseline_mean": 4.23,
        "z_score": 16.01,
        "pct_change": 73.2,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.92,
        "baseline_mean": 40.89,
        "z_score": 13.17,
        "pct_change": 2.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 251.81,
        "baseline_mean": 268.67,
        "z_score": -9.1,
        "pct_change": -6.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 145.22,
        "baseline_mean": 142.51,
        "z_score": 4.47,
        "pct_change": 1.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 246.38,
        "baseline_mean": 25.05,
        "z_score": 3.64,
        "pct_change": 883.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -9.1\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +16.0\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 145.22,
      "forward_flow": 251.81,
      "suction_press": 29.21,
      "discharge_press": 41.92,
      "antisurge_valve": 67.2,
      "radial_vib_nde": 9.68,
      "casing_vib_de": 7.32,
      "bearing_temp": 60.2,
      "stator_temp": 38.9,
      "lube_temp": 53.0
    }
  },
  {
    "step": 50,
    "timestamp": "2022-03-01 12:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "anti_surge_recycle_jam"
    },
    "ml_inference": {
      "raw_score": 0.0015,
      "anomaly_severity": -0.0015,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 7.13,
        "baseline_mean": 4.23,
        "z_score": 15.01,
        "pct_change": 68.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 42.01,
        "baseline_mean": 40.89,
        "z_score": 14.26,
        "pct_change": 2.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 250.75,
        "baseline_mean": 268.67,
        "z_score": -9.67,
        "pct_change": -6.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 145.54,
        "baseline_mean": 142.51,
        "z_score": 5.01,
        "pct_change": 2.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 230.13,
        "baseline_mean": 25.05,
        "z_score": 3.37,
        "pct_change": 818.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by -9.7\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = +15.0\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 145.54,
      "forward_flow": 250.75,
      "suction_press": 29.21,
      "discharge_press": 42.01,
      "antisurge_valve": 67.0,
      "radial_vib_nde": 9.72,
      "casing_vib_de": 7.13,
      "bearing_temp": 60.2,
      "stator_temp": 38.4,
      "lube_temp": 52.8
    }
  },
  {
    "step": 51,
    "timestamp": "2022-03-01 12:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0396,
      "anomaly_severity": -0.0396,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.42,
        "baseline_mean": 4.89,
        "z_score": 3.45,
        "pct_change": 11.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 196.3,
        "baseline_mean": 25.05,
        "z_score": 2.82,
        "pct_change": 683.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.08,
        "baseline_mean": 142.51,
        "z_score": 2.59,
        "pct_change": 1.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.08,
        "baseline_mean": 40.89,
        "z_score": 2.48,
        "pct_change": 0.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.5,
        "baseline_mean": 1.38,
        "z_score": 2.35,
        "pct_change": 8.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 144.08,
      "forward_flow": 264.95,
      "suction_press": 29.18,
      "discharge_press": 41.08,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.81,
      "casing_vib_de": 4.37,
      "bearing_temp": 60.0,
      "stator_temp": 39.2,
      "lube_temp": 52.7
    }
  },
  {
    "step": 52,
    "timestamp": "2022-03-01 12:20",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0117,
      "anomaly_severity": -0.0117,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.56,
        "baseline_mean": 4.89,
        "z_score": 4.3,
        "pct_change": 13.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.98,
        "baseline_mean": 142.51,
        "z_score": 4.08,
        "pct_change": 1.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.17,
        "baseline_mean": 40.89,
        "z_score": 3.66,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.53,
        "baseline_mean": 1.38,
        "z_score": 2.92,
        "pct_change": 10.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 175.03,
        "baseline_mean": 25.05,
        "z_score": 2.47,
        "pct_change": 598.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +0.0\u03c3 while Journal Bearing Temperature rose by +0.0\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 144.98,
      "forward_flow": 264.52,
      "suction_press": 29.21,
      "discharge_press": 41.17,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.63,
      "casing_vib_de": 4.35,
      "bearing_temp": 59.9,
      "stator_temp": 37.7,
      "lube_temp": 52.6
    }
  },
  {
    "step": 53,
    "timestamp": "2022-03-01 12:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0669,
      "anomaly_severity": -0.0669,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.19,
        "baseline_mean": 40.89,
        "z_score": 3.82,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.61,
        "baseline_mean": 142.51,
        "z_score": 3.47,
        "pct_change": 1.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.34,
        "baseline_mean": 4.89,
        "z_score": 2.9,
        "pct_change": 9.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 143.39,
        "baseline_mean": 25.05,
        "z_score": 1.95,
        "pct_change": 472.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.94,
        "baseline_mean": 268.67,
        "z_score": -1.48,
        "pct_change": -1.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 144.61,
      "forward_flow": 265.94,
      "suction_press": 29.23,
      "discharge_press": 41.19,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.3,
      "casing_vib_de": 4.39,
      "bearing_temp": 60.6,
      "stator_temp": 39.8,
      "lube_temp": 53.6
    }
  },
  {
    "step": 54,
    "timestamp": "2022-03-01 12:30",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0576,
      "anomaly_severity": -0.0576,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.38,
        "baseline_mean": 142.51,
        "z_score": 3.08,
        "pct_change": 1.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.1,
        "baseline_mean": 40.89,
        "z_score": 2.73,
        "pct_change": 0.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.5,
        "baseline_mean": 268.67,
        "z_score": -2.25,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.23,
        "baseline_mean": 4.89,
        "z_score": 2.23,
        "pct_change": 7.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": 152.97,
        "baseline_mean": 25.05,
        "z_score": 2.1,
        "pct_change": 510.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 144.38,
      "forward_flow": 264.5,
      "suction_press": 29.23,
      "discharge_press": 41.1,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.15,
      "casing_vib_de": 4.21,
      "bearing_temp": 60.0,
      "stator_temp": 39.1,
      "lube_temp": 53.3
    }
  },
  {
    "step": 55,
    "timestamp": "2022-03-01 12:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.061,
      "anomaly_severity": -0.061,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.4,
        "baseline_mean": 142.51,
        "z_score": 3.11,
        "pct_change": 1.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.26,
        "baseline_mean": 4.89,
        "z_score": 2.41,
        "pct_change": 7.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.05,
        "baseline_mean": 40.89,
        "z_score": 2.03,
        "pct_change": 0.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.48,
        "baseline_mean": 1.38,
        "z_score": 1.85,
        "pct_change": 6.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.36,
        "baseline_mean": 86.85,
        "z_score": -1.58,
        "pct_change": -0.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 144.4,
      "forward_flow": 266.19,
      "suction_press": 29.21,
      "discharge_press": 41.05,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.82,
      "casing_vib_de": 4.25,
      "bearing_temp": 60.1,
      "stator_temp": 38.7,
      "lube_temp": 52.7
    }
  },
  {
    "step": 56,
    "timestamp": "2022-03-01 12:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0765,
      "anomaly_severity": -0.0765,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.82,
        "baseline_mean": 142.51,
        "z_score": 2.16,
        "pct_change": 0.9,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.22,
        "baseline_mean": 4.89,
        "z_score": 2.11,
        "pct_change": 6.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.22,
        "baseline_mean": 86.85,
        "z_score": -2.03,
        "pct_change": -0.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.03,
        "baseline_mean": 268.67,
        "z_score": -1.96,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.47,
        "baseline_mean": 1.38,
        "z_score": 1.79,
        "pct_change": 6.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.82,
      "forward_flow": 265.03,
      "suction_press": 29.21,
      "discharge_press": 40.99,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.86,
      "casing_vib_de": 4.4,
      "bearing_temp": 59.8,
      "stator_temp": 38.1,
      "lube_temp": 52.6
    }
  },
  {
    "step": 57,
    "timestamp": "2022-03-01 12:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0864,
      "anomaly_severity": -0.0864,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.51,
        "baseline_mean": 1.38,
        "z_score": 2.51,
        "pct_change": 9.4,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.8,
        "baseline_mean": 268.67,
        "z_score": -2.09,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.48,
        "baseline_mean": 142.51,
        "z_score": 1.6,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.39,
        "baseline_mean": 86.85,
        "z_score": -1.49,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.76,
        "baseline_mean": 60.77,
        "z_score": -1.42,
        "pct_change": -1.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.48,
      "forward_flow": 264.8,
      "suction_press": 29.19,
      "discharge_press": 40.99,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.9,
      "casing_vib_de": 4.17,
      "bearing_temp": 59.8,
      "stator_temp": 38.9,
      "lube_temp": 52.5
    }
  },
  {
    "step": 58,
    "timestamp": "2022-03-01 12:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0837,
      "anomaly_severity": -0.0837,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.52,
        "baseline_mean": 1.38,
        "z_score": 2.65,
        "pct_change": 9.9,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.21,
        "baseline_mean": 268.67,
        "z_score": -1.87,
        "pct_change": -1.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.88,
        "baseline_mean": 4.23,
        "z_score": -1.79,
        "pct_change": -8.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.65,
        "baseline_mean": 60.77,
        "z_score": -1.58,
        "pct_change": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.39,
        "baseline_mean": 142.51,
        "z_score": 1.45,
        "pct_change": 0.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.39,
      "forward_flow": 265.21,
      "suction_press": 29.17,
      "discharge_press": 40.97,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.9,
      "casing_vib_de": 3.88,
      "bearing_temp": 59.6,
      "stator_temp": 39.4,
      "lube_temp": 52.5
    }
  },
  {
    "step": 59,
    "timestamp": "2022-03-01 12:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0846,
      "anomaly_severity": -0.0846,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.31,
        "baseline_mean": 268.67,
        "z_score": -2.35,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.48,
        "baseline_mean": 1.38,
        "z_score": 1.88,
        "pct_change": 7.0,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.5,
        "baseline_mean": 60.77,
        "z_score": -1.78,
        "pct_change": -2.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.49,
        "baseline_mean": 142.51,
        "z_score": 1.62,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.97,
        "baseline_mean": 4.23,
        "z_score": -1.34,
        "pct_change": -6.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.49,
      "forward_flow": 264.31,
      "suction_press": 29.18,
      "discharge_press": 40.94,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.01,
      "casing_vib_de": 3.97,
      "bearing_temp": 59.5,
      "stator_temp": 39.4,
      "lube_temp": 52.5
    }
  },
  {
    "step": 60,
    "timestamp": "2022-03-01 13:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0747,
      "anomaly_severity": -0.0747,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 144.09,
        "baseline_mean": 142.51,
        "z_score": 2.61,
        "pct_change": 1.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.37,
        "baseline_mean": 60.77,
        "z_score": -1.97,
        "pct_change": -2.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.03,
        "baseline_mean": 268.67,
        "z_score": -1.97,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.13,
        "baseline_mean": 29.2,
        "z_score": -1.95,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.47,
        "baseline_mean": 1.38,
        "z_score": 1.73,
        "pct_change": 6.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 144.09,
      "forward_flow": 265.03,
      "suction_press": 29.13,
      "discharge_press": 40.88,
      "antisurge_valve": 70.8,
      "radial_vib_nde": 9.45,
      "casing_vib_de": 3.92,
      "bearing_temp": 59.4,
      "stator_temp": 39.0,
      "lube_temp": 52.0
    }
  },
  {
    "step": 61,
    "timestamp": "2022-03-01 13:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0365,
      "anomaly_severity": -0.0365,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.65,
        "baseline_mean": 4.23,
        "z_score": -2.97,
        "pct_change": -13.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.76,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 58.92,
        "baseline_mean": 60.77,
        "z_score": -2.6,
        "pct_change": -3.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.98,
        "baseline_mean": 268.67,
        "z_score": -2.53,
        "pct_change": -1.7,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.19,
        "baseline_mean": 4.89,
        "z_score": 1.96,
        "pct_change": 6.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Gas Recycle Bypass & Aerodynamic Shudder",
      "severity": "CRITICAL",
      "cause": "Anti-Surge Valve CCRNHIC0773A.PV is stuck open (Z = +0.0\u03c3). Forward flow collapsed by +0.0\u03c3. High-velocity internal bypass causes casing vibration to jump to ISO Zone D Danger (Z = -3.0\u03c3). Bearing temperatures remain healthy, confirming aerodynamic turbulence rather than bearing seizure.",
      "action": "Immediately verify anti-surge pneumatic actuator and stroke positioner. Do NOT dismantle compressor bearings.",
      "badge": "VALVE_RECYCLE"
    },
    "sensors": {
      "motor_current": 143.19,
      "forward_flow": 263.98,
      "suction_press": 29.1,
      "discharge_press": 40.79,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.65,
      "casing_vib_de": 3.65,
      "bearing_temp": 58.9,
      "stator_temp": 38.1,
      "lube_temp": 51.7
    }
  },
  {
    "step": 62,
    "timestamp": "2022-03-01 13:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0526,
      "anomaly_severity": -0.0526,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.54,
        "baseline_mean": 4.23,
        "z_score": -3.54,
        "pct_change": -16.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.09,
        "baseline_mean": 29.2,
        "z_score": -3.21,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.11,
        "baseline_mean": 60.77,
        "z_score": -2.33,
        "pct_change": -2.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.71,
        "baseline_mean": 40.89,
        "z_score": -2.3,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.46,
        "baseline_mean": 268.67,
        "z_score": -2.27,
        "pct_change": -1.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.51,
      "forward_flow": 264.46,
      "suction_press": 29.09,
      "discharge_press": 40.71,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.28,
      "casing_vib_de": 3.54,
      "bearing_temp": 59.1,
      "stator_temp": 39.4,
      "lube_temp": 52.2
    }
  },
  {
    "step": 63,
    "timestamp": "2022-03-01 13:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0488,
      "anomaly_severity": -0.0488,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.65,
        "baseline_mean": 40.89,
        "z_score": -3.05,
        "pct_change": -0.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.09,
        "baseline_mean": 29.2,
        "z_score": -3.04,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.71,
        "baseline_mean": 4.23,
        "z_score": -2.65,
        "pct_change": -12.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.13,
        "baseline_mean": 268.67,
        "z_score": -2.45,
        "pct_change": -1.7,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.04,
        "baseline_mean": 60.77,
        "z_score": -2.43,
        "pct_change": -2.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.04,
      "forward_flow": 264.13,
      "suction_press": 29.09,
      "discharge_press": 40.65,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.15,
      "casing_vib_de": 3.71,
      "bearing_temp": 59.0,
      "stator_temp": 38.8,
      "lube_temp": 52.2
    }
  },
  {
    "step": 64,
    "timestamp": "2022-03-01 13:20",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0711,
      "anomaly_severity": -0.0711,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.87,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.76,
        "baseline_mean": 4.23,
        "z_score": -2.42,
        "pct_change": -11.1,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.7,
        "baseline_mean": 40.89,
        "z_score": -2.37,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.24,
        "baseline_mean": 268.67,
        "z_score": -1.85,
        "pct_change": -1.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.49,
        "baseline_mean": 60.77,
        "z_score": -1.8,
        "pct_change": -2.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.45,
      "forward_flow": 265.24,
      "suction_press": 29.1,
      "discharge_press": 40.7,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.16,
      "casing_vib_de": 3.76,
      "bearing_temp": 59.5,
      "stator_temp": 39.6,
      "lube_temp": 52.7
    }
  },
  {
    "step": 65,
    "timestamp": "2022-03-01 13:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0578,
      "anomaly_severity": -0.0578,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.81,
        "baseline_mean": 268.67,
        "z_score": -2.63,
        "pct_change": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.11,
        "baseline_mean": 29.2,
        "z_score": -2.61,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.02,
        "baseline_mean": 60.77,
        "z_score": -2.45,
        "pct_change": -2.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.84,
        "baseline_mean": 4.23,
        "z_score": -2.02,
        "pct_change": -9.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.18,
        "baseline_mean": 4.89,
        "z_score": 1.9,
        "pct_change": 6.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.0,
      "forward_flow": 263.81,
      "suction_press": 29.11,
      "discharge_press": 40.79,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.7,
      "casing_vib_de": 3.84,
      "bearing_temp": 59.0,
      "stator_temp": 37.7,
      "lube_temp": 52.2
    }
  },
  {
    "step": 66,
    "timestamp": "2022-03-01 13:30",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.073,
      "anomaly_severity": -0.073,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 58.73,
        "baseline_mean": 60.77,
        "z_score": -2.86,
        "pct_change": -3.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.72,
        "baseline_mean": 4.23,
        "z_score": -2.63,
        "pct_change": -12.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.22,
        "baseline_mean": 268.67,
        "z_score": -2.4,
        "pct_change": -1.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.21,
        "baseline_mean": 4.89,
        "z_score": 2.06,
        "pct_change": 6.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.34,
        "baseline_mean": 40.74,
        "z_score": -1.8,
        "pct_change": -8.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.73,
      "forward_flow": 264.22,
      "suction_press": 29.17,
      "discharge_press": 40.84,
      "antisurge_valve": 70.1,
      "radial_vib_nde": 9.59,
      "casing_vib_de": 3.72,
      "bearing_temp": 58.7,
      "stator_temp": 37.3,
      "lube_temp": 52.0
    }
  },
  {
    "step": 67,
    "timestamp": "2022-03-01 13:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0665,
      "anomaly_severity": -0.0665,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 58.6,
        "baseline_mean": 60.77,
        "z_score": -3.05,
        "pct_change": -3.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.78,
        "baseline_mean": 4.23,
        "z_score": -2.33,
        "pct_change": -10.6,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.55,
        "baseline_mean": 40.74,
        "z_score": -2.22,
        "pct_change": -10.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.81,
        "baseline_mean": 3.41,
        "z_score": 2.2,
        "pct_change": 11.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.63,
        "baseline_mean": 268.67,
        "z_score": -2.18,
        "pct_change": -1.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.37,
      "forward_flow": 264.63,
      "suction_press": 29.2,
      "discharge_press": 40.8,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.72,
      "casing_vib_de": 3.78,
      "bearing_temp": 58.6,
      "stator_temp": 36.6,
      "lube_temp": 51.5
    }
  },
  {
    "step": 68,
    "timestamp": "2022-03-01 13:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.071,
      "anomaly_severity": -0.071,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 58.6,
        "baseline_mean": 60.77,
        "z_score": -3.04,
        "pct_change": -3.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.68,
        "baseline_mean": 4.23,
        "z_score": -2.84,
        "pct_change": -13.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.26,
        "baseline_mean": 268.67,
        "z_score": -2.38,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.82,
        "baseline_mean": 3.41,
        "z_score": 2.26,
        "pct_change": 12.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.5,
        "baseline_mean": 40.74,
        "z_score": -2.25,
        "pct_change": -10.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.64,
      "forward_flow": 264.26,
      "suction_press": 29.18,
      "discharge_press": 40.83,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.59,
      "casing_vib_de": 3.68,
      "bearing_temp": 58.6,
      "stator_temp": 36.5,
      "lube_temp": 51.7
    }
  },
  {
    "step": 69,
    "timestamp": "2022-03-01 13:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0528,
      "anomaly_severity": -0.0528,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.66,
        "baseline_mean": 4.23,
        "z_score": -2.94,
        "pct_change": -13.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.99,
        "baseline_mean": 9.17,
        "z_score": 2.92,
        "pct_change": 8.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 58.93,
        "baseline_mean": 60.77,
        "z_score": -2.59,
        "pct_change": -3.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.21,
        "baseline_mean": 4.89,
        "z_score": 2.04,
        "pct_change": 6.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.04,
        "baseline_mean": 268.67,
        "z_score": -1.96,
        "pct_change": -1.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.88,
      "forward_flow": 265.04,
      "suction_press": 29.2,
      "discharge_press": 40.89,
      "antisurge_valve": 70.4,
      "radial_vib_nde": 9.99,
      "casing_vib_de": 3.66,
      "bearing_temp": 58.9,
      "stator_temp": 37.7,
      "lube_temp": 52.0
    }
  },
  {
    "step": 70,
    "timestamp": "2022-03-01 13:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1069,
      "anomaly_severity": -0.1069,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.7,
        "baseline_mean": 9.17,
        "z_score": 1.88,
        "pct_change": 5.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.29,
        "baseline_mean": 1.38,
        "z_score": -1.79,
        "pct_change": -6.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.52,
        "baseline_mean": 60.77,
        "z_score": -1.76,
        "pct_change": -2.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.89,
        "baseline_mean": 4.23,
        "z_score": -1.74,
        "pct_change": -7.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 266.35,
        "baseline_mean": 268.67,
        "z_score": -1.26,
        "pct_change": -0.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.76,
      "forward_flow": 266.35,
      "suction_press": 29.19,
      "discharge_press": 40.84,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.7,
      "casing_vib_de": 3.89,
      "bearing_temp": 59.5,
      "stator_temp": 38.8,
      "lube_temp": 52.7
    }
  },
  {
    "step": 71,
    "timestamp": "2022-03-01 13:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0788,
      "anomaly_severity": -0.0788,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.69,
        "baseline_mean": 4.23,
        "z_score": -2.77,
        "pct_change": -12.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.99,
        "baseline_mean": 268.67,
        "z_score": -1.99,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.72,
        "baseline_mean": 9.17,
        "z_score": 1.94,
        "pct_change": 5.9,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.47,
        "baseline_mean": 60.77,
        "z_score": -1.82,
        "pct_change": -2.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.69,
        "baseline_mean": 3.41,
        "z_score": 1.52,
        "pct_change": 8.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.0,
      "forward_flow": 264.99,
      "suction_press": 29.16,
      "discharge_press": 40.82,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.72,
      "casing_vib_de": 3.69,
      "bearing_temp": 59.5,
      "stator_temp": 39.0,
      "lube_temp": 52.8
    }
  },
  {
    "step": 72,
    "timestamp": "2022-03-01 14:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0951,
      "anomaly_severity": -0.0951,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.75,
        "baseline_mean": 4.23,
        "z_score": -2.48,
        "pct_change": -11.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.51,
        "baseline_mean": 268.67,
        "z_score": -1.71,
        "pct_change": -1.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.56,
        "baseline_mean": 9.17,
        "z_score": 1.37,
        "pct_change": 4.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.31,
        "baseline_mean": 1.38,
        "z_score": -1.34,
        "pct_change": -5.0,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 59.83,
        "baseline_mean": 60.77,
        "z_score": -1.32,
        "pct_change": -1.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.23,
      "forward_flow": 265.51,
      "suction_press": 29.19,
      "discharge_press": 40.92,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.56,
      "casing_vib_de": 3.75,
      "bearing_temp": 59.8,
      "stator_temp": 39.8,
      "lube_temp": 53.5
    }
  },
  {
    "step": 73,
    "timestamp": "2022-03-01 14:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.057,
      "anomaly_severity": -0.057,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.42,
        "pct_change": -9.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.77,
        "baseline_mean": 4.23,
        "z_score": -2.38,
        "pct_change": -10.9,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.76,
        "baseline_mean": 9.17,
        "z_score": 2.08,
        "pct_change": 6.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.98,
        "baseline_mean": 268.67,
        "z_score": -1.99,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.77,
        "baseline_mean": 3.41,
        "z_score": 1.97,
        "pct_change": 10.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.46,
      "forward_flow": 264.98,
      "suction_press": 29.2,
      "discharge_press": 41.0,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.76,
      "casing_vib_de": 3.77,
      "bearing_temp": 60.4,
      "stator_temp": 39.6,
      "lube_temp": 54.1
    }
  },
  {
    "step": 74,
    "timestamp": "2022-03-01 14:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.099,
      "anomaly_severity": -0.099,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.24,
        "baseline_mean": 1.38,
        "z_score": -2.71,
        "pct_change": -10.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.02,
        "baseline_mean": 268.67,
        "z_score": -1.97,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.76,
        "baseline_mean": 3.41,
        "z_score": 1.92,
        "pct_change": 10.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 9.58,
        "baseline_mean": 9.17,
        "z_score": 1.46,
        "pct_change": 4.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.06,
        "baseline_mean": 4.89,
        "z_score": 1.1,
        "pct_change": 3.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.06,
      "forward_flow": 265.02,
      "suction_press": 29.2,
      "discharge_press": 40.96,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.58,
      "casing_vib_de": 4.04,
      "bearing_temp": 60.2,
      "stator_temp": 39.0,
      "lube_temp": 53.7
    }
  },
  {
    "step": 75,
    "timestamp": "2022-03-01 14:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1104,
      "anomaly_severity": -0.1104,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.27,
        "baseline_mean": 1.38,
        "z_score": -2.19,
        "pct_change": -8.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.77,
        "baseline_mean": 3.41,
        "z_score": 1.99,
        "pct_change": 10.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.63,
        "baseline_mean": 268.67,
        "z_score": -1.64,
        "pct_change": -1.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.11,
        "baseline_mean": 4.89,
        "z_score": 1.43,
        "pct_change": 4.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.08,
        "baseline_mean": 52.93,
        "z_score": 1.26,
        "pct_change": 2.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.89,
      "forward_flow": 265.63,
      "suction_press": 29.18,
      "discharge_press": 40.98,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.46,
      "casing_vib_de": 4.19,
      "bearing_temp": 60.4,
      "stator_temp": 40.0,
      "lube_temp": 54.1
    }
  },
  {
    "step": 76,
    "timestamp": "2022-03-01 14:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0547,
      "anomaly_severity": -0.0547,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 8.45,
        "baseline_mean": 4.89,
        "z_score": 22.88,
        "pct_change": 73.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 13.77,
        "baseline_mean": 9.17,
        "z_score": 16.38,
        "pct_change": 50.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 62.6,
        "baseline_mean": 60.77,
        "z_score": 2.55,
        "pct_change": 3.0,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.67,
        "baseline_mean": 52.93,
        "z_score": 1.91,
        "pct_change": 3.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 265.33,
        "baseline_mean": 268.67,
        "z_score": -1.8,
        "pct_change": -1.2,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.15,
      "forward_flow": 265.33,
      "suction_press": 29.16,
      "discharge_press": 40.85,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 13.77,
      "casing_vib_de": 4.34,
      "bearing_temp": 62.6,
      "stator_temp": 39.9,
      "lube_temp": 54.7
    }
  },
  {
    "step": 77,
    "timestamp": "2022-03-01 14:25",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0106,
      "anomaly_severity": -0.0106,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 9.81,
        "baseline_mean": 4.89,
        "z_score": 31.6,
        "pct_change": 100.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 15.46,
        "baseline_mean": 9.17,
        "z_score": 22.43,
        "pct_change": 68.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 63.07,
        "baseline_mean": 60.77,
        "z_score": 3.22,
        "pct_change": 3.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.1,
        "baseline_mean": 29.2,
        "z_score": -2.82,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.45,
        "baseline_mean": 268.67,
        "z_score": -2.82,
        "pct_change": -1.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +22.4\u03c3 while Journal Bearing Temperature rose by +3.2\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.73,
      "forward_flow": 263.45,
      "suction_press": 29.1,
      "discharge_press": 40.78,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 15.46,
      "casing_vib_de": 4.27,
      "bearing_temp": 63.1,
      "stator_temp": 38.9,
      "lube_temp": 54.7
    }
  },
  {
    "step": 78,
    "timestamp": "2022-03-01 14:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0278,
      "anomaly_severity": 0.0278,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 11.28,
        "baseline_mean": 4.89,
        "z_score": 41.0,
        "pct_change": 130.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 17.14,
        "baseline_mean": 9.17,
        "z_score": 28.43,
        "pct_change": 86.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 63.58,
        "baseline_mean": 60.77,
        "z_score": 3.93,
        "pct_change": 4.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.09,
        "baseline_mean": 268.67,
        "z_score": -3.55,
        "pct_change": -2.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.08,
        "baseline_mean": 29.2,
        "z_score": -3.54,
        "pct_change": -0.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +28.4\u03c3 while Journal Bearing Temperature rose by +3.9\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.34,
      "forward_flow": 262.09,
      "suction_press": 29.08,
      "discharge_press": 40.74,
      "antisurge_valve": 70.4,
      "radial_vib_nde": 17.14,
      "casing_vib_de": 4.22,
      "bearing_temp": 63.6,
      "stator_temp": 37.9,
      "lube_temp": 54.5
    }
  },
  {
    "step": 79,
    "timestamp": "2022-03-01 14:35",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0473,
      "anomaly_severity": 0.0473,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 12.58,
        "baseline_mean": 4.89,
        "z_score": 49.32,
        "pct_change": 157.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 18.46,
        "baseline_mean": 9.17,
        "z_score": 33.13,
        "pct_change": 101.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 64.03,
        "baseline_mean": 60.77,
        "z_score": 4.56,
        "pct_change": 5.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.63,
        "baseline_mean": 268.67,
        "z_score": -3.8,
        "pct_change": -2.6,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 4.1,
        "baseline_mean": 3.41,
        "z_score": 3.74,
        "pct_change": 20.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +33.1\u03c3 while Journal Bearing Temperature rose by +4.6\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 141.44,
      "forward_flow": 261.63,
      "suction_press": 29.13,
      "discharge_press": 40.65,
      "antisurge_valve": 70.5,
      "radial_vib_nde": 18.46,
      "casing_vib_de": 3.96,
      "bearing_temp": 64.0,
      "stator_temp": 37.1,
      "lube_temp": 54.1
    }
  },
  {
    "step": 80,
    "timestamp": "2022-03-01 14:40",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0323,
      "anomaly_severity": 0.0323,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 14.01,
        "baseline_mean": 4.89,
        "z_score": 58.51,
        "pct_change": 186.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 20.02,
        "baseline_mean": 9.17,
        "z_score": 38.69,
        "pct_change": 118.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 64.73,
        "baseline_mean": 60.77,
        "z_score": 5.55,
        "pct_change": 6.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 260.77,
        "baseline_mean": 268.67,
        "z_score": -4.26,
        "pct_change": -2.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.94,
        "baseline_mean": 3.41,
        "z_score": 2.92,
        "pct_change": 15.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +38.7\u03c3 while Journal Bearing Temperature rose by +5.5\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 141.74,
      "forward_flow": 260.77,
      "suction_press": 29.16,
      "discharge_press": 40.73,
      "antisurge_valve": 70.5,
      "radial_vib_nde": 20.02,
      "casing_vib_de": 3.83,
      "bearing_temp": 64.7,
      "stator_temp": 36.6,
      "lube_temp": 54.1
    }
  },
  {
    "step": 81,
    "timestamp": "2022-03-01 14:45",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0424,
      "anomaly_severity": 0.0424,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 15.37,
        "baseline_mean": 4.89,
        "z_score": 67.25,
        "pct_change": 214.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 21.58,
        "baseline_mean": 9.17,
        "z_score": 44.26,
        "pct_change": 135.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 65.53,
        "baseline_mean": 60.77,
        "z_score": 6.67,
        "pct_change": 7.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 260.31,
        "baseline_mean": 268.67,
        "z_score": -4.51,
        "pct_change": -3.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 4.04,
        "baseline_mean": 3.41,
        "z_score": 3.43,
        "pct_change": 18.5,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +44.3\u03c3 while Journal Bearing Temperature rose by +6.7\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 141.49,
      "forward_flow": 260.31,
      "suction_press": 29.15,
      "discharge_press": 40.72,
      "antisurge_valve": 70.9,
      "radial_vib_nde": 21.58,
      "casing_vib_de": 3.97,
      "bearing_temp": 65.5,
      "stator_temp": 36.3,
      "lube_temp": 54.2
    }
  },
  {
    "step": 82,
    "timestamp": "2022-03-01 14:50",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0182,
      "anomaly_severity": 0.0182,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 16.53,
        "baseline_mean": 4.89,
        "z_score": 74.71,
        "pct_change": 238.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 23.28,
        "baseline_mean": 9.17,
        "z_score": 50.32,
        "pct_change": 153.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 66.39,
        "baseline_mean": 60.77,
        "z_score": 7.87,
        "pct_change": 9.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.17,
        "baseline_mean": 268.67,
        "z_score": -4.05,
        "pct_change": -2.8,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.88,
        "baseline_mean": 3.41,
        "z_score": 2.56,
        "pct_change": 13.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +50.3\u03c3 while Journal Bearing Temperature rose by +7.9\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 141.84,
      "forward_flow": 261.17,
      "suction_press": 29.18,
      "discharge_press": 40.77,
      "antisurge_valve": 71.2,
      "radial_vib_nde": 23.28,
      "casing_vib_de": 3.85,
      "bearing_temp": 66.4,
      "stator_temp": 36.6,
      "lube_temp": 54.6
    }
  },
  {
    "step": 83,
    "timestamp": "2022-03-01 14:55",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.021,
      "anomaly_severity": 0.021,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 17.51,
        "baseline_mean": 4.89,
        "z_score": 80.98,
        "pct_change": 258.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 24.67,
        "baseline_mean": 9.17,
        "z_score": 55.25,
        "pct_change": 168.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 68.07,
        "baseline_mean": 60.77,
        "z_score": 10.23,
        "pct_change": 12.0,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.3,
        "baseline_mean": 268.67,
        "z_score": -3.98,
        "pct_change": -2.7,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 55.98,
        "baseline_mean": 52.93,
        "z_score": 3.35,
        "pct_change": 5.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +55.2\u03c3 while Journal Bearing Temperature rose by +10.2\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.29,
      "forward_flow": 261.3,
      "suction_press": 29.15,
      "discharge_press": 40.77,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 24.67,
      "casing_vib_de": 3.93,
      "bearing_temp": 68.1,
      "stator_temp": 38.9,
      "lube_temp": 56.0
    }
  },
  {
    "step": 84,
    "timestamp": "2022-03-01 15:00",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0166,
      "anomaly_severity": 0.0166,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 18.94,
        "baseline_mean": 4.89,
        "z_score": 90.17,
        "pct_change": 287.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 25.95,
        "baseline_mean": 9.17,
        "z_score": 59.84,
        "pct_change": 182.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 68.76,
        "baseline_mean": 60.77,
        "z_score": 11.19,
        "pct_change": 13.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 260.73,
        "baseline_mean": 268.67,
        "z_score": -4.29,
        "pct_change": -3.0,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.71,
        "baseline_mean": 52.93,
        "z_score": 4.14,
        "pct_change": 7.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +59.8\u03c3 while Journal Bearing Temperature rose by +11.2\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.37,
      "forward_flow": 260.73,
      "suction_press": 29.14,
      "discharge_press": 40.77,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 25.95,
      "casing_vib_de": 4.24,
      "bearing_temp": 68.8,
      "stator_temp": 38.4,
      "lube_temp": 56.7
    }
  },
  {
    "step": 85,
    "timestamp": "2022-03-01 15:05",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0131,
      "anomaly_severity": 0.0131,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 20.36,
        "baseline_mean": 4.89,
        "z_score": 99.24,
        "pct_change": 316.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 27.64,
        "baseline_mean": 9.17,
        "z_score": 65.87,
        "pct_change": 201.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 69.51,
        "baseline_mean": 60.77,
        "z_score": 12.24,
        "pct_change": 14.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.83,
        "baseline_mean": 52.93,
        "z_score": 4.27,
        "pct_change": 7.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.61,
        "baseline_mean": 268.67,
        "z_score": -3.81,
        "pct_change": -2.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +65.9\u03c3 while Journal Bearing Temperature rose by +12.2\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.34,
      "forward_flow": 261.61,
      "suction_press": 29.16,
      "discharge_press": 40.78,
      "antisurge_valve": 71.3,
      "radial_vib_nde": 27.64,
      "casing_vib_de": 4.21,
      "bearing_temp": 69.5,
      "stator_temp": 38.6,
      "lube_temp": 56.8
    }
  },
  {
    "step": 86,
    "timestamp": "2022-03-01 15:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0043,
      "anomaly_severity": 0.0043,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 21.76,
        "baseline_mean": 4.89,
        "z_score": 108.27,
        "pct_change": 345.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 29.36,
        "baseline_mean": 9.17,
        "z_score": 72.0,
        "pct_change": 220.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 70.3,
        "baseline_mean": 60.77,
        "z_score": 13.34,
        "pct_change": 15.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.64,
        "baseline_mean": 52.93,
        "z_score": 4.06,
        "pct_change": 7.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.97,
        "baseline_mean": 268.67,
        "z_score": -3.62,
        "pct_change": -2.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +72.0\u03c3 while Journal Bearing Temperature rose by +13.3\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.59,
      "forward_flow": 261.97,
      "suction_press": 29.19,
      "discharge_press": 40.8,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 29.36,
      "casing_vib_de": 4.29,
      "bearing_temp": 70.3,
      "stator_temp": 38.0,
      "lube_temp": 56.6
    }
  },
  {
    "step": 87,
    "timestamp": "2022-03-01 15:15",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0089,
      "anomaly_severity": 0.0089,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 23.05,
        "baseline_mean": 4.89,
        "z_score": 116.55,
        "pct_change": 371.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 31.05,
        "baseline_mean": 9.17,
        "z_score": 78.02,
        "pct_change": 238.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 70.65,
        "baseline_mean": 60.77,
        "z_score": 13.84,
        "pct_change": 16.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.47,
        "baseline_mean": 52.93,
        "z_score": 3.88,
        "pct_change": 6.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.77,
        "baseline_mean": 268.67,
        "z_score": -3.73,
        "pct_change": -2.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +78.0\u03c3 while Journal Bearing Temperature rose by +13.8\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.36,
      "forward_flow": 261.77,
      "suction_press": 29.2,
      "discharge_press": 40.82,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 31.05,
      "casing_vib_de": 4.13,
      "bearing_temp": 70.7,
      "stator_temp": 38.0,
      "lube_temp": 56.5
    }
  },
  {
    "step": 88,
    "timestamp": "2022-03-01 15:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": -0.0051,
      "anomaly_severity": 0.0051,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 24.46,
        "baseline_mean": 4.89,
        "z_score": 125.55,
        "pct_change": 400.4,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 32.82,
        "baseline_mean": 9.17,
        "z_score": 84.34,
        "pct_change": 257.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 71.36,
        "baseline_mean": 60.77,
        "z_score": 14.83,
        "pct_change": 17.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 261.32,
        "baseline_mean": 268.67,
        "z_score": -3.97,
        "pct_change": -2.7,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.43,
        "baseline_mean": 52.93,
        "z_score": 3.84,
        "pct_change": 6.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +84.3\u03c3 while Journal Bearing Temperature rose by +14.8\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.94,
      "forward_flow": 261.32,
      "suction_press": 29.25,
      "discharge_press": 40.87,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 32.82,
      "casing_vib_de": 4.11,
      "bearing_temp": 71.4,
      "stator_temp": 37.9,
      "lube_temp": 56.4
    }
  },
  {
    "step": 89,
    "timestamp": "2022-03-01 15:25",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0191,
      "anomaly_severity": -0.0191,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 25.73,
        "baseline_mean": 4.89,
        "z_score": 133.75,
        "pct_change": 426.6,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 34.42,
        "baseline_mean": 9.17,
        "z_score": 90.02,
        "pct_change": 275.2,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 72.4,
        "baseline_mean": 60.77,
        "z_score": 16.29,
        "pct_change": 19.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.4,
        "baseline_mean": 52.93,
        "z_score": 3.8,
        "pct_change": 6.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.84,
        "baseline_mean": 268.67,
        "z_score": -3.15,
        "pct_change": -2.2,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +90.0\u03c3 while Journal Bearing Temperature rose by +16.3\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.48,
      "forward_flow": 262.84,
      "suction_press": 29.24,
      "discharge_press": 40.82,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 34.42,
      "casing_vib_de": 4.03,
      "bearing_temp": 72.4,
      "stator_temp": 38.3,
      "lube_temp": 56.4
    }
  },
  {
    "step": 90,
    "timestamp": "2022-03-01 15:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0187,
      "anomaly_severity": -0.0187,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 27.04,
        "baseline_mean": 4.89,
        "z_score": 142.16,
        "pct_change": 453.4,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 36.08,
        "baseline_mean": 9.17,
        "z_score": 95.95,
        "pct_change": 293.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 72.8,
        "baseline_mean": 60.77,
        "z_score": 16.86,
        "pct_change": 19.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.02,
        "baseline_mean": 52.93,
        "z_score": 3.38,
        "pct_change": 5.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.92,
        "baseline_mean": 268.67,
        "z_score": -2.57,
        "pct_change": -1.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +96.0\u03c3 while Journal Bearing Temperature rose by +16.9\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.39,
      "forward_flow": 263.92,
      "suction_press": 29.23,
      "discharge_press": 40.79,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 36.08,
      "casing_vib_de": 4.18,
      "bearing_temp": 72.8,
      "stator_temp": 37.8,
      "lube_temp": 56.0
    }
  },
  {
    "step": 91,
    "timestamp": "2022-03-01 15:35",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0207,
      "anomaly_severity": -0.0207,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 28.22,
        "baseline_mean": 4.89,
        "z_score": 149.69,
        "pct_change": 477.4,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 37.52,
        "baseline_mean": 9.17,
        "z_score": 101.11,
        "pct_change": 309.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 74.06,
        "baseline_mean": 60.77,
        "z_score": 18.62,
        "pct_change": 21.9,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.5,
        "baseline_mean": 52.93,
        "z_score": 3.91,
        "pct_change": 6.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.27,
        "baseline_mean": 29.2,
        "z_score": 2.0,
        "pct_change": 0.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +101.1\u03c3 while Journal Bearing Temperature rose by +18.6\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 143.22,
      "forward_flow": 266.62,
      "suction_press": 29.27,
      "discharge_press": 40.88,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 37.52,
      "casing_vib_de": 4.27,
      "bearing_temp": 74.1,
      "stator_temp": 38.6,
      "lube_temp": 56.5
    }
  },
  {
    "step": 92,
    "timestamp": "2022-03-01 15:40",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.02,
      "anomaly_severity": -0.02,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 29.48,
        "baseline_mean": 4.89,
        "z_score": 157.79,
        "pct_change": 503.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 38.86,
        "baseline_mean": 9.17,
        "z_score": 105.86,
        "pct_change": 323.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 74.95,
        "baseline_mean": 60.77,
        "z_score": 19.86,
        "pct_change": 23.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 56.64,
        "baseline_mean": 52.93,
        "z_score": 4.07,
        "pct_change": 7.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.0,
        "baseline_mean": 3.41,
        "z_score": -2.23,
        "pct_change": -12.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +105.9\u03c3 while Journal Bearing Temperature rose by +19.9\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 143.0,
      "forward_flow": 267.79,
      "suction_press": 29.27,
      "discharge_press": 40.88,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 38.86,
      "casing_vib_de": 4.38,
      "bearing_temp": 74.9,
      "stator_temp": 38.2,
      "lube_temp": 56.6
    }
  },
  {
    "step": 93,
    "timestamp": "2022-03-01 15:45",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0141,
      "anomaly_severity": -0.0141,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 30.65,
        "baseline_mean": 4.89,
        "z_score": 165.26,
        "pct_change": 527.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 40.33,
        "baseline_mean": 9.17,
        "z_score": 111.1,
        "pct_change": 339.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 76.11,
        "baseline_mean": 60.77,
        "z_score": 21.48,
        "pct_change": 25.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 57.05,
        "baseline_mean": 52.93,
        "z_score": 4.51,
        "pct_change": 7.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -94.91,
        "baseline_mean": 25.05,
        "z_score": -1.97,
        "pct_change": -478.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +111.1\u03c3 while Journal Bearing Temperature rose by +21.5\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.5,
      "forward_flow": 268.3,
      "suction_press": 29.23,
      "discharge_press": 40.79,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 40.33,
      "casing_vib_de": 4.6,
      "bearing_temp": 76.1,
      "stator_temp": 38.8,
      "lube_temp": 57.0
    }
  },
  {
    "step": 94,
    "timestamp": "2022-03-01 15:50",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0052,
      "anomaly_severity": -0.0052,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 31.82,
        "baseline_mean": 4.89,
        "z_score": 172.76,
        "pct_change": 551.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 41.7,
        "baseline_mean": 9.17,
        "z_score": 116.01,
        "pct_change": 354.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 77.68,
        "baseline_mean": 60.77,
        "z_score": 23.69,
        "pct_change": 27.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 57.85,
        "baseline_mean": 52.93,
        "z_score": 5.4,
        "pct_change": 9.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.33,
        "pct_change": -8.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +116.0\u03c3 while Journal Bearing Temperature rose by +23.7\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.58,
      "forward_flow": 268.23,
      "suction_press": 29.2,
      "discharge_press": 40.8,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 41.7,
      "casing_vib_de": 4.6,
      "bearing_temp": 77.7,
      "stator_temp": 40.3,
      "lube_temp": 57.9
    }
  },
  {
    "step": 95,
    "timestamp": "2022-03-01 15:55",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.019,
      "anomaly_severity": -0.019,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 33.14,
        "baseline_mean": 4.89,
        "z_score": 181.27,
        "pct_change": 578.2,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 43.26,
        "baseline_mean": 9.17,
        "z_score": 121.55,
        "pct_change": 371.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 78.58,
        "baseline_mean": 60.77,
        "z_score": 24.94,
        "pct_change": 29.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 57.99,
        "baseline_mean": 52.93,
        "z_score": 5.55,
        "pct_change": 9.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "pct_change": 8.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +121.5\u03c3 while Journal Bearing Temperature rose by +24.9\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.93,
      "forward_flow": 268.22,
      "suction_press": 29.24,
      "discharge_press": 40.89,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 43.26,
      "casing_vib_de": 4.6,
      "bearing_temp": 78.6,
      "stator_temp": 40.2,
      "lube_temp": 58.0
    }
  },
  {
    "step": 96,
    "timestamp": "2022-03-01 16:00",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0086,
      "anomaly_severity": -0.0086,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 34.37,
        "baseline_mean": 4.89,
        "z_score": 189.15,
        "pct_change": 603.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 44.62,
        "baseline_mean": 9.17,
        "z_score": 126.42,
        "pct_change": 386.5,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 79.68,
        "baseline_mean": 60.77,
        "z_score": 26.49,
        "pct_change": 31.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 58.46,
        "baseline_mean": 52.93,
        "z_score": 6.07,
        "pct_change": 10.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.37,
        "pct_change": 0.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +126.4\u03c3 while Journal Bearing Temperature rose by +26.5\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.89,
      "forward_flow": 268.59,
      "suction_press": 29.28,
      "discharge_press": 40.91,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 44.62,
      "casing_vib_de": 4.6,
      "bearing_temp": 79.7,
      "stator_temp": 40.3,
      "lube_temp": 58.5
    }
  },
  {
    "step": 97,
    "timestamp": "2022-03-01 16:05",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0132,
      "anomaly_severity": -0.0132,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 35.65,
        "baseline_mean": 4.89,
        "z_score": 197.37,
        "pct_change": 629.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 46.31,
        "baseline_mean": 9.17,
        "z_score": 132.45,
        "pct_change": 404.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 80.86,
        "baseline_mean": 60.77,
        "z_score": 28.15,
        "pct_change": 33.1,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 59.0,
        "baseline_mean": 52.93,
        "z_score": 6.65,
        "pct_change": 11.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.32,
        "baseline_mean": 29.2,
        "z_score": 3.57,
        "pct_change": 0.4,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +132.4\u03c3 while Journal Bearing Temperature rose by +28.1\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.45,
      "forward_flow": 268.73,
      "suction_press": 29.32,
      "discharge_press": 40.95,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 46.31,
      "casing_vib_de": 4.6,
      "bearing_temp": 80.9,
      "stator_temp": 40.8,
      "lube_temp": 59.0
    }
  },
  {
    "step": 98,
    "timestamp": "2022-03-01 16:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0165,
      "anomaly_severity": -0.0165,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 36.89,
        "baseline_mean": 4.89,
        "z_score": 205.35,
        "pct_change": 655.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 48.0,
        "baseline_mean": 9.17,
        "z_score": 138.48,
        "pct_change": 423.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 81.81,
        "baseline_mean": 60.77,
        "z_score": 29.47,
        "pct_change": 34.6,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 59.37,
        "baseline_mean": 52.93,
        "z_score": 7.06,
        "pct_change": 12.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.29,
        "baseline_mean": 29.2,
        "z_score": 2.6,
        "pct_change": 0.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +138.5\u03c3 while Journal Bearing Temperature rose by +29.5\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.88,
      "forward_flow": 268.56,
      "suction_press": 29.29,
      "discharge_press": 40.9,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 48.0,
      "casing_vib_de": 4.6,
      "bearing_temp": 81.8,
      "stator_temp": 40.8,
      "lube_temp": 59.4
    }
  },
  {
    "step": 99,
    "timestamp": "2022-03-01 16:15",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0213,
      "anomaly_severity": -0.0213,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 38.2,
        "baseline_mean": 4.89,
        "z_score": 213.72,
        "pct_change": 681.7,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 49.46,
        "baseline_mean": 9.17,
        "z_score": 143.69,
        "pct_change": 439.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 82.79,
        "baseline_mean": 60.77,
        "z_score": 30.84,
        "pct_change": 36.2,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 59.94,
        "baseline_mean": 52.93,
        "z_score": 7.69,
        "pct_change": 13.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.29,
        "pct_change": 0.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +143.7\u03c3 while Journal Bearing Temperature rose by +30.8\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 143.26,
      "forward_flow": 268.18,
      "suction_press": 29.28,
      "discharge_press": 40.87,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 49.46,
      "casing_vib_de": 4.55,
      "bearing_temp": 82.8,
      "stator_temp": 41.7,
      "lube_temp": 59.9
    }
  },
  {
    "step": 100,
    "timestamp": "2022-03-01 16:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "bearing_wear_thermal_friction"
    },
    "ml_inference": {
      "raw_score": 0.0114,
      "anomaly_severity": -0.0114,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 39.39,
        "baseline_mean": 4.89,
        "z_score": 221.37,
        "pct_change": 706.1,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 51.04,
        "baseline_mean": 9.17,
        "z_score": 149.3,
        "pct_change": 456.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 83.8,
        "baseline_mean": 60.77,
        "z_score": 32.27,
        "pct_change": 37.9,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 60.13,
        "baseline_mean": 52.93,
        "z_score": 7.9,
        "pct_change": 13.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.69,
        "baseline_mean": 40.89,
        "z_score": -2.47,
        "pct_change": -0.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\ud83d\udea8 Journal Bearing Wear & Thermal Runaway",
      "severity": "CRITICAL",
      "cause": "Radial shaft vibration climbed by +149.3\u03c3 while Journal Bearing Temperature rose by +32.3\u03c3. Gas pressures and flow remain normal, indicating mechanical sleeve babbit friction or lubrication boundary failure.",
      "action": "Verify lube oil header pressure and supply temperature. Prepare for controlled shutdown to prevent rotor seizure.",
      "badge": "BEARING_FRICTION"
    },
    "sensors": {
      "motor_current": 142.16,
      "forward_flow": 267.1,
      "suction_press": 29.2,
      "discharge_press": 40.69,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 51.04,
      "casing_vib_de": 4.38,
      "bearing_temp": 83.8,
      "stator_temp": 40.7,
      "lube_temp": 60.1
    }
  },
  {
    "step": 101,
    "timestamp": "2022-03-01 16:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0823,
      "anomaly_severity": -0.0823,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.35,
        "baseline_mean": 4.89,
        "z_score": -3.43,
        "pct_change": -10.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 141.08,
        "baseline_mean": 142.51,
        "z_score": -2.36,
        "pct_change": -1.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.73,
        "baseline_mean": 40.89,
        "z_score": -1.98,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.65,
        "baseline_mean": 9.17,
        "z_score": -1.85,
        "pct_change": -5.6,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.1,
        "baseline_mean": 3.41,
        "z_score": -1.64,
        "pct_change": -8.9,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.08,
      "forward_flow": 268.9,
      "suction_press": 29.23,
      "discharge_press": 40.73,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.65,
      "casing_vib_de": 4.5,
      "bearing_temp": 61.4,
      "stator_temp": 42.0,
      "lube_temp": 53.9
    }
  },
  {
    "step": 102,
    "timestamp": "2022-03-01 16:30",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1301,
      "anomaly_severity": -0.1301,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.46,
        "baseline_mean": 4.89,
        "z_score": -2.73,
        "pct_change": -8.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.79,
        "baseline_mean": 9.17,
        "z_score": -1.37,
        "pct_change": -4.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.14,
        "baseline_mean": 52.93,
        "z_score": 1.32,
        "pct_change": 2.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.16,
        "baseline_mean": 3.41,
        "z_score": -1.32,
        "pct_change": -7.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.47,
        "baseline_mean": 4.23,
        "z_score": 1.29,
        "pct_change": 5.9,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.82,
      "forward_flow": 268.64,
      "suction_press": 29.23,
      "discharge_press": 40.8,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.79,
      "casing_vib_de": 4.47,
      "bearing_temp": 61.5,
      "stator_temp": 41.7,
      "lube_temp": 54.1
    }
  },
  {
    "step": 103,
    "timestamp": "2022-03-01 16:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1132,
      "anomaly_severity": -0.1132,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.68,
        "baseline_mean": 40.89,
        "z_score": -2.67,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.53,
        "baseline_mean": 4.89,
        "z_score": -2.26,
        "pct_change": -7.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 141.35,
        "baseline_mean": 142.51,
        "z_score": -1.91,
        "pct_change": -0.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.89,
        "baseline_mean": 9.17,
        "z_score": -1.01,
        "pct_change": -3.1,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 39.21,
        "baseline_mean": 40.74,
        "z_score": -0.81,
        "pct_change": -3.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.35,
      "forward_flow": 267.93,
      "suction_press": 29.21,
      "discharge_press": 40.68,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.89,
      "casing_vib_de": 4.2,
      "bearing_temp": 60.9,
      "stator_temp": 39.2,
      "lube_temp": 52.8
    }
  },
  {
    "step": 104,
    "timestamp": "2022-03-01 16:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.119,
      "anomaly_severity": -0.119,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.68,
        "baseline_mean": 40.89,
        "z_score": -2.65,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 141.54,
        "baseline_mean": 142.51,
        "z_score": -1.59,
        "pct_change": -0.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.65,
        "baseline_mean": 4.89,
        "z_score": -1.53,
        "pct_change": -4.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.28,
        "baseline_mean": 40.74,
        "z_score": -1.3,
        "pct_change": -6.0,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.62,
        "baseline_mean": 86.85,
        "z_score": -0.73,
        "pct_change": -0.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.54,
      "forward_flow": 267.34,
      "suction_press": 29.2,
      "discharge_press": 40.68,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.08,
      "casing_vib_de": 4.12,
      "bearing_temp": 60.6,
      "stator_temp": 38.3,
      "lube_temp": 52.6
    }
  },
  {
    "step": 105,
    "timestamp": "2022-03-01 16:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1001,
      "anomaly_severity": -0.1001,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.68,
        "baseline_mean": 40.89,
        "z_score": -2.62,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 141.2,
        "baseline_mean": 142.51,
        "z_score": -2.16,
        "pct_change": -0.9,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -97.71,
        "baseline_mean": 25.05,
        "z_score": -2.02,
        "pct_change": -490.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.48,
        "baseline_mean": 40.74,
        "z_score": -1.73,
        "pct_change": -8.0,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.24,
        "baseline_mean": 29.2,
        "z_score": 1.06,
        "pct_change": 0.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.2,
      "forward_flow": 267.93,
      "suction_press": 29.24,
      "discharge_press": 40.68,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.44,
      "casing_vib_de": 4.1,
      "bearing_temp": 60.2,
      "stator_temp": 37.5,
      "lube_temp": 52.0
    }
  },
  {
    "step": 106,
    "timestamp": "2022-03-01 16:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1363,
      "anomaly_severity": -0.1363,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -108.46,
        "baseline_mean": 25.05,
        "z_score": -2.2,
        "pct_change": -532.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.75,
        "baseline_mean": 40.89,
        "z_score": -1.69,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.06,
        "baseline_mean": 40.74,
        "z_score": -1.42,
        "pct_change": -6.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.54,
        "baseline_mean": 86.85,
        "z_score": -1.01,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.23,
        "baseline_mean": 29.2,
        "z_score": 0.92,
        "pct_change": 0.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.5,
      "forward_flow": 268.56,
      "suction_press": 29.23,
      "discharge_press": 40.75,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.14,
      "casing_vib_de": 4.25,
      "bearing_temp": 60.4,
      "stator_temp": 38.1,
      "lube_temp": 52.3
    }
  },
  {
    "step": 107,
    "timestamp": "2022-03-01 16:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.129,
      "anomaly_severity": -0.129,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -109.13,
        "baseline_mean": 25.05,
        "z_score": -2.21,
        "pct_change": -535.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.51,
        "baseline_mean": 4.23,
        "z_score": 1.49,
        "pct_change": 6.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.78,
        "baseline_mean": 40.89,
        "z_score": -1.38,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.5,
        "baseline_mean": 40.74,
        "z_score": -1.19,
        "pct_change": -5.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.23,
        "baseline_mean": 29.2,
        "z_score": 0.83,
        "pct_change": 0.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.64,
      "forward_flow": 269.68,
      "suction_press": 29.23,
      "discharge_press": 40.78,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.33,
      "casing_vib_de": 4.51,
      "bearing_temp": 60.4,
      "stator_temp": 38.5,
      "lube_temp": 52.4
    }
  },
  {
    "step": 108,
    "timestamp": "2022-03-01 17:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1338,
      "anomaly_severity": -0.1338,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.5,
        "baseline_mean": 4.23,
        "z_score": 1.43,
        "pct_change": 6.5,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.78,
        "baseline_mean": 40.89,
        "z_score": -1.35,
        "pct_change": -0.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.45,
        "baseline_mean": 40.74,
        "z_score": -1.22,
        "pct_change": -5.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.19,
        "baseline_mean": 142.51,
        "z_score": 1.12,
        "pct_change": 0.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -43.15,
        "baseline_mean": 25.05,
        "z_score": -1.12,
        "pct_change": -272.2,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.19,
      "forward_flow": 269.48,
      "suction_press": 29.23,
      "discharge_press": 40.78,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.26,
      "casing_vib_de": 4.5,
      "bearing_temp": 60.4,
      "stator_temp": 38.4,
      "lube_temp": 52.6
    }
  },
  {
    "step": 109,
    "timestamp": "2022-03-01 17:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1246,
      "anomaly_severity": -0.1246,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "pct_change": 8.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -79.82,
        "baseline_mean": 25.05,
        "z_score": -1.73,
        "pct_change": -418.6,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.53,
        "baseline_mean": 142.51,
        "z_score": 1.68,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.1,
        "baseline_mean": 40.74,
        "z_score": -1.4,
        "pct_change": -6.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 270.48,
        "baseline_mean": 268.67,
        "z_score": 0.97,
        "pct_change": 0.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.53,
      "forward_flow": 270.48,
      "suction_press": 29.21,
      "discharge_press": 40.82,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.24,
      "casing_vib_de": 4.6,
      "bearing_temp": 60.5,
      "stator_temp": 38.1,
      "lube_temp": 52.6
    }
  },
  {
    "step": 110,
    "timestamp": "2022-03-01 17:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1197,
      "anomaly_severity": -0.1197,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "pct_change": 8.8,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -88.62,
        "baseline_mean": 25.05,
        "z_score": -1.87,
        "pct_change": -453.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.69,
        "baseline_mean": 40.74,
        "z_score": -1.62,
        "pct_change": -7.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.42,
        "baseline_mean": 142.51,
        "z_score": 1.5,
        "pct_change": 0.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.77,
        "baseline_mean": 40.89,
        "z_score": -1.5,
        "pct_change": -0.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.42,
      "forward_flow": 269.64,
      "suction_press": 29.17,
      "discharge_press": 40.77,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.04,
      "casing_vib_de": 4.6,
      "bearing_temp": 60.6,
      "stator_temp": 37.7,
      "lube_temp": 52.7
    }
  },
  {
    "step": 111,
    "timestamp": "2022-03-01 17:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.12,
      "anomaly_severity": -0.12,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.19,
        "baseline_mean": 40.74,
        "z_score": -1.88,
        "pct_change": -8.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -81.58,
        "baseline_mean": 25.05,
        "z_score": -1.75,
        "pct_change": -425.6,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.55,
        "baseline_mean": 142.51,
        "z_score": 1.72,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.52,
        "baseline_mean": 4.23,
        "z_score": 1.53,
        "pct_change": 7.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.64,
        "baseline_mean": 3.41,
        "z_score": 1.26,
        "pct_change": 6.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.55,
      "forward_flow": 268.64,
      "suction_press": 29.19,
      "discharge_press": 40.8,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.82,
      "casing_vib_de": 4.52,
      "bearing_temp": 60.7,
      "stator_temp": 37.2,
      "lube_temp": 52.8
    }
  },
  {
    "step": 112,
    "timestamp": "2022-03-01 17:20",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.0949,
      "anomaly_severity": -0.0949,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 36.07,
        "baseline_mean": 40.74,
        "z_score": -2.48,
        "pct_change": -11.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 5.25,
        "baseline_mean": 4.89,
        "z_score": 2.33,
        "pct_change": 7.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.51,
        "baseline_mean": 142.51,
        "z_score": 1.64,
        "pct_change": 0.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.46,
        "baseline_mean": 1.38,
        "z_score": 1.62,
        "pct_change": 6.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -63.65,
        "baseline_mean": 25.05,
        "z_score": -1.46,
        "pct_change": -354.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.51,
      "forward_flow": 268.33,
      "suction_press": 29.21,
      "discharge_press": 40.84,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.0,
      "casing_vib_de": 4.45,
      "bearing_temp": 60.3,
      "stator_temp": 36.1,
      "lube_temp": 52.6
    }
  },
  {
    "step": 113,
    "timestamp": "2022-03-01 17:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1364,
      "anomaly_severity": -0.1364,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -109.62,
        "baseline_mean": 25.05,
        "z_score": -2.22,
        "pct_change": -537.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.6,
        "baseline_mean": 142.51,
        "z_score": 1.79,
        "pct_change": 0.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 37.58,
        "baseline_mean": 40.74,
        "z_score": -1.68,
        "pct_change": -7.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.42,
        "baseline_mean": 4.23,
        "z_score": 0.98,
        "pct_change": 4.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.57,
        "baseline_mean": 3.41,
        "z_score": 0.86,
        "pct_change": 4.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.6,
      "forward_flow": 269.34,
      "suction_press": 29.2,
      "discharge_press": 40.84,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.07,
      "casing_vib_de": 4.42,
      "bearing_temp": 60.7,
      "stator_temp": 37.6,
      "lube_temp": 52.9
    }
  },
  {
    "step": 114,
    "timestamp": "2022-03-01 17:30",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.12,
      "anomaly_severity": -0.12,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -122.36,
        "baseline_mean": 25.05,
        "z_score": -2.43,
        "pct_change": -588.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.84,
        "baseline_mean": 142.51,
        "z_score": 2.19,
        "pct_change": 0.9,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.67,
        "baseline_mean": 9.17,
        "z_score": -1.79,
        "pct_change": -5.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.34,
        "pct_change": 0.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.43,
        "baseline_mean": 4.23,
        "z_score": 1.05,
        "pct_change": 4.8,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.84,
      "forward_flow": 269.41,
      "suction_press": 29.25,
      "discharge_press": 40.97,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.67,
      "casing_vib_de": 4.43,
      "bearing_temp": 61.3,
      "stator_temp": 38.9,
      "lube_temp": 53.3
    }
  },
  {
    "step": 115,
    "timestamp": "2022-03-01 17:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1193,
      "anomaly_severity": -0.1193,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -119.37,
        "baseline_mean": 25.05,
        "z_score": -2.38,
        "pct_change": -576.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.94,
        "baseline_mean": 142.51,
        "z_score": 2.36,
        "pct_change": 1.0,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.61,
        "baseline_mean": 9.17,
        "z_score": -1.99,
        "pct_change": -6.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.5,
        "baseline_mean": 4.23,
        "z_score": 1.44,
        "pct_change": 6.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.31,
        "baseline_mean": 1.38,
        "z_score": -1.44,
        "pct_change": -5.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.94,
      "forward_flow": 271.32,
      "suction_press": 29.23,
      "discharge_press": 40.97,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.61,
      "casing_vib_de": 4.5,
      "bearing_temp": 61.8,
      "stator_temp": 39.9,
      "lube_temp": 53.8
    }
  },
  {
    "step": 116,
    "timestamp": "2022-03-01 17:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1155,
      "anomaly_severity": -0.1155,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.28,
        "baseline_mean": 29.2,
        "z_score": 2.43,
        "pct_change": 0.3,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -122.47,
        "baseline_mean": 25.05,
        "z_score": -2.43,
        "pct_change": -588.9,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.65,
        "baseline_mean": 142.51,
        "z_score": 1.87,
        "pct_change": 0.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 61.92,
        "baseline_mean": 60.77,
        "z_score": 1.61,
        "pct_change": 1.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.75,
        "baseline_mean": 9.17,
        "z_score": -1.5,
        "pct_change": -4.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.65,
      "forward_flow": 270.64,
      "suction_press": 29.28,
      "discharge_press": 40.99,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.75,
      "casing_vib_de": 4.45,
      "bearing_temp": 61.9,
      "stator_temp": 39.8,
      "lube_temp": 53.8
    }
  },
  {
    "step": 117,
    "timestamp": "2022-03-01 17:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1438,
      "anomaly_severity": -0.1438,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -123.52,
        "baseline_mean": 25.05,
        "z_score": -2.44,
        "pct_change": -593.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.32,
        "baseline_mean": 142.51,
        "z_score": 1.33,
        "pct_change": 0.6,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 61.66,
        "baseline_mean": 60.77,
        "z_score": 1.24,
        "pct_change": 1.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.24,
        "baseline_mean": 29.2,
        "z_score": 1.02,
        "pct_change": 0.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 270.45,
        "baseline_mean": 268.67,
        "z_score": 0.96,
        "pct_change": 0.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.32,
      "forward_flow": 270.45,
      "suction_press": 29.24,
      "discharge_press": 40.95,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.94,
      "casing_vib_de": 4.22,
      "bearing_temp": 61.7,
      "stator_temp": 39.2,
      "lube_temp": 53.5
    }
  },
  {
    "step": 118,
    "timestamp": "2022-03-01 17:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1071,
      "anomaly_severity": -0.1071,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -133.45,
        "baseline_mean": 25.05,
        "z_score": -2.61,
        "pct_change": -632.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.27,
        "baseline_mean": 29.2,
        "z_score": 2.16,
        "pct_change": 0.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AA.PV",
        "name": "Radial Vib NDE (um)",
        "current_value": 8.6,
        "baseline_mean": 9.17,
        "z_score": -2.05,
        "pct_change": -6.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.62,
        "baseline_mean": 4.89,
        "z_score": -1.68,
        "pct_change": -5.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0780AA.PV",
        "name": "Journal Bearing Temp (\u00b0C)",
        "current_value": 61.77,
        "baseline_mean": 60.77,
        "z_score": 1.4,
        "pct_change": 1.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.34,
      "forward_flow": 269.44,
      "suction_press": 29.27,
      "discharge_press": 40.98,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.6,
      "casing_vib_de": 4.19,
      "bearing_temp": 61.8,
      "stator_temp": 39.3,
      "lube_temp": 53.8
    }
  },
  {
    "step": 119,
    "timestamp": "2022-03-01 17:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.126,
      "anomaly_severity": -0.126,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -136.4,
        "baseline_mean": 25.05,
        "z_score": -2.66,
        "pct_change": -644.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.27,
        "baseline_mean": 29.2,
        "z_score": 2.07,
        "pct_change": 0.2,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.65,
        "baseline_mean": 4.89,
        "z_score": -1.49,
        "pct_change": -4.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.97,
        "baseline_mean": 40.74,
        "z_score": -0.94,
        "pct_change": -4.3,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.55,
        "baseline_mean": 3.41,
        "z_score": 0.77,
        "pct_change": 4.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.5,
      "forward_flow": 269.06,
      "suction_press": 29.27,
      "discharge_press": 40.92,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.98,
      "casing_vib_de": 4.35,
      "bearing_temp": 61.3,
      "stator_temp": 39.0,
      "lube_temp": 53.5
    }
  },
  {
    "step": 120,
    "timestamp": "2022-03-01 18:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.144,
      "anomaly_severity": -0.144,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -107.28,
        "baseline_mean": 25.05,
        "z_score": -2.18,
        "pct_change": -528.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.24,
        "baseline_mean": 29.2,
        "z_score": 1.24,
        "pct_change": 0.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 143.19,
        "baseline_mean": 142.51,
        "z_score": 1.11,
        "pct_change": 0.5,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.6,
        "baseline_mean": 3.41,
        "z_score": 1.05,
        "pct_change": 5.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 53.79,
        "baseline_mean": 52.93,
        "z_score": 0.94,
        "pct_change": 1.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.19,
      "forward_flow": 268.45,
      "suction_press": 29.24,
      "discharge_press": 40.95,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.99,
      "casing_vib_de": 4.28,
      "bearing_temp": 61.3,
      "stator_temp": 39.5,
      "lube_temp": 53.8
    }
  },
  {
    "step": 121,
    "timestamp": "2022-03-01 18:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1353,
      "anomaly_severity": -0.1353,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -117.46,
        "baseline_mean": 25.05,
        "z_score": -2.35,
        "pct_change": -568.9,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.25,
        "baseline_mean": 29.2,
        "z_score": 1.57,
        "pct_change": 0.2,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.66,
        "baseline_mean": 3.41,
        "z_score": 1.37,
        "pct_change": 7.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.89,
        "baseline_mean": 40.74,
        "z_score": -0.98,
        "pct_change": -4.5,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.96,
        "baseline_mean": 40.89,
        "z_score": 0.97,
        "pct_change": 0.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.06,
      "forward_flow": 268.59,
      "suction_press": 29.25,
      "discharge_press": 40.96,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.14,
      "casing_vib_de": 4.36,
      "bearing_temp": 61.1,
      "stator_temp": 38.9,
      "lube_temp": 53.7
    }
  },
  {
    "step": 122,
    "timestamp": "2022-03-01 18:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1185,
      "anomaly_severity": -0.1185,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -128.09,
        "baseline_mean": 25.05,
        "z_score": -2.52,
        "pct_change": -611.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.74,
        "baseline_mean": 3.41,
        "z_score": 1.79,
        "pct_change": 9.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.43,
        "baseline_mean": 40.74,
        "z_score": -1.22,
        "pct_change": -5.7,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.51,
        "baseline_mean": 86.85,
        "z_score": -1.08,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNIIK001AM1.PV",
        "name": "Motor Current (A)",
        "current_value": 142.99,
        "baseline_mean": 142.51,
        "z_score": 0.79,
        "pct_change": 0.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.99,
      "forward_flow": 268.21,
      "suction_press": 29.21,
      "discharge_press": 40.91,
      "antisurge_valve": 71.4,
      "radial_vib_nde": 9.3,
      "casing_vib_de": 4.22,
      "bearing_temp": 61.0,
      "stator_temp": 38.4,
      "lube_temp": 53.6
    }
  },
  {
    "step": 123,
    "timestamp": "2022-03-01 18:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1373,
      "anomaly_severity": -0.1373,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -95.53,
        "baseline_mean": 25.05,
        "z_score": -1.98,
        "pct_change": -481.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.47,
        "baseline_mean": 4.23,
        "z_score": 1.25,
        "pct_change": 5.7,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.54,
        "baseline_mean": 86.85,
        "z_score": -1.0,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 53.82,
        "baseline_mean": 52.93,
        "z_score": 0.98,
        "pct_change": 1.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 38.95,
        "baseline_mean": 40.74,
        "z_score": -0.95,
        "pct_change": -4.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.86,
      "forward_flow": 268.36,
      "suction_press": 29.18,
      "discharge_press": 40.87,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.2,
      "casing_vib_de": 4.47,
      "bearing_temp": 61.3,
      "stator_temp": 39.0,
      "lube_temp": 53.8
    }
  },
  {
    "step": 124,
    "timestamp": "2022-03-01 18:20",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1339,
      "anomaly_severity": -0.1339,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -141.6,
        "baseline_mean": 25.05,
        "z_score": -2.74,
        "pct_change": -665.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.6,
        "baseline_mean": 4.23,
        "z_score": 1.94,
        "pct_change": 8.8,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 53.83,
        "baseline_mean": 52.93,
        "z_score": 0.98,
        "pct_change": 1.7,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.96,
        "baseline_mean": 40.89,
        "z_score": 0.89,
        "pct_change": 0.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.57,
        "baseline_mean": 86.85,
        "z_score": -0.89,
        "pct_change": -0.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.58,
      "forward_flow": 269.45,
      "suction_press": 29.23,
      "discharge_press": 40.96,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.22,
      "casing_vib_de": 4.6,
      "bearing_temp": 61.4,
      "stator_temp": 40.2,
      "lube_temp": 53.8
    }
  },
  {
    "step": 125,
    "timestamp": "2022-03-01 18:25",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1106,
      "anomaly_severity": -0.1106,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -183.15,
        "baseline_mean": 25.05,
        "z_score": -3.43,
        "pct_change": -831.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.57,
        "baseline_mean": 4.89,
        "z_score": -2.03,
        "pct_change": -6.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.58,
        "baseline_mean": 4.23,
        "z_score": 1.81,
        "pct_change": 8.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 53.99,
        "baseline_mean": 52.93,
        "z_score": 1.16,
        "pct_change": 2.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.61,
        "baseline_mean": 3.41,
        "z_score": 1.13,
        "pct_change": 6.1,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.3,
      "forward_flow": 269.95,
      "suction_press": 29.24,
      "discharge_press": 40.89,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.14,
      "casing_vib_de": 4.58,
      "bearing_temp": 61.4,
      "stator_temp": 41.0,
      "lube_temp": 54.0
    }
  },
  {
    "step": 126,
    "timestamp": "2022-03-01 18:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0536,
      "anomaly_severity": -0.0536,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.74,
        "baseline_mean": 29.2,
        "z_score": -13.08,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -172.44,
        "baseline_mean": 25.05,
        "z_score": -3.25,
        "pct_change": -788.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.68,
        "baseline_mean": 40.89,
        "z_score": -2.63,
        "pct_change": -0.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.54,
        "baseline_mean": 4.89,
        "z_score": -2.26,
        "pct_change": -7.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.0,
        "baseline_mean": 40.74,
        "z_score": 1.73,
        "pct_change": 8.0,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.09,
      "forward_flow": 267.05,
      "suction_press": 28.74,
      "discharge_press": 40.68,
      "antisurge_valve": 70.3,
      "radial_vib_nde": 8.82,
      "casing_vib_de": 4.54,
      "bearing_temp": 61.6,
      "stator_temp": 44.0,
      "lube_temp": 54.5
    }
  },
  {
    "step": 127,
    "timestamp": "2022-03-01 18:35",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0592,
      "anomaly_severity": -0.0592,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.69,
        "baseline_mean": 29.2,
        "z_score": -14.73,
        "pct_change": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.65,
        "baseline_mean": 40.89,
        "z_score": -3.06,
        "pct_change": -0.6,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -158.56,
        "baseline_mean": 25.05,
        "z_score": -3.02,
        "pct_change": -732.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.71,
        "baseline_mean": 40.74,
        "z_score": 2.11,
        "pct_change": 9.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.56,
        "baseline_mean": 4.89,
        "z_score": -2.1,
        "pct_change": -6.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.51,
      "forward_flow": 266.8,
      "suction_press": 28.69,
      "discharge_press": 40.65,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 8.9,
      "casing_vib_de": 4.6,
      "bearing_temp": 61.8,
      "stator_temp": 44.7,
      "lube_temp": 54.8
    }
  },
  {
    "step": 128,
    "timestamp": "2022-03-01 18:40",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0598,
      "anomaly_severity": -0.0598,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.55,
        "baseline_mean": 29.2,
        "z_score": -18.56,
        "pct_change": -2.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.58,
        "baseline_mean": 40.89,
        "z_score": -3.94,
        "pct_change": -0.8,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -172.82,
        "baseline_mean": 25.05,
        "z_score": -3.26,
        "pct_change": -789.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.82,
        "baseline_mean": 40.74,
        "z_score": 2.16,
        "pct_change": 10.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.59,
        "baseline_mean": 4.89,
        "z_score": -1.89,
        "pct_change": -6.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.51,
      "forward_flow": 266.93,
      "suction_press": 28.55,
      "discharge_press": 40.58,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.33,
      "casing_vib_de": 4.29,
      "bearing_temp": 61.4,
      "stator_temp": 44.8,
      "lube_temp": 54.2
    }
  },
  {
    "step": 129,
    "timestamp": "2022-03-01 18:45",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.054,
      "anomaly_severity": -0.054,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.45,
        "baseline_mean": 29.2,
        "z_score": -21.51,
        "pct_change": -2.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.54,
        "baseline_mean": 40.89,
        "z_score": -4.37,
        "pct_change": -0.8,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -175.96,
        "baseline_mean": 25.05,
        "z_score": -3.31,
        "pct_change": -802.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.55,
        "baseline_mean": 4.89,
        "z_score": -2.16,
        "pct_change": -6.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.7,
        "baseline_mean": 268.67,
        "z_score": -2.15,
        "pct_change": -1.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 141.45,
      "forward_flow": 264.7,
      "suction_press": 28.45,
      "discharge_press": 40.54,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.28,
      "casing_vib_de": 4.21,
      "bearing_temp": 61.5,
      "stator_temp": 44.7,
      "lube_temp": 54.2
    }
  },
  {
    "step": 130,
    "timestamp": "2022-03-01 18:50",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.063,
      "anomaly_severity": -0.063,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.4,
        "baseline_mean": 29.2,
        "z_score": -22.89,
        "pct_change": -2.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.53,
        "baseline_mean": 40.89,
        "z_score": -4.54,
        "pct_change": -0.9,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -167.12,
        "baseline_mean": 25.05,
        "z_score": -3.16,
        "pct_change": -767.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.05,
        "baseline_mean": 40.74,
        "z_score": 2.29,
        "pct_change": 10.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 264.5,
        "baseline_mean": 268.67,
        "z_score": -2.25,
        "pct_change": -1.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.33,
      "forward_flow": 264.5,
      "suction_press": 28.4,
      "discharge_press": 40.53,
      "antisurge_valve": 70.0,
      "radial_vib_nde": 9.28,
      "casing_vib_de": 4.32,
      "bearing_temp": 61.6,
      "stator_temp": 45.0,
      "lube_temp": 54.4
    }
  },
  {
    "step": 131,
    "timestamp": "2022-03-01 18:55",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.024,
      "anomaly_severity": -0.024,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.33,
        "baseline_mean": 29.2,
        "z_score": -24.88,
        "pct_change": -3.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.43,
        "baseline_mean": 40.89,
        "z_score": -5.8,
        "pct_change": -1.1,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 263.63,
        "baseline_mean": 268.67,
        "z_score": -2.72,
        "pct_change": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -136.9,
        "baseline_mean": 25.05,
        "z_score": -2.66,
        "pct_change": -646.4,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.26,
        "baseline_mean": 1.38,
        "z_score": -2.33,
        "pct_change": -8.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -24.9\u03c3 with forward gas flow down by -2.7\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 142.06,
      "forward_flow": 263.63,
      "suction_press": 28.33,
      "discharge_press": 40.43,
      "antisurge_valve": 71.1,
      "radial_vib_nde": 9.15,
      "casing_vib_de": 4.15,
      "bearing_temp": 61.3,
      "stator_temp": 44.9,
      "lube_temp": 54.0
    }
  },
  {
    "step": 132,
    "timestamp": "2022-03-01 19:00",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0302,
      "anomaly_severity": -0.0302,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.24,
        "baseline_mean": 29.2,
        "z_score": -27.48,
        "pct_change": -3.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.38,
        "baseline_mean": 40.89,
        "z_score": -6.42,
        "pct_change": -1.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 262.08,
        "baseline_mean": 268.67,
        "z_score": -3.56,
        "pct_change": -2.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.38,
        "baseline_mean": 40.74,
        "z_score": 2.46,
        "pct_change": 11.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.85,
        "baseline_mean": 4.23,
        "z_score": -1.93,
        "pct_change": -8.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -27.5\u03c3 with forward gas flow down by -3.6\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 141.98,
      "forward_flow": 262.08,
      "suction_press": 28.24,
      "discharge_press": 40.38,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.06,
      "casing_vib_de": 3.85,
      "bearing_temp": 61.1,
      "stator_temp": 45.4,
      "lube_temp": 53.9
    }
  },
  {
    "step": 133,
    "timestamp": "2022-03-01 19:05",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0151,
      "anomaly_severity": -0.0151,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.17,
        "baseline_mean": 29.2,
        "z_score": -29.54,
        "pct_change": -3.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.34,
        "baseline_mean": 40.89,
        "z_score": -7.01,
        "pct_change": -1.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 260.42,
        "baseline_mean": 268.67,
        "z_score": -4.46,
        "pct_change": -3.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 3.76,
        "baseline_mean": 4.23,
        "z_score": -2.4,
        "pct_change": -10.9,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.09,
        "baseline_mean": 40.74,
        "z_score": 2.31,
        "pct_change": 10.7,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -29.5\u03c3 with forward gas flow down by -4.5\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 141.49,
      "forward_flow": 260.42,
      "suction_press": 28.17,
      "discharge_press": 40.34,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.04,
      "casing_vib_de": 3.76,
      "bearing_temp": 60.8,
      "stator_temp": 45.1,
      "lube_temp": 53.4
    }
  },
  {
    "step": 134,
    "timestamp": "2022-03-01 19:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.011,
      "anomaly_severity": -0.011,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.12,
        "baseline_mean": 29.2,
        "z_score": -30.95,
        "pct_change": -3.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.31,
        "baseline_mean": 40.89,
        "z_score": -7.38,
        "pct_change": -1.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 259.16,
        "baseline_mean": 268.67,
        "z_score": -5.14,
        "pct_change": -3.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.49,
        "baseline_mean": 40.74,
        "z_score": 2.52,
        "pct_change": 11.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -95.15,
        "baseline_mean": 25.05,
        "z_score": -1.98,
        "pct_change": -479.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -30.9\u03c3 with forward gas flow down by -5.1\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 141.63,
      "forward_flow": 259.16,
      "suction_press": 28.12,
      "discharge_press": 40.31,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.01,
      "casing_vib_de": 3.86,
      "bearing_temp": 61.0,
      "stator_temp": 45.5,
      "lube_temp": 53.6
    }
  },
  {
    "step": 135,
    "timestamp": "2022-03-01 19:15",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0057,
      "anomaly_severity": -0.0057,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 28.03,
        "baseline_mean": 29.2,
        "z_score": -33.49,
        "pct_change": -4.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.27,
        "baseline_mean": 40.89,
        "z_score": -7.83,
        "pct_change": -1.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 258.41,
        "baseline_mean": 268.67,
        "z_score": -5.54,
        "pct_change": -3.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -148.47,
        "baseline_mean": 25.05,
        "z_score": -2.86,
        "pct_change": -692.6,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 45.98,
        "baseline_mean": 40.74,
        "z_score": 2.78,
        "pct_change": 12.9,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -33.5\u03c3 with forward gas flow down by -5.5\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 141.72,
      "forward_flow": 258.41,
      "suction_press": 28.03,
      "discharge_press": 40.27,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.81,
      "casing_vib_de": 4.01,
      "bearing_temp": 60.9,
      "stator_temp": 46.0,
      "lube_temp": 53.6
    }
  },
  {
    "step": 136,
    "timestamp": "2022-03-01 19:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0203,
      "anomaly_severity": -0.0203,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.97,
        "baseline_mean": 29.2,
        "z_score": -35.27,
        "pct_change": -4.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.25,
        "baseline_mean": 40.89,
        "z_score": -8.16,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 257.48,
        "baseline_mean": 268.67,
        "z_score": -6.04,
        "pct_change": -4.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 46.14,
        "baseline_mean": 40.74,
        "z_score": 2.87,
        "pct_change": 13.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -128.33,
        "baseline_mean": 25.05,
        "z_score": -2.52,
        "pct_change": -612.2,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -35.3\u03c3 with forward gas flow down by -6.0\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 141.9,
      "forward_flow": 257.48,
      "suction_press": 27.97,
      "discharge_press": 40.25,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.71,
      "casing_vib_de": 4.09,
      "bearing_temp": 60.7,
      "stator_temp": 46.1,
      "lube_temp": 53.3
    }
  },
  {
    "step": 137,
    "timestamp": "2022-03-01 19:25",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0321,
      "anomaly_severity": -0.0321,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.9,
        "baseline_mean": 29.2,
        "z_score": -37.2,
        "pct_change": -4.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.28,
        "baseline_mean": 40.89,
        "z_score": -7.73,
        "pct_change": -1.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 255.42,
        "baseline_mean": 268.67,
        "z_score": -7.15,
        "pct_change": -4.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 46.71,
        "baseline_mean": 40.74,
        "z_score": 3.17,
        "pct_change": 14.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -116.15,
        "baseline_mean": 25.05,
        "z_score": -2.32,
        "pct_change": -563.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -37.2\u03c3 with forward gas flow down by -7.2\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 142.89,
      "forward_flow": 255.42,
      "suction_press": 27.9,
      "discharge_press": 40.28,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.88,
      "casing_vib_de": 4.18,
      "bearing_temp": 61.1,
      "stator_temp": 46.7,
      "lube_temp": 54.0
    }
  },
  {
    "step": 138,
    "timestamp": "2022-03-01 19:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0219,
      "anomaly_severity": -0.0219,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.8,
        "baseline_mean": 29.2,
        "z_score": -40.09,
        "pct_change": -4.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.17,
        "baseline_mean": 40.89,
        "z_score": -9.13,
        "pct_change": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 253.82,
        "baseline_mean": 268.67,
        "z_score": -8.01,
        "pct_change": -5.5,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 46.36,
        "baseline_mean": 40.74,
        "z_score": 2.98,
        "pct_change": 13.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -148.88,
        "baseline_mean": 25.05,
        "z_score": -2.86,
        "pct_change": -694.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -40.1\u03c3 with forward gas flow down by -8.0\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 142.22,
      "forward_flow": 253.82,
      "suction_press": 27.8,
      "discharge_press": 40.17,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.76,
      "casing_vib_de": 4.25,
      "bearing_temp": 60.9,
      "stator_temp": 46.4,
      "lube_temp": 53.9
    }
  },
  {
    "step": 139,
    "timestamp": "2022-03-01 19:35",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0119,
      "anomaly_severity": -0.0119,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.69,
        "baseline_mean": 29.2,
        "z_score": -43.19,
        "pct_change": -5.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.13,
        "baseline_mean": 40.89,
        "z_score": -9.65,
        "pct_change": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 251.53,
        "baseline_mean": 268.67,
        "z_score": -9.25,
        "pct_change": -6.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 46.37,
        "baseline_mean": 40.74,
        "z_score": 2.99,
        "pct_change": 13.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -149.51,
        "baseline_mean": 25.05,
        "z_score": -2.87,
        "pct_change": -696.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -43.2\u03c3 with forward gas flow down by -9.2\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 142.01,
      "forward_flow": 251.53,
      "suction_press": 27.69,
      "discharge_press": 40.13,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.92,
      "casing_vib_de": 4.39,
      "bearing_temp": 60.8,
      "stator_temp": 46.4,
      "lube_temp": 53.8
    }
  },
  {
    "step": 140,
    "timestamp": "2022-03-01 19:40",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0005,
      "anomaly_severity": 0.0005,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.63,
        "baseline_mean": 29.2,
        "z_score": -44.9,
        "pct_change": -5.4,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 252.11,
        "baseline_mean": 268.67,
        "z_score": -8.94,
        "pct_change": -6.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.22,
        "baseline_mean": 40.89,
        "z_score": -8.44,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 47.84,
        "baseline_mean": 40.74,
        "z_score": 3.77,
        "pct_change": 17.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -167.8,
        "baseline_mean": 25.05,
        "z_score": -3.17,
        "pct_change": -769.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -44.9\u03c3 with forward gas flow down by -8.9\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 143.56,
      "forward_flow": 252.11,
      "suction_press": 27.63,
      "discharge_press": 40.22,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.0,
      "casing_vib_de": 4.6,
      "bearing_temp": 61.0,
      "stator_temp": 47.8,
      "lube_temp": 54.3
    }
  },
  {
    "step": 141,
    "timestamp": "2022-03-01 19:45",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0103,
      "anomaly_severity": 0.0103,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.55,
        "baseline_mean": 29.2,
        "z_score": -47.43,
        "pct_change": -5.7,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 250.9,
        "baseline_mean": 268.67,
        "z_score": -9.59,
        "pct_change": -6.6,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.24,
        "baseline_mean": 40.89,
        "z_score": -8.25,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.72,
        "baseline_mean": 40.74,
        "z_score": 4.24,
        "pct_change": 19.6,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -158.23,
        "baseline_mean": 25.05,
        "z_score": -3.02,
        "pct_change": -731.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -47.4\u03c3 with forward gas flow down by -9.6\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.32,
      "forward_flow": 250.9,
      "suction_press": 27.55,
      "discharge_press": 40.24,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.68,
      "casing_vib_de": 4.6,
      "bearing_temp": 61.3,
      "stator_temp": 48.7,
      "lube_temp": 54.8
    }
  },
  {
    "step": 142,
    "timestamp": "2022-03-01 19:50",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0168,
      "anomaly_severity": 0.0168,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.45,
        "baseline_mean": 29.2,
        "z_score": -50.17,
        "pct_change": -6.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 249.03,
        "baseline_mean": 268.67,
        "z_score": -10.6,
        "pct_change": -7.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.23,
        "baseline_mean": 40.89,
        "z_score": -8.32,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.62,
        "baseline_mean": 40.74,
        "z_score": 4.18,
        "pct_change": 19.3,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -185.1,
        "baseline_mean": 25.05,
        "z_score": -3.46,
        "pct_change": -838.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -50.2\u03c3 with forward gas flow down by -10.6\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.33,
      "forward_flow": 249.03,
      "suction_press": 27.45,
      "discharge_press": 40.23,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.86,
      "casing_vib_de": 4.6,
      "bearing_temp": 61.4,
      "stator_temp": 48.6,
      "lube_temp": 55.1
    }
  },
  {
    "step": 143,
    "timestamp": "2022-03-01 19:55",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0126,
      "anomaly_severity": 0.0126,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.37,
        "baseline_mean": 29.2,
        "z_score": -52.31,
        "pct_change": -6.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 248.55,
        "baseline_mean": 268.67,
        "z_score": -10.86,
        "pct_change": -7.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.24,
        "baseline_mean": 40.89,
        "z_score": -8.24,
        "pct_change": -1.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.24,
        "baseline_mean": 40.74,
        "z_score": 3.98,
        "pct_change": 18.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -188.24,
        "baseline_mean": 25.05,
        "z_score": -3.51,
        "pct_change": -851.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -52.3\u03c3 with forward gas flow down by -10.9\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.56,
      "forward_flow": 248.55,
      "suction_press": 27.37,
      "discharge_press": 40.24,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.17,
      "casing_vib_de": 4.53,
      "bearing_temp": 61.0,
      "stator_temp": 48.2,
      "lube_temp": 54.8
    }
  },
  {
    "step": 144,
    "timestamp": "2022-03-01 20:00",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0006,
      "anomaly_severity": -0.0006,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.29,
        "baseline_mean": 29.2,
        "z_score": -54.8,
        "pct_change": -6.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 248.41,
        "baseline_mean": 268.67,
        "z_score": -10.93,
        "pct_change": -7.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.16,
        "baseline_mean": 40.89,
        "z_score": -9.31,
        "pct_change": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.1,
        "baseline_mean": 40.74,
        "z_score": 3.91,
        "pct_change": 18.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -204.43,
        "baseline_mean": 25.05,
        "z_score": -3.78,
        "pct_change": -916.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -54.8\u03c3 with forward gas flow down by -10.9\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.41,
      "forward_flow": 248.41,
      "suction_press": 27.29,
      "discharge_press": 40.16,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.11,
      "casing_vib_de": 4.46,
      "bearing_temp": 60.9,
      "stator_temp": 48.1,
      "lube_temp": 54.6
    }
  },
  {
    "step": 145,
    "timestamp": "2022-03-01 20:05",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0064,
      "anomaly_severity": 0.0064,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.22,
        "baseline_mean": 29.2,
        "z_score": -56.67,
        "pct_change": -6.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 247.81,
        "baseline_mean": 268.67,
        "z_score": -11.26,
        "pct_change": -7.8,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.15,
        "baseline_mean": 40.89,
        "z_score": -9.42,
        "pct_change": -1.8,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -236.25,
        "baseline_mean": 25.05,
        "z_score": -4.3,
        "pct_change": -1043.0,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.31,
        "baseline_mean": 40.74,
        "z_score": 4.02,
        "pct_change": 18.6,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -56.7\u03c3 with forward gas flow down by -11.3\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.72,
      "forward_flow": 247.81,
      "suction_press": 27.22,
      "discharge_press": 40.15,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.11,
      "casing_vib_de": 4.23,
      "bearing_temp": 60.9,
      "stator_temp": 48.3,
      "lube_temp": 54.5
    }
  },
  {
    "step": 146,
    "timestamp": "2022-03-01 20:10",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0235,
      "anomaly_severity": 0.0235,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.21,
        "baseline_mean": 29.2,
        "z_score": -56.96,
        "pct_change": -6.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 247.01,
        "baseline_mean": 268.67,
        "z_score": -11.69,
        "pct_change": -8.1,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.13,
        "baseline_mean": 40.89,
        "z_score": -9.65,
        "pct_change": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 48.96,
        "baseline_mean": 40.74,
        "z_score": 4.36,
        "pct_change": 20.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -238.67,
        "baseline_mean": 25.05,
        "z_score": -4.34,
        "pct_change": -1052.7,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -57.0\u03c3 with forward gas flow down by -11.7\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.26,
      "forward_flow": 247.01,
      "suction_press": 27.21,
      "discharge_press": 40.13,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.75,
      "casing_vib_de": 4.57,
      "bearing_temp": 60.9,
      "stator_temp": 49.0,
      "lube_temp": 54.6
    }
  },
  {
    "step": 147,
    "timestamp": "2022-03-01 20:15",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0216,
      "anomaly_severity": 0.0216,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 27.11,
        "baseline_mean": 29.2,
        "z_score": -59.89,
        "pct_change": -7.2,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 246.55,
        "baseline_mean": 268.67,
        "z_score": -11.94,
        "pct_change": -8.2,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.09,
        "baseline_mean": 40.89,
        "z_score": -10.13,
        "pct_change": -1.9,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 49.29,
        "baseline_mean": 40.74,
        "z_score": 4.54,
        "pct_change": 21.0,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -245.26,
        "baseline_mean": 25.05,
        "z_score": -4.45,
        "pct_change": -1079.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -59.9\u03c3 with forward gas flow down by -11.9\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 143.93,
      "forward_flow": 246.55,
      "suction_press": 27.11,
      "discharge_press": 40.09,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.61,
      "casing_vib_de": 4.49,
      "bearing_temp": 60.8,
      "stator_temp": 49.3,
      "lube_temp": 54.5
    }
  },
  {
    "step": 148,
    "timestamp": "2022-03-01 20:20",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": -0.0111,
      "anomaly_severity": 0.0111,
      "status": "CRITICAL",
      "status_color": "rose",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 26.98,
        "baseline_mean": 29.2,
        "z_score": -63.68,
        "pct_change": -7.6,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 245.74,
        "baseline_mean": 268.67,
        "z_score": -12.37,
        "pct_change": -8.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.06,
        "baseline_mean": 40.89,
        "z_score": -10.5,
        "pct_change": -2.0,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 50.0,
        "baseline_mean": 40.74,
        "z_score": 4.91,
        "pct_change": 22.7,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -199.92,
        "baseline_mean": 25.05,
        "z_score": -3.7,
        "pct_change": -898.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -63.7\u03c3 with forward gas flow down by -12.4\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 144.03,
      "forward_flow": 245.74,
      "suction_press": 26.98,
      "discharge_press": 40.06,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.54,
      "casing_vib_de": 4.6,
      "bearing_temp": 61.2,
      "stator_temp": 50.0,
      "lube_temp": 54.7
    }
  },
  {
    "step": 149,
    "timestamp": "2022-03-01 20:25",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0089,
      "anomaly_severity": -0.0089,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 26.91,
        "baseline_mean": 29.2,
        "z_score": -65.66,
        "pct_change": -7.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 245.23,
        "baseline_mean": 268.67,
        "z_score": -12.65,
        "pct_change": -8.7,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 39.94,
        "baseline_mean": 40.89,
        "z_score": -12.07,
        "pct_change": -2.3,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 49.89,
        "baseline_mean": 40.74,
        "z_score": 4.86,
        "pct_change": 22.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -138.14,
        "baseline_mean": 25.05,
        "z_score": -2.69,
        "pct_change": -651.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -65.7\u03c3 with forward gas flow down by -12.7\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 143.09,
      "forward_flow": 245.23,
      "suction_press": 26.91,
      "discharge_press": 39.94,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.67,
      "casing_vib_de": 4.47,
      "bearing_temp": 60.7,
      "stator_temp": 49.9,
      "lube_temp": 54.0
    }
  },
  {
    "step": 150,
    "timestamp": "2022-03-01 20:30",
    "ground_truth": {
      "label": 1,
      "fault_type": "suction_filter_choke"
    },
    "ml_inference": {
      "raw_score": 0.0169,
      "anomaly_severity": -0.0169,
      "status": "WARNING",
      "status_color": "amber",
      "alarm_active": true
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 26.84,
        "baseline_mean": 29.2,
        "z_score": -67.59,
        "pct_change": -8.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 39.89,
        "baseline_mean": 40.89,
        "z_score": -12.73,
        "pct_change": -2.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 245.63,
        "baseline_mean": 268.67,
        "z_score": -12.44,
        "pct_change": -8.6,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 50.84,
        "baseline_mean": 40.74,
        "z_score": 5.36,
        "pct_change": 24.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -148.01,
        "baseline_mean": 25.05,
        "z_score": -2.85,
        "pct_change": -690.8,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "\u26a0\ufe0f Suction Strainer Choke / Upstream Starvation",
      "severity": "WARNING",
      "cause": "Suction header pressure collapsed by -67.6\u03c3 with forward gas flow down by -12.4\u03c3. High differential pressure ratio increases compressor head and thermal load.",
      "action": "Switch suction filters or inspect upstream separator drum demister pad for fouling.",
      "badge": "SUCTION_CHOKE"
    },
    "sensors": {
      "motor_current": 143.19,
      "forward_flow": 245.63,
      "suction_press": 26.84,
      "discharge_press": 39.89,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.7,
      "casing_vib_de": 4.3,
      "bearing_temp": 61.0,
      "stator_temp": 50.8,
      "lube_temp": 54.4
    }
  },
  {
    "step": 151,
    "timestamp": "2022-03-01 20:35",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1299,
      "anomaly_severity": -0.1299,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -103.73,
        "baseline_mean": 25.05,
        "z_score": -2.12,
        "pct_change": -514.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.57,
        "baseline_mean": 4.89,
        "z_score": -2.04,
        "pct_change": -6.5,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.71,
        "baseline_mean": 52.93,
        "z_score": 1.95,
        "pct_change": 3.4,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.07,
        "baseline_mean": 40.74,
        "z_score": 1.77,
        "pct_change": 8.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 41.0,
        "baseline_mean": 40.89,
        "z_score": 1.49,
        "pct_change": 0.3,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.29,
      "forward_flow": 268.77,
      "suction_press": 29.22,
      "discharge_press": 41.0,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.77,
      "casing_vib_de": 4.24,
      "bearing_temp": 61.2,
      "stator_temp": 44.1,
      "lube_temp": 54.7
    }
  },
  {
    "step": 152,
    "timestamp": "2022-03-01 20:40",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1419,
      "anomaly_severity": -0.1419,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.5,
        "baseline_mean": 4.89,
        "z_score": -2.45,
        "pct_change": -7.8,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -95.06,
        "baseline_mean": 25.05,
        "z_score": -1.98,
        "pct_change": -479.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.1,
        "baseline_mean": 40.74,
        "z_score": 1.26,
        "pct_change": 5.8,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 53.91,
        "baseline_mean": 52.93,
        "z_score": 1.07,
        "pct_change": 1.9,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0781A.PV",
        "name": "Casing Vib DE (mm/s)",
        "current_value": 4.1,
        "baseline_mean": 4.23,
        "z_score": -0.66,
        "pct_change": -3.0,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.59,
      "forward_flow": 268.0,
      "suction_press": 29.21,
      "discharge_press": 40.88,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.19,
      "casing_vib_de": 4.1,
      "bearing_temp": 60.8,
      "stator_temp": 43.1,
      "lube_temp": 53.9
    }
  },
  {
    "step": 153,
    "timestamp": "2022-03-01 20:45",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.128,
      "anomaly_severity": -0.128,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.54,
        "baseline_mean": 4.89,
        "z_score": -2.2,
        "pct_change": -7.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -86.13,
        "baseline_mean": 25.05,
        "z_score": -1.83,
        "pct_change": -443.8,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0790AA.PV",
        "name": "Motor Bearing Vib (um)",
        "current_value": 1.45,
        "baseline_mean": 1.38,
        "z_score": 1.42,
        "pct_change": 5.3,
        "direction": "HIGH"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 42.52,
        "baseline_mean": 40.74,
        "z_score": 0.95,
        "pct_change": 4.4,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNLI0760A.PV",
        "name": "Lube Oil Level (%)",
        "current_value": 86.6,
        "baseline_mean": 86.85,
        "z_score": -0.81,
        "pct_change": -0.3,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.87,
      "forward_flow": 267.62,
      "suction_press": 29.17,
      "discharge_press": 40.83,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.19,
      "casing_vib_de": 4.15,
      "bearing_temp": 60.4,
      "stator_temp": 42.5,
      "lube_temp": 53.6
    }
  },
  {
    "step": 154,
    "timestamp": "2022-03-01 20:50",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1378,
      "anomaly_severity": -0.1378,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.58,
        "baseline_mean": 4.89,
        "z_score": -1.98,
        "pct_change": -6.3,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.73,
        "baseline_mean": 52.93,
        "z_score": 1.97,
        "pct_change": 3.4,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -88.46,
        "baseline_mean": 25.05,
        "z_score": -1.87,
        "pct_change": -453.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.2,
        "baseline_mean": 40.74,
        "z_score": 1.84,
        "pct_change": 8.5,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.22,
        "baseline_mean": 3.41,
        "z_score": -1.02,
        "pct_change": -5.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.08,
      "forward_flow": 270.36,
      "suction_press": 29.17,
      "discharge_press": 40.85,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.34,
      "casing_vib_de": 4.41,
      "bearing_temp": 61.0,
      "stator_temp": 44.2,
      "lube_temp": 54.7
    }
  },
  {
    "step": 155,
    "timestamp": "2022-03-01 20:55",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1385,
      "anomaly_severity": -0.1385,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -100.46,
        "baseline_mean": 25.05,
        "z_score": -2.07,
        "pct_change": -501.0,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.7,
        "baseline_mean": 52.93,
        "z_score": 1.94,
        "pct_change": 3.3,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.14,
        "baseline_mean": 29.2,
        "z_score": -1.64,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 43.25,
        "baseline_mean": 40.74,
        "z_score": 1.33,
        "pct_change": 6.2,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.18,
        "baseline_mean": 3.41,
        "z_score": -1.23,
        "pct_change": -6.6,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 143.25,
      "forward_flow": 269.17,
      "suction_press": 29.14,
      "discharge_press": 40.82,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.22,
      "casing_vib_de": 4.4,
      "bearing_temp": 60.9,
      "stator_temp": 43.2,
      "lube_temp": 54.7
    }
  },
  {
    "step": 156,
    "timestamp": "2022-03-01 21:00",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1195,
      "anomaly_severity": -0.1195,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 55.02,
        "baseline_mean": 52.93,
        "z_score": 2.3,
        "pct_change": 4.0,
        "direction": "HIGH"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.03,
        "baseline_mean": 3.41,
        "z_score": -2.03,
        "pct_change": -11.0,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.57,
        "baseline_mean": 4.89,
        "z_score": -2.01,
        "pct_change": -6.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.31,
        "baseline_mean": 40.74,
        "z_score": 1.9,
        "pct_change": 8.8,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -69.66,
        "baseline_mean": 25.05,
        "z_score": -1.56,
        "pct_change": -378.1,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.5,
      "forward_flow": 270.74,
      "suction_press": 29.15,
      "discharge_press": 40.78,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.18,
      "casing_vib_de": 4.47,
      "bearing_temp": 61.2,
      "stator_temp": 44.3,
      "lube_temp": 55.0
    }
  },
  {
    "step": 157,
    "timestamp": "2022-03-01 21:05",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1084,
      "anomaly_severity": -0.1084,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.03,
        "baseline_mean": 3.41,
        "z_score": -2.05,
        "pct_change": -11.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNTI0785AA.PV",
        "name": "Stator Winding Temp (\u00b0C)",
        "current_value": 44.44,
        "baseline_mean": 40.74,
        "z_score": 1.96,
        "pct_change": 9.1,
        "direction": "HIGH"
      },
      {
        "rank": 3,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.59,
        "baseline_mean": 4.89,
        "z_score": -1.93,
        "pct_change": -6.1,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -87.12,
        "baseline_mean": 25.05,
        "z_score": -1.85,
        "pct_change": -447.8,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNFI0703BA.PV",
        "name": "Forward Gas Flow (m3/h)",
        "current_value": 271.84,
        "baseline_mean": 268.67,
        "z_score": 1.71,
        "pct_change": 1.2,
        "direction": "HIGH"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.03,
      "forward_flow": 271.84,
      "suction_press": 29.15,
      "discharge_press": 40.76,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 9.18,
      "casing_vib_de": 4.49,
      "bearing_temp": 61.0,
      "stator_temp": 44.4,
      "lube_temp": 54.4
    }
  },
  {
    "step": 158,
    "timestamp": "2022-03-01 21:10",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1074,
      "anomaly_severity": -0.1074,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -110.6,
        "baseline_mean": 25.05,
        "z_score": -2.23,
        "pct_change": -541.5,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 3.02,
        "baseline_mean": 3.41,
        "z_score": -2.11,
        "pct_change": -11.4,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0721AA.PV",
        "name": "Discharge Pressure (kg/cm2)",
        "current_value": 40.72,
        "baseline_mean": 40.89,
        "z_score": -2.07,
        "pct_change": -0.4,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.13,
        "baseline_mean": 29.2,
        "z_score": -1.88,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.62,
        "baseline_mean": 4.89,
        "z_score": -1.74,
        "pct_change": -5.5,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.39,
      "forward_flow": 271.59,
      "suction_press": 29.13,
      "discharge_press": 40.72,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.95,
      "casing_vib_de": 4.5,
      "bearing_temp": 60.7,
      "stator_temp": 43.6,
      "lube_temp": 54.2
    }
  },
  {
    "step": 159,
    "timestamp": "2022-03-01 21:15",
    "ground_truth": {
      "label": 0,
      "fault_type": "normal"
    },
    "ml_inference": {
      "raw_score": 0.1022,
      "anomaly_severity": -0.1022,
      "status": "NORMAL",
      "status_color": "emerald",
      "alarm_active": false
    },
    "top_attributions": [
      {
        "rank": 1,
        "tag": "CCRNVI0782A.PV",
        "name": "Casing Vib NDE (mm/s)",
        "current_value": 2.96,
        "baseline_mean": 3.41,
        "z_score": -2.42,
        "pct_change": -13.1,
        "direction": "LOW"
      },
      {
        "rank": 2,
        "tag": "CCRNZI0780A.PV",
        "name": "Axial Thrust Float (um)",
        "current_value": -104.03,
        "baseline_mean": 25.05,
        "z_score": -2.12,
        "pct_change": -515.3,
        "direction": "LOW"
      },
      {
        "rank": 3,
        "tag": "CCRNPI0704.PV",
        "name": "Suction Pressure (kg/cm2)",
        "current_value": 29.13,
        "baseline_mean": 29.2,
        "z_score": -2.03,
        "pct_change": -0.2,
        "direction": "LOW"
      },
      {
        "rank": 4,
        "tag": "CCRNTI0781A.PV",
        "name": "Lube Oil Header Temp (\u00b0C)",
        "current_value": 54.56,
        "baseline_mean": 52.93,
        "z_score": 1.78,
        "pct_change": 3.1,
        "direction": "HIGH"
      },
      {
        "rank": 5,
        "tag": "CCRNVI0780AC.PV",
        "name": "Radial Vib DE (um)",
        "current_value": 4.62,
        "baseline_mean": 4.89,
        "z_score": -1.69,
        "pct_change": -5.4,
        "direction": "LOW"
      }
    ],
    "diagnosis": {
      "title": "System Normal & Stable",
      "severity": "INFO",
      "cause": "All 15 supervisory indicators operate inside nominal 3\u03c3 design limits.",
      "action": "Routine monitoring. No operator intervention required.",
      "badge": "HEALTHY"
    },
    "sensors": {
      "motor_current": 142.78,
      "forward_flow": 270.41,
      "suction_press": 29.13,
      "discharge_press": 40.77,
      "antisurge_valve": 72.0,
      "radial_vib_nde": 8.98,
      "casing_vib_de": 4.31,
      "bearing_temp": 60.7,
      "stator_temp": 43.5,
      "lube_temp": 54.6
    }
  }
] as const;
