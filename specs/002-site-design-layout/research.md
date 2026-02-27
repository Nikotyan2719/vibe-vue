# Research: Site Design, Layout, and Lessons Page

**Date**: 2026-02-27  
**Feature**: 001-site-design-layout  
**Purpose**: Resolve technical unknowns and establish implementation patterns

## Research Tasks

### 1. Tailwind CSS Customization via SCSS

**Question**: How to customize Tailwind CSS variables through SCSS files instead of tailwind.config.js, as requested by user?

**Findings**:
- The `@nuxtjs/tailwindcss` module supports CSS/SCSS imports via its `cssPath` configuration option
- Tailwind variables can be overridden in SCSS using `@apply` directives and custom CSS properties
- The module processes `tailwind.config.js` first, but CSS customizations can override these values

**Decision**: Create a SCSS file (`app/assets/css/tailwind.scss`) that imports Tailwind layers and defines custom variables. Configure `@nuxtjs/tailwindcss` module to use this file.

**Rationale**: User explicitly requested SCSS-based customization for maintainability and design token management. This approach keeps Tailwind config minimal and moves design tokens to SCSS.

**Implementation**:
- Create `app/assets/css/tailwind.scss` with:
  ```scss
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  :root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    // Additional design tokens
  }
  
  .nav-link-active {
    @apply text-[var(--primary-color)] bg-[var(--primary-color)/0.1];
  }
  ```
- Update `nuxt.config.ts` to configure Tailwind module to use this CSS file

### 2. Component Architecture for Reusability

**Question**: How to properly extract header and footer into separate components while maintaining SSR compatibility and Nuxt auto-imports?

**Findings**:
- Nuxt 4 auto-imports components from `app/components/` using PascalCase naming
- Components should use `<script setup>` with TypeScript for props typing
- Props should be explicitly defined with `defineProps<T>()`
- Components should be SSR-safe (no browser-only APIs in setup)

**Decision**: Create three new components: `SiteHeader.vue`, `SiteFooter.vue`, `LessonsList.vue` in `app/components/`. Refactor `default.vue` layout to use these components.

**Rationale**: Separation of concerns improves maintainability, enables reuse, and follows Nuxt conventions. Auto-imports simplify usage without manual imports.

**Implementation**:
- `SiteHeader.vue`: Receives `currentRoute` prop (or uses `useRoute` composable) to highlight active link
- `SiteFooter.vue`: Accepts optional `links` prop for future expansion
- `LessonsList.vue`: Receives `lessons` prop from store, emits lesson selection events

### 3. SSR-Safe Active Link Highlighting

**Question**: How to highlight the active navigation link in the header while maintaining SSR compatibility and graceful degradation?

**Findings**:
- Nuxt's `useRoute()` composable is SSR-safe and provides current route information
- Active link can be determined by comparing `route.path` with link destinations
- CSS classes should be applied on client side but default to neutral state for SSR

**Decision**: Use `useRoute()` in `SiteHeader` component with `onMounted` guard for client-side enhancements, or compute active class based on route path.

**Rationale**: `useRoute()` works on both server and client. Highlighting enhances UX but navigation works without it (graceful degradation).

**Implementation**:
```vue
<script setup lang="ts">
const route = useRoute()
const isActive = (path: string) => route.path === path
</script>

<template>
  <nav>
    <NuxtLink to="/" :class="{ 'nav-link-active': isActive('/') }">Home</NuxtLink>
    <!-- etc -->
  </nav>
</template>
```

### 4. Lessons Page Data Fetching Pattern

**Question**: How to fetch lessons data for the lessons page while following SSR-safe patterns?

**Findings**:
- Pinia stores are SSR-safe when properly configured with Nuxt plugin
- Existing `useExampleStore` already contains mock lessons data
- For SSR, store should be initialized with default state that works on server

**Decision**: Use the existing Pinia store directly in the lessons page component. No need for `useAsyncData` since data is local mock data.

**Rationale**: Data is static mock data in store, not fetched from API. Store is already SSR-safe via `@pinia/nuxt` plugin.

**Implementation**:
- Create `app/pages/lessons.vue` that:
  - Accesses `useExampleStore()` to get lessons
  - Passes lessons to `LessonsList` component
  - Handles empty/error states

### 5. Responsive Design Implementation

**Question**: How to implement fully responsive layout across all screen sizes (320px to 1920px+)?

**Findings**:
- Tailwind CSS provides responsive utilities (e.g., `sm:`, `md:`, `lg:` prefixes)
- Mobile-first approach: base styles for mobile, breakpoints for larger screens
- Existing layout already has responsive media queries at 768px

**Decision**: Enhance existing responsive design using Tailwind's responsive utilities and ensure breakpoints at 320px, 768px, 1200px.

**Rationale**: Follows mobile-first principle and leverages Tailwind's built-in responsive system.

**Implementation**:
- Update layout components to use Tailwind responsive classes:
  - Header navigation: `flex flex-col md:flex-row`
  - Content padding: `p-4 md:p-8 lg:p-12`
  - Max widths: `max-w-full md:max-w-3xl lg:max-w-6xl`

## Consolidated Decisions

1. **Styling**: SCSS-based Tailwind customization via dedicated CSS file
2. **Components**: Three new reusable components following Nuxt auto-import conventions
3. **Navigation**: SSR-safe active link highlighting using `useRoute()`
4. **Data**: Use existing Pinia store for lessons data
5. **Responsive**: Mobile-first Tailwind utilities with three breakpoints

All research questions resolved. Proceed to Phase 1 design.