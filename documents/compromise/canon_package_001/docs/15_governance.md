# Governance Canon

## Decision log
All foundational decisions live in `registers/decision_log.json`. Runtime PRs must reference the decision or requirement they implement when they affect product behavior.

## ADR policy
An ADR is required for stack change, data model shift, production gate change, payment automation, AI authority expansion, privacy policy expansion, market pivot, budget overrun above maximum, or any change that modifies accepted canon.

## Change-request process
A change request states reason, affected artifacts, impact, risk, budget, tests and acceptance evidence. It can be proposed without implementation. Implementation begins only after acceptance.

## Scope freeze
The foundational documentation scope is frozen after this package. Future documents can be operational outputs, evidence reports or accepted changes, not a new baseline layer.

## Risk register
Risks live in `registers/risk_register.json`. Each risk has severity, mitigation, trigger, owner and status. Open high risks block production acceptance.

## Assumptions register
Assumptions live in `registers/assumptions_register.json`. Hypotheses require validation method and stage. Provisional decisions are allowed when progress requires a baseline, but they must state validation.

## Dependency register
Dependencies live in `registers/dependency_register.json`. A dependency without owner cannot block users silently; it must be escalated in stage review.

## Owner matrix
Owners live in `registers/owner_matrix.json`. A stage without owner cannot be accepted.

## Master traceability
Every user requirement in the initial documentation request maps to documents, stages, tests and evidence in `matrices/master_traceability_matrix.json`.

## Artifact index
`artifact_index.json` stores file inventory and SHA256 for content artifacts. The index excludes only self-referential hash cycles and explains hash scope.

## Acceptance verdicts
Allowed final review verdicts: ACCEPTED, ACCEPTED WITH BLOCKERS, REJECTED, NEEDS FIX. A verdict must mention contradictions if any are found.
