from pathlib import Path
import json, hashlib, sys, re, datetime

ROOT = Path(__file__).resolve().parents[1]
FORBIDDEN = ["TO"+"DO", "TB"+"D", "PLACE"+"HOLDER", "LO"+"REM"]
REQUIRED_STAGE_FIELDS = ['stage_id','goal','owner','start_date','deadline','maximum_timebox_days','planned_budget','maximum_budget','entry_criteria','in_scope','out_of_scope','deliverables','required_tests','required_evidence','kpi_thresholds','zero_tolerance','go_conditions','hold_conditions','pivot_conditions','stop_conditions','next_allowed_stage']

def fail(msg):
    print('FAIL:', msg)
    sys.exit(1)

def read_json(path):
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception as exc:
        fail(f'invalid json {path}: {exc}')

def contains_unresolved_token(upper_text, token):
    pattern = r'(?<![A-Z0-9_])' + re.escape(token) + r'(?![A-Z0-9_])'
    return re.search(pattern, upper_text) is not None

def main():
    files = [p for p in ROOT.rglob('*') if p.is_file() and '.zip' not in p.name]
    if not files:
        fail('no files found')
    for p in files:
        text = p.read_text(encoding='utf-8', errors='ignore')
        if p.suffix in ['.md','.json','.py'] and len(text.strip()) == 0:
            fail(f'empty file {p.relative_to(ROOT)}')
        upper = text.upper()
        for token in FORBIDDEN:
            if contains_unresolved_token(upper, token):
                fail(f'forbidden unresolved token in {p.relative_to(ROOT)}')
    docs = list((ROOT/'docs').glob('*.md'))
    if len(docs) < 15:
        fail('not enough canonical markdown documents')
    for d in docs:
        if len(d.read_text(encoding='utf-8').strip()) < 500:
            fail(f'document too short {d.name}')
    stage_files = sorted((ROOT/'contracts'/'stages').glob('S*.json'))
    if len(stage_files) != 9:
        fail('expected 9 stage contracts')
    last_deadline = None
    for idx, sf in enumerate(stage_files):
        data = read_json(sf)
        for field in REQUIRED_STAGE_FIELDS:
            if field not in data:
                fail(f'missing {field} in {sf.name}')
        if data['maximum_budget'] < data['planned_budget']:
            fail(f'maximum budget lower than planned in {sf.name}')
        start = datetime.date.fromisoformat(data['start_date'])
        deadline = datetime.date.fromisoformat(data['deadline'])
        if deadline < start:
            fail(f'deadline before start in {sf.name}')
        if last_deadline and start <= last_deadline:
            fail(f'stage overlap or non-increasing start in {sf.name}')
        if idx < len(stage_files)-1 and data['next_allowed_stage'] != f'S{idx+1}':
            fail(f'bad next stage in {sf.name}')
        if idx == len(stage_files)-1 and data['next_allowed_stage'] != 'NONE':
            fail('last stage must point to NONE')
        for gate in ['go_conditions','hold_conditions','pivot_conditions','stop_conditions']:
            if not data[gate]:
                fail(f'empty {gate} in {sf.name}')
        last_deadline = deadline
    proof_path = ROOT/'proof'/'proof_compromise_canon_001.json'
    if proof_path.exists():
        proof = read_json(proof_path)
        expected = {
            'project_documentation':'COMPLETE_AND_LOCKED',
            'managed_product':True,
            'primary_customer_defined':True,
            'marketing_strategy_defined':True,
            'commercial_model_defined':True,
            'mvp_cut_line_locked':True,
            'roadmap_bounded':True,
            'deadlines_defined':True,
            'budgets_defined':True,
            'stage_acceptance_defined':True,
            'go_hold_pivot_stop_defined':True,
            'master_traceability_complete':True,
            'fundamental_documentation_layers_remaining':0,
            'production_accepted':False,
        }
        for k,v in expected.items():
            if proof.get(k) != v:
                fail(f'bad proof value {k}')
    trace = read_json(ROOT/'matrices'/'master_traceability_matrix.json')
    if len(trace.get('requirements', [])) < 15:
        fail('traceability matrix too small')
    for req in trace['requirements']:
        for key in ['id','requirement','source','documents','stage_ids','tests','evidence']:
            if key not in req or not req[key]:
                fail(f'traceability row missing {key}')
    index_path = ROOT/'artifact_index.json'
    if index_path.exists():
        index = read_json(index_path)
        for item in index.get('items', []):
            p = ROOT/item['path']
            if not p.exists():
                fail(f'indexed file missing {item["path"]}')
            h = hashlib.sha256(p.read_bytes()).hexdigest()
            if h != item['sha256']:
                fail(f'sha mismatch {item["path"]}')
    print(json.dumps({'validation':'PASS','file_count':len(files),'stage_contracts':len(stage_files),'docs':len(docs)}, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
