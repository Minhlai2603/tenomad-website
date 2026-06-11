# Synthesized Decisions

## Architecture

- **[LOCKED]** Static site generator: Astro v5, SSG-only output, zero JS by default
  - Source: PRD §Technical Architecture, AGENTS.md §1
- **[LOCKED]** Deployment target: Vercel, static output, no adapter
  - Source: PRD §Deployment, AGENTS.md §1
- **[LOCKED]** Dependencies limited to: astro ^5.x, gsap ^3.12.x, swiper ^11.x
  - Source: AGENTS.md §4
- **[LOCKED]** No Astro integrations (@astrojs/react, @astrojs/tailwind), no TypeScript, no Vercel adapter
  - Source: AGENTS.md §1 Forbidden

## Styling

- **[LOCKED]** Vanilla CSS with CSS Custom Properties (design tokens) + BEM naming
  - Source: PRD §Styling, AGENTS.md §1
- **[LOCKED]** No Tailwind, no CSS-in-JS
  - Source: AGENTS.md §1 Forbidden
- **[LOCKED]** All colors/sizes/spacing via CSS variables from `src/styles/variables.css` — no hardcoded values
  - Source: AGENTS.md §2.1

## Animation & Interactivity

- **[LOCKED]** GSAP + ScrollTrigger for scroll animations
  - Source: PRD §Animation, AGENTS.md §1
- **[LOCKED]** Swiper.js v11 for sliders/carousels, touch/swipe enabled
  - Source: PRD §Animation, AGENTS.md §1
- **[LOCKED]** Disable heavy parallax on mobile (< 768px)
  - Source: AGENTS.md §9

## Content & Language

- **[LOCKED]** English language throughout, except career job content stays Vietnamese
  - Source: AGENTS.md §1
- **[LOCKED]** Use exact texts from CONTENT.md — no summarizing or rephrasing
  - Source: AGENTS.md §2.2

## UI Behavior

- **[LOCKED]** Contact form is UI-only (no backend submission)
  - Source: PRD §Implementation, AGENTS.md §2.3
- **[LOCKED]** Career "Apply Now" → /contact
  - Source: PRD §Implementation, AGENTS.md §2.3
- **[LOCKED]** Header CTA "Let's Talk" → /contact
  - Source: PRD §Implementation, AGENTS.md §2.3
- **[LOCKED]** Google Maps: static map image (no API key)
  - Source: PRD §Implementation

## Design

- **[LOCKED]** Light mode overall, dark sections only for Hero, Footer, CTA split-screen
  - Source: DESIGN-SYSTEM.md §Mode Strategy
- **[LOCKED]** No dark mode toggle
  - Source: DESIGN-SYSTEM.md §Mode Strategy
- **[LOCKED]** Font: Inter (Google Fonts), weights 400-800
  - Source: DESIGN-SYSTEM.md §Typography
- **[LOCKED]** Container max-width: 1200px
  - Source: DESIGN-SYSTEM.md §Spacing
- **[LOCKED]** Team photos: placeholder avatars (no real photos)
  - Source: ASSETS.md
- **[LOCKED]** Logo: double-N network icon, orange-yellow gradient, SVG format (agent-drawn)
  - Source: ASSETS.md

## Responsive

- **[LOCKED]** Mobile-first approach
  - Source: AGENTS.md §2.5
- **[LOCKED]** Breakpoints: <768px (Mobile), 768-1024px (Tablet), >1024px (Desktop)
  - Source: PRD §Responsive, AGENTS.md §2.5
- **[LOCKED]** Min touch target: 48×48px
  - Source: PRD §Mobile Navigation, AGENTS.md §2.5
