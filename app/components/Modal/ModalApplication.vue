<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5"
    @click="closeModal"
  >
    <div
      class="bg-gray-100 rounded-2xl p-10 relative max-w-sm w-full text-center shadow-lg"
      @click.stop
    >
      <!-- Close button -->
      <button
        class="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-gray-600 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-black/10"
        @click="closeModal"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <!-- Icon -->
      <div class="mb-6 flex justify-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="64"
            height="64"
            rx="12"
            fill="#E8F5E8"
          />
          <path
            d="M20 32L28 40L44 24"
            stroke="#4CAF50"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- Content -->
      <h2 class="text-2xl font-bold text-gray-900 m-0 mb-4 leading-tight">
        Заявка отправлена
      </h2>
      <p class="text-base text-gray-600 m-0 leading-relaxed">
        Скоро с вами по электронной почте свяжется менеджер для подтверждения заявки
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const { isOpen } = toRefs(props)
const emit = defineEmits<Emits>()

const closeModal = () => {
  emit('close')
}
</script>
