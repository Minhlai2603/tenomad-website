# Tenomad Project Rules & Coding Standards for AI Agents (AGENTS.md)

This file contains the core specifications, design guidelines, technical architecture, and coding rules for the **Tenomad Website Rebuild** project. All AI agents, developers, and scripts working on this codebase must strictly adhere to these instructions.

> **Document Hierarchy:** This file (`AGENTS.md`) is the **single source of truth**. If any conflict exists between this file and other project documents (`UI-WIREFRAME.md`, `DESIGN-SYSTEM.md`, `ASSETS.md`, `tenomad-blog-prd.md`), the rules in `AGENTS.md` take precedence. Content data from `CONTENT.md` should be used verbatim unless this file specifies otherwise.

---

## 1. Core Technology Stack & Architecture

AI Agents must implement the project using the following technologies:

| Layer | Technology | Rules & Guidelines |
|---|---|---|
| **Core Framework** | **Astro v5** | Purely static site generation (SSG). Keep client-side JavaScript to a absolute minimum (zero JS by default, use island architecture with `<script>` tags inside Astro components only when necessary for sliders/animations). |
| **Build Tool** | **Vite** | Integrated within Astro. Follow default configuration. |
| **Styling** | **Vanilla CSS** | Use CSS Custom Properties (design tokens). Follow **BEM (Block Element Modifier)** naming convention. Do **NOT** install or use Tailwind CSS, CSS-in-JS, or CSS frameworks unless explicitly instructed. |
| **Animations** | **GSAP + ScrollTrigger** | High-performance, smooth animations. Prevent layout thrashing and handle mobile optimization (disable heavy parallax on touch devices). |
| **Sliders / Carousels** | **Swiper.js v11** | Used for portfolios, testimonials, and services sliders. Touch/swipe interactions must be enabled. |
| **Deployment** | **Vercel** | Out-of-the-box static deployment target. |
| **Language** | **English** | The entire public-facing website must be in English. |

---

## 2. Structural Guardrules (Must-Follow)

1. **Design Tokens Compliance:**
   - Always use the predefined CSS variables from the design system. Never hardcode color hexes, font-sizes, or paddings.
2. **Content Preservation (Zero Translation/Omissions):**
   - Incorporate the exact legacy texts, details, and matrices provided in `CONTENT.md`. Do not summarize, rephrase, or translate names, descriptions, numbers, or technical values.
   - **Exception — Careers Section:** The Careers job listings (Job Description, Requirements, Benefits) are written in Vietnamese in `CONTENT.md` and must remain in Vietnamese on the website. This is an intentional exception to the English-only rule. Only structural labels (Location, Salary, Quantity, "Apply Now" button) should be in English.
3. **No Dynamic Backend Dependencies:**
   - The contact form is UI-only. Career applications link to the contact page (`/contact`). Header CTA "Let's Talk" links to `/contact`.
4. **SEO & Accessibility (A11y):**
   - Ensure a single `<h1>` per page.
   - Use semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`).
   - Every interactive element (buttons, toggles, form fields) must have unique IDs and ARIA labels.
   - Ensure minimum contrast ratios are met, and form inputs have linked `<label>` elements.
   - **Required `<head>` template** (in `Layout.astro`):
     ```html
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>{pageTitle} | Tenomad</title>
       <meta name="description" content="{pageDescription}" />
       <link rel="canonical" href={`https://tenomad.com${Astro.url.pathname}`} />
       
       <!-- Open Graph -->
       <meta property="og:title" content={pageTitle} />
       <meta property="og:description" content={pageDescription} />
       <meta property="og:image" content="https://tenomad.com/assets/og-image.png" />
       <meta property="og:url" content={`https://tenomad.com${Astro.url.pathname}`} />
       <meta property="og:type" content="website" />
       
       <!-- Twitter Card -->
       <meta name="twitter:card" content="summary_large_image" />
       
       <!-- Favicon -->
       <link rel="icon" href="/assets/favicon.ico" />
       
       <!-- Google Fonts (Inter) -->
       <link rel="preconnect" href="https://fonts.googleapis.com" />
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
     </head>
     ```
   - Every page must pass unique `pageTitle` and `pageDescription` props to the layout.
5. **Mobile First & Responsive Layout:**
   - Mobile-first approach. All components must look polished and responsive at `< 768px` (Mobile), `768px – 1024px` (Tablet), and `> 1024px` (Desktop).
   - Ensure a minimum interactive touch target size of **48x48px**.

---

## 3. Project Directory Structure

All code must follow this exact directory layout:

```text
src/
├── layouts/
│   └── Layout.astro              # Base HTML shell (head, body, scripts)
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── ServiceCard.astro
│   ├── PortfolioCard.astro
│   ├── TestimonialSlider.astro
│   ├── CounterStats.astro
│   ├── ContactForm.astro
│   └── ...                       # Additional components as needed
├── pages/
│   ├── index.astro               # Homepage
│   ├── about-us.astro
│   ├── services/
│   │   ├── index.astro           # Services Overview
│   │   ├── web-development.astro
│   │   ├── mobile-app.astro
│   │   ├── dedicated-team.astro
│   │   ├── startups.astro
│   │   ├── qa-testing.astro
│   │   ├── design.astro
│   │   └── ai-nlp.astro
│   ├── portfolio.astro
│   ├── careers.astro
│   ├── blog/
│   │   ├── index.astro           # Blog listing
│   │   └── [...slug].astro       # Blog post detail (dynamic route)
│   ├── contact.astro
│   └── 404.astro                 # Custom 404 page
├── content/
│   └── blog/                     # Astro Content Collections
│       ├── the-rise-of-digital-nomads.md
│       ├── ios-developer-skills-matrix.md
│       ├── blockchain-in-200-lines-of-code.md
│       └── my-4-deepest-scars.md
├── data/                         # Static JSON data files
│   ├── team.json                 # Management + team members
│   ├── portfolio.json            # 11 portfolio projects
│   ├── services.json             # 7 services metadata
│   └── careers.json              # Job listings
├── styles/
│   ├── variables.css             # Design tokens (CSS custom properties)
│   ├── global.css                # CSS reset + base styles + utilities
│   └── components/               # BEM component stylesheets
│       ├── header.css
│       ├── footer.css
│       ├── hero.css
│       └── ...
└── assets/                       # Images processed by Astro (use <Image />)
public/
└── assets/                       # Static assets (favicon, og-image, map)
```

**Rules:**
- Components must be reusable Astro components (`.astro` files).
- Page files must only compose layouts and components — no raw HTML blocks over 20 lines in page files.
- Blog posts use [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) with `.md` files and frontmatter (`title`, `date`, `slug`, `excerpt`, `thumbnail`).
- Team, portfolio, services, and careers data must live in `src/data/*.json` and be imported where needed.
- Component CSS files follow BEM naming and are imported within their respective Astro component files.

---

## 4. Dependencies & Project Initialization

### Required Packages

```json
{
  "dependencies": {
    "astro": "^5.x",
    "gsap": "^3.12.x",
    "swiper": "^11.x"
  }
}
```

### Project Init Commands

```bash
npm create astro@latest ./ -- --template minimal --no-install --typescript no
npm install
npm install gsap swiper
```

### Astro Configuration (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tenomad.com',
  output: 'static',
  build: {
    assets: '_assets'
  }
});
```

**Rules:**
- Do **NOT** install any Astro integrations (e.g., `@astrojs/react`, `@astrojs/tailwind`) unless explicitly instructed.
- Do **NOT** enable TypeScript.
- Do **NOT** add a Vercel adapter — pure static output is sufficient.

---

## 5. Global CSS Custom Properties (Design System)

Add these design tokens directly in `/src/styles/variables.css` or `/src/layouts/Layout.astro` as root properties:

```css
:root {
  /* Mode Strategy: Overall light mode, specific sections use dark background */
  
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F7FA;
  --bg-tertiary: #EEF1F6;
  --bg-card: #FFFFFF;
  --bg-hero: linear-gradient(135deg, #1B2A4A 0%, #0B88EE 100%);
  --bg-footer: #1E2022;

  /* Text Colors */
  --text-primary: #1A1A2E;
  --text-secondary: #4A5568;
  --text-muted: #718096;
  --text-on-dark: #FFFFFF;
  --text-on-hero: #FFFFFF;

  /* Brand Colors */
  --accent-gold: #E8A600; /* Main CTA, matching legacy site */
  --accent-gold-hover: #D49800;
  --accent-blue: #0B88EE; /* Header, hero, links */
  --accent-blue-light: #E8F4FD;
  --accent-indigo: #1B2A4A; /* Dark sections, headers */

  /* Neon Accent Colors (For Glow effects in Dark Sections/Hero/Footer/CTA) */
  --neon-cyan: #00F0FF;
  --neon-blue: #3B82F6;
  --neon-purple: #A855F7;

  /* Semantic Colors */
  --success: #22C55E;
  --error: #EF4444;
  --warning: #F59E0B;

  /* Surface & Borders */
  --border-light: #E2E8F0;
  --border-card: rgba(0, 0, 0, 0.06);
  --overlay: rgba(27, 42, 74, 0.6);

  /* Typography Base & Font Family */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --base-size: 16px;

  /* Typography Scales (Major Third - Ratio 1.25) */
  --text-xs: 0.75rem;     /* 12px - Labels, captions */
  --text-sm: 0.875rem;    /* 14px - Small body */
  --text-base: 1rem;      /* 16px - Standard body */
  --text-lg: 1.25rem;     /* 20px - Large body */
  --text-xl: 1.5rem;      /* 24px - H4 */
  --text-2xl: 2rem;       /* 32px - H3 */
  --text-3xl: 2.5rem;     /* 40px - H2 */
  --text-4xl: 3.5rem;     /* 56px - H1 */
  --text-hero: 4.5rem;    /* 72px - Hero headline */

  /* Border Radii */
  --radius-sm: 8px;       /* Buttons, Inputs */
  --radius-md: 16px;      /* Standard Cards */
  --radius-lg: 24px;      /* Modals, Large panels */
  --radius-full: 9999px;  /* Pills, Avatars */

  /* Spacing Scale (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;       /* Mobile section padding */
  --space-30: 120px;      /* Desktop section padding */

  /* Layout Container */
  --container-max-width: 1200px;
  --container-padding-mobile: 16px;
  --container-padding-desktop: 24px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-elevated: 0 16px 48px rgba(0, 0, 0, 0.16);

  /* Glassmorphism Styles */
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-bg-light: rgba(255, 255, 255, 0.65);
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-blur: 12px;
  --glass-blur-heavy: 20px;

  /* Animation Timings */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;

  /* Line Heights */
  --line-height-body: 1.6;
  --line-height-heading: 1.2;
  --line-height-tight: 1.1;
}

/* Responsive Typography Overrides */
@media (max-width: 767px) {
  :root {
    --text-hero: 2.5rem;    /* 40px on mobile */
    --text-4xl: 2.5rem;     /* 40px */
    --text-3xl: 2rem;       /* 32px */
    --text-2xl: 1.5rem;     /* 24px */
  }
}

/* Global CSS Reset & Base Styles (global.css) */
/* All styling below must be written to /src/styles/global.css and imported in Layout.astro */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: var(--base-size);
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--line-height-body);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  line-height: var(--line-height-heading);
  font-weight: 700;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--accent-blue);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-smooth);
}

.container {
  max-width: var(--container-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding-mobile);
}

@media (min-width: 1024px) {
  .container {
    padding-inline: var(--container-padding-desktop);
  }
}

.section {
  padding-block: var(--space-20);
}

@media (min-width: 1024px) {
  .section {
    padding-block: var(--space-30);
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 6. Sitemap & URL Routing

The website must be structured with the following clean URLs:

```text
/                          → Homepage
/about-us                  → About Us (Overview, Management, Team Members list)
/services                  → Services Overview (Cards, Framework, Work Process)
/services/web-development  → Web Development Detail Page
/services/mobile-app       → Mobile App Development Detail Page
/services/dedicated-team   → Dedicated Team Detail Page
/services/startups         → Startups Detail Page
/services/qa-testing       → QA Testing Detail Page
/services/design           → Design Detail Page
/services/ai-nlp           → AI & NLP Consulting Detail Page
/portfolio                 → Portfolio Gallery (11 Projects with Filters)
/careers                   → Careers (Accordion Jobs: Web, Android, Designer)
/blog                      → Blog (List/Grid of 4 Posts + Search Sidebar)
/blog/[slug]               → Blog Post Detail Page (Full text content)
/contact                   → Contact Us (Map, Form, direct info)
```

### Blog Post Slugs

| Blog Post Title | URL Slug |
|---|---|
| The rise of the digital nomads | `/blog/the-rise-of-digital-nomads` |
| iOS Developer Skills Matrix | `/blog/ios-developer-skills-matrix` |
| A BLOCKCHAIN IN 200 LINES of CODE | `/blog/blockchain-in-200-lines-of-code` |
| MY 4 DEEPEST SCARS | `/blog/my-4-deepest-scars` |

### Data Architecture

- **Blog posts:** Astro Content Collections in `src/content/blog/*.md` with frontmatter: `title`, `date`, `slug`, `excerpt`, `thumbnail`, `category`.
- **Team members:** `src/data/team.json` — array of objects with `name`, `role`, `type` ("management" or "team"), `description` (for management only).
- **Portfolio projects:** `src/data/portfolio.json` — array with `id`, `title`, `tags[]`, `description`, `thumbnail`.
- **Services:** `src/data/services.json` — array with `id`, `title`, `slug`, `shortDescription`, `icon`.
- **Job listings:** `src/data/careers.json` — array with `title`, `location`, `quantity`, `salary`, `description`, `requirements`, `benefits`.

---

## 7. Detailed Component Specifications

### 7.1 Global Elements
- **Header:** Sticky. Blur background (`--glass-bg-light` + `--glass-blur`). Left-aligned Logo, Center Navigation links with smooth hover underline transitions, and Right-aligned "Let's Talk" CTA (links to `/contact`). Mobile menu: Hamburger button with clean full-screen overlay and safe touch targets (>48px).
- **Footer:** Dark background (`--bg-footer`). Column 1: Tenomad Logo and slogan ("You Dream It, We Build It"). Column 2: Quick links. Column 3: Contact info. Bottom bar: Copyright & Social media icons (Facebook, LinkedIn, Twitter/X) styled with clean hover transitions.
- **Navigation Dropdown:** The "Services" link in the header must display a dropdown menu on hover (desktop) listing all 7 service sub-pages. On mobile, the dropdown renders as an expandable accordion within the hamburger overlay.
- **Breadcrumbs:** Service Detail pages and Blog Detail pages must include breadcrumb navigation (e.g., `Home > Services > Web Development` or `Home > Blog > [Post Title]`). Use `<nav aria-label="Breadcrumb">` with an `<ol>` list.

### 7.2 Homepage Components & Flow
1. **Hero Area (Dark/Hero gradient bg):** Headline `"You Dream It, We Build It"`, subtitle `"We are group of experts that will help you bring your ideas to life. Let's create something great together!"`. Two CTA buttons: `"Explore Our Services"` (primary, accent gold, links to `/services`) and `"View Portfolio"` (secondary outline, links to `/portfolio`). Features a clean 3D elements animation or structured static illustration.
2. **Professional Approach:** 3-column layout outlining WEBSITE DEVELOPMENT, MOBILE DEVELOPMENT, and PLATFORM DEVELOPMENT (with exact descriptions from `CONTENT.md`).
3. **Core Services Slider ("What We Do Best"):** Swiper-based draggable slider displaying 7 cards (Web, Mobile, Dedicated Team, Startups, QA, Design, AI & NLP). Hover effects should elevate and highlight card borders.
4. **Unlimited Possibilities / Powerful Solution:** Left column: Heading, subtitle, and list (Web Dev, Mobile Dev, Startups, QA, Dedicated Teams). Right column: Decorative abstract graphics.
5. **Driven by Core Values:** 4 columns listing core values (Passion, Respect, Integrity, Excellence) + count-up counter (from 0 to target on scroll trigger):
   - `10+` Years of Experience
   - `638+` Projects Completed
   - `598+` Happy Clients
6. **Why Work With Us:** Grid of 6 items (Experience, Brilliant Team, Creative, Complex Solutions, 100% Guarantee, Affordable Budget).
7. **Featured Work:** Displays 3 featured cards from the portfolio (Tago, Valley Sierra, DMS) with tags and a link to `/portfolio`.
8. **Testimonials Carousel:** Auto-sliding Swiper.js displaying the 3 client quotes (Sandy Frucher, Christine DiCarlo, Zarley Zalapski) with correct designations.
9. **CTA Split-Screen (Dark BG):**
   - Left: "Ready to join our dynamic team?" → CTA: `[ View Open Positions ]` (links to `/careers`)
   - Right: "Have a project in mind?" → CTA: `[ Contact Us Today ]` (links to `/contact`)

### 7.3 About Us Page
- **Intro Banner:** Title `"We translate Our Clients Dreams Into Reality"` over workspace photo background.
- **Mission & Vision Cards:** 3 horizontal panels (Our Mission, Our Vision, Affordable Development).
- **Core Values Grid:** 2x2 grid displaying the 4 core values (Passion, Respect, Integrity, Excellence) with icons and descriptions.
- **Management Team (8 Members):** Grid displaying profiles (Andrew, Jack, Jennifer, Ar. Melligeri, Henry, Luke, Courtney, Dorothy) with placeholder avatars and bios.
- **Team Grid (32 Members):** 5-column layout on desktop, responsive to mobile. Display circular avatars, names, and roles for the full team list.

### 7.4 Services Pages
- **Overview:** Displays the Services Framework (Proactive Analysis, Lean Development, Continuous Delivery) and grid linking to the 7 details pages.
- **Detail Template:** Split layout. Left: Sticky sidebar with quick service navigation. Right: Service title, description, detailed lists, related projects slider (2-3 items), and quick contact CTA.

### 7.5 Portfolio Page
- **Horizontal Tabs:** Filters by Category: `All`, `Design`, `Website`, `Mobile`, `Startup`, `E-commerce`, `Hybrid App`.
- **Project Grid:** 11 cards (Homing, Dr. Berg, Tago, DMS, Valley Sierra, Sqoop, Swolematch, Leed Pop, XEKE, My CalSigns, Vespa Safari) with images, tags, and titles. Clean transition hover overlay with "View Detail" button.

### 7.6 Careers Page
- **Recruitment Banner:** "Join Our Dynamic Team".
- **Benefits Grid:** Modern cards for salaries, health benefits, workspace culture.
- **Accordion Listings:** Openings for Web Developer (PHP), Android Developer (Java/Kotlin), and Designer. Expandable header showing Location, Salary, Quantity. Internal content: Job Description, Requirements, Benefits. Contains "Apply Now" button linking to `/contact`.

### 7.7 Blog & Detail Pages
- **Overview Page:** Left: 2-column grid displaying the 4 posts (The rise of the digital nomads, iOS Developer Skills Matrix, A blockchain in 200 lines of code, My 4 deepest scars) with dates and excerpts. Right: Search widget, categories, recent posts list.
- **Blog Detail Page:** Clean typography, support for lists, tables (specifically the skills matrix table), and code blocks (NaiveChain blockchain points). Sidebar for navigating other posts.

### 7.8 Contact Us Page
- **Left Column:** Styled feedback form (Name, Phone, Email, Subject, Message, Send button).
- **Right Column:** Direct contact data (Address, Phone, Email) and Social links.
- **Map Section:** Static map image showing Hue City office location (embed-friendly, no API required).

### 7.9 404 Page
- **Layout:** Centered content on a clean background (`--bg-secondary`).
- **Content:** Large `"404"` number, heading `"Page Not Found"`, body text `"The page you're looking for doesn't exist or has been moved."`, and a CTA button `"Back to Home"` linking to `/`.
- **File:** `src/pages/404.astro`

---

## 8. Asset Guidelines & Naming Conventions

All generated/used assets must reside in `/public/assets/` or `/src/assets/`. Use these exact files and instructions:

1. **Branding Assets:**
   - `logo.svg`: SVG double-N network icon with orange-to-yellow gradient.
   - `favicon.ico`: Formatted from the logo.
   - `og-image.png` (1200x630px): Social preview generated using `generate_image`.
2. **Team Images:**
   - Management (8 items): `mgmt-andrew.webp`, `mgmt-jack.webp`, etc., or standard geometric placeholder SVGs.
   - Team Members (32 items): Use neat SVG avatars or styled letters inside clean circles (`#EEF1F6` bg, dark text) to avoid heavy image sizes.
3. **Portfolio Assets:**
   - WebP thumbnails for each of the 11 projects named respectively: `portfolio-homing.webp`, `portfolio-drberg.webp`, `portfolio-tago.webp`, `portfolio-dms.webp`, `portfolio-valleysierra.webp`, `portfolio-sqoop.webp`, `portfolio-swolematch.webp`, `portfolio-leedpop.webp`, `portfolio-xeke.webp`, `portfolio-mycalsigns.webp`, `portfolio-vespasafari.webp`.
4. **Blog Post Assets:**
   - Excerpt thumbnails: `blog-nomads.webp`, `blog-skills.webp`, `blog-blockchain.webp`, `blog-scars.webp`.
5. **Decoration & Details:**
   - `hero-graphic.svg`: 3D abstract or tech visual.
   - `hue-map.webp` / `hue-map.png`: Static map visual for 26 Ly Thuong Kiet, Hue City.

---

## 9. Interactive Features & Animation Implementation Rules

- **GSAP ScrollTrigger Setup:**
  - Import GSAP and ScrollTrigger inside `<script>` tags within Astro components. Astro `<script>` tags are **automatically client-side only** — no `typeof window` check is needed.
  - For shared animation utilities, create `src/scripts/animations.js` and import it in component `<script>` tags.
  - Example pattern:
    ```astro
    <!-- Inside an Astro component -->
    <div class="fade-up" data-animate>...</div>
    
    <script>
      import { gsap } from 'gsap';
      import { ScrollTrigger } from 'gsap/ScrollTrigger';
      gsap.registerPlugin(ScrollTrigger);
      
      document.querySelectorAll('[data-animate]').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        );
      });
    </script>
    ```
  - Stagger elements (e.g., card entries) using `.fromTo` for controlled visual fadeups.
  - Disable ScrollTrigger calculations or complex parallax on Mobile devices (`window.innerWidth < 768`) to guarantee a fluid 60fps experience.
- **Swiper.js Initialization:**
  - Utilize official Swiper packages. Ensure the layout includes Swiper CSS files.
  - Configuration rules:
    ```javascript
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      },
      // for testimonials, add loop/autoplay
    });
    ```
- **Interactive Counters:**
  - Trigger counters only when they enter the viewport using ScrollTrigger. Increment values from 0 up to 10, 638, and 598 respectively over a `1.5s` duration.

---

## 10. Skill Routing Map (Mandatory)

When working on any task, the agent MUST check and apply the relevant skills
from `.agents/skills/` based on the task type:

| Task Category | Required Skill | When to Apply |
|---|---|---|
| Building/modifying HTML components | `fixing-accessibility` | After creating any interactive element, form, or navigation |
| Adding new pages or updating `<head>` | `fixing-metadata` | Before finalizing any page template or layout |
| Implementing CSS animations/transitions | `fixing-motion-performance` | When adding GSAP, CSS transitions, or scroll effects |
| Creating UI components or layouts | `frontend-design` | During component design and CSS authoring |
| Reviewing completed UI work | `web-design-guidelines` | During verify-work and code review phases |
| Deploying to production | `deploy-to-vercel` | When the user requests deployment |
| Browser testing or visual QA | `agent-browser` or `browser-use` | During verify-work and UAT |

### Enforcement Rule
- **Planning phase**: Planner MUST include skill application as explicit tasks
  in PLAN.md (e.g., "Run accessibility audit using fixing-accessibility skill")
- **Execution phase**: Executor MUST read the relevant SKILL.md before implementing
  and follow its rules during implementation
- **Verification phase**: Verifier MUST check output against applicable skill rules

---

## 11. Agent Checklist & Verification Steps

Before declaring code complete, ensure these metrics are satisfied:
- [ ] **Static Build succeeds:** Running `npm run build` completes with zero errors.
- [ ] **Link Verification:** Ensure no broken relative path or invalid external href exists.
- [ ] **SEO Validation:** Every page has a title, proper layout tags, metadata, and distinct Open Graph definitions.
- [ ] **Responsive Design:** Tested on screen sizes mimicking standard Mobile (<768px), Tablet (768px-1024px), and Desktop (>1024px).
- [ ] **Accessibility check:** Form elements have correct `id` and `<label>` pairs. Interactive triggers are focusable and navigable with a keyboard.
- [ ] **Design Tokens Consistency:** All colors match variables.css tokens. No hardcoded `#1A1A2E`, `#0B88EE`, etc., in individual components.
- [ ] **Directory Structure:** All files are in the correct locations per Section 3 (Project Directory Structure).
- [ ] **Data Files:** Team, portfolio, services, and careers data are in `src/data/*.json`. Blog posts are in `src/content/blog/*.md`.
- [ ] **404 Page:** Custom 404 page exists at `src/pages/404.astro`.
- [ ] **No Unused Dependencies:** Only `astro`, `gsap`, and `swiper` are in `package.json` dependencies.

### Performance Budgets

These targets must be met on a production build (`npm run build && npm run preview`):

| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | ≥ 90 | Chrome DevTools |
| Lighthouse Accessibility | ≥ 95 | Chrome DevTools |
| Lighthouse SEO | ≥ 95 | Chrome DevTools |
| First Contentful Paint (FCP) | ≤ 1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | ≤ 2.5s | Lighthouse |
| Cumulative Layout Shift (CLS) | ≤ 0.1 | Lighthouse |
| Total page weight (excl. images) | ≤ 500KB | DevTools Network tab |
| Total JS bundle size | ≤ 100KB | Build output |
