# Security and Privacy Canon

## Threat model
The platform handles employer identity, candidate profiles, applications, contact details, moderation decisions and payment evidence. Attackers may be fake employers, fake candidates, scrapers, abusive recruiters, competitors, compromised accounts or malicious prompt content.

## Prompt injection
Any AI feature treats user and third-party text as untrusted. Vacancy text, CV text and messages cannot override system rules. AI output must be schema-validated and audited. AI cannot approve, reject, pay, notify or publish without gates.

## Indirect injection
External content, pasted job descriptions, CV attachments and URLs are indirect-injection sources. MVP should avoid automatic browsing of URLs. If later added, content extraction is sandboxed and logged.

## IDOR and cross-user isolation
Every object access checks owner and role server-side. Employer A cannot read Employer B applications. Candidate cannot read another candidate profile. Admin access is logged.

## Replay and duplicate transactions
Application submissions use duplicate guard per candidate and vacancy. Payment confirmation uses manual reconciliation id and cannot be replayed by client. Notification retry must be idempotent.

## Client tampering
The client cannot set privileged status, moderation result, payment confirmation or application owner. Server derives actor and allowed transition.

## Secrets
API keys, database URLs, email credentials and AI keys live only in environment or secret manager. Logs redact tokens, passwords, CV raw text and payment details.

## Audit
Audit records include actor, entity, action, previous state where safe, new state, reason, timestamp and correlation id. Audit is required for moderation, admin access, payment reconciliation, data export/deletion and AI suggestions that influence workflow.

## Abuse
Abuse categories: fake job, unsafe contact, payment request from candidate, harassment, discriminatory posting, spam, phishing, identity misuse. Abuse reports are triaged with severity and owner.

## Rate limiting
Rate limits apply to signup, login, job posting, applications, support tickets, AI suggestions and notifications. Limits must return clear errors and not leak whether an email exists.

## Retention
Candidate profiles remain until deletion request or account inactivity policy. Applications retain operational history for a defined period. AI prompts and outputs are retained only as needed for audit and quality, with sensitive data minimized.

## Consent
Users consent to data processing for account, profile, application, moderation, support and analytics. Consent must be explicit for optional AI enhancement or external sharing.

## Legal-review boundaries
Legal review is required before public legal claims, automated decision claims, cross-border employment advice, candidate data resale, background checks, payroll, contracts, visa/work permit guidance or paid guarantees.

## Incident response
Incidents are classified by severity. P0 includes data leak, account takeover, payment fraud or harmful fake jobs. P0 response requires immediate containment, owner notification, evidence preservation, user communication plan and post-incident decision log.
