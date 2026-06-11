# COMPROMISE-REQUIRED-LEGAL-DOCUMENTS-001

Status: REQUIRED_BEFORE_PUBLIC_LAUNCH  
Date: 2026-06-11

## 1. Documents required before candidate acquisition

| Document | Required before | Owner | Status |
|---|---|---|---|
| Privacy Policy | collecting candidate profile/CV | Lawyer + product | REQUIRED |
| Candidate Consent Text | profile creation and CV upload | Lawyer + product | REQUIRED |
| Data Retention Policy | storing CV/profile/application data | Lawyer + security | REQUIRED |
| Data Deletion/Export Procedure | accepting user rights requests | Product + support | REQUIRED |
| Cookie/Analytics Notice | analytics/tracking | Lawyer + frontend | REQUIRED |
| Candidate Terms | candidate registration | Lawyer | REQUIRED |
| Candidate Safety Rules | candidate account use | Product + legal | REQUIRED |

## 2. Documents required before employer acquisition

| Document | Required before | Owner | Status |
|---|---|---|---|
| Employer Terms | employer registration/vacancy posting | Lawyer | REQUIRED |
| Employer Verification Policy | employer onboarding | Product + legal | REQUIRED |
| Vacancy Moderation Policy | publishing jobs | Product + legal | REQUIRED |
| Anti-Discrimination Policy | any vacancy or matching feature | Lawyer + product | REQUIRED |
| Jurisdiction Disclosure Policy | employer profile/vacancy | Lawyer + compliance | REQUIRED |
| Payment/Refund Terms | paid pilot or paid listing | Lawyer + accountant | REQUIRED |
| Pilot Agreement | first paid employer pilots | Lawyer | REQUIRED |

## 3. Documents required before AI features

| Document | Required before | Owner | Status |
|---|---|---|---|
| AI Use Policy | any AI CV or matching feature | Product + legal | REQUIRED |
| AI Risk Assessment | AI ranking/filtering/scoring | Legal + AI owner | REQUIRED |
| Human Oversight Procedure | AI-assisted screening | Product + ops | REQUIRED |
| Candidate AI Disclosure | AI-based profile analysis | Product + legal | REQUIRED |
| AI Evaluation Log Policy | tests and bias checks | AI owner + QA | REQUIRED |

## 4. Documents required before cross-border employer access

| Document | Required before | Owner | Status |
|---|---|---|---|
| DPA with vendors | processors/hosting/AI/email | Legal | REQUIRED |
| Cross-border Transfer Assessment | profile disclosure outside Serbia/EU | Legal | REQUIRED |
| Employer Data Recipient Notice | candidate profile disclosure | Product + legal | REQUIRED |
| Sanctions Screening SOP | employer onboarding | Compliance | REQUIRED |
| Beneficial Owner Verification SOP | sensitive employers | Compliance | REQUIRED |

## 5. Launch gate

```json
{
  "minimum_required_documents_before_public_launch": [
    "Privacy Policy",
    "Terms of Service",
    "Candidate Consent Text",
    "Employer Terms",
    "Anti-Discrimination Policy",
    "Vacancy Moderation Policy",
    "Employer Verification Policy",
    "Jurisdiction Disclosure Policy",
    "Data Deletion/Export Procedure"
  ],
  "launch_allowed_without_documents": false,
  "production_accepted": false
}
```


## Production gate

```json
{"production_accepted": false, "launch_allowed": false, "lawyer_review_required": true}
```
