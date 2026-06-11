#!/usr/bin/env python3
from pathlib import Path
import json, csv, sys, re
base = Path(__file__).resolve().parents[1]
required = [
 'docs/01_candidate_acquisition_strategy.md',
 'docs/02_employer_acquisition_strategy.md',
 'docs/03_platforms_and_outreach_map.md',
 'docs/04_adr_acquisition_strategy.md',
 'docs/05_sources.md',
 'data/candidate_channels.csv',
 'data/employer_target_accounts.csv',
 'proof/proof_acquisition_strategy_001.json']
errors=[]
for rel in required:
    p=base/rel
    if not p.exists(): errors.append(f'missing: {rel}')
    elif p.stat().st_size < 500: errors.append(f'too small: {rel}')
for md in (base/'docs').glob('*.md'):
    txt=md.read_text(encoding='utf-8')
    if re.search(r'\b(TODO|TBD|PLACEHOLDER)\b', txt, re.I): errors.append(f'placeholder marker found: {md.name}')
    if 'production_accepted=false' not in txt and '"production_accepted": false' not in txt:
        errors.append(f'production gate missing: {md.name}')
with open(base/'data/candidate_channels.csv', encoding='utf-8') as f:
    rows=list(csv.DictReader(f))
    if len(rows) < 8: errors.append('not enough candidate channels')
    if not all(r.get('risk_control') for r in rows): errors.append('candidate channels missing risk controls')
with open(base/'data/employer_target_accounts.csv', encoding='utf-8') as f:
    rows=list(csv.DictReader(f))
    if len(rows) < 30: errors.append('not enough employer target accounts')
    if not all(r.get('verification_before_contact') for r in rows): errors.append('employer targets missing verification rule')
proof=json.loads((base/'proof/proof_acquisition_strategy_001.json').read_text(encoding='utf-8'))
if proof.get('production_accepted') is not False: errors.append('production_accepted must be false')
if not proof.get('opt_in_only'): errors.append('opt_in_only must be true')
if not proof.get('scraping_forbidden'): errors.append('scraping_forbidden must be true')
if errors:
    print(json.dumps({'validation':'FAIL','errors':errors}, indent=2, ensure_ascii=False)); sys.exit(1)
print(json.dumps({'validation':'PASS','required_files':len(required),'candidate_channels':proof['candidate_channels'],'employer_target_accounts':proof['target_employer_accounts'],'production_accepted':False}, indent=2, ensure_ascii=False))
