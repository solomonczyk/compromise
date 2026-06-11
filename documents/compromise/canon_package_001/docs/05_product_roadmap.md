# Product Roadmap

## Roadmap rule
The roadmap is finite and bounded. It starts with documentation lock and ends with a scale decision. No new foundational documentation layer may be inserted after S0 acceptance. New scope is handled through change request or ADR.

## Stage table
| stage_id | goal | start | deadline | owner | budget | next |
| --- | --- | --- | --- | --- | --- | --- |
| S0 | Зафиксировать управляемый продукт, закрыть фундаментальные решения документацией и запретить дальнейшую разработку без traceability. | 2026-06-11 | 2026-06-13 | Product Owner | 0/50 | S1 |
| S1 | Синхронизировать существующую заготовку с каноном: отделить usable code, accidental code и missing product layers. | 2026-06-14 | 2026-06-20 | Tech Lead | 80/180 | S2 |
| S2 | Собрать минимальный работающий job marketplace: вакансии, кандидаты, отклики, employer workspace, moderation queue. | 2026-06-21 | 2026-06-30 | Full-stack Lead | 250/450 | S3 |
| S3 | Добавить доверие и операционный контроль: антиспам, audit, analytics, incident paths, AI gateway mock if needed. | 2026-07-01 | 2026-07-07 | Security and QA Lead | 180/350 | S4 |
| S4 | Проверить боль и ценность на реальных работодателях до платной разработки вторичных функций. | 2026-07-08 | 2026-07-14 | Founder / Product Owner | 120/260 | S5 |
| S5 | Провести закрытую бету с ограниченным количеством работодателей и кандидатов без публичного маркетингового шума. | 2026-07-15 | 2026-07-24 | Product Owner + Support Owner | 200/420 | S6 |
| S6 | Получить первую реальную оплату от работодателя за ограниченный, честно описанный результат. | 2026-07-25 | 2026-08-03 | Founder / Sales Owner | 150/300 | S7 |
| S7 | Запустить ограниченные каналы привлечения только после доказанного paid pilot. | 2026-08-04 | 2026-08-10 | Marketing Owner | 300/700 | S8 |
| S8 | Принять решение GO/HOLD/PIVOT/STOP для масштабирования, не открывая production автоматически. | 2026-08-11 | 2026-08-17 | Founder + Technical Owner | 80/180 | NONE |

## Dependencies
S1 depends on S0 documentation acceptance. S2 depends on S1 classification of current implementation. S3 depends on stable core flows. S4 depends on trust controls and landing readiness. S5 depends on validated problem and beta terms. S6 depends on beta readiness and explicit commercial terms. S7 depends on paid pilot proof. S8 depends on commercial, security, support and financial evidence.

## Maximum timebox
The total bounded path from canon lock to scale decision is 68 calendar days from 2026-06-11 to 2026-08-17. Any extension requires change request and must state budget impact, risk impact and which evidence is missing.

## Deliverables by phase
S0 delivers the package. S1 delivers recovery report. S2 delivers the core marketplace. S3 delivers trust and analytics. S4 delivers validation evidence. S5 delivers beta report. S6 delivers payment evidence. S7 delivers channel evidence. S8 delivers scale decision.

## Stop criteria across roadmap
The project stops if there is no repeated employer pain, no paid demand, unmanageable privacy risk, unresolved cross-user data leak, or negative unit economics without a credible fix.
