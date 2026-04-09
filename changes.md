# Business Analysis School - Full Production Copy

This repository contains the complete production copy and funnel-first architecture for the **Business Analysis School** web platform. [cite_start]It serves as the definitive developer handoff document for building out the 11-page ecosystem. [cite: 1, 2, 4, 5]

---

## 📋 Project Overview
* [cite_start]**Version:** 1.0 (April 2026) [cite: 6]
* [cite_start]**Architecture:** Funnel-First, 11 Pages [cite: 4]
* [cite_start]**Design Tokens:** * **Primary Navy:** Backgrounds and navigation [cite: 11, 32]
    * [cite_start]**Gold (#D4A843):** Accents and emphasis [cite: 11, 23]
    * [cite_start]**Typography:** Instrument Serif (or equivalent display serif) for headings [cite: 23]
* [cite_start]**Core Tech Stack:** GHL (GoHighLevel) for forms, calendars, and automation pipelines [cite: 19, 122, 172, 181, 481]

---

## 🗺️ Sitemap & Page Index

### 1. Homepage (`/`)
[cite_start]The central hub designed to drive 40%+ of registrations through the hero section. [cite: 29]
* [cite_start]**Navigation:** Fixed on scroll; includes "Apply Now" CTA linking to GHL. [cite: 11, 18, 19]
* [cite_start]**Hero:** Features an IIBA endorsed eyebrow and a primary "Start Free Training" conversion path. [cite: 21, 27]
* [cite_start]**Social Proof:** Animated stats bar showing 100K+ professionals trained across 90+ countries. [cite: 32, 33, 34]
* [cite_start]**How It Works:** 3-step sequential scroll animation (Learn, Certify, Land the Role). [cite: 51, 52, 55, 58]

### 2. Free Training (`/free-training`)
[cite_start]The primary lead generation page and the #1 conversion point on the site. [cite: 237, 252]
* [cite_start]**Content:** Masterclass on becoming an AI Business Analyst in 2026 without a tech degree. [cite: 241]
* [cite_start]**Form:** GHL-integrated capture (Name, Email, Phone) triggering a 7-email nurture sequence. [cite: 247, 248, 249, 253]

### 3. Programs Overview (`/programs`)
[cite_start]Comprehensive list of all educational tracks. [cite: 278, 279]
* [cite_start]**AI Accelerator:** Flagship 3-tier program (Detailed below). [cite: 285]
* [cite_start]**Certification Prep:** ECBA, CCBA, and CBAP intensive courses. [cite: 290, 293, 296]
* [cite_start]**On-Demand:** Self-paced foundations and masterclass replays. [cite: 303, 307]

### 4. AI Accelerator (`/ai-accelerator`)
[cite_start]Dedicated sales page for the flagship 6-week intensive program. [cite: 331, 332, 336]
* [cite_start]**Tier 1: Certified AI Business Analyst** ($1,997) - Focus on N8N automation and prompt engineering. [cite: 67, 70, 74, 77]
* [cite_start]**Tier 2: Certified AI Business Strategist** ($2,997) - Includes executive presence and leadership training. [cite: 86, 89, 94]
* [cite_start]**Tier 3: Certified AI Business Consultant** ($4,997) - "The Empire Builder" for launching a private practice. [cite: 105, 108, 119]

### 5. Certifications (`/certifications`)
[cite_start]Expanded details on IIBA and ScrumStudy (SMC, SPOC, Six Sigma) credentials. [cite: 393, 396, 400]

### 6. Corporate Training (`/corporate-training`)
[cite_start]B2B-focused page with RFP submission forms and training needs assessment tools. [cite: 399, 401, 403]

### 7. The Book (`/book`)
[cite_start]Sales page for *"The Six-Figure Business Analyst"* by Eno Eka. [cite: 405, 407]
* [cite_start]**Offer:** Includes a standalone book or a Book + Workbook Bundle upsell. [cite: 418, 419]

### 8. Resources / Downloads (`/resources`)
[cite_start]A library of gated content including: [cite: 422, 423]
* [cite_start]BA Career Starter Kit (eBook). [cite: 429]
* [cite_start]Resume Templates & Interview Questions. [cite: 430, 431]
* [cite_start]Career Assessment Quiz (High-converting segmenting tool). [cite: 433, 437]

### 9. About Us (`/about`)
[cite_start]Background on founder Eno Eka and the brand's evolution from mentoring to a global platform of 100K+ professionals. [cite: 438, 442, 445]

### 10. Success Stories (`/success-stories`)
[cite_start]A filterable gallery of 15–20 verified graduate testimonials with "result badges." [cite: 458, 463, 464, 465]

### 11. Contact (`/contact`)
[cite_start]GHL calendar integration for booking 15-minute enrollment consultations. [cite: 469, 470, 491]

---

## 🛠️ Global Elements & DEV Specs

| Feature | Specification |
| :--- | :--- |
| **Exit-Intent Popup** | [cite_start]Triggers on mouse-leave or 10s idle; offers free masterclass access. [cite: 495, 502] |
| **Mobile Sticky CTA** | [cite_start]56px height fixed bottom bar with "Apply Now" button. [cite: 503, 506] |
| **SEO** | [cite_start]FAQ sections must use JSON-LD schema markup. [cite: 385] |
| **Integrations** | [cite_start]All forms route to GHL pipelines based on interest selection. [cite: 481] |

---

> **Disclaimer:** Business Analysis School does not guarantee specific employment outcomes. [cite_start]Results depend on individual effort and market conditions. [cite: 235, 236]


# Business Analysis School: Full Production Copy

[cite_start]This document contains the complete production-ready copy for the **Business Analysis School** web platform, organized for developer handoff[cite: 1, 2, 5].

---

## 🏛️ Page 1: Homepage
[cite_start]**URL:** `/` [cite: 8]

### 1.1 Navigation & Hero
* [cite_start]**Logo:** "BUSINESS ANALYSIS" in white, "SCHOOL" in gold (#D4A843) on a dark navy background[cite: 11].
* [cite_start]**Menu:** Home, Free Training, Programs, Resources, About, Contact[cite: 12, 13, 14, 15, 16, 17].
* [cite_start]**CTA:** "Apply Now" links to a GHL application form[cite: 18, 19].
* [cite_start]**Headline:** "Land a Six-Figure Career in Tech Without a Tech Degree"[cite: 22].
* **Social Proof Bar:** 100K+ Professionals Trained across 90+ Countries; [cite_start]IIBA Endorsed Education Provider[cite: 33, 34, 35].

### 1.2 How It Works
1.  [cite_start]**Learn the Skills:** Master frameworks and AI tools aligned with IIBA standards[cite: 52, 53, 54].
2.  [cite_start]**Get Certified:** Earn credentials like ECBA, CCBA, CBAP, and Scrum Master[cite: 55, 56].
3.  [cite_start]**Land the Role:** Career coaching and resume optimization to get hired in 30–90 days[cite: 58, 59, 61].

---

## 🚀 Page 2: Free Training (Lead Gen)
[cite_start]**URL:** `/free-training` [cite: 238]

* [cite_start]**Primary Offer:** Free Masterclass — "How to Become an AI Business Analyst in 2026 Without a Tech Degree"[cite: 241].
* [cite_start]**Conversion:** Form captures Name, Email, and Phone (WhatsApp preferred)[cite: 247, 248, 249].
* [cite_start]**Instructor:** Eno Eka, award-winning consultant and one of Canada’s Top 100 Most Powerful Women[cite: 269, 271].

---

## 🎓 Page 3 & 4: Programs & AI Accelerator
**URL:** `/programs` | [cite_start]`/ai-accelerator` [cite: 279, 332]

| Tier | Name | Focus | Price |
| :--- | :--- | :--- | :--- |
| **Tier 1** | Certified AI Business Analyst | [cite_start]Workflow automation (N8N), APIs, and Prompt Engineering[cite: 69, 74, 76, 77]. | [cite_start]$1,997 [cite: 70] |
| **Tier 2** | Certified AI Business Strategist | [cite_start]Leadership, Executive Presence, and C-Level Networking[cite: 88, 94, 97]. | [cite_start]$2,997 [cite: 89] |
| **Tier 3** | Certified AI Business Consultant | [cite_start]Building a consulting practice (Legal, Branding, Sales Funnels)[cite: 107, 113, 114]. | [cite_start]$4,997 [cite: 108] |

---

## 📚 Page 7: The Book
[cite_start]**URL:** `/book` [cite: 406]

* [cite_start]**Title:** *The Six-Figure Business Analyst*[cite: 407].
* [cite_start]**Premise:** 12 steps to kickstart a career without a tech degree, based on Eno Eka's transition from accountant to consultant[cite: 408, 410].
* [cite_start]**Bundles:** Option to purchase the Book + Companion Workbook[cite: 419].

---

## 🛠️ Page 8: Resources
[cite_start]**URL:** `/resources` [cite: 423]

* [cite_start]**BA Career Starter Kit:** eBook covering salary data and a 90-day roadmap[cite: 429].
* [cite_start]**Resume Template:** Optimized DOCX file for BA roles[cite: 430].
* [cite_start]**Interview Prep:** Top 50 BA questions and model answers[cite: 431].
* [cite_start]**Career Quiz:** 3-minute assessment with personalized recommendations[cite: 433].

---

## 📞 Page 11: Contact & Support
[cite_start]**URL:** `/contact` [cite: 470]

* [cite_start]**Inquiries:** Respond within 24 business hours[cite: 474].
* [cite_start]**Email:** `support@businessanalysisschool.com`[cite: 483].
* [cite_start]**Global Offices:** Canada (+1-587-328-8469) and Nigeria (+234-908-551-5969)[cite: 485, 486].
* [cite_start]**Enrollment Call:** Free 15-minute consultation to find the right program fit[cite: 489, 490].

---

## 💻 Global Developer Notes
* [cite_start]**Exit-Intent Popup:** Triggers when the mouse leaves the viewport; offers the free masterclass[cite: 495, 502].
* [cite_start]**Mobile CTA:** Fixed 56px bottom bar with "Apply Now" button[cite: 503, 506].
* [cite_start]**Integrations:** All forms must route data directly to GHL pipelines[cite: 481, 491].
* [cite_start]**Disclaimer:** No guarantee of specific employment outcomes or income levels[cite: 235].

[cite_start]To facilitate the automation via your GHL webhook, I have designed a structured dialog form based on the requirements from the **BAS Full Production Copy**[cite: 1, 2]. [cite_start]This form is designed to capture the specific data points needed to trigger the appropriate enrollment and nurture sequences[cite: 122, 182, 253].

---

## 🛠️ GHL Automation Lead Capture Form

### **Section 1: Contact Information**
* [cite_start]**First Name:** [Input Field] [cite: 476]
* [cite_start]**Last Name:** [Input Field] [cite: 247]
* [cite_start]**Email Address:** [Input Field - Validation Required] [cite: 248, 477]
* [cite_start]**Phone Number:** [Input Field - WhatsApp preferred] [cite: 249, 478]

### **Section 2: Qualification & Segmentation**
* [cite_start]**Current Professional Role:** [Short Answer] [cite: 122]
* [cite_start]**Current Annual Income Level:** [cite: 122]
    * [ ] $0 – $60,000
    * [ ] $60,000 – $100,000
    * [ ] $100,000 – $240,000
    * [cite_start][ ] $240,000+ [cite: 83, 102]
* [cite_start]**Primary Career Goal:** [cite: 122]
    * [ ] Transition into Tech/Business Analysis
    * [ ] Upskill with AI in current role
    * [cite_start][ ] Build an AI Consulting Practice [cite: 119]

### **Section 3: Program Interest (Webhook Trigger Logic)**
* [cite_start]**I am interested in:** [Dropdown Menu] [cite: 479]
    * [cite_start]Free Masterclass (Instant Access) [cite: 172, 250]
    * [cite_start]Tier 1: Certified AI Business Analyst [cite: 69]
    * [cite_start]Tier 2: Certified AI Business Strategist [cite: 88]
    * [cite_start]Tier 3: AI Business Consultant (Application Required) [cite: 107, 120]
    * [cite_start]Corporate Training Solutions [cite: 322]

---

## ⚡ Webhook Implementation Guide

| Form Action | Target GHL Pipeline / Sequence |
| :--- | :--- |
| **Free Training Opt-in** | [cite_start]Triggers 7-email enrollment sequence + instant video access[cite: 182, 253]. |
| **Tier 3 Application** | [cite_start]Routes to Enrollment Team for a call booking within 24hrs[cite: 122, 123]. |
| **Corporate Inquiry** | [cite_start]Routes to High-Value B2B pipeline[cite: 323, 481]. |
| **Resource Download** | [cite_start]Triggers 5-email value sequence based on the specific asset[cite: 183, 436]. |

### **Developer Note:**
[cite_start]The **Exit-Intent Popup** and **Sticky Mobile Bar** should both point to this dialog form to ensure 100% of lead data is captured and sent to your GHL webhook for processing[cite: 500, 505].