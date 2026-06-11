# Phase 7: Portfolio Page - Context

## Objective
Build the Portfolio page for the Tenomad website per `FR-05`, `FR-15`, and `NFR-17` requirements. The page requires rendering a dynamic grid of portfolio items with a tab-based filtering mechanism and animated transitions. 

## Requirements
- **Page Route**: `/portfolio`
- **Tab Filters**: All, Design, Website, Mobile, Startup, E-commerce, Hybrid App.
- **Component**: Create `PortfolioCard.astro` displaying thumbnail, title, tags, and a hover overlay with "View Detail".
- **Data Source**: Use existing `src/data/portfolio.json`.
- **Assets**: Generate the remaining 8 portfolio thumbnails (`portfolio-homing.webp`, `portfolio-drberg.webp`, `portfolio-sqoop.webp`, `portfolio-swolematch.webp`, `portfolio-leedpop.webp`, `portfolio-xeke.webp`, `portfolio-mycalsigns.webp`, `portfolio-vespasafari.webp`) and place them in `public/assets/`.
- **Interactivity**: Filter logic needs smooth transitions. All CSS tokens from `variables.css` should be utilized.

## Constraints
- **Astro v5**: Zero JS by default. Use `<script>` islands purely for filter logic and GSAP animations.
- **GSAP**: Use GSAP + ScrollTrigger for card reveal and filter transitions.
- **Mobile First**: Breakpoints `<768px` (Mobile), `768-1024px` (Tablet), `>1024px` (Desktop). Disable heavy animations on mobile.
