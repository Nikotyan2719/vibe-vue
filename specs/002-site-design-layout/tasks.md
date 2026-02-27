---
description: 'Task list for Site Design, Layout, and Lessons Page implementation'
---

# Tasks: Site Design, Layout, and Lessons Page

**Input**: Design documents from `/specs/001-site-design-layout/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: NOT requested - user explicitly asked for no tests, only ESLint checks

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and Tailwind CSS customization via SCSS as requested

- [ ] T001 Create SCSS directory structure for Tailwind customization: `app/assets/css/`
- [ ] T002 [P] Create Tailwind SCSS file with custom variables: `app/assets/css/tailwind.scss`
- [ ] T003 [P] Update Nuxt configuration to use SCSS file: `nuxt.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Ensure ESLint configuration is ready for TypeScript strict mode validation
- [ ] T005 [P] Verify Pinia store is accessible: `app/stores/useExampleStore.ts`
- [ ] T006 [P] Check existing layout structure: `app/layouts/default.vue`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Consistent Navigation Header (Priority: P1) 🎯 MVP

**Goal**: Implement SiteHeader component with navigation links and active link highlighting

**Independent Test**: Can be tested by rendering the header component independently and verifying it displays navigation links (Home, Lessons, About) and correctly highlights the active page.

### Implementation for User Story 1

- [ ] T007 [P] [US1] Create SiteHeader component with props interface: `app/components/SiteHeader.vue`
- [ ] T008 [US1] Implement navigation links (Home, Lessons, About) using NuxtLink in SiteHeader
- [ ] T009 [US1] Implement SSR-safe active link highlighting using `useRoute()` in SiteHeader
- [ ] T010 [US1] Update default layout to use SiteHeader component: `app/layouts/default.vue`
- [ ] T011 [US1] Add TypeScript interface for SiteHeader props following contracts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. Header displays on all pages with working navigation.

---

## Phase 4: User Story 2 - Informative Footer (Priority: P2)

**Goal**: Implement SiteFooter component with copyright information and optional links

**Independent Test**: Can be tested by rendering the footer component independently and verifying it displays copyright information and any configured links.

### Implementation for User Story 2

- [ ] T012 [P] [US2] Create SiteFooter component with props interface: `app/components/SiteFooter.vue`
- [ ] T013 [US2] Implement copyright text "Vibe Vue © 2026 - Learning platform for web developers" in SiteFooter
- [ ] T014 [US2] Add optional links prop for future expansion (Contact, Privacy Policy, etc.)
- [ ] T015 [US2] Update default layout to use SiteFooter component: `app/layouts/default.vue`
- [ ] T016 [US2] Add TypeScript interface for SiteFooter props following contracts

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently. Header and footer display consistently across pages.

---

## Phase 5: User Story 3 - Responsive Layout (Priority: P3)

**Goal**: Implement responsive design across all components for mobile, tablet, and desktop

**Independent Test**: Can be tested by viewing the site at different screen widths (320px, 768px, 1200px) and verifying that layout elements (header, main content, footer) adjust appropriately without horizontal scrolling or overlapping.

### Implementation for User Story 3

- [ ] T017 [P] [US3] Update SiteHeader with responsive Tailwind classes: `app/components/SiteHeader.vue`
- [ ] T018 [P] [US3] Update SiteFooter with responsive Tailwind classes: `app/components/SiteFooter.vue`
- [ ] T019 [US3] Update default layout with responsive padding and margins: `app/layouts/default.vue`
- [ ] T020 [US3] Implement mobile-first breakpoints (320px, 768px, 1200px) in all components
- [ ] T021 [US3] Ensure no horizontal scrolling on any screen size (320px to 1920px)

**Checkpoint**: At this point, all components should be fully responsive across all device sizes.

---

## Phase 6: User Story 4 - Browse All Lessons (Priority: P4)

**Goal**: Implement lessons page with complete list of lessons from Pinia store

**Independent Test**: Can be tested by navigating to the lessons page and verifying that all lessons from the data store are displayed with their titles and completion status.

### Implementation for User Story 4

- [ ] T022 [P] [US4] Create LessonsList component with props interface: `app/components/LessonsList.vue`
- [ ] T023 [US4] Implement lesson item display with title and completion status in LessonsList
- [ ] T024 [US4] Create lessons page component: `app/pages/lessons.vue`
- [ ] T025 [US4] Connect lessons page to Pinia store: `useExampleStore().lessons`
- [ ] T026 [US4] Pass lessons data from page to LessonsList component
- [ ] T027 [US4] Handle empty state (no lessons available) with friendly message
- [ ] T028 [US4] Implement visual distinction between completed and pending lessons
- [ ] T029 [US4] Add placeholder links for individual lesson pages (future feature)
- [ ] T030 [US4] Add TypeScript interface for LessonsList props following contracts

**Checkpoint**: At this point, all user stories should now be independently functional. Lessons page loads and displays all available lessons.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final validation

- [ ] T031 [P] Run ESLint validation: `npm run lint`
- [ ] T032 [P] Fix any ESLint errors across all modified files
- [ ] T033 [P] Run TypeScript type check: `npm run typecheck`
- [ ] T034 Fix any TypeScript errors (no `any` types, proper interfaces)
- [ ] T035 [P] Verify responsive design at breakpoints: 320px, 768px, 1200px
- [ ] T036 Verify header active link highlighting works correctly
- [ ] T037 Verify footer copyright displays on all pages
- [ ] T038 Verify lessons page loads within 2 seconds (performance check)
- [ ] T039 [P] Update verification checklist in quickstart.md with completion status
- [ ] T040 Final code review and cleanup

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Uses same layout as US1 but independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Enhances US1 and US2 components but independently testable
- **User Story 4 (P4)**: Can start after Foundational (Phase 2) - No dependencies on other stories (uses existing Pinia store)

### Within Each User Story

- Component creation before implementation
- Props/interfaces definition before component logic
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002, T003)
- All Foundational tasks marked [P] can run in parallel (T005, T006)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Within US1: T007 can run parallel to other setup
- Within US2: T012 can run parallel to other tasks
- Within US3: T017 and T018 can run in parallel
- Within US4: T022 and T024 can run in parallel
- Polish phase tasks marked [P] can run in parallel

---

## Parallel Example: User Story 4

```bash
# Launch component creation and page creation in parallel:
Task: "Create LessonsList component with props interface: app/components/LessonsList.vue"
Task: "Create lessons page component: app/pages/lessons.vue"

# Launch validation tasks in parallel:
Task: "Run ESLint validation: npm run lint"
Task: "Run TypeScript type check: npm run typecheck"
Task: "Verify responsive design at breakpoints: 320px, 768px, 1200px"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (Tailwind SCSS customization)
2. Complete Phase 2: Foundational (ESLint, store, layout verification)
3. Complete Phase 3: User Story 1 (SiteHeader with navigation)
4. **STOP and VALIDATE**: Test User Story 1 independently - header works, navigation links functional
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo (header + footer)
4. Add User Story 3 → Test independently → Deploy/Demo (responsive design)
5. Add User Story 4 → Test independently → Deploy/Demo (lessons page)
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (SiteHeader)
   - Developer B: User Story 2 (SiteFooter)  
   - Developer C: User Story 4 (Lessons page) - can start early since independent
3. Developer D: User Story 3 (Responsive design) - can enhance components as they're completed
4. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- User requested no unit/e2e tests - focus on ESLint validation and manual testing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Follow TypeScript strict mode (no `any` types)
- Use Nuxt auto-imports (no explicit imports for Vue APIs, composables, components)
- Ensure SSR-safe patterns (no browser-only APIs in component setup)
- Tailwind responsive classes: mobile-first (`sm:`, `md:`, `lg:` prefixes)
- Verify all file paths match Nuxt 4 app directory structure