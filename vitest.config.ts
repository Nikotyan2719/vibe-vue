import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', '.nuxt', '.output', '.opencode', '**/node_modules/**', '**/*.e2e.{test,spec}.{js,ts}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['app/**/*.{ts,vue}'],
      exclude: ['app/**/*.{test,spec}.ts', 'app/**/*.d.ts', 'app/types/**']
    },
    setupFiles: ['./vitest.setup.ts']
  },
  resolve: {
    alias: {
      '~': new URL('./app', import.meta.url).pathname,
      '@': new URL('./app', import.meta.url).pathname
    }
  }
})
