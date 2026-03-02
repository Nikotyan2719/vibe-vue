import { ROUTES } from './routes'

describe('ROUTES', () => {
  it('возвращает корректный объект для home', () => {
    expect(ROUTES.home()).toEqual({ name: 'index' })
  })

  it('возвращает корректный объект для about', () => {
    expect(ROUTES.about()).toEqual({ name: 'about' })
  })

  it('возвращает корректный объект для contact', () => {
    expect(ROUTES.contact()).toEqual({ name: 'contact' })
  })
})
