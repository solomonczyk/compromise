# Operations Canon

## Support model
MVP support is founder/operator-led. Support categories: account, profile, vacancy, application, moderation, abuse, privacy, payment, bug and feedback. Abuse, privacy and payment issues are priority categories.

## Content operations
Vacancies are moderated before publication. Employer edits after approval can return a vacancy to moderation if they affect role, compensation, contact method or safety. Candidate profile content is user-owned but can be flagged for abuse or fraud.

## Monitoring
Monitor API error rate, login failures, moderation queue length, notification failures, application submissions, support ticket volume, AI gateway errors, payment reconciliation status and data request deadlines.

## Alerting
P0 alerts: data leak, auth bypass, cross-user access, payment fraud, harmful fake vacancy, deletion/export failure. P1 alerts: moderation queue stuck, notification outage, high error rate, support backlog.

## Incidents
Incident record includes severity, start time, detection source, affected users, containment, owner, evidence, resolution, user communication and prevention action. P0 incident blocks stage progression.

## Backups and recovery
PostgreSQL backups are required before beta. Restore test is required before S8. Recovery plan must define RPO, RTO and owner. Audit and payment records are priority data.

## User complaints
Complaints are not generic feedback. They are classified, assigned and resolved. Abuse and privacy complaints require explicit outcome and audit.

## AI feedback disputes
If a user disputes AI-generated suggestion or classification, the platform must show that AI was advisory, provide human review path and record final human decision.

## Payment issues
Payment pending, confirmed, failed, refunded and disputed are separate states. A paid pilot cannot start from a client-side claim alone. Manual reconciliation is required in MVP.

## Release process
Each release has scope, requirement ids, tests, migration status, rollback plan and owner. Release notes must not claim unaccepted capabilities.

## Maintenance responsibilities
Product Owner maintains scope and acceptance. Tech Lead maintains architecture and runtime. Security Lead maintains security controls. Support Owner maintains complaint handling. Founder approves commercial and production gates.
