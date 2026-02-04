<script setup>
import { ref } from 'vue'
import { 
  CalendarIcon, 
  ClockIcon, 
  ChevronRightIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BeakerIcon,
  XMarkIcon,
  CheckBadgeIcon,
  ShareIcon,
  BookmarkIcon,
  FireIcon
} from '@heroicons/vue/24/outline'

const selectedPost = ref(null)

const posts = [
  {
    id: 1,
    title: 'مستقبل الذكاء الاصطناعي في تطوير الويب 2025',
    excerpt: 'كيف ستغير النماذج اللغوية الكبيرة طريقة كتابتنا للكود وبناء واجهات المستخدم في السنوات القليلة القادمة.',
    description: `
      <p class="mb-6 text-lg leading-relaxed">مع دخولنا عام 2025، لم يعد الذكاء الاصطناعي مجرد أداة مساعدة، بل أصبح جزءاً لا يتجزأ من دورة حياة تطوير البرمجيات. من كتابة الأكواد الآلية إلى توليد واجهات المستخدم المعقدة في ثوانٍ، يشهد المجال تحولاً جذرياً.</p>
      
      <div class="bg-slate-900 rounded-2xl p-6 mb-8 text-primary-400 font-mono text-sm overflow-x-auto border border-white/10 shadow-2xl" dir="ltr">
        <code class="block whitespace-pre">// Future of AI Integration
const component = await AI.generateComponent({
  description: "Advanced Glassmorphism Dashboard",
  framework: "Vue3",
  styling: "TailwindV4"
});</code>
      </div>

      <h3 class="text-2xl font-black mb-4 text-slate-900 dark:text-white">1. توليد الأكواد المتقدم</h3>
      <p class="mb-6 leading-relaxed">النماذج اللغوية مثل GPT-5 و Claude 4 أصبحت قادرة على فهم سياق المشاريع الضخمة، وليس فقط الوظائف الفردية. هذا يعني أن المطورين سيركزون أكثر على المعمارية (Architecture) بدلاً من كتابة الكود السطحي.</p>
      
      <h3 class="text-2xl font-black mb-4 text-slate-900 dark:text-white">2. واجهات المستخدم التكيفية</h3>
      <p class="mb-6 leading-relaxed">سيبدأ الويب في التحول نحو واجهات تتغير بناءً على سلوك المستخدم فورياً باستخدام نماذج ذكاء اصطناعي خفيفة تعمل داخل المتصفح.</p>
      
      <div class="bg-primary-50 dark:bg-primary-900/20 border-r-4 border-primary-500 p-6 mb-8 italic text-lg text-slate-700 dark:text-slate-300">
        "المطور الذي سيقود المستقبل هو من يتقن تطويع هذه الأدوات لصناعة تجارب إنسانية فريدة."
      </div>
    `,
    date: '21 ديسمبر 2024',
    readTime: '5 دقائق',
    category: 'الذكاء الاصطناعي',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    icon: CpuChipIcon,
    featured: true
  },
  {
    id: 2,
    title: 'ثورة الحوسبة الكمية: هل نحن مستعدون؟',
    excerpt: 'استكشاف لآفاق التشفير ومعالجة البيانات في عصر الحاسوب الكمي وتأثيره على أمن المعلومات العالمي.',
    description: `
      <p class="mb-6 text-lg leading-relaxed">الحوسبة الكمية ليست مجرد حواسيب أسرع، بل هي طريقة مختلفة تماماً لمعالجة المعلومات تعتمد على "الكيوبتس" بدلاً من البتات التقليدية.</p>
      
      <h3 class="text-2xl font-black mb-4 text-slate-900 dark:text-white">التحدي الأمني</h3>
      <p class="mb-6 leading-relaxed">أكبر قلق يواجه العالم الرقمي اليوم هو قدرة الحواسيب الكمية على كسر أنظمة التشفير الحالية مثل RSA. هذا أدى لظهور ما يعرف بـ "التشفير ما بعد الكم" (Post-Quantum Cryptography).</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="glass p-6 rounded-2xl border-primary-500/20">
          <h4 class="font-black mb-2 text-primary-600">القوة الكمية</h4>
          <p class="text-sm">معالجة ملايين الاحتمالات في أجزاء من الثانية.</p>
        </div>
        <div class="glass p-6 rounded-2xl border-cyan-500/20">
          <h4 class="font-black mb-2 text-cyan-600">التشفير الجديد</h4>
          <p class="text-sm">خوارزميات جديدة مضادة للاختراق الكمي.</p>
        </div>
      </div>
    `,
    date: '15 ديسمبر 2024',
    readTime: '8 دقائق',
    category: 'المستقبل',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: GlobeAltIcon,
    featured: false
  },
  {
    id: 3,
    title: 'أفضل تقنيات تطوير الواجهات الأمامية لعام 2025',
    excerpt: 'لماذا يتصدر Vue 3 و Tailwind v4 المشهد البرمجي، وكيف تختار تقنيات مشروعك القادم بكفاءة.',
    description: `
      <p class="mb-6 text-lg leading-relaxed">تطوير الواجهات الأمامية يتجه نحو البساطة والأداء العالي. إليك أهم الأدوات لعام 2025:</p>
      
      <ul class="space-y-4 mb-8">
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-primary-500 mt-2.5"></div>
          <div>
            <strong class="text-slate-900 dark:text-white block text-lg">Vue 3 & Vapor Mode</strong>
            <span class="text-slate-500">التركيز على القضاء على الـ Virtual DOM للحصول على أداء خارق وسرعة تحميل لا تُضاهى.</span>
          </div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-2 h-2 rounded-full bg-cyan-500 mt-2.5"></div>
          <div>
            <strong class="text-slate-900 dark:text-white block text-lg">Tailwind CSS v4</strong>
            <span class="text-slate-500">تحولات جذرية في سرعة البناء ودعم الميزات الحديثة للمتصفحات بشكل أصيل.</span>
          </div>
        </li>
      </ul>
      
      <p class="leading-relaxed">اختيار التقنية المناسبة يعتمد على نوع المشروع، ولكن البقاء في بيئة Vue يضمن لك التوازن المثالي بين الإنتاجية والأداء.</p>
    `,
    date: '10 ديسمبر 2024',
    readTime: '6 دقائق',
    category: 'برمجيات',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: BeakerIcon,
    featured: false
  },
  {
    id: 4,
    title: 'الأمن السيبراني في عصر السحابة 2025',
    excerpt: 'نظرة شاملة على استراتيجيات الحماية المتقدمة وكيفية تأمين البنية التحتية السحابية من التهديدات المتطورة.',
    description: `
      <p class="mb-6 text-lg leading-relaxed">مع انتقال معظم البنى التحتية إلى السحابة، أصبح الأمن السيبراني المحور الأساسي لضمان استمرارية الأعمال وحماية البيانات الحساسة.</p>
      
      <h3 class="text-2xl font-black mb-4 text-slate-900 dark:text-white">نموذج الثقة الصفرية (Zero Trust)</h3>
      <p class="mb-6 leading-relaxed">لم يعد كافياً حماية "المحيط"؛ الآن يجب التحقق من كل طلب وصول بغض النظر عن مصدره. الثقة الصفرية هي المعيار الجديد للشركات الكبرى في 2025.</p>
      
      <div class="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-6 mb-8 italic text-lg text-slate-700 dark:text-slate-300">
        "الأمن ليس مجرد جدار حماية، بل هو ثقافة تبدأ من أصغر كود برمجي."
      </div>
    `,
    date: '5 ديسمبر 2024',
    readTime: '7 دقائق',
    category: 'أمان رقمي',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    icon: CheckBadgeIcon,
    featured: false
  },
  {
    id: 5,
    title: 'تصميم UX العاطفي: ما وراء الواجهات',
    excerpt: 'كيف ننتقل من تصميم واجهات وظيفية إلى بناء تجارب ترتبط عاطفياً بالمستخدمين وتزيد من ولائهم.',
    description: `
      <p class="mb-6 text-lg leading-relaxed">التصميم الناجح هو الذي يترك أثراً إيجابياً في مشاعر المستخدم، وليس فقط الذي يؤدي الوظيفة المطلوبة بسرعة.</p>
      
      <h3 class="text-2xl font-black mb-4 text-slate-900 dark:text-white">سيكولوجية الألوان والحركة</h3>
      <p class="mb-6 leading-relaxed">استخدام الانيميشن الدقيق والألوان المدروسة يمكن أن يقلل من توتر المستخدم ويزيد من شعوره بالرضا أثناء استخدام التطبيق.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="glass p-6 rounded-2xl border-indigo-500/20">
          <h4 class="font-black mb-2 text-indigo-600">التعاطف الرقمي</h4>
          <p class="text-sm">فهم احتياجات المستخدم النفسية قبل التقنية.</p>
        </div>
        <div class="glass p-6 rounded-2xl border-purple-500/20">
          <h4 class="font-black mb-2 text-purple-600">الولاء للعلامة</h4>
          <p class="text-sm">بناء علاقة ثقة من خلال تفاصيل التصميم.</p>
        </div>
      </div>
    `,
    date: '1 ديسمبر 2024',
    readTime: '6 دقائق',
    category: 'تصميم',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    icon: FireIcon,
    featured: false
  }
]

const openPost = (post) => {
  selectedPost.value = post
  document.body.style.overflow = 'hidden'
}

const closePost = () => {
  selectedPost.value = null
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <div class="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
    <!-- Luxury Background Decorations -->
    <div class="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-500/5 blur-[160px] rounded-full -z-10 animate-pulse-slow"></div>
    <div class="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[140px] rounded-full -z-10 animate-pulse-slow-reverse"></div>
    
    <!-- SVG Pattern Background Overlay -->
    <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10 overflow-hidden">
      <svg width="100%" height="100%">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto space-y-24">
      <header class="text-center space-y-8 reveal" dir="rtl">
        <div class="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-primary-500/20 text-primary-600 dark:text-primary-400 font-black text-sm tracking-widest uppercase shadow-2xl">
          <FireIcon class="w-5 h-5 animate-bounce" />
          <span>أفكار تشكل المستقبل</span>
        </div>
        <h1 class="text-5xl md:text-9xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
          مدونة <br> <span class="bg-gradient-to-r from-primary-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent italic">النخبة.</span>
        </h1>
        <p class="text-slate-500 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-medium capitalize">
          مساحة مخصصة لاستكشاف الحدود القصوى للتكنولوجيا والبرمجة.
        </p>
      </header>

      <!-- Elite Magazine Grid Layout -->
      <div class="space-y-12" dir="rtl">
        <!-- Featured Post - Takes Full Width -->
        <article 
          v-for="post in posts.filter(p => p.featured)" 
          :key="post.id"
          @click="openPost(post)"
          class="group cursor-pointer relative grid lg:grid-cols-2 bg-white dark:bg-slate-900/80 rounded-[4rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.15)] transition-all duration-700 reveal shadow-2xl"
        >
          <div class="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:bg-gradient-to-l opacity-60"></div>
          </div>
          <div class="p-10 md:p-20 flex flex-col justify-center space-y-8 relative">
             <div class="inline-flex items-center gap-4">
                <span class="bg-primary-600 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest shadow-xl shadow-primary-600/30">مقال مميز</span>
                <span class="text-slate-400 font-black text-xs uppercase tracking-widest">{{ post.category }}</span>
             </div>
             <h2 class="text-4xl md:text-6xl font-black leading-tight group-hover:text-primary-600 transition-colors">
               {{ post.title }}
             </h2>
             <p class="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-bold">
               {{ post.excerpt }}
             </p>
             <div class="flex items-center gap-8 text-sm font-black text-slate-400">
                <div class="flex items-center gap-2">
                   <ClockIcon class="w-5 h-5 text-primary-500" />
                   <span>{{ post.readTime }} قراءة</span>
                </div>
                <div class="flex items-center gap-2">
                   <CalendarIcon class="w-5 h-5 text-indigo-500" />
                   <span>{{ post.date }}</span>
                </div>
             </div>
             <button class="w-fit inline-flex items-center gap-4 text-primary-600 font-black text-lg group/btn pt-4">
                <span>اكتشف المزيد</span>
                <ChevronRightIcon class="w-6 h-6 rotate-180 group-hover/btn:translate-x-[-8px] transition-transform" />
             </button>
          </div>
        </article>

        <!-- Secondary Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article 
            v-for="post in posts.filter(p => !p.featured)" 
            :key="post.id"
            @click="openPost(post)"
            class="group cursor-pointer bg-white dark:bg-slate-950/40 rounded-[3rem] p-4 border border-slate-100 dark:border-white/5 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl reveal shadow-xl"
          >
            <div class="aspect-video relative rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
              <div class="absolute top-6 left-6 flex gap-2">
                 <button class="bg-white/90 dark:bg-slate-900/90 p-3 rounded-xl backdrop-blur-xl shadow-xl hover:text-primary-600 transition-colors">
                    <BookmarkIcon class="w-5 h-5" />
                 </button>
                 <button class="bg-white/90 dark:bg-slate-900/90 p-3 rounded-xl backdrop-blur-xl shadow-xl hover:text-primary-600 transition-colors">
                    <ShareIcon class="w-5 h-5" />
                 </button>
              </div>
            </div>
            
            <div class="px-6 pb-6 space-y-6">
              <div class="flex justify-between items-center text-xs font-black text-slate-400 tracking-widest">
                 <span class="text-indigo-500 uppercase">{{ post.category }}</span>
                 <span>{{ post.date }}</span>
              </div>
              <h3 class="text-3xl font-black leading-tight group-hover:text-primary-600 transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-slate-500 dark:text-slate-400 leading-relaxed font-bold line-clamp-2">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center gap-3 text-primary-600 font-black">
                <ClockIcon class="w-5 h-5" />
                <span>{{ post.readTime }} قراءة</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- High-End Circular Newsletter -->
      <section class="relative reveal" dir="rtl">
        <div class="absolute inset-x-0 -top-12 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
        <div class="relative overflow-hidden rounded-[4rem] bg-slate-900 dark:bg-black p-12 md:p-24 shadow-[0_50px_100px_-15px_rgba(0,0,0,0.4)]">
           <!-- Animated Orbs -->
           <div class="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
           
           <div class="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div class="space-y-10">
                 <div class="w-24 h-24 bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl relative">
                    <div class="absolute inset-0 bg-white/20 rounded-3xl animate-ping opacity-20"></div>
                    <CpuChipIcon class="w-12 h-12 text-white" />
                 </div>
                 <h2 class="text-5xl md:text-7xl font-black text-white leading-tight">
                    كن جزءاً من <br> <span class="text-primary-500 underline decoration-indigo-500 decoration-8 underline-offset-[12px]">مجتمعنا</span> التقني.
                 </h2>
                 <p class="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-xl font-medium">
                    انضم إلى قائمة النخبة من المطورين والمبدعين واستلم أسبوعياً زبدة الأفكار والتقنيات مباشرة في بريدك.
                 </p>
                 <div class="flex flex-wrap gap-8 text-slate-300 font-black">
                    <div class="flex items-center gap-3">
                       <CheckBadgeIcon class="w-6 h-6 text-green-400" />
                       <span>مقالات حصرية</span>
                    </div>
                    <div class="flex items-center gap-3">
                       <CheckBadgeIcon class="w-6 h-6 text-green-400" />
                       <span>أدوات مجانية</span>
                    </div>
                 </div>
              </div>

              <div class="glass bg-white/5 border-white/10 p-10 md:p-14 rounded-[3.5rem] space-y-10">
                 <div class="space-y-2">
                    <h3 class="text-3xl font-black text-white">ابدأ رحلتك اليوم</h3>
                    <p class="text-slate-500">سوف تنضم إلى أكثر من 5,000 مشترك.</p>
                 </div>
                 <div class="space-y-5">
                    <input 
                      type="email" 
                      placeholder="بريدك الإلكتروني البروجيني" 
                      class="w-full bg-slate-950 border-b-2 border-white/10 px-8 py-6 rounded-2xl outline-none focus:border-primary-500 transition-all text-white text-xl font-bold placeholder:text-slate-700"
                    >
                    <button class="w-full bg-white text-slate-900 hover:bg-primary-600 hover:text-white font-black py-7 rounded-2xl transition-all shadow-2xl text-xl hover:scale-[1.02] transform active:scale-95">
                       تأكيد الاشتراك
                    </button>
                 </div>
                 <p class="text-center text-slate-600 text-sm font-bold">لا تقلق، نحن نكره البريد المزعج بقدر ما تفعل.</p>
              </div>
           </div>
        </div>
      </section>
    </div>

    <!-- Article Detail Modal -->
    <Transition name="modal">
      <div v-if="selectedPost" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" dir="rtl">
        <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" @click="closePost"></div>
        
        <div class="relative w-full max-w-5xl max-h-[92vh] glass bg-white dark:bg-slate-950 rounded-[4rem] overflow-hidden flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-white/10">
          <button 
            @click="closePost"
            class="absolute top-8 left-8 z-30 w-14 h-14 bg-slate-900/50 hover:bg-primary-600 text-white rounded-2xl flex items-center justify-center transition-all shadow-2xl backdrop-blur-xl"
          >
            <XMarkIcon class="w-8 h-8" />
          </button>

          <div class="overflow-y-auto custom-scrollbar">
            <div class="aspect-[21/9] relative">
              <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"></div>
            </div>

            <div class="px-8 md:px-24 pb-24 -mt-32 relative z-10">
              <div class="flex flex-wrap items-center gap-4 mb-10">
                <span class="bg-primary-600 text-white px-8 py-3 rounded-2xl text-sm font-black shadow-2xl shadow-primary-600/30">
                  {{ selectedPost.category }}
                </span>
                <span class="bg-slate-100 dark:bg-slate-800 text-slate-500 px-6 py-3 rounded-2xl text-sm font-black">
                  إصدار 2025
                </span>
              </div>

              <h2 class="text-4xl md:text-7xl font-black mb-10 leading-[1.1] text-slate-900 dark:text-white">
                {{ selectedPost.title }}
              </h2>

              <div class="flex flex-wrap items-center gap-10 text-base font-black text-slate-500 mb-16 border-b border-slate-100 dark:border-white/5 pb-10">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600">
                    <CalendarIcon class="w-6 h-6" />
                  </div>
                  <span>نُشر في: {{ selectedPost.date }}</span>
                </div>
                <div class="flex items-center gap-3 text-primary-600">
                  <div class="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center">
                    <ClockIcon class="w-6 h-6" />
                  </div>
                  <span>{{ selectedPost.readTime }} للمطالعة</span>
                </div>
              </div>

              <div 
                class="prose prose-2xl dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-20"
                v-html="selectedPost.description"
              ></div>

              <!-- Author Footer -->
              <div class="p-10 md:p-14 bg-slate-50 dark:bg-white/5 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-10">
                 <div class="flex items-center gap-8 text-right">
                    <div class="w-24 h-24 bg-gradient-to-tr from-primary-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-primary-600/30">MT</div>
                    <div>
                       <p class="text-2xl font-black text-slate-900 dark:text-white mb-2">بواسطة المطور المحترف</p>
                       <p class="text-slate-500 font-bold">مهندس برمجيات أول وكاتب تقني متخصص في الأنظمة الحديثة.</p>
                    </div>
                 </div>
                 <div class="flex gap-4">
                    <button class="bg-primary-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">متابعة الكاتب</button>
                    <button class="bg-white dark:bg-slate-800 px-8 py-5 rounded-2xl font-black border border-slate-100 dark:border-white/5 hover:bg-slate-100 transition-all">مشاركة</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.custom-scrollbar::-webkit-scrollbar { width: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
.dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }

/* Elite Animations */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from { opacity: 0; transform: translateY(100px) scale(0.95); }
.modal-leave-to { opacity: 0; transform: translateY(100px) scale(0.95); }

@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; transform: scale(1) translate(0, 0); }
  50% { opacity: 0.4; transform: scale(1.1) translate(40px, -20px); }
}

@keyframes pulse-slow-reverse {
  0%, 100% { opacity: 0.1; transform: scale(1) translate(0, 0); }
  50% { opacity: 0.3; transform: scale(1.1) translate(-40px, 40px); }
}

.animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
.animate-pulse-slow-reverse { animation: pulse-slow-reverse 18s ease-in-out infinite; }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

:deep(.prose h3) {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 900;
}
</style>
