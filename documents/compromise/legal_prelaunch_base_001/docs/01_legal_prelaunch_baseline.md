# COMPROMISE-LEGAL-PRELAUNCH-BASELINE-001

Status: PREPARED_FOR_COUNSEL_REVIEW  
Date: 2026-06-11  
Project: Compromise  
Jurisdictions in scope: Serbia, EU/EEA-facing operations, UK/US employer outreach as future expansion.

## 1. Purpose

This document defines the legal baseline that must be reviewed before Compromise starts public candidate acquisition, employer acquisition, paid pilots, AI screening, candidate shortlisting or cross-border profile disclosure.

This is not legal advice. It is a structured legal due-diligence base for a qualified lawyer.

## 2. Launch verdict

```json
{
  "public_launch_allowed": false,
  "candidate_profile_collection_allowed": "only after privacy/consent documents are approved",
  "employer_paid_pilots_allowed": "only after entity/payment/tax/recruitment licensing review",
  "ai_candidate_scoring_allowed": false,
  "cross_border_profile_disclosure_allowed": false,
  "production_accepted": false
}
```

## 3. Main legal areas

| Area | Why it matters | Prelaunch status |
|---|---|---|
| Company/entity setup | Payments, contracts, liability, tax | NEEDS_COUNSEL |
| Job board vs recruitment agency | Licensing/permit risk if we mediate hiring or shortlist candidates | BLOCKER |
| Personal data / CV processing | Candidate profiles, resumes, employer access, retention | BLOCKER |
| Sensitive data | Nationality, politics, ethnicity, health, work permits, sanctions | BLOCKER |
| Anti-discrimination | Vacancy wording, filters, matching, employer conduct | BLOCKER |
| AI in recruitment | EU AI Act high-risk risk if AI filters/evaluates candidates | BLOCKER |
| Sanctions/jurisdiction | Russia/Belarus employers, payments, beneficial owners | BLOCKER |
| Terms of Service | Rules for candidates/employers and liability | REQUIRED |
| Privacy Policy | Transparency and data subject rights | REQUIRED |
| Cookie/analytics consent | Web analytics and tracking | REQUIRED |
| Data processing agreements | Vendors, AI providers, hosting, email, payments | REQUIRED |
| Moderation and complaints | Candidate/employer reports and dispute handling | REQUIRED |
| Tax/VAT/invoicing | Paid pilots, subscriptions, EU/Serbia cross-border sales | NEEDS_ACCOUNTANT |
| Consumer/business law | Candidate services, refunds, paid add-ons | NEEDS_COUNSEL |

## 4. Safe MVP legal stance

Until legal review is complete, Compromise should operate as a controlled validation system only:

- no public claim of being a licensed recruitment agency;
- no paid success fee;
- no automatic AI rejection;
- no sale of raw candidate database;
- no profile disclosure without candidate consent;
- no Russian/Belarusian registered employers in MVP;
- no hidden employer jurisdiction;
- no candidate filtering by ethnicity, political views or nationality as a default exclusion;
- no scraping or importing external CV databases;
- no fake jobs;
- no public comments/social features.

## 5. Key legal decisions to confirm

```json
{
  "D1": "Can Compromise legally operate as a job board in Serbia without an employment agency license if it only publishes vacancies and transmits applications?",
  "D2": "At what point does assisted hiring/shortlisting become regulated employment mediation or recruitment agency activity?",
  "D3": "What company form should be used for paid pilots and EU/UK/US clients?",
  "D4": "Which privacy regime applies if candidates are in Serbia/EU and employers are EU/UK/US?",
  "D5": "Can candidate jurisdiction preferences be implemented without unlawful discrimination?",
  "D6": "Can AI be used only for CV formatting and candidate self-assessment without triggering high-risk recruitment AI obligations?",
  "D7": "What sanctions screening is required before onboarding employers?"
}
```

## 6. Absolute prelaunch blockers

```json
{
  "privacy_policy_approved": false,
  "terms_of_service_approved": false,
  "candidate_consent_flow_approved": false,
  "employer_verification_policy_approved": false,
  "recruitment_license_analysis_done": false,
  "ai_recruitment_risk_assessment_done": false,
  "sanctions_jurisdiction_gate_approved": false,
  "production_accepted": false
}
```

## 7. Source base

Primary sources reviewed for this base:

- Serbian Commissioner for Information of Public Importance and Personal Data Protection: https://www.poverenik.rs/en/
- Serbian National Employment Service: https://www.nsz.gov.rs/
- Serbian Business Registers Agency: https://www.apr.gov.rs/
- Serbian Ministry of Labour, Employment, Veteran and Social Policy: https://www.minrzs.gov.rs/
- GDPR Regulation (EU) 2016/679: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EU AI Act Regulation (EU) 2024/1689: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- EU Employment Equality Directive 2000/78/EC: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32000L0078
- EU sanctions against Russia: https://www.consilium.europa.eu/en/policies/sanctions-against-russia/
- EU Digital Services Act: https://digital-strategy.ec.europa.eu/en/policies/digital-services-act
