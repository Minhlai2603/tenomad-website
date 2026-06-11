# Phase 3 Research: Content Collections & Brand Assets

## Astro Content Collections in Vanilla JS
In Astro, content collections are defined in `src/content/config.js` (or `.ts`). To comply with the "no TypeScript" rule, we can write a plain JS config:
```javascript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    thumbnail: z.string(),
    category: z.string(),
  })
});

export const collections = {
  blog: blogCollection,
};
```
This is fully supported in Astro v5 and allows type-safe markdown queries without using TypeScript.

## Static Assets
- `logo.svg`: Double-N shape. Can be generated with clean vector paths and a linearGradient block.
- `favicon.ico`: 32x32px or SVG fallback. We can write a simple SVG logo representation in public/favicon.svg and also provide a basic favicon.ico.
- `og-image.png`: 1200x630px image. We can generate a stunning modern OG image representing the brand using a canvas drawing script or a simple asset generator tool.

## Data Schema Verification
Data files must reside in `src/data/`:
- `src/data/team.json`
- `src/data/portfolio.json`
- `src/data/services.json`
- `src/data/careers.json`
We will structure them as arrays of objects following the exact schemas in AGENTS.md.
