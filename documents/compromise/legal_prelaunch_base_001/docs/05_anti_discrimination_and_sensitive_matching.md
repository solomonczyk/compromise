# COMPROMISE-ANTI-DISCRIMINATION-AND-SENSITIVE-MATCHING-BASE-001

Status: REQUIRED_POLICY  
Date: 2026-06-11

## 1. Principle

Compromise must be open to candidates from different markets and must not filter by nationality, ethnicity, political views, religion or collective blame labels.

Allowed segmentation: skills, language, location, timezone, work authorization, availability, salary expectation, role/experience, contracting model, candidate jurisdiction preferences and employer legal requirements.

Forbidden segmentation: ethnicity, political opinion, religion, war-position, collective blame label, default nationality exclusion and employer discriminatory preference.

## 2. Employer vacancy rules

Reject or require rewrite for vacancies that exclude people by nationality/origin, demand political loyalty, set unjustified gender/age limits or contain discriminatory salary/conditions.

Allow legally relevant requirements: work authorization, ability to contract with EU company, English B2, CET timezone, driver license, legally allowed to perform job.

## 3. Sensitive jurisdiction safety

Candidate may choose to hide employers from certain jurisdictions. The system must frame this as candidate safety/control, not platform-level nationality discrimination.

## 4. Required controls

```json
{
  "vacancy_moderation_required": true,
  "employer_code_of_conduct_required": true,
  "candidate_report_button_required": true,
  "discriminatory_vacancy_blocked": true,
  "political_content_in_jobs_forbidden": true,
  "candidate_nationality_default_filter_forbidden": true,
  "production_accepted": false
}
```

## 5. EU-facing legal context

EU law has employment equality rules, including Directive 2000/78/EC on equal treatment in employment and occupation, and Directive 2000/43/EC on equal treatment irrespective of racial or ethnic origin. Even when Serbia is the starting point, EU-facing employers and candidates make anti-discrimination controls necessary.

## 6. Product policy

Compromise should state: We match people by skills, language, availability, work authorization, location and consent — not by ethnicity, political identity or collective blame.


## Production gate

```json
{"production_accepted": false, "launch_allowed": false, "lawyer_review_required": true}
```
