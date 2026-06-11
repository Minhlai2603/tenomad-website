# REQUIREMENTS

## Functional Requirements

### Pages & Routes

- **FR-01:** Homepage with 9 ordered sections: Hero → Professional Approach → Services Slider → Unlimited Possibilities → Core Values + Counters → Why Work With Us → Featured Work → Testimonials → CTA Split-Screen
- **FR-02:** About Us page with intro banner, mission/vision/affordable panels, core values 2×2 grid, management section (8 members), team grid (32 members, 5-col desktop)
- **FR-03:** Services Overview page with framework section (3-col: Proactive Analysis, Lean Development, Continuous Delivery) and 7-card service grid
- **FR-04:** 7 Service Detail pages (web-development, mobile-app, dedicated-team, startups, qa-testing, design, ai-nlp) with sticky sidebar nav, main content, related projects, contact CTA
- **FR-05:** Portfolio page with tab filters (All, Design, Website, Mobile, Startup, E-commerce, Hybrid App) and 11 project cards with hover overlay
- **FR-06:** Careers page with banner, benefits grid, accordion job listings (3 positions), "Apply Now" → /contact
- **FR-07:** Blog index with 2-col grid (4 posts) + sidebar (search, categories, recent posts)
- **FR-08:** Blog detail template with breadcrumbs, full-width hero thumbnail, main content (typography, tables, code blocks), sidebar, back link + related posts
- **FR-09:** Contact page with form (Name, Phone, Email, Subject, Message), contact info, static map (Hue City)
- **FR-10:** 404 page with centered layout: large "404", "Page Not Found", description, "Back to Home" → /

### Components

- **FR-11:** Header — sticky + glass blur, logo left, nav center (hover underline), "Let's Talk" CTA right → /contact, Services dropdown (hover desktop / accordion mobile), mobile hamburger → full-screen overlay
- **FR-12:** Footer — dark bg (--bg-footer), 3 columns (logo+slogan, quick links, contact info), bottom bar (copyright + social icons: FB, LinkedIn, X)
- **FR-13:** Breadcrumbs — required on service detail + blog detail pages, nav aria-label="Breadcrumb" with ol
- **FR-14:** ServiceCard — icon + title + short description, hover: scale + border glow
- **FR-15:** PortfolioCard — thumbnail + title + tags, hover: overlay + "View Detail"
- **FR-16:** TestimonialSlider — Swiper with loop + autoplay, 3 client quotes
- **FR-17:** CounterStats — ScrollTrigger-activated count-up (0→target, 1.5s): 10+ years, 638+ projects, 598+ clients
- **FR-18:** ContactForm — 5 fields (Name, Phone, Email, Subject, Message) + submit, UI-only

### Data & Content

- **FR-19:** team.json — 8 management (name, role, type:"management", description) + 32 team (name, role, type:"team")
- **FR-20:** portfolio.json — 11 projects (id, title, tags[], description, thumbnail)
- **FR-21:** services.json — 7 services (id, title, slug, shortDescription, icon)
- **FR-22:** careers.json — 3 positions (title, location, quantity, salary, description, requirements, benefits) — Vietnamese content
- **FR-23:** Blog content collection — 4 markdown posts with frontmatter (title, date, slug, excerpt, thumbnail, category)

### Animations & Interactivity

- **FR-24:** GSAP ScrollTrigger fade-up/stagger for content sections (start: 'top 85%')
- **FR-25:** Swiper services slider — slidesPerView: 1/2/3 (mobile/tablet/desktop), spaceBetween: 24, grabCursor
- **FR-26:** Swiper testimonials — loop + autoplay, same responsive breakpoints
- **FR-27:** Counter animation — ScrollTrigger-activated, 0→target over 1.5s
- **FR-28:** Shared animation utilities in src/scripts/animations.js using data-animate attributes
- **FR-29:** Disable complex animations on mobile (innerWidth < 768)

## Non-Functional Requirements

### Design System

- **NFR-01:** All design tokens implemented in src/styles/variables.css per DESIGN-SYSTEM.md
- **NFR-02:** CSS reset + base styles in global.css (box-sizing, margin/padding, body, headings, .container, .section, .visually-hidden)
- **NFR-03:** Component CSS in src/styles/components/*.css using BEM naming
- **NFR-04:** Responsive typography overrides at <767px

### SEO

- **NFR-05:** Single h1 per page, semantic HTML (header, main, section, article, footer, nav)
- **NFR-06:** Every page: unique pageTitle + pageDescription passed to Layout
- **NFR-07:** head: charset, viewport, "{pageTitle} | Tenomad" title, meta description, canonical (https://tenomad.com), OG tags (title, desc, image, url, type), Twitter card, favicon, Google Fonts (Inter 400-800)

### Accessibility

- **NFR-08:** All interactive elements: unique IDs + ARIA labels
- **NFR-09:** Form inputs linked with label elements
- **NFR-10:** Keyboard navigation support
- **NFR-11:** Min touch target 48×48px

### Performance

- **NFR-12:** Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- **NFR-13:** FCP ≤ 1.5s, LCP ≤ 2.5s, CLS ≤ 0.1
- **NFR-14:** Page weight ≤ 500KB (excl. images), JS bundle ≤ 100KB

### Assets

- **NFR-15:** Logo SVG (double-N, orange-yellow gradient) — agent-generated
- **NFR-16:** Favicon, OG image (1200×630), hero graphic — agent-generated
- **NFR-17:** 11 portfolio thumbnails + 4 blog thumbnails — agent-generated via generate_image
- **NFR-18:** 7 service icons from Lucide/Tabler SVG libraries
- **NFR-19:** Team avatars as styled letter circles or placeholder SVGs
- **NFR-20:** Static map image of 26 Ly Thuong Kiet, Hue City — agent-generated
