# Compromise — Canonical Documentation Index

## Package structure

```
documents/compromise/
├── canon_package_001/          Foundational canonical documentation package
├── acquisition_strategy_001/   ADR-backed acquisition/growth strategy extension
└── README.md                   This file
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

## Integration contract

```json
{
  "canon_package_001": "FOUNDATIONAL_CANON",
  "acquisition_strategy_001": "ADR_BACKED_EXTENSION",
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
