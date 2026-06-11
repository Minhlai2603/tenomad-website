# Phase 1: Project Scaffolding & Design System - Research

## 1. Tech Stack Overview
- **Astro**: Version 5.x. SSG mode (`output: 'static'`). Zero JS by default.
- **GSAP**: Version 3.12.x for animations.
- **Swiper**: Version 11.x for sliders.
- **Styling**: Vanilla CSS with CSS Custom Properties and BEM (Block-Element-Modifier) naming convention. No Tailwind CSS.
- **Deploy**: Vercel static deployment.

## 2. Directory Structure
As per AGENTS.md §3:
```
src/
  layouts/Layout.astro
  components/
  pages/
  data/
  styles/
    variables.css
    global.css
  assets/
public/assets/
```

## 3. Configuration Setup
`astro.config.mjs` must contain:
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

## 4. Design System Tokens (from DESIGN-SYSTEM.md & AGENTS.md §5)
Create `src/styles/variables.css` declaring variables in `:root`:
- Backgrounds: `--bg-primary` (#FFF), `--bg-secondary` (#F8F9FA), `--bg-tertiary` (#E9ECEF), `--bg-hero` (gradient), `--bg-footer` (#0B0F19)
- Text: `--text-primary` (#1A1D20), `--text-secondary` (#495057), `--text-muted` (#6C757D), `--text-on-dark` (#FFFFFF), `--text-on-hero` (#FFFFFF)
- Brand Colors: `--accent-gold` (#FFB800), `--accent-blue` (#0055FF), `--accent-indigo` (#3730A3)
- Neon glows: `--neon-cyan` (#00F0FF), `--neon-blue` (#0047FF), `--neon-purple` (#AD00FF)
- Spacing: 4px base scale (`--space-1` to `--space-30`)
- Borders & Effects: glassmorphism variables, shadows, radii.

## 5. Validation Architecture
Since the only allowed dependencies are `astro`, `gsap`, and `swiper`, we will use automated validation checks utilizing:
- `npm run build` (verifies Astro build compiles cleanly with zero errors)
- Node.js validation scripts to check file/directory existence and CSS validation.
