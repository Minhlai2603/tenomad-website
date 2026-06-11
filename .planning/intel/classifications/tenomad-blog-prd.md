# Classification: tenomad-blog-prd.md

- **Type:** PRD
- **Precedence:** 2 (after SPEC)
- **Source:** `tenomad-blog-prd.md`

## Extracted Decisions

1. **LOCKED** Architecture: Purely static site (SSG). No dynamic backend, no user auth.
2. **LOCKED** Framework: Astro v5 with Vite (built-in). npm package manager.
3. **LOCKED** Styling: Vanilla CSS with CSS Custom Properties (design tokens), BEM naming.
4. **LOCKED** Animations: GSAP + ScrollTrigger for scroll animations, Swiper.js v11 for sliders.
5. **LOCKED** Deployment: Vercel, domain tenomad.com.
6. **LOCKED** Language: English.
7. **LOCKED** Contact form: UI-only, no backend submission.
8. **LOCKED** "Apply Now" buttons → /contact. "Let's Talk" header CTA → /contact.
9. **LOCKED** Google Maps: Static map image embed (no API key).
10. **LOCKED** No e-commerce (shop/cart/checkout out of scope).

## Extracted Requirements

- R-PRD-01: Homepage with 9 sections (Hero, Professional Approach, Services Slider, Unlimited Possibilities, Core Values + Counters, Why Work With Us, Featured Work, Testimonials, CTA Split-Screen)
- R-PRD-02: About Us page (core values, management grid, team grid)
- R-PRD-03: Services overview + 7 individual service detail pages (Web Dev, Mobile, Dedicated Team, Startups, QA, Design, AI & NLP)
- R-PRD-04: Portfolio page with 11 project cards, interactive gallery with category filters
- R-PRD-05: Careers page with 3 job listings (Web Developer, Android Developer, Designer)
- R-PRD-06: Blog page with 4 articles + blog detail template
- R-PRD-07: Contact page with form + contact info + static map
- R-PRD-08: Responsive design (Mobile <768px, Tablet 768-1024px, Desktop >1024px)
- R-PRD-09: Mobile hamburger menu with full-screen overlay, 48px min touch targets
- R-PRD-10: SEO optimization and performance targets (Lighthouse ≥90)
- R-PRD-11: Social media links (Facebook, LinkedIn, Twitter/X — placeholder URLs)

## Extracted Constraints

- No dynamic backend or server-side logic
- No e-commerce functionality
- No real-time database or user authentication
- Static-only hosting (no serverless functions)
- Content migrated from legacy WordPress verbatim
