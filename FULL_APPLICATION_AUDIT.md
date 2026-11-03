# Business Analysis School — Full Application Audit

**Audit date:** 2026-11-03
**Scope:** Repository source, routes, shared components, forms/integrations, assets, configuration, and the existing developer specifications. This is a static repository audit, not a live-site, CRM, or infrastructure assessment.

## Executive summary

The repository currently implements a **marketing and lead-generation website**, not a full online learning application. It has a substantial set of Next.js pages, reusable presentation components, testimonial/resource content, and several lead forms. It does not contain user accounts, a learning portal, course delivery/progress, a payment system, content management, or a database. The narrow lead-submission endpoint is not a general-purpose application backend.

The audit baseline showed that the site was **not ready to be treated as a fully functional production application**:

1. **Security finding:** `init` was a 34-line, 32 KB file whose last line contained an obfuscated self-executing function, and package scripts invoked it. The implementation work removed the file and those hooks without executing it. Repository inspection alone cannot establish whether it ran in earlier environments or rule out compromise; incident response remains outstanding.
2. **Lead capture:** the baseline sent PII from the browser directly to a hard-coded GoHighLevel (GHL) webhook and treated failures as success. The current work adds a same-origin Next.js endpoint and visible failure states, but the live CRM mapping, abuse controls, and successful live delivery have not been independently verified.
3. **Incomplete conversion journeys:** the baseline included a placeholder video player, nonfunctional booking/blog controls, and missing assets. Some journeys now fail honestly or route to real contact/booking paths; video, paid-consultation, brochure, and resource delivery still depend on owner-supplied assets or URLs.
4. **Validation:** focused lead-payload tests and `git diff --check` pass. Lint, type-check, and build remain unverified: the required executables were missing, and dependency restoration failed because registry requests reset.

The existing handoff documents describe GHL automation, analytics, SEO, downloads, and funnel behavior beyond what is verifiably implemented. Those requirements should be converted into explicit acceptance criteria and checked with the business owner and live provider accounts.

## Implementation status — Phases 0–7

This section records the current implementation and supersedes baseline observations where noted. It is not a production-readiness or incident-clearance statement.

- **Phase 0 — Containment implemented:** removed the opaque `init` file and its `dev`, `build`, and `start` script hooks. The file was not executed during this work. Prior execution in other environments, repository provenance, and any resulting exposure still require owner/security-team review; rotate the GHL webhook when an approved replacement is configured.
- **Phase 1 — Scope confirmed:** this remains a marketing/lead-generation website; course delivery stays with an external provider; GHL remains the CRM; no FastAPI service or custom LMS is in scope. The existing public webhook is retained temporarily as a server-side fallback. Tier 3 uses the existing enrollment-call booking link.
- **Phase 2 — Implementation present, external contract unverified:** browser forms now submit through `/api/leads`, with event/field validation and failure states. Set `GHL_WEBHOOK_URL` in the deployment environment when the rotated webhook is ready. Until then the route uses the legacy endpoint, which is not a secret. No live CRM test was sent, and no distributed rate limit/CAPTCHA is configured.
- **Phase 3 — Partial, blocked on owner inputs:** the Tier 3 enrollment link and safe contact fallbacks are wired. The masterclass needs an approved HTTPS embed URL configured as `NEXT_PUBLIC_MASTERCLASS_EMBED_URL`; 30-/60-minute consultation offers need approved booking/payment URLs configured as `NEXT_PUBLIC_CAREER_CONSULTATION_30_URL` and `NEXT_PUBLIC_CAREER_CONSULTATION_60_URL`; the corporate brochure needs an approved PDF added under `public/` and a gated delivery path. Do not configure production values until the provider destinations and content are confirmed.
- **Phase 4 — Partial:** the blog search/category controls filter the single complete article; incomplete article previews and fake pagination were removed. `/program` redirects to `/programs`, `/courses` redirects to its on-demand section, and dead policy/podcast links were removed. External destinations and published claims still need owner verification.
- **Phase 5 — Partial, legal/consent decisions outstanding:** added form labels, modal roles, keyboard Escape/focus trapping/restoration, status announcements, and reduced-motion CSS. No legal copy or marketing-consent promise was invented. Real privacy/terms/refund policy destinations and approved consent wording are still needed; accessibility has not been tested with assistive technology.
- **Phase 6 — Partial, analytics/performance decisions outstanding:** added configurable canonical metadata, per-route titles/descriptions, Open Graph/Twitter metadata, a sitemap, robots rules, and truthful EducationalOrganization/WebSite JSON-LD. Article imagery now uses Next Image with a narrow remote-host allowlist. No analytics ID or consent platform was configured; image coverage is incomplete and Lighthouse/Core Web Vitals have not been measured.
- **Phase 7 — Implemented, not fully verified:** selected npm (`npm@10.9.9`) and the existing npm lockfile; removed the duplicate pnpm lockfile; documented Node 22.6+, scripts, environment, deployment, and rollback; added CI for lint/typecheck/test/audit/build. Six focused lead validation tests pass. Clean dependency install, lint, type-check, audit, build, and CI execution could not be verified because npm registry connections reset.
- **Current validation:** `git diff --check`, package JSON parsing, and all six Node lead-validation tests pass. No live form submissions or external CRM, analytics, booking, or hosting checks were made.

### Owner setup for blocked Phase 3 items

1. **Masterclass:** obtain the actual video from the content owner and an HTTPS embed URL from the chosen hosting provider (not a watch-page URL unless that host supports it in an iframe). Add `NEXT_PUBLIC_MASTERCLASS_EMBED_URL=https://...` to local `.env.local` and the production deployment's environment settings, then rebuild/redeploy. The page shows an unavailable notice when the URL is missing or not HTTPS.
2. **Career consultations:** create the approved 30-minute and 60-minute appointment/checkout destinations in the business's booking/payment provider. Confirm currency, price, duration, and payment/refund terms with the owner, then set the corresponding `NEXT_PUBLIC_CAREER_CONSULTATION_30_URL` and `NEXT_PUBLIC_CAREER_CONSULTATION_60_URL` in local and production environments. Until set, the buttons route to the contact form and do not claim a booking or payment.
3. **Corporate brochure:** request the approved current PDF from the corporate-training/marketing owner. Add it under `public/resources/` only after approval. The current CTA requests the brochure through contact; the file must be supplied before implementing gated download/delivery.
4. **GHL webhook:** configure a rotated URL as the server-only `GHL_WEBHOOK_URL` in local `.env.local` and the production environment. Do not add it to a `NEXT_PUBLIC_` variable. The legacy endpoint remains a temporary fallback until the rotated endpoint and GHL receipt are verified; do not send a live test lead without authorization.

## Phased implementation roadmap

Use these phases in order. Each phase has a copy-ready prompt you can send when you want that work done. The implementation status above reflects work already completed for Phases 0–7; production verification and owner-dependent work remain. Phase 0 originally came first because lifecycle scripts invoked an untrusted `init`; those hooks have been removed. Phases 1–7 target a reliable production marketing and lead-generation site. **Phase 8 is optional** and applies only if you choose to build a custom learning platform instead of using an LMS. Phase 9 is the final release check.

### How to use the prompts

- Send one phase prompt at a time; the dependencies below are intentional.
- Each prompt asks for implementation, focused tests, and a summary of changes, verification, blockers, and remaining work.
- Do not paste credentials or secrets into chat. Configure them through the approved deployment environment.
- When a phase needs a real business asset, provider account, legal decision, or destination URL that is not available in the repository, the work should pause at that dependency and ask for it rather than inventing it or showing a false success state.
- Keep the product boundary explicit: phases 0–7 complete the marketing/funnel application, not an LMS.

### Phase 0 — Establish a trusted, runnable baseline

**Depends on:** None. The original lifecycle-script issue has been contained.

**Goal:** Keep the removed untrusted initializer from being reintroduced and complete any required incident follow-up.

**Prompt to use:**

> Complete remaining Phase 0 incident follow-up in `FULL_APPLICATION_AUDIT.md`. The opaque `init` file and its package-script hooks have already been removed without executing the payload. Do not recover or run it. Review trusted history and repository evidence only to advise what the organization security owner should investigate (repository/CI/deployment history, developer environments, and possible credential exposure). Preserve evidence and unrelated changes. Verify clean installation and project scripts in a trusted environment if dependencies are available. Do not claim incident clearance without the organization's investigation. Report remaining risks and evidence.

**Done when:** no opaque initializer is invoked, clean install and package scripts pass, and the owner/security investigation has a documented outcome.

### Phase 1 — Confirm product scope and provider contracts

**Depends on:** Phase 0.

**Goal:** Decide which systems own CRM, booking, course delivery, and payments before implementing against assumptions.

**Decisions to confirm:** marketing site only versus LMS handoff versus custom learner platform; GHL pipelines and field mappings; booking destinations; video host/content; resource assets; payment/checkout provider; analytics IDs; approved legal copy and claims.

**Prompt to use:**

> Complete Phase 1 of `FULL_APPLICATION_AUDIT.md`. Inspect the current repository and document the proposed system boundaries and integration contracts for the marketing site, GHL, booking, video, downloads, analytics, and any LMS/payment provider. Recommend the simplest viable option and identify only decisions that genuinely require my approval. Do not add a FastAPI backend or invent provider URLs, credentials, legal text, content, or business claims. If required information is absent, give me a concise decision/input checklist and stop before implementing dependent integrations. Report the agreed architecture and phase dependencies.

**Done when:** the owner has selected the product boundary and confirmed or supplied the provider/content inputs needed by later phases.

### Phase 2 — Reliable lead capture and CRM integration

**Depends on:** Phases 0–1.

**Goal:** Make every lead form validate, submit through a server-side boundary, and communicate actual submission outcomes.

**Scope:** contact, free-training, resource opt-in, quiz, corporate proposal, Tier 3 application, and newsletter forms; server-side validation; environment-based provider configuration; event/payload mapping; failure/retry UX; appropriate abuse controls and privacy-conscious logs.

**Prompt to use:**

> Complete Phase 2 of `FULL_APPLICATION_AUDIT.md` using the provider decisions from Phase 1. Implement dependable server-side submission for every existing lead form, preferably with a Next.js server endpoint unless the confirmed architecture requires otherwise. Validate input and event types server-side, keep provider configuration out of browser code, and make each form show success only after confirmed delivery. Add explicit loading, failure, and retry behavior; do not silently swallow provider errors. Add focused tests for payloads, validation, and provider failures. Do not invent GHL fields, credentials, consent wording, or automation behavior—ask for missing contracts. Run safe lint/type/test checks and report each form's verified path and any unverified CRM-side setup.

**Done when:** all lead forms use the approved integration path, failure cannot look like success, and tests cover success and provider failure. Live CRM automation is separately confirmed in GHL.

### Phase 3 — Complete conversion journeys and deliverables

**Depends on:** Phases 1–2 and availability of approved URLs/assets.

**Goal:** Make the advertised masterclass, booking/application, consultation, and resource journeys usable end to end.

**Scope:** playable masterclass; real Tier 3 application and booking flow; paid-consultation actions; corporate brochure; all gated resource assets, labels, and delivery; accurate confirmation destinations and messages.

**Prompt to use:**

> Complete Phase 3 of `FULL_APPLICATION_AUDIT.md`. Wire and test the free masterclass video, Tier 3 application/booking, both career-consultation offers, corporate brochure, and every resource advertised on the site. Use only destinations, prices, video, and files approved in Phase 1 or supplied by me. Ensure access/download/confirmation follows confirmed form submission and accurately reflects what has actually been delivered. Remove or clearly mark unavailable any offer that lacks a real destination or asset instead of fabricating one. Add focused tests for local flow behavior and report external provider checks that still need an owner.

**Done when:** each advertised conversion action has a real, tested destination and correct content, with no placeholder URLs or pretend delivery.

### Phase 4 — Finish site controls, routes, and content integrity

**Depends on:** Phases 1–3.

**Goal:** Resolve inert navigation and controls, broken routes, duplicate pages, and unsupported or inconsistent commercial content.

**Scope:** blog search/categories/pagination/article navigation; resource newsletter signup; missing `/courses` destination; legacy `/program` disposition; footer/legal/podcast links; external link checks; testimonial and corporate proof; pricing, schedules, guarantees, dates, and claims.

**Prompt to use:**

> Complete Phase 4 of `FULL_APPLICATION_AUDIT.md`. Inventory visible links and controls across all routes, then implement the intended behavior or replace/remove controls whose behavior is not approved. Resolve the missing `/courses` route and decide a consistent role for the legacy `/program` page. Make blog search, categories, pagination, and article links work with the content model chosen in Phase 1, and wire the resources newsletter through Phase 2. Verify external links. Do not fabricate testimonials, company logos, outcomes, prices, or policy terms; ask me for evidence/approved copy where needed. Add focused tests and provide a route/link checklist.

**Done when:** every visible action works or is intentionally removed, routes resolve correctly, and published claims/content have owner approval.

### Phase 5 — Privacy, consent, accessibility, and data handling

**Depends on:** Phases 1–4 and approved legal language.

**Goal:** Make user data handling transparent and the core experience usable with keyboard and assistive technology.

**Scope:** privacy/terms/refund destinations; marketing consent; accurate security statements; retention/deletion expectations; form labels/errors; modal focus/keyboard behavior; status announcements; contrast, reduced motion, and responsive checks.

**Prompt to use:**

> Complete Phase 5 of `FULL_APPLICATION_AUDIT.md` using approved legal and consent language only. Implement the approved policy routes and links, clarify data use at relevant forms, and remove any unsupported security/privacy promises. Review and improve accessibility of navigation, forms, dialogs, status/error messages, keyboard focus, reduced-motion behavior, contrast, and mobile layouts. Do not provide legal advice or invent policy wording; identify required counsel/owner decisions and pause only the affected item. Run the available accessibility and focused tests, and report findings against the agreed standard.

**Done when:** policy links resolve, consent/data use is clear and approved, and tested critical journeys meet the selected accessibility target.

### Phase 6 — Analytics, SEO, and performance

**Depends on:** Phases 1–5 and approved analytics configuration.

**Goal:** Make the site measurable, discoverable, and performant against agreed targets.

**Scope:** consent-aware analytics events; route metadata and social previews; canonical URLs; sitemap/robots; appropriate structured data; optimized local/reliable images; Core Web Vitals and low-bandwidth testing.

**Prompt to use:**

> Complete Phase 6 of `FULL_APPLICATION_AUDIT.md` with the approved domains, consent approach, and analytics configuration. Implement and verify the agreed CTA/form/lead/purchase events without duplicate counting or sending disallowed personal data. Add route-specific metadata, canonical/social metadata, sitemap, robots, and truthful structured data. Improve image delivery and test production-like performance, including mobile/low-bandwidth conditions. Do not invent analytics IDs or structured claims. Report measured Lighthouse/Core Web Vitals results against the audit targets and list any remaining environment-dependent work.

**Done when:** analytics events are verified, SEO surfaces are complete, and performance is measured against agreed targets with exceptions documented.

### Phase 7 — Automated quality gates and production readiness

**Depends on:** Phases 0–6.

**Goal:** Make the approved marketing site reproducibly testable and deployable.

**Scope:** choose package manager/lockfile policy; clean install; type/lint/test/build checks; end-to-end coverage of lead/conversion paths; dependency checks; CI; environment/deployment/rollback/monitoring documentation.

**Prompt to use:**

> Complete Phase 7 of `FULL_APPLICATION_AUDIT.md`. Inspect the repository's existing conventions and establish a reproducible clean-checkout workflow, one package-manager/lockfile policy, CI checks, and focused unit/component/end-to-end coverage for the critical journeys completed in earlier phases. Add dependency/security checks consistent with the project. Document required environment variables and deployment, monitoring, and rollback steps without including secrets. Run the full safe validation suite from a clean dependency state and fix failures caused by this work. Do not claim production readiness where external credentials, live integrations, or deployment access were not verified; list those remaining checks explicitly.

**Done when:** clean-checkout CI passes; critical journeys have automated coverage; deployment and rollback steps are documented; external launch checks have named owners.

### Phase 8 — Optional custom learner platform (only if selected)

**Depends on:** Phase 1 explicitly selects a custom LMS rather than an existing LMS/handoff; detailed product requirements and provider choices must be approved first.

**Goal:** Define and, if requested, build the student-facing learning product absent from the current repository.

**Potential scope:** learner authentication/roles, enrollment entitlements, course/lesson/content models, protected media, progress, assessments, certificates, payments and verified fulfillment, admin/instructor tools, audit records, and learner support.

**Prompt to use:**

> Begin Phase 8 of `FULL_APPLICATION_AUDIT.md` only because I have chosen a custom learner platform. First inspect the current application and produce a concrete implementation breakdown for identity, authorization, database, course/content delivery, progress, assessments, payments, admin operations, privacy, and deployment. Compare a separate Python FastAPI service with Next.js server-side capabilities and recommend the smallest architecture that meets the approved requirements. Do not start implementation until unresolved product/security/payment decisions are listed and answered. Once approved, implement in tested increments, protect learner data and media, and verify enrollment/payment fulfillment using provider-signed events. Do not store card data or claim a payment/enrollment succeeded without server-side verification.

**Done when:** the custom learner scope is approved, architecture and data/security model are documented, and all in-scope student and admin journeys have acceptance tests. Skip this phase if an existing LMS meets the requirement.

### Phase 9 — Final release acceptance

**Depends on:** all selected phases; Phase 8 only if a custom learner platform is in scope.

**Goal:** Verify the complete, agreed product against real integrations and launch criteria.

**Prompt to use:**

> Complete Phase 9 of `FULL_APPLICATION_AUDIT.md`. Run the approved clean-install, lint, type-check, unit/component, end-to-end, accessibility, SEO, and production-build checks. Verify every route and critical CTA, form success/failure behavior, CRM/booking/video/resource/payment integrations that are in scope, analytics events, and mobile performance in the approved staging/production-like environment. Do not access or modify production systems without explicit authorization. Report pass/fail evidence, unresolved blockers, owner actions, rollback readiness, and a clear go/no-go recommendation. Do not mark an unverified external integration as passed.

**Done when:** every in-scope acceptance criterion passes, external dependencies are verified by an authorized owner, and no P0 launch blocker remains.

## What exists today

### Routes

The App Router currently has these pages:

`/`, `/about`, `/ai-accelerator`, `/blog`, `/blog/read`, `/book`, `/career-consultation`, `/certifications`, `/contact`, `/corporate-training`, `/courses` (redirect), `/free-training`, `/free-training/video`, `/program` (redirect), `/programs`, `/resources`, `/success`, and `/success-stories`.

The project has shared navigation, footer, mobile CTA, exit-intent popup, testimonial carousel, four modal/form components, a small testimonials data module, and static PDF/image assets. Styling uses Tailwind CSS and Framer Motion.

### Functional surfaces

| Area | Current state |
|---|---|
| Marketing pages | Most page content and visual layouts are present. They are primarily static copy and client-side presentation. |
| Lead forms | Contact, free-training, resource opt-in, quiz, corporate-proposal, application, and newsletter submissions use a same-origin API and show provider/network failures. Delivery to GHL and CRM automation are not live-verified. |
| CRM and email | The API uses `GHL_WEBHOOK_URL` when configured and temporarily falls back to the legacy webhook. No repository code verifies pipeline mapping, email delivery, WhatsApp follow-up, or CRM-side automation. |
| Learning product | No account, enrollment entitlement, course player, course content model, progress tracking, assessment service, or learner dashboard is present. |
| Sales and payments | External links are used for some booking/book actions. There is no checkout, payment confirmation, order record, or in-app enrollment workflow. |
| Blog | One complete article is hard-coded. Search/category filtering works for available content; fake pagination and unavailable article cards were removed. |
| Resources | Four PDFs exist in `public/`; unavailable entries are disabled. Gating is a front-end flow, not secure access control. |
| SEO and analytics | Route metadata, sitemap, robots, and basic organization/site structured data are implemented. Analytics is not configured. |
| Tests | Six Node test cases cover lead payload validation. CI, lint/type-check/build are configured but have not run successfully in this environment. |

## Prioritized findings and required work

### P0 — Historical baseline blockers / remaining launch dependencies

#### 1. Investigate and replace the obfuscated initializer

**Baseline evidence:** the original audit found an opaque executable `init` invoked by the `dev`, `build`, and `start` scripts. The current worktree has removed the file and hooks without running the payload.

**Required work**

- Treat the historical initializer as untrusted; it is removed from the current worktree and must not be executed or restored.
- Preserve available Git history and establish how it entered the repository.
- Have the organization’s security owner assess repository history, CI/deployment activity, developer machines, and any credentials accessible to the process. Repository inspection cannot establish whether the file ran elsewhere.
- Reinstall dependencies from the selected npm lockfile in a trusted environment and run security checks.
- Rotate credentials if the investigation finds they may have been exposed. The CRM webhook URL is already client-visible and should not be treated as a secret.
- After cleanup, verify `dev`, lint, production build, and production start in an isolated trusted environment.

**Exit criterion:** no opaque initializer is invoked, clean install and package scripts pass, and the owner/security investigation has a documented outcome.

#### 2. Make lead submission outcomes truthful and dependable

**Baseline evidence:** browser code posted to GHL and callers showed success despite errors. Current work routes these form paths through `/api/leads`, validates payloads, and surfaces failures.

**Required work**

- Route submissions through a server-side boundary (a Next.js Route Handler/Server Action is sufficient for the current site; see the backend decision below).
- Configure the GHL endpoint outside client code, validate the required fields and allowed event/resource types server-side, and return a clear success/failure response to the form.
- Add user-visible error/retry states. Do not redirect, claim CRM delivery, or promise email delivery until the relevant action is confirmed.
- Confirm actual GHL CORS behavior, webhook response semantics, field mappings, duplicate handling, and pipeline/automation configuration with the live account.
- Add appropriate distributed abuse controls (rate limiting/bot protection), server-side monitoring, and approved retention/deletion rules. Request-size limits and privacy-conscious failure logs are present.
- Capture and forward campaign attribution/consent only as approved; document retention and deletion rules for form data.

**Exit criterion:** an end-to-end test proves each form produces the intended GHL record and automation, and simulated network/provider failures do not produce success-shaped UX.

#### 3. Complete the advertised conversion journeys

| Journey | Current gap | Required outcome |
|---|---|---|
| Free masterclass | The page provides an embed only when an HTTPS URL is configured; it currently remains unavailable without the owner URL. | Supply and test the approved video embed, then verify the post-opt-in journey. |
| Tier 3 application | Tier 3 form now submits and shows an enrollment-call link; the external booking itself is unverified. | Verify the GHL booking URL and its confirmation behavior with an authorized owner. |
| Career consultation | Missing URLs route to a contact form rather than pretending to book or charge. | Supply and test approved 30-/60-minute booking or checkout URLs. |
| Corporate brochure | Calls to action request the brochure through contact; the approved PDF is not in the repository. | Supply approved brochure and complete its gated delivery flow. |
| Resource library | Four PDFs are present; unavailable entries are disabled and resume type is described as PDF. | Owner to approve each listed resource's content and download behavior. |
| Success states | Generic success messages no longer claim enrollment or booking without verification. | Verify each external provider's own confirmation and automation. |

**Exit criterion:** every prominent CTA has a verified destination and every advertised download, booking, application, or video can be completed without manual intervention or misleading confirmation.

### P1 — Required for a credible, maintainable production site

#### 4. Complete or remove inert site controls

- **Resources/blog newsletters:** wired through the shared lead API with visible error states; GHL receipt remains unverified.
- **Blog:** search/category filtering works for the one complete article; false pagination and unavailable article links were removed.
- **Programs:** `/courses` redirects to the on-demand course section.
- **Legacy page:** `/program` redirects to `/programs`.
- **Footer:** placeholder podcast/legal links were removed. Add approved policy links after pages are supplied.
- Verify all external destinations, including GHL booking, Amazon, founder, support, and WhatsApp URLs.

**Exit criterion:** automated or manual link/button inventory finds no user-facing control with a missing action, placeholder URL, or unintended 404.

#### 5. Establish source-of-truth content and commercial rules

- Confirm prices, installment arithmetic, cohort/seat limits, program length, schedules, included benefits, refund terms, and payment provider behavior.
- Validate all employment, salary, pass-rate, graduate-count, ROI, and testimonial claims with evidence and approved disclaimers.
- The corporate page explicitly contains mock logo representations and presents detailed enterprise ROI/results. Replace mock marks and substantiate or remove claims before publishing.
- Review copy across the site and handoff docs for conflicting claims, date references, and the actual service being sold.

**Exit criterion:** every published commercial claim has an owner, evidence, and approval; product terms are consistent across pages, checkout, and CRM.

#### 6. Publish privacy, consent, accessibility, and data-handling behavior

- Publish real privacy, terms, and refund pages using owner/counsel-approved language; link them from relevant forms and footer.
- Add consent language and any marketing opt-in controls only after approval for relevant jurisdictions. Do not imply data is encrypted or secure without verifying the full transport/storage path.
- Define data retention, access, deletion, and breach-response processes for form submissions and CRM records.
- Form labels, dialog semantics, keyboard Escape/focus handling, status announcements, and reduced-motion CSS have been added to key conversion paths. Complete assistive-technology, contrast, keyboard, and mobile verification.

**Exit criterion:** legal links resolve; forms explain data use and consent; keyboard and screen-reader testing passes the agreed accessibility target.

#### 7. Implement analytics, SEO, and performance requirements

- Add approved GA4/GTM/Meta tracking and meaningful `cta_click`, `form_submit`, `lead`, and purchase events with duplicate/event-consent handling. Provider and consent choices are outstanding.
- Route-specific titles/descriptions, canonical/Open Graph metadata, `sitemap.xml`, `robots.txt`, and basic EducationalOrganization/WebSite structured data are present. Course/FAQ structured data has not been added because course claims and details require owner verification.
- Blog imagery uses Next Image and a narrow remote image allowlist. Other raw `<img>` usage and third-party imagery remain to be reviewed.
- Measure Lighthouse/Core Web Vitals on production-like hosting, including mobile/low-bandwidth profiles. The handoff target is Lighthouse performance 90+, LCP under 2.5 seconds, and TTI under 3 seconds; these have not been measured in this audit.

**Exit criterion:** analytics events are verified in their destination tools; search/social previews are complete; performance targets are measured and met or deviations accepted.

#### 8. Add automated quality gates and operational readiness

- Lead payload validation has six unit cases, including quiz answers. Add component/end-to-end checks for form state, provider failures, and conversion flows.
- Add lint/type-check/build checks in CI and dependency/security scanning. Add a test script and document the expected Node/package-manager versions.
- npm is selected; the pnpm lockfile was removed. CI, runtime versions, environment setup, deployment/rollback guidance, and provider-verification caveats are documented.
- Run the CI workflow successfully from a clean checkout and confirm deployment host, monitoring, rollback, and ownership.
- Verify the production host/domain, TLS, caching, error monitoring, backups (if any data store is introduced), and deployment protection using the actual deployment environment.

**Exit criterion:** CI passes from a clean checkout, critical user journeys are tested, and deployment/rollback/monitoring ownership is documented.

### P2 — Needed only if the product is intended to be an online learning application

The repository has no implementation for:

- learner registration, login, password reset, roles, or account lifecycle;
- enrollment entitlement and course access;
- course catalog/content management, video delivery, lesson progression, assessments, certificates, and learner progress;
- paid enrollment, invoices, refunds, payment reconciliation, and webhook-driven fulfillment;
- instructor/admin tools, cohort management, reporting, or support workflows.

These are not bugs in a marketing site, but they are necessary if “full functional application” means students should learn and manage their programs on this site rather than being handed off to GHL or a separate LMS. Define this product scope before building it.

## Backend decision: do we need Python FastAPI?

**Not for the current marketing site by itself.** A brochure, lead-capture, resource-download, and booking funnel can remain a Next.js application and use GHL as its CRM/automation system. For the gaps found here, the simplest next step is a **server-side Next.js route handler or server action** that validates requests and forwards them to GHL without exposing the destination in browser code. This improves control and truthful error handling without introducing a second runtime.

**FastAPI is an option, not a requirement.** Consider it if the confirmed product scope needs a separate backend service for learner accounts, course progress, assessments, entitlement, payments, admin operations, or substantial integrations/background jobs. Before choosing it, define service ownership, database/authentication, deployment/monitoring, and how Next.js will authenticate to it. Do not build a backend merely to recreate features that GHL or a selected LMS already owns.

| Requirement | Suggested owner |
|---|---|
| Marketing pages and server-rendered site | Next.js |
| Leads, CRM pipelines, email/WhatsApp nurturing, calendars | GHL, accessed through a server-side Next.js boundary where needed |
| Course catalog, access, progress, assessments | Selected LMS, or a purpose-built API if the LMS cannot satisfy requirements |
| Checkout and payment processing | Established payment provider; server-verified payment events |
| Custom learner/admin product with independent domain logic | FastAPI + persistent database is reasonable, but only after requirements are approved |

## Recommended delivery sequence

Follow the phased implementation roadmap above. Phases 0–7 deliver the marketing and lead-generation site. Phase 8 is conditional on choosing a custom learner platform; Phase 9 is the final release acceptance gate.

## Audit limits and validation status

- Findings are based on repository source and documentation, not a live deployment or authenticated GHL/account review.
- External endpoints, CRM workflow behavior, actual content/file correctness, and public-site performance were not exercised.
- Six focused Node tests run for lead payload validation. Lint, type-check, dependency audit, and build remain unverified because dependency restoration failed with registry connection resets; scripts no longer invoke `init`.
- CI is configured but has not yet run on GitHub. No production deployment or rollback was performed.
