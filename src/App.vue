<script setup>
import { ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
import SkeletonLoader from './components/SkeletonLoader.vue'
import ChatBot from './components/ChatBot.vue'
import FloatingActions from './components/FloatingActions.vue'

const isLoading = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 600)
})
</script>

<template>
  <AppLayout>
    <div v-if="isLoading" class="pt-32 px-6 max-w-4xl mx-auto">
      <SkeletonLoader v-for="i in 3" :key="i" class="mb-12" />
    </div>
    <RouterView v-else v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <ChatBot />
    <FloatingActions />
  </AppLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
