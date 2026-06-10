# Tenomad Website Rebuild

## What This Is

A complete greenfield rebuild of the Tenomad software agency website as a modern, high-performance static site. Built with Astro v5, Vanilla CSS (BEM), GSAP + ScrollTrigger animations, and Swiper.js sliders. The site showcases Tenomad's software development services, portfolio of 11 projects, team of 40+ members, career opportunities, and technical blog — all deployed as a purely static site on Vercel for blazing-fast load times and zero backend dependencies.

## Core Value

Prospective clients and job seekers must be immediately impressed by a visually stunning, premium-feeling website that accurately represents Tenomad's technical capabilities and company culture — every page must wow at first glance.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

<!-- Current scope. Building toward these. -->

- [ ] Fully static Astro v5 site with zero client-side JS by default (island architecture)
- [ ] 10 page types: Homepage, About Us, Services Overview, 7 Service Detail pages, Portfolio, 11 Portfolio Detail pages, Careers, Blog listing, Blog detail (4 posts), Contact, 404
- [ ] Responsive design at 3 breakpoints: Mobile (<768px), Tablet (768–1024px), Desktop (>1024px)
- [ ] Sticky glassmorphism header with services dropdown and mobile hamburger menu
- [ ] Hero section with gradient background, animated text, and dual CTAs
- [ ] Swiper.js carousels for services slider, testimonials, and related projects
- [ ] GSAP ScrollTrigger animations: fade-up reveals, counter stats (10+, 638+, 598+), staggered card entrances
- [ ] Portfolio page with category filter tabs (All, Design, Website, Mobile, Startup, E-commerce, Hybrid App)
- [ ] Portfolio detail pages at `/portfolio/[slug]` for each of the 11 projects
- [ ] Careers page with accordion job listings (Vietnamese content preserved)
- [ ] Blog using Astro Content Collections (4 markdown posts with tables and code blocks)
- [ ] Contact form that opens `mailto:contact@tenomad.com` pre-filled with form field data
- [ ] Dark-themed footer with company info, quick links, and social icons
- [ ] SEO: unique titles, meta descriptions, Open Graph tags, canonical URLs per page
- [ ] Accessibility: semantic HTML, ARIA labels, keyboard navigation, linked form labels
- [ ] Design tokens compliance: all colors, spacing, typography from CSS custom properties (no hardcoded values)
- [ ] BEM naming convention for all component CSS
- [ ] Generated assets: SVG logo, favicon, OG image, 11 portfolio thumbnails, 4 blog thumbnails, hero graphic, static map image
- [ ] Placeholder team avatars (circular SVG/CSS, not real photos)
- [ ] Breadcrumb navigation on service detail and blog detail pages

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- E-commerce functionality (shop, cart, checkout) — not part of the agency marketing site
- Dynamic backend / database — purely static site, no server-side logic
- User authentication / accounts — marketing site only
- CMS integration (Decap, Netlify CMS) — V1 uses markdown files directly; CMS deferred to V2
- Dark mode toggle — light mode with selective dark sections (hero, footer, CTA) per design system
- Real-time chat or live support — out of scope for static site
- Multi-language / i18n — English only (except Vietnamese career listings per spec)
- Analytics / tracking scripts — can be added post-launch

## Context

**Source material:** Five comprehensive specification documents define the project:
- `tenomad-blog-prd.md` — Product requirements and user stories
- `UI-WIREFRAME.md` — Detailed wireframe for all pages with animation specs
- `DESIGN-SYSTEM.md` — Complete color palette, typography, spacing, and effect tokens
- `CONTENT.md` — All legacy content preserved verbatim (English site, Vietnamese career listings)
- `ASSETS.md` — Full asset inventory with generation strategy per asset

**AGENTS.md** serves as the single source of truth for all technical implementation rules, overriding any conflicts in the above documents.

**Legacy site:** Existing Tenomad WordPress site being replaced. All content migrated from WordPress REST API extraction. The rebuild preserves identical content but completely reimagines the visual design and technical architecture.

**Team/portfolio data:** Stored in `src/data/*.json` files (team.json, portfolio.json, services.json, careers.json) and imported where needed. Blog posts use Astro Content Collections in `src/content/blog/*.md`.

## Constraints

- **Tech stack**: Astro v5 + Vanilla CSS (BEM) + GSAP + Swiper.js — no Tailwind, no CSS frameworks, no React/Vue integrations
- **No TypeScript**: JavaScript only per AGENTS.md rules
- **Static output**: Pure SSG, no SSR, no Vercel adapter
- **Content fidelity**: All text from CONTENT.md used verbatim — no summarizing, rephrasing, or translating
- **Career listings**: Job descriptions, requirements, and benefits remain in Vietnamese (intentional exception to English-only rule)
- **Design tokens**: Every color, font-size, spacing, shadow must use CSS custom properties from variables.css
- **Performance**: 60fps animations, no layout thrashing, disable heavy parallax on mobile/touch devices
- **Touch targets**: Minimum 48x48px for all interactive elements
- **Quality first**: Flexible timeline — ship only when acceptance criteria are fully satisfied

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Greenfield build (no code migration) | Only documentation exists, no source code to migrate | — Pending |
| Astro v5 static site generator | Zero JS by default, excellent performance, built-in Content Collections | — Pending |
| Vanilla CSS with BEM over Tailwind | Maximum control, design token compliance, per AGENTS.md rules | — Pending |
| GSAP + ScrollTrigger for animations | High-performance, smooth scroll-triggered animations without layout thrashing | — Pending |
| Swiper.js v11 for carousels | Touch/swipe support, lightweight, well-maintained | — Pending |
| mailto: for contact form | No backend dependency, simple and functional for static site | — Pending |
| Portfolio detail pages (`/portfolio/[slug]`) | User requested individual project pages beyond the grid view | — Pending |
| Markdown-only blog (no CMS) | V1 simplicity; CMS integration deferred to V2 | — Pending |
| Placeholder avatars for team | Avoids heavy image assets; clean SVG/CSS circles with initials | — Pending |
| Quality > speed as primary constraint | Flexible timeline allows thorough implementation and testing | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-10 after initialization*
