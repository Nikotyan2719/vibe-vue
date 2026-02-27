# Component Contracts: Site Design, Layout, and Lessons Page

**Date**: 2026-02-27  
**Feature**: 001-site-design-layout

## Purpose
Define TypeScript interfaces for component props to ensure type safety and clear component APIs.

## Component: SiteHeader

### Props Interface
```typescript
interface SiteHeaderProps {
  /**
   * Optional custom CSS class for the header container
   */
  class?: string
  
  /**
   * Optional logo URL or component to display in header
   */
  logo?: string
  
  /**
   * Optional array of additional navigation links
   * Default links (Home, Lessons, About) are always included
   */
  additionalLinks?: Array<{
    to: string
    label: string
    icon?: string
  }>
}
```

### Default Props
```typescript
const props = withDefaults(defineProps<SiteHeaderProps>(), {
  additionalLinks: () => []
})
```

### Emitted Events
```typescript
interface SiteHeaderEmits {
  /**
   * Emitted when a navigation link is clicked
   * @param link - The clicked link object
   */
  (e: 'navigate', link: { to: string; label: string }): void
}
```

## Component: SiteFooter

### Props Interface
```typescript
interface SiteFooterProps {
  /**
   * Optional custom CSS class for the footer container
   */
  class?: string
  
  /**
   * Optional copyright text
   * Default: "Vibe Vue © 2026 - Learning platform for web developers"
   */
  copyright?: string
  
  /**
   * Optional array of footer links (e.g., Contact, Privacy Policy)
   */
  links?: Array<{
    to: string
    label: string
    external?: boolean  // Whether link opens in new tab
  }>
}
```

### Default Props
```typescript
const props = withDefaults(defineProps<SiteFooterProps>(), {
  copyright: 'Vibe Vue © 2026 - Learning platform for web developers',
  links: () => []
})
```

## Component: LessonsList

### Props Interface
```typescript
interface Lesson {
  id: number
  title: string
  completed: boolean
  description?: string
  category?: string
}

interface LessonsListProps {
  /**
   * Array of lessons to display
   */
  lessons: Lesson[]
  
  /**
   * Optional loading state
   */
  loading?: boolean
  
  /**
   * Optional error message
   */
  error?: string
  
  /**
   * Optional CSS class for the list container
   */
  class?: string
  
  /**
   * Whether to show category filter (future feature)
   * @default false
   */
  showCategoryFilter?: boolean
}
```

### Default Props
```typescript
const props = withDefaults(defineProps<LessonsListProps>(), {
  lessons: () => [],
  loading: false,
  error: '',
  showCategoryFilter: false
})
```

### Emitted Events
```typescript
interface LessonsListEmits {
  /**
   * Emitted when a lesson item is clicked
   * @param lesson - The clicked lesson object
   */
  (e: 'select-lesson', lesson: Lesson): void
  
  /**
   * Emitted when retry is requested after error
   */
  (e: 'retry'): void
}
```

## Page: LessonsPage

### Data Requirements
- Requires access to `useExampleStore().lessons`
- Should handle loading/error states from store (if async data fetching added later)

### Route Parameters
- None for initial implementation
- Future: `/lessons/:category` for filtered view

## Layout: DefaultLayout

### Slot Interface
```typescript
// Default layout provides a single default slot
// No props required
```

## Usage Examples

### SiteHeader
```vue
<SiteHeader :additional-links="[{ to: '/contact', label: 'Contact' }]" />
```

### SiteFooter
```vue
<SiteFooter
  :links="[
    { to: '/privacy', label: 'Privacy Policy' },
    { to: '/terms', label: 'Terms', external: true }
  ]"
/>
```

### LessonsList
```vue
<LessonsList
  :lessons="store.lessons"
  :loading="isLoading"
  :error="errorMessage"
  @select-lesson="handleLessonSelect"
/>
```