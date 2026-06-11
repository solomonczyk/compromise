# Dangerous-Action Gates

## Core rule
Technical success is never enough. A passing API call, test suite or deployment does not automatically create business acceptance, visual acceptance, domain acceptance or production acceptance.

## Generation gate
Any AI generation that affects user-visible content requires input classification, prompt version, schema, budget cap, audit id and human review when content changes trust or commercial meaning.

## Retry gate
Retry is allowed only with a named failure cause, changed parameter or changed input. Blind retry is forbidden. Repeated AI or notification retry must be capped and auditable.

## Schema acceptance gate
Schema acceptance proves that output has valid shape. It does not prove domain correctness, safety, fairness, UX clarity or commercial value.

## Domain acceptance gate
Recruitment domain acceptance requires human review for vacancy safety, employer credibility, suspicious candidate data, risk labels and AI-assisted classifications.

## Workflow completion gate
A workflow is complete only when persisted state, user-visible state, audit and notification state agree. A frontend success toast without server state is not completion.

## Mastery or authoritative transition gate
Any transition that changes authority, such as approved employer, published vacancy, paid status, shortlisted candidate or closed complaint, requires owner, reason, audit and rollback path.

## Rewards or money gate
Payment, refunds, referral rewards, credits and discounts require commercial record, anti-duplicate control, owner approval and user-visible terms. Monetary reward automation is outside MVP.

## Notification gate
Notifications must be truthful, deduplicated and tied to committed state. No notification may claim approval, payment, publication or rejection before the state is committed.

## Assembly gate
A release or package can be assembled only from validated artifacts. Artifact hashes and validation report must match the package.

## Downstream gate
No downstream action, such as marketing campaign, payment request, user import or public launch, can use an upstream technical pass as its only evidence.

## Staging gate
Staging deployment is allowed after tests pass and secrets are isolated. Staging is not production and cannot be represented as public readiness.

## Production gate
Production deployment requires security review, rollback plan, support readiness, privacy readiness, load smoke, visual acceptance, business acceptance and explicit operator decision.

## production_accepted=true gate
The flag `production_accepted=true` is allowed only after S8 GO and explicit operator acceptance. Until then, proof JSON must keep `production_accepted=false`.
