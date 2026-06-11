---
name: review-planning
description: "Audit .planning/ requirements and roadmap against original specs to detect omissions or context truncation"
---

<objective>
Systematically audit the active planning directory (`.planning/`) against original source documents to identify missing requirements, design tokens, asset references, or page structures, ensuring no details were lost during doc ingestion or context-heavy roadmap generation.

Key areas to check:
1. **Verbatim Content Alignment**: Ensuring exact text references from `CONTENT.md` (e.g. Vietnamese career jobs, specific blogs, service names).
2. **Page Flow & Component Specs**: Cross-checking wireframe details (e.g. the 9 homepage sections, About Us sections, Services sidebar structure, Blog layout).
3. **Asset Inventory**: Checking that all specific filenames from `ASSETS.md` and `AGENTS.md` are captured.
4. **Guardrules & Constraints**: Verifying all technology limits, mobile-first breakpoints, and single source of truth rules.
</objective>

<execution_context>
- Original Specs:
  - `AGENTS.md` (Single source of truth)
  - `tenomad-blog-prd.md`
  - `UI-WIREFRAME.md`
  - `DESIGN-SYSTEM.md`
  - `ASSETS.md`
  - `CONTENT.md`
- Planning Output:
  - `.planning/PROJECT.md`
  - `.planning/REQUIREMENTS.md`
  - `.planning/ROADMAP.md`
  - `.planning/INGEST-CONFLICTS.md`
</execution_context>

<process>
1. **Analyze Input Source Files**: Check sizes and core structures. Identify key items (pages, components, design rules, assets, animations).
2. **Compare with `.planning/REQUIREMENTS.md`**:
   - Check if any pages or sections are missing.
   - Check if the 9 homepage sections are correct and detailed.
   - Verify that all 11 portfolio projects and 7 service detail requirements are tracked.
   - Verify assets (by exact filenames).
   - Verify technical restrictions (no TS, no forbidden integrations, etc.).
3. **Compare with `.planning/ROADMAP.md`**:
   - Ensure every requirement in `REQUIREMENTS.md` is mapped to a phase.
   - Verify that the phasing order is logical and doesn't skip critical structural setups.
4. **Generate Audit Report**: Write findings to `.planning/PLANNING-AUDIT.md`.
   - **Status**: Complete or Incomplete.
   - **Blockers**: Critical gaps that must be resolved (e.g. missing pages, incorrect stack).
   - **Omissions/Warnings**: Minor omissions (e.g. missing asset names, animation details).
   - **Context Truncation Checklist**: Verify that large inputs like `CONTENT.md` did not overflow the context.
5. **Interactive Remediation**: Offer to automatically patch the planning files with any missing requirements found.
</process>
