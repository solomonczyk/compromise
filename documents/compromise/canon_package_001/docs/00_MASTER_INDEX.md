# Compromise Canonical Product Documentation Package 001

Status: COMPLETE_AND_LOCKED after acceptance. Date: 2026-06-11. Repository target: `solomonczyk/compromise`.

This package defines Compromise as a managed job marketplace inspired by HH.ru mechanics, but narrowed for a first paid path. The baseline assumption is that the current implementation is not trusted as product truth until S1 repository recovery classifies it. The documentation is the governing source for product, delivery, validation, commercial launch and scale decisions.

## Canonical rule
After this package is accepted, there are zero remaining foundational documentation layers. Any future fundamental change must be introduced through a change request or an ADR. Runtime work must trace to this package, a stage contract, and a test evidence artifact.

## Product lock summary
- Primary customer: small and medium employers who need credible candidates fast and cannot afford noisy broad sourcing.
- Primary user supply: candidates seeking work through a trusted, moderated flow.
- First sellable result: one paid pilot for a moderated vacancy plus curated candidate/application handling.
- MVP boundary: job posting, candidate profile, application, employer workspace, admin moderation, audit, analytics, support, deletion/export.
- Cut line: no self-serve subscription, no resume database sale, no authoritative AI hiring decision, no production acceptance before explicit S8 gate.

## Documents
- [Product canon](01_product_canon.md)
- [Market and commercial canon](02_market_commercial_canon.md)
- [Marketing and GTM strategy](03_marketing_gtm_strategy.md)
- [Customer validation](04_customer_validation.md)
- [Product roadmap](05_product_roadmap.md)
- [Financial boundaries](06_financial_boundaries.md)
- [Product requirements](07_product_requirements.md)
- [Recruitment methodology](08_domain_methodology.md)
- [UX and design canon](09_ux_design_canon.md)
- [Technical canon](10_technical_canon.md)
- [Security and privacy](11_security_privacy.md)
- [Dangerous-action gates](12_dangerous_action_gates.md)
- [Testing and acceptance](13_testing_acceptance.md)
- [Operations](14_operations.md)
- [Governance](15_governance.md)
- [Current state audit](16_current_state_audit.md)
- [MVP cut line](17_mvp_scope_cut_line.md)

## Machine-readable artifacts
- `contracts/stages/` — stage contracts S0-S8 with dates, budgets, entry criteria, exit logic and GO/HOLD/PIVOT/STOP.
- `schemas/` — JSON Schemas for contracts, proof, registers, traceability, change requests and ADRs.
- `examples/` — accepted examples for stage contract, change request and ADR.
- `registers/` — assumptions, risks, decisions, dependencies and owners.
- `matrices/` — KPI matrix, budget matrix and master traceability matrix.
- `scripts/validate_canon_package.py` — validation script.
- `artifact_index.json` — file inventory with SHA256 for non-circular artifacts.
- `proof/proof_compromise_canon_001.json` — acceptance proof.

## Stage map
| stage_id | name | start | deadline | owner | next |
| --- | --- | --- | --- | --- | --- |
| S0 | Canon Lock and Blind-Implementation Audit | 2026-06-11 | 2026-06-13 | Product Owner | S1 |
| S1 | Repository Recovery and Architecture Alignment | 2026-06-14 | 2026-06-20 | Tech Lead | S2 |
| S2 | MVP Hiring Marketplace Core | 2026-06-21 | 2026-06-30 | Full-stack Lead | S3 |
| S3 | Trust, Safety, Analytics and Recovery Layer | 2026-07-01 | 2026-07-07 | Security and QA Lead | S4 |
| S4 | Concierge Validation with Real Employers | 2026-07-08 | 2026-07-14 | Founder / Product Owner | S5 |
| S5 | Closed Beta | 2026-07-15 | 2026-07-24 | Product Owner + Support Owner | S6 |
| S6 | Paid Pilot | 2026-07-25 | 2026-08-03 | Founder / Sales Owner | S7 |
| S7 | Controlled Go-To-Market | 2026-08-04 | 2026-08-10 | Marketing Owner | S8 |
| S8 | Scale Decision and Production Acceptance Gate | 2026-08-11 | 2026-08-17 | Founder + Technical Owner | NONE |

## Acceptance statement
This package does not accept production. It only accepts the documentation baseline. The final proof intentionally keeps `production_accepted=false`.

## Related packages

- [Acquisition Strategy 001](../acquisition_strategy_001/) — ADR-backed strategic extension covering candidate and employer acquisition, platform outreach, and channel strategy.

Acquisition Strategy 001 is an ADR-backed strategic extension and does not reopen foundational documentation.
