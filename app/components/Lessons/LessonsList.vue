<template>
  <div :class="['lessons-list', className]">
    <!-- Loading state -->
    <div
      v-if="loading"
      class="text-center py-8"
    >
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      <p class="mt-2 text-base-content">
        Loading lessons...
      </p>
    </div>

    <!-- Error state -->
    <div
      v-else-if="error"
      class="text-center py-8"
    >
      <div class="text-error mb-2">
        ⚠️
      </div>
      <p class="text-error-content mb-4">
        {{ error }}
      </p>
      <button
        class="px-4 py-2 bg-primary text-primary-content rounded hover:bg-primary-600 transition-colors"
        @click="$emit('retry')"
      >
        Retry
      </button>
    </div>

    <!-- Empty state -->
    <div
      v-else-if="useSize(lessons) === 0"
      class="text-center py-8"
    >
      <div class="text-base-content/60 mb-2">
        📚
      </div>
      <p class="text-base-content/70">
        No lessons available yet.
      </p>
    </div>

    <!-- Lessons list -->
    <div
      v-else
      class="space-y-4"
    >
      <div
        v-for="lesson in lessons"
        :key="lesson.id"
        :class="[
          'p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md',
          lesson.completed
            ? 'bg-success/10 border-success/30'
            : 'bg-base-100 border-base-300'
        ]"
        @click="$emit('select-lesson', lesson)"
      >
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <h3 class="font-medium text-base-content">
              {{ lesson.title }}
            </h3>
            <p
              v-if="lesson.description"
              class="text-sm text-base-content/70 mt-1"
            >
              {{ lesson.description }}
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span
                :class="[
                  'px-2 py-1 text-xs rounded-full',
                  lesson.completed
                    ? 'bg-success text-success-content'
                    : 'bg-warning text-warning-content'
                ]"
              >
                {{ lesson.completed ? 'Completed' : 'Pending' }}
              </span>
              <span
                v-if="lesson.category"
                class="px-2 py-1 text-xs bg-base-300 text-base-content rounded-full"
              >
                {{ lesson.category }}
              </span>
            </div>
          </div>
          <div class="ml-4">
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center',
                lesson.completed
                  ? 'bg-success text-success-content'
                  : 'bg-base-300 text-base-content'
              ]"
            >
              {{ lesson.completed ? '✓' : '→' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Lesson {
  id: number
  title: string
  completed: boolean
  description?: string
  category?: string
}

interface LessonsListProps {
  lessons?: Lesson[]
  loading?: boolean
  error?: string
  class?: string
  showCategoryFilter?: boolean
}

interface LessonsListEmits {
  (e: 'select-lesson', lesson: Lesson): void
  (e: 'retry'): void
}

const props = withDefaults(defineProps<LessonsListProps>(), {
  lessons: () => [],
  loading: false,
  error: '',
  showCategoryFilter: false
})
const { class: className, lessons, loading, error, showCategoryFilter } = toRefs(props)

defineEmits<LessonsListEmits>()
</script>
