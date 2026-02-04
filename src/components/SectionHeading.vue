<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="text-center mb-16">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
      {{ subtitle }}
    </p>
    <div class="mt-4 flex justify-center">
      <div class="w-16 h-1.5 bg-primary-500 rounded-full"></div>
    </div>
  </div>
</template>
