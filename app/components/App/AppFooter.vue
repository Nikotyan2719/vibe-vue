<template>
  <footer :class="['bg-base-200 border-t border-base-300 px-4 py-6 md:px-8 md:py-8', className]">
    <div class="max-w-[1200px] mx-auto">
      <p class="text-center text-base-content text-sm md:text-base">
        {{ copyright }}
      </p>

      <div
        v-if="useSize(links) > 0"
        class="mt-4 flex flex-wrap justify-center gap-4"
      >
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.to"
          :target="link.external ? '_blank' : '_self'"
          :rel="link.external ? 'noopener noreferrer' : ''"
          class="text-primary hover:text-primary-700 transition-colors text-sm"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterLink {
  to: string
  label: string
  external?: boolean
}

interface AppFooterProps {
  class?: string
  copyright?: string
  links?: FooterLink[]
}

const props = withDefaults(defineProps<AppFooterProps>(), {
  copyright: 'Vibe Vue © 2026 - Learning platform for web developers',
  links: () => []
})
const { class: className, copyright, links } = toRefs(props)
</script>
