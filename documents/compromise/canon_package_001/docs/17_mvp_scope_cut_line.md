# MVP Scope and Hard Cut Line

## MVP goal
Enable one real employer to pay for one moderated hiring attempt and enable real candidates to apply through a safe, structured flow.

## Included
- Candidate registration and profile basics.
- Employer registration and company profile basics.
- Vacancy draft, submit, moderation, publish, pause and close.
- Job browsing and job detail.
- Candidate application to a vacancy.
- Employer application review for own vacancies.
- Admin moderation queue and decision reasons.
- Audit events for critical transitions.
- Basic notification events with truthful state.
- Analytics events for funnel measurement.
- Support ticket or contact process.
- Data export and deletion request workflow.
- Manual payment evidence for paid pilot.

## Excluded before paid pilot
- Paid resume database access.
- Automated recurring subscription.
- Native mobile applications.
- Complex AI ranking.
- Automated legal hiring guidance.
- Background checks.
- Payroll, contracts, visa or work permit services.
- Multi-language full UI beyond the selected launch language.
- Large paid acquisition.
- Employer self-serve publication without moderation.

## Cut line test
If a feature is not necessary to sell and deliver the first bounded paid employer pilot, it is cut. If a feature increases trust or legal safety, it can remain even if it does not directly sell.

## Product Definition of Done for MVP
MVP is done when S2 and S3 pass technical/security acceptance, S4 validates problem and message, S5 proves real beta usability, and S6 produces payment evidence. MVP does not equal production-scale readiness.

## Production lock
Production remains unaccepted until S8. No stage before S8 may set `production_accepted=true`.
