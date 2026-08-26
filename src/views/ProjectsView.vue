<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { 
  BeakerIcon, 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  SparklesIcon,
  FolderOpenIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import { useProjectsStore } from '../stores/projects'
import { useLanguageStore } from '../stores/language'

const filter = ref('All')
const searchQuery = ref('')
const languageStore = useLanguageStore()
const projectsStore = useProjectsStore()

const isRTL = computed(() => languageStore.direction === 'rtl')

const categories = computed(() => [
  { id: 'All', name: languageStore.locale === 'ar' ? 'الكل' : 'All', icon: GlobeAltIcon },
  { id: 'Full Stack', name: languageStore.locale === 'ar' ? 'تطوير متكامل' : 'Full Stack', icon: CodeBracketIcon },
  { id: 'Frontend', name: languageStore.locale === 'ar' ? 'واجهات أمامية' : 'Frontend', icon: BeakerIcon },
  { id: 'Backend', name: languageStore.locale === 'ar' ? 'واجهات خلفية' : 'Backend', icon: DevicePhoneMobileIcon }
])

const allProjects = computed(() => projectsStore.projects)

const filteredProjects = computed(() => {
  return allProjects.value.filter(project => {
    const matchesCategory = filter.value === 'All' || project.category === filter.value
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return matchesCategory

    const matchesSearch = 
      (project.title && project.title.toLowerCase().includes(q)) ||
      (project.description && project.description.toLowerCase().includes(q)) ||
      (project.tags && project.tags.some(tag => tag.toLowerCase().includes(q))) ||
      (project.languages && project.languages.some(lang => lang.toLowerCase().includes(q)))

    return matchesCategory && matchesSearch
  })
})

const categoryCounts = computed(() => {
  const counts = { All: allProjects.value.length }
  allProjects.value.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1
  })
  return counts
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

const activateReveals = () => {
  nextTick(() => {
    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach(el => el.classList.add('active'))
  })
}

watch(filter, () => {
  setTimeout(updateFilterIndicator, 50)
  activateReveals()
}, { immediate: true })

watch(searchQuery, () => {
  activateReveals()
})

onMounted(() => {
  setTimeout(updateFilterIndicator, 300)
  activateReveals()
})

const hasVideo = (project) => {
  const url = project?.videoUrl
  if (!url) return false
  return /\.(mp4|webm|ogg|mov|m4v)$/i.test(url)
}

const clearFilters = () => {
  searchQuery.value = ''
  filter.value = 'All'
}
</script>

<template>
  <div class="pt-32 pb-24 px-6 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 min-h-screen">
    <!-- Ambient Decor Glows -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 blur-[140px] -z-10 rounded-full"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] -z-10 rounded-full"></div>

    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-12 space-y-4 reveal" dir="rtl">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/80 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 font-bold text-xs shadow-sm border border-primary-200/50 dark:border-primary-800/50">
          <SparklesIcon class="w-4 h-4 text-primary-500" />
          <span>{{ languageStore.locale === 'ar' ? 'معرض الأعمال والحلول الرقمية' : 'Portfolio & Digital Solutions' }}</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          {{ languageStore.locale === 'ar' ? 'معرض' : 'Featured' }} 
          <span class="text-primary-600 dark:text-primary-400">{{ languageStore.locale === 'ar' ? 'المشاريع' : 'Projects' }}</span>
        </h1>
        <p class="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {{ languageStore.locale === 'ar' 
            ? 'نظرة عميقة على الحلول البرمجية والأنظمة المتكاملة التي قمت ببنائها بأعلى المعايير، نجمع بين الكفاءة التقنية والتصميم الاحترافي.'
            : 'Explore full-stack web applications, management systems, and interactive interfaces built with high standards and performance.' 
          }}
        </p>
      </header>

      <!-- Controls: Search & Category Filter Tabs -->
      <div class="mb-12 space-y-6 max-w-4xl mx-auto reveal" dir="rtl">
        <!-- Search Bar -->
        <div class="relative max-w-xl mx-auto">
          <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
            <MagnifyingGlassIcon class="w-5 h-5" />
          </div>
          <input 
            v-model="searchQuery"
            type="text" 
            :placeholder="languageStore.locale === 'ar' ? 'ابحث عن مشروع أو تقنية (Laravel, Vue, Tailwind...)' : 'Search by project name or tech stack...'"
            class="w-full pr-11 pl-10 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 shadow-lg shadow-slate-900/5 transition-all text-sm font-medium"
          />
          <button 
            v-if="searchQuery" 
            @click="searchQuery = ''" 
            class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <XMarkIcon class="w-5 h-5" />
          </button>
        </div>

        <!-- Premium Category Tabs Filter -->
        <div class="relative mx-auto max-w-full">
          <div class="glass rounded-full p-2 overflow-x-auto no-scrollbar scroll-smooth">
            <div class="relative flex min-w-max justify-center mx-auto">
              <!-- Sliding Indicator -->
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
                class="relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full font-bold transition-all duration-300 no-tap-highlight text-sm"
                :class="filter === cat.id ? 'text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'"
              >
                <component :is="cat.icon" class="w-4 h-4" />
                <span>{{ cat.name }}</span>
                <span 
                  class="px-2 py-0.5 rounded-full text-[10px] font-black transition-colors"
                  :class="filter === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400'"
                >
                  {{ categoryCounts[cat.id] || 0 }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Clean Responsive Grid -->
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
        <div 
          v-for="project in filteredProjects" 
          :key="project.slug || project.title" 
          class="project-card group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
        >
          <!-- Media Preview Box -->
          <div class="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
            <template v-if="hasVideo(project)">
              <video
                :src="project.videoUrl"
                :poster="project.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                autoplay
                muted
                loop
                playsinline
              ></video>
            </template>
            <img
              v-else
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            <!-- Gradient Mask -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-4 right-4 z-10" dir="rtl">
              <span class="px-3.5 py-1.5 rounded-full text-xs font-black bg-slate-950/80 text-white backdrop-blur-md border border-white/20 shadow-lg">
                {{ project.category }}
              </span>
            </div>

            <!-- Video Indicator if applicable -->
            <div v-if="hasVideo(project)" class="absolute bottom-3 right-4 z-10 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{{ languageStore.locale === 'ar' ? 'فيديو' : 'Video' }}</span>
            </div>
          </div>

          <!-- Card Content Body -->
          <div class="p-6 md:p-7 flex flex-col flex-1 text-right" dir="rtl">
            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-1.5 mb-3">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="text-[11px] font-black uppercase tracking-wider bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 px-2.5 py-1 rounded-md border border-primary-200/40 dark:border-primary-800/40"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2 leading-snug">
              {{ project.title }}
            </h3>

            <!-- Client Info -->
            <p v-if="project.client" class="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5 justify-start">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              <span>{{ project.client }}</span>
            </p>

            <!-- Description -->
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-6 flex-1">
              {{ project.description }}
            </p>

            <!-- Footer Action Buttons -->
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 mt-auto">
              <router-link 
                :to="{ name: 'project-details', params: { slug: project.slug } }"
                class="flex-1 py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 active:scale-95 transition-all"
              >
                <span>{{ languageStore.locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}</span>
                <component :is="isRTL ? ArrowLeftIcon : ArrowRightIcon" class="w-4 h-4" />
              </router-link>

              <a 
                v-if="project.websiteUrl"
                :href="project.websiteUrl" 
                target="_blank"
                class="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition-all active:scale-95 border border-slate-200 dark:border-slate-700"
                :title="languageStore.locale === 'ar' ? 'زيارة الموقع' : 'Live Preview'"
              >
                <ArrowTopRightOnSquareIcon class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-24 glass rounded-3xl max-w-xl mx-auto p-8 reveal" dir="rtl">
        <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FolderOpenIcon class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-black text-slate-900 dark:text-white mb-2">
          {{ languageStore.locale === 'ar' ? 'لا توجد مشاريع مطابقة' : 'No projects found' }}
        </h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">
          {{ languageStore.locale === 'ar' ? 'لم نجد أي مشاريع تطابق بحثك الحالي، يرجى محاولة تغيير الكلمات المفتاحية أو اختيار فئة أخرى.' : 'Try adjusting your search criteria or switching categories.' }}
        </p>
        <button 
          @click="clearFilters" 
          class="px-6 py-2.5 bg-primary-600 text-white font-black text-sm rounded-xl hover:bg-primary-700 transition-all shadow-md"
        >
          {{ languageStore.locale === 'ar' ? 'عرض جميع المشاريع' : 'Clear Filters' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.no-tap-highlight {
  -webkit-tap-highlight-color: transparent;
}
</style>
