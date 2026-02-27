# AGENTS.md - Vibe Vue Project

This file contains essential information for agentic coding agents working on this Vue 3 TypeScript project.

## Project Overview

Vibe Vue is a pet project - a learning platform for web developers. The platform features:

- A beautiful homepage advertising lessons with navigation to lesson pages
- Lessons covering CSS, JavaScript, and HTML fundamentals
- An integrated code editor (using a third-party library) for trying out JavaScript code learned in lessons
- A comments/chat section under each lesson where users can post comments as guests
- All data managed via Pinia stores with mock data initially

**Technical Stack**:

- **Framework**: Nuxt 4.x (Vue 3 Composition API)
- **Build Tool**: Vite (via Nuxt)
- **Server Runtime**: Nitro
- **Language**: TypeScript (strict mode)
- **State Management**: Pinia (if needed, prefer SSR-safe patterns)
- **Testing**: Vitest (unit), Cypress (e2e)
- **Linting**: ESLint
- **Styling**: Tailwind CSS (if configured)
- **Toolkit**: `@bubblesortt/nuxt-es-toolkit` (use prefix convention)

## Stack

- **Nuxt**: Latest 4.x
- **Vue**: 3 (Composition API only)
- **TypeScript**: Strict mode enabled
- **Nitro**: Server runtime
- **Rendering**: No Vue hydration in CMS output

## Architectural Constraints

- HTML is generated in Nuxt and handed off to CMS
- No client-side state coupling after render
- No SPA navigation assumptions
- No usage of `any` (TypeScript strict compliance required)
- Avoid runtime-only browser dependencies in shared logic
- Fully responsive design required across all devices and screen sizes

## Rendering Model

- SSR-first rendering strategy
- Static-compatible output where possible
- No client-side reactivity relied upon after HTML delivery
- Composables must be SSR-safe

## External Authoritative Sources

- Nuxt LLM context: https://nuxt.com/llms.txt
- Nuxt Documentation: https://nuxt.com/docs
- Vue 3 LLM context: https://vuejs.org/llms.txt
- Vue 3 Documentation: https://vuejs.org/guide/introduction.html

## Project-Specific Decisions

- Prefer pure functions over stateful composables where possible
- Data fetching via `useAsyncData` only in SSR-safe patterns
- No global mutable singletons
- Components must degrade gracefully without hydration
- All public APIs must be explicitly typed
- Use `@bubblesortt/nuxt-es-toolkit` with `use` prefix (e.g., `useGet` instead of `get`)

## Auto-Imports

Nuxt 4 provides automatic imports for:

- Vue 3 APIs (`ref`, `computed`, `onMounted`, etc.)
- Nuxt composables (`useFetch`, `useAsyncData`, `useRouter`, etc.)
- Components from `~/components` directory
- Composables from `~/composables` directory
- Utils from `~/utils` directory

### Guidelines:

- **Do NOT explicitly import auto-imported items** - rely on Nuxt's auto-import system
- **Follow Nuxt directory structure** for automatic discovery
- **Components**: Place in `~/components` with PascalCase naming (`.vue` or `.ts` files)
- **Composables**: Place in `~/composables` with `use` prefix
- **TypeScript support**: Auto-imports work with TypeScript; ensure proper type definitions
- **Manual imports**: Only for third-party libraries or items outside Nuxt's auto-import scope
- **Path aliases**: Use `~/` for root, `@/` for `src/` directory

Example of auto-import usage (no explicit import needed):

```vue
<script setup>
// No import needed for ref, computed, useFetch - Nuxt auto-imports them
const count = ref(0);
const doubled = computed(() => count.value * 2);

const { data } = await useFetch('/api/data');
</script>

<template>
  <!-- Component from ~/components is auto-imported -->
  <MyComponent :value="doubled" />
</template>
```

## Build Commands

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Start development server
npm run dev
# or
pnpm dev
# or
yarn dev

# Build for production
npm run build
# or
pnpm build
# or
yarn build

# Preview production build locally
npm run preview
# or
pnpm preview
# or
yarn preview
```

## Lint Commands

```bash
# Run ESLint
npm run lint
# or
pnpm lint
# or
yarn lint

# Run ESLint with auto-fix
npm run lint:fix
# or
pnpm lint:fix
# or
yarn lint:fix


```

## Test Commands

```bash
# Run all unit tests
npm run test:unit
# or
pnpm test:unit
# or
yarn test:unit

# Run unit tests in watch mode
npm run test:unit:watch
# or
pnpm test:unit:watch
# or
yarn test:unit:watch

# Run a single unit test file
npm run test:unit -- src/path/to/test.spec.ts
# or
pnpm test:unit src/path/to/test.spec.ts
# or
yarn test:unit src/path/to/test.spec.ts

# Run unit tests with coverage
npm run test:unit:coverage
# or
pnpm test:unit:coverage
# or
yarn test:unit:coverage

# Run e2e tests with Cypress
npm run test:e2e
# or
pnpm test:e2e
# or
yarn test:e2e

# Open Cypress UI
npm run test:e2e:open
# or
pnpm test:e2e:open
# or
yarn test:e2e:open
```

## Code Style Guidelines

### Imports

- Use ES module imports (`import`/`export`)
- **Nuxt auto-imports**: Do NOT explicitly import auto-imported items (Vue APIs, Nuxt composables, components from `~/components`, etc.)
- Group imports in this order (for non-auto-imported items):
  1. Vue and framework imports (only when auto-import not available)
  2. Third-party libraries (lodash, axios, etc.)
  3. Internal absolute imports (`@/`, `~/`)
  4. Internal relative imports (`./`, `../`)
  5. Type imports (use `import type` for types only)
- Use path aliases (`@/` for `src/`, `~` for root) as configured in `vite.config.ts`
- Avoid wildcard imports (`import * as`)
- Use named imports over default imports when possible

Example (showing only necessary imports):

```typescript
// Vue APIs (ref, computed) are auto-imported by Nuxt - NO explicit import needed
import { defineStore } from 'pinia'; // Pinia not auto-imported
import axios from 'axios';
import { useGet } from '@bubblesortt/nuxt-es-toolkit'; // use prefix convention
import { useSomeComposable } from '@/composables/useSomeComposable';
import type { User } from '@/types/user';
import MyComponent from './MyComponent.vue'; // Only import if component is NOT in ~/components
```

### Formatting

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings, backticks for template literals
- **Semicolons**: Include semicolons
- **Trailing commas**: Include in multiline objects/arrays
- **Line length**: 80-100 characters (configured in ESLint)
- **Vue SFC**: Use `<script setup>` for Composition API; template uses kebab-case tags

### Types

- Use TypeScript strictly; avoid `any`
- Define interfaces/types for component props, emits, and store state
- Use `interface` for object shapes, `type` for unions/tuples
- Prefer `const` assertions (`as const`) for literal values
- Use generics where appropriate (e.g., API responses)

### Naming Conventions

- **Variables/Functions**: camelCase
- **Types/Interfaces**: PascalCase
- **Constants**: UPPER_SNAKE_CASE for global constants, camelCase for local
- **Components**: PascalCase (e.g., `UserProfile.vue`)
- **Composables**: camelCase starting with "use" (e.g., `useUserStore`)
- **Stores**: camelCase ending with "Store" (e.g., `userStore`)
- **Files**: kebab-case for non-component files; PascalCase for Vue components

### Vue Conventions

- Use Composition API with `<script setup>`
- Define props with `defineProps<T>()` or `withDefaults`
- Define emits with `defineEmits<T>()`
- Use `ref` for reactive primitives, `reactive` for objects (prefer `ref` for consistency)
- Extract reusable logic into composables
- Use computed properties for derived state
- Use `watch` and `watchEffect` sparingly; prefer computed
- Component props: use kebab-case in templates, camelCase in script
- Event names: kebab-case (e.g., `@update-value`)

### Error Handling

- Use try/catch for async operations
- Throw errors with meaningful messages
- Use custom error types for domain errors
- Handle errors at component level with error boundaries (if implemented)
- Log errors to console in development; avoid logging in production

### Component Structure

Single File Component order:

1. `<template>` (if present)
2. `<script setup>`
3. `<style>` (scoped by default)

Within `<script setup>`:

1. Imports
2. Type definitions
3. Props/emits definitions
4. Composables (stores, routers)
5. Reactive state (ref, reactive)
6. Computed properties
7. Watchers
8. Lifecycle hooks
9. Methods
10. Exposes (if using `defineExpose`)

### Styling

- Use scoped styles (`<style scoped>`) by default
- Use CSS modules for complex styling needs
- Follow BEM or utility‑first (Tailwind) if configured
- Avoid deep selectors (`::v-deep`) unless necessary

## Git Conventions

- **Branch naming**: `feature/description`, `fix/description`, `docs/description`
- **Commit messages**: Conventional Commits format (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`)
- **PR titles**: Same as commit messages
- **Squash merges**: Preferred for feature branches

## Agent Instructions

- Always run lint and type checks before committing
- Write tests for new features and bug fixes
- Follow existing patterns in the codebase
- Update this file if project configuration changes
- Check for existing `.cursorrules`, `.github/copilot-instructions.md`, or `.specify` files for project‑specific rules
- Ensure all composables are SSR-safe
- Use `useAsyncData` for data fetching with SSR-safe patterns
- Avoid client-only browser APIs in shared logic
- Follow Nuxt 4.x conventions and check Nuxt LLM context for updates
- Use `@bubblesortt/nuxt-es-toolkit` with `use` prefix convention
- Verify components degrade gracefully without hydration

## Notes

This file is a generic template for a Nuxt 4.x + Vue 3 + TypeScript project. Update with actual project configuration once available.

Last updated: 2026-02-27

## Active Technologies

- TypeScript (strict mode), Nuxt 4.x, Vue 3, Node.js 18+ + `@bubblesortt/nuxt-es-toolkit`, Pinia, Vitest, Cypress, ESLint, Tailwind CSS with Nuxt module (001-project-setup)
- N/A (mock data in Pinia stores initially) (001-project-setup)

## Recent Changes

- 001-project-setup: Added TypeScript (strict mode), Nuxt 4.x, Vue 3, Node.js 18+ + `@bubblesortt/nuxt-es-toolkit`, Pinia, Vitest, Cypress, ESLint, Tailwind CSS with Nuxt module
