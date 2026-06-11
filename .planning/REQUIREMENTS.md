# REQUIREMENTS: Tenomad Website v1.0

## Pages & Routing

- **REQ-01** Homepage with 9 sections: Hero → Professional Approach → Services Slider → Unlimited Possibilities → Core Values + Counters → Why Work With Us → Featured Work → Testimonials → CTA Split-Screen
- **REQ-02** About Us page: Intro banner, Mission/Vision/Affordable panels, Core Values 2×2, Management (8), Team grid (32, 5-col desktop)
- **REQ-03** Services overview page: Framework section (3-col) + 7-card grid with "Learn More" links
- **REQ-04** 7 service detail pages with breadcrumb, sticky sidebar nav, content, related projects, contact CTA
- **REQ-05** Portfolio page: Tab filters (All, Design, Website, Mobile, Startup, E-commerce, Hybrid App), 11 project cards with hover overlay
- **REQ-06** Careers page: Banner, benefits grid, accordion job listings (3 positions), "Apply Now" → /contact
- **REQ-07** Blog index: 2-col grid (4 posts) + sidebar (search, categories, recent)
- **REQ-08** Blog detail template: Breadcrumb, clean typography, tables, code blocks, sidebar
- **REQ-09** Contact page: Form (Name, Phone, Email, Subject, Message) + contact info + static map (Hue City)
- **REQ-10** 404 page: Centered, large "404", "Page Not Found", description, "Back to Home" → /

## Data & Content

- **REQ-11** Blog: Astro Content Collections, 4 markdown posts (frontmatter: title, date, slug, excerpt, thumbnail, category) with exact slugs: `the-rise-of-digital-nomads`, `ios-developer-skills-matrix`, `blockchain-in-200-lines-of-code`, `my-4-deepest-scars`.
- **REQ-12** Team data: JSON — 8 management + 32 team members (name, role, type, description)
- **REQ-13** Portfolio data: JSON — 11 projects (id, title, tags[], description, thumbnail)
- **REQ-14** Services data: JSON — 7 services (id, title, slug, shortDescription, icon)
- **REQ-15** Careers data: JSON — 3 positions (title, location, quantity, salary, description, requirements, benefits)
- **REQ-16** Content verbatim from CONTENT.md. Career job descriptions/requirements/benefits must remain in Vietnamese; structural labels (headers, buttons, layout elements) must be in English.

## Components

- **REQ-17** Header: Sticky + glass blur, logo left, nav center (hover underline), "Let's Talk" CTA → /contact. Services dropdown (hover desktop, accordion mobile). Mobile hamburger → full-screen overlay, 48px touch targets.
- **REQ-18** Footer: Dark bg (--bg-footer), 3 columns (Logo+slogan, Quick links, Contact info), bottom copyright + social icons.
- **REQ-19** Breadcrumbs: Service detail + blog detail. `<nav aria-label="Breadcrumb">` with `<ol>`.
- **REQ-20** Reusable components: ServiceCard, PortfolioCard, TestimonialSlider, CounterStats, ContactForm.

## Design System

- **REQ-21** All CSS tokens from DESIGN-SYSTEM.md implemented in src/styles/variables.css
- **REQ-22** global.css: CSS reset, body styles, heading resets, .container, .section, .visually-hidden
- **REQ-23** BEM naming, component CSS files in src/styles/components/

## Responsive

- **REQ-24** Mobile-first breakpoints: <768px, 768-1024px, >1024px
- **REQ-25** Mobile adaptations: Hero stacked (--text-3xl), service slider 1 card, portfolio 1-col, team 2-col, stats 2×2, contact form full-width

## SEO & Accessibility

- **REQ-26** Every page: unique pageTitle + pageDescription to Layout
- **REQ-27** `<head>` must include: charset, viewport, title formatted as `{pageTitle} | Tenomad`, meta description, canonical URL set strictly to `https://tenomad.com`, OG tags (title, desc, image, url, type), Twitter card, favicon, Google Fonts (Inter 400-800).
- **REQ-28** Single `<h1>` per page. Semantic HTML (header, main, section, article, footer, nav).
- **REQ-29** Interactive elements: unique IDs + ARIA labels. Form inputs with linked `<label>`.

## Assets

- **REQ-30** Generate: logo.svg (double-N, orange-yellow gradient), favicon.ico, og-image.png (1200×630)
- **REQ-31** Generate: 11 portfolio WebP thumbnails with exact filenames: `portfolio-{homing,drberg,tago,dms,valleysierra,sqoop,swolematch,leedpop,xeke,mycalsigns,vespasafari}.webp`.
- **REQ-32** Generate: 4 blog WebP thumbnails with exact filenames: `blog-{nomads,skills,blockchain,scars}.webp`.
- **REQ-33** Generate: hero-graphic.svg, hue-map.webp
- **REQ-34** Team: 8 management + 32 team member placeholder avatars (circular SVG or styled letter circles).

## Animations

- **REQ-35** GSAP ScrollTrigger: data-animate attrs, gsap.fromTo, start 'top 85%', stagger card entries
- **REQ-36** Counter: ScrollTrigger count-up (0→target, 1.5s duration)
- **REQ-37** Swiper: slidesPerView 1, spaceBetween 24, grabCursor. Breakpoints 768→2, 1024→3. Testimonials: loop + autoplay.
- **REQ-38** Disable complex animations on mobile (innerWidth < 768)
- **REQ-39** Shared animation utils in src/scripts/animations.js

## Performance & Constraints

- **REQ-40** Lighthouse: Performance ≥90, Accessibility ≥95, SEO ≥95
- **REQ-41** FCP ≤1.5s, LCP ≤2.5s, CLS ≤0.1
- **REQ-42** Page weight ≤500KB (excl. images), JS bundle ≤100KB
- **REQ-43** Prohibited Technologies: Do NOT install or use Astro integrations (such as `@astrojs/react`, `@astrojs/tailwind`), do NOT use TypeScript (only vanilla JS), and do NOT use a Vercel adapter (build must output static files via output: 'static').
