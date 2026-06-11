# Phase 5: About Us Page - Context

**Gathered:** 2026-06-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Build About Us page:
- Intro banner ("We translate Our Clients Dreams Into Reality" title, descriptive text verbatim from CONTENT.md, light background with layout wrapper)
- Mission, Vision, and Affordable Development panels (3-column layout on desktop, responsive stacking, solid backgrounds using `--bg-secondary`, hover border effects)
- Core Values 2x2 grid (Passion, Respect, Integrity, Excellence, using SVG icons and verbatim descriptions)
- Management section (8 members with cards: placeholder avatar, name, role, bio text verbatim from team.json)
- Team grid (32 members: circle initials avatar, name, role, 5-col desktop, 3-col tablet, 2-col mobile layout)

</domain>

<decisions>
## Implementation Decisions

### Team Visuals & Avatars
- **Management Avatars:** Use clean corporate placeholder SVGs with custom gradient backgrounds.
- **Team Member Avatars:** Use CSS-styled letter circles (initials) with background colors from design tokens.
- **Avatar Shapes:** Perfect circles (`border-radius: var(--radius-full)`) for both lists.
- **Avatar Hover Effect:** Simple scale-up (`1.05`) with a smooth transition (`var(--duration-normal)`).

### Team Member Grid Layout
- **Responsive Columns:** 5-column grid on desktop, 3-column grid on tablet, 2-column grid on mobile.
- **Card Information:** Show name and role only (no description).
- **Hover State:** Shift name text color to `--accent-blue` on hover.

### Management Card Design
- **Card Layout:** Vertical card layouts with avatar on top, name, role, and bio text below.
- **Card Style:** Light background (`--bg-card`) with a subtle border (`--border-card`), shadow (`--shadow-card`), and transition to `--shadow-hover` on hover.
- **Bio Handling:** Render the exact description string verbatim from `team.json`.

### GSAP Animations
- **Management Cards Stagger:** Staggered Fade-Up entry using GSAP ScrollTrigger (`0.1s` interval) starting at `top 85%`.
- **Team Grid Animation:** Group team cards in rows of 5 on desktop and stagger the rows themselves instead of animating all 32 cards individually.
- **Mobile Animations:** Disable ScrollTrigger animations when `window.innerWidth < 768` to maximize performance.

### the agent's Discretion
- Code organization for SVG inline templates.
- Colors of the initials' circles (statically mapping name characters to colors like `--bg-tertiary` or neon tokens for variety).

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/layouts/Layout.astro` — Global page layout.
- `src/styles/variables.css` — Design system variables.
- `src/styles/global.css` — Global resets, container utilities, and base elements.
- `src/data/team.json` — Management and team members data source.

### Established Patterns
- Astro components mapping data arrays (e.g. mapping `team.json` using `type` filters).
- GSAP animations configured client-side in a `<script>` island.
- BEM naming conventions for styles and components.

### Integration Points
- `src/pages/about-us.astro` — The new route for the About Us page.

</code_context>

<specifics>
## Specific Ideas

- Ensure strict adherence to CONTENT.md texts verbatim.
- Ensure pageTitle is passed to Layout as "About Us" and pageDescription describes the company's background.

</specifics>

<deferred>
## Deferred Ideas

- None — discussion stayed within phase scope.

</deferred>
