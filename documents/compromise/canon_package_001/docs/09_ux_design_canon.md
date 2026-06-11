# UX and Design Canon

## Information architecture
Top-level structure: landing, jobs, job detail, candidate profile, employer dashboard, vacancy editor, applications, admin moderation, support, privacy, terms. Navigation must separate candidate, employer and admin areas.

## Navigation rules
Public users can browse approved public jobs. Candidates see profile, applications and saved jobs if implemented. Employers see vacancies, applications and pilot status. Admin sees moderation queue, reports and audit. Hidden admin routes require authorization and must not rely on client-only hiding.

## Responsive rules
MVP supports mobile web, tablet and desktop. Forms must be usable on narrow screens. Important actions remain visible without horizontal scrolling. Long vacancy forms are divided into clear sections with save states.

## Supported devices
Acceptance matrix: Chrome desktop, Safari mobile, Chrome Android, Firefox desktop. Additional browsers are best effort before scale.

## Accessibility
Required: semantic headings, labels, visible focus, keyboard form submission, error summary, field-level errors, contrast, responsive text, no color-only status. Admin tools also require keyboard access because moderation is repetitive.

## Design tokens
Use a fixed token set: primary color for actions, neutral background, danger for destructive actions, warning for moderation, success for approved state. Typography scale must support readable vacancy descriptions and form labels. Tokens are documented in implementation, not invented per screen.

## Components
Core components: header, role switch, vacancy card, status badge, form field, validation message, moderation reason panel, application card, audit timeline, empty state, loading state, error state, confirmation modal, support contact block.

## Loading states
Loading states must distinguish first load, saving, submitting, moderation decision, payment verification and retry. A spinner without explanatory text is insufficient for long operations.

## Error states
Errors require human-readable message, stable error code, recovery action and support path for blocking issues. Payment, deletion/export and moderation errors are blocking until resolved.

## Empty states
Empty job list explains how to create alerts or check again. Empty employer applications explains that no candidates have applied yet and suggests improving vacancy clarity. Empty admin queue confirms there are no pending moderation items.

## Offline states
If offline is detected, read-only cached views can remain visible, but submission actions are disabled or queued only with explicit warning. The user must never believe an application is submitted before server confirmation.

## Keyboard and safe area
All forms support keyboard navigation. Mobile safe area must not hide primary actions. Sticky submit actions must not cover fields or errors.

## Device acceptance matrix
Visual QA must capture at least four device/browser combinations during S5. A technical pass without operator visual review is not sufficient for UX acceptance.

## Operator visual review
Operator visual review checks layout, hierarchy, text clarity, trust perception, mobile usability and contradiction between state and message. If visual result is poor, the result is rejected even if tests pass.
