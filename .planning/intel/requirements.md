# Synthesized Requirements

## Pages (15+ routes)

- R-PAGE-01: Homepage with 9 sections (Hero, Professional Approach, Services Slider, Unlimited Possibilities, Core Values + Counters, Why Work With Us, Featured Work, Testimonials, CTA Split-Screen)
- R-PAGE-02: About Us (intro banner, mission/vision/affordable, core values 2×2, management 8 cards, team grid 32 members 5-col)
- R-PAGE-03: Services Overview (framework 3-col + 7-card grid)
- R-PAGE-04: Service Detail × 7 (web-development, mobile-app, dedicated-team, startups, qa-testing, design, ai-nlp) — sticky sidebar + content + related projects + contact CTA
- R-PAGE-05: Portfolio (tab filters: All/Design/Website/Mobile/Startup/E-commerce/Hybrid App, 11 project cards, hover overlay)
- R-PAGE-06: Careers (banner, benefits grid, accordion 3 positions, "Apply Now" → /contact)
- R-PAGE-07: Blog Index (2-col grid 4 posts + sidebar with search/categories/recent)
- R-PAGE-08: Blog Detail × 4 (clean typography, tables, code blocks, sidebar) — uses Astro Content Collections
- R-PAGE-09: Contact (form: Name/Phone/Email/Subject/Message + contact info + static map Hue City)
- R-PAGE-10: 404 (centered: large "404", title, description, "Back to Home" → /)

## Components

- R-COMP-01: Header — sticky + glass blur, logo left, nav center (hover underline), "Let's Talk" CTA right, Services dropdown (hover desktop/accordion mobile), mobile hamburger → full-screen overlay
- R-COMP-02: Footer — dark bg, 3 columns (logo+slogan, quick links, contact info), bottom copyright + social icons (FB, LinkedIn, X)
- R-COMP-03: Hero — gradient bg, headline, subtitle, CTAs, decorative graphic
- R-COMP-04: ServiceCard — icon + title + description, hover scale + border glow
- R-COMP-05: PortfolioCard — thumbnail + title + tags, hover overlay with "View Detail"
- R-COMP-06: TestimonialSlider — Swiper with loop + autoplay, 3 client quotes
- R-COMP-07: CounterStats — ScrollTrigger count-up (0→target, 1.5s): 10+ years, 638+ projects, 598+ clients
- R-COMP-08: ContactForm — 5 fields + submit button, UI-only
- R-COMP-09: Breadcrumbs — required on service detail + blog detail, nav aria-label="Breadcrumb" with ol

## Design System

- R-DS-01: Implement all design tokens in `src/styles/variables.css` per DESIGN-SYSTEM.md
- R-DS-02: CSS reset + base styles in `global.css` (box-sizing, margin/padding reset, body styles, heading resets, .container, .section, .visually-hidden)
- R-DS-03: Component CSS files in `src/styles/components/*.css` using BEM naming
- R-DS-04: Responsive typography overrides at <767px

## Data

- R-DATA-01: `src/data/team.json` — 8 management + 32 team members (name, role, type, description)
- R-DATA-02: `src/data/portfolio.json` — 11 projects (id, title, tags[], description, thumbnail)
- R-DATA-03: `src/data/services.json` — 7 services (id, title, slug, shortDescription, icon)
- R-DATA-04: `src/data/careers.json` — 3 positions (title, location, quantity, salary, description, requirements, benefits)
- R-DATA-05: `src/content/blog/*.md` — 4 posts with frontmatter (title, date, slug, excerpt, thumbnail, category)

## Assets

- R-ASSET-01: Logo SVG (double-N, orange-yellow gradient) — agent-generated
- R-ASSET-02: Favicon ICO — derived from logo
- R-ASSET-03: OG image PNG 1200×630 — agent-generated
- R-ASSET-04: 11 portfolio thumbnails WebP — agent-generated
- R-ASSET-05: 4 blog thumbnails WebP — agent-generated
- R-ASSET-06: Hero graphic SVG/PNG — agent-generated
- R-ASSET-07: Static map image PNG — agent-generated
- R-ASSET-08: 7 service icons SVG — from Lucide/Tabler
- R-ASSET-09: Team avatar placeholders (styled letter circles or SVG avatars)

## Animations

- R-ANIM-01: GSAP ScrollTrigger fade-up/stagger for sections (start: 'top 85%')
- R-ANIM-02: Swiper services slider (1/2/3 slides at mobile/tablet/desktop, spaceBetween 24, grabCursor)
- R-ANIM-03: Swiper testimonials (loop + autoplay, same responsive breakpoints)
- R-ANIM-04: Counter animation (ScrollTrigger-activated, 0→target, 1.5s)
- R-ANIM-05: Shared animation utils in `src/scripts/animations.js` using data-animate attrs
- R-ANIM-06: Disable complex animations on mobile (innerWidth < 768)

## SEO & Accessibility

- R-SEO-01: Single <h1> per page, semantic HTML (header, main, section, article, footer, nav)
- R-SEO-02: Every page: unique pageTitle + pageDescription → Layout
- R-SEO-03: <head>: charset, viewport, "{pageTitle} | Tenomad" title, meta description, canonical (https://tenomad.com), OG tags, Twitter card, favicon, Google Fonts
- R-A11Y-01: All interactive elements: unique IDs + ARIA labels
- R-A11Y-02: Form inputs linked with <label>
- R-A11Y-03: Keyboard navigation support
- R-A11Y-04: Min touch target 48×48px

## Performance

- R-PERF-01: Lighthouse Performance ≥90, A11y ≥95, SEO ≥95
- R-PERF-02: FCP ≤1.5s, LCP ≤2.5s, CLS ≤0.1
- R-PERF-03: Page weight ≤500KB (excl. images), JS bundle ≤100KB
