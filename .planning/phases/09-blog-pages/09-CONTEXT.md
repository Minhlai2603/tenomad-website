# Phase 9: Blog Pages - Context

## Objective
Build the Blog index and detail pages per `FR-07`, `FR-08`, `FR-13`, and `NFR-17` requirements. The blog uses Astro Content Collections (`src/content/blog/`).

## Requirements
- **Blog Index (`/blog`)**:
  - 2-col grid for the 4 post cards.
  - Sidebar with Search (mock), Categories list, Recent posts.
- **Blog Detail (`/blog/[slug]`)**:
  - Breadcrumbs (`Home > Blog > [Category] > [Title]`).
  - Full-width hero thumbnail.
  - Rich content rendering (clean typography, tables, code blocks, lists).
  - Sidebar.
  - Back link + related posts section at the bottom.
- **Assets**:
  - Generate 4 blog thumbnails (`blog-nomads.webp`, `blog-skills.webp`, `blog-blockchain.webp`, `blog-scars.webp`).

## Constraints
- **Astro Content Collections**: Use `getCollection('blog')`.
- **Styling**: Make sure markdown content is styled correctly using `.prose` or specific global CSS for elements inside the article.
