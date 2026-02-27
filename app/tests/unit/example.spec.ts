import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useExampleStore } from '~/stores/useExampleStore'

describe('Example Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have initial state', () => {
    const store = useExampleStore()
    expect(store.counter).toBe(0)
    expect(store.title).toBe('Vibe Vue Learning Platform')
    expect(store.lessons).toHaveLength(3)
  })

  it('should increment counter', () => {
    const store = useExampleStore()
    store.increment()
    expect(store.counter).toBe(1)
    store.increment()
    expect(store.counter).toBe(2)
  })

  it('should decrement counter', () => {
    const store = useExampleStore()
    store.increment()
    store.increment()
    store.decrement()
    expect(store.counter).toBe(1)
  })

  it('should complete a lesson', () => {
    const store = useExampleStore()
    const lessonId = 1
    const lesson = store.lessons.find(l => l.id === lessonId)
    expect(lesson).toBeDefined()
    expect(lesson!.completed).toBe(false)

    store.completeLesson(lessonId)
    expect(lesson!.completed).toBe(true)
  })

  it('should calculate completed lessons', () => {
    const store = useExampleStore()
    expect(store.completedLessons).toHaveLength(1)
    expect(store.completedLessons[0]!.id).toBe(3)
  })

  it('should calculate pending lessons', () => {
    const store = useExampleStore()
    expect(store.pendingLessons).toHaveLength(2)
    expect(store.pendingLessons.map(l => l.id)).toEqual([1, 2])
  })

  it('should reset store', () => {
    const store = useExampleStore()
    store.increment()
    store.completeLesson(1)
    store.reset()

    expect(store.counter).toBe(0)
    expect(store.lessons.every(l => !l.completed)).toBe(true)
  })
})
