<script setup>
defineProps({
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String, // h-6 w-6 class string
    default: 'w-6 h-6'
  }
})
</script>

<template>
  <component :is="name" :class="size" aria-hidden="true" />
</template>
