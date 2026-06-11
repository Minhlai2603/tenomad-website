# Classification: ASSETS.md

- **Type:** DOC (Asset Inventory)
- **Precedence:** 3
- **Source:** `ASSETS.md` (root)
- **Detection:** User-supplied, content heuristic (asset table)
- **Size:** 30 lines, 3531 bytes

## Summary

Complete asset inventory for the Tenomad website build. Lists all required visual assets organized by group: Branding (logo SVG, favicon, OG image), Team (30 member placeholders + 8 management placeholders), Services (7 SVG icons from Lucide/Tabler), Portfolio (11 project thumbnails via generate_image), Blog (4 post thumbnails via generate_image), Illustrations (hero graphic), and Map (static map of Hue City). Each asset has source/description, format, and status (agent-generated, placeholder, or icon library).

## Extracted Artifacts

- **Decisions:** Logo is double-N gradient SVG (agent-drawn), team photos use placeholder avatars, service icons from Lucide/Tabler
- **Requirements:** 30+ assets to generate or source, specific formats per asset type
- **Constraints:** No stock photos — agent generates all images via generate_image tool
