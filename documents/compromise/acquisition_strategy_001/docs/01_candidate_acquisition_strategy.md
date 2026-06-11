# COMPROMISE-CANDIDATE-ACQUISITION-STRATEGY-001

Status: READY_FOR_INTEGRATION  
Date: 2026-06-11  
Production gate: `production_accepted=false` until separate operator and business acceptance.

## 1. Goal

Build a privacy-safe opt-in candidate pool for Compromise before public launch. The goal is not a raw database, but a live segmented pool with consent, current job intent and enough quality for employer pilots.

```json
{
  "candidate_profiles_total_60d": 1000,
  "verified_profiles_60d": 500,
  "active_last_30_days_60d": 300,
  "profiles_with_cv_or_structured_experience": 400,
  "profiles_with_contact_permission_for_verified_employers": 350,
  "applications_to_verified_jobs": 100,
  "production_accepted": false
}
```

## 2. Strategic decision

Compromise will not buy, scrape, import or enrich resumes from HH, LinkedIn, Infostud, Indeed, Facebook, Telegram or any other source without explicit candidate consent. Candidate acquisition is based on value: verified vacancies, CV help, private profile, job-fit recommendations and candidate control over visibility.

## 3. Primary candidate segment

Initial wedge: Russian-, Ukrainian-, English- and Serbian-speaking candidates in Serbia and Europe. Priority cities: Belgrade, Novi Sad, Subotica, Nis, Pancevo, plus remote EU roles. Priority roles: customer support, sales, admin, hospitality, retail, delivery, logistics, construction, repair, junior digital, QA, AI operations and language-based remote work.

## 4. Hypotheses and verification

| ID | Decision | Type | Verification | Pass threshold |
|---|---|---|---|---|
| H-CAN-001 | Candidates need trusted verified jobs because large boards feel noisy and unsafe. | hypothesis | 30 interviews + landing test | 40% leave contact |
| H-CAN-002 | Free CV audit is the strongest lead magnet. | hypothesis | 3 community campaigns | 25% landing-to-profile |
| H-CAN-003 | Private-by-default profile increases willingness to share work status. | provisional decision | Profile completion analytics | 50% fill work-status fields |
| H-CAN-004 | Serbia-first plus EU remote is narrow enough for launch. | provisional decision | 60-day cohort analytics | 300 active profiles in Serbia/EU remote |

## 5. Allowed scope

Organic posts with moderator permission, partnerships, SEO pages, referral program, CV audit landing, candidate intake form, profile consent, manual review, email or Telegram opt-in notifications, UTM attribution, deletion/export request handling.

## 6. Forbidden actions

No scraping resumes. No copying Telegram/Facebook members. No buying databases. No fake vacancies. No default public candidate profiles. No selling contact details without consent. No hidden AI rejection. No guaranteed job promises. No spam in communities.

## 7. Candidate value proposition

> Create a private profile, improve your CV and get matched with verified jobs where the employer is actually hiring.

Core promises: verified vacancies, clear salary/location/language/documents when available, privacy by default, contact only after application or consent, AI-assisted CV improvement, candidate deletion/export.

## 8. Funnel

```text
Community / SEO / referral / partner
  -> Candidate landing
  -> 2-minute intake
  -> Consent captured
  -> Profile created
  -> CV upload or structured experience
  -> AI/manual profile summary
  -> Recommended jobs or waitlist segment
  -> Contact permission for verified employers
  -> Application or shortlist inclusion
```

## 9. First 60-day channel plan

| Priority | Channel | Offer | Required action | 60-day target |
|---|---|---|---|---:|
| P0 | Telegram communities | Free CV check + verified jobs | Ask admin permission | 300 |
| P0 | Facebook groups | Work in Serbia/EU guide + profile | Ask admin permission | 250 |
| P0 | SEO landing pages | Job guides by language/country | Publish 10 pages | 100 |
| P0 | Referral program | Invite 3 friends, priority CV review | Add referral code | 100 |
| P1 | LinkedIn posts/groups | Private talent pool | Founder-led content | 100 |
| P1 | Reddit/Discord/Slack | No-spam guide | Follow community rules | 50 |
| P1 | Universities/career centers | First-job profile | Contact offices | 50 |
| P1 | Language schools | Jobs by language level | Partner referral | 50 |
| P2 | EURES / European Job Days | EU mobility content | Monitor and participate | 25 |
| P2 | Coworkings/meetups | Career clinic | QR signups | 25 |

## 10. Platform list for candidate acquisition

| Platform type | Concrete search direction | Priority | Outreach rule |
|---|---|---|---|
| Telegram | работа Сербия; украинцы в Сербии; русские в Сербии; релокация Сербия; работа Европа | P0 | Admin permission; no scraping members |
| Facebook | Ukrainians in Serbia; Russians in Serbia; Expats in Belgrade; Jobs in Serbia; Remote jobs Europe | P0 | Follow rules; value-first post |
| LinkedIn | Russian speaker jobs Serbia; Ukrainian speaker jobs Europe; customer support Serbia | P1 | Founder-led posts; no automation spam |
| Reddit | Serbia, Belgrade, expats, digitalnomad communities | P1 | Educational posts only where allowed |
| Discord/Slack | Tech, AI, language and relocation communities | P1 | Moderator-approved posts |
| EURES / European Job Days | EU mobility events and job days | P2 | Research and event participation |
| Startuj/education ecosystem | Students, first job, internships | P1 | Partnerships and career clinics |
| Local meetups/coworkings | Belgrade/Novi Sad expat and tech meetups | P2 | QR signups and career clinics |

## 11. Lead magnets

| Lead magnet | Required asset | Pass metric |
|---|---|---|
| Free CV audit | Landing + upload + AI/manual review | 25% landing-to-profile |
| Jobs by language level | Language-level filter | 20% landing-to-profile |
| Work in Serbia guide | SEO guide page | 10% guide-to-profile |
| Private talent pool | Consent-based profile | 60% visibility settings completed |
| Salary and role navigator | Simple quiz | 30% quiz-to-profile |
| Referral priority review | Referral code | 15% invite-to-profile |

## 12. Minimal candidate data model

```json
{
  "candidate_id": "uuid",
  "status": "active_now | open_to_offers | passive | inactive | hired",
  "last_active_at": "datetime",
  "location_country": "string",
  "location_city": "string",
  "languages": ["string"],
  "desired_roles": ["string"],
  "experience_level": "entry | junior | middle | senior | skilled_trade",
  "work_format": ["onsite", "hybrid", "remote"],
  "availability": "ready_now | two_weeks | one_month | later",
  "documents_status": "self_declared",
  "salary_expectation": "range_optional",
  "cv_uploaded": true,
  "profile_visibility": "private | anonymized | visible_to_verified_employers",
  "contact_permission": true,
  "consent_version": "string",
  "data_export_available": true,
  "deletion_available": true
}
```

## 13. Activation rules

A candidate is commercially usable only when email or Telegram is verified, consent is captured, desired role is selected, location is selected, language status is selected, availability is selected and last activity is within 30 days.

## 14. KPIs

```json
{
  "landing_to_profile_rate": ">=20%",
  "profile_completion_rate": ">=50%",
  "contact_permission_rate": ">=35%",
  "active_last_30_days": ">=30%",
  "candidate_complaint_rate": "<5%",
  "duplicate_or_fake_profile_rate": "<10%",
  "cost_per_verified_profile_blended": "<=1.50 EUR"
}
```

## 15. GO / HOLD / PIVOT / STOP

GO to employer paid pilot when verified candidates >=500, active last 30 days >=300, candidate contact-permission pool >=250 and complaint rate <5%.

HOLD when quantity grows but profile quality is below 40%. PIVOT when a channel creates signups without job intent. STOP any channel with admin complaints, spam reports, low trust or excessive cost for two consecutive weeks.

## 16. Required artifacts

Candidate landing page, intake form, consent text, privacy notice, UTM table, candidate channel list, outreach log, profile audit, segment dashboard, weekly growth report, deletion/export request log.

## 17. Proof JSON target

```json
{
  "candidate_acquisition_strategy": "READY",
  "opt_in_only": true,
  "scraping_forbidden": true,
  "candidate_privacy_default": "private",
  "target_60d_profiles": 1000,
  "target_60d_verified_profiles": 500,
  "production_accepted": false
}
```
