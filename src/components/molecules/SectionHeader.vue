<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'center', // left, center, right
    validator: v => ['left', 'center', 'right'].includes(v)
  }
})
</script>

<template>
  <div :class="['mb-12', `text-${align}`]">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl relative inline-block">
      {{ title }}
      <span class="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full" :class="{'left-1/2 -translate-x-1/2': align === 'center', 'right-0 left-auto': align === 'right'}"></span>
    </h2>
    <p v-if="subtitle" class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl" :class="{'mx-auto': align === 'center', 'ml-auto': align === 'right'}">
      {{ subtitle }}
    </p>
  </div>
</template>
