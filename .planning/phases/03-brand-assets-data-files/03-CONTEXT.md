# Phase 3 Context: Brand Assets & Data Files

## Decisions
- **Logo format:** Generate `logo.svg` representing the double-N logo with orange-to-yellow gradient.
- **Favicon & OG Image:** Generate favicon.ico and standard 1200x630 og-image.png.
- **Service Icons:** Use inline SVG or custom Lucide/Tabler icon names that can be mapped to inline SVGs.
- **Team Avatars:** Use inline CSS letter circles for team members and simple inline SVGs/placeholders for management members.
- **Data schemas:**
  - Blog Content Collection: `title, date, slug, excerpt, thumbnail, category`.
  - team.json: `name, role, type ("management" | "team"), description` (8 management, 32 team members).
  - portfolio.json: `id, title, tags[], description, thumbnail` (11 projects).
  - services.json: `id, title, slug, shortDescription, icon` (7 services).
  - careers.json: `title, location, quantity, salary, description, requirements, benefits` (3 positions - Vietnamese content).
- **Blog Content:** 4 posts: `the-rise-of-digital-nomads.md`, `ios-developer-skills-matrix.md`, `blockchain-in-200-lines-of-code.md`, `my-4-deepest-scars.md`.
- **Astro Content Collections:** Configured in `src/content/config.js` using ESM javascript.
