# Technical Canon

## Selected stack
Frontend: Next.js with TypeScript. Backend: FastAPI with Python. Database: PostgreSQL. Cache/rate limit queue: Redis only where needed. Auth: server-issued session or JWT with role claims and server-side authorization checks. CI: GitHub Actions. Deployment target: one staging environment before production. AI: isolated AI Gateway with mock mode and explicit gates.

No alternative stack is open inside MVP. If the current repository uses another stack, S1 classifies whether to keep, wrap or replace it. Replacement is allowed if it lowers risk and preserves MVP scope.

## Architecture
The system has four boundaries: web frontend, backend API, database, and admin/support operations. AI Gateway is a separate internal module. Payment is manual in MVP and represented as a reconciled commercial record, not automated subscription state.

## Frontend modules
- Public landing and job browsing.
- Candidate account, profile and applications.
- Employer dashboard, vacancy editor and application review.
- Admin moderation and audit timeline.
- Support/privacy pages.

## Backend modules
- Auth and roles.
- Candidate profiles.
- Employers and company verification.
- Vacancies and vacancy state machine.
- Applications and application state machine.
- Moderation and audit.
- Analytics events.
- Support complaints.
- Export/deletion requests.
- AI Gateway adapter.

## API conventions
REST endpoints use resource-based names, JSON request/response, structured errors and correlation ids. Mutations require authorization server-side. State transitions use explicit action endpoints or service methods, not arbitrary client status updates.

## Database model
Core tables: users, candidate_profiles, employers, employer_members, vacancies, applications, moderation_decisions, audit_events, analytics_events, support_tickets, data_requests, pilot_payments, ai_audit_events. Every cross-user relation uses owner ids and foreign keys.

## State machines
Vacancy: draft → submitted → approved → published → paused or closed. Rejected and changes_requested are terminal or editable states according to reason. Application: submitted → viewed → shortlisted/contacted/rejected/withdrawn. Payment: pending → confirmed → refunded or completed.

## Migrations
Every schema change is migration-controlled. Migration tests run upgrade and downgrade where practical. Production-like data migrations require backup and rollback plan.

## Authentication and authorization
Client role visibility is not authorization. Backend checks every access. Admin actions require admin role and audit log. Employer members can access only their employer account. Candidates can access only their own data.

## Integrations
Email provider for notifications. Payment/invoice process remains manual until S6 evidence. AI provider stays behind AI Gateway and is disabled by default in tests. External job aggregation is outside MVP.

## AI Gateway
AI Gateway supports prompt templates, schema validation, audit, rate limits, mock mode, retry gate and human review. It never writes authoritative state without a domain gate.

## Observability
Logs include correlation id, actor id where safe, action, result and error code. Metrics include request errors, moderation queue length, application submissions, notification failures and support tickets. Sensitive fields are redacted.

## Environments
Local, staging and production are separate. Staging can use test data. Production is not accepted by default. Any production deployment requires S8 operator gate and proof update.

## CI/CD
CI runs lint, unit, schema validation, contract tests, migration tests and documentation validation. Deployment is manual-gated for staging and separately gated for production.

## Rollback
Rollback requires previous artifact, database backup/migration plan, feature flag or config rollback and communication note when users are affected.

## Secrets
Secrets are never committed. Environment variables are documented by name and purpose only. Rotation is required after any suspected exposure.

## Repository conventions
Documentation lives under `documents/compromise/compromise_canon_package_001/` or equivalent root. Runtime code must reference requirement ids in PR descriptions. Commits should separate docs, runtime, migrations and deployment changes.
