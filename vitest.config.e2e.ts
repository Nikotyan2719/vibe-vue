import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['**/*.e2e.{test,spec}.{js,ts}'],
    exclude: ['node_modules', '.nuxt', '.output', '.opencode', '**/node_modules/**'],
    environment: 'node',
    testTimeout: 60000,
    hookTimeout: 60000,
    setupFiles: ['./vitest.setup.e2e.ts']
  }
})
