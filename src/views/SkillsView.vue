<script setup>
import { 
  CommandLineIcon, 
  PaintBrushIcon, 
  WrenchScrewdriverIcon, 
  CloudIcon,
  ServerIcon,
  CircleStackIcon
} from '@heroicons/vue/24/outline'

const skillCategories = [
  {
    name: 'تطوير الواجهات (Frontend)',
    icon: PaintBrushIcon,
    skills: [
      { name: 'Vue.js 3 / Nuxt', level: 90 },
      { name: 'Html ,CSS', level: 95 },
      { name: 'Tailwind CSS v4', level: 90 },
      { name: 'JaveScript', level: 85 }
    ]
  },
  {
    name: 'تطوير الخلفية (Backend)',
    icon: ServerIcon,
    skills: [
      { name: 'PHP / Laravel', level: 95 },
      { name: 'Livewire / Filament', level: 90 },
      { name: 'MYSQL', level: 85 },
      { name: 'RESTful APIs', level: 90 }
    ]
  },
  {
    name: 'الأدوات والمنصات (Tools)',
    icon: WrenchScrewdriverIcon,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'Claude, Antigravity , Codex, OpenCode ', level: 90 }
    ]
  }
]
</script>

<template>
  <div class="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full -z-10"></div>
    <div class="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full -z-10"></div>

    <div class="max-w-6xl mx-auto space-y-16">
      <header class="text-center space-y-4 reveal" dir="rtl">
        <h2 class="text-primary-600 font-black tracking-widest uppercase text-sm">مجموعة الأدوات التقنية</h2>
        <h1 class="text-4xl md:text-6xl font-black tracking-tight text-slate-900">
          مهاراتي <span class="text-primary-600">والخبرات</span> التقنية
        </h1>
        <p class="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          أستخدم أحدث التقنيات لبناء تطبيقات ويب قوية، قابلة للتطوير، وذات تجربة مستخدم استثنائية.
        </p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal" dir="rtl">
        <div 
          v-for="category in skillCategories" 
          :key="category.name" 
          class="glass p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500"
        >
          <div class="flex items-center gap-4 mb-10">
            <div class="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-600">
              <component :is="category.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-black">{{ category.name }}</h3>
          </div>

          <div class="space-y-8">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between items-center mb-3">
                <span class="font-bold text-slate-700">{{ skill.name }}</span>
                <span class="text-sm font-black text-primary-600">{{ skill.level }}%</span>
              </div>
              <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-primary-600 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Badge Cloud (Example of another style) -->
        <div class="glass p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center items-center text-center space-y-8">
          <div class="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-cyan-600">
            <CommandLineIcon class="w-10 h-10" />
          </div>
          <h3 class="text-2xl font-black">تقنيات أخرى أتقنها</h3>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tag in ['Electron', 'WebSockets', 'GraphQL', 'Vite', 'Pinia', 'Canva', 'Sass','Build Videos,Images']" :key="tag" class="px-5 py-2.5 bg-slate-100 rounded-full text-sm font-bold text-slate-600 hover:bg-primary-600 hover:text-white transition-colors cursor-default">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

</style>
