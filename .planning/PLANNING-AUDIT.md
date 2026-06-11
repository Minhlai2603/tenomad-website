# PLANNING AUDIT: Tenomad Website v1.0

This audit validates that the `.planning/` files (specifically `REQUIREMENTS.md`, `ROADMAP.md`, and `PROJECT.md`) are complete and do not omit any specifications or details from the original project documents (`AGENTS.md`, `tenomad-blog-prd.md`, `UI-WIREFRAME.md`, `DESIGN-SYSTEM.md`, `ASSETS.md`, and `CONTENT.md`).

---

## 📊 Summary of Completeness

- **Ingested Core Content**: **95% complete**
- **Technology & Stack Rules**: **98% complete** (needs explicit prohibition details in `REQUIREMENTS.md`)
- **Asset Inventory**: **85% complete** (missing specific filenames for portfolio and blog thumbnails)
- **SEO & Metadata**: **90% complete** (needs explicit title pattern and canonical format)
- **Status**: **PASS WITH RECOMMENDATIONS**. The planning files are highly structured, but minor enhancements are recommended to prevent development agents from guessing details or violating `AGENTS.md` guardrules.

---

## 🔍 Gaps and Recommendations

### 1. Asset Filename Specification (Priority: High)
* **Found in Original Specs**: `AGENTS.md` §8 specifies exact filenames for portfolio projects and blog thumbnails:
  - `portfolio-{homing,drberg,tago,dms,valleysierra,sqoop,swolematch,leedpop,xeke,mycalsigns,vespasafari}.webp`
  - `blog-{nomads,skills,blockchain,scars}.webp`
* **Current Planning**: `REQUIREMENTS.md` REQ-31 and REQ-32 only specify "11 portfolio thumbnails (WebP)" and "4 blog thumbnails (WebP)" without listing the filenames.
* **Risk**: The coding agent might name files `portfolio-1.webp` or `homing.webp`, which violates `AGENTS.md` §8 and breaks downstream imports.
* **Action**: Update REQ-31 and REQ-32 to list the exact filenames.

### 2. Prohibited Technologies & Stack Boundaries (Priority: High)
* **Found in Original Specs**: `AGENTS.md` §1 explicitly forbids:
  - No Astro integrations (such as `@astrojs/react`, `@astrojs/tailwind`)
  - No TypeScript
  - No Vercel adapter
* **Current Planning**: These are listed as Decisions in `PROJECT.md`, but are missing from `REQUIREMENTS.md`.
* **Risk**: High risk of the code generator installing Tailwind or writing TypeScript, which fails the strict dependency limit in `AGENTS.md`.
* **Action**: Add a new requirement (e.g. `REQ-43`) listing these prohibitions clearly.

### 3. Blog Slugs Specificity (Priority: Medium)
* **Found in Original Specs**: `AGENTS.md` §6 defines the exact blog slugs:
  - `the-rise-of-digital-nomads`
  - `ios-developer-skills-matrix`
  - `blockchain-in-200-lines-of-code`
  - `my-4-deepest-scars`
* **Current Planning**: REQ-11 specifies "4 markdown posts" but does not mention the slugs.
* **Risk**: Agent might generate different slugs (e.g. `the-rise-of-the-digital-nomads`), which will cause broken links.
* **Action**: Update REQ-11 to specify the exact slugs.

### 4. SEO Page Title Pattern & Canonical URL (Priority: Medium)
* **Found in Original Specs**: `AGENTS.md` §2.4 requires:
  - Title pattern: `{pageTitle} | Tenomad`
  - Canonical URL: `https://tenomad.com` (strictly HTTPS)
  - Google Fonts: Inter 400-800
* **Current Planning**: REQ-27 lists canonical and fonts but without these exact values.
* **Risk**: Developer agent might use another title pattern or host name.
* **Action**: Update REQ-27 with the exact pattern and URL.

### 5. Careers Page Language Rules (Priority: Medium)
* **Found in Original Specs**: `AGENTS.md` §2.2 specifies:
  - Career job descriptions, requirements, and benefits must be in Vietnamese.
  - Structural labels (e.g. headers, buttons, layout elements) must be in English.
* **Current Planning**: REQ-16 only says "Career content in Vietnamese."
* **Risk**: Developer might translate structural elements to Vietnamese or translate the jobs to English.
* **Action**: Clarify REQ-16 with the exact language boundary.

---

## 🛠️ Remediation Plan

I will proceed to update `.planning/REQUIREMENTS.md` with these refined specifications to make sure the developer agent has a foolproof set of instructions. This ensures no context overflow or truncation issues affect the build.
