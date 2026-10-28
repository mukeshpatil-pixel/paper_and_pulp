export const SUPERVISED_METRICS_DATA = {
  "model_name": "Supervised Multi-Class Random Forest",
  "accuracy": 0.995,
  "macro_f1": 0.9952,
  "target_classes": [
    "normal_operation",
    "oil_leakage",
    "bearing_failure",
    "air_leakage",
    "suction_filter_choke"
  ],
  "confusion_matrix": [
    [
      800,
      0,
      0,
      0,
      0
    ],
    [
      0,
      250,
      0,
      0,
      0
    ],
    [
      0,
      0,
      250,
      0,
      0
    ],
    [
      5,
      0,
      0,
      245,
      0
    ],
    [
      4,
      0,
      0,
      0,
      246
    ]
  ],
  "classification_report": {
    "normal_operation": {
      "precision": 0.9888751545117429,
      "recall": 1.0,
      "f1-score": 0.9944064636420137,
      "support": 800.0
    },
    "oil_leakage": {
      "precision": 1.0,
      "recall": 1.0,
      "f1-score": 1.0,
      "support": 250.0
    },
    "bearing_failure": {
      "precision": 1.0,
      "recall": 1.0,
      "f1-score": 1.0,
      "support": 250.0
    },
    "air_leakage": {
      "precision": 1.0,
      "recall": 0.98,
      "f1-score": 0.98989898989899,
      "support": 250.0
    },
    "suction_filter_choke": {
      "precision": 1.0,
      "recall": 0.984,
      "f1-score": 0.9919354838709677,
      "support": 250.0
    },
    "accuracy": 0.995,
    "macro avg": {
      "precision": 0.9977750309023486,
      "recall": 0.9928000000000001,
      "f1-score": 0.9952481874823944,
      "support": 1800.0
    },
    "weighted avg": {
      "precision": 0.9950556242274413,
      "recall": 0.995,
      "f1-score": 0.9949909940867225,
      "support": 1800.0
    }
  },
  "feature_importances": [
    {
      "feature": "vibration_3",
      "label": "Shaft Radial Vibration DE (\u00b5m)",
      "importance": 0.1521
    },
    {
      "feature": "level_1",
      "label": "Lube Oil Reservoir Level (%)",
      "importance": 0.1332
    },
    {
      "feature": "vibration_1",
      "label": "Shaft Radial Vibration NDE (\u00b5m)",
      "importance": 0.1288
    },
    {
      "feature": "flow_rate_1",
      "label": "Forward Gas Flow (m\u00b3/h)",
      "importance": 0.1166
    },
    {
      "feature": "pressure_1",
      "label": "Suction Header Pressure (kg/cm\u00b2)",
      "importance": 0.0966
    },
    {
      "feature": "pressure_4",
      "label": "Discharge Pressure (kg/cm\u00b2)",
      "importance": 0.0889
    },
    {
      "feature": "temperature_26",
      "label": "Journal Bearing DE Temp (\u00b0C)",
      "importance": 0.0844
    },
    {
      "feature": "anti_surge_valve_1",
      "label": "Anti-Surge Valve Opening (%)",
      "importance": 0.0724
    },
    {
      "feature": "vibration_4",
      "label": "Casing Vibration DE (mm/s RMS)",
      "importance": 0.0455
    },
    {
      "feature": "temperature_30",
      "label": "Lube Oil Supply Temp (\u00b0C)",
      "importance": 0.0367
    },
    {
      "feature": "temperature_10",
      "label": "Stator Winding Temp (\u00b0C)",
      "importance": 0.0213
    },
    {
      "feature": "motor_current_1",
      "label": "Motor Operating Current (A)",
      "importance": 0.0163
    },
    {
      "feature": "axial_displacement_1",
      "label": "Rotor Axial Float (\u00b5m)",
      "importance": 0.0049
    },
    {
      "feature": "vibration_5",
      "label": "Casing Vibration NDE (mm/s RMS)",
      "importance": 0.0016
    },
    {
      "feature": "vibration_6",
      "label": "Motor Bearing Vibration (\u00b5m)",
      "importance": 0.0007
    }
  ],
  "train_samples": 4200,
  "test_samples": 1800
};
