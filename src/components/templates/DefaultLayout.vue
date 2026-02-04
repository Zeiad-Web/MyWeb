<script setup>
import TheNavbar from '../organisms/TheNavbar.vue'
import TheFooter from '../organisms/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
    <TheNavbar />
    
    <main class="flex-grow pt-20"> <!-- Increased pt to account for navbar height -->
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
