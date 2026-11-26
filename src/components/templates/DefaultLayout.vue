<script setup>
import TheNavbar from '../organisms/TheNavbar.vue'
import TheFooter from '../organisms/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
    <TheNavbar />
    
    <main class="flex-grow pt-20"> <!-- Increased pt to account for navbar height -->
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
