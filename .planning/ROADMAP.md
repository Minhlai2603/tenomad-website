# ROADMAP: Tenomad Website v1.0

## Phase 1: Foundation & Infrastructure
Setup Astro project, install dependencies, configure build, implement design system (variables.css + global.css), create Layout.astro with full SEO head, establish directory structure.

**Requirements:** REQ-21, REQ-22, REQ-23, REQ-26, REQ-27
**Skills:** fixing-metadata, frontend-design

## Phase 2: Global Components
Build Header (sticky glassmorphism, mobile hamburger, services dropdown), Footer (3-col dark), Breadcrumbs component, and 404 page.

**Requirements:** REQ-10, REQ-17, REQ-18, REQ-19
**Skills:** fixing-accessibility, frontend-design

## Phase 3: Homepage
Build all 9 homepage sections: Hero, Professional Approach, Services Slider (Swiper), Unlimited Possibilities, Core Values + Counters, Why Work With Us, Featured Work, Testimonials (Swiper), CTA Split-Screen.

**Requirements:** REQ-01, REQ-16, REQ-20, REQ-25, REQ-28
**Skills:** frontend-design, fixing-accessibility

## Phase 4: About Us Page
Build About Us page: intro banner, Mission/Vision/Affordable panels, Core Values 2×2 grid, Management section (8 cards), Team grid (32 members, 5-col). Create team.json data file.

**Requirements:** REQ-02, REQ-12, REQ-16, REQ-34
**Skills:** frontend-design

## Phase 5: Services Pages
Build services overview page (framework + 7-card grid) and service detail template (sticky sidebar, content, related projects, CTA). Create 7 service detail pages and services.json.

**Requirements:** REQ-03, REQ-04, REQ-14, REQ-16, REQ-19
**Skills:** frontend-design, fixing-accessibility

## Phase 6: Portfolio Page
Build portfolio page with tab filters (7 categories), 11 project cards with hover overlay. Create portfolio.json data file.

**Requirements:** REQ-05, REQ-13, REQ-16
**Skills:** frontend-design

## Phase 7: Careers Page
Build careers page: banner, benefits grid, accordion job listings (3 positions, Vietnamese content). Create careers.json.

**Requirements:** REQ-06, REQ-15, REQ-16
**Skills:** frontend-design, fixing-accessibility

## Phase 8: Blog System
Configure Astro Content Collections. Create 4 blog markdown posts. Build blog index page (2-col grid + sidebar) and blog detail template (breadcrumb, typography, sidebar).

**Requirements:** REQ-07, REQ-08, REQ-11, REQ-16, REQ-19
**Skills:** frontend-design

## Phase 9: Contact Page
Build contact page: form (Name, Phone, Email, Subject, Message — UI-only), contact info section, static map embed.

**Requirements:** REQ-09, REQ-16, REQ-29
**Skills:** fixing-accessibility, frontend-design

## Phase 10: Asset Generation
Generate all visual assets: logo SVG, favicon, OG image, hero graphic, 11 portfolio thumbnails, 4 blog thumbnails, static map image, team placeholder avatars.

**Requirements:** REQ-30, REQ-31, REQ-32, REQ-33, REQ-34
**Skills:** frontend-design

## Phase 11: Animations & Interactivity
Implement GSAP ScrollTrigger animations (fade-in, stagger, parallax), counter animations, Swiper configurations (services slider, testimonials), hover effects, mobile animation disabling. Create shared animations.js.

**Requirements:** REQ-35, REQ-36, REQ-37, REQ-38, REQ-39
**Skills:** fixing-motion-performance

## Phase 12: QA, Polish & Deploy
Run Lighthouse audits (Perf ≥90, A11y ≥95, SEO ≥95). Test responsive layouts across breakpoints. Validate accessibility (labels, focus, keyboard nav). Verify build (zero errors, no broken links). Deploy to Vercel.

**Requirements:** REQ-24, REQ-25, REQ-28, REQ-29, REQ-40, REQ-41, REQ-42
**Skills:** web-design-guidelines, fixing-accessibility, fixing-metadata, deploy-to-vercel
