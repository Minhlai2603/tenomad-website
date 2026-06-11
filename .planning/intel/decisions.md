# Synthesized Decisions

> Source: 5 ingested docs (1 PRD, 1 SPEC, 3 DOC). Precedence: SPEC > PRD > DOC.
> AGENTS.md (user rules) is the ultimate authority and overrides all below.

## Architecture & Stack

- **D-01 [LOCKED]** Static site generator: Astro v5, zero JS by default. (PRD + AGENTS.md)
- **D-02 [LOCKED]** Styling: Vanilla CSS + CSS Custom Properties + BEM. No Tailwind, no CSS-in-JS. (PRD + AGENTS.md)
- **D-03 [LOCKED]** Animations: GSAP + ScrollTrigger. Disable heavy parallax on mobile. (PRD + AGENTS.md)
- **D-04 [LOCKED]** Sliders: Swiper.js v11, touch/swipe enabled. (PRD + AGENTS.md)
- **D-05 [LOCKED]** Deploy: Vercel, static output, no adapter. Site: tenomad.com. (PRD + AGENTS.md)
- **D-06 [LOCKED]** Dependencies: Only astro ^5.x, gsap ^3.12.x, swiper ^11.x. No Astro integrations. (AGENTS.md)
- **D-07 [LOCKED]** No TypeScript. (AGENTS.md)

## Design & Visual

- **D-08 [LOCKED]** Light mode overall. Dark sections: Hero, Footer, CTA split-screen only. No dark mode toggle. (SPEC)
- **D-09 [LOCKED]** Color palette: See DESIGN-SYSTEM.md for exact hex values. All colors via CSS vars. (SPEC + AGENTS.md)
- **D-10 [LOCKED]** Typography: Inter (Google Fonts), 400-800 weight, 16px base, 1.25 scale ratio. (SPEC)
- **D-11 [LOCKED]** Spacing: 4px base unit. Container max 1200px. Section padding 80px/120px. (SPEC)
- **D-12 [LOCKED]** Glassmorphism: Header uses glass-bg-light + glass-blur. Dark section cards use glass-bg + glass-border. (SPEC)
- **D-13 [LOCKED]** Neon accents (cyan, blue, purple) for glow effects in dark sections only. (SPEC)

## Content & Language

- **D-14 [LOCKED]** Language: English. Exception: Career job content stays Vietnamese. (AGENTS.md + CONTENT.md)
- **D-15 [LOCKED]** All page text from CONTENT.md used verbatim. No summarizing/rephrasing. (AGENTS.md)
- **D-16 [LOCKED]** Contact form: UI-only, no backend. (PRD + AGENTS.md)
- **D-17 [LOCKED]** "Apply Now" → /contact. "Let's Talk" CTA → /contact. (PRD + AGENTS.md)
- **D-18 [LOCKED]** Static map image for Hue City location. No Google Maps API. (PRD)

## Assets

- **D-19 [LOCKED]** Logo: Agent-generated SVG (double-N, orange-yellow gradient). (ASSETS.md + AGENTS.md)
- **D-20 [LOCKED]** Team avatars: Placeholder SVG or styled letter circles. (ASSETS.md + AGENTS.md)
- **D-21 [LOCKED]** Portfolio/blog thumbnails: Agent-generated via generate_image. (ASSETS.md)
- **D-22 [LOCKED]** Service icons: SVG from Lucide/Tabler library. (ASSETS.md)
