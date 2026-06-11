# Classification: UI-WIREFRAME.md

- **Type:** DOC (Wireframe Specification)
- **Precedence:** 2
- **Source:** `UI-WIREFRAME.md` (root)
- **Detection:** User-supplied, content heuristic (wireframe layouts)
- **Size:** 172 lines, 10918 bytes

## Summary

Detailed wireframe specification for all pages. Covers global header (sticky/glass, nav with Services dropdown, "Let's Talk" CTA), homepage 9-section flow with animation notes per section, global footer (3-column dark), and subpage wireframes for About Us (5 sections), Services Overview (hero + grid + framework + CTA), Service Detail Template (breadcrumb + sidebar + content + related projects + CTA), Portfolio (filter tabs + 3-col grid + hover overlay), Careers (hero + benefits + accordion job listings), Blog (2-col grid + sidebar), Blog Detail (breadcrumb + hero + content/sidebar + back/related), Contact (form + info + static map), and implied 404 page.

## Extracted Artifacts

- **Decisions:** Sticky glass header, split-screen CTA section, accordion careers, tab-filtered portfolio, sidebar blog layout
- **Requirements:** Per-section animation specs (GSAP fade-up, stagger, counter, parallax, slider), component interaction behaviors (hover, dropdown, accordion)
- **Constraints:** Static map image (no API key), "Apply Now" → /contact, "Let's Talk" → /contact
