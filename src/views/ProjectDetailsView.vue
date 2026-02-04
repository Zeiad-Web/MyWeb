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

const stats = computed(() => [
  { label: isRTL.value ? 'المشروع' : 'Project', value: project.value?.category, icon: CpuChipIcon },
  { label: isRTL.value ? 'العميل' : 'Client', value: project.value?.client, icon: UserIcon },
  { label: isRTL.value ? 'التقنيات' : 'Languages', value: project.value?.languages?.join(', '), icon: CommandLineIcon },
])
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
        
        <a 
          :href="project.websiteUrl" 
          target="_blank"
          class="pointer-events-auto h-12 px-6 rounded-full bg-primary-600 text-white flex items-center gap-2 font-black transition-all hover:bg-primary-700 active:scale-95 shadow-xl shadow-primary-500/30"
        >
          <span class="text-sm">{{ isRTL ? 'زيارة الموقع' : 'Visit Live' }}</span>
          <ArrowTopRightOnSquareIcon class="w-5 h-5" />
        </a>
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
              <div class="flex-1 text-center font-mono text-[10px] text-slate-400 dark:text-slate-500 truncate">
                {{ project.websiteUrl }}
              </div>
           </div>
           
           <!-- Main Visual -->
           <div class="relative group">
             <img 
               :src="project.image" 
               :alt="project.title" 
               class="w-full aspect-[16/10] md:aspect-[16/8] object-cover hover:scale-105 transition-transform duration-1000"
             />
             <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
           </div>
        </div>
      </div>

      <!-- Quick Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 reveal-up" style="animation-delay: 0.2s">
        <div v-for="(stat, idx) in stats" :key="idx" class="glass-card p-6 flex items-center gap-4 rounded-3xl border border-slate-100 dark:border-slate-800">
          <div class="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
            <component :is="stat.icon" class="w-6 h-6" />
          </div>
          <div>
            <p class="text-[20px] font-black uppercase tracking-widest text-slate-400 mb-1">{{ stat.label }}</p>
            <p class="text-sm font-black text-slate-800 dark:text-slate-100 leading-tight">{{ stat.value }}</p>
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
          <span>{{ isRTL ? 'استكشف المشروع الآن' : 'Explore Now' }}</span>
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
