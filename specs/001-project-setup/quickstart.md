# Quickstart Guide: Project Setup

**Feature**: Project Setup and Configuration  
**Date**: 2026-02-27

## Overview

This guide provides step-by-step instructions to set up and verify the Vibe Vue project development environment.

## Prerequisites

- Node.js 18 or higher
- npm 9 or higher (or yarn/pnpm)
- Git

## Setup Instructions

### 1. Clone and Navigate

```bash
git clone <repository-url>
cd vibe-vue
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Verify Installation

Check that essential dependencies are installed:

```bash
npm list nuxt vue typescript pinia @nuxtjs/tailwindcss
```

### 4. Start Development Server

```bash
npm run dev
```

**Expected outcome**:

- Server starts on http://localhost:3000
- No error messages in console
- Basic homepage loads in browser

### 5. Verify Code Quality Tools

```bash
npm run lint
npm run typecheck
```

**Expected outcome**: Both commands exit with code 0 (no errors).

### 6. Run Tests

```bash
npm run test:unit
```

**Expected outcome**: Unit tests pass (at least one test exists and passes).

### 7. Build for Production

```bash
npm run build
```

**Expected outcome**: Build completes successfully, creating `.output` directory.

## Project Structure Tour

```
├── components/          # Reusable Vue components
├── composables/         # Composition API functions
├── stores/              # Pinia state stores
├── pages/               # Route-based pages
├── layouts/             # Page layout components
├── assets/              # Styles, images, fonts
├── public/              # Static files
├── tests/               # Test files
└── [configuration files at root]
```

## Common Tasks

### Creating a New Component

1. Add component to `components/` directory:

   ```vue
   <!-- components/MyComponent.vue -->
   <script setup lang="ts">
   // Component logic
   </script>

   <template>
     <div>My Component</div>
   </template>

   <style scoped>
   /* Component styles */
   </style>
   ```

2. Use component without importing (auto-imports):
   ```vue
   <MyComponent />
   ```

### Adding a Pinia Store

1. Create store in `stores/` directory:

   ```ts
   // stores/useCounterStore.ts
   export const useCounterStore = defineStore('counter', {
     state: () => ({ count: 0 }),
     actions: {
       increment() {
         this.count++;
       }
     }
   });
   ```

2. Use in component:
   ```ts
   const counter = useCounterStore();
   counter.increment();
   ```

### Writing Tests

**Unit test** (Vitest):

```ts
// tests/unit/myComponent.spec.ts
import { mount } from '@vue/test-utils';
import MyComponent from '~/components/MyComponent.vue';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.text()).toContain('My Component');
  });
});
```

**E2E test** (Cypress):

```ts
// tests/e2e/homepage.cy.ts
describe('Homepage', () => {
  it('loads successfully', () => {
    cy.visit('/');
    cy.contains('Welcome to Vibe Vue');
  });
});
```

## Troubleshooting

### Development Server Won't Start

1. Check Node.js version: `node --version` (should be 18+)
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
4. Check port 3000 isn't in use

### TypeScript Errors

1. Ensure strict mode is enabled in `tsconfig.json`
2. Run `npm run typecheck` to see all errors
3. Check for missing type definitions

### ESLint/Prettier Issues

1. Run `npm run lint:fix` to auto-fix issues
2. Run `npm run format` to format code
3. Check editor integration (VS Code extensions recommended)

### Test Failures

1. Ensure test files have `.spec.ts` or `.test.ts` extension
2. Check test setup in `vitest.config.ts`
3. Run `npm run test:unit:watch` for interactive debugging

## Next Steps

After setup verification:

1. Explore the example homepage component
2. Review configuration files
3. Create your first feature branch using project conventions
4. Refer to AGENTS.md for development guidelines

## Success Verification

Complete these checks to confirm successful setup:

- [ ] `npm run dev` starts server within 10 seconds
- [ ] Homepage loads at http://localhost:3000
- [ ] `npm run lint` passes with zero errors
- [ ] `npm run typecheck` passes with zero errors
- [ ] `npm run test:unit` runs at least one passing test
- [ ] `npm run build` completes within 2 minutes
- [ ] `npm run preview` serves production build

## Getting Help

- Check project documentation in `docs/` directory
- Review configuration files for specific settings
- Refer to Nuxt 4 documentation: https://nuxt.com/docs
- Consult Vue 3 documentation: https://vuejs.org/guide
