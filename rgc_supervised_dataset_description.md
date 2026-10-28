# Refinery Gas Compressor (RGC_A) — Supervised Telemetry Dataset Description

> **Document Type:** Dataset Specification & Chronological Splitting Protocol  
> **Equipment:** Refinery Gas Compressor Train A (RGC_A) — Multistage Centrifugal Recycle Gas Compressor  
> **Sampling Frequency:** 5-minute continuous logging interval (288 readings/day)  
> **Total Duration:** 20.83 continuous calendar days (6,000 sequential timestamps)  
> **Naming Standard:** 100% Sequential Engineering Tags (as defined in `RGC_A_Sequential_Tag_Mapping.csv`)

---

## 1. File Locations & Storage Directory

All dataset files, schemas, and metrics are stored locally in the workspace:

| File Name | Absolute File Path | Rows / Columns | File Size | Description |
| :--- | :--- | :---: | :---: | :--- |
| **`rgc_combined_labeled_dataset.csv`** | `C:\Users\Mukesh Patil\Documents\compressor\rgc_combined_labeled_dataset.csv` | 6,000 × 18 | ~2.35 MB | **Single Combined Master Labeled Dataset** (Clean 18-column ML schema: 15 sequential sensors, `fault_class`, `fault_code`, and `Timestamp`) |
| **`rgc_supervised_labeled_dataset.csv`** | `C:\Users\Mukesh Patil\Documents\compressor\rgc_supervised_labeled_dataset.csv` | 6,000 × 18 | ~2.35 MB | **Full Continuous Labeled Stream** (Identical master copy for automated pipeline ingestion) |
| **`rgc_supervised_train.csv`** | `C:\Users\Mukesh Patil\Documents\compressor\rgc_supervised_train.csv` | 4,200 × 18 | ~1.65 MB | **70% Chronological Training Partition** (Steps 0 to 4,199) |
| **`rgc_supervised_test.csv`** | `C:\Users\Mukesh Patil\Documents\compressor\rgc_supervised_test.csv` | 1,800 × 18 | ~710 KB | **30% Held-Out Test / Validation Partition** (Steps 4,200 to 5,999) |
| **`RGC_A_Sequential_Tag_Mapping.csv`** | `C:\Users\Mukesh Patil\Documents\compressor\RGC_A_Sequential_Tag_Mapping.csv` | 71 tags | ~8.5 KB | Sequential engineering tag cross-reference dictionary |
| **`rgc_supervised_model_metrics.json`** | `C:\Users\Mukesh Patil\Documents\compressor\rgc_supervised_model_metrics.json` | JSON Object | ~2.4 KB | Confusion matrix, classification report & Gini feature rankings |
| **`rgc_supervised_simulation_trace.json`**| `C:\Users\Mukesh Patil\Documents\compressor\rgc_supervised_simulation_trace.json`| 180 steps | ~280 KB | Interactive playback trace with real-time probability vectors |

---

## 2. Chronological 70–30 Splitting Protocol

In industrial time-series machine learning, random $k$-fold cross-validation or random row shuffling causes severe lookahead data leakage. Therefore, a **strict chronological partition** was enforced:

- **Total Dataset:** 6,000 steps ($100\%$, from `2022-02-01 00:00` to `2022-02-21 19:55`)
- **Training Set (70%):** Steps 0 to 4,199 (`2022-02-01 00:00` to `2022-02-15 13:55` = 14.58 continuous days)
- **Testing / Validation Set (30%):** Steps 4,200 to 5,999 (`2022-02-15 14:00` to `2022-02-21 19:55` = 6.25 continuous days)

> [!NOTE]
> **Dynamic Partitioning Driven by LLM / Agent Pipeline:**
> The master dataset intentionally does **not** contain a hard-coded `split` column. Instead, an LLM or automated pipeline parses this description document and programmatically applies the chronological 70–30 partition using the row index cutoff (`df.iloc[:4200]` vs `df.iloc[4200:]`) or timestamp boundary (`2022-02-15 14:00:00`).

```
[========================== 70% TRAINING SPLIT (4,200 steps) ==========================] [==== 30% HELD-OUT TEST (1,800) ====]
Steps 0 ------------------------------------------------------------------------- 4,199   4,200 ----------------------- 5,999
Normal (2,500) + 4 Injected Fault Episodes (1,700)                                       Unseen Normal (800) + 4 Faults (1,000)
```

---

## 3. Detailed Partition Breakdown: Normal vs. Abnormal Segments

To allow machine learning models or LLMs to explicitly distinguish healthy operational data from abnormal fault episodes, the exact step intervals are cataloged below:

### Part A: 70% Training Partition (`rgc_supervised_train.csv` — 4,200 Samples)

| Operational Regime | Step Range (Row Indices) | Timestamp Interval | Samples | Regime Nature & Physics |
| :--- | :---: | :---: | :---: | :--- |
| **Normal Healthy 1** | Steps **0 – 499** | 2022-02-01 00:00 to 2022-02-02 17:35 | **500** | Healthy steady-state baseline ($\pm 2\sigma$ nominal operation) |
| **Fault 1: `oil_leakage`** | Steps **500 – 849** | 2022-02-02 17:40 to 2022-02-03 22:45 | **350** | Lube reservoir drain (`level_1` drops), oil temp climbs +11.5°C |
| **Normal Healthy 2** | Steps **850 – 1,299** | 2022-02-03 22:50 to 2022-02-05 12:15 | **450** | Post-maintenance recovery (lube topped up, stable running) |
| **Fault 2: `air_leakage`** | Steps **1,300 – 1,649** | 2022-02-05 12:20 to 2022-02-06 17:25 | **350** | Pneumatic air line leak; ASV valve drops from 71% to 66% stuck open |
| **Normal Healthy 3** | Steps **1,650 – 2,099** | 2022-02-06 17:30 to 2022-02-08 06:55 | **450** | Post-maintenance recovery (pneumatics restored) |
| **Fault 3: `bearing_failure`**| Steps **2,100 – 2,449** | 2022-02-08 07:00 to 2022-02-09 12:05 | **350** | Journal DE babbitt friction; radial vibs jump 4x-8x, pad temp +24°C |
| **Normal Healthy 4** | Steps **2,450 – 2,899** | 2022-02-09 12:10 to 2022-02-11 01:35 | **450** | Post-maintenance recovery (bearing inspected/lube balanced) |
| **Fault 4: `suction_filter_choke`**| Steps **2,900 – 3,249** | 2022-02-11 01:40 to 2022-02-12 06:45 | **350** | Suction strainer mesh fouled; suction press collapses $-15\sigma$ |
| **Normal Healthy 5** | Steps **3,250 – 3,599** | 2022-02-12 06:50 to 2022-02-13 12:00 | **350** | Post-maintenance recovery (strainer basket cleaned) |
| **Fault 5: Repeat `oil_leakage`** | Steps **3,600 – 3,899** | 2022-02-13 12:05 to 2022-02-14 13:00 | **300** | Secondary lube console seal degradation (severity 0.90) |
| **Normal Healthy 6** | Steps **3,900 – 4,199** | 2022-02-14 13:05 to 2022-02-15 13:55 | **300** | Stable healthy operation leading into train/test cutoff |
| **TRAIN TOTALS** | **Steps 0 – 4,199** | **14.58 Days Duration** | **4,200** | **Healthy Normal: 2,500 (59.5%) • Injected Faults: 1,700 (40.5%)** |

---

### Part B: 30% Held-Out Validation & Test Partition (`rgc_supervised_test.csv` — 1,800 Samples)

This partition contains completely unseen chronological future data used exclusively to validate out-of-sample generalization.

| Operational Regime | Step Range (Row Indices) | Timestamp Interval | Samples | Regime Nature & Physics |
| :--- | :---: | :---: | :---: | :--- |
| **Unseen Healthy 1** | Steps **4,200 – 4,349** | 2022-02-15 14:00 to 2022-02-16 02:25 | **150** | Unseen steady-state normal baseline |
| **Test Fault 1: `oil_leakage`** | Steps **4,350 – 4,599** | 2022-02-16 02:30 to 2022-02-16 23:15 | **250** | Unseen lube console oil leakage incident |
| **Unseen Healthy 2** | Steps **4,600 – 4,749** | 2022-02-16 23:20 to 2022-02-17 11:45 | **150** | Unseen normal post-incident steady state |
| **Test Fault 2: `air_leakage`** | Steps **4,750 – 4,999** | 2022-02-17 11:50 to 2022-02-18 08:35 | **250** | Unseen instrument air line rupture / ASV bypass jam |
| **Unseen Healthy 3** | Steps **5,000 – 5,149** | 2022-02-18 08:40 to 2022-02-18 21:05 | **150** | Unseen normal steady-state operation |
| **Test Fault 3: `bearing_failure`**| Steps **5,150 – 5,399** | 2022-02-18 21:10 to 2022-02-19 17:55 | **250** | Unseen journal bearing sleeve friction wear |
| **Unseen Healthy 4** | Steps **5,400 – 5,549** | 2022-02-19 18:00 to 2022-02-20 06:25 | **150** | Unseen normal post-repair steady state |
| **Test Fault 4: `suction_filter_choke`**| Steps **5,550 – 5,799** | 2022-02-20 06:30 to 2022-02-21 03:15 | **250** | Unseen suction line filter basket restriction |
| **Unseen Healthy 5** | Steps **5,800 – 5,999** | 2022-02-21 03:20 to 2022-02-21 19:55 | **200** | Unseen post-intervention normal baseline to stream end |
| **TEST TOTALS** | **Steps 4,200 – 5,999** | **6.25 Days Duration** | **1,800** | **Unseen Normal: 800 (44.4%) • Unseen Faults: 1,000 (55.6%)** |

---

## 4. Column Schema & Sequential Engineering Tag Directory

The dataset contains an optimal **18-column supervised ML schema** (15 numerical features + 2 target columns + 1 timestamp):

### Group 1: Continuous Sensor Features (15 Columns)
Mapped from raw plant instrumentation to standardized sequential nomenclature:

| Column Name | Physical Subsystem | Engineering Description | Engineering Unit | Nominal Operating Band |
| :--- | :--- | :--- | :---: | :---: |
| `motor_current_1` | Drive Motor | Motor Operating Current (Phase M1) | Amperes (A) | 139.0 – 145.0 A |
| `flow_rate_1` | Process Gas | CCR Hydrogen Recycle Gas Suction Flow | m³/h | 262.0 – 274.0 m³/h |
| `pressure_1` | Process Gas | Compressor Suction Header Pressure | kg/cm² g | 28.8 – 29.5 kg/cm² |
| `pressure_4` | Process Gas | Final Stage Discharge Pressure | kg/cm² g | 40.2 – 41.6 kg/cm² |
| `anti_surge_valve_1` | Anti-Surge Control | Anti-Surge Recycle Valve Opening (HIC) | % | 70.0 – 72.0 % |
| `vibration_1` | Vibration Probes | Rotor Radial Vibration NDE (X-Probe) | µm pk-pk | 8.0 – 11.0 µm |
| `vibration_3` | Vibration Probes | Rotor Radial Vibration DE Probe | µm pk-pk | 4.2 – 5.8 µm |
| `vibration_4` | Vibration Probes | Compressor Casing Vibration (DE) | mm/s RMS | 3.6 – 4.5 mm/s |
| `vibration_5` | Vibration Probes | Compressor Casing Vibration (NDE) | mm/s RMS | 3.2 – 4.0 mm/s |
| `vibration_6` | Vibration Probes | Drive Motor Bearing Radial Vibration | µm pk-pk | 1.1 – 1.8 µm |
| `axial_displacement_1`| Rotor Position | Rotor Axial Displacement (Thrust Float) | µm | -17.0 to -12.0 µm |
| `temperature_26` | Bearings | Journal Bearing Metal Temp (DE Pad A) | °C | 58.0 – 64.0 °C |
| `temperature_10` | Drive Motor | Motor Stator Winding Temp (Phase U Slot 1)| °C | 43.0 – 48.0 °C |
| `temperature_30` | Lube Oil System | Lube Oil Supply / Header Temperature | °C | 51.0 – 54.5 °C |
| `level_1` | Lube Oil System | Lube Oil Reservoir Tank Level | % | 86.0 – 88.0 % |

### Group 2: Temporal Index (1 Column)
- **`Timestamp`**: ISO-8601 string timestamp (`YYYY-MM-DD HH:MM:SS`) sampled at 5-minute increments.

### Group 3: Supervised Multi-Class Target Labels (2 Columns)
- **`fault_class`** *(Target String)*: Direct component failure mode:
  - `normal_operation` (Code 0)
  - `oil_leakage` (Code 1) — *RCA: Lube console drain leak & hydrodynamic oil film thinning*
  - `bearing_failure` (Code 2) — *RCA: Journal bearing DE sleeve babbitt wiping & friction*
  - `air_leakage` (Code 3) — *RCA: Instrument air line rupture & ASV pneumatic positioner pressure loss*
  - `suction_filter_choke` (Code 4) — *RCA: Suction line strainer mesh particulate fouling & gas starvation*
- **`fault_code`** *(Target Integer)*: Zero-indexed integer (`0` to `4`) for loss function training and classification evaluation.

> [!NOTE]
> Unsupervised binary markers (`anomaly_label`, `regime_category`), physical RCA text columns (`failed_instrument`, `primary_instrument_tag`, `direct_rca`), and the `split` column were intentionally removed from the tabular CSV files to provide a streamlined 18-column numerical ML dataset. All physical failure mechanics and splitting schedules are maintained in this reference document.

---

## 5. Instructions for Ingestion by LLMs & Machine Learning Pipelines

When consuming this dataset via python (`pandas`, `scikit-learn`, `PyTorch`) or feeding context to an LLM:

1. **Dynamic 70–30 Splitting by LLM / Code:**
   The LLM reads this description document and programmatically splits the master combined dataset:
   ```python
   import pandas as pd

   # Load single combined master dataset (no hard-coded split column)
   df_master = pd.read_csv('rgc_combined_labeled_dataset.csv', index_col='Timestamp', parse_dates=True)

   # Split chronologically based on description (70% Train = 4,200 rows, 30% Test = 1,800 rows)
   train_cutoff = 4200
   df_train = df_master.iloc[:train_cutoff]
   df_test  = df_master.iloc[train_cutoff:]
   ```
   *(Alternatively, use the pre-split convenience files `rgc_supervised_train.csv` and `rgc_supervised_test.csv`)*.
2. **Feature vs. Target Slicing:**
   ```python
   sensor_features = [
       'motor_current_1', 'flow_rate_1', 'pressure_1', 'pressure_4', 'anti_surge_valve_1',
       'vibration_1', 'vibration_3', 'vibration_4', 'vibration_5', 'vibration_6',
       'axial_displacement_1', 'temperature_26', 'temperature_10', 'temperature_30', 'level_1'
   ]
   X_train, y_train = df_train[sensor_features], df_train['fault_code']
   X_test,  y_test  = df_test[sensor_features],  df_test['fault_code']
   ```
3. **Handling Class Imbalance:**
   The training split contains $59.5\%$ normal and $40.5\%$ fault samples. When fitting gradient boosters or neural networks, use balanced class weights (`class_weight='balanced'`).
4. **Validating Detection Latency:**
   When evaluating on the test set, note that the 9 transitional misclassifications occur exclusively during the first 20–25 minutes of fault ramp-in before deviations exceed $3\sigma$ operational limits.
