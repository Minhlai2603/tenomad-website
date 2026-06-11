# Phase 6: Services Pages - Context

**Gathered:** 2026-06-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Build the Services Overview page and the 7 Service Detail pages:
- **Services Overview page (`/services`):**
  - Banner section (verbatim heading and subtitle).
  - Services Framework (3 columns: Proactive Analysis, Lean Development, Continuous Delivery) using exact text from `CONTENT.md`.
  - Services Grid (7-card grid using a new reusable `ServiceCard.astro` component populated from `services.json`).
- **Service Detail pages (`/services/{web-development,mobile-app,dedicated-team,startups,qa-testing,design,ai-nlp}`):**
  - Sticky sidebar navigation on desktop (accordion on mobile) listing all 7 services.
  - Breadcrumbs component: `Home > Services > {Service Title}` (nested under standard semantic structure `<nav aria-label="Breadcrumb">`).
  - Main content area containing description and list items verbatim from `CONTENT.md`.
  - Related projects section (showing up to 3 projects from `portfolio.json` matching the service's tag/theme).
  - Quick contact CTA panel (split section or centered button directing to `/contact`).

</domain>

<decisions>
## Implementation Decisions

### ServiceCard Component
- **Component File:** `src/components/ServiceCard.astro` (styled in `src/styles/components/service-card.css`).
- **Layout & Style:** Consistent with the Homepage Services cards but without Swiper slide wrappers. Light card background, hover translate up, custom SVG icons matching the service types.

### Sticky Sidebar Navigation (Detail Pages)
- **Desktop Layout:** Two-column grid where the left column (1/4 width) is a sticky sidebar list of links to all services, highlighting the current service with an active state style.
- **Mobile Layout:** The list collapses into a vertical list or a compact dropdown/accordion for easier navigation.
- **Behavior:** Smooth scrolling and fixed positioning utilizing CSS `position: sticky`.

### Breadcrumbs
- **Component File:** `src/components/Breadcrumbs.astro` (styled in `src/styles/components/breadcrumbs.css`).
- **Accessibility:** Must use `<nav aria-label="Breadcrumb">` containing an `<ol>` list of links with `aria-current="page"` on the current page item.

### Related Projects Section
- **Logic:** Filter `portfolio.json` projects by matching tags.
  - Web Development matches `Website`, `Ecomerce`, `Hybrid App`.
  - Mobile App matches `Mobile`, `Hybrid App`.
  - Startups matches `Startup`.
  - Design matches `Design`.
  - Others default to first 3 portfolio items.
- **Display:** Display 2 or 3 project cards in a simple horizontal grid.

### GSAP Animations
- **Overview Grid:** Fade-in stagger effect on the 7 service cards using GSAP ScrollTrigger.
- **Detail Page:** Fade-in on main content elements and related project cards.
- **Mobile Animations:** Disable ScrollTrigger animations when `window.innerWidth < 768`.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/layouts/Layout.astro` — Main layout template.
- `src/styles/variables.css` — Styling tokens.
- `src/styles/global.css` — Reset and core structure.
- `src/data/services.json` — Services descriptions and properties.
- `src/data/portfolio.json` — Projects data for matching related work.

### Established Patterns
- Services slider on index page (`src/components/ServicesSlider.astro`) provides HTML structure and SVGs.
- CSS classes follow BEM naming standard.
- Routing is defined statically in `src/pages/services/` (Astro static page paths or dynamic routes with `getStaticPaths`). We will use static paths / pages to match the requested URLs precisely:
  - `src/pages/services/index.astro`
  - `src/pages/services/[slug].astro` using `getStaticPaths` or 7 individual pages. Since Astro v5 `getStaticPaths` is extremely clean for `[slug].astro`, we will use `src/pages/services/[slug].astro` for the detail pages.

</code_context>

<specifics>
## Specific Ideas

- Content from `CONTENT.md` must be utilized word-for-word.
- Breadcrumbs must render correct hierarchical navigation.
- Minimum touch targets of 48x48px on all links and interactive elements.

</specifics>

<deferred>
## Deferred Ideas

- None.

</deferred>
