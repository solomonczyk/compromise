# COMPROMISE-AI-RECRUITMENT-COMPLIANCE-BASE-001

Status: AI_RECRUITMENT_BLOCKER  
Date: 2026-06-11

## 1. Key issue

The EU AI Act classifies AI systems intended for recruitment or selection of natural persons as high-risk, including targeted job ads, analysing/filtering applications and evaluating candidates.

Therefore Compromise must separate low-risk candidate self-help AI, employer-facing AI recommendations and high-risk AI filtering/evaluation.

## 2. Allowed before legal review

Potentially allowed with clear disclosure and consent: CV formatting help for candidate only, translation assistance, candidate self-assessment, job description clarity checker for employer and summarization visible to user before submission.

## 3. Forbidden before legal review

```json
{
  "automatic_candidate_rejection": "FORBIDDEN",
  "hidden_candidate_score": "FORBIDDEN",
  "employer_ranking_by_ai": "FORBIDDEN",
  "automated_shortlisting": "FORBIDDEN",
  "sensitive_trait_inference": "FORBIDDEN",
  "political_or_ethnic_inference": "FORBIDDEN",
  "production_accepted": false
}
```

## 4. Future AI gate

Before any AI feature affects employer visibility or candidate ranking, require AI inventory, intended use statement, human oversight design, bias/discrimination risk assessment, data protection impact assessment, candidate disclosure, appeal/correction route, logs, model/provider documentation and counsel review under EU AI Act and GDPR.

## 5. Safe wording

Do not say: AI selects the best candidates.

Say: AI helps structure information. Final hiring decisions are made by humans.


## Production gate

```json
{"production_accepted": false, "launch_allowed": false, "lawyer_review_required": true}
```
