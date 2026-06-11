# ADR-2026-010: MVP Verified Job Board Scope Lock

**Status:** ACCEPTED  
**Date:** 2026-06-11  
**Supersedes:** None (first explicit MVP scope lock)  
**Governance:** This ADR locks the MVP scope to "verified job board only" and blocks all recruitment/agency-like features until legal review.

---

## Context

Compromise is preparing for its first paid pilot and public launch. The existing documentation (canon package 001, legal prelaunch base 001) defines a "managed job marketplace" but does not explicitly lock the legal model.

The legal prelaunch base (documents 01–09) identifies blockers:
- Recruitment intermediation license analysis is required but not yet completed.
- Assisted hiring, success fees, candidate shortlisting, screening interviews and AI-based ranking are higher-risk features that may trigger employment agency licensing in Serbia and/or EU.
- The platform must decide whether it is a job board/online marketplace or an employment agency/mediation service.

This ADR resolves the ambiguity by explicitly locking the MVP to a **verified job board only** model — no assisted hiring, no placement service, no success fee, no agency intermediation. All recruitment/agency-like features are blocked until legal review confirms they are permissible and the platform has the required licenses.

---

## Decision

```json
{
  "mvp_model": "VERIFIED_JOB_BOARD_ONLY",
  "not_recruitment_agency": true,
  "not_temporary_employment_agency": true,
  "not_success_fee_model": true,
  "not_candidate_placement_service": true,
  "license_required_for_verified_job_board": "NOT_CONFIRMED",
  "lawyer_confirmation_required": true,
  "production_accepted": false
}
```

The MVP model is a **verified job board only**. The platform:
- Publishes verified vacancies from verified employers.
- Allows candidates to browse and voluntarily apply.
- Transmits applications to the employer.
- Does **not** shortlist, rank, select, recommend or place candidates for the employer.
- Does **not** charge success fees.
- Does **not** act as an intermediary in hiring decisions.
- Does **not** manage employment contracts, payroll or temporary staffing.

Whether a Serbian verified job board needs a license beyond normal company registration is **not confirmed** and requires lawyer confirmation before any paid pilot or public launch.

### Allowed MVP features

```json
{
  "allowed_mvp_features": [
    "verified employer profile",
    "verified vacancy publication",
    "vacancy moderation",
    "candidate profile",
    "candidate voluntary application",
    "candidate-controlled profile visibility",
    "candidate jurisdiction preferences",
    "employer jurisdiction disclosure",
    "basic private candidate self-assessment",
    "manual support and abuse reports"
  ]
}
```

### Blocked until legal review

```json
{
  "blocked_until_legal_review": [
    "assisted_hiring",
    "candidate_shortlisting",
    "screening_interviews",
    "success_fee",
    "candidate_selection",
    "candidate_ranking_for_employers",
    "AI-based employer-side scoring",
    "guaranteed hiring",
    "temporary employment / staffing",
    "employer-visible skill badges",
    "simulation reports visible to employers"
  ]
}
```

### Audience policy

```json
{
  "audience_policy": "OPEN_MULTILINGUAL_MARKETPLACE",
  "ru_ua_role": "INITIAL_WEDGE_ONLY",
  "candidate_exclusion_by_nationality": false,
  "target_market": "Serbia + EU + cross-border multilingual hiring"
}
```

The platform is open to candidates regardless of nationality. Russian/Ukrainian-speaking talent serves as the initial wedge market. The target market spans Serbia, the EU and cross-border multilingual hiring. Candidate exclusion by nationality is forbidden.

### Sensitive jurisdiction policy

```json
{
  "candidate_nationality_filtering": "FORBIDDEN",
  "employer_jurisdiction_transparency": "REQUIRED",
  "candidate_can_hide_employer_jurisdictions": true,
  "russian_registered_employers_mvp": "BLOCKED",
  "belarus_registered_employers_mvp": "BLOCKED",
  "hidden_employer_jurisdiction": "BLOCK_PUBLICATION"
}
```

The platform does not filter candidates by nationality. Employer jurisdiction must be disclosed. Candidates may choose to hide employers from certain jurisdictions. Employers registered in Russia or Belarus are blocked from MVP publication. Hidden or unclear employer jurisdiction blocks publication outright.

### Skill tests in MVP

```json
{
  "candidate_skill_tests": "PRIVATE_SELF_ASSESSMENT_ONLY_IN_MVP",
  "employer_visible_badges": "FUTURE_AFTER_LEGAL_REVIEW_AND_CANDIDATE_CONSENT",
  "automatic_rejection": false,
  "hidden_score": false,
  "AI_ranking": false
}
```

In MVP, skill assessment is limited to private candidate self-assessment — basic multiple-choice or checkbox skill indicators that the candidate controls and owns. No employer-visible badges, no automatic rejection based on test scores, no hidden scoring, no AI-based ranking. Employer-visible skill badges are a future feature, only after legal review and explicit candidate consent.

### Simulators in MVP

```json
{
  "simulators": "FUTURE_CANDIDATE_READINESS_LAYER",
  "mvp_scope": false,
  "employer_visible_reports": "future_only_after_legal_and_privacy_review"
}
```

Simulators (interview simulators, readiness assessments, skill simulation environments) are a future candidate-readiness layer. They are explicitly excluded from MVP scope. Employer-visible simulation reports, if introduced later, require separate legal and privacy review.

---

## Rationale

1. **Legal safety first.** Serbian employment intermediation is a regulated public-policy domain. Operating without license clarity creates legal, financial and reputational risk. A pure job board model is the lowest-risk entry point.
2. **Scope discipline.** Locking the model prevents feature creep into recruitment/agency territory during MVP development. Every feature added to MVP must pass the cut-line test: "Is this a verified-job-board feature?"
3. **Lawyer question is precise.** With this lock, the lawyer question narrows to: "Does a Serbian verified job board need a license?" — rather than a broad audit of hypothetical features.
4. **Alignment with existing docs.** This ADR aligns with and formalises the MVP boundaries already outlined in `04_recruitment_intermediation_and_licensing.md`, `05_anti_discrimination_and_sensitive_matching.md` and `07_sanctions_jurisdiction_and_employer_verification.md` from the legal prelaunch base, and the `17_mvp_scope_cut_line.md` from the canon package.
5. **No premature production acceptance.** Production acceptance remains `false`. No paid pilot, no public launch, no claim of license-free operation until lawyer confirmation is obtained.

---

## Consequences

- All development must stay within the `allowed_mvp_features` list. Any feature not in the list is presumed blocked.
- Product, design and engineering must not build shortlisting, screening, success fee, ranking or AI-scoring flows, even as experiments.
- The audience policy and sensitive jurisdiction policy are locked and must be implemented in the first runtime build.
- Candidate skill tests are limited to private self-assessment. No employer-visible scoring, badges or ranking in MVP.
- Simulators are deferred entirely. No simulator UI, no simulator data model, no simulator reports in MVP.
- The lawyer question is now precise and isolated: one question about verified job board licensing. This is the minimum legal gate before any paid pilot.
- The `documents/compromise/` README must reference this ADR as the governing scope lock.
- This ADR can be superseded only by a follow-up ADR that presents explicit lawyer confirmation and a revised scope.

---

## References

- [Legal prelaunch base 001: Recruitment intermediation and licensing](04_recruitment_intermediation_and_licensing.md)
- [Legal prelaunch base 001: Anti-discrimination and sensitive matching](05_anti_discrimination_and_sensitive_matching.md)
- [Legal prelaunch base 001: Sanctions, jurisdiction and employer verification](07_sanctions_jurisdiction_and_employer_verification.md)
- [Legal prelaunch base 001: Questions for lawyer](08_questions_for_lawyer.md)
- [Canon package 001: MVP scope cut line](../../canon_package_001/docs/17_mvp_scope_cut_line.md)
- [Proof: MVP legal scope lock 002](../../proof_mvp_legal_scope_lock_002.json)

---

## Production gate

```json
{
  "production_accepted": false,
  "launch_allowed": false,
  "paid_pilots_allowed": false,
  "lawyer_review_required": true,
  "license_required": "NOT_CONFIRMED"
}
```
