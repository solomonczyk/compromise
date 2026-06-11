# COMPROMISE-RECRUITMENT-INTERMEDIATION-AND-LICENSING-BASE-001

Status: LEGAL_BLOCKER  
Date: 2026-06-11

## 1. Key legal question

Compromise must determine whether it is legally only a job board/online marketplace, or whether some features make it an employment agency, recruitment agency, employment mediation service or labour intermediation provider.

This is a prelaunch legal blocker.

## 2. Lower-risk job board model

Potentially lower-risk features: employers post verified vacancies; candidates apply voluntarily; platform transmits application to employer; platform charges for listing/publication/distribution; no success fee; no final hiring decision; no direct placement promise; no candidate exclusivity; no staff leasing; no employment contract management.

This still requires legal review.

## 3. Higher-risk recruitment/intermediation model

Potentially higher-risk features: platform shortlists candidates for employer; recommends specific candidates for hiring; conducts screening interviews; charges success fee; represents either side in negotiation; manages employment/contracting paperwork; supplies temporary workers; performs psychological assessment; promises to find employees.

## 4. Current MVP recommendation

```json
{
  "mvp_role": "job_board_plus_verified_vacancy_distribution",
  "success_fee": "FORBIDDEN_UNTIL_LEGAL_REVIEW",
  "candidate_shortlisting": "MANUAL_PILOT_ONLY_AFTER_COUNSEL_APPROVAL",
  "psychological_assessment": "FORBIDDEN",
  "employment_contract_management": "FORBIDDEN",
  "temporary_staffing": "FORBIDDEN",
  "agency_license_analysis": "REQUIRED",
  "production_accepted": false
}
```

## 5. Serbian employment ecosystem note

The National Employment Service of Serbia publicly offers jobseeker support, employer candidate-search support, vacancy needs submission and psychological candidate assessment through its own services. This does not answer whether Compromise needs a private license, but it confirms employment intermediation is a regulated public-policy domain and must be reviewed before assisted hiring.

## 6. Questions for Serbian lawyer

Does a Serbian online job board need registration or permit beyond normal company registration? Does charging employers for job posts trigger any employment agency regulation? Does manual shortlist delivery trigger employment mediation licensing? Does CV audit count as advisory service or employment mediation? Are success fees allowed? Are there restrictions on fees charged to candidates? Does cross-border recruitment for EU/UK/US employers require additional registration?


## Production gate

```json
{"production_accepted": false, "launch_allowed": false, "lawyer_review_required": true}
```
