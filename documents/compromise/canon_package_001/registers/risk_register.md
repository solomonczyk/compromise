# risk_register

## R-001
- **id**: R-001
- **severity**: HIGH
- **risk**: Cold-start marketplace: мало работодателей без кандидатов и мало кандидатов без вакансий.
- **mitigation**: Start with concierge matching, narrow primary segment, manual supply seeding.
- **trigger**: Applications per active job below 3 in S5
- **owner**: Product Owner
- **status**: OPEN

## R-002
- **id**: R-002
- **severity**: HIGH
- **risk**: Фейковые вакансии, мошенничество, сбор персональных данных под видом найма.
- **mitigation**: Employer verification, moderation, abuse reports, audit logs, unsafe-contact warnings.
- **trigger**: Any credible abuse complaint
- **owner**: Security Lead
- **status**: OPEN

## R-003
- **id**: R-003
- **severity**: HIGH
- **risk**: Нарушение privacy/GDPR-like expectations при обработке CV and candidate data.
- **mitigation**: Consent, export, deletion, retention windows, legal review before scale.
- **trigger**: Request deletion/export cannot be completed
- **owner**: Privacy Owner
- **status**: OPEN

## R-004
- **id**: R-004
- **severity**: MEDIUM
- **risk**: AI matching perceived as discriminatory or authoritative.
- **mitigation**: AI advisory label, human review, explainability logs, opt-out for automated suggestions.
- **trigger**: User dispute about AI decision
- **owner**: AI Gateway Owner
- **status**: OPEN

## R-005
- **id**: R-005
- **severity**: MEDIUM
- **risk**: Платные каналы привлекают кандидатов, но не работодателей.
- **mitigation**: Employer-first channel KPI; stop rules per channel.
- **trigger**: Employer lead cost above 35 EUR in S7
- **owner**: Marketing Owner
- **status**: OPEN

## R-006
- **id**: R-006
- **severity**: MEDIUM
- **risk**: Существующая заготовка содержит случайную архитектуру и мешает delivery.
- **mitigation**: S1 recovery classification; discard accidental code when cheaper.
- **trigger**: More than 30 percent files unclassified after S1
- **owner**: Tech Lead
- **status**: OPEN

## R-007
- **id**: R-007
- **severity**: HIGH
- **risk**: Production opened by mistake after technical success.
- **mitigation**: Dangerous-action gates and proof JSON require production_accepted=false until S8 operator gate.
- **trigger**: Any artifact claims production accepted before S8
- **owner**: Founder
- **status**: LOCKED_CONTROL
