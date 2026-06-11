---
phase: 2
slug: layout-header-footer
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-06-11
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | custom-node-script |
| **Config file** | none |
| **Quick run command** | `node .planning/phases/02-layout-header-footer/verify-layout.cjs` |
| **Full suite command** | `npm run build && node .planning/phases/02-layout-header-footer/verify-layout.cjs` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `node .planning/phases/02-layout-header-footer/verify-layout.cjs`
- **After every plan wave:** Run `npm run build`
- **Before /gsd-verify-work:** Full build must pass cleanly
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | NFR-07 | — | N/A | integration | `node .planning/phases/02-layout-header-footer/verify-layout.cjs --task 1` | ✅ W0 | ✅ green |
| 2-01-02 | 01 | 1 | FR-11 | — | N/A | integration | `node .planning/phases/02-layout-header-footer/verify-layout.cjs --task 2` | ✅ W0 | ✅ green |
| 2-01-03 | 01 | 1 | FR-12 | — | N/A | integration | `node .planning/phases/02-layout-header-footer/verify-layout.cjs --task 3` | ✅ W0 | ✅ green |
| 2-01-04 | 01 | 1 | NFR-05 | — | N/A | integration | `node .planning/phases/02-layout-header-footer/verify-layout.cjs --task 4` | ✅ W0 | ✅ green |
| 2-01-05 | 01 | 1 | NFR-05 | — | N/A | integration | `node .planning/phases/02-layout-header-footer/verify-layout.cjs --task 5` | ✅ W0 | ✅ green |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] `.planning/phases/02-layout-header-footer/verify-layout.cjs` — validation script

---

## Manual-Only Verifications

*If none: "All phase behaviors have automated verification."*

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved
