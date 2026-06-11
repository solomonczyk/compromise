# Product Requirements

## User stories
### Candidate
- As a candidate, I can create a profile with contact, location, languages, skills and experience so I can apply without repeating the same information.
- As a candidate, I can browse public moderated vacancies so I avoid unsafe or incomplete postings.
- As a candidate, I can apply to a vacancy and see application status so I know what happened.
- As a candidate, I can export or delete my profile data so I keep control over personal information.

### Employer
- As an employer, I can create an account and draft a vacancy so I can describe my hiring need.
- As an employer, I can submit the vacancy for moderation so the platform protects trust.
- As an employer, I can view applications to my own vacancies so I can contact candidates safely.
- As an employer, I can pay for a bounded pilot so I know exactly what is being delivered.

### Admin
- As an admin, I can approve, reject or request edits to a vacancy with reasons.
- As an admin, I can inspect audit history and abuse reports.
- As an admin, I can suspend unsafe accounts after evidence review.

## Functional requirements
1. Account model supports candidate, employer and admin roles.
2. Vacancy state machine supports draft, submitted, changes_requested, approved, published, paused, closed, rejected.
3. Application state machine supports submitted, viewed, shortlisted, rejected, withdrawn, contacted.
4. Employer can access only own vacancies and own applications.
5. Candidate can access only own profile and own applications.
6. Admin moderation decisions are persisted with actor, timestamp and reason.
7. Analytics events are emitted for landing, signup, profile completed, job viewed, application submitted, employer lead, vacancy submitted, vacancy published, paid pilot started.
8. Data export and deletion requests are supported through admin workflow in MVP.

## Non-functional requirements
- Core pages load within acceptable beta limits on desktop and mobile web.
- APIs return structured errors with code, message and correlation id.
- Database migrations are reversible where practical and tested.
- Audit logs are append-only from product perspective.
- Personal data is minimized and retained only as defined in privacy policy.

## User journeys
Candidate journey: landing → browse vacancy → signup → profile → apply → status → support or withdrawal. Employer journey: landing → lead form → signup → draft vacancy → moderation → publish/pay pilot → review applications → outcome report. Admin journey: queue → inspect entity → decision → audit → support escalation.

## Failure and recovery flows
- Vacancy rejected: employer receives reason and can edit.
- Application duplicate: user sees existing application and cannot create duplicate.
- Notification failure: event is logged and retry is gated.
- Payment unclear: paid pilot remains pending until manual reconciliation.
- Data export failure: privacy owner receives blocking incident.
- AI suggestion failure: user can continue manually; no authoritative action occurs.

## Accessibility
Keyboard navigation, visible focus, semantic form labels, error text linked to fields, sufficient contrast, responsive layout and readable status messages are required for MVP.

## Localization
Primary MVP language can be English or Russian depending on target landing. Serbian and Ukrainian are allowed content directions but not required as complete UI localization before paid pilot. All public claims must be reviewed in the language used.

## Offline behaviour
MVP is web-first. Offline editing may preserve unsent form data locally, but no offline application submission is accepted as completed until server confirmation.

## Privacy
Profile data, CV-like fields, applications, employer details and audit logs are personal or sensitive operational data. Export, deletion, consent and retention rules are required before beta.

## Analytics
Analytics are product and funnel events only. No hidden sale of behavioral data. Events must avoid storing full CV text or private messages.

## Support
Support contact is visible. Every complaint receives category, owner, severity and resolution status. Abuse and privacy complaints are blocking categories.
