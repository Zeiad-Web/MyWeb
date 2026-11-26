<script setup>
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'
import { useLanguageStore } from '../../stores/language'

const languageStore = useLanguageStore()
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900" :dir="languageStore.direction">
    <NavBar />
    
    <main class="flex-grow pt-16"> <!-- pt-16 to account for fixed navbar -->
      <slot />
    </main>

    <Footer />
  </div>
</template>
