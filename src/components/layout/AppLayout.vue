<script setup>
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900" dir="rtl">
    <NavBar />
    
    <main class="flex-grow pt-16"> <!-- pt-16 to account for fixed navbar -->
      <slot />
    </main>

    <Footer />
  </div>
</template>
