# Phase 2: Layout, Header & Footer - Context

**Gathered:** 2026-06-11
**Status:** Ready for planning

<domain>
## Phase Boundary

This phase delivers the core Layout component, Header component, and Footer component. It establishes the global HTML structure, SEO metadata, sticky header behavior (desktop hover dropdown, mobile hamburger accordion), and dark-themed footer, integrated into the homepage.

</domain>

<decisions>
## Implementation Decisions

### Layout & SEO Meta Configuration
- Canonical and Open Graph URLs: Construct dynamically by appending Astro.url.pathname to the canonical site URL (https://tenomad.com).
- Font Loading: Preconnect to fonts.googleapis.com and fonts.gstatic.com, and load Inter stylesheet via link tags in Layout `<head>` to prevent FOUT.
- Fallback OG Images: Use a default `/assets/og-image.png` path when no specific `ogImage` prop is provided to the layout.
- Page Title Format: Always format page title as `${pageTitle} | Tenomad`.

### Header Component Behavior & Responsiveness
- Glassmorphism Styling: Sticky header uses `--glass-bg` with `backdrop-filter: blur(12px)` and `--glass-border` bottom border, matching design tokens.
- Services Dropdown (Desktop): Show/hide on hover via pure CSS transitions, with ARIA attributes.
- Services Accordion (Mobile): Collapsed accordion by default, toggling height on touch.
- Mobile Hamburger Menu: Full-screen overlay with a close button and smooth transitions. Hamburger button has proper ARIA mapping.

### Footer Styling & Navigation
- Quick Links: Include Home, About Us, Services, Portfolio, Careers, Blog, and Contact as specified in the sitemap.
- Contact Details: Render verbatim contact info from CONTENT.md (26 Ly Thuong Kiet Street, Vinh Ninh Ward, Hue City, Vietnam; Email: contact@tenomad.com; Phone: (+84)02346 27 17 57).
- Social Media Links: Use verbatim links from CONTENT.md: Facebook (https://facebook.com/tenomad), LinkedIn (https://linkedin.com/company/tenomad), Twitter/X (https://x.com/tenomad).
- Social Icon Hover: Subtle transition to accent color (gold/cyan glow) on hover.

### the agent's Discretion
- Code organization for header dropdown elements and specific transition timing values.
- Social media icon SVGs styling and asset references.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/styles/variables.css` — Core design tokens (colors, spacings, border radii, glassmorphism tokens).
- `src/styles/global.css` — CSS reset, base typography, and container layout rules.

### Established Patterns
- Astro v5 SSG structure, BEM class naming conventions.
- Custom CSS Properties for color mapping and responsiveness.

### Integration Points
- `src/layouts/Layout.astro` — The primary layout template for all pages.
- `src/components/Header.astro` & `src/components/Footer.astro` — Integrated into the layout.
- `src/pages/index.astro` — Main entry page to consume Layout.

</code_context>

<specifics>
## Specific Ideas

- Ensure strict adherence to CONTENT.md contact info and social links verbatim.
- Min touch target of 48x48px for hamburger button and menu links.
- Single `<h1>` per page enforcement.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>
