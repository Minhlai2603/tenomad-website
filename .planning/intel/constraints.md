# Synthesized Constraints

> Hard limits that must never be violated during implementation.

## Forbidden

- No Astro integrations (@astrojs/react, @astrojs/tailwind, etc.)
- No TypeScript
- No Vercel adapter
- No Tailwind CSS or CSS-in-JS
- No backend logic, server-side rendering, or serverless functions
- No e-commerce (shop, cart, checkout, accounts)
- No real-time database or user authentication
- No dark mode toggle (only contextual dark sections)
- No hardcoded colors/sizes/spacing — always CSS custom properties
- No content summarizing/rephrasing — use exact CONTENT.md text
- No translating Vietnamese career content to English

## File System

- Components: reusable .astro files in src/components/
- Pages: compose layouts + components only (no raw HTML >20 lines in pages)
- Blog: Astro Content Collections in src/content/blog/
- Data: JSON files in src/data/
- CSS: BEM methodology, imported in component files
- Styles: variables.css + global.css + components/*.css in src/styles/
- Static assets: public/assets/
- Processed images: src/assets/

## Dependencies (exhaustive)

- astro ^5.x
- gsap ^3.12.x
- swiper ^11.x
- No other npm dependencies allowed

## Performance Budget

- Lighthouse Performance ≥ 90
- Lighthouse Accessibility ≥ 95
- Lighthouse SEO ≥ 95
- First Contentful Paint ≤ 1.5s
- Largest Contentful Paint ≤ 2.5s
- Cumulative Layout Shift ≤ 0.1
- Page weight ≤ 500KB (excluding images)
- JS bundle ≤ 100KB
