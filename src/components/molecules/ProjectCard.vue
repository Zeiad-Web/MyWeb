<script setup>
import BaseButton from '../atoms/BaseButton.vue'
import { CodeBracketIcon, EyeIcon } from '@heroicons/vue/24/outline'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 dark:border dark:border-gray-700">
    <!-- Image -->
    <div class="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
      <img 
        :src="project.image || 'https://via.placeholder.com/600x400'" 
        :alt="project.title" 
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div class="flex gap-2">
          <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="text-xs text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
        {{ project.title }}
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
        {{ project.description }}
      </p>

      <!-- Actions -->
      <div class="mt-auto flex gap-3">
        <BaseButton v-if="project.demoUrl" :href="project.demoUrl" target="_blank" variant="primary" size="sm" class="flex-1">
          <EyeIcon class="w-4 h-4 mr-1.5" />
          Demo
        </BaseButton>
        <BaseButton v-if="project.githubUrl" :href="project.githubUrl" target="_blank" variant="outline" size="sm" class="flex-1">
          <CodeBracketIcon class="w-4 h-4 mr-1.5" />
          Code
        </BaseButton>
      </div>
    </div>
  </div>
</template>
