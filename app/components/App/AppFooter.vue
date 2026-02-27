<template>
  <footer class="bg-base-200 border-t border-base-300 px-4 py-6">
    <div class="max-w-[1200px] mx-auto text-center">
      <p class="text-base-content text-sm">
        {{ props.copyright }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  copyright?: string
}>(), {
  copyright: '© 2026 Project'
})
</script>