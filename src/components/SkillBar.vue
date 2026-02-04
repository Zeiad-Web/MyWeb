<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'bg-primary-600'
  }
})
</script>

<template>
  <div class="mb-6">
    <div class="flex justify-between mb-1">
      <span class="text-base font-medium text-gray-700 dark:text-gray-200">{{ name }}</span>
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ percentage }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
      <div 
        class="h-2.5 rounded-full transition-all duration-1000 ease-out" 
        :class="color"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>
