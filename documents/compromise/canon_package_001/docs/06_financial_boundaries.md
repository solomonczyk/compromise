# Financial Boundaries

## Budget philosophy
The project is pre-scale. Spending must buy learning, trust or paid evidence. Spending that only makes the product look larger is blocked.

## Total limits
Planned budget across S0-S8: 1360 EUR. Maximum budget across S0-S8: 2890 EUR. The maximum is not a target; it is a hard ceiling unless an ADR approves a higher investment based on paid evidence.

## Category caps
- AI API budget: 120 EUR before scale decision.
- Infrastructure budget: 160 EUR before scale decision.
- Design and testing budget: 300 EUR.
- Marketing budget: 700 EUR, with paid ads blocked until S7.
- Support budget: 250 EUR.
- Legal review budget: 300 EUR, triggered before scale or sensitive claims.
- Contingency reserve: 300 EUR, usable only by documented owner decision.

## Stage budget matrix
| stage_id | planned | maximum | rule |
| --- | --- | --- | --- |
| S0 | 0 | 50 | HOLD above planned; STOP or ADR above maximum |
| S1 | 80 | 180 | HOLD above planned; STOP or ADR above maximum |
| S2 | 250 | 450 | HOLD above planned; STOP or ADR above maximum |
| S3 | 180 | 350 | HOLD above planned; STOP or ADR above maximum |
| S4 | 120 | 260 | HOLD above planned; STOP or ADR above maximum |
| S5 | 200 | 420 | HOLD above planned; STOP or ADR above maximum |
| S6 | 150 | 300 | HOLD above planned; STOP or ADR above maximum |
| S7 | 300 | 700 | HOLD above planned; STOP or ADR above maximum |
| S8 | 80 | 180 | HOLD above planned; STOP or ADR above maximum |

## Budget overrun rules
If actual spending reaches 80 percent of a stage maximum, the stage enters HOLD and the owner must classify remaining work. If spending would exceed maximum budget, work stops unless an ADR approves the overrun with evidence. Marketing spend cannot borrow from legal, privacy or security budgets.

## AI API budget
AI calls must be capped per environment. AI is disabled by default in local tests unless mock mode is selected. Real AI calls require generation gate, retry gate and audit.

## Infrastructure budget
Use one low-cost staging environment, one managed or containerized PostgreSQL instance, object storage only if required, and logging with retention limits. No multi-region infrastructure before S8.

## Design and testing budget
Design spend is focused on conversion-critical screens and visual QA: landing, job list, job detail, candidate profile, employer vacancy form, application review, admin moderation.

## Marketing budget
Before S6, only organic and direct outreach. After S6, S7 can spend a capped paid test. Stop channel if employer lead cost exceeds threshold or if support load becomes unsafe.

## Support and legal budget
Support is a core product cost during beta and pilot. Legal review is required before claims about employment law, cross-border work, data resale or automated decisions.
