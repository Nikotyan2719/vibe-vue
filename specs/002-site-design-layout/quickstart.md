# Quick Start: Site Design, Layout, and Lessons Page

**Feature**: 001-site-design-layout  
**Date**: 2026-02-27

## Overview

This feature implements the core website structure including:
1. **Header component** - Consistent navigation across all pages
2. **Footer component** - Site information and links
3. **Improved responsive layout** - Mobile-first design with Tailwind
4. **Lessons page** - Complete list of available lessons

## Implementation Steps

### 1. Set Up Tailwind CSS Customization

Create SCSS file for Tailwind customization as requested:

```bash
mkdir -p app/assets/css
touch app/assets/css/tailwind.scss
```

Edit `app/assets/css/tailwind.scss`:
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --header-height: 4rem;
  --footer-height: 3rem;
  --content-max-width: 1200px;
}

.nav-link-active {
  @apply text-[var(--primary-color)] bg-[var(--primary-color)/0.1];
}
```

Update `nuxt.config.ts`:
```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss'
  }
})
```

### 2. Create Header Component

Create `app/components/SiteHeader.vue`:
```vue
<template>
  <header class="site-header">
    <!-- Implementation -->
  </header>
</template>

<script setup lang="ts">
// Use auto-imported useRoute()
</script>
```

### 3. Create Footer Component

Create `app/components/SiteFooter.vue`:
```vue
<template>
  <footer class="site-footer">
    <!-- Implementation -->
  </footer>
</template>

<script setup lang="ts">
// Props definition
</script>
```

### 4. Create LessonsList Component

Create `app/components/LessonsList.vue`:
```vue
<template>
  <div class="lessons-list">
    <!-- Loop through lessons prop -->
  </div>
</template>

<script setup lang="ts">
// Props definition with Lesson interface
</script>
```

### 5. Refactor Default Layout

Update `app/layouts/default.vue`:
```vue
<template>
  <div class="default-layout">
    <SiteHeader />
    <main class="layout-main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Auto-imports will handle SiteHeader and SiteFooter
</script>

<style scoped>
/* Keep existing responsive styles */
</style>
```

### 6. Create Lessons Page

Create `app/pages/lessons.vue`:
```vue
<template>
  <div class="lessons-page">
    <h1>All Lessons</h1>
    <LessonsList :lessons="store.lessons" />
  </div>
</template>

<script setup lang="ts">
const store = useExampleStore()
</script>
```

## Key Implementation Patterns

### SSR-Safe Component Design
- Use `useRoute()` instead of `window.location`
- No browser-only APIs in component setup
- Computed properties instead of `onMounted` for route-dependent logic

### TypeScript Strict Compliance
- Define interfaces for all component props
- Use `defineProps<T>()` with `withDefaults` for optional props
- No `any` types

### Responsive Design
- Mobile-first: base styles for 320px+
- Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Test at 320px, 768px, 1200px viewports

### Component Communication
- Parent→child: Props
- Child→parent: Events
- Global state: Pinia store
- Route params: Nuxt routing

## Verification Checklist

Before considering the feature complete:

- [ ] Header displays on all pages with Home, Lessons, About links
- [ ] Active link highlighted in header (e.g., Lessons page highlights "Lessons")
- [ ] Footer displays copyright text on all pages
- [ ] Layout adapts to mobile (≤768px) and desktop (≥1200px)
- [ ] No horizontal scrolling on any screen size
- [ ] Lessons page displays all lessons from store
- [ ] Completed lessons visually distinct from pending lessons
- [ ] Empty state handled (no lessons message)
- [ ] ESLint passes with no errors
- [ ] TypeScript compilation passes (`npm run typecheck`)

## Development Commands

```bash
# Start dev server
npm run dev

# Check TypeScript
npm run typecheck

# Run ESLint
npm run lint
npm run lint:fix  # Auto-fix

# Build for production
npm run build
npm run preview   # Preview build locally
```

## Testing Notes

User requested no unit/e2e tests for this feature. Focus on:
- Manual testing of responsive behavior
- Visual verification of component rendering
- Navigation functionality
- ESLint and TypeScript validation

## Future Enhancements

1. **Lesson categories filter** - Add filter by CSS/JS/HTML
2. **Search functionality** - Search lesson titles
3. **Progress tracking** - Visual progress indicator
4. **Dark mode** - Toggle light/dark theme
5. **Accessibility improvements** - ARIA labels, keyboard navigation

## Troubleshooting

**Issue**: Components not auto-imported  
**Solution**: Ensure component files are in `app/components/` with PascalCase names

**Issue**: Tailwind styles not applying  
**Solution**: Verify `nuxt.config.ts` Tailwind CSS path, restart dev server

**Issue**: TypeScript errors in props  
**Solution**: Define interfaces explicitly, avoid implicit `any`