---
description: 'Task list for project setup and configuration'
---

# Tasks: Project Setup and Configuration

**Input**: Design documents from `/specs/001-project-setup/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - no test tasks included as not explicitly requested in feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: Standard Nuxt directory structure as defined in plan.md
- Paths follow Nuxt 4.x conventions with auto-import support

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project directory structure per implementation plan
- [x] T002 [P] Create components directory structure (components/, components/ui/, components/layout/)
- [x] T003 [P] Create other Nuxt directories (composables/, stores/, pages/, layouts/, middleware/, plugins/, public/, assets/, utils/, types/)
- [x] T004 [P] Create tests directory structure (tests/unit/, tests/e2e/)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Initialize package.json with project metadata (name: "vibe-vue", version: "0.0.0", description) in package.json
- [x] T006 [P] Add Node.js engine requirement (>=18) to package.json
- [x] T007 [P] Add basic npm scripts skeleton (dev, build, preview, lint, format, test:unit, test:e2e) to package.json
- [x] T008 [P] Create README.md with project overview and setup instructions

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Basic Project Setup (Priority: P1) 🎯 MVP

**Goal**: Initialize Nuxt 4 project with TypeScript, basic structure, and essential dependencies

**Independent Test**: Can be tested by running `npm run dev` and verifying the development server starts without errors, displaying a basic Nuxt application.

### Implementation for User Story 1

- [ ] T009 [P] [US1] Install Nuxt 4 core dependencies (nuxt, vue, @vue/compiler-sfc) via npm
- [ ] T010 [P] [US1] Install TypeScript dependencies (typescript, @types/node, vue-tsc) via npm
- [ ] T011 [P] [US1] Create basic nuxt.config.ts with SSR-first configuration and TypeScript support
- [ ] T012 [P] [US1] Create tsconfig.json with strict mode enabled and no `any` usage allowed
- [ ] T013 [US1] Create basic homepage component (components/HomePage.vue) to verify setup works
- [ ] T014 [US1] Create default layout (layouts/default.vue) with basic structure
- [ ] T015 [US1] Create index page (pages/index.vue) that uses HomePage component
- [ ] T016 [US1] Update package.json scripts with correct dev, build, and preview commands

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Code Quality Tooling (Priority: P2)

**Goal**: Configure ESLint, Prettier, and code quality tools

**Independent Test**: Can be tested by running `npm run lint` and verifying it passes on clean code and fails on code with violations.

### Implementation for User Story 2

- [ ] T017 [P] [US2] Install ESLint dependencies (@nuxt/eslint-config, eslint, @typescript-eslint/parser, @typescript-eslint/eslint-plugin) via npm
- [ ] T018 [P] [US2] Install Prettier dependencies (prettier, eslint-config-prettier, eslint-plugin-prettier) via npm
- [ ] T019 [P] [US2] Create eslint.config.js with Nuxt, TypeScript, and Prettier integration
- [ ] T020 [P] [US2] Create prettier.config.js with project formatting rules
- [ ] T021 [US2] Update package.json scripts with lint, lint:fix, format, format:check, typecheck commands
- [ ] T022 [US2] Create .eslintignore and .prettierignore files with appropriate exclusions
- [ ] T023 [US2] Add lint-staged and husky configuration for pre-commit hooks (optional but recommended)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Development Environment & Integration (Priority: P3)

**Goal**: Configure testing frameworks, state management, and development tools

**Independent Test**: Can be tested by running `npm run test:unit` and verifying test suite executes, and by confirming development tools are available.

### Implementation for User Story 3

- [ ] T024 [P] [US3] Install Pinia for state management (pinia, @pinia/nuxt) via npm
- [ ] T025 [P] [US3] Install Vitest for unit testing (vitest, @vue/test-utils, @vitest/ui, jsdom) via npm
- [ ] T026 [P] [US3] Install Cypress for E2E testing (cypress, @cypress/nuxt) via npm
- [ ] T027 [P] [US3] Install Tailwind CSS with Nuxt module (@nuxtjs/tailwindcss, tailwindcss) via npm
- [ ] T028 [P] [US3] Install @bubblesortt/nuxt-es-toolkit via npm
- [ ] T029 [US3] Update nuxt.config.ts with Pinia, Tailwind, and testing module configurations
- [ ] T030 [US3] Create vitest.config.ts with Vue and TypeScript support
- [ ] T031 [US3] Create cypress.config.ts with Nuxt SSR support
- [ ] T032 [US3] Create tailwind.config.js with responsive design configuration
- [ ] T033 [US3] Create example Pinia store (stores/useExampleStore.ts) with SSR-safe patterns
- [ ] T034 [US3] Create example unit test (tests/unit/example.spec.ts) to verify testing setup
- [ ] T035 [US3] Create example E2E test (tests/e2e/homepage.cy.ts) to verify Cypress setup
- [ ] T036 [US3] Update package.json scripts with test:unit:watch, test:unit:coverage, test:e2e:open commands
- [ ] T037 [US3] Update homepage component to use Tailwind CSS classes for responsive design

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T038 [P] Update README.md with complete setup instructions and project overview
- [ ] T039 [P] Create .gitignore file with Nuxt, Node.js, and IDE exclusions
- [ ] T040 [P] Create .editorconfig for consistent editor settings
- [ ] T041 [P] Create .nvmrc with Node.js version specification
- [ ] T042 Verify all npm scripts work correctly (dev, build, lint, test:unit)
- [ ] T043 Run quickstart.md validation steps to ensure setup is complete
- [ ] T044 Test responsive design by checking homepage on different screen sizes
- [ ] T045 Verify SSR-first architecture by checking page source for rendered content
- [ ] T046 Perform final TypeScript strict mode check with `npm run typecheck`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all installation tasks for User Story 1 together:
Task: "Install Nuxt 4 core dependencies (nuxt, vue, @vue/compiler-sfc) via npm"
Task: "Install TypeScript dependencies (typescript, @types/node, vue-tsc) via npm"

# Launch all configuration tasks for User Story 1 together:
Task: "Create basic nuxt.config.ts with SSR-first configuration and TypeScript support"
Task: "Create tsconfig.json with strict mode enabled and no `any` usage allowed"
```

## Parallel Example: User Story 3

```bash
# Launch all dependency installations for User Story 3 together:
Task: "Install Pinia for state management (pinia, @pinia/nuxt) via npm"
Task: "Install Vitest for unit testing (vitest, @vue/test-utils, @vitest/ui, jsdom) via npm"
Task: "Install Cypress for E2E testing (cypress, @cypress/nuxt) via npm"
Task: "Install Tailwind CSS with Nuxt module (@nuxtjs/tailwindcss, tailwindcss) via npm"
Task: "Install @bubblesortt/nuxt-es-toolkit via npm"

# Launch all configuration tasks for User Story 3 together:
Task: "Create vitest.config.ts with Vue and TypeScript support"
Task: "Create cypress.config.ts with Nuxt SSR support"
Task: "Create tailwind.config.js with responsive design configuration"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently (run `npm run dev`, verify homepage loads)
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently (dev server works) → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently (linting works) → Deploy/Demo
4. Add User Story 3 → Test independently (testing works) → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Nuxt + TypeScript setup)
   - Developer B: User Story 2 (ESLint + Prettier setup)
   - Developer C: User Story 3 (Testing + Tailwind setup)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Verify all npm scripts work at each phase
- Ensure TypeScript strict mode is enforced throughout
