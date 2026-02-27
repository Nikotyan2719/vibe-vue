# Contract: NPM Scripts Interface

**Feature**: Project Setup and Configuration  
**Date**: 2026-02-27  
**Type**: Development Interface Contract

## Overview

This contract defines the NPM scripts interface that developers will use to interact with the project. These scripts provide standardized commands for development, building, testing, and quality assurance.

## Script Definitions

### Development

| Script              | Purpose                                 | Expected Behavior                                                | Exit Codes           |
| ------------------- | --------------------------------------- | ---------------------------------------------------------------- | -------------------- |
| `npm run dev`       | Start development server                | Starts Nuxt development server on localhost:3000 with hot reload | 0: Success, 1: Error |
| `npm run dev:debug` | Start development server with debugging | Same as `dev` with additional debug output                       | 0: Success, 1: Error |

### Building

| Script            | Purpose                  | Expected Behavior                                               | Exit Codes                 |
| ----------------- | ------------------------ | --------------------------------------------------------------- | -------------------------- |
| `npm run build`   | Build for production     | Compiles project for production, outputs to `.output` directory | 0: Success, 1: Build error |
| `npm run preview` | Preview production build | Serves production build locally for testing                     | 0: Success, 1: Error       |

### Code Quality

| Script                 | Purpose                   | Expected Behavior                         | Exit Codes                                 |
| ---------------------- | ------------------------- | ----------------------------------------- | ------------------------------------------ |
| `npm run lint`         | Run ESLint                | Checks code for style and quality issues  | 0: No issues, 1: Issues found              |
| `npm run lint:fix`     | Fix ESLint issues         | Automatically fixes fixable ESLint issues | 0: Success, 1: Error                       |
| `npm run format`       | Format code with Prettier | Formats code according to Prettier rules  | 0: Success, 1: Error                       |
| `npm run format:check` | Check formatting          | Checks if code is properly formatted      | 0: Properly formatted, 1: Needs formatting |
| `npm run typecheck`    | TypeScript type checking  | Runs TypeScript compiler to check types   | 0: No errors, 1: Type errors               |

### Testing

| Script                       | Purpose                      | Expected Behavior                       | Exit Codes                       |
| ---------------------------- | ---------------------------- | --------------------------------------- | -------------------------------- |
| `npm run test:unit`          | Run unit tests               | Executes Vitest unit tests              | 0: All tests pass, 1: Tests fail |
| `npm run test:unit:watch`    | Run unit tests in watch mode | Executes Vitest in watch mode           | 0: Success, 1: Error             |
| `npm run test:unit:coverage` | Run unit tests with coverage | Executes Vitest with coverage reporting | 0: Success, 1: Error             |
| `npm run test:e2e`           | Run E2E tests                | Executes Cypress end-to-end tests       | 0: All tests pass, 1: Tests fail |
| `npm run test:e2e:open`      | Open Cypress UI              | Opens Cypress test runner UI            | 0: Success, 1: Error             |

### Utility

| Script            | Purpose               | Expected Behavior                                      | Exit Codes           |
| ----------------- | --------------------- | ------------------------------------------------------ | -------------------- |
| `npm run prepare` | Pre-commit setup      | Sets up git hooks (if configured)                      | 0: Success, 1: Error |
| `npm run clean`   | Clean build artifacts | Removes build directories (`.output`, `.nuxt`, `dist`) | 0: Success, 1: Error |

## Input/Output Expectations

### `npm run dev`

- **Input**: Optional environment variables (PORT, HOST, NODE_ENV)
- **Output**: Development server running on specified port (default: 3000)
- **Side effects**: Creates `.nuxt` directory, watches for file changes

### `npm run build`

- **Input**: Environment variables for build configuration
- **Output**: Production-ready artifacts in `.output` directory
- **Side effects**: May create temporary build files

### `npm run lint`

- **Input**: Source files matching patterns in ESLint config
- **Output**: Console output listing linting errors/warnings
- **Side effects**: None (read-only)

### `npm run test:unit`

- **Input**: Test files matching `**/*.spec.ts` or `**/*.test.ts`
- **Output**: Test results summary in console, exit code indicates pass/fail
- **Side effects**: May create coverage reports in `coverage/` directory

## Error Handling

All scripts should:

1. Provide clear error messages indicating what failed
2. Exit with appropriate non-zero exit codes
3. Not expose sensitive information in error output
4. Include actionable suggestions for common errors

## Versioning

This contract is versioned with the project. Breaking changes to script interfaces require:

1. Update to this contract document
2. Communication to developers
3. Migration path for existing usage

## Compliance

The implemented NPM scripts must adhere to this contract. Deviations must be documented and justified.
