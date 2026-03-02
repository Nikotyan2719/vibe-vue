import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppHeader from '../AppHeader.vue'

describe('AppHeader', () => {
  it('рендерит компонент', async () => {
    const wrapper = await mountSuspended(AppHeader)
    expect(wrapper.exists()).toBe(true)
  })

  it('содержит навигационные элементы', async () => {
    const wrapper = await mountSuspended(AppHeader)
    expect(wrapper.find('nav').exists()).toBe(true)
  })
})
