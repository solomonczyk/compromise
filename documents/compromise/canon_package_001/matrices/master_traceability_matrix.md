# Master Traceability Matrix

| id | requirement | documents | stages | tests | evidence |
| --- | --- | --- | --- | --- | --- |
| REQ-PROD-001 | Problem, audience, JTBD, personas, value proposition and positioning are defined | docs/01_product_canon.md | S0 | documentation_non_empty | proof_json |
| REQ-PROD-002 | MVP scope and hard cut line are locked | docs/17_mvp_scope_cut_line.md | S0,S2 | traceability_coverage,e2e_smoke | mvp_cut_line_section,stage_contracts |
| REQ-MKT-001 | Market, competitors, commercial model and pricing hypotheses are defined | docs/02_market_commercial_canon.md | S0,S4,S6 | message_test,commercial_acceptance | interview_notes,payment_evidence |
| REQ-GTM-001 | Marketing strategy, funnel, landing, onboarding, beta, referral and channel stop rules are defined | docs/03_marketing_gtm_strategy.md | S4,S5,S7 | landing_conversion,claim_compliance | analytics_export,creative_archive |
| REQ-VAL-001 | Customer validation path and evidence validity rules are defined | docs/04_customer_validation.md | S4,S5,S6 | problem_interview_quality,paid_pilot_validation | interview_evidence_pack,payment_evidence |
| REQ-ROAD-001 | Roadmap has finite stages, dates, owners, entry and exit criteria | docs/05_product_roadmap.md | S0,S1,S2,S3,S4,S5,S6,S7,S8 | stage_contract_validation | contracts/stages |
| REQ-FIN-001 | Financial boundaries and budget overrun rules are defined | docs/06_financial_boundaries.md | S0,S6,S8 | budget_matrix_validation | matrices/budget_matrix.json |
| REQ-PRD-001 | Functional and non-functional product requirements are defined | docs/07_product_requirements.md | S2,S3,S5 | unit,contract,integration,e2e | test_report |
| REQ-DOM-001 | Recruitment methodology and authority boundaries are defined | docs/08_domain_methodology.md | S3,S4,S6 | domain_acceptance,human_review | moderation_log |
| REQ-UX-001 | UX, design rules and operator visual review are defined | docs/09_ux_design_canon.md | S2,S5 | visual,accessibility,device | device_matrix,visual_review_record |
| REQ-TECH-001 | Selected stack, architecture, API, DB, CI/CD and rollback are defined without alternatives | docs/10_technical_canon.md | S1,S2,S3 | contract,migration,rollback | api_contract_snapshot,migration_log |
| REQ-SEC-001 | Security, privacy and incident response controls are defined | docs/11_security_privacy.md | S3,S5,S8 | security,privacy_export_delete,incident_drill | security_test_log,incident_report |
| REQ-GATE-001 | Dangerous-action gates separate technical, business, visual and production acceptance | docs/12_dangerous_action_gates.md | S0,S3,S5,S8 | gate_validation | proof_json |
| REQ-TEST-001 | Testing and acceptance matrix defines scope, tool, owner, pass criteria, blocker, artifact and evidence | docs/13_testing_acceptance.md | S1,S2,S3,S5,S8 | all_required_tests | test_evidence |
| REQ-OPS-001 | Operations, support, monitoring, backups, complaints, payment issues and releases are defined | docs/14_operations.md | S3,S5,S6,S8 | support_response,backup_restore | support_log,restore_report |
| REQ-GOV-001 | Governance, ADR, change requests, registers and artifact index are defined | docs/15_governance.md | S0,S8 | governance_validation | registers,artifact_index |
