# PLANNING AUDIT

**Date:** 2026-06-11
**Status:** ⚠️ INCOMPLETE — Minor omissions found, no blockers

---

## 1. Pages & Routes Audit

| Page | Source Spec | REQUIREMENTS.md | ROADMAP.md | Status |
|------|-----------|-----------------|------------|--------|
| Homepage (9 sections) | AGENTS.md §7 | FR-01 ✅ | Phase 4 ✅ | ✅ |
| About Us | AGENTS.md §7 | FR-02 ✅ | Phase 5 ✅ | ✅ |
| Services Overview | AGENTS.md §7 | FR-03 ✅ | Phase 6 ✅ | ✅ |
| Service Detail ×7 | AGENTS.md §6 | FR-04 ✅ | Phase 6 ✅ | ✅ |
| Portfolio | AGENTS.md §7 | FR-05 ✅ | Phase 7 ✅ | ✅ |
| Careers | AGENTS.md §7 | FR-06 ✅ | Phase 8 ✅ | ✅ |
| Blog Index | AGENTS.md §7 | FR-07 ✅ | Phase 9 ✅ | ✅ |
| Blog Detail ×4 | AGENTS.md §7 | FR-08 ✅ | Phase 9 ✅ | ✅ |
| Contact | AGENTS.md §7 | FR-09 ✅ | Phase 8 ✅ | ✅ |
| 404 | AGENTS.md §7 | FR-10 ✅ | Phase 10 ✅ | ✅ |

**Result: All 10 page types / 15+ routes accounted for. ✅**

### Homepage 9 Sections Cross-Check (AGENTS.md §7 order)

| # | Section | FR-01 Listed | Phase 4 Desc |
|---|---------|-------------|-------------|
| 1 | Hero (gradient bg, headline, 2 CTAs) | ✅ | ✅ |
| 2 | Professional Approach (3-col) | ✅ | ✅ |
| 3 | Services Slider (Swiper, 7 cards) | ✅ | ✅ |
| 4 | Unlimited Possibilities (2-col) | ✅ | ✅ |
| 5 | Core Values + Counters | ✅ | ✅ |
| 6 | Why Work With Us (6 grid) | ✅ | ✅ |
| 7 | Featured Work (Tago, Valley Sierra, DMS) | ✅ | ✅ |
| 8 | Testimonials (Swiper, 3 quotes) | ✅ | ✅ |
| 9 | CTA Split-Screen (careers + contact) | ✅ | ✅ |

**Result: All 9 homepage sections in correct AGENTS.md order. ✅**

---

## 2. Components Audit

| Component | Source | REQUIREMENTS.md | Status |
|-----------|--------|-----------------|--------|
| Header (sticky glass, dropdown, hamburger) | AGENTS.md §7 | FR-11 ✅ | ✅ |
| Footer (dark bg, 3 cols, social icons) | AGENTS.md §7 | FR-12 ✅ | ✅ |
| Breadcrumbs (service detail + blog detail) | AGENTS.md §7 | FR-13 ✅ | ✅ |
| ServiceCard (icon + title + desc, hover) | AGENTS.md §7 | FR-14 ✅ | ✅ |
| PortfolioCard (thumb + tags, hover overlay) | AGENTS.md §7 | FR-15 ✅ | ✅ |
| TestimonialSlider (Swiper, loop, autoplay) | AGENTS.md §7 | FR-16 ✅ | ✅ |
| CounterStats (ScrollTrigger count-up) | AGENTS.md §7 | FR-17 ✅ | ✅ |
| ContactForm (5 fields, UI-only) | AGENTS.md §7 | FR-18 ✅ | ✅ |
| Hero component | UI-WIREFRAME §2 | ⚠️ Not listed as FR | ⚠️ |

**Finding W-01:** Hero is listed in `intel/requirements.md` as R-COMP-03 but not tracked as a separate FR in `REQUIREMENTS.md`. It is implicitly covered by FR-01 (homepage) but should be explicit since it's a reusable component per AGENTS.md §3 directory structure.

---

## 3. Data & Content Audit

### Data Files

| Data File | Source Schema | REQUIREMENTS.md | Status |
|-----------|-------------|-----------------|--------|
| team.json (8 mgmt + 32 team) | AGENTS.md §6 | FR-19 ✅ | ✅ |
| portfolio.json (11 projects) | AGENTS.md §6 | FR-20 ✅ | ✅ |
| services.json (7 services) | AGENTS.md §6 | FR-21 ✅ | ✅ |
| careers.json (3 positions, Vietnamese) | AGENTS.md §6 | FR-22 ✅ | ✅ |
| Blog collection (4 posts) | AGENTS.md §6 | FR-23 ✅ | ✅ |

### Portfolio Projects (11 required)

| # | Project | Tags (CONTENT.md) | Tracked |
|---|---------|-------------------|---------|
| 1 | Homing | Design, Startup, Website | ✅ |
| 2 | Dr. Berg | Startup, Website | ✅ |
| 3 | Tago | Mobile | ✅ |
| 4 | DMS | Startup, Website, Mobile | ✅ |
| 5 | Valley Sierra | E-commerce*, Website | ✅ |
| 6 | Sqoop | Mobile, Website | ✅ |
| 7 | Swolematch | Hybrid App, Mobile, Website | ✅ |
| 8 | Leed Pop | Hybrid App, Mobile, Website | ✅ |
| 9 | XEKE | Mobile, Website | ✅ |
| 10 | My CalSigns | Website | ✅ |
| 11 | Vespa Safari | Website | ✅ |

*Valley Sierra tag typo "Ecomerce" → "E-commerce" resolved in INGEST-CONFLICTS.md ✅

### Blog Posts (4 required)

| # | Slug | Date | Tracked |
|---|------|------|---------|
| 1 | the-rise-of-digital-nomads | Aug 3, 2018 | ✅ |
| 2 | ios-developer-skills-matrix | Jul 19, 2018 | ✅ |
| 3 | blockchain-in-200-lines-of-code | Jun 29, 2018 | ✅ |
| 4 | my-4-deepest-scars | Jun 29, 2018 | ✅ |

### Career Positions (3 required, Vietnamese)

| # | Title | Vietnamese Content Rule | Tracked |
|---|-------|----------------------|---------|
| 1 | Web Developer | ✅ | ✅ |
| 2 | Android Developer | ✅ | ✅ |
| 3 | Designer | ✅ | ✅ |

### Team Members

| Group | Count (CONTENT.md) | Tracked | Status |
|-------|-------|---------|--------|
| Management | 8 | FR-19: 8 ✅ | ✅ |
| Team | 32 | FR-19: 32 ✅ | ⚠️ |

**Finding W-02:** CONTENT.md lists 32 team members (Nguyen Nguyen through Hung Dau). ASSETS.md says "Team Members (x30)" — discrepancy. AGENTS.md says 32. Requirements correctly say 32 per AGENTS.md override. ASSETS.md's "x30" count is the only inconsistency — not a planning issue but a source doc discrepancy. Planning correctly follows AGENTS.md.

---

## 4. Assets Audit

### Asset Filenames (AGENTS.md §8)

| Asset | Filename Convention | In REQUIREMENTS.md | Status |
|-------|-------------------|-------------------|--------|
| logo.svg | ✅ specified | NFR-15 (generic) | ⚠️ |
| favicon.ico | ✅ specified | NFR-16 ✅ | ✅ |
| og-image.png | ✅ specified | NFR-16 ✅ | ✅ |
| hero-graphic.svg | ✅ specified | NFR-16 ✅ | ✅ |
| hue-map.webp | ✅ specified | NFR-20 ✅ | ✅ |
| portfolio-{name}.webp ×11 | ✅ specified | NFR-17 ✅ | ⚠️ |
| blog-{name}.webp ×4 | ✅ specified | NFR-17 ✅ | ⚠️ |
| mgmt-{name}.webp ×8 | ✅ specified | NFR-19 ✅ | ✅ |

**Finding W-03:** REQUIREMENTS.md NFR-15 through NFR-20 track assets by category (logo, favicon, portfolio thumbnails, etc.) but do NOT list the exact filenames from AGENTS.md §8 (e.g., `portfolio-homing.webp`, `portfolio-drberg.webp`, `blog-nomads.webp`, `blog-skills.webp`, etc.). The intel/requirements.md (R-ASSET-01 through R-ASSET-09) similarly lacks exact filenames. This is a **minor omission** — the counts are correct but specific filenames should be referenced during execution.

### AGENTS.md §8 Specific Filenames Not Explicitly Listed

Portfolio: `portfolio-homing.webp`, `portfolio-drberg.webp`, `portfolio-tago.webp`, `portfolio-dms.webp`, `portfolio-valleysierra.webp`, `portfolio-sqoop.webp`, `portfolio-swolematch.webp`, `portfolio-leedpop.webp`, `portfolio-xeke.webp`, `portfolio-mycalsigns.webp`, `portfolio-vespasafari.webp`

Blog: `blog-nomads.webp`, `blog-skills.webp`, `blog-blockchain.webp`, `blog-scars.webp`

---

## 5. Design System Audit

| Token Group | DESIGN-SYSTEM.md | REQUIREMENTS.md | Status |
|-------------|-----------------|-----------------|--------|
| Backgrounds (6 vars) | ✅ | NFR-01 (general ref) | ✅ |
| Text colors (5 vars) | ✅ | NFR-01 | ✅ |
| Brand colors (5 vars) | ✅ | NFR-01 | ✅ |
| Neon colors (3 vars) | ✅ | NFR-01 | ✅ |
| Semantic colors (3 vars) | ✅ | NFR-01 | ✅ |
| Surface/effects (3 vars) | ✅ | NFR-01 | ✅ |
| Typography scale (9 tokens) | ✅ | NFR-01, NFR-04 | ✅ |
| Spacing scale | ✅ | NFR-01 | ✅ |
| Border radius (4 tokens) | ✅ | NFR-01 | ✅ |
| Shadows (4 tokens) | ✅ | NFR-01 | ✅ |
| Glassmorphism (5 tokens) | ✅ | NFR-01 | ✅ |
| Animation tokens (4 tokens) | ✅ | NFR-01 | ✅ |
| CSS reset/base (global.css) | ✅ | NFR-02 ✅ | ✅ |
| BEM component CSS | ✅ | NFR-03 ✅ | ✅ |
| Responsive typography <767px | ✅ | NFR-04 ✅ | ✅ |

**Result: Design system fully tracked. NFR-01 correctly references DESIGN-SYSTEM.md as source. ✅**

---

## 6. Technical Constraints Audit

| Constraint | Source | In Planning | Status |
|-----------|--------|------------|--------|
| Astro v5, SSG only | AGENTS.md §1 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| No TypeScript | AGENTS.md §1 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| No Tailwind/CSS-in-JS | AGENTS.md §1 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| No Astro integrations | AGENTS.md §1 | constraints.md ✅ | ✅ |
| No Vercel adapter | AGENTS.md §1 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| Only astro, gsap, swiper deps | AGENTS.md §4 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| Vanilla CSS + BEM | AGENTS.md §1 | PROJECT.md ✅ | ✅ |
| GSAP + ScrollTrigger | AGENTS.md §1 | PROJECT.md ✅ | ✅ |
| Swiper.js v11 | AGENTS.md §1 | PROJECT.md ✅ | ✅ |
| Vercel static deploy | AGENTS.md §1 | PROJECT.md ✅ | ✅ |
| Content verbatim from CONTENT.md | AGENTS.md §2 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| Vietnamese for careers | AGENTS.md §1 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| Contact form UI-only | AGENTS.md §2 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| Apply Now → /contact | AGENTS.md §2 | PROJECT.md ✅ | ✅ |
| Let's Talk → /contact | AGENTS.md §2 | PROJECT.md ✅ | ✅ |
| Static map (no API) | AGENTS.md §2 | PROJECT.md ✅, constraints.md ✅ | ✅ |
| Mobile-first breakpoints | AGENTS.md §2 | PROJECT.md ✅ | ✅ |
| Min touch target 48×48px | AGENTS.md §2 | NFR-11 ✅ | ✅ |
| Single h1 per page | AGENTS.md §2 | NFR-05 ✅ | ✅ |
| Semantic HTML | AGENTS.md §2 | NFR-05 ✅ | ✅ |
| site: tenomad.com in config | AGENTS.md §4 | Phase 1 desc ✅ | ✅ |
| output: 'static' in config | AGENTS.md §4 | Phase 1 desc ✅ | ✅ |
| build.assets: '_assets' | AGENTS.md §4 | Phase 1 desc ✅ | ✅ |

**Result: All 22 constraints accounted for. ✅**

---

## 7. Roadmap Coverage Audit

### Requirements → Phase Mapping

| Requirement | Phase | Covered |
|------------|-------|---------|
| NFR-01,02,03,04 (Design System) | Phase 1 | ✅ |
| FR-11,12 + NFR-05,06,07 (Layout/Header/Footer) | Phase 2 | ✅ |
| FR-19-23 + NFR-15,16,18,19 (Assets/Data) | Phase 3 | ✅ |
| FR-01,03(partial),14,16,17 + FR-24-27 (Homepage) | Phase 4 | ✅ |
| FR-02 (About Us) | Phase 5 | ✅ |
| FR-03,04,13,14 (Services) | Phase 6 | ✅ |
| FR-05,15 + NFR-17 (Portfolio) | Phase 7 | ✅ |
| FR-06,09,18 + NFR-08,09,20 (Careers/Contact) | Phase 8 | ✅ |
| FR-07,08,13 + NFR-17 (Blog) | Phase 9 | ✅ |
| FR-10,24,28,29 + NFR-10,11 (404/Animations) | Phase 10 | ✅ |
| NFR-05-08,12-14 (QA/Performance) | Phase 11 | ✅ |

### Phase Order Logic Check

| Check | Result |
|-------|--------|
| Design system before components | Phase 1 → Phase 2 ✅ |
| Layout before pages | Phase 2 → Phase 4+ ✅ |
| Data files before pages that consume them | Phase 3 → Phase 4+ ✅ |
| Assets before pages that display them | Phase 3 → Phase 4+ ✅ |
| Blog content collection before blog pages | Phase 3 → Phase 9 ✅ |
| 404 and animations as polish phase | Phase 10 ✅ |
| QA as final phase | Phase 11 ✅ |

**Result: All requirements mapped to phases. Ordering is logical. ✅**

### Unmapped Requirements Check

Every FR (01-29) and NFR (01-20) appears in at least one phase. **No orphaned requirements. ✅**

---

## 8. Conflict Resolution Audit

| Conflict | Resolution | Correct |
|----------|-----------|---------|
| Hero CTA count (1 vs 2) | Use 2 CTAs per AGENTS.md/wireframe | ✅ AGENTS.md overrides CONTENT.md |
| Homepage section order | Use AGENTS.md §7 order | ✅ AGENTS.md is authoritative |
| Valley Sierra "Ecomerce" typo | Normalize to "E-commerce" | ✅ PRD precedence |

**Result: All 3 detected conflicts correctly resolved. ✅**

---

## 9. Context Truncation Checklist

| Source Doc | Size | Key Items | Fully Captured |
|-----------|------|-----------|---------------|
| AGENTS.md | 9,402 bytes | 11 sections | ✅ All rules present in constraints + decisions |
| tenomad-blog-prd.md | 9,660 bytes | 8 user stories, sitemap, responsive strategy | ✅ |
| UI-WIREFRAME.md | 10,918 bytes | 10 homepage sections, 7 subpages | ✅ |
| DESIGN-SYSTEM.md | 3,103 bytes | 6 token groups, 40+ variables | ✅ |
| ASSETS.md | 3,531 bytes | 30 asset rows | ✅ (count discrepancy x30 vs x32 noted) |
| CONTENT.md | 29,339 bytes (422 lines) | 8 content sections | ✅ All sections referenced |

**CONTENT.md** is the largest source (29KB). Key verification:
- [x] 3 testimonials with full quotes and author attributions → referenced in FR-16
- [x] 8 management bios → referenced in FR-19
- [x] 32 team members → referenced in FR-19
- [x] 7 service detail texts → referenced in FR-04/FR-21
- [x] 4 full blog articles → referenced in FR-23
- [x] 3 Vietnamese job listings → referenced in FR-22
- [x] Contact details (address, phone, email) → referenced in FR-09
- [x] Social media links (3 URLs) → referenced in FR-12

**Result: No context truncation detected. ✅**

---

## 10. Findings Summary

### Blockers (0)

None. All critical requirements, pages, components, data schemas, and constraints are properly tracked.

### Warnings (3)

| ID | Finding | Severity | Recommendation |
|----|---------|----------|---------------|
| W-01 | Hero not tracked as explicit FR component | Low | Add FR for Hero component or note it's implicitly part of FR-01. Acceptable as-is since it will be built during Phase 4. |
| W-02 | ASSETS.md says "x30" team members, CONTENT.md/AGENTS.md say 32 | Low | Source doc discrepancy. Planning correctly follows AGENTS.md (32). No action needed. |
| W-03 | Exact asset filenames from AGENTS.md §8 not listed in REQUIREMENTS.md | Medium | Consider adding a note to Phase 3 or Phase 7/9 referencing exact filenames (`portfolio-{name}.webp`, `blog-{name}.webp`) to avoid naming inconsistencies during execution. |

### Info (2)

| ID | Note |
|----|------|
| I-01 | `intel/requirements.md` provides a more granular R-* ID scheme (R-PAGE, R-COMP, R-DS, R-DATA, R-ASSET, R-ANIM, R-SEO, R-A11Y, R-PERF) alongside the FR/NFR scheme in `REQUIREMENTS.md`. Both are aligned. |
| I-02 | ROADMAP Phase 4 references `FR-03 (partial)` — correctly indicating the Services Overview framework section appears on the homepage as Professional Approach but the full page is Phase 6. |

---

## 11. Verdict

**Overall Status: ✅ PASS (with minor warnings)**

The planning directory accurately captures all requirements from the 6 source documents. No pages, components, data schemas, constraints, or content sections are missing. The roadmap phases are logically ordered and every requirement is mapped to at least one phase. Conflict resolution follows the correct precedence hierarchy (AGENTS.md > UI-WIREFRAME.md > others). No context truncation was detected in the 29KB CONTENT.md ingestion.

The 3 warnings are cosmetic/minor and will not block execution. W-03 (exact asset filenames) is the most actionable — adding filename conventions to Phase 3 description would prevent confusion.
