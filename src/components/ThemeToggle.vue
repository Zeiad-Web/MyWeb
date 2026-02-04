<script setup>
import { useThemeStore } from '../stores/theme'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const themeStore = useThemeStore()
</script>

<template>
  <button 
    @click="themeStore.toggleTheme" 
    class="theme-toggle p-2 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none ring-offset-2 focus:ring-2 ring-primary-500"
    :title="themeStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    :aria-label="themeStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <svg 
      class="sun-and-moon" 
      aria-hidden="true" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
    >
      <circle 
        class="sun" 
        cx="12" 
        cy="12" 
        r="6" 
        mask="url(#moon-mask)" 
        fill="currentColor" 
      />
      <g class="sun-beams" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
      <mask class="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="24" cy="10" r="6" fill="black" />
      </mask>
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  color: var(--color-slate-900);
}

.dark .theme-toggle {
  color: var(--color-slate-100);
}

.sun-and-moon > :is(.moon, .sun, .sun-beams) {
  transform-origin: center center;
}

.sun-and-moon > .sun {
  transition: transform 0.5s cubic-bezier(.5, 1.25, .75, 1.25);
}

.sun-and-moon > .sun-beams {
  transition: transform 0.5s cubic-bezier(.5, 1.5, .75, 1.25), opacity 0.5s cubic-bezier(.25, 0, .3, 1);
}

.sun-and-moon .moon > circle {
  transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
}

/* Dark Mode States (Controlled by global .dark class) */
:global(.dark) .sun-and-moon > .sun {
  transform: scale(1.75);
}

:global(.dark) .sun-and-moon > .sun-beams {
  opacity: 0;
  transform: rotate(-25deg);
}

:global(.dark) .sun-and-moon .moon > circle {
  transform: translateX(-7px);
}
</style>
