# Data Model: Site Design, Layout, and Lessons Page

**Date**: 2026-02-27  
**Feature**: 001-site-design-layout

## Entities

### Lesson
Represents a learning unit in the platform. Displayed in the lessons list and can be marked as completed by users.

**Attributes**:
- `id`: number (required) - Unique identifier for the lesson
- `title`: string (required, max 100 chars) - Display title of the lesson
- `description`: string (optional) - Brief description of lesson content
- `completed`: boolean (required, default: false) - Whether the lesson has been completed by the user
- `category`: string (optional) - Lesson category (e.g., "CSS", "JavaScript", "HTML")
- `order`: number (optional) - Display order in the list

**Validation Rules**:
- `title` must be non-empty and trimmed
- `id` must be positive integer
- `completed` must be boolean

**State Transitions**:
- `pending` → `completed`: When user marks lesson as complete (via store action)
- `completed` → `pending`: If reset functionality is added (not in current scope)

**Relationships**:
- None for this feature (future: lessons may have content pages, exercises, comments)

### Layout Configuration
Defines the visual structure of the site, including header, footer, and main content area. Ensures consistent spacing, responsive breakpoints, and component placement across pages.

**Attributes**:
- `headerHeight`: string (optional) - CSS value for header height (e.g., "4rem")
- `footerHeight`: string (optional) - CSS value for footer height (e.g., "3rem")
- `maxContentWidth`: string (optional) - Maximum width of main content area (e.g., "1200px")
- `responsiveBreakpoints`: object (required) - Breakpoint definitions for responsive design
  - `mobile`: string (default: "320px")
  - `tablet`: string (default: "768px")
  - `desktop`: string (default: "1200px")
- `navLinks`: array (required) - Navigation link definitions
  - `to`: string (required) - Route path
  - `label`: string (required) - Display text
  - `icon`: string (optional) - Icon name/class

**Validation Rules**:
- `responsiveBreakpoints` values must be valid CSS length units
- `navLinks` must have at least one link
- Route paths must be valid Nuxt routes

**State Transitions**:
- Static configuration, no runtime state transitions

## Store Structure (Pinia)

### useExampleStore (existing)
Already contains lessons data. Will be used as-is.

**State**:
```typescript
interface ExampleState {
  counter: number
  title: string
  lessons: Array<{
    id: number
    title: string
    completed: boolean
  }>
}
```

**Actions**:
- `completeLesson(id: number)`: Marks lesson as completed (already exists)
- `reset()`: Resets all lessons to pending (already exists)

**Getters**:
- `completedLessons`: Returns filtered completed lessons
- `pendingLessons`: Returns filtered pending lessons
- `totalLessons`: Returns count of all lessons

## Component Data Flow

### Lessons Page
```
useExampleStore.lessons → LessonsList component → Lesson items
```

### Layout Components
```
Layout Configuration (static) → SiteHeader/SiteFooter components
Current Route (useRoute) → SiteHeader (active link highlighting)
```

## Data Validation

**Component Level**:
- `LessonsList` validates `lessons` prop is array
- Each lesson item validates required attributes

**Store Level**:
- Store initial state provides valid default lessons
- Actions validate input parameters (e.g., `completeLesson` checks `id` exists)

## Mock Data

Current store contains:
```typescript
lessons: [
  { id: 1, title: 'CSS Fundamentals', completed: false },
  { id: 2, title: 'JavaScript Essentials', completed: false },
  { id: 3, title: 'HTML Structure', completed: true }
]
```

This provides adequate test data for the lessons page implementation.