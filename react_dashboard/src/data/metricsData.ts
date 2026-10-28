export const METRICS_DATA = {
  "training_samples": 2880,
  "features_count": 15,
  "unseen_normal_samples": 2016,
  "unseen_normal_specificity": 0.9786706349206349,
  "unseen_normal_false_alarm_rate": 0.021329365079365115,
  "abnormal_test_samples": 4032,
  "precision": 0.9326923076923077,
  "recall": 0.2806712962962963,
  "f1_score": 0.4314946619217082,
  "pr_auc": 0.9120888119904593,
  "roc_auc": 0.9543499730742028,
  "confusion_matrix": {
    "tn": 2269,
    "fp": 35,
    "fn": 1243,
    "tp": 485
  },
  "fault_breakdown": {
    "anti_surge_recycle_jam": {
      "samples": 576,
      "detected": 143,
      "recall": 0.2482638888888889
    },
    "bearing_wear_thermal_friction": {
      "samples": 576,
      "detected": 100,
      "recall": 0.1736111111111111
    },
    "suction_filter_choke": {
      "samples": 576,
      "detected": 242,
      "recall": 0.4201388888888889
    }
  }
} as const;
