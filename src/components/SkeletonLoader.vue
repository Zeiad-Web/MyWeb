<template>
  <div class="animate-pulse flex space-x-4 space-x-reverse">
    <div class="flex-1 space-y-6 py-1">
      <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
      </div>
      <div class="h-32 bg-slate-200 dark:bg-slate-700 rounded-2xl w-full"></div>
    </div>
  </div>
</template>

<script setup>
// Minimal logic needed for a pure visual skeleton
</script>

<style scoped>
/* Scoped styles if needed, Tailwind pulse handles most */
</style>
