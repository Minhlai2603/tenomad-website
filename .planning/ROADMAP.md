# ROADMAP

## Milestone 1: Tenomad Website v1.0

### Phase 1: Project Scaffolding & Design System

**Status:** Complete (completed 2026-06-11)
**Requirements:** NFR-01, NFR-02, NFR-03, NFR-04
**Description:** Initialize Astro v5 project, install dependencies (gsap, swiper), configure astro.config.mjs (site, output, build.assets). Create src/styles/variables.css with all design tokens from DESIGN-SYSTEM.md. Create global.css with CSS reset and base utilities. Set up directory structure per AGENTS.md §3.

### Phase 2: Layout, Header & Footer

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-11, FR-12, NFR-05, NFR-06, NFR-07
**Description:** Build Layout.astro with full <head> (SEO meta, OG tags, canonical, Google Fonts, favicon). Create Header component (sticky glass, nav with Services dropdown, mobile hamburger overlay, "Let's Talk" CTA). Create Footer component (3-column dark, social icons, copyright). Ensure single h1 per page, semantic HTML.

### Phase 3: Brand Assets & Data Files

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-19, FR-20, FR-21, FR-22, FR-23, NFR-15, NFR-16, NFR-18, NFR-19
**Description:** Generate logo SVG, favicon, OG image. Create service icons (Lucide/Tabler). Set up team avatar placeholders. Create all data JSON files (team.json, portfolio.json, services.json, careers.json). Create blog content collection with 4 markdown posts and frontmatter.

### Phase 4: Homepage

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-01, FR-03 (partial), FR-14, FR-16, FR-17, FR-24, FR-25, FR-26, FR-27
**Description:** Build all 9 homepage sections in order: Hero (gradient bg, headline, 2 CTAs, decorative graphic), Professional Approach (3-col), Services Slider (Swiper 7 cards), Unlimited Possibilities (2-col), Core Values + Counters (ScrollTrigger count-up), Why Work With Us (6-grid), Featured Work (3 projects), Testimonials (Swiper loop+autoplay), CTA Split-Screen (careers + contact).

### Phase 5: About Us Page

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-02
**Description:** Build About Us page: intro banner ("We translate Our Clients Dreams Into Reality"), mission/vision/affordable panels, core values 2×2 grid (Passion, Respect, Integrity, Excellence), management section (8 members with cards), team grid (32 members, 5-col desktop, 2-col mobile).

### Phase 6: Services Pages

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-03, FR-04, FR-13, FR-14
**Description:** Build Services Overview page (framework 3-col + 7-card grid with ServiceCard component). Build Service Detail template with sticky sidebar nav, main content area, related projects carousel, contact CTA. Create all 7 service detail pages (web-development, mobile-app, dedicated-team, startups, qa-testing, design, ai-nlp) with breadcrumbs.

### Phase 7: Portfolio Page

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-05, FR-15, NFR-17
**Description:** Build Portfolio page with tab filters (All, Design, Website, Mobile, Startup, E-commerce, Hybrid App). Create PortfolioCard component (thumbnail, title, tags, hover overlay with "View Detail"). Generate 11 portfolio thumbnail images. Implement filter logic with smooth transitions.

### Phase 8: Careers & Contact Pages

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-06, FR-09, FR-18, NFR-08, NFR-09, NFR-20
**Description:** Build Careers page (banner, benefits grid, accordion job listings with Vietnamese content, "Apply Now" → /contact). Build Contact page (ContactForm component with 5 fields, contact info column, static map image of Hue City). Generate static map image. Ensure form accessibility (labels, ARIA).

### Phase 9: Blog Pages

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-07, FR-08, FR-13, NFR-17
**Description:** Build Blog index page (2-col grid with 4 post cards, sidebar with search/categories/recent). Build Blog detail template with breadcrumbs, full-width hero thumbnail, rich content (headings, tables, code blocks, lists), sidebar, back link + related posts. Generate 4 blog thumbnail images.

### Phase 10: 404, Animations & Polish

**Status:** Complete (completed 2026-06-11)
**Requirements:** FR-10, FR-24, FR-28, FR-29, NFR-10, NFR-11
**Description:** Build 404 page (centered, large "404", "Back to Home"). Implement shared GSAP animation system (src/scripts/animations.js, data-animate attrs, ScrollTrigger). Add fade-up/stagger animations to all sections. Ensure mobile animation disabling. Verify keyboard navigation, touch targets, focus states across all pages.

### Phase 11: Performance, SEO & Final QA

**Status:** Complete (completed 2026-06-11)
**Requirements:** NFR-05, NFR-06, NFR-07, NFR-08, NFR-12, NFR-13, NFR-14
**Description:** Run full build verification (npm run build — zero errors). Audit all pages for SEO (title, meta, OG tags). Verify responsive layouts (mobile/tablet/desktop). Run Lighthouse audits targeting Performance ≥90, A11y ≥95, SEO ≥95. Optimize bundle size (JS ≤100KB, page ≤500KB). Fix broken links. Verify all content matches CONTENT.md verbatim.
