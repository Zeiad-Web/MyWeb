<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { BeakerIcon, GlobeAltIcon, DevicePhoneMobileIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import { useProjectsStore } from '../stores/projects'
import { useLanguageStore } from '../stores/language'

const filter = ref('All')
const categories = [
  { id: 'All', name: 'الكل', icon: GlobeAltIcon },
  { id: 'Frontend', name: 'واجهات أمامية', icon: BeakerIcon },
  { id: 'Mobile', name: 'تطبيقات جوال', icon: DevicePhoneMobileIcon },
  { id: 'Full Stack', name: 'تطوير متكامل', icon: CodeBracketIcon }
]

const languageStore = useLanguageStore()
const projectsStore = useProjectsStore()
const projects = computed(() => projectsStore.projects)

const filteredProjects = computed(() => {
  if (filter.value === 'All') return projects.value
  return projects.value.filter(p => p.category === filter.value)
})

// Filter Indicator Logic
const filterIndicatorLeft = ref('0px')
const filterIndicatorWidth = ref('0px')

const updateFilterIndicator = () => {
  const el = document.getElementById('filter-' + filter.value)
  if (el) {
    filterIndicatorLeft.value = el.offsetLeft + 'px'
    filterIndicatorWidth.value = el.offsetWidth + 'px'
  }
}

watch(filter, () => {
  setTimeout(updateFilterIndicator, 50)
}, { immediate: true })

onMounted(() => {
  setTimeout(updateFilterIndicator, 500)
})
</script>

<template>
  <div class="pt-32 pb-24 px-6 relative overflow-hidden">
    <!-- Decor -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 blur-[120px] -z-10"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] -z-10"></div>

    <div class="max-w-7xl mx-auto">
      <header class="text-center mb-16 space-y-4 reveal" dir="rtl">
        <h1 class="text-4xl md:text-6xl font-black tracking-tight">معرض <span class="text-primary-600">المشاريع</span></h1>
        <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">نظرة عميقة على الحلول الرقمية التي قمت ببنائها، نجمع بين الكفاءة البرمجية والجمال التصميمي.</p>
      </header>
      
      <!-- Premium Filter -->
      <div class="relative mb-16 mx-auto reveal max-w-full" dir="rtl">
        <div class="glass rounded-full p-2 overflow-x-auto no-scrollbar scroll-smooth">
          <div class="relative flex min-w-max">
            <!-- Indicator -->
            <div 
              class="absolute top-0 bottom-0 bg-primary-600 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-lg shadow-primary-500/40"
              :style="{ 
                left: filterIndicatorLeft,
                width: filterIndicatorWidth
              }"
            ></div>
            
            <button 
              v-for="cat in categories" 
              :key="cat.id"
              :id="'filter-' + cat.id"
              @click="filter = cat.id"
              class="relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all duration-500 no-tap-highlight"
              :class="filter === cat.id ? 'text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'"
            >
              <component :is="cat.icon" class="w-4 h-4" />
              <span class="text-sm">{{ cat.name }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Ultra Grid (Bento Style) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 reveal">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.title" 
          class="project-card-wrapper"
          :class="{
            'md:col-span-2': index % 5 === 0,
            'md:row-span-2': index % 5 === 2
          }"
        >
          <div class="project-card group">
            <!-- Background ID -->
            <span class="project-id">{{ (index + 1).toString().padStart(2, '0') }}</span>
            
            <div class="card-inner">
              <div class="aspect-wrapper">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="project-image"
                >
                
                <!-- Persistent Info (Mobile/Tablet) -->
                <div class="mobile-overlay lg:hidden">
                   <h3 class="text-xl font-black mb-1">{{ project.title }}</h3>
                   <div class="flex gap-2">
                     <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">{{ project.category }}</span>
                   </div>
                </div>

                <!-- Elite Desktop Overlay -->
                <div class="desktop-overlay hidden lg:flex">
                  <div class="overlay-content">
                    <div class="tags-container">
                      <span v-for="tag in project.tags" :key="tag" class="tag">
                        {{ tag }}
                      </span>
                    </div>
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-desc">{{ project.description }}</p>
                    <router-link :to="{ name: 'project-details', params: { slug: project.slug } }" class="preview-btn">
                      <span>{{ languageStore.locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}</span>
                      <svg class="w-5 h-5 transition-transform group-hover:translate-x--1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </router-link>
                  </div>
                </div>

                <!-- Floating Badge -->
                <div class="badge-container">
                   <span class="category-badge">
                     {{ project.category }}
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
         <p class="text-slate-400 text-lg md:text-xl font-bold">لا توجد مشاريع في هذا القسم حالياً.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card-wrapper {
  perspective: 2000px;
}

.project-card {
  position: relative;
  height: 100%;
  border-radius: 2.5rem;
  overflow: hidden;
  background: white;
  transition: transform 0.8s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.8s cubic-bezier(0.2, 0, 0, 1);
  transform-style: preserve-3d;
}

.dark .project-card {
  background: #0f172a;
}

.project-card:hover {
  transform: rotateX(2deg) rotateY(-2deg) scale(1.02);
  box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.2);
}

.dark .project-card:hover {
  box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.5);
}

.card-inner {
  position: relative;
  height: 100%;
  width: 100%;
}

.aspect-wrapper {
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.project-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.2, 0, 0, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-id {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 8rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.03);
  line-height: 1;
  pointer-events: none;
  z-index: 1;
}

.dark .project-id {
  color: rgba(255, 255, 255, 0.03);
}

.mobile-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  color: white;
  text-align: right;
}

.desktop-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.2, 0, 0, 1);
}

.project-card:hover .desktop-overlay {
  opacity: 1;
}

.overlay-content {
  transform: translateY(30px);
  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.1s;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: flex-end;
}

.tag {
  font-size: 0.65rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  color: white;
}

.project-title {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.project-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.preview-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: #2563eb;
  color: white;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 900;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

.preview-btn:hover {
  background: #3b82f6;
  transform: translateX(-5px);
}

.badge-container {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 2;
}

.category-badge {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 900;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  color: #0f172a;
}

.dark .category-badge {
  background: rgba(15, 23, 42, 0.9);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.no-tap-highlight {
  -webkit-tap-highlight-color: transparent;
}
</style>
