<script setup>
import { computed } from 'vue'
import { CodeBracketIcon, EyeIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Mock image placeholder if none provided
const imageUrl = computed(() => props.project.image || 'https://via.placeholder.com/600x400')
</script>

<template>
  <div class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-2xl bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-56">
      <img :src="imageUrl" :alt="project.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div class="p-6">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            <a :href="project.demoUrl" target="_blank">
              <span aria-hidden="true" class="absolute inset-0" />
              {{ project.title }}
            </a>
          </h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ project.category }}</p>
        </div>
      </div>
      <p class="mt-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
        {{ project.description }}
      </p>
      
      <div class="mt-4 flex flex-wrap gap-2">
        <span 
          v-for="tag in project.tags" 
          :key="tag" 
          class="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-6 flex gap-4 relative z-10">
        <a :href="project.githubUrl" target="_blank" class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
          <CodeBracketIcon class="w-5 h-5 mr-1" />
          Code
        </a>
        <a :href="project.demoUrl" target="_blank" class="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
          <EyeIcon class="w-5 h-5 mr-1" />
          Demo
        </a>
      </div>
    </div>
  </div>
</template>
