<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <header class="text-center mb-8 md:mb-12">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
        Vibe Vue
      </h1>
      <p class="text-xl md:text-2xl text-gray-600">
        A learning platform for web developers
      </p>
    </header>
    <main class="space-y-8 md:space-y-12">
      <section>
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Featured Lessons
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="border border-gray-200 rounded-xl p-6 bg-white hover:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 class="text-2xl font-medium text-gray-900 mb-2">
              CSS Fundamentals
            </h3>
            <p class="text-gray-600">
              Learn the basics of styling with CSS
            </p>
          </div>
          <div class="border border-gray-200 rounded-xl p-6 bg-white hover:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 class="text-2xl font-medium text-gray-900 mb-2">
              JavaScript Essentials
            </h3>
            <p class="text-gray-600">
              Master core JavaScript concepts
            </p>
          </div>
          <div class="border border-gray-200 rounded-xl p-6 bg-white hover:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 class="text-2xl font-medium text-gray-900 mb-2">
              HTML Structure
            </h3>
            <p class="text-gray-600">
              Build semantic web pages
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Platform Features
        </h2>
        <ul class="space-y-3">
          <li class="flex items-center text-lg text-gray-700">
            <span class="mr-3 text-primary-600">✓</span>
            Interactive code editor
          </li>
          <li class="flex items-center text-lg text-gray-700">
            <span class="mr-3 text-primary-600">✓</span>
            Guest comment sections
          </li>
          <li class="flex items-center text-lg text-gray-700">
            <span class="mr-3 text-primary-600">✓</span>
            Responsive design
          </li>
          <li class="flex items-center text-lg text-gray-700">
            <span class="mr-3 text-primary-600">✓</span>
            SSR-first architecture
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Auto-imports: ref, computed, etc. available via Nuxt
</script>
