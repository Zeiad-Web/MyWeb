<script setup>
import { useLanguageStore } from '../stores/language'

const langStore = useLanguageStore()

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' }
]
</script>

<template>
  <div class="lang-switcher-container">
    <div class="lang-switcher">
      <div 
        class="active-indicator" 
        :style="{ 
          transform: langStore.locale === 'ar' ? 'translateX(0)' : 'translateX(100%)',
          left: langStore.locale === 'ar' ? '0' : 'auto',
          right: langStore.locale === 'en' ? '0' : 'auto'
        }"
      ></div>
      <button 
        v-for="lang in languages" 
        :key="lang.code"
        @click="langStore.setLanguage(lang.code)"
        class="lang-btn"
        :class="{ active: langStore.locale === lang.code }"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.lang-switcher-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-switcher {
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 4px;
  width: 90px;
  height: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.active-indicator {
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: calc(50% - 4px);
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
}

.lang-btn {
  position: relative;
  flex: 1;
  border: none;
  background: none;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  z-index: 2;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.lang-btn.active {
  color: #ffffff;
}

/* Dark mode adjustments */
:global(.dark) .lang-switcher {
  background: rgba(30, 41, 59, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

:global(.dark) .lang-btn {
  color: #94a3b8;
}

:global(.dark) .lang-btn.active {
  color: #ffffff;
}

/* RTL Specific adjustments if needed */
[dir="rtl"] .active-indicator {
  /* Logic handled by translateX and conditional left/right */
}
</style>
