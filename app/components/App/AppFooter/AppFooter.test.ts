import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppFooter from '../AppFooter.vue'

describe('AppFooter', () => {
  it('рендерит компонент', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.exists()).toBe(true)
  })

  it('содержит текст футера', async () => {
    const wrapper = await mountSuspended(AppFooter)
    expect(wrapper.text()).toContain('©')
  })
})
