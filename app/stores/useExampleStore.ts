import { defineStore } from 'pinia'

export interface ExampleState {
  counter: number
  title: string
  lessons: Array<{
    id: number
    title: string
    completed: boolean
  }>
}

export const useExampleStore = defineStore('example', {
  state: (): ExampleState => ({
    counter: 0,
    title: 'Vibe Vue Learning Platform',
    lessons: [
      { id: 1, title: 'CSS Fundamentals', completed: false },
      { id: 2, title: 'JavaScript Essentials', completed: false },
      { id: 3, title: 'HTML Structure', completed: true }
    ]
  }),
  getters: {
    completedLessons: state => state.lessons.filter(lesson => lesson.completed),
    pendingLessons: state => state.lessons.filter(lesson => !lesson.completed),
    totalLessons: state => state.lessons.length
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    completeLesson(id: number) {
      const lesson = this.lessons.find(lesson => lesson.id === id)
      if (lesson) {
        lesson.completed = true
      }
    },
    reset() {
      this.counter = 0
      this.lessons.forEach((lesson) => {
        lesson.completed = false
      })
    }
  }
})
