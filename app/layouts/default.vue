<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 px-4 py-8 md:px-8 md:py-12 max-w-[1200px] mx-auto w-full">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Auto-imports available
</script>
