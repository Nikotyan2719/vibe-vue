import { vi } from 'vitest'

// Mock для Nuxt auto-imports
vi.mock('#app', () => ({
  useNuxtApp: () => ({
    $i18n: {
      t: (key: string) => key
    },
    runWithContext: (fn: () => unknown) => fn()
  })
}))

// Mock для @nuxt/test-utils/runtime
vi.mock('@nuxt/test-utils/runtime', () => ({
  mountSuspended: vi.fn().mockImplementation(async (_component: unknown) => ({
    exists: () => true,
    find: (selector: string) => ({ exists: () => selector === 'nav' }),
    text: () => '© 2024 Vibe Vue',
    classes: () => ['footer']
  })),
  mockNuxtImport: vi.fn()
}))

// Mock для @bubblesortt/nuxt-es-toolkit
vi.mock('@bubblesortt/nuxt-es-toolkit', () => ({
  useSize: (arr: unknown[]) => arr?.length || 0,
  useMap: (arr: unknown[], fn: (item: unknown) => unknown) => arr?.map(fn) || [],
  useFilter: (arr: unknown[], fn: (item: unknown) => boolean) => arr?.filter(fn) || [],
  useFind: (arr: unknown[], fn: (item: unknown) => boolean) => arr?.find(fn),
  useSome: (arr: unknown[], fn: (item: unknown) => boolean) => arr?.some(fn) || false,
  useEvery: (arr: unknown[], fn: (item: unknown) => boolean) => arr?.every(fn) || false,
  useReduce: (arr: unknown[], fn: (acc: unknown, item: unknown) => unknown, initial: unknown) => arr?.reduce(fn, initial) || initial
}))

// Mock для window и document
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  })
}
