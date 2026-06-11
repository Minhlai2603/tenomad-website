# Classification: tenomad-blog-prd.md

- **Type:** PRD
- **Precedence:** 1 (highest among ingested docs)
- **Source:** `tenomad-blog-prd.md` (root)
- **Detection:** User-supplied, filename convention
- **Size:** 149 lines, 9660 bytes

## Summary

Product Requirements Document for the Tenomad website rebuild. Defines the problem statement (visual refresh + technical update), solution (static site with modern UX/UI), 8 user stories, implementation decisions (architecture, styling, interactivity, content structure for all pages), technical architecture (Astro v5, Vanilla CSS/BEM, GSAP+ScrollTrigger, Swiper.js v11, Vercel), sitemap with 15+ routes, responsive strategy (3 breakpoints, mobile nav, touch interactions), testing decisions, and out-of-scope items (e-commerce, dynamic backend).

## Extracted Artifacts

- **Decisions:** 12 (architecture, styling, animation, content structure, language, assets, contact form, CTA routing, maps, deployment, responsive breakpoints, out-of-scope)
- **Requirements:** 8 user stories + per-page content specs + responsive specs
- **Constraints:** Static-only (no backend), UI-only contact form, English language, no e-commerce
- **Dependencies:** Astro v5, GSAP, Swiper.js v11, Google Fonts (Inter)
