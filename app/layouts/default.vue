<template>
  <div class="default-layout">
    <header class="layout-header">
      <nav class="nav">
        <NuxtLink
          to="/"
          class="nav-link"
        >Home</NuxtLink>
        <NuxtLink
          to="/lessons"
          class="nav-link"
        >Lessons</NuxtLink>
        <NuxtLink
          to="/about"
          class="nav-link"
        >About</NuxtLink>
      </nav>
    </header>
    <main class="layout-main">
      <slot />
    </main>
    <footer class="layout-footer">
      <p>Vibe Vue &copy; 2026 - Learning platform for web developers</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Auto-imports available
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header {
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 2rem;
}

.nav {
  display: flex;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #e9ecef;
}

.nav-link.router-link-exact-active {
  color: #0d6efd;
  background-color: #e7f1ff;
}

.layout-main {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.layout-footer {
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 1.5rem 2rem;
  text-align: center;
  color: #6c757d;
}

@media (max-width: 768px) {
  .layout-header,
  .layout-footer {
    padding: 1rem;
  }

  .nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  .layout-main {
    padding: 1rem;
  }
}
</style>
