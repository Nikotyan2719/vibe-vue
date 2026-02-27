<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- Modified principles: All principles added
- Added sections: Architectural Constraints, Development Workflow
- Removed sections: None
- Templates requiring updates:
  - plan-template.md: ✅ updated
  - spec-template.md: ✅ (no changes needed)
  - tasks-template.md: ✅ (no changes needed)
  - commands/*.md: N/A (none exist)
- Follow-up TODOs: None
-->
# Vibe Vue Constitution

## Core Principles

### I. Framework & Stack Adherence
Use Nuxt 4.x with Vue 3 Composition API, TypeScript strict mode, Nitro server runtime. Follow Nuxt conventions, auto-imports, and directory structure. No usage of `any`. All public APIs must be explicitly typed.

### II. SSR-First Architecture
HTML generated in Nuxt and handed off to CMS. No client-side state coupling after render. No SPA navigation assumptions. Composables must be SSR-safe. Components must degrade gracefully without hydration. Prefer pure functions over stateful composables.

### III. Type Safety & Code Quality
TypeScript strict compliance required. Define interfaces/types for component props, emits, store state. Use lint and type checks before committing. ESLint + Prettier formatting enforced. Follow import ordering, naming conventions, and Vue conventions.

### IV. Testing & Verification
Write tests for new features and bug fixes. Follow red-green-refactor cycle. Ensure components are testable. Use Vitest for unit tests, Cypress for e2e. Tests must be independent and verify SSR-safe patterns.

### V. Development Practices
Use `@bubblesortt/nuxt-es-toolkit` with `use` prefix convention. Data fetching via `useAsyncData` only in SSR-safe patterns. No global mutable singletons. All composables must be SSR-safe. Follow Git conventions (branch naming, conventional commits).

## Architectural Constraints

- HTML is generated in Nuxt and handed off to CMS
- No client-side state coupling after render
- No SPA navigation assumptions
- Avoid runtime-only browser dependencies in shared logic
- SSR-first rendering strategy
- Static-compatible output where possible
- No client-side reactivity relied upon after HTML delivery

## Development Workflow

- Always run lint and type checks before committing
- Write tests for new features and bug fixes
- Follow existing patterns in the codebase
- Update documentation if project configuration changes
- Ensure all composables are SSR-safe
- Use `useAsyncData` for data fetching with SSR-safe patterns
- Avoid client-only browser APIs in shared logic
- Follow Nuxt 4.x conventions and check Nuxt LLM context for updates
- Use `@bubblesortt/nuxt-es-toolkit` with `use` prefix convention
- Verify components degrade gracefully without hydration

## Governance

Constitution supersedes all other practices. Amendments require documentation, approval, migration plan. All PRs/reviews must verify compliance. Complexity must be justified. Use AGENTS.md for runtime development guidance.

**Version**: 1.0.0 | **Ratified**: 2026-02-27 | **Last Amended**: 2026-02-27