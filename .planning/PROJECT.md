# PROJECT: Tenomad Website

## Overview

Rebuild the existing Tenomad WordPress website as a modern, high-performance static site using Astro v5. The redesign features premium UX/UI, GSAP scroll animations, Swiper.js sliders, and a fully responsive layout to showcase Tenomad's software development services, portfolio, and company culture.

## Success Metric

All 15 pages built, Lighthouse ≥90/95/95, deployed to Vercel.

## Goals

1. Create a visually stunning static agency website that wows visitors at first glance
2. Showcase 11 portfolio projects with interactive filtering and hover effects
3. Present 7 service offerings with dedicated detail pages and clear CTAs
4. Attract talent via careers page with Vietnamese job listings
5. Establish thought leadership through 4 blog articles
6. Achieve top-tier performance (FCP ≤1.5s, LCP ≤2.5s, CLS ≤0.1)

## Non-Goals

- E-commerce functionality (shop, cart, checkout)
- Dynamic backend, server-side rendering, or serverless functions
- User authentication or real-time database
- Dark mode toggle (only contextual dark sections)
- Backend form submission (contact form is UI-only)

## Target Runtime

- Framework: Astro v5 (SSG, zero JS by default)
- Styling: Vanilla CSS + Custom Properties + BEM
- Animations: GSAP + ScrollTrigger
- Sliders: Swiper.js v11
- Deploy: Vercel (static output)
- Domain: tenomad.com

<decisions>

### D-01 [LOCKED] Static architecture — Astro v5 SSG only
Source: PRD + AGENTS.md

### D-02 [LOCKED] Vanilla CSS + Custom Properties + BEM — no Tailwind, no CSS-in-JS
Source: PRD + AGENTS.md

### D-03 [LOCKED] GSAP + ScrollTrigger for animations — disable heavy parallax on mobile
Source: PRD + AGENTS.md

### D-04 [LOCKED] Swiper.js v11 for sliders — touch/swipe enabled
Source: PRD + AGENTS.md

### D-05 [LOCKED] Vercel deployment — static output, no adapter
Source: PRD + AGENTS.md

### D-06 [LOCKED] Dependencies restricted to astro, gsap, swiper only
Source: AGENTS.md

### D-07 [LOCKED] No TypeScript, no Astro integrations
Source: AGENTS.md

### D-08 [LOCKED] Light mode with contextual dark sections (Hero, Footer, CTA)
Source: DESIGN-SYSTEM.md

### D-09 [LOCKED] Design tokens in variables.css — never hardcode colors/sizes/spacing
Source: DESIGN-SYSTEM.md + AGENTS.md

### D-10 [LOCKED] Inter font family (Google Fonts, 400-800)
Source: DESIGN-SYSTEM.md

### D-11 [LOCKED] Content from CONTENT.md used verbatim — no summarizing
Source: AGENTS.md

### D-12 [LOCKED] Career job content in Vietnamese — structural labels English
Source: AGENTS.md + CONTENT.md

### D-13 [LOCKED] Contact form UI-only — no backend
Source: PRD + AGENTS.md

### D-14 [LOCKED] Agent-generated assets — no stock photos
Source: ASSETS.md + AGENTS.md

### D-15 [LOCKED] Team avatars as placeholder SVG/letter circles
Source: ASSETS.md

</decisions>

## Milestone

**v1.0** — Full website build and Vercel deployment

## References

- `tenomad-blog-prd.md` — Product Requirements Document
- `DESIGN-SYSTEM.md` — Design token specification
- `UI-WIREFRAME.md` — Page layouts and wireframes
- `ASSETS.md` — Asset inventory and generation strategy
- `CONTENT.md` — Verbatim content for all pages
- `AGENTS.md` — Single source of truth (overrides all above)
