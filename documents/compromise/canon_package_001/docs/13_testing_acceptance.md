# Testing and Acceptance Canon

## Acceptance principle
A stage is accepted only when required tests pass, required evidence exists, blockers are closed and the stage contract GO conditions are met. Technical PASS does not replace product or operator acceptance.

## Test matrix
| test | scope | tool | owner | pass | blocking | artifact | evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| unit | Service functions, validators and state guards | pytest or equivalent | Backend Lead | All required units pass | Blocking for S2+ | unit_report | test log |
| schema | JSON contracts, proof, registers and examples | scripts/validate_canon_package.py | QA Lead | All schemas and examples valid | Blocking for S0+ | schema_report | validation log |
| contract | API request and response contracts | OpenAPI contract tests | Backend Lead | No breaking undocumented response | Blocking for S2+ | contract_report | API snapshot |
| integration | Frontend-backend flows | Playwright/API tests | QA Lead | Core flows pass | Blocking for S2+ | integration_report | test run |
| database | Constraints, indexes, ownership and fixtures | migration test runner | Backend Lead | Upgrade works and constraints protect data | Blocking for S2+ | db_report | migration log |
| migration | Upgrade and practical rollback | migration tool | Backend Lead | Clean upgrade from baseline | Blocking for deploy | migration_report | migration log |
| state-machine | Vacancy, application and payment transitions | unit + integration | QA Lead | Invalid transitions rejected | Blocking for S2+ | state_report | transition matrix |
| security | Auth, IDOR, replay, rate limits | security tests | Security Lead | 0 critical findings | Blocking for S3+ | security_report | security log |
| E2E | Candidate, employer and admin journeys | Playwright | QA Lead | All critical journeys pass | Blocking for beta | e2e_report | screenshots |
| accessibility | Keyboard, labels, focus, contrast | axe/manual review | UX Owner | No blocking accessibility issue | Blocking for beta | a11y_report | manual notes |
| visual | Layout and perceived trust | Operator review | Product Owner | Operator accepts visual quality | Blocking for beta | visual_report | screenshots |
| device | Chrome desktop, Safari mobile, Chrome Android, Firefox desktop | browser/device matrix | QA Lead | Critical flows pass on matrix | Blocking for beta | device_report | matrix |
| load | Small beta load and moderation queue | k6 or simple load script | Tech Lead | No core degradation at beta load | Blocking for S8 | load_report | load log |
| recovery | Notification, payment, data request and moderation failures | fault injection/manual | QA Lead | Recovery path works | Blocking for pilot | recovery_report | incident samples |
| prompt evaluation | AI advisory outputs | golden dataset + human review | AI Gateway Owner | No unsafe authoritative output | Blocking for AI use | prompt_eval_report | audit samples |
| audit completeness | Admin, payment, moderation, data requests | query checks | Security Lead | Required audit events present | Blocking for beta | audit_report | audit export |

## Blocking policy
Security isolation, privacy deletion/export, moderation audit, payment reconciliation and production gate tests are blocking. Visual QA is blocking for beta and any public marketing page.

## Evidence storage
Every test run must produce an artifact with date, commit/ref, environment, owner and result. Screenshots and logs must not expose secrets or unnecessary personal data.

## Contradiction checks
Acceptance review must compare status text, JSON proof, logs, files, git state and deployed version. If they disagree, the verdict is not ACCEPTED.
