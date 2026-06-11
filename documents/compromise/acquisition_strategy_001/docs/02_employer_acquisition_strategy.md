# COMPROMISE-EMPLOYER-ACQUISITION-STRATEGY-001

Status: READY_FOR_INTEGRATION  
Date: 2026-06-11  
Production gate: `production_accepted=false` until separate operator, business and trust acceptance.

## 1. Goal

Acquire verified employers and real vacancies before broad public launch.

```json
{
  "employers_contacted_60d": 300,
  "employer_conversations_60d": 60,
  "verified_employers_60d": 20,
  "verified_vacancies_60d": 50,
  "paid_pilots_60d": 3,
  "repeat_intent": ">=30%",
  "production_accepted": false
}
```

## 2. Strategic decision

Compromise will not sell a generic job board listing first. It will sell a cheaper, verified and more helpful path to the first relevant candidates. The first commercial wedge is small and medium employers that suffer from expensive job boards, irrelevant applications and lack of HR capacity.

## 3. Employer segments

| Priority | Segment | Why attractive | Typical roles |
|---|---|---|---|
| P0 | SMEs without HR | High pain, fast decisions | service, sales, admin, support |
| P0 | BPO/customer support | Language-specific demand | support, back office, moderation |
| P0 | Hospitality/restaurants | Frequent hiring | waiter, cook, receptionist, cleaner |
| P0 | Logistics/delivery/warehouses | Constant hiring need | courier, driver, warehouse worker |
| P1 | Construction/skilled trades | Hard-to-find workers | painter, drywall, electrician, helper |
| P1 | Retail chains/local stores | Continuous hiring | cashier, store worker |
| P1 | Local IT/digital agencies | Junior and multilingual roles | QA, support, content, AI ops |
| P2 | Large enterprises | Logo value but slow sales | operations, branch, support |
| P2 | Recruitment agencies | Many openings but margin conflict | agency-owned vacancies |

## 4. Offer ladder

| Offer | Price hypothesis | Target | Includes |
|---|---:|---|---|
| Founding Employer Free | €0 | First 20 employers | 1 verified vacancy, manual help, feedback call |
| Basic Verified Vacancy | €29-€49 | Small business | 30-day vacancy, moderation, applications |
| Vacancy + Distribution | €69-€99 | Employer without HR | Copy, publication, distribution, report |
| Assisted Hiring Pilot | €250-€700 | Urgent hiring | Sourcing, screening, shortlist, report |
| Employer Subscription | later | Repeat employers | Monthly hiring package |
| Success fee | later | Larger outcomes | Only after legal review and contract |

## 5. Allowed scope

Direct outreach through public company channels, LinkedIn manual outreach, official website forms, warm intros, manual vacancy intake, founding employer offer, paid pilot after proof, employer verification, manual invoice/payment confirmation and CRM tracking.

## 6. Forbidden actions

No fake employers. No fake vacancies. No copying competitor vacancies as native. No claiming candidates we do not have. No guaranteed hire promise. No success fee before legal review. No scraped personal recruiter emails. No mass spam automation. No production launch based only on technical readiness.

## 7. Employer funnel

```text
Target account list
  -> Public verification
  -> Contact path selected
  -> First message
  -> Discovery call or vacancy intake
  -> Founding employer offer
  -> Vacancy moderation
  -> Publication
  -> Candidate distribution
  -> Applications or shortlist
  -> Feedback call
  -> Paid pilot or repeat listing
```

## 8. Account scoring

```json
{
  "hiring_need_visible": "0-3",
  "language_fit": "0-3",
  "SME_speed": "0-3",
  "candidate_pool_match": "0-3",
  "budget_probability": "0-3",
  "trust_logo_value": "0-2",
  "total_priority_score": "0-17"
}
```

13-17 means first wave. 9-12 means second wave. Below 9 means monitor only.

## 9. First outreach message

```text
Hello,

We are launching Compromise, a niche hiring platform focused on verified vacancies and active candidates from Serbia/EU, including Russian-, Ukrainian-, English- and Serbian-speaking candidates.

For founding employers we are offering one verified vacancy launch at no cost:
- we help structure the vacancy;
- publish it with clear salary/location/language requirements;
- distribute it to a relevant candidate pool;
- collect applications;
- send a simple candidate report.

The goal is not to replace your current hiring channels immediately, but to give you a cheaper additional source of relevant candidates.

Would you like us to prepare one vacancy for free as a founding employer pilot?
```

## 10. Serbian short outreach message

```text
Zdravo,

Pokrećemo Compromise, nišnu platformu za zapošljavanje sa proverenim oglasima i kandidatima iz Srbije/EU, uključujući kandidate koji govore ruski, ukrajinski, engleski i srpski.

Za prve poslodavce nudimo besplatno objavljivanje jedne proverene pozicije:
- pomažemo da se oglas jasno napiše;
- objavljujemo uslove, lokaciju, jezik i platu kada je dostupna;
- distribuiramo oglas relevantnim kandidatima;
- šaljemo jednostavan izveštaj o prijavama.

Da li želite da testiramo jednu poziciju bez troška?
```

## 11. Employer discovery platforms

| Priority | Platform/source | Use | Rule |
|---|---|---|---|
| P0 | Poslovi Infostud | Active employer discovery | Research only; do not copy vacancies |
| P0 | LinkedIn company search | HR/founder/ops contacts | Manual relevant outreach |
| P0 | Official company websites | Verification and contact | Use official public channels |
| P0 | Google Maps | Local SMEs by city/category | Public business details only |
| P1 | APR business register | Legal entity verification | Use before paid pilot |
| P1 | PKS / Chamber of Commerce | Sector discovery and partnerships | Partnership outreach |
| P1 | EURES | EU mobility and employer events | Research and events |
| P1 | Facebook business groups | SME reach | Founder-led helpful posts |
| P2 | Startup/IT communities | Digital employers | Partner posts |
| P2 | Local directories | Restaurants, hotels, services | Manual verification |

## 12. Target account list: wave 1

These are target accounts for verification and outreach, not guaranteed customers. Contact only through official public channels or verified company contacts.

| Priority | Employer | Segment | Initial offer |
|---|---|---|---|
| P0 | Native Camp | Online education/language | Free verified vacancy or tutor pool |
| P0 | Fortrade Ltd. | Finance/customer support | Vacancy + Distribution |
| P0 | Kapital RS INC a.d. | Finance/customer support | Vacancy + Distribution |
| P0 | A1 Srbija | Telecom | Candidate segment pilot |
| P0 | CETIN d.o.o. Beograd | Telecom infrastructure | Founding employer pilot |
| P0 | Banca Intesa a.d. | Banking | Verified vacancy pilot |
| P0 | ALTA banka | Banking | Verified vacancy pilot |
| P0 | Generali Osiguranje Srbija | Insurance | Verified vacancy pilot |
| P0 | Wiener Städtische osiguranje | Insurance | Verified vacancy pilot |
| P0 | Lidl Srbija | Retail | Basic verified vacancy |
| P0 | Delhaize Serbia | Retail | Basic verified vacancy |
| P0 | Univerexport | Retail | Basic verified vacancy |
| P0 | AmRest | Hospitality/food service | Bulk vacancy pilot |
| P0 | Coca-Cola HBC | FMCG/distribution | Candidate shortlist pilot |
| P0 | Atlantic Grupa | FMCG/distribution | Candidate shortlist pilot |
| P0 | Nelt Co | Logistics/distribution | Assisted hiring pilot |
| P0 | DExpress | Delivery/logistics | Basic verified vacancy |
| P0 | Bexexpress | Delivery/logistics | Basic verified vacancy |
| P0 | AKS Express Kurir | Delivery/logistics | Basic verified vacancy |
| P1 | Bosch Srbija | Manufacturing/tech | Segment-specific pilot |
| P1 | Hemofarm AD | Pharma/manufacturing | Segment-specific pilot |
| P1 | NIS | Energy/operations | Employer brand pilot |
| P1 | CREATEQ | IT/services | Junior/digital candidate pilot |
| P1 | Comtrade Group | IT/services | Junior/digital candidate pilot |
| P1 | HTEC Group | IT/services | Junior/digital candidate pilot |
| P1 | Vega IT | IT/services | Junior/digital candidate pilot |
| P1 | Levi9 Serbia | IT/services | Junior/digital candidate pilot |
| P1 | Endava Serbia | IT/services | Junior/digital candidate pilot |
| P1 | Quantox Technology | IT/services | Junior/digital candidate pilot |
| P1 | Localizely | Localization SaaS | Multilingual candidate pilot |
| P1 | SupportYourApp | Customer support outsourcing | Multilingual candidate pilot |
| P1 | Maple Media doo Beograd | Digital/media | Verified vacancy pilot |
| P1 | Squadra Group d.o.o. | Business/services | Founding employer pilot |
| P1 | Mozzart d.o.o. | Retail/service | Basic verified vacancy |
| P2 | Balkan Bet d.o.o. | Retail/service | Only after compliance review |
| P2 | Hyatt Regency Belgrade | Hospitality | Hospitality hiring pilot |
| P2 | Hilton Belgrade | Hospitality | Hospitality hiring pilot |
| P2 | Metropol Palace Belgrade | Hospitality | Hospitality hiring pilot |
| P2 | Radisson Collection Old Mill Belgrade | Hospitality | Hospitality hiring pilot |
| P2 | Mona Plaza Hotel | Hospitality | Hospitality hiring pilot |
| P2 | STRABAG Serbia | Construction | Skilled worker pilot |
| P2 | Energoprojekt | Construction/engineering | Skilled/engineering pilot |
| P2 | Delta Real Estate | Real estate/services | Verified vacancy pilot |

## 13. SME discovery by city

For Belgrade, Novi Sad, Subotica, Pancevo and Nis, collect 20 local companies per category: restaurants, hotels, delivery, cleaning, repair, construction, retail, language schools, call centers, small factories and logistics providers.

## 14. KPIs

```json
{
  "first_message_reply_rate": ">=10%",
  "discovery_call_rate": ">=5%",
  "free_pilot_acceptance_rate": ">=5%",
  "vacancy_publish_rate_after_acceptance": ">=70%",
  "paid_conversion_after_free_pilot": ">=15%",
  "repeat_intent_after_candidate_delivery": ">=30%",
  "employer_complaint_rate": "<5%",
  "refund_rate": "<5%"
}
```

## 15. GO / HOLD / PIVOT / STOP

GO to paid pilot when verified employers >=10, verified vacancies >=20, active candidate pool >=300 and at least one employer receives relevant candidates. HOLD when employers are interested but candidate pool is not ready. PIVOT when employers only want success-fee recruiting. STOP a segment when reply rate is below 3% after 100 qualified contacts or compliance risk is high.

## 16. Required artifacts

Employer landing page, intake form, verification checklist, vacancy moderation checklist, CRM account list, outreach scripts, pricing one-pager, pilot agreement text, candidate delivery report, payment record and employer feedback log.

## 17. Proof JSON target

```json
{
  "employer_acquisition_strategy": "READY",
  "target_60d_employers_contacted": 300,
  "target_60d_verified_employers": 20,
  "target_60d_verified_vacancies": 50,
  "first_paid_pilots_required": 3,
  "production_accepted": false
}
```
