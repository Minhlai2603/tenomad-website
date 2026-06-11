# Synthesized Requirements

> Source: 5 ingested docs. Cross-referenced with AGENTS.md guardrules.

## Pages & Routing (15 pages total)

- **REQ-01** Homepage with 9 sections: Hero → Professional Approach → Services Slider → Unlimited Possibilities → Core Values + Counters → Why Work With Us → Featured Work → Testimonials → CTA Split-Screen
- **REQ-02** About Us page: Intro banner, Mission/Vision/Affordable panels, Core Values 2×2, Management (8), Team grid (32, 5-col desktop)
- **REQ-03** Services overview page: Framework section (3-col) + 7-card grid
- **REQ-04** 7 service detail pages: Breadcrumb, sticky sidebar nav, content, related projects, contact CTA
- **REQ-05** Portfolio page: Tab filters (All, Design, Website, Mobile, Startup, E-commerce, Hybrid App), 11 project cards with hover overlay
- **REQ-06** Careers page: Banner, benefits grid, accordion job listings (3 positions), "Apply Now" → /contact
- **REQ-07** Blog index: 2-col grid (4 posts) + sidebar (search, categories, recent)
- **REQ-08** Blog detail template: Breadcrumb, clean typography, tables, code blocks, sidebar
- **REQ-09** Contact page: Form (Name, Phone, Email, Subject, Message) + contact info + static map (Hue City)
- **REQ-10** 404 page: Centered, large "404", "Page Not Found", description, "Back to Home" → /

## Data & Content

- **REQ-11** Blog: Astro Content Collections with 4 markdown posts (frontmatter: title, date, slug, excerpt, thumbnail, category)
- **REQ-12** Team data: JSON with 8 management + 32 team members (name, role, type, description)
- **REQ-13** Portfolio data: JSON with 11 projects (id, title, tags[], description, thumbnail)
- **REQ-14** Services data: JSON with 7 services (id, title, slug, shortDescription, icon)
- **REQ-15** Careers data: JSON with 3 positions (title, location, quantity, salary, description, requirements, benefits)
- **REQ-16** Content: Exact text from CONTENT.md. Career content in Vietnamese.

## Components

- **REQ-17** Header: Sticky + glass blur, logo left, nav center (hover underline), "Let's Talk" CTA right. Services dropdown (hover desktop, accordion mobile). Mobile hamburger → full-screen overlay, 48px touch targets.
- **REQ-18** Footer: Dark bg (--bg-footer), 3 columns (Logo+slogan, Quick links, Contact info), bottom copyright + social icons (FB, LinkedIn, X).
- **REQ-19** Breadcrumbs: Required on service detail + blog detail. `<nav aria-label="Breadcrumb">` with `<ol>`.
- **REQ-20** ServiceCard, PortfolioCard, TestimonialSlider, CounterStats, ContactForm as reusable .astro components.

## Responsive & Performance

- **REQ-21** Mobile-first breakpoints: <768px, 768-1024px, >1024px
- **REQ-22** Mobile adaptations: Hero stacked, service slider 1 card, portfolio 1-col, team 2-col, stats 2×2
- **REQ-23** Performance: Lighthouse ≥90 Perf, ≥95 A11y, ≥95 SEO. FCP ≤1.5s, LCP ≤2.5s, CLS ≤0.1. Page weight ≤500KB excl. images, JS ≤100KB.

## SEO & Accessibility

- **REQ-24** Every page: unique pageTitle + pageDescription passed to Layout
- **REQ-25** `<head>`: charset, viewport, `{pageTitle} | Tenomad` title, meta desc, canonical (tenomad.com), OG tags, Twitter card, favicon, Google Fonts
- **REQ-26** Single `<h1>` per page. Semantic HTML (header, main, section, article, footer, nav).
- **REQ-27** All interactive elements: unique IDs + ARIA labels. Form inputs with linked `<label>`.

## Assets

- **REQ-28** Generate: logo.svg, favicon.ico, og-image.png, hero-graphic.svg
- **REQ-29** Generate: 11 portfolio thumbnails (WebP)
- **REQ-30** Generate: 4 blog thumbnails (WebP)
- **REQ-31** Generate: hue-map.webp (static map)
- **REQ-32** Team: 8 management placeholders + 32 team member SVG avatars/letter circles

## Animations

- **REQ-33** GSAP ScrollTrigger: data-animate attrs, gsap.fromTo, start 'top 85%', stagger card entries
- **REQ-34** Counter animation: ScrollTrigger-activated count-up (0→target, 1.5s duration)
- **REQ-35** Swiper config: slidesPerView 1, spaceBetween 24, grabCursor true. Breakpoints: 768→2, 1024→3. Testimonials: loop + autoplay.
- **REQ-36** Disable complex animations on mobile (innerWidth < 768)
- **REQ-37** Shared animation utils in src/scripts/animations.js
