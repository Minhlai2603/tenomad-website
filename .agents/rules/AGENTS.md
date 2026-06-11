# Tenomad Project Rules (AGENTS.md)

> **Single source of truth.** Overrides `UI-WIREFRAME.md`, `DESIGN-SYSTEM.md`, `ASSETS.md`, `tenomad-blog-prd.md`. Content from `CONTENT.md` must be used verbatim.

## 1. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | **Astro v5** | SSG only. Zero JS by default; use `<script>` islands for sliders/animations only. |
| Styling | **Vanilla CSS** | CSS Custom Properties + **BEM**. No Tailwind/CSS-in-JS. |
| Animations | **GSAP + ScrollTrigger** | Disable heavy parallax on mobile. |
| Sliders | **Swiper.js v11** | Touch/swipe enabled. |
| Deploy | **Vercel** | Static output, no adapter needed. |
| Language | **English** | Exception: Careers job content stays Vietnamese per `CONTENT.md`. |

**Forbidden:** No Astro integrations (`@astrojs/react`, `@astrojs/tailwind`), no TypeScript, no Vercel adapter.

## 2. Guardrules

1. **Design Tokens:** Always use CSS variables from `src/styles/variables.css`. Never hardcode colors/sizes/spacing. All token values are defined in `DESIGN-SYSTEM.md`.
2. **Content Preservation:** Use exact texts from `CONTENT.md`. No summarizing/rephrasing. Careers job descriptions/requirements/benefits stay in Vietnamese; only structural labels in English.
3. **No Backend:** Contact form is UI-only. Career "Apply Now" → `/contact`. Header CTA "Let's Talk" → `/contact`.
4. **SEO & A11y:**
   - Single `<h1>` per page. Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`).
   - All interactive elements: unique IDs + ARIA labels. Form inputs must have linked `<label>`.
   - Every page passes unique `pageTitle` and `pageDescription` to Layout.
   - `<head>` must include: charset, viewport, `{pageTitle} | Tenomad` title, meta description, canonical URL (`https://tenomad.com`), Open Graph (title, desc, image, url, type), Twitter card, favicon, Google Fonts (Inter 400-800).
5. **Mobile First:** Breakpoints: `<768px` (Mobile), `768-1024px` (Tablet), `>1024px` (Desktop). Min touch target: 48×48px.

## 3. Directory Structure

```
src/
  layouts/Layout.astro
  components/{Header,Footer,Hero,ServiceCard,PortfolioCard,TestimonialSlider,CounterStats,ContactForm,...}.astro
  pages/{index,about-us,portfolio,careers,contact,404}.astro
  pages/services/{index,web-development,mobile-app,dedicated-team,startups,qa-testing,design,ai-nlp}.astro
  pages/blog/{index,[...slug]}.astro
  content/blog/{the-rise-of-digital-nomads,ios-developer-skills-matrix,blockchain-in-200-lines-of-code,my-4-deepest-scars}.md
  data/{team,portfolio,services,careers}.json
  styles/{variables.css,global.css,components/*.css}
  assets/         # Astro-processed images
public/assets/    # Static assets (favicon, og-image, map)
```

**Rules:** Components = reusable `.astro` files. Pages compose layouts+components only (no raw HTML >20 lines). Blog uses Astro Content Collections. Data lives in `src/data/*.json`. CSS follows BEM, imported in component files.

## 4. Dependencies & Config

```bash
npm create astro@latest ./ -- --template minimal --no-install --typescript no
npm install && npm install gsap swiper
```

Only dependencies: `astro ^5.x`, `gsap ^3.12.x`, `swiper ^11.x`.

**astro.config.mjs:** `site: 'https://tenomad.com'`, `output: 'static'`, `build.assets: '_assets'`.

## 5. Design System

All CSS tokens are defined in `DESIGN-SYSTEM.md`. Implement them in `src/styles/variables.css`. Key groups:
- **Backgrounds:** `--bg-primary` (#FFF), `--bg-secondary`, `--bg-tertiary`, `--bg-hero` (gradient), `--bg-footer`
- **Text:** `--text-primary`, `--text-secondary`, `--text-muted`, `--text-on-dark`, `--text-on-hero`
- **Brand:** `--accent-gold` (CTA), `--accent-blue` (links), `--accent-indigo` (dark sections)
- **Neon:** `--neon-cyan`, `--neon-blue`, `--neon-purple` (glow effects in dark sections)
- **Typography:** Font `Inter`. Scale: `--text-xs` to `--text-hero`. Responsive overrides at `<767px`.
- **Spacing:** 4px base scale (`--space-1` through `--space-30`). Container max 1200px.
- **Effects:** Shadows (`--shadow-sm/card/hover/elevated`), glassmorphism (`--glass-bg/border/blur`), radii (`--radius-sm/md/lg/full`)
- **Animation:** `--ease-smooth`, `--duration-fast/normal/slow`

`global.css` must include: CSS reset (box-sizing, margin/padding), base body styles, heading resets, `.container`, `.section`, `.visually-hidden` utility.

## 6. Routing & Data

**URLs:** `/`, `/about-us`, `/services`, `/services/{web-development,mobile-app,dedicated-team,startups,qa-testing,design,ai-nlp}`, `/portfolio`, `/careers`, `/blog`, `/blog/[slug]`, `/contact`

**Blog slugs:** `the-rise-of-digital-nomads`, `ios-developer-skills-matrix`, `blockchain-in-200-lines-of-code`, `my-4-deepest-scars`

**Data schemas:**
- Blog: frontmatter `title, date, slug, excerpt, thumbnail, category`
- Team: `name, role, type("management"|"team"), description`
- Portfolio: `id, title, tags[], description, thumbnail`
- Services: `id, title, slug, shortDescription, icon`
- Careers: `title, location, quantity, salary, description, requirements, benefits`

## 7. Component Specs

> Full wireframes in `UI-WIREFRAME.md`. Key behavioral rules below:

**Header:** Sticky + glass blur. Logo left, nav center (hover underline), "Let's Talk" CTA right → `/contact`. Services nav has dropdown (hover on desktop, accordion on mobile). Mobile: hamburger → full-screen overlay, touch targets >48px.

**Footer:** Dark bg (`--bg-footer`). 3 columns: Logo+slogan | Quick links | Contact info. Bottom: copyright + social icons (FB, LinkedIn, X).

**Breadcrumbs:** Required on service detail + blog detail pages. `<nav aria-label="Breadcrumb">` with `<ol>`.

**Homepage flow** (9 sections): Hero (gradient bg, headline "You Dream It, We Build It", 2 CTAs) → Professional Approach (3-col) → Services Slider (Swiper, 7 cards) → Unlimited Possibilities (2-col) → Core Values + Counters (10+ years, 638+ projects, 598+ clients) → Why Work With Us (6 grid) → Featured Work (Tago, Valley Sierra, DMS) → Testimonials (Swiper, 3 quotes) → CTA Split-Screen (careers + contact)

**About Us:** Intro banner → Mission/Vision/Affordable panels → Core Values 2×2 → Management (8) → Team grid (32, 5-col desktop)

**Services:** Overview (framework + 7-card grid). Detail template: sticky sidebar nav + content + related projects + contact CTA.

**Portfolio:** Tab filters (All, Design, Website, Mobile, Startup, E-commerce, Hybrid App). 11 project cards with hover overlay.

**Careers:** Banner → Benefits grid → Accordion job listings (3 positions, "Apply Now" → `/contact`).

**Blog:** 2-col grid (4 posts) + sidebar (search, categories, recent). Detail: clean typography, tables, code blocks, sidebar.

**Contact:** Form (Name, Phone, Email, Subject, Message) + contact info + static map (Hue City).

**404:** Centered. Large "404", "Page Not Found", description, "Back to Home" → `/`.

## 8. Assets

All in `/public/assets/` or `/src/assets/`:
- **Brand:** `logo.svg` (double-N, orange-yellow gradient), `favicon.ico`, `og-image.png` (1200×630)
- **Team:** `mgmt-{name}.webp` (8) or placeholder SVGs. Team members (32): SVG avatars or styled letter circles.
- **Portfolio:** `portfolio-{homing,drberg,tago,dms,valleysierra,sqoop,swolematch,leedpop,xeke,mycalsigns,vespasafari}.webp`
- **Blog:** `blog-{nomads,skills,blockchain,scars}.webp`
- **Decor:** `hero-graphic.svg`, `hue-map.webp`

## 9. Animations & Interactivity

**GSAP:** Import in `<script>` tags (client-side auto in Astro). Shared utils in `src/scripts/animations.js`. Use `data-animate` attrs + `gsap.fromTo` with ScrollTrigger (`start: 'top 85%'`). Stagger card entries. Disable complex animations on mobile (`innerWidth < 768`).

**Swiper:** `slidesPerView: 1`, `spaceBetween: 24`, `grabCursor: true`. Breakpoints: 768→2 slides, 1024→3 slides. Testimonials: add `loop` + `autoplay`.

**Counters:** ScrollTrigger-activated count-up (0→target, 1.5s duration).

## 10. Skill Routing

Agents MUST apply skills from `.agents/skills/` by task type:

| Task | Skill | When |
|---|---|---|
| HTML components | `fixing-accessibility` | After creating interactive/form/nav elements |
| Pages/`<head>` | `fixing-metadata` | Before finalizing page templates |
| CSS animations | `fixing-motion-performance` | When adding GSAP/transitions/scroll effects |
| UI components | `frontend-design` | During component design & CSS authoring |
| UI review | `web-design-guidelines` | During verify-work & code review |
| Deployment | `deploy-to-vercel` | On deploy request |
| Visual QA | `agent-browser` / `browser-use` | During verify-work & UAT |

**Enforcement:** Planner includes skills as PLAN.md tasks. Executor reads SKILL.md before implementing. Verifier checks against skill rules.

## 11. Verification Checklist

- [ ] `npm run build` — zero errors
- [ ] No broken links
- [ ] SEO: title, meta, OG tags on every page
- [ ] Responsive: mobile/tablet/desktop tested
- [ ] A11y: labels, focus, keyboard nav
- [ ] All colors use design tokens (no hardcoded hex)
- [ ] Files in correct directories per §3
- [ ] Data in `src/data/*.json`, blog in `src/content/blog/*.md`
- [ ] 404 page exists
- [ ] Only `astro`, `gsap`, `swiper` in dependencies

**Performance targets:** Lighthouse Performance ≥90, A11y ≥95, SEO ≥95. FCP ≤1.5s, LCP ≤2.5s, CLS ≤0.1. Page weight ≤500KB (excl. images), JS bundle ≤100KB.
