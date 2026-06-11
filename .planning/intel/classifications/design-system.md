# Classification: DESIGN-SYSTEM.md

- **Type:** SPEC
- **Precedence:** 1 (highest among ingested docs)
- **Source:** `DESIGN-SYSTEM.md`

## Extracted Decisions

1. **LOCKED** Mode strategy: Light mode overall, dark sections only for Hero, Footer, CTA split-screen. No dark mode toggle.
2. **LOCKED** Color palette: Specific hex values for all background, text, brand, neon, and semantic tokens.
3. **LOCKED** Typography: Inter (Google Fonts), weight 400-800, base 16px, scale ratio 1.25 (Major Third).
4. **LOCKED** Spacing: 4px base unit scale (4, 8, 12, 16, 24, 32, 48, 64, 80, 120). Container max 1200px.
5. **LOCKED** Border radius: sm(8px), md(16px), lg(24px), full(9999px).
6. **LOCKED** Shadows: 4-tier system (sm, card, hover, elevated).
7. **LOCKED** Glassmorphism: glass-bg, glass-bg-light, glass-border, glass-blur(12px), glass-blur-heavy(20px).
8. **LOCKED** Animation tokens: ease-smooth cubic-bezier(0.4,0,0.2,1), duration-fast(200ms), normal(300ms), slow(500ms).

## Extracted Requirements

- R-DS-01: All CSS tokens must be implemented in `src/styles/variables.css`
- R-DS-02: Header uses glass-bg-light + glass-blur on light background
- R-DS-03: Cards on dark sections use glass-bg + glass-blur + glass-border
- R-DS-04: Hover effects on dark sections use glass-bg + glass-border + neon-cyan glow
- R-DS-05: Typography scale from --text-xs (0.75rem) to --text-hero (4.5rem)
- R-DS-06: Section padding: 80px mobile / 120px desktop vertical
- R-DS-07: Container padding: 16px mobile / 24px desktop
- R-DS-08: Grid gap: 24px mobile / 32px desktop

## Extracted Constraints

- No dark mode toggle — only contextual dark backgrounds
- All colors must use CSS custom properties, never hardcoded hex
- Font family restricted to Inter only
