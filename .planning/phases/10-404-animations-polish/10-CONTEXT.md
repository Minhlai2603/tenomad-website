# Phase 10: 404, Animations & Polish - Context

## Objective
Build the 404 page, implement the shared GSAP animation system, and polish the site per `FR-10`, `FR-24`, `FR-28`, `FR-29`, `NFR-10`, and `NFR-11`.

## Requirements
- **404 Page (`/404`)**:
  - Centered layout.
  - Large "404" text, "Page Not Found".
  - "Back to Home" button.
- **Animations**:
  - `src/scripts/animations.js` script to handle elements with `data-animate` attributes.
  - Use `gsap.fromTo` with ScrollTrigger (`start: 'top 85%'`).
  - Add fade-up / stagger animations.
  - Disable heavy parallax/animations on mobile (`innerWidth < 768`).
- **A11y & Polish**:
  - Verify keyboard navigation.
  - Touch targets.
  - Focus states.

## Constraints
- **Astro**: Import GSAP in a `<script>` tag or island.
