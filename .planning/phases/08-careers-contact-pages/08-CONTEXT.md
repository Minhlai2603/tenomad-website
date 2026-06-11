# Phase 8: Careers & Contact Pages - Context

## Objective
Build the Careers and Contact pages per `FR-06`, `FR-09`, `FR-18`, `NFR-08`, `NFR-09`, and `NFR-20` requirements.

## Requirements
- **Careers Page (`/careers`)**:
  - Top Banner.
  - Benefits Grid (e.g., 13th-month salary, team building, continuous learning).
  - Accordion for job listings (`data/careers.json`). Keep job descriptions, requirements, and benefits in Vietnamese verbatim from `CONTENT.md`. 
  - "Apply Now" button links to `/contact`.
- **Contact Page (`/contact`)**:
  - `ContactForm.astro` component with 5 fields (Name, Phone, Email, Subject, Message). It's UI-only, no backend. Form accessibility is critical (linked labels, ARIA).
  - Contact info column (Address, Phone, Email, Skype, etc.).
  - Static map image of Hue City (`hue-map.webp`).
- **Assets**: Generate static map image `hue-map.webp` and place it in `public/assets/`.

## Constraints
- **Accessibility**: Inputs must have unique IDs and linked `<label>`. Min touch target 48x48px on mobile.
- **Astro**: Use `<script>` for accordion interaction.
