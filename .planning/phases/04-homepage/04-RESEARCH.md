# Phase 4 Research: Homepage Construction

**Researched:** 2026-06-11
**Domain:** Homepage components, Swiper.js integration, GSAP & ScrollTrigger setup, responsive layout design
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Build all 9 homepage sections in order (Hero -> Professional Approach -> Services Slider -> Unlimited Possibilities -> Core Values + Counters -> Why Work With Us -> Featured Work -> Testimonials -> CTA Split-Screen).
- Smooth CSS gradients and container boundaries for dark section transitions.
- "Why Work With Us" uses a 3-column, 2-row grid on desktop, 1-column on mobile, with glassmorphism styling.
- "Featured Work" cards scale up on hover and show a translucent indigo overlay with title, tags, and a "View Case Study" button.
- CTA Split-Screen section uses 50/50 vertical split on desktop, stacked 100% width on mobile.
- Services Slider breakpoints: 1 slide on Mobile, 2 on Tablet, 3 on Desktop. Touch/swipe draggable carousel with pagination dots, no side arrows.
- Testimonials Slider autoplay loop enabled, 5s delay, pause on hover, smooth fade transitions.
- GSAP ScrollTrigger for heading blocks (fade-up + stagger) and cards (sequential stagger).
- ScrollTrigger animations start at `top 85%` with smooth ease-out.
- Counter stats count up from 0 to target over 1.5 seconds, using a custom cubic-bezier ease-out.
- Animations programmatically disabled on mobile devices (viewport width < 768px).

### the agent's Discretion
- Exact styling details of the decorative graphics, layout margins/paddings within variables.css rules, and CSS glassmorphism implementation details are left to the agent's discretion.

### Deferred Ideas (OUT OF SCOPE)
- None.

</user_constraints>

<architectural_responsibility_map>
## Architectural Responsibility Map

Single-tier static application using Astro SSG with lightweight script islands for Swiper.js and GSAP.

</architectural_responsibility_map>

<research_summary>
## Summary

Researched homepage slider implementation using Swiper.js v11 and scroll animations using GSAP v3 + ScrollTrigger. Designed a robust system of modular components that compose into `src/pages/index.astro`.

Key recommendations:
1. Initialize Swiper.js client-side inside Astro using standard `<script>` tags (Astro compiles them as standard ES modules).
2. Load GSAP and ScrollTrigger dynamically, ensuring we do not execute scroll triggers or animations on mobile screens (using media query detection) to prevent performance issues.
3. Keep the HTML markup highly semantic, with clean h1/h2 hierarchy.

</research_summary>

<standard_stack>
## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| astro | 5.x | Static site generator framework | High performance static delivery |
| gsap | 3.12.x | ScrollTrigger and counter animations | Rich micro-interactions and scroll-based motion |
| swiper | 11.x | Sliders and carousels | Touch-enabled mobile-friendly carousels |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| None | - | - | - |

**Installation:**
All dependencies (gsap, swiper) are already installed.

</standard_stack>

<architecture_patterns>
## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   ├── Hero.astro
│   ├── ProfessionalApproach.astro
│   ├── ServicesSlider.astro
│   ├── UnlimitedPossibilities.astro
│   ├── CoreValues.astro
│   ├── WhyWorkWithUs.astro
│   ├── FeaturedWork.astro
│   ├── Testimonials.astro
│   └── SplitCTA.astro
├── pages/
│   └── index.astro
```

### Pattern 1: Safe client-side Swiper/GSAP initialization in Astro
Astro component scripts run during build time, so standard browser APIs (document, window) are not available there. To interact with the DOM, scripts must be inside `<script>` blocks.
```astro
---
// Component.astro
---
<div class="my-element"></div>
<script>
  // Runs entirely on the client
  import { gsap } from 'gsap';
  gsap.from('.my-element', { opacity: 0 });
</script>
```

### Pattern 2: Counter stats ScrollTrigger animation
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const counters = document.querySelectorAll('.counter-val');
counters.forEach(counter => {
  const target = parseInt(counter.getAttribute('data-target'), 10);
  gsap.fromTo(counter, 
    { textContent: 0 }, 
    { 
      textContent: target,
      duration: 1.5,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: counter,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});
```

### Anti-Patterns to Avoid
- **Hardcoded colors or spacings in component CSS:** Always use variables defined in `variables.css`.
- **Loading GSAP or Swiper on mobile screens when animations are disabled:** Ensure scripts check window size before initiating heavy scroll triggers.

</architecture_patterns>

<dont_hand_roll>
## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Carousel touch dragging | Custom drag logic | Swiper.js v11 | High performance, cross-browser touch swipe |
| Count-up triggers | Custom IntersectionObserver | GSAP ScrollTrigger | Unified control of animation timelines and scroll intersections |

</dont_hand_roll>

<common_pitfalls>
## Common Pitfalls

### Pitfall 1: Text Jittering during Swiper Transitions
- **What goes wrong:** Text elements inside slides vibrate or jump when shifting slides.
- **Why it happens:** CSS hardware acceleration shifts layout models.
- **How to avoid:** Use `effect: 'fade'` with `fadeEffect: { crossFade: true }` for testimonials, and add `backface-visibility: hidden` to card elements.

### Pitfall 2: Memory leaks with GSAP ScrollTriggers
- **What goes wrong:** Page navigation or re-renders leave stale ScrollTrigger instances active.
- **Why it happens:** Subscribing to scroll events without cleanup.
- **How to avoid:** Call `ScrollTrigger.getAll().forEach(t => t.kill())` when necessary, or ensure clean DOM hooks.

</common_pitfalls>

<open_questions>
## Open Questions

None - requirements and design tokens are fully understood.

</open_questions>

<sources>
## Sources

- [Swiper API Documentation](https://swiperjs.com/swiper-api)
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

</sources>

<metadata>
## Metadata

**Research scope:** Swiper integration, GSAP & ScrollTrigger configurations.
**Confidence:** HIGH
**Research date:** 2026-06-11
**Valid until:** 2026-07-11

</metadata>

---

*Phase: 04-homepage*
*Research completed: 2026-06-11*
*Ready for planning: yes*
