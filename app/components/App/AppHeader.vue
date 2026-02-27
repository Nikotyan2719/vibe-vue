<template>
  <header class="bg-base-200 border-b border-base-300 px-8 py-4 md:px-8 md:py-4">
    <nav class="flex flex-col md:flex-row gap-6 md:gap-6 max-w-[var(--content-max-width)] mx-auto">
      <NuxtLink
        v-for="link in navigationLinks"
        :key="link.to"
        :to="link.to"
        :class="[
          'no-underline text-gray-700 font-medium px-4 py-2 rounded transition-colors',
          'hover:bg-base-300',
          { 'text-primary-600 bg-primary-100': isActive(link.to) }
        ]"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface NavigationLink {
  to: string
  label: string
  icon?: string
}

interface AppHeaderProps {
  class?: string
  logo?: string
  additionalLinks?: NavigationLink[]
}

const props = withDefaults(defineProps<AppHeaderProps>(), {
  additionalLinks: () => []
})
const { additionalLinks } = toRefs(props)

const route = useRoute()

const defaultLinks: NavigationLink[] = [
  { to: '/', label: 'Home' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/about', label: 'About' }
]

const navigationLinks = useConcat(defaultLinks, additionalLinks.value)

const isActive = (path: string) => route.path === path
</script>
