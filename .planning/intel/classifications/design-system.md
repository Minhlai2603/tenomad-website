# Classification: DESIGN-SYSTEM.md

- **Type:** DOC (Design Specification)
- **Precedence:** 2
- **Source:** `DESIGN-SYSTEM.md` (root)
- **Detection:** User-supplied, content heuristic (design tokens)
- **Size:** 102 lines, 3103 bytes

## Summary

Complete design token specification for the Tenomad website. Defines the visual language: light mode with selective dark sections (Hero, Footer, CTA), color palette (backgrounds, text, brand, neon accents, semantic, surface/effects), typography (Inter font, 9-step type scale, line heights), spacing (4px base unit, section padding, container, grid gap), border radius (4 tokens), shadows (4 levels), glassmorphism (5 tokens with usage rules), and animation tokens (easing, 3 duration levels).

## Extracted Artifacts

- **Decisions:** Mode strategy (light-only, no toggle), font choice (Inter), base unit (4px), container max-width (1200px)
- **Requirements:** All CSS tokens must be implemented in `src/styles/variables.css`
- **Constraints:** No dark mode toggle, only specific sections get dark bg
- **Dependencies:** Google Fonts (Inter 400-800)
