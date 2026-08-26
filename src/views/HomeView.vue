<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

import { RouterLink } from 'vue-router'
import { RocketLaunchIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import { useProjectsStore } from '../stores/projects'

const projectsStore = useProjectsStore()


import ziadImage from '/images/img6.png'

const typewriterText = ref('')
const titles = ["I'm Web Developer", "I'm Full-Stack Developer" , "I'm Freelancer"]
let titleIndex = 0
let charIndex = 0
let isDeleting = false
let typingSpeed = 150

const type = () => {
    const currentTitle = titles[titleIndex]
    
    if (isDeleting) {
        typewriterText.value = currentTitle.substring(0, charIndex - 1)
        charIndex--
        typingSpeed = 50
    } else {
        typewriterText.value = currentTitle.substring(0, charIndex + 1)
        charIndex++
        typingSpeed = 150
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true
        typingSpeed = 2000 // Pause at completion
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        titleIndex = (titleIndex + 1) % titles.length
        typingSpeed = 500 // Pause before next title
    }

    setTimeout(type, typingSpeed)
}

onMounted(() => {
    type()
})

const featuredProjects = computed(() => projectsStore.projects.slice(0, 2))

const hasVideo = (project) => {
  const url = project?.videoUrl
  if (!url) return false
  return /\.(mp4|webm|ogg|mov|m4v)$/i.test(url)
}


const stats = [
  { label: 'سنوات خبرة', value: '2+' },
  { label: 'مشروع مكتمل', value: '15+' },
  { label: 'ساعات عمل', value: '2000+' }
]

const socialLinks = [
  {
    name: 'Instagram',
    url: '#',
    viewBox: '0 0 16 16',
    path: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334'
  },
  {
    name: 'Facebook',
    url: '#',
    viewBox: '0 0 24 24',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
  },
    {
    name: 'GitHub',
    url: 'https://github.com/Zeiad-Web',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  },
  {
    name: 'X',
    url: '#',
    viewBox: '0 0 24 24',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/967775932431',
    viewBox: '0 0 24 24',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
  },

  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zeiad-al-ariqi-91b431376/',
    viewBox: '0 0 24 24',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  }
]
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Hero Background Glows -->
    <div class="glow-bg top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-500/20 rounded-full"></div>
    <div class="glow-bg bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full"></div>

    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 reveal">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-right space-y-8 animate-fade-in">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm">
            <SparklesIcon class="w-4 h-4" />
            <span>متاح للعمل الحر والمشاريع الكبيرة</span>
          </div>
          <div class="space-y-2 mb-6">
            <h2 class="text-3xl md:text-4xl font-bold text-primary-500 animate-fade-in" style="animation-delay: 0.1s">
              مرحباً، أنا
            </h2>
            <h1 class="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-tight animate-fade-in" style="animation-delay: 0.2s">
              زياد العريقي<span class="text-primary-600">.</span>
            </h1>
          </div>
          
          <h2 class="text-2xl md:text-4xl font-mono font-bold text-slate-700 dark:text-slate-300 min-h-[1.5em] flex items-center gap-2 mb-6 animate-fade-in" style="animation-delay: 0.3s" dir="ltr">
            <span class="text-primary-500"></span>
            <span>{{ typewriterText }}</span>
            <span class="w-1 h-8 md:h-12 bg-primary-600 animate-blink"></span>
          </h2>
          <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            أنا مطور برمجيات شغوف بدمج الكفاءة التقنية مع الإبداع البصري. أتخصص في بناء واجهات تفاعلية متطورة تمتاز بالسرعة الفائقة وسلاسة الأداء، حيث أقوم بتحويل العمليات البرمجية المعقدة إلى تجارب مستخدم بسيطة، ذكية، وذات أثر بصرى جذاب.".
          </p>
          <div class="mt-12 flex flex-col xl:flex-row items-center justify-between gap-10 animate-fade-in" style="animation-delay: 0.2s">
            
            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
              <RouterLink 
                to="/projects" 
                class="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group order-2 sm:order-1"
              >
                <RocketLaunchIcon class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>استعرض أعمالي</span>
              </RouterLink>

              <RouterLink 
                to="/contact" 
                class="w-full sm:w-auto px-8 py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-full font-black text-lg shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 order-1 sm:order-2"
              >
                <span>تواصل معي</span>
              </RouterLink>
            </div>

            <!-- Social Links -->
            <div class="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto justify-center xl:justify-end">
              <span class="text-slate-500 font-bold text-lg hidden xl:block">تابعني:</span>
              <div class="flex items-center gap-3 flex-wrap justify-center">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30"
                  :title="social.name"
                >
                  <svg class="w-6 h-6 fill-current" :viewBox="social.viewBox">
                    <path :d="social.path" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Visual Element / Image -->
        <div class="relative flex justify-center lg:justify-start animate-float">
          <div class="relative w-80 h-80 md:w-96 md:h-96">
            <div class="absolute inset-0 bg-primary-500 rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
            <div class="relative z-10 w-full h-full glass rounded-3xl p-3 flex items-center justify-center border-2 border-white/50 overflow-hidden shadow-2xl group">
               <img :src="ziadImage" alt="Ziad Al-Oraiqi" class="rounded-2xl object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110">

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border-y border-slate-100 dark:border-slate-800 reveal">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label" class="space-y-2">
          <p class="text-3xl md:text-4xl font-black text-primary-600 dark:text-primary-400">{{ stat.value }}</p>
          <p class="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wide">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-24 px-6 max-w-7xl mx-auto overflow-hidden reveal">
      <div class="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div class="space-y-4 text-right">
          <h2 class="text-4xl font-black tracking-tight">مشاريع <span class="text-primary-600">مختارة بعناية</span></h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-lg">كل مشروع هو رحلة من التصميم البرمجي والحلول المبتكرة التي تركز على المستخدم النهائي.</p>
        </div>
        <RouterLink to="/projects" class="text-primary-600 font-bold hover:underline flex items-center gap-2">
           مشاهدة جميع المشاريع
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="project in featuredProjects" :key="project.title" class="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-800">
          <div class="aspect-video overflow-hidden">
            <template v-if="hasVideo(project)">
              <video
                :src="project.videoUrl"
                :poster="project.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
              ></video>
            </template>
            <img v-else :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
               <div class="w-full">
                  <RouterLink 
                    :to="{ name: 'project-details', params: { slug: project.slug } }"
                    class="block w-full py-3 bg-white text-slate-900 rounded-xl font-black shadow-lg text-center"
                  >
                    تفاصيل المشروع
                  </RouterLink>
               </div>
            </div>
          </div>
          <div class="p-8 text-right">
            <div class="flex gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag" class="text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
            <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ project.description }}</p>
          </div>
          
        </div>
      </div>
      
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-blink {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
