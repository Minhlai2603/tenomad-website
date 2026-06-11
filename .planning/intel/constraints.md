# Synthesized Constraints

## Hard Constraints (Non-Negotiable)

1. **Static-only architecture** — no server-side rendering, no API routes, no dynamic backend
2. **Zero runtime JS by default** — only `<script>` islands for sliders/animations
3. **Dependencies locked** — only astro, gsap, swiper allowed in package.json
4. **No Astro integrations** — @astrojs/react, @astrojs/tailwind, etc. are forbidden
5. **No TypeScript** — JavaScript only
6. **No Vercel adapter** — static output mode only
7. **No Tailwind / CSS-in-JS** — vanilla CSS with BEM only
8. **Content verbatim** — all text from CONTENT.md used exactly as-is, no rephrasing
9. **Vietnamese preserved** — career job descriptions/requirements/benefits stay in Vietnamese
10. **UI-only contact form** — no backend submission logic
11. **No real team photos** — placeholder avatars only
12. **No Google Maps API** — static map image only

## Soft Constraints (Best Effort)

1. **Performance targets** — Lighthouse 90+/95+/95+ (perf/a11y/seo)
2. **Page weight** — ≤500KB excluding images
3. **JS bundle** — ≤100KB total
4. **FCP** — ≤1.5 seconds
5. **LCP** — ≤2.5 seconds
6. **CLS** — ≤0.1

## Directory Constraints

1. Components in `src/components/*.astro`
2. Pages in `src/pages/` following Astro file-based routing
3. Layouts in `src/layouts/`
4. Data in `src/data/*.json`
5. Blog content in `src/content/blog/*.md`
6. Styles in `src/styles/` (variables.css, global.css, components/*.css)
7. Static assets in `public/assets/`
8. Processed images in `src/assets/`
