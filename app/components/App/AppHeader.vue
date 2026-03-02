<template>
  <header class="bg-base-200 border-b border-base-300 px-8 py-4">
    <div class="max-w-[1200px] mx-auto">
      <h1 class="text-xl font-bold">
        {{ props.title }}
      </h1>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>
