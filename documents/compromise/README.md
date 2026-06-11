# Compromise — Canonical Documentation Index

## Package structure

```
documents/compromise/
├── canon_package_001/            Foundational canonical documentation package
├── acquisition_strategy_001/     ADR-backed acquisition/growth strategy extension
├── legal_prelaunch_base_001/     BLOCKING LEGAL EXTENSION (MVP scope lock)
└── README.md                     This file
```

## Package descriptions

### `canon_package_001` — Foundational Canon

This is the Compromise foundational canonical product documentation package. It defines the product scope, market/commercial model, GTM strategy, roadmap, financial boundaries, requirements, domain methodology, UX/technical canon, security/privacy, governance, and all stage contracts (S0–S8). The package is **complete and locked**.

- Proof: `proof/proof_compromise_canon_001.json`
- Master index: `docs/00_MASTER_INDEX.md`

### `acquisition_strategy_001` — ADR-Backed Extension

This is an ADR-backed strategic extension covering candidate acquisition, employer acquisition, platform outreach, and channel strategy. It extends the canon package with growth-specific documentation.

- Proof: `proof/proof_acquisition_strategy_001.json`
- ADR: `docs/04_adr_acquisition_strategy.md`

**Important:** This package is an add-on to the canon package. It does **not** replace or modify the foundational documentation. All foundational documentation layers remain closed.

### `legal_prelaunch_base_001` — Blocking Legal Extension

This is a **blocking legal extension** that locks the MVP scope to a verified job board only. It is not legal advice and must be reviewed by qualified Serbian/EU counsel before public launch, paid pilots, cross-border candidate disclosure, AI screening, or recruitment/intermediation services.

The MVP model is locked to **VERIFIED_JOB_BOARD_ONLY**. All recruitment/agency-like features (assisted hiring, candidate shortlisting, screening interviews, success fees, candidate selection/ranking, AI-based employer-side scoring, guaranteed hiring, temporary employment/staffing, employer-visible skill badges, simulation reports visible to employers) are **blocked until legal review**.

Whether a license is required for a verified job board is **NOT CONFIRMED** and requires lawyer confirmation.

- ADR: `docs/10_adr_mvp_verified_job_board_scope_lock.md`
- Proof: `proof/proof_legal_prelaunch_base_001.json`

## Integration contract

```json
{
  "canon_package_001": "FOUNDATIONAL_CANON",
  "acquisition_strategy_001": "ADR_BACKED_EXTENSION",
  "legal_prelaunch_base_001": "BLOCKING_LEGAL_EXTENSION",
  "mvp_model_locked": "VERIFIED_JOB_BOARD_ONLY",
  "lawyer_review_required": true,
  "replaces_canon": false,
  "fundamental_documentation_layers_remaining": 0,
  "future_changes_require": ["ADR", "change_request"],
  "production_accepted": false
}
```

## Change management

Any future modifications to these documentation packages must be introduced through:
- An **ADR** (Architecture Decision Record) — for strategic or architectural changes.
- A **Change Request** — for scope, contract, or requirement changes.

Runtime work must trace to a stage contract and a test evidence artifact.

## Production status

Production is **not accepted** at the documentation level. Production acceptance is governed by the S8 gate defined in `canon_package_001`.
