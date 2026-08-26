<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectsStore } from '../stores/projects'
import { useLanguageStore } from '../stores/language'
import { 
  ArrowRightIcon, 
  ArrowLeftIcon, 
  GlobeAltIcon, 
  UserIcon, 
  CommandLineIcon,
  CheckCircleIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const projectsStore = useProjectsStore()
const languageStore = useLanguageStore()

const project = computed(() => projectsStore.getProjectBySlug(route.params.slug))
const isRTL = computed(() => languageStore.direction === 'rtl')

const scrollY = ref(0)
const showLivePreview = ref(false)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  if (project.value) {
    document.title = `${project.value.title} - Ziad Al-Oraiqi`
  }
})

const goBack = () => {
  router.push('/projects')
}

const openLink = (url) => {
  if (url) window.open(url, '_blank')
}

const hasVideo = computed(() => {
  const url = project.value?.videoUrl
  if (!url) return false
  // Check if the URL ends with a common video extension
  return /\.(mp4|webm|ogg|mov|m4v)$/i.test(url)
})

const formatUrl = (url) => {

  if (!url) return ''
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}


const stats = computed(() => [
  { label: isRTL.value ? 'المشروع' : 'Project', value: project.value?.category, icon: CpuChipIcon },
  { label: isRTL.value ? 'العميل' : 'Client', value: project.value?.client, icon: UserIcon },
  { label: isRTL.value ? 'التقنيات' : 'Languages', value: project.value?.languages?.join(', '), icon: CommandLineIcon },
  { 
    label: isRTL.value ? 'معاينة' : 'Web', 
    value: formatUrl(project.value?.websiteUrl), 
    icon: LinkIcon, 
    link: project.value?.websiteUrl 
  },
])
const toggleFullScreen = (event) => {
  const videoEl = event.currentTarget.closest('.relative').querySelector('video');
  if (!videoEl) return;
  
  if (videoEl.requestFullscreen) {
    videoEl.requestFullscreen();
  } else if (videoEl.webkitRequestFullscreen) {
    videoEl.webkitRequestFullscreen();
  } else if (videoEl.msRequestFullscreen) {
    videoEl.msRequestFullscreen();
  }
}
</script>

<template>
  <div v-if="project" class="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500 pb-32" :dir="languageStore.direction">
    
    <!-- Immersive Page Header / Hero -->
    <section class="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <!-- Background Mesh / Glow -->
      <div class="absolute inset-0 bg-slate-100 dark:bg-slate-900 overflow-hidden">
        <div class="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full animate-pulse-slow" style="animation-delay: 2s"></div>
      </div>

      <!-- Immersive Image -->
      <div class="absolute inset-0 transition-transform duration-1000 ease-out scale-105" :style="{ transform: `translateY(${scrollY * 0.2}px) scale(1.05)` }">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-full object-cover opacity-30 dark:opacity-40 grayscale-[20%] dark:grayscale-0"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#020617]/50 dark:to-[#020617]"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative h-full flex flex-col justify-end items-center px-6 pb-20 text-center">
        <div class="reveal-up">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-black tracking-widest uppercase mb-6 backdrop-blur-md border border-primary-200/50 dark:border-primary-800/50">
            <SparklesIcon class="w-4 h-4" />
            {{ project.category }}
          </div>
          <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight mb-6">
            {{ project.title }}
          </h1>
          <div class="flex justify-center gap-2">
            <div class="w-12 h-1 bg-primary-600 rounded-full"></div>
            <div class="w-4 h-1 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Floating Dynamic Navigation -->
      <div class="fixed top-6 inset-x-6 z-50 flex justify-between items-center pointer-events-none">
        <button 
          @click="goBack" 
          class="pointer-events-auto h-12 w-12 md:w-auto md:px-6 rounded-full glass-nav flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 transition-all active:scale-95 group shadow-xl"
        >
          <component :is="isRTL ? ArrowRightIcon : ArrowLeftIcon" class="w-5 h-5" />
          <span class="hidden md:block font-bold">{{ isRTL ? 'العودة' : 'Back' }}</span>
        </button>
        
        
      </div>
    </section>

    <!-- Content Integration -->
    <div class="max-w-7xl mx-auto px-6 -mt-10 md:-mt-20 relative z-10">
      
      <!-- Showcase Card (Mobile-First) -->
      <div class="reveal-up" style="animation-delay: 0.1s">
        <div class="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white dark:border-slate-800 bg-white dark:bg-slate-900">
           <!-- Display Device Frame-like Header -->
           <div class="bg-slate-50 dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div class="flex-1 flex justify-center">
                <a 
                  :href="project.websiteUrl" 
                  target="_blank"
                  class="h-8 px-4 rounded-full bg-primary-600/10 hover:bg-primary-600 text-primary-600 hover:text-white flex items-center gap-2 font-bold transition-all active:scale-95 border border-primary-600/20 shadow-sm"
                >
                  <span class="text-[10px]">{{ isRTL ? 'زيارة الموقع' : 'Visit Live' }}</span>
                  <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5" />
                </a>
              </div>
           </div>
           
           <!-- Main Visual -->
           <div class="relative group w-full bg-slate-100 dark:bg-slate-900">
             <template v-if="!showLivePreview && hasVideo">
               <video
                 :src="project.videoUrl"
                 :poster="project.image"
                 class="w-full aspect-[10/9] md:aspect-[16/8] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                 autoplay
                 muted
                 loop
                 playsinline
                 preload="metadata"
               ></video>
               <div class="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-4 py-2 text-xs font-black text-white backdrop-blur-md">
                 <span class="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                 <span>{{ isRTL ? 'عرض فيديو للمشروع' : 'Project Video Showcase' }}</span>
               </div>

               <button @click="toggleFullScreen($event)" class="absolute bottom-5 right-5 z-20 p-3 bg-slate-950/70 hover:bg-slate-900/90 backdrop-blur-md rounded-full text-white transition-all shadow-lg shadow-black/50 group" :title="isRTL ? 'تكبير الشاشة' : 'Fullscreen'">
                 <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                 </svg>
               </button>
             </template>
             <template v-else-if="!showLivePreview">
               <img
                 :src="project.image"
                 :alt="project.title"
                 class="w-full aspect-[10/9] md:aspect-[16/8] object-cover hover:scale-105 transition-transform duration-1000"
               />
               <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
               <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                   @click="showLivePreview = true"
                   class="px-8 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white rounded-2xl font-black shadow-2xl hover:scale-110 transition-all flex items-center gap-2"
                 >
                   <GlobeAltIcon class="w-6 h-6 text-primary-600" />
                   {{ isRTL ? 'تشغيل المعاينة الحية' : 'Launch Live Preview' }}
                 </button>
               </div>
             </template>
             <div v-else class="w-full aspect-[10/9] md:aspect-[16/8] bg-slate-100 dark:bg-slate-950 relative">
               <iframe 
                 :src="project.websiteUrl" 
                 class="w-full h-full border-0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen
               ></iframe>
               <button 
                 @click="showLivePreview = false"
                 class="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-lg hover:scale-110 transition-all"
                 title="Close Preview"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                   <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                 </svg>
               </button>
             </div>
           </div>
        </div>
      </div>

      <!-- Quick Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 reveal-up" style="animation-delay: 0.2s">
        <div 
          v-for="(stat, idx) in stats" 
          :key="idx" 
          class="glass-card p-8 flex flex-col gap-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all relative overflow-hidden group/card fantasy-card"
          :class="{ 'hover:border-primary-500 cursor-pointer': stat.link }"
          @click="stat.link ? openLink(stat.link) : null"
        >
          <!-- Shine Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>

          <div class="flex items-center gap-4 relative z-10">
            <div class="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover/card:scale-110 transition-transform">
              <component :is="stat.icon" class="w-7 h-7" />
            </div>
            <p class="text-sm md:text-base font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 leading-none">{{ stat.label }}</p>
          </div>

          <div class="relative z-10">
            <template v-if="!stat.link">
              <div class="inline-flex items-center gap-3 px-8 py-5 rounded-[2rem] bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 font-black transition-all group-hover/card:bg-primary-600 group-hover/card:text-white border border-transparent group-hover/card:border-primary-500 shadow-sm group-hover/card:shadow-xl group-hover/card:shadow-primary-600/20">
                <span class="text-lg md:text-xl leading-snug">{{ stat.value }}</span>
              </div>
            </template>
            <template v-else>
              <div class="inline-flex items-center gap-4 px-8 py-5 rounded-[2rem] bg-primary-600 text-white font-black transition-all hover:bg-primary-700 active:scale-95 shadow-2xl shadow-primary-500/30">
                <span class="text-lg md:text-xl leading-snug">{{ isRTL ? 'زيارة المشروع' : 'Visit Live' }}</span>
                <ArrowTopRightOnSquareIcon class="w-6 h-6 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Detailed Info -->
      <div class="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        
        <!-- About Section -->
        <div class="lg:col-span-12 reveal-up" style="animation-delay: 0.3s">
          <div class="flex items-center gap-4 mb-8">
            <h2 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">Overview</h2>
            <div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <p class="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ project.longDescription }}
          </p>
        </div>

        <!-- Accomplishments -->
        <div class="lg:col-span-12 reveal-up" style="animation-delay: 0.4s">
          <div class="flex items-center gap-4 mb-10">
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
              {{ isRTL ? 'المهام والنتائج' : 'Tasks & Outcomes' }}
            </h2>
            <div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              v-for="(task, idx) in project.tasksAccomplished" 
              :key="idx"
              class="group relative"
            >
              <div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div class="relative p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 h-full transition-all group-hover:-translate-y-2 group-hover:bg-white dark:group-hover:bg-slate-900">
                <div class="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircleIcon class="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                </div>
                <p class="text-lg font-bold text-slate-800 dark:text-slate-200 leading-snug">
                  {{ task }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Mega Call to Action -->
      <div class="mt-32 reveal-up" style="animation-delay: 0.5s">
         <div class="relative p-1 px-1 rounded-[4rem] bg-gradient-to-r from-primary-600 via-purple-600 to-cyan-500 overflow-hidden group">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px] opacity-10 animate-ping-slow"></div>
            
            <div class="relative bg-white dark:bg-slate-950 rounded-[3.9rem] px-8 py-16 md:py-24 text-center">
               <h3 class="text-4xl md:text-7xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">
                 {{ isRTL ? 'هل لديك فكرة مشروع؟' : 'Ready to start something?' }}
               </h3>
               <p class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                دعونا نحول رؤيتك إلى واقع تفاعلي باستخدام أحدث التقنيات..
               </p>
               <div class="flex flex-col sm:flex-row justify-center gap-4">
                  <a :href="project.websiteUrl" target="_blank" class="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-3xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all active:scale-95 shadow-2xl">
                    <span>{{ isRTL ? 'معاينة المشروع حياً' : 'Live Preview' }}</span>
                    <ArrowTopRightOnSquareIcon class="w-6 h-6" />
                  </a>
                  <router-link to="/contact" class="px-10 py-5 bg-primary-600 text-white rounded-3xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-primary-600/30 flex items-center justify-center gap-3 active:scale-95">
                    <span>{{ isRTL ? 'تواصل معي' : 'Contact Me' }}</span>
                    <ArrowRightIcon :class="isRTL ? 'rotate-180' : ''" class="w-6 h-6" />
                  </router-link>
               </div>
            </div>
         </div>
      </div>

    </div>

    <!-- Persistent Mobile Visit CTA -->
    <div class="fixed bottom-6 inset-x-6 z-40 md:hidden reveal-up" style="animation-delay: 0.8s">
       <a :href="project.websiteUrl" target="_blank" class="w-full h-16 bg-primary-600 text-white rounded-full font-black flex items-center justify-center gap-3 shadow-2xl shadow-primary-700/40 active:scale-95 transition-all animate-bounce-subtle">
          <span>{{ isRTL ? 'مشاهدة المشروع الآن' : 'Explore Now' }}</span>
          <ArrowTopRightOnSquareIcon class="w-6 h-6" />
       </a>
    </div>

  </div>

  <!-- Error View -->
  <div v-else class="min-h-screen flex items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-950">
    <div class="max-w-md reveal-up">
      <div class="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
        <CommandLineIcon class="w-10 h-10 text-red-600" />
      </div>
      <h2 class="text-3xl font-black mb-4">Project Not Found</h2>
      <button @click="goBack" class="px-8 py-3 bg-primary-600 text-white rounded-full font-black shadow-lg">Return to Gallery</button>
    </div>
  </div>
</template>

<style scoped>
.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dark .glass-nav {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(15, 23, 42, 0.1);
}

.glass-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
}

.dark .glass-card {
  background: rgba(15, 23, 42, 0.4);
}

.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fantasy-card {
  box-shadow: 0 0 50px rgba(37, 99, 235, 0.05);
  border-color: rgba(37, 99, 235, 0.2) !important;
}

.dark .fantasy-card {
  box-shadow: 0 0 50px rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.3) !important;
}

.fantasy-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.1), transparent 70%);
  pointer-events: none;
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-ping-slow {
  animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s infinite;
}

@keyframes bounceSubtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}
</style>
