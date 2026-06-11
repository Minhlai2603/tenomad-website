# PROJECT: Tenomad Website

## Overview
Rebuild the Tenomad agency website as a modern, high-performance static site using Astro v5. The project migrates content from an existing WordPress site to a statically-generated marketing site with premium UX/UI, smooth GSAP animations, interactive Swiper.js sliders, and a fully responsive mobile-first layout.

## Goals
1. Create a visually stunning web presence that "wows at first glance" to impress prospective clients
2. Showcase 7 service offerings, 11 portfolio projects, and 40+ team members
3. Achieve top-tier performance (Lighthouse 90+) with static-only architecture
4. Establish thought leadership through 4 blog articles with SEO-optimized content
5. Attract talent via modern careers section (3 open positions)

## Non-Goals
1. E-commerce functionality (shop, cart, checkout)
2. Dynamic backend systems (authentication, real-time database)
3. CMS integration — content is baked into data files and markdown
4. Dark mode toggle — only selective dark sections (hero, footer, CTA)

## Target
- **Domain:** tenomad.com
- **Hosting:** Vercel (static)
- **Audience:** English-speaking prospective clients (US-based), Vietnamese job seekers

## Success Metrics
- Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- FCP ≤ 1.5s, LCP ≤ 2.5s, CLS ≤ 0.1
- Page weight ≤ 500KB (excl. images), JS bundle ≤ 100KB
- Zero build errors, zero broken links
- All content from CONTENT.md accurately rendered

<decisions>

### Architecture
- **[LOCKED]** Framework: Astro v5, SSG-only, zero JS by default
- **[LOCKED]** Styling: Vanilla CSS + BEM, CSS Custom Properties
- **[LOCKED]** Animation: GSAP + ScrollTrigger
- **[LOCKED]** Sliders: Swiper.js v11
- **[LOCKED]** Deploy: Vercel, static output, no adapter
- **[LOCKED]** Dependencies: only astro, gsap, swiper
- **[LOCKED]** No TypeScript, no Tailwind, no Astro integrations

### Content
- **[LOCKED]** Language: English (careers job content stays Vietnamese)
- **[LOCKED]** Content from CONTENT.md used verbatim — no rephrasing
- **[LOCKED]** Contact form: UI-only, no backend
- **[LOCKED]** "Apply Now" → /contact, "Let's Talk" → /contact
- **[LOCKED]** Google Maps: static image, no API key

### Design
- **[LOCKED]** Light mode overall, dark sections: Hero, Footer, CTA split-screen
- **[LOCKED]** Font: Inter (Google Fonts), weights 400-800
- **[LOCKED]** Container max-width: 1200px
- **[LOCKED]** Team photos: placeholder avatars
- **[LOCKED]** Logo: double-N gradient SVG (agent-generated)
- **[LOCKED]** Mobile-first, breakpoints: <768 / 768-1024 / >1024
- **[LOCKED]** Min touch target: 48×48px

</decisions>
