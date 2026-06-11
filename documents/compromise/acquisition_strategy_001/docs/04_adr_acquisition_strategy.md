# ADR-COMPROMISE-CANDIDATE-AND-EMPLOYER-ACQUISITION-001

Status: ACCEPTED_FOR_STRATEGY_PACKAGE  
Date: 2026-06-11  
Production gate: `production_accepted=false` until separate acceptance.

## Decision

Compromise will launch with two coordinated acquisition motions: candidate acquisition through opt-in value and employer acquisition through cheaper verified assisted hiring. The project will not look large by importing fake, copied, scraped or unconsented data.

## Rationale

A job marketplace fails if either side is empty. Candidates need trust, privacy and real vacancies. Employers need speed, price clarity and relevant candidates. Early-stage Compromise cannot beat large platforms by database size, but can beat them through trust, manual quality and lower cost.

## Consequences

Candidate profiles are private by default. Employer accounts are verified before paid promotion. Vacancies expire unless active hiring is confirmed. Paid pilot requires real employer value evidence. Technical readiness does not equal commercial readiness.

## Non-goals

No HH clone by inventory size. No paid candidate access at MVP stage. No mass scraping. No fake growth metrics. No production acceptance from technical pass alone.

## Control gates

```json
{
  "candidate_pool_gate": {
    "verified_candidates": 500,
    "active_last_30_days": 300,
    "candidate_complaint_rate": "<5%"
  },
  "employer_gate": {
    "verified_employers": 20,
    "verified_vacancies": 50,
    "paid_pilots": 3
  },
  "production_gate": {
    "technical_pass": true,
    "business_pass": true,
    "trust_and_safety_pass": true,
    "operator_acceptance_required": true,
    "production_accepted": false
  }
}
```
