# COMPROMISE-SANCTIONS-JURISDICTION-AND-EMPLOYER-VERIFICATION-BASE-001

Status: REQUIRED_GATE  
Date: 2026-06-11

## 1. Decision for MVP

```json
{
  "russian_registered_employers": "BLOCKED_FOR_MVP",
  "belarus_registered_employers": "BLOCKED_FOR_MVP",
  "hidden_employer_jurisdiction": "BLOCK_PUBLICATION",
  "unclear_beneficial_ownership": "MANUAL_REVIEW",
  "sanctioned_entity_match": "BLOCK",
  "candidate_nationality_filtering": "FORBIDDEN",
  "candidate_jurisdiction_preferences": "REQUIRED",
  "production_accepted": false
}
```

## 2. Why

The issue is not a candidate's nationality. The issue is employer legal entity, beneficial ownership, payment route, sanctions exposure, candidate safety and data disclosure.

## 3. Employer required fields

Required: legal company name, registration country, tax/company number where applicable, operating country, ultimate parent country where applicable, beneficial owner screening for sensitive cases, payment country, contracting entity, candidate data recipients and sanctions screening status before paid pilot.

## 4. Candidate required controls

Candidate sees employer jurisdiction before application. Candidate can hide employers by jurisdiction. Candidate profile is private by default. Employer cannot export profile without consent. Sensitive jurisdiction mismatch prevents display/disclosure.

## 5. Screening sources to confirm with counsel

EU sanctions lists and Council restrictive measures, national sanctions lists of target employer countries, payment provider restrictions, bank/account restrictions, beneficial ownership register where available, Serbian APR for Serbian entities.

## 6. Cross-border employer onboarding

EU/UK/US employers can be onboarded only after legal entity verification, visible jurisdiction, data recipient notice, payment route review, sanctions screening and candidate consent flow.


## Production gate

```json
{"production_accepted": false, "launch_allowed": false, "lawyer_review_required": true}
```
