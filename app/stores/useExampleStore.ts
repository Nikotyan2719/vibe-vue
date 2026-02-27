import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    reset() {
      this.counter = 0
    }
  }
})
