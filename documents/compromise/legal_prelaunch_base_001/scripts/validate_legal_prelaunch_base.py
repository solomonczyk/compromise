#!/usr/bin/env python3
from pathlib import Path
import json, re, sys

base = Path(__file__).resolve().parents[1]
required = [
    "README.md",
    "docs/01_legal_prelaunch_baseline.md",
    "docs/02_required_legal_documents.md",
    "docs/03_privacy_and_data_protection.md",
    "docs/04_recruitment_intermediation_and_licensing.md",
    "docs/05_anti_discrimination_and_sensitive_matching.md",
    "docs/06_ai_recruitment_compliance.md",
    "docs/07_sanctions_jurisdiction_and_employer_verification.md",
    "docs/08_questions_for_lawyer.md",
    "docs/09_sources.md",
    "proof/proof_legal_prelaunch_base_001.json"
]
errors = []
for rel in required:
    p = base / rel
    if not p.exists():
        errors.append(f"missing {rel}")
    elif p.stat().st_size < 500:
        errors.append(f"too small {rel}")
for md in (base / "docs").glob("*.md"):
    txt = md.read_text(encoding="utf-8")
    if re.search(r"\b(TODO|TBD|PLACEHOLDER)\b", txt, re.IGNORECASE):
        errors.append(f"placeholder marker in {md.name}")
    if "production_accepted" not in txt:
        errors.append(f"production gate missing {md.name}")
proof = json.loads((base / "proof/proof_legal_prelaunch_base_001.json").read_text(encoding="utf-8"))
if proof.get("legal_advice") is not False:
    errors.append("legal_advice must be false")
if proof.get("lawyer_review_required") is not True:
    errors.append("lawyer_review_required must be true")
if proof.get("production_accepted") is not False:
    errors.append("production_accepted must remain false")
if proof.get("public_launch_allowed") is not False:
    errors.append("public_launch_allowed must remain false")
if errors:
    print(json.dumps({"validation": "FAIL", "errors": errors}, ensure_ascii=False, indent=2))
    sys.exit(1)
print(json.dumps({
    "validation": "PASS",
    "files_checked": len(required),
    "lawyer_review_required": True,
    "public_launch_allowed": False,
    "production_accepted": False
}, ensure_ascii=False, indent=2))
