import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('инициализируется с начальным значением', () => {
    const { count } = useCounter(5)
    expect(count.value).toBe(5)
  })

  it('инициализируется с 0 по умолчанию', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('увеличивает счетчик', () => {
    const { count, increment } = useCounter(1)
    increment()
    expect(count.value).toBe(2)
  })

  it('уменьшает счетчик', () => {
    const { count, decrement } = useCounter(5)
    decrement()
    expect(count.value).toBe(4)
  })

  it('сбрасывает счетчик', () => {
    const { count, increment, reset } = useCounter(10)
    increment()
    increment()
    reset()
    expect(count.value).toBe(10)
  })

  it('возвращает readonly счетчик', () => {
    const { count } = useCounter(3)
    expect(count.value).toBe(3)
  })
})
