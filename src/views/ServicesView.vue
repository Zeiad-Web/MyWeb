<script setup>
import { 
  LanguageIcon,
  CodeBracketIcon,
  CloudArrowUpIcon,
  PaintBrushIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  CursorArrowRaysIcon,
  CheckBadgeIcon
} from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue'

const services = [
  {
    title: 'تطوير مواقع الويب المخصصة',
    text: 'بناء تطبيقات ويب متكاملة باستخدام Laravel و Vue، مع التركيز على هندسة قواعد بيانات قوية وأكواد نظيفة قابلة للتوسع لضمان أداء تقني فائق وكفاءة عالية.',
    icon: CodeBracketIcon,
    features: ['بنية سحابية متطورة', 'لوحات تحكم برمجية', 'تكامل APIs']
  },
  {
    title: 'نشر وإدارة الاستضافات السحابية',
    text: 'نشر احترافي للمشاريع عبر Vercel و Hostinger، يشمل إعداد السيرفرات، ربط النطاقات، وتأمين الموقع بشهادات SSL لضمان انطلاقة تقنية آمنة وخالية من الأخطاء.',
    icon: CloudArrowUpIcon,
    features: ['إدارة سيرفرات AWS/Vercel', 'شهادات SSL مجانية', 'تحسين محركات البحث (SEO)']
  },
  {
    title: 'الهوية البصرية والحلول الإبداعية',
    text: 'تحويل أفكارك إلى هوية بصرية فريدة تدمج بين الجمال الفني والوظيفة التقنية، لبناء حضور رقمي استثنائي يعزز قيمة علامتك التجارية ويجذب جمهورك المستهدف.',
    icon: PaintBrushIcon,
    features: ['تصميم UX/UI حديث', 'تناسق لوني براندنج', 'واجهات تفاعلية']
  },
  {
    title: 'هندسة الحلول الذكية والأتمتة',
    text: 'تطوير أنظمة ويب ذكية تدمج تقنيات الذكاء الاصطناعي لأتمتة المهام اليومية المتكررة، مما يرفع كفاءة العمل ويمنح مشروعك ميزة تنافسية مستدامة في السوق.',
    icon: SparklesIcon,
    features: ['روبوتات أتمتة مهام', 'تكامل OpenAI/AI', 'تحليل بيانات ذكي']
  },
  {
    title: 'تحويل الأفكار إلى منتجات رقمية',
    text: 'تحويل رؤيتك التقنية إلى واقع ملموس عبر بناء منصات مخصصة تجمع بين سرعة الأداء وتجربة المستخدم المثالية، لضمان دخول السوق بمنتج تقني منافس وقوي.',
    icon: RocketLaunchIcon,
    features: ['إطلاق MVP سريع', 'استشارات تقنية متخصص', 'توسع تدريجي مدروس']
  },
  {
    title: 'أنظمة إدارة الأعمال ERP/CRM',
    text: 'بناء لوحات تحكم وأنظمة إدارة داخلية مخصصة لأتمتة العمليات المعقدة وتنظيم البيانات الضخمة، مما يساعدك على اتخاذ قرارات دقيقة بناءً على تقارير تحليلية حية.',
    icon: ChartBarIcon,
    features: ['إدارة مخازن وعملاء', 'تقارير مالية حية', 'صلاحيات مستخدمين']
  }
]

const workflowSteps = [
  { title: 'التخطيط والتحليل', icon: LightBulbIcon, color: 'from-blue-500 to-cyan-400' },
  { title: 'التصميم التفاعلي', icon: CursorArrowRaysIcon, color: 'from-purple-500 to-pink-500' },
  { title: 'التطوير البرمجي', icon: CodeBracketIcon, color: 'from-primary-600 to-indigo-600' },
  { title: 'الإطلاق والدعم', icon: RocketLaunchIcon, color: 'from-emerald-500 to-teal-400' }
]

const serviceCards = ref([])
const activeCardIndex = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = serviceCards.value.indexOf(entry.target)
        if (index !== -1) {
          activeCardIndex.value = index
        }
      }
    })
  }, {
    threshold: 0.6,
    rootMargin: '-10% 0px -10% 0px'
  })

  serviceCards.value.forEach((card) => {
    if (card) observer.observe(card)
  })
})

</script>

<template>
  <div class="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
    <!-- Animated Background Blobs -->
    <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-500/10 blur-[150px] rounded-full -z-10 animate-blob"></div>
    <div class="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 blur-[150px] rounded-full -z-10 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-indigo-500/10 blur-[150px] rounded-full -z-10 animate-blob animation-delay-4000"></div>

    <div class="max-w-6xl mx-auto space-y-32 relative">
      <!-- Hero Section -->
      <section class="text-center space-y-8 reveal py-12" dir="rtl">
        <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-black text-sm mb-4 border border-primary-500/20 shadow-lg shadow-primary-500/5">
           <SparklesIcon class="w-5 h-5 animate-pulse" />
           <span>اصمم المستقبل بلمسة إبداع</span>
        </div>
        <h1 class="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
          احول رؤيتك إلى <span class="bg-gradient-to-l from-primary-600 to-cyan-500 bg-clip-text text-transparent">واقع رقمي</span> مبهر.
        </h1>
        <p class="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
          أقدم حلولاً تقنية متكاملة تتجاوز حدود التوقعات، تجمع بين هندسة الكود المتينة وجمال التصميم الأخّاذ لضمان تجربة مستخدم لا تُنسى.
        </p>
      </section>

      <!-- Services Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" dir="rtl">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          ref="serviceCards"
          class="group relative overflow-hidden rounded-[2.5rem] p-[2px] transition-all duration-700 hover:-translate-y-3"
          :class="{ 'mobile-active': activeCardIndex === index }"
        >
          <!-- Animated Border Glow (Heavenly Style) -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500 via-cyan-400 to-indigo-600 opacity-20 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative h-full bg-white dark:bg-slate-900 rounded-[2.4rem] p-8 lg:p-10 flex flex-col transition-colors duration-500 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90">
            <!-- Icon Container -->
            <div class="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <component :is="service.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>

            <h3 class="text-2xl lg:text-3xl font-black mb-4 text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
              {{ service.text }}
            </p>

            <!-- Feature List -->
            <div class="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
               <div v-for="feature in service.features" :key="feature" class="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                 <div class="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-lg shadow-primary-500/50"></div>
                 {{ feature }}
               </div>
            </div>

            <!-- Learn More Arrow -->
            <div class="mt-8 flex items-center gap-2 text-primary-600 font-black text-sm group-hover:translate-x-[-8px] transition-transform">
               <span>اكتشف المزيد</span>
               <ArrowRightIcon class="w-4 h-4 rotate-180" />
            </div>
          </div>
        </div>
      </section>

      <!-- Workflow Journey Section -->
      <section class="space-y-16 reveal" dir="rtl">
        <div class="text-center space-y-4">
          <h2 class="text-3xl md:text-5xl font-black">رحلة <span class="bg-gradient-to-l from-primary-600 to-indigo-600 bg-clip-text text-transparent">العمل</span> المتقن</h2>
          <p class="text-slate-500 max-w-2xl mx-auto text-lg">كيف احول فكرتك من مجرد مسودة إلى منتج رقمي متكامل.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
           <div v-for="(step, index) in workflowSteps" :key="step.title" class="relative group text-center">
             <!-- Connector Line (Desktop) -->
             <div v-if="index < 3" class="hidden md:block absolute top-1/2 left-[-15%] w-1/4 h-0.5 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -z-10"></div>
             
             <div class="w-20 h-20 mx-auto bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:border-primary-500 transition-colors duration-500 relative">
                <div class="absolute inset-0 bg-primary-500/10 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 blur-xl"></div>
                <component :is="step.icon" class="w-10 h-10 text-slate-800 dark:text-white" />
                <div class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center font-black text-xs">
                  {{ index + 1 }}
                </div>
             </div>
             <h4 class="text-xl font-black text-slate-900 dark:text-white">{{ step.title }}</h4>
           </div>
        </div>
      </section>

      <!-- CTA (Call to Action) -->
      <section class="reveal px-4">
        <div class="relative overflow-hidden rounded-[3rem] p-12 lg:p-20 text-center space-y-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900">
           <!-- Decor -->
           <div class="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-[100px] rounded-full"></div>
           <div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full"></div>

           <h2 class="text-3xl md:text-5xl font-black relative z-10">هل أنت مستعد لبدء مشروعك القادم؟</h2>
           <p class="text-slate-400 dark:text-slate-500 max-w-2xl mx-auto text-xl relative z-10">دعنا نتحدث عن رؤيتك وكيف يمكننا مساعدتك في تحقيقها بأفضل جودة تقنية ممكنة.</p>
           
           <div class="flex flex-wrap justify-center gap-6 pt-8 relative z-10">
              <router-link to="/contact" class="flex items-center gap-3 bg-primary-600 text-white px-10 py-5 rounded-3xl font-black hover:scale-105 transition-all shadow-2xl hover:shadow-primary-600/40">
                <ChatBubbleBottomCenterTextIcon class="w-6 h-6" />
                <span>احجز استشارتك المجانية</span>
              </router-link>
              <router-link to="/projects" class="flex items-center gap-3 border-2 border-white/20 dark:border-slate-900/10 px-10 py-5 rounded-3xl font-black hover:bg-white/10 dark:hover:bg-slate-900/5 transition-all">
                <span>رؤية أعمالي</span>
                <ArrowRightIcon class="w-6 h-6 rotate-180" />
              </router-link>
           </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 15s infinite alternate;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
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

.mobile-active {
  transform: translateY(-12px);
}

.mobile-active > div:first-child {
  opacity: 1 !important;
}

/* Ensure text doesn't turn white on white background */
.group:hover h3, 
.mobile-active h3 {
  color: theme('colors.primary.600');
}

.dark .group:hover h3, 
.dark .mobile-active h3 {
  color: theme('colors.primary.400');
}


</style>
