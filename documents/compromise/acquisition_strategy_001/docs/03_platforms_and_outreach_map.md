# COMPROMISE-PLATFORMS-AND-OUTREACH-MAP-001

Status: READY_FOR_INTEGRATION  
Date: 2026-06-11  
Production gate: `production_accepted=false` until candidate, employer, legal, trust and operator acceptance are complete.

## 1. Purpose

Define where Compromise goes first to acquire candidates and employers without scraping, spam, fake inventory or privacy violations.

## 2. Candidate-side platforms

| Priority | Platform/source | Search/query examples | Offer | First action |
|---|---|---|---|---|
| P0 | Telegram communities | работа Сербия; украинцы в Сербии; русские в Сербии; релокация Сербия; работа Европа | Free CV audit + verified jobs waitlist | Ask admin permission |
| P0 | Facebook groups | Ukrainians in Serbia; Russians in Serbia; Expats in Belgrade; Jobs in Serbia; Remote jobs Europe | Work in Serbia/EU guide + profile | Ask admin permission |
| P0 | SEO/Google | Работа в Сербии для украинцев; работа без сербского; remote jobs Russian speakers | Educational guide + intake | Publish landing pages |
| P0 | Referral | Candidate invites friends | Priority CV review | Launch referral code |
| P1 | LinkedIn | Russian speaker jobs Serbia; Ukrainian speaker jobs Europe; customer support Serbia | Founder-led posts | Publish posts and invite interaction |
| P1 | Reddit | Serbia, Belgrade, expats, digital nomads | No-spam guide | Post only where allowed |
| P1 | Discord/Slack | Tech, AI, relocation and language communities | Candidate profile + CV help | Moderator-approved post |
| P1 | Universities/career centers | Belgrade, Novi Sad, Nis, Subotica | First-job profile and career clinic | Ask for partnership |
| P1 | Language schools | Serbian/English/Russian/Ukrainian language learners | Jobs by language level | Partner referral |
| P2 | EURES / European Job Days | EU mobility events | Mobility and jobs guide | Monitor events and participate |
| P2 | Coworkings/meetups | Belgrade/Novi Sad expat and tech meetups | Career clinic | QR signups |

## 3. Employer-side platforms

| Priority | Platform/source | Use | First action |
|---|---|---|---|
| P0 | Poslovi Infostud | Identify active employers, categories, market language | Build target list; do not copy vacancies |
| P0 | LinkedIn company search | Find HR/founder/operations contacts | Manual outreach |
| P0 | Official company websites | Verify contact and careers page | Contact via official channel |
| P0 | Google Maps | Find SMEs by city/category | Manual local outreach |
| P1 | APR business register | Verify legal entity | Use before paid pilot |
| P1 | PKS Chamber of Commerce | Partnerships and sector lists | Contact for partnership |
| P1 | EURES | EU employer mobility and events | Research and event participation |
| P1 | Facebook business groups | SME reach | Founder-led helpful posts |
| P2 | Startup/IT communities | Digital employers | Partnership posts |
| P2 | Local directories | Restaurants, hotels, service companies | Manual verification |

## 4. Posting rules

```json
{
  "admin_permission_required_when_rules_require": true,
  "value_first": true,
  "no_mass_tagging": true,
  "no_scraping": true,
  "clear_identity": true,
  "clear_data_use": true,
  "opt_in_only": true,
  "unsubscribe_or_delete_available": true,
  "production_accepted": false
}
```

## 5. First candidate post themes

Free CV audit; jobs by language level; work in Serbia without fluent Serbian; CV for Serbian/EU employers; private candidate profile; verified jobs only; remote jobs for Russian/Ukrainian speakers; first-job profile for students; referral priority review; survey about job-search blockers.

## 6. First employer post themes

Cheaper verified hiring; reducing irrelevant applications; founding employer first vacancy free; hiring multilingual candidates; vacancy clarity; response speed; assisted hiring without HR; shortlist instead of noisy applications; verified employer badge; pilot report after 30 days.

## 7. Evidence policy

Valid evidence: admin approval, campaign URL with UTM, landing analytics, profile logs, employer replies, vacancy intake, payment proof, support tickets. Invalid evidence: scraped contacts, unverified member counts, vanity views without conversions, fake vacancies, copied listings, unconsented profiles.
