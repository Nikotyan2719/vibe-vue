<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">
      Empty Page
    </h1>
    <p class="text-base-content">
      This is a simple page with header.
    </p>
    <div class="mt-8">
      <p>
        Store counter: {{ store.counter }}
      </p>
      <button
        class="px-4 py-2 bg-primary text-primary-content rounded mr-2"
        @click="store.increment"
      >
        Increment
      </button>
      <button
        class="px-4 py-2 bg-secondary text-secondary-content rounded"
        @click="store.decrement"
      >
        Decrement
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useExampleStore()
</script>