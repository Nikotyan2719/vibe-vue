<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader title="Example App" />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>