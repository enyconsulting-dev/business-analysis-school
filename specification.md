# Business Analysis School: Developer Handoff Specification

[cite_start]**URL:** [businessanalysisschool.com](https://businessanalysisschool.com) [cite: 521]
**Platform:** Vercel (Custom Coded) | [cite_start]Next.js Recommended [cite: 522]
[cite_start]**Version:** April 2026 [cite: 522]

---

## 1. Global Design Specifications

### 1.1 Brand Identity & Positioning
* [cite_start]**Site Identity:** Business Analysis School — B2C education brand under ENY Consulting Inc. [cite: 525]
* [cite_start]**Positioning:** Premium high-ticket education with a funnel-first architecture[cite: 526].
* [cite_start]**Tone:** Direct, aspirational, and authority-driven[cite: 527].
* [cite_start]**Aesthetic:** Dark, premium, high-conversion (Netflix meets Harvard coaching style)[cite: 528].

### 1.2 Color Palette
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--navy` | `#0B1D3A` | [cite_start]Primary backgrounds, hero sections [cite: 530] |
| `--navy-deep` | `#060F20` | [cite_start]Deep backgrounds, footer [cite: 530] |
| `--orchid` | `#96088E` | [cite_start]Primary accent, CTAs, links, highlights [cite: 530] |
| `--orchid-lt` | `#B84DB2` | [cite_start]Hover states, secondary accent [cite: 530] |
| `--gold` | `#D4A843` | [cite_start]Premium accents, eyebrow text, badges, pricing [cite: 530] |
| `--green` | `#0DB760` | [cite_start]Success badges, checkmarks [cite: 530] |
| `--white` | `#FFFFFF` | [cite_start]Text on dark, card backgrounds [cite: 530] |
| `--light` | `#F6F4F9` | [cite_start]Light section backgrounds [cite: 530] |
| `--gray-500` | `#7A7284` | [cite_start]Body text, descriptions [cite: 530] |

### 1.3 Typography
* **Display H1:** Instrument Serif | Desktop: `clamp(2.4rem, 4.5vw, 3.6rem)` | [cite_start]Mobile: `2.2rem`[cite: 532].
* **Section H2:** Instrument Serif | Desktop: `clamp(1.8rem, 3vw, 2.5rem)` | [cite_start]Mobile: `1.6rem`[cite: 532].
* **Body:** Outfit 400 | Desktop: `1rem (16px)` | [cite_start]Mobile: `0.95rem`[cite: 532].
* [cite_start]**Fallbacks:** Georgia for serif, system-ui for sans; load from Google Fonts[cite: 533].

### 1.4 Animation Specs
* **Fade Up:** Scroll into view | 0.8s | [cite_start]`translateY(24px)→0`, opacity 0→1[cite: 537].
* **Stat Counter:** Scroll into view | 1.2s | [cite_start]Count from 0 to target[cite: 537].
* **Hero Glow:** Page load | 6s infinite | [cite_start]Radial gradient pulse (orchid)[cite: 537].
* **CTA Pulse:** Idle 5s | 2s infinite | [cite_start]Subtle opacity pulse on sticky CTA[cite: 537].

---

## 2. Key Global Components

### 2.1 Navigation & Sticky Bar
* [cite_start]**Fixed Nav:** 68px height, 95% opacity dark navy with `blur(16px)`[cite: 540].
* [cite_start]**Mobile Nav:** Hamburger menu with full-screen overlay[cite: 541].
* [cite_start]**Sticky Bottom Bar:** 56px height, white background, shadow[cite: 541, 551].
    * [cite_start]**Context CTAs:** 'Start Free Training' (Info), 'Enroll Now' (Programs), 'Book a Call' (Sales)[cite: 552].
* [cite_start]**Critical:** The 'Apply Now' CTA must be visible at all scroll positions[cite: 542].

### 2.2 Exit-Intent Popup
* [cite_start]**Trigger:** Mouse leaves viewport top OR 10s idle; show once per session[cite: 547].
* **Content:** Free masterclass offer; Email only form; [cite_start]GHL instant delivery[cite: 548].

---

## 3. Page-By-Page Breakdown

| Page | URL | Primary CTA | Purpose |
| :--- | :--- | :--- | :--- |
| **Homepage** | `/` | Start Free Training | Funnel hub; [cite_start]Hero (90vh) with orchid glow [cite: 555-557, 565]. |
| **Free Training** | `/free-training` | Get Free Access | #1 Lead Gen; [cite_start]Full-page hero, no nav distractions [cite: 568-570]. |
| **Programs** | `/programs` | Enrollment Call | [cite_start]Hub linking to all Accelerator tiers and Cert Prep [cite: 576-580]. |
| **AI Accelerator** | `/ai-accelerator` | Choose Tier & Enroll | High-ticket long-form sales page; [cite_start]Urgency through spot limits [cite: 581-584]. |
| **Certifications** | `/certifications` | Enroll in Cert Prep | [cite_start]Details for ECBA, CCBA, CBAP prep[cite: 587]. |
| **Corporate** | `/corporate-training` | Request Proposal | [cite_start]B2B lead generation for organizations[cite: 587]. |
| **The Book** | `/book` | Buy Book / Bundle | [cite_start]Sales and lead warming via "The Six-Figure BA"[cite: 587]. |
| **Resources** | `/resources` | Download / Quiz | [cite_start]Library of 6 gated lead magnets[cite: 587]. |

---

## 4. Integration & Tracking

### 4.1 GHL (GoHighLevel) Mapping
* **Free Training:** Enrollment Pipeline | [cite_start]Instant access + 7-email nurture + WhatsApp follow-up[cite: 590].
* **Tier 3 App:** VIP Application Pipeline | [cite_start]Call booking within 24hrs[cite: 590].
* **Quiz:** Segmented Pipeline | [cite_start]Result-based recommendations[cite: 590].
* [cite_start]**General Tracking:** GA4 (cta_click, form_submit), Facebook Pixel (Lead, Purchase), GTM[cite: 592].

### 4.2 Performance & SEO
* [cite_start]**Schema:** Implement JSON-LD Organization, Course, and FAQ schemas[cite: 602].
* **Targets:** Lighthouse Performance 90+; LCP < 2.5s; [cite_start]TTI < 3s[cite: 604].
* [cite_start]**Optimization:** Aggressive optimization for Nigeria mobile users (3G/4G connections)[cite: 605].
* [cite_start]**Tools:** Use `next/image`, lazy loading, and service workers[cite: 606].