<template>
  <div class="lessons-page px-4 py-8 md:px-8 md:py-12">
    <div class="max-w-[1200px] mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-base-content mb-2">
          All Lessons
        </h1>
        <p class="text-base-content/70">
          Browse through all available lessons and track your learning progress.
        </p>
      </div>

      <div class="mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-success" />
              <span class="text-sm text-base-content">Completed</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-warning" />
              <span class="text-sm text-base-content">Pending</span>
            </div>
          </div>

          <div class="text-sm text-base-content/70">
            Showing {{ store.totalLessons }} lessons •
            {{ useSize(store.completedLessons) }} completed •
            {{ useSize(store.pendingLessons) }} pending
          </div>
        </div>
      </div>

      <LessonsList
        :lessons="store.lessons"
        @select-lesson="handleLessonSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useExampleStore()

const handleLessonSelect = (lesson: { id: number }) => {
  // In future, this could navigate to lesson detail page
  console.log('Lesson selected:', lesson)
  // For now, mark as completed when clicked
  store.completeLesson(lesson.id)
}
</script>
