<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-5 bg-gradient-to-br from-purple-500 to-purple-700">
    <h1 class="text-white mb-8 text-4xl text-center">
      Modal Demo
    </h1>
    <button
      class="bg-green-500 text-white border-none px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all shadow-lg hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-xl"
      @click="openModal"
    >
      Открыть модальное окно
    </button>

    <ModalApplication
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
