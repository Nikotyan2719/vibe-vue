# Implementation Plan: Site Design, Layout, and Lessons Page

**Branch**: `001-site-design-layout` | **Date**: 2026-02-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-site-design-layout/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Design and implement the core website structure including: 1) refactoring the existing layout into separate header and footer components, 2) improving responsive design, and 3) creating a lessons page that displays all available lessons from the Pinia store. The implementation will follow Nuxt 4 conventions with Vue 3 Composition API, TypeScript strict mode, and Tailwind CSS for styling.

## Technical Context

**Language/Version**: TypeScript (strict mode), Nuxt 4.x (4.3.1), Vue 3 (3.5.28), Node.js (≥18)  
**Primary Dependencies**: `@bubblesortt/nuxt-es-toolkit` (1.0.10), Pinia (3.0.4), Vitest (4.0.18), Cypress (15.11.0), ESLint (9.39.3), Tailwind CSS (3.4.19)  
**Storage**: Pinia stores with mock data initially, no external storage required for this feature  
**Testing**: Vitest (unit), Cypress (e2e) - though user requested no tests initially, only ESLint checks  
**Target Platform**: Web (SSR-first, static-compatible)  
**Project Type**: Nuxt web application (learning platform)  
**Performance Goals**: Lessons page loads within 2 seconds (per SC-004), responsive layout adapts instantly to viewport changes, no layout shift during navigation  
**Constraints**: SSR-first, no client-side state coupling, TypeScript strict (no `any`), SSR-safe composables, fully responsive design required across all devices and screen sizes  
**Scale/Scope**: Small to medium scale - initially 3-5 lessons, expandable to dozens; target audience: web developers learning platform; no user authentication required for this phase

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

| Gate | Principle | Status | Notes |
|------|-----------|--------|-------|
| 1 | Framework & Stack Adherence: Use Nuxt 4.x, Vue 3 Composition API, TypeScript strict mode | ✅ PASS | Feature will use existing Nuxt 4.3.1, Vue 3.5.28, TypeScript strict |
| 2 | SSR-First Architecture: No client-side state coupling, SSR-safe composables | ✅ PASS | Layout components are SSR-safe; active link highlighting degrades gracefully |
| 3 | Type Safety & Code Quality: TypeScript strict, define interfaces/types | ✅ PASS | Component props will have TypeScript interfaces |
| 4 | Testing & Verification: Write tests for new features | ⚠️ VIOLATION (justified) | User explicitly requested no tests, only ESLint checks for this feature |
| 5 | Development Practices: Use `@bubblesortt/nuxt-es-toolkit` with `use` prefix | ✅ PASS (N/A) | No data fetching required for this feature |
| 6 | Responsive Design: Fully responsive across all devices and screen sizes | ✅ PASS | Explicit requirement in spec (FR-003) |

**Overall**: Gates pass with one justified violation (testing). Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
├── components/                    # Vue components (auto-imported)
│   ├── HomePage.vue               # Existing homepage component
│   ├── SiteHeader.vue             # NEW: Header component extracted from layout
│   ├── SiteFooter.vue             # NEW: Footer component extracted from layout
│   └── LessonsList.vue            # NEW: Component for displaying lessons
├── layouts/                       # Layout components
│   └── default.vue                # Main layout (to be refactored)
├── pages/                         # Route definitions
│   ├── index.vue                  # Homepage (uses HomePage component)
│   └── lessons.vue                # NEW: Lessons page (uses LessonsList)
├── stores/                        # Pinia stores
│   └── useExampleStore.ts         # Existing store with lessons data
├── assets/                        # Static assets
├── composables/                   # Composable functions (auto-imported)
├── utils/                         # Utility functions
└── types/                         # TypeScript type definitions

public/                            # Static files served at root
specs/001-site-design-layout/      # This feature's documentation
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/
```

**Structure Decision**: The project follows Nuxt 4's default app directory structure. Layout components will be extracted from `app/layouts/default.vue` into separate reusable components in `app/components/`. The lessons page will be added to `app/pages/lessons.vue` and will consume data from the existing Pinia store.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| Skip unit/e2e tests for this feature | User explicitly requested "доботай дизайн и структуру не нужно пока писать тесты, только eslint проверяй правильно ли всё пишешь" | Writing tests would contradict user directive; ESLint checks will ensure code quality and TypeScript strict mode provides type safety |

## Phase Completion

**Phase 0 (Research)**: ✅ Complete - `research.md` created with decisions on Tailwind SCSS customization, component architecture, SSR-safe navigation, lessons data fetching, and responsive design.

**Phase 1 (Design)**: ✅ Complete - `data-model.md`, `contracts/component-props.md`, and `quickstart.md` created. Agent context updated (`AGENTS.md`).

**Ready for**: Implementation (`/speckit.tasks` or direct implementation with ESLint validation as requested).

**Next Steps**: Implement the feature following the quickstart guide, ensuring ESLint passes and TypeScript strict compliance.
