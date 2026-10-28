"""
Compressor Train A (RGC_A) - Digital Twin & Synthetic Telemetry Generator
Learns multivariate distribution, covariance, and AR(1) temporal dynamics from
the clean baseline period (March 2020) and generates realistic normal and abnormal
time-series datasets with physically grounded industrial fault modes.
"""

import os
import numpy as np
import pandas as pd
from datetime import datetime, timedelta

KEY_FEATURES = [
    'CCRNIIK001AM1.PV',  # Motor Current (A)
    'CCRNFI0703BA.PV',   # Suction / Forward Flow (m3/h)
    'CCRNPI0704.PV',     # Suction Header Pressure (kg/cm2)
    'CCRNPI0721AA.PV',   # Final Discharge Pressure (kg/cm2)
    'CCRNHIC0773A.PV',   # Anti-Surge Control Valve (%)
    'CCRNVI0780AA.PV',   # Radial Vibration NDE X (um)
    'CCRNVI0780AC.PV',   # Radial Vibration DE (um)
    'CCRNVI0781A.PV',    # Casing Vibration DE (mm/s RMS)
    'CCRNVI0782A.PV',    # Casing Vibration NDE (mm/s RMS)
    'CCRNVI0790AA.PV',   # Motor Bearing Vibration (um)
    'CCRNZI0780A.PV',    # Rotor Axial Thrust Position (um)
    'CCRNTI0780AA.PV',   # Journal Bearing DE Temp (°C)
    'CCRNTI0785AA.PV',   # Motor Stator Winding Phase U Temp (°C)
    'CCRNTI0781A.PV',    # Lube Oil Header Supply Temp (°C)
    'CCRNLI0760A.PV'     # Lube Oil Reservoir Level (%)
]

FEATURE_NAMES = {
    'CCRNIIK001AM1.PV': 'Motor Current (A)',
    'CCRNFI0703BA.PV':  'Forward Gas Flow (m3/h)',
    'CCRNPI0704.PV':    'Suction Pressure (kg/cm2)',
    'CCRNPI0721AA.PV':  'Discharge Pressure (kg/cm2)',
    'CCRNHIC0773A.PV':  'Anti-Surge Valve (%)',
    'CCRNVI0780AA.PV':  'Radial Vib NDE (um)',
    'CCRNVI0780AC.PV':  'Radial Vib DE (um)',
    'CCRNVI0781A.PV':   'Casing Vib DE (mm/s)',
    'CCRNVI0782A.PV':   'Casing Vib NDE (mm/s)',
    'CCRNVI0790AA.PV':  'Motor Bearing Vib (um)',
    'CCRNZI0780A.PV':   'Axial Thrust Float (um)',
    'CCRNTI0780AA.PV':  'Journal Bearing Temp (°C)',
    'CCRNTI0785AA.PV':  'Stator Winding Temp (°C)',
    'CCRNTI0781A.PV':   'Lube Oil Header Temp (°C)',
    'CCRNLI0760A.PV':   'Lube Oil Level (%)'
}

class CompressorDigitalTwin:
    def __init__(self, baseline_csv='baseline_clean_loaded_march_2020.csv'):
        self.features = KEY_FEATURES
        self.feature_names = FEATURE_NAMES
        self.baseline_csv = baseline_csv
        self.means = None
        self.stds = None
        self.cov_matrix = None
        self.corr_matrix = None
        self.phi_ar1 = None
        self.noise_cov = None
        self.fit_baseline()

    def fit_baseline(self):
        """Learns means, standard deviations, correlations, and AR(1) dynamics from real telemetry."""
        if not os.path.exists(self.baseline_csv):
            raise FileNotFoundError(f"Baseline CSV {self.baseline_csv} not found.")

        df = pd.read_csv(self.baseline_csv)
        missing = [f for f in self.features if f not in df.columns]
        if missing:
            raise ValueError(f"Features missing in baseline: {missing}")

        df_feat = df[self.features].copy()
        # Handle zero-variance sensors like static valve setting in baseline
        self.means = df_feat.mean().values
        self.stds = df_feat.std().values
        
        # Give minimum variance to static tags to prevent singular covariance
        for i, f in enumerate(self.features):
            if self.stds[i] < 1e-4:
                self.stds[i] = 0.05 * (abs(self.means[i]) if abs(self.means[i]) > 0 else 1.0)

        # Empirical covariance and correlation
        self.cov_matrix = df_feat.cov().values
        # Regularize diagonal
        np.fill_diagonal(self.cov_matrix, self.stds**2)
        
        # Calculate AR(1) temporal lag-1 autocorrelation for each sensor
        self.phi_ar1 = np.zeros(len(self.features))
        for i, col in enumerate(self.features):
            s = df_feat[col].values
            if len(s) > 1 and np.std(s) > 1e-4:
                r1 = np.corrcoef(s[:-1], s[1:])[0, 1]
                if np.isnan(r1):
                    r1 = 0.95
                self.phi_ar1[i] = np.clip(r1, 0.85, 0.98)
            else:
                self.phi_ar1[i] = 0.95

        # AR(1) driving noise covariance: Sigma_eps = (1 - phi_i * phi_j) * Cov_ij
        P = np.outer(self.phi_ar1, self.phi_ar1)
        scale_mat = np.sqrt(np.maximum(1.0 - P, 0.01))
        self.noise_cov = self.cov_matrix * scale_mat
        
        # Ensure positive semi-definite
        eigenvals, eigenvecs = np.linalg.eigh(self.noise_cov)
        eigenvals = np.maximum(eigenvals, 1e-6)
        self.noise_cov = eigenvecs @ np.diag(eigenvals) @ eigenvecs.T

        print("-> Fitted Digital Twin successfully from baseline data.")
        print(f"   Features modeled: {len(self.features)}")
        print(f"   Mean Motor Current: {self.means[0]:.2f} A, Mean Flow: {self.means[1]:.2f} m3/h")
        print(f"   Mean Casing Vib DE: {self.means[7]:.2f} mm/s, Bearing Temp: {self.means[11]:.2f} °C")

    def generate_normal_series(self, n_steps=2880, start_dt=datetime(2022, 2, 1, 0, 0), seed=42):
        """
        Generates stationary synthetic normal time-series via multivariate AR(1) with diurnal cycles.
        2880 steps @ 5-min = 10 days.
        """
        np.random.seed(seed)
        p = len(self.features)
        
        # Cholesky decomposition of noise covariance
        L = np.linalg.cholesky(self.noise_cov)
        white_noise = np.random.randn(n_steps, p)
        colored_noise = white_noise @ L.T

        data = np.zeros((n_steps, p))
        data[0] = self.means + colored_noise[0]

        # Diurnal temperature cycle parameters (24 hours = 288 steps of 5-min)
        steps_per_day = 288
        t_cycle = np.sin(2 * np.pi * np.arange(n_steps) / steps_per_day)

        for t in range(1, n_steps):
            data[t] = self.means + self.phi_ar1 * (data[t-1] - self.means) + colored_noise[t]

        # Add mild physical daily thermal fluctuations to temperatures (±1.5 °C)
        temp_indices = [11, 12, 13]  # Journal bearing, Stator, Lube oil
        for idx in temp_indices:
            data[:, idx] += 1.2 * t_cycle

        # Physical boundary clipping
        # Motor Current >= 135 A
        data[:, 0] = np.clip(data[:, 0], 138.0, 146.0)
        # Flow >= 250 m3/h
        data[:, 1] = np.clip(data[:, 1], 260.0, 275.0)
        # Suction Pressure
        data[:, 2] = np.clip(data[:, 2], 28.8, 29.5)
        # Discharge Pressure
        data[:, 3] = np.clip(data[:, 3], 40.2, 41.6)
        # Anti-Surge Valve (normally 70.0 - 72.0%)
        data[:, 4] = np.clip(data[:, 4], 70.0, 72.0)
        # Vibrations >= 0
        data[:, 5:10] = np.maximum(data[:, 5:10], 0.2)
        # Casing Vibration DE healthy zone (ISO 10816 Zone A/B < 4.5 mm/s)
        data[:, 7] = np.clip(data[:, 7], 3.2, 4.6)
        # Bearing Temp
        data[:, 11] = np.clip(data[:, 11], 58.0, 64.0)

        timestamps = [start_dt + timedelta(minutes=5 * i) for i in range(n_steps)]
        df = pd.DataFrame(data, columns=self.features, index=timestamps)
        df.index.name = 'Timestamp'
        df['anomaly_label'] = 0
        df['fault_type'] = 'normal'
        return df

    def inject_antisurge_recycle_fault(self, df, start_idx, duration=576, severity=1.0):
        """
        Fault Mode 1: Anti-Surge Valve Recycle / Actuator Jam.
        Replicates the exact July 2021 physical failure:
        - ASV drops from 71% to 66% (holding open internal bypass).
        - Net forward flow drops by -7σ to -8σ (~254 m3/h).
        - Casing vibration spikes from 4.2 to 7.3 mm/s (aerodynamic turbulence).
        - Motor current rises to ~144.5 A.
        - Bearing temperatures remain normal (proving aerodynamic, not mechanical bearing seizure).
        """
        end_idx = min(start_idx + duration, len(df))
        actual_len = end_idx - start_idx
        
        # Smooth ramp-in over 36 steps (3 hours)
        ramp = np.clip(np.linspace(0, 1, min(36, actual_len)), 0, 1)
        if len(ramp) < actual_len:
            ramp = np.concatenate([ramp, np.ones(actual_len - len(ramp))])

        # Anti-Surge Valve drop to 66.0%
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNHIC0773A.PV')] -= (5.0 * severity) * ramp
        # Flow collapse (-14 m3/h = -7.5 sigma)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNFI0703BA.PV')] -= (14.2 * severity) * ramp
        # Casing Vibration spike (+2.5 to +3.1 mm/s RMS -> ISO Zone D Danger > 6.5 mm/s)
        turb_noise = np.random.normal(0, 0.4, actual_len)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNVI0781A.PV')] += ((2.8 * severity) * ramp) + turb_noise
        # Motor Current elevation (+2.0 A)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNIIK001AM1.PV')] += (2.2 * severity) * ramp
        # Discharge pressure slight shift (+0.8 kg/cm2)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNPI0721AA.PV')] += (0.9 * severity) * ramp

        df.iloc[start_idx:end_idx, df.columns.get_loc('anomaly_label')] = 1
        df.iloc[start_idx:end_idx, df.columns.get_loc('fault_type')] = 'anti_surge_recycle_jam'

    def inject_bearing_wear_fault(self, df, start_idx, duration=576, severity=1.0):
        """
        Fault Mode 2: Journal Bearing Wear & Lubrication Breakdown.
        - Radial Vibration DE & NDE climb from 9/5 um to 45-75 um.
        - Journal Bearing DE Temp climbs from 60°C to 82-90°C.
        - Lube oil supply temp increases by +6°C.
        - Flow and pressure remain normal.
        """
        end_idx = min(start_idx + duration, len(df))
        actual_len = end_idx - start_idx
        
        ramp = np.linspace(0.1, 1.0, actual_len)
        
        # Radial Vibration DE
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNVI0780AC.PV')] += (35.0 * severity) * ramp
        # Radial Vibration NDE
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNVI0780AA.PV')] += (42.0 * severity) * ramp
        # Bearing Temp rise (+24 °C)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNTI0780AA.PV')] += (22.5 * severity) * ramp
        # Lube Oil Temp rise (+6 °C)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNTI0781A.PV')] += (6.5 * severity) * ramp
        # Motor current slight friction drag (+1.2 A)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNIIK001AM1.PV')] += (1.2 * severity) * ramp

        df.iloc[start_idx:end_idx, df.columns.get_loc('anomaly_label')] = 1
        df.iloc[start_idx:end_idx, df.columns.get_loc('fault_type')] = 'bearing_wear_thermal_friction'

    def inject_suction_choke_fault(self, df, start_idx, duration=576, severity=1.0):
        """
        Fault Mode 3: Suction Filter Choke / Line Restriction.
        - Suction Header Pressure drops from 29.2 to 26.5 kg/cm2 (-15 sigma).
        - Forward Flow drops from 268 to 240 m3/h (-15 sigma).
        - Pressure ratio spikes, stator winding temp rises +8°C.
        """
        end_idx = min(start_idx + duration, len(df))
        actual_len = end_idx - start_idx
        
        ramp = np.linspace(0.2, 1.0, actual_len)

        # Suction Pressure drop (-2.4 kg/cm2)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNPI0704.PV')] -= (2.4 * severity) * ramp
        # Flow drop (-22 m3/h)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNFI0703BA.PV')] -= (22.0 * severity) * ramp
        # Discharge pressure slight drop (-1.1 kg/cm2)
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNPI0721AA.PV')] -= (1.1 * severity) * ramp
        # Stator temp increase due to increased compressor head
        df.iloc[start_idx:end_idx, df.columns.get_loc('CCRNTI0785AA.PV')] += (8.5 * severity) * ramp

        df.iloc[start_idx:end_idx, df.columns.get_loc('anomaly_label')] = 1
        df.iloc[start_idx:end_idx, df.columns.get_loc('fault_type')] = 'suction_filter_choke'

    def generate_full_test_suite(self):
        """
        Generates and saves:
        1. synthetic_normal_train.csv (10 days = 2880 samples)
        2. synthetic_normal_test.csv  (7 days = 2016 samples, completely unseen)
        3. synthetic_abnormal_test.csv (14 days = 4032 samples with multi-fault phases)
        """
        print("\n--- Generating Synthetic Datasets ---")
        
        # 1. Training Normal Set (10 days)
        df_train = self.generate_normal_series(n_steps=2880, start_dt=datetime(2022, 2, 1, 0, 0), seed=101)
        df_train.to_csv('synthetic_normal_train.csv')
        print(f"1. Saved synthetic_normal_train.csv: {df_train.shape} (10 days)")

        # 2. Testing Normal Unseen Set (7 days)
        df_test_norm = self.generate_normal_series(n_steps=2016, start_dt=datetime(2022, 2, 11, 0, 0), seed=202)
        df_test_norm.to_csv('synthetic_normal_test.csv')
        print(f"2. Saved synthetic_normal_test.csv: {df_test_norm.shape} (7 days unseen normal)")

        # 3. Testing Abnormal Set (14 days = 4032 samples)
        # Schedule:
        # Step 0 - 576: Normal Operation (2 days)
        # Step 576 - 1152: Fault 1: Anti-Surge Recycle Jam (2 days)
        # Step 1152 - 1728: Normal Recovery (2 days)
        # Step 1728 - 2304: Fault 2: Bearing Wear & Thermal Friction (2 days)
        # Step 2304 - 2880: Normal Recovery (2 days)
        # Step 2880 - 3456: Fault 3: Suction Filter Choke (2 days)
        # Step 3456 - 4032: Normal Post-Intervention (2 days)
        df_abnormal = self.generate_normal_series(n_steps=4032, start_dt=datetime(2022, 2, 18, 0, 0), seed=303)
        
        print("   Injecting Fault 1: Anti-Surge Recycle Jam (Steps 576-1152)...")
        self.inject_antisurge_recycle_fault(df_abnormal, start_idx=576, duration=576, severity=1.0)
        
        print("   Injecting Fault 2: Bearing Wear & Friction (Steps 1728-2304)...")
        self.inject_bearing_wear_fault(df_abnormal, start_idx=1728, duration=576, severity=1.0)

        print("   Injecting Fault 3: Suction Filter Choke (Steps 2880-3456)...")
        self.inject_suction_choke_fault(df_abnormal, start_idx=2880, duration=576, severity=1.0)

        df_abnormal.to_csv('synthetic_abnormal_test.csv')
        n_anom = (df_abnormal['anomaly_label'] == 1).sum()
        pct = (n_anom / len(df_abnormal)) * 100
        print(f"3. Saved synthetic_abnormal_test.csv: {df_abnormal.shape} ({n_anom} anomalies = {pct:.1f}%)")

        return df_train, df_test_norm, df_abnormal

if __name__ == '__main__':
    sim = CompressorDigitalTwin()
    sim.generate_full_test_suite()
