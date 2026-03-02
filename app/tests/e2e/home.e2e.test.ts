import { createPage, setup } from '@nuxt/test-utils/e2e'

describe('Пример e2e теста', async () => {
  await setup({
    host: process.env.TEST_HOST ?? 'http://localhost:3000',
    browserOptions: {
      type: (process.env.BROWSER_TYPE as 'chromium' | 'firefox' | 'webkit') ?? 'chromium',
      launch: {
        headless: process.env.WATCH !== 'Y'
      }
    }
  })

  it('Загружает главную страницу', async () => {
    const page = await createPage('/')
    const title = await page.title()
    expect(title).toBe('Vibe Vue')
  })

  it('Содержит навигацию', async () => {
    const page = await createPage('/')
    const nav = await page.getByRole('navigation').count()
    expect(nav).toBeGreaterThan(0)
  })
})
