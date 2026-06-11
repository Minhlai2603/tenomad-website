# Phase 2: Layout, Header & Footer - Research

**Researched:** 2026-06-11
**Domain:** Astro v5 Layout, Navigation dropdown/accordion, Footer styling & SEO meta setup
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Canonical and Open Graph URLs: Construct dynamically by appending Astro.url.pathname to the canonical site URL (https://tenomad.com).
- Font Loading: Preconnect to fonts.googleapis.com and fonts.gstatic.com, and load Inter stylesheet via link tags in Layout `<head>` to prevent FOUT.
- Fallback OG Images: Use a default `/assets/og-image.png` path when no specific `ogImage` prop is provided to the layout.
- Page Title Format: Always format page title as `${pageTitle} | Tenomad`.
- Glassmorphism Styling: Sticky header uses `--glass-bg` with `backdrop-filter: blur(12px)` and `--glass-border` bottom border, matching design tokens.
- Services Dropdown (Desktop): Show/hide on hover via pure CSS transitions, with ARIA attributes.
- Services Accordion (Mobile): Collapsed accordion by default, toggling height on touch.
- Mobile Hamburger Menu: Full-screen overlay with a close button and smooth transitions. Hamburger button has proper ARIA mapping.
- Quick Links: Include Home, About Us, Services, Portfolio, Careers, Blog, and Contact as specified in the sitemap.
- Contact Details: Render verbatim contact info from CONTENT.md (26 Ly Thuong Kiet Street, Vinh Ninh Ward, Hue City, Vietnam; Email: contact@tenomad.com; Phone: (+84)02346 27 17 57).
- Social Media Links: Use verbatim links from CONTENT.md: Facebook (https://facebook.com/tenomad), LinkedIn (https://linkedin.com/company/tenomad), Twitter/X (https://x.com/tenomad).
- Social Icon Hover: Subtle transition to accent color (gold/cyan glow) on hover.

### the agent's Discretion
- Code organization for header dropdown elements and specific transition timing values.
- Social media icon SVGs styling and asset references.

### Deferred Ideas (OUT OF SCOPE)
- None — discussion stayed within phase scope.

</user_constraints>

<architectural_responsibility_map>
## Architectural Responsibility Map

Single-tier application — all capabilities reside in CDN/Static tier (Astro SSG).

</architectural_responsibility_map>

<research_summary>
## Summary

Researched layout creation and semantic accessibility for Astro v5, specifically focusing on building custom zero-JS navigation menus with CSS-based dropdowns and clean mobile accordions. The design uses standard HTML5 tags and leverages native CSS custom properties for responsiveness and style isolation.

Key recommendations: To maintain a zero-JS-by-default architecture, use pure CSS transitions for the desktop dropdown and a lightweight vanilla JS toggle scripts for the mobile hamburger and mobile accordion. Ensure all links have appropriate aria-labels and touch targets are at least 48px.

**Primary recommendation:** Use Astro layout slots, render Inter fonts via preconnect, design header and footer with BEM styling, and run interactive states via small inline vanilla `<script>` tags to keep the pages fast and responsive.
</research_summary>

<standard_stack>
## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| astro | 5.x | Static site generator framework | High performance zero-JS static HTML delivery |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| None | - | - | - |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Pure CSS dropdowns | React/Astro-React dropdowns | Overkill for simple site, increases JS bundle size |

**Installation:**
No new dependencies are required for this phase.
</standard_stack>

<architecture_patterns>
## Architecture Patterns

### System Architecture Diagram
Astro Compiler parses `src/layouts/Layout.astro` which includes `src/components/Header.astro` and `src/components/Footer.astro`. Pages like `src/pages/index.astro` pass props (`pageTitle`, `pageDescription`) to the Layout component, which generates complete SEO-optimized HTML pages.

### Recommended Project Structure
```
src/
├── components/
│   ├── Header.astro      # Sticky navigation menu
│   └── Footer.astro      # Footer column layouts
├── layouts/
│   └── Layout.astro      # Master layout component
├── styles/
│   ├── variables.css     # Global CSS Variables
│   └── global.css        # CSS Resets, global helpers
```

### Pattern 1: Layout Props and Meta
**What:** Define typescript props interface (or simple Destructuring) in Layout to receive title and description.
**When to use:** On all layout components.
**Example:**
```astro
---
// Layout.astro
interface Props {
  pageTitle: string;
  pageDescription: string;
}
const { pageTitle, pageDescription } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, 'https://tenomad.com').href;
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{pageTitle} | Tenomad</title>
    <meta name="description" content={pageDescription} />
    <link rel="canonical" href={canonicalURL} />
    <!-- Preconnect Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Pattern 2: Sticky Header with CSS Dropdown
**What:** Use pure CSS for desktop hover states and light vanilla scripts for mobile.
**When to use:** Header component.
**Example:**
```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: var(--glass-blur);
  background: var(--glass-bg-light);
  border-bottom: var(--glass-border);
}
/* Desktop hover dropdown */
@media (min-width: 1025px) {
  .header__nav-item--has-dropdown:hover .header__dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
```

### Anti-Patterns to Avoid
- **Hardcoding canonical paths:** Always generate dynamically using `Astro.url.pathname`.
- **Loading heavy libraries for hamburger toggling:** Inline vanilla JS (less than 10 lines) is much more performant.
- **Multiple h1 elements:** Keep only one `<h1>` per page.

</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| CSS Resets | Complex custom resets | Standard modern CSS reset in global.css | Avoids inconsistent cross-browser rendering bugs |

</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: FOUT (Flash of Unstyled Text)
**What goes wrong:** Fonts blink or jump during page loading.
**Why it happens:** Web fonts are loaded asynchronously after page rendering.
**How to avoid:** Use preconnect links and appropriate `font-display: swap` in the Google Font link.
**Warning signs:** Text fonts changing suddenly ~0.5s after load.

### Pitfall 2: Mobile Touch Targets too small
**What goes wrong:** Links are difficult to press on mobile devices.
**Why it happens:** Padding around anchor tags is less than 48px.
**How to avoid:** Set `min-height` and padding to ensure touch area is at least 48x48px.
**Warning signs:** Lighthouse audit warning on target sizes.

</common_pitfalls>

<code_examples>
## Code Examples

### SEO Canonical Construction
```astro
---
const canonicalURL = new URL(Astro.url.pathname, 'https://tenomad.com').href;
---
<link rel="canonical" href={canonicalURL} />
```

</code_examples>

<sota_updates>
## State of the Art (2024-2025)

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind classes | Vanilla CSS + BEM | Astro v5 design choices | Simplifies debugging and matches locked design constraints |

</sota_updates>

<open_questions>
## Open Questions

None - all requirements and constraints are fully understood.

</open_questions>

<sources>
## Sources

### Primary (HIGH confidence)
- [Astro Documentation](https://docs.astro.build) - Astro components, slots, layouts, metadata
- [W3C Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/) - ARIA menus, mobile targets, semantic structure

</sources>

<metadata>
## Metadata

**Research scope:**
- Core technology: Astro layout structure, BEM CSS, basic interaction scripts
- Ecosystem: standard HTML5/CSS3
- Patterns: SEO metadata, preconnecting fonts, responsive navigation
- Pitfalls: FOUT, touch target sizing

**Confidence breakdown:**
- Standard stack: HIGH
- Architecture: HIGH
- Pitfalls: HIGH
- Code examples: HIGH

**Research date:** 2026-06-11
**Valid until:** 2026-07-11
</metadata>

---

*Phase: 02-layout-header-footer*
*Research completed: 2026-06-11*
*Ready for planning: yes*
