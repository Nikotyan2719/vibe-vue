import { vi } from 'vitest'

// Mock для process.env в e2e тестах
vi.stubGlobal('process', {
  ...process,
  env: {
    ...process.env,
    TEST_HOST: process.env.TEST_HOST || 'http://localhost:3000',
    BROWSER_TYPE: process.env.BROWSER_TYPE || 'chromium',
    WATCH: process.env.WATCH || 'N'
  }
})
