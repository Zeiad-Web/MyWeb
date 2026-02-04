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
  icon: {
    type: String, // You might pass an icon component name or URL
    default: null
  }
})
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <component :is="icon" v-if="icon" class="w-5 h-5 text-primary-600" />
        <span class="text-sm font-semibold text-gray-700 dark:text-gray-200">{{ name }}</span>
      </div>
      <span class="text-xs font-bold text-primary-600 dark:text-primary-400">{{ percentage }}%</span>
    </div>
    <div class="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div 
        class="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>
