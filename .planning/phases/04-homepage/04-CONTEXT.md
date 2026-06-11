# Phase 4: Homepage - Context

**Gathered:** 2026-06-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all 9 homepage sections in order:
1. Hero Section (gradient background, headline "You Dream It, We Build It", subtitle, 2 CTAs, programming graphic)
2. Professional Approach (3-column layout)
3. Services Slider (Swiper.js horizontal slider, 7 service cards)
4. Unlimited Possibilities (2-column layout, bullet list, abstract graphic)
5. Core Values + Counters (ScrollTrigger-activated count-up counters)
6. Why Work With Us (6-grid cards)
7. Featured Work (3 project cards with parallax/zoom hover effects)
8. Testimonials (Swiper.js loop + autoplay slider with 3 client quotes)
9. CTA Split-Screen (careers + contact splits with selective dark background)

</domain>

<decisions>
## Implementation Decisions

### Layout & Styling
- Smooth CSS gradients and clean container padding will be used to transition the selective dark backgrounds into the light sections.
- The "Why Work With Us" section will use a 3-column, 2-row grid on desktop, shifting to a 1-column layout on mobile, utilizing soft glassmorphic card styling.
- "Featured Work" cards will scale up slightly on hover and show a translucent indigo overlay (`--accent-indigo` with opacity) with the project title, tags, and a "View Case Study" button.
- The CTA Split-Screen section will use a 50/50 vertical split on desktop with a dark background, shifting to stacked 100% width sections on mobile.

### Interactive Sliders & Swiper.js
- The Services Slider will be a touch/swipe draggable carousel with pagination dots at the bottom, and no side navigation arrows.
- Services Slider breakpoints: 1 slide on Mobile (<768px), 2 slides on Tablet (768px-1024px), 3 slides on Desktop (>1024px).
- Testimonials Slider will have loop and autoplay enabled with a 5-second delay, and will pause on hover.
- Testimonials Slider will use a smooth fade transition to avoid text jittering.

### GSAP Animations & Counter Stats
- GSAP ScrollTrigger will animate heading blocks with a fade-up + stagger effect, and service/feature cards will enter with a sequential stagger.
- ScrollTrigger animations will start at `top 85%` with a smooth ease-out.
- Counter stats will count up from 0 to the target integers over exactly 1.5 seconds, using a custom cubic-bezier ease-out.
- Animations will be programmatically disabled on mobile devices (viewport width < 768px) to optimize performance.

### the agent's Discretion
- Exact styling details of the decorative graphics, layout margins/paddings within variables.css rules, and CSS glassmorphism implementation details are left to the agent's discretion.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/layouts/Layout.astro` — Main page wrapper including SEO metadata and head configurations.
- `src/components/Header.astro` — Navigation header with sticky glass effect.
- `src/components/Footer.astro` — Footer wrapper.

### Established Patterns
- Styling: Vanilla CSS with BEM naming conventions, importing `variables.css` for design tokens.
- Animations: Client-side GSAP + ScrollTrigger initialization in Astro components.
- Sliders: Swiper.js v11 initialization.

### Integration Points
- `src/pages/index.astro` — The main entry page where all homepage components/sections will be rendered.

</code_context>

<specifics>
## Specific Ideas

- Ensure strict compliance with the typography scale, spacing rules, and color palettes defined in `DESIGN-SYSTEM.md`.
- Keep the design high-end, premium, and visually appealing.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>
