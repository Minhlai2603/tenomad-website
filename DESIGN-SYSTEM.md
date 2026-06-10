# Tenomad Design System

## Mode Strategy
- **Overall:** Light mode
- **Dark sections:** Hero, Footer, CTA split-screen (Section 5 homepage)
- Không có dark mode toggle. Chỉ sử dụng dark bg cho các sections cụ thể trên.

## Color Palette — Light Mode

### Backgrounds
- --bg-primary: #FFFFFF
- --bg-secondary: #F5F7FA
- --bg-tertiary: #EEF1F6
- --bg-card: #FFFFFF
- --bg-hero: linear-gradient(135deg, #1B2A4A 0%, #0B88EE 100%)
- --bg-footer: #1E2022

### Text
- --text-primary: #1A1A2E
- --text-secondary: #4A5568
- --text-muted: #718096
- --text-on-dark: #FFFFFF
- --text-on-hero: #FFFFFF

### Brand Colors
- --accent-gold: #E8A600 (CTA chính, giữ nguyên từ website gốc)
- --accent-gold-hover: #D49800
- --accent-blue: #0B88EE (header, hero, links)
- --accent-blue-light: #E8F4FD
- --accent-indigo: #1B2A4A (dark sections, header)

### Neon Accent Colors
- --neon-cyan: #00F0FF (điểm nhấn neon cho dark sections, glow effects)
- --neon-blue: #3B82F6 (secondary neon accent)
- --neon-purple: #A855F7 (tertiary neon, dùng cho hover/active states trên dark bg)

### Semantic Colors
- --success: #22C55E
- --error: #EF4444
- --warning: #F59E0B

### Surface & Effects
- --border-light: #E2E8F0
- --border-card: rgba(0,0,0,0.06)
- --overlay: rgba(27,42,74,0.6)

## Typography
- **Heading:** Inter (Google Fonts), weight 600-800
- **Body:** Inter, weight 400-500
- **Base size:** 16px
- **Scale ratio:** 1.25 (Major Third)
- **Line height:** 1.6 (body), 1.2 (headings)

| Token | Size | Usage |
|-------|------|-------|
| --text-xs | 0.75rem | Labels, captions |
| --text-sm | 0.875rem | Small body |
| --text-base | 1rem | Body text |
| --text-lg | 1.25rem | Large body |
| --text-xl | 1.5rem | H4 |
| --text-2xl | 2rem | H3 |
| --text-3xl | 2.5rem | H2 |
| --text-4xl | 3.5rem | H1 |
| --text-hero | 4.5rem | Hero headline |

## Spacing
- **Section padding:** 80px (mobile) / 120px (desktop) vertical
- **Container max-width:** 1200px
- **Container padding:** 16px (mobile) / 24px (desktop)
- **Grid gap:** 24px (mobile) / 32px (desktop)
- **Scale:** 4px base unit (4, 8, 12, 16, 24, 32, 48, 64, 80, 120)

## Border Radius
- --radius-sm: 8px (buttons, inputs)
- --radius-md: 16px (cards)
- --radius-lg: 24px (modals, large panels)
- --radius-full: 9999px (pills, avatars)

## Shadows & Effects
- --shadow-sm: 0 1px 3px rgba(0,0,0,0.08)
- --shadow-card: 0 4px 16px rgba(0,0,0,0.08)
- --shadow-hover: 0 8px 32px rgba(0,0,0,0.12)
- --shadow-elevated: 0 16px 48px rgba(0,0,0,0.16)

## Glassmorphism
- --glass-bg: rgba(255, 255, 255, 0.08)
- --glass-bg-light: rgba(255, 255, 255, 0.65)
- --glass-border: rgba(255, 255, 255, 0.15)
- --glass-blur: 12px
- --glass-blur-heavy: 20px

### Usage
- **Header (sticky):** `--glass-bg-light` + `--glass-blur` (trên light bg)
- **Cards trên dark sections:** `--glass-bg` + `--glass-blur` + `--glass-border`
- **Hover effects (dark sections):** `--glass-bg` + `--glass-border` + `--neon-cyan` glow

## Animation Tokens
- --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
- --duration-fast: 200ms
- --duration-normal: 300ms
- --duration-slow: 500ms
