"""
Correct erroneous column names in 2020_RGC_A_Sequential_Sensor_Names.xlsx
Replaces unverified placeholder names with verified physical instrumentation tags.
"""

import zipfile
import re
import json
import csv
import shutil
import hashlib
from pathlib import Path
from collections import Counter
from xml.sax.saxutils import escape
import openpyxl

def correct_sequential_headers():
    print("=" * 85)
    print("CORRECTING SEQUENTIAL SENSOR NAMES IN 2020_RGC_A_Sequential_Sensor_Names.xlsx")
    print("=" * 85)

    base = Path(r'C:\Users\Mukesh Patil\Documents\ChatGPT\compressor\outputs\rgc_compressor1')
    src_xlsx = base / '2020_RGC_A_Sequential_Sensor_Names.xlsx'
    temp_xlsx = base / '2020_RGC_A_Sequential_Sensor_Names_temp.xlsx'
    mapping_json = base / 'mapping.json'
    
    if not src_xlsx.exists():
        raise FileNotFoundError(f"Source file not found: {src_xlsx}")

    mapping = json.loads(mapping_json.read_text(encoding='utf-8'))

    # Load tag dictionary for physical verification
    tag_dict_path = Path(r'c:\Users\Mukesh Patil\Documents\compressor\compressor_a_tag_dictionary.csv')
    tag_info = {}
    if tag_dict_path.exists():
        with open(tag_dict_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for r in reader:
                tag_info[r['Tag']] = r

    # Correct category types
    # Changes made:
    # 1. IIK / II: 'motor_current' (was 'unverified_iik_signal')
    # 2. KI:       'shaft_speed' (was 'unverified_ki_signal')
    # 3. HIC:      'anti_surge_valve' (was 'manual_controller_value')
    # 4. ZI:       'axial_displacement' (was 'position_displacement')
    types = {
        'FI': 'flow_rate',
        'PI': 'pressure',
        'TI': 'temperature',
        'TXI': 'temperature',
        'VI': 'vibration',
        'ZI': 'axial_displacement',
        'II': 'motor_current',
        'IIK': 'motor_current',
        'KI': 'shaft_speed',
        'PDI': 'differential_pressure',
        'LI': 'level',
        'HIC': 'anti_surge_valve'
    }

    counts = Counter()
    names = {'B2': 'timestamp'}
    corrections_log = []

    for m in mapping:
        code = m['code']
        tag = m['tag']
        cell = m['cell']
        
        # Determine corrected sequential name
        kind = types.get(code, 'unverified_signal')
        counts[kind] += 1
        new_name = f"{kind}_{counts[kind]}"
        
        # Previous name for audit comparison
        prev_name = m.get('name', '')
        
        # Physical details
        info = tag_info.get(tag, {})
        desc = info.get('Description', m.get('name', ''))
        unit = info.get('Unit', '')
        cat = info.get('Category', kind.replace('_', ' ').title())

        # Note explanation
        if code == 'IIK':
            note = 'Drive Motor Operating Current (Amperes). Fixed from unverified_iik_signal.'
        elif code == 'KI':
            note = 'Compressor Shaft Speed / Keyphasor (RPM). Fixed from unverified_ki_signal.'
        elif code == 'HIC':
            note = 'Anti-Surge Recycle Control Valve Opening (%). Fixed from manual_controller_value.'
        elif code == 'ZI':
            note = 'Rotor Axial Thrust Float Displacement (µm). Refined from generic position_displacement.'
        elif code == 'TXI':
            note = 'Bearing Metal Temperature (Pads 1-8, °C).'
        elif code == 'VI':
            note = 'Radial shaft or casing vibration.'
        else:
            note = f'{cat} sensor ({unit}).'

        m['corrected_name'] = new_name
        m['desc'] = desc
        m['unit'] = unit
        m['category'] = cat
        m['note'] = note
        names[cell] = new_name

        corrections_log.append({
            'Cell': cell,
            'Tag': tag,
            'Previous_Column_Name': prev_name,
            'Corrected_Column_Name': new_name,
            'Category': cat,
            'Unit': unit,
            'Description': desc,
            'Status': 'CHANGED' if prev_name != new_name else 'RETAINED'
        })

    # Print changed columns
    print("\nIdentified Column Corrections:")
    print("-" * 85)
    print(f"{'Cell':<6}{'Tag':<20}{'Old Name':<28}{'Corrected Name':<28}")
    print("-" * 85)
    for c in corrections_log:
        if c['Status'] == 'CHANGED':
            print(f"{c['Cell']:<6}{c['Tag']:<20}{c['Previous_Column_Name']:<28}{c['Corrected_Column_Name']:<28}")
    print("-" * 85)

    # Patch row 2 in Excel XML
    def patchrow(row_xml):
        def sub(match):
            c_xml = match.group()
            addr = re.search(r'\br="([A-Z]+2)"', c_xml).group(1)
            if addr not in names:
                return c_xml
            style_m = re.search(r'\bs="(\d+)"', c_xml)
            style_attr = f' s="{style_m.group(1)}"' if style_m else ''
            return f'<c r="{addr}"{style_attr} t="inlineStr"><is><t>{escape(names[addr])}</t></is></c>'
        return re.sub(r'<c\b[^>]*>.*?</c>', sub, row_xml)

    print(f"\nPatching row 2 in '{src_xlsx.name}'...")
    with zipfile.ZipFile(src_xlsx, 'r') as zin, zipfile.ZipFile(temp_xlsx, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=1) as zout:
        for item in zin.infolist():
            if item.filename == 'xl/worksheets/sheet1.xml':
                with zin.open(item) as inp, zout.open(item, 'w', force_zip64=True) as dst:
                    prefix = inp.read(150000).decode('utf-8')
                    prefix_patched, n_sub = re.subn(r'<row\b[^>]*\br="2"[^>]*>.*?</row>', lambda m: patchrow(m.group()), prefix, count=1)
                    assert n_sub == 1, "Failed to find and replace row 2"
                    dst.write(prefix_patched.encode('utf-8'))
                    shutil.copyfileobj(inp, dst, 4 * 1024 * 1024)
            else:
                zout.writestr(item, zin.read(item))

    # Verify that telemetry data rows (after row 2) are 100% byte-identical
    def get_data_hash(xlsx_file):
        with zipfile.ZipFile(xlsx_file) as z:
            with z.open('xl/worksheets/sheet1.xml') as f:
                prefix = f.read(150000)
                end = re.search(rb'<row\b[^>]*\br="2"[^>]*>.*?</row>', prefix).end()
                h = hashlib.sha256(prefix[end:])
                while chunk := f.read(4 * 1024 * 1024):
                    h.update(chunk)
                return h.hexdigest()

    print("Verifying data integrity (SHA-256 of data rows 3 to 214,112)...")
    hash_old = get_data_hash(src_xlsx)
    hash_new = get_data_hash(temp_xlsx)
    assert hash_old == hash_new, "Data mismatch! Telemetry rows were altered."
    print("-> Telemetry data rows are 100% BYTE-IDENTICAL. Only header row 2 was updated.")

    # Overwrite destination file safely
    shutil.move(str(temp_xlsx), str(src_xlsx))
    print(f"-> Successfully updated '{src_xlsx}'.")

    # Also copy to workspace compressor directory for immediate user access
    ws_copy = Path(r'c:\Users\Mukesh Patil\Documents\compressor\2020_RGC_A_Sequential_Sensor_Names.xlsx')
    shutil.copyfile(src_xlsx, ws_copy)
    print(f"-> Placed workspace copy at '{ws_copy}'.")

    # Write updated RGC_A_Sequential_Tag_Mapping.csv
    map_csv_path1 = base / 'RGC_A_Sequential_Tag_Mapping.csv'
    map_csv_path2 = Path(r'c:\Users\Mukesh Patil\Documents\compressor\RGC_A_Sequential_Tag_Mapping.csv')

    fieldnames = ['Cell', 'Tag', 'Corrected_Column_Name', 'Previous_Column_Name', 'Category', 'Unit', 'Description', 'Status']
    for p in [map_csv_path1, map_csv_path2]:
        with open(p, 'w', newline='', encoding='utf-8-sig') as f:
            w = csv.DictWriter(f, fieldnames=fieldnames)
            w.writeheader()
            w.writerows(corrections_log)
        print(f"-> Saved mapping table to '{p}'.")

    # Quick inspection with openpyxl
    wb = openpyxl.load_workbook(src_xlsx, read_only=True)
    ws = wb['RGC_A']
    hdr = list(ws.iter_rows(min_row=2, max_row=2, values_only=True))[0]
    print("\nVerified Updated Headers (First 20 Columns):")
    for idx, name in enumerate(hdr[1:21], 1):
        print(f"  Col {idx:>2}: {name}")

    print("\nAll corrections completed successfully!")

if __name__ == '__main__':
    correct_sequential_headers()
