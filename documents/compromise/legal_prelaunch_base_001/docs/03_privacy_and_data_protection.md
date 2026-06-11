# COMPROMISE-PRIVACY-AND-DATA-PROTECTION-BASE-001

Status: BLOCKER_UNTIL_COUNSEL_REVIEW  
Date: 2026-06-11

## 1. Data categories

Compromise will process high-risk personal data categories for a job marketplace: candidate identity/contact, CV/resume, work history, education, skills, language level, location/timezone, work authorization, salary expectations, applications, employer messages, AI-generated summaries, jurisdiction preferences and support history.

## 2. Special category risk

Do not collect or infer by default: ethnicity, religion, political opinions, health/disability unless counsel-approved, trade union membership, biometric data, war-position/political loyalty, sensitive nationality/political labels.

GDPR Article 9 treats data revealing racial or ethnic origin, political opinions, religious/philosophical beliefs, trade union membership, biometric data for unique identification, health data and sex life/sexual orientation as special categories and generally prohibits processing unless an exception applies.

## 3. Legal bases to review

| Processing | Basis to review | Notes |
|---|---|---|
| Account creation | contract or consent | transparent |
| CV upload | consent/contract | deletion required |
| Job application | contract/legitimate interest | recipient disclosed |
| Employer contact disclosure | explicit consent preferred | separate consent |
| AI CV improvement | consent/contract | no hidden decisions |
| Analytics | consent or legitimate interest | cookie notice |
| Marketing emails | consent/soft opt-in | unsubscribe |
| Retention after inactivity | legitimate interest/legal obligation | time-limited |

## 4. Required user rights

Implement access, rectification, deletion, restriction, objection, data portability, consent withdrawal and complaint channel.

## 5. Privacy-by-default product rules

Candidate profile is private by default. Employer cannot view contact data until candidate applies or consents. Candidate can hide employers by jurisdiction. Employer legal entity and data recipients must be visible before application. No raw CV export to unverified employer. No public candidate database at MVP. No selling candidate contacts. No scraping/importing third-party CVs.

## 6. Retention proposal for counsel review

| Data | Proposed retention |
|---|---|
| Inactive candidate profile | 24 months unless user deletes earlier |
| Draft profile not completed | 90 days |
| Job applications | 24 months or shorter by policy |
| Employer account records | contract period + legal retention |
| Support complaints | 36 months |
| Security/audit logs | 12 months |
| Consent logs | lifetime of account + legal retention |
| Deleted profile backup remnants | maximum 30-90 days |

## 7. DPIA trigger

A Data Protection Impact Assessment is likely required or strongly recommended before AI candidate scoring, employer search across candidate pool, sensitive jurisdiction filtering, cross-border employer access, automated candidate ranking or processing work authorization documents.

## 8. External vendors requiring DPA

Hosting, database, email, analytics, AI provider, payment provider, observability and support/ticketing providers.


## Production gate

```json
{"production_accepted": false, "launch_allowed": false, "lawyer_review_required": true}
```
