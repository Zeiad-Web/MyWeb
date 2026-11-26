<script setup>
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  DocumentArrowDownIcon,
  CheckCircleIcon,
  LanguageIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'

// يمكنك استخدام الصور من مجلد public مباشرة هكذا بدون import
const ziadImage = '/images/img1.jpg'


const experienceData = [
  {
    title: ' خبير مبيعات',
    company: ' محلات فيتنام للأحذية',
    date: '2019 - 2020',
    description: 'بخبرة عملية في قطاع التجزئة، متخصص في تحليل احتياجات العملاء، أتمتة العمليات البيعية، وتحويل الزوار إلى مشترين لضمان أقصى نمو تجاري.".'
  },
  {
    title: ' عملت في مجال التوزيع والاشراف والمتابعة ومدخل بيانات',
    company: 'منظمة برنامج الاغذية العالمية (WEP)',
    date: '2020 - 2023',
    description: 'أخصائي عمليات بيانات ودعم لوجستي  بخبرة أربع سنوات متمكن في إدارة ومتابعة مخازن التوزيع، ولديه سجل حافل في تنظيم المخزون وترتيبه بكفاءة عالية لضمان سلاسة العمليات. امتلك خبرة متقدمة في الإشراف والمتابعة ، بالإضافة إلى مدخل بيانات'
  },
  {
    title: ' مطور ويب ومصمم حلول رقمية',
    company: 'منصات منها مستقل , خمسات ',
    date: '2024 - 2025',
    description: '"متخصص في بناء وتطوير مواقع ويب متكاملة على منصات العمل الحر، مع التركيز على دمج الحلول التقنية المبتكرة بالتصاميم الجذابة، وتقديم دعم فني مستمر لضمان أعلى مستويات رضا العملاء ونجاح المشاريع."'
  },
  {
    title: 'ممثل خدمة عملاء',
    company: ' شركة وي كاش (محفظة جوالي) ',
    date: '2025 - 2026',
    description: 'تقديم دعم فني واستشاري متكامل لمستخدمي المحفظة الإلكترونية، مع التركيز على حل المشكلات التقنية والمالية بسرعة ودقة. أمتلك مهارة عالية في إدارة اعتراضات العملاء وتقديم حلول فورية تضمن استمرارية الخدمة وتعزز من مستويات الرضا والولاء."'
  }
]

const educationData = [
  {
    title: 'بكالوريوس نظم المعلومات الادارية',
    institution: 'الجامعة اليمنية ',
    date: '2021 - 2025',
    description: 'بكالوريوس نظم المعلومات الإدارية - خريج متميز "حاصل على درجة البكالوريوس بتقدير امتياز (90%)، محققاً الترتيب الرابع على الدفعة. أمتلك خلفية أكاديمية قوية في الربط بين تكنولوجيا المعلومات وإدارة العمليات البرمجية بفعالية."'
  },
  {
    title: 'اللغة الانجليزية',
    institution: 'معهد New Horizons',
    date: ' 2020 - 2021',
    description: 'أكملت 11 دورة متقدمة في اللغة الإنجليزية . مع التركيز على تطوير مهارات القراءة، الكتابة، التحدث، والاستماع. واكتسبت خبرة عملية في التواصل المهني وتحسين إجادة اللغة..'
  },
  {
    title: '(ICDL) الرخصة الدولية للقيادة الحاسوب',
    institution: 'إ منصة ادارك',
    date: ' 2022',
    description: 'حصلت على الرخصة الدولية للقيادة الحاسوب (ICDL) بعد اجتياز جميع الاختبارات المطلوبة بنجاح. هذه الشهادة تعكس كفاءتي في استخدام الحاسوب وتطبيقاته المختلفة.'
  },
  {
    title: 'فترة تدريبيـة',
    institution: 'شركة ثيرد آي للبرمجيات',
    date: ' 2025',
    description: '  تجربة عملية في بيئة برمجية احترافية، حيث اكتسبت مهارات متقدمة في هندسة المتطلبات وتحويل الأفكار إلى نماذج برمجية. ساهم التدريب في تعميق فهمي لكيفية بناء تطبيقات ويب متكاملة تتبع المعايير الأكاديمية والتقنية الحديثة."'
  },
   {
    title: 'فترة تدريبيـة',
    institution: 'شركة يمن سوفت ',
    date: ' 2025',
    description: 'تجربة عملية في الحلول البرمجية، حيث ركزت على فهم بنية الأنظمة الإدارية والمحاسبية الضخمةERP. اكتسبت مهارات في تحليل دورات العمل المعقدة، إدارة قواعد البيانات، ومعالجة العمليات المالية والمخزنية وفقاً لأحدث المعايير البرمجية العالمية."'
  },
  

]

import { ref } from 'vue'

const languagesData = [
  { name: 'اللغة العربية', level: '(اللغة الأم)' },
  { name: 'اللغة الانجليزية', level: '( جيد جداً )' }
]</script>

<template>
  <div class="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full -z-10 animate-pulse-glow"></div>
    <div class="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full -z-10 animate-pulse-glow" style="animation-delay: 2s;"></div>

    <div class="max-w-6xl mx-auto space-y-32">
      <!-- Story Section -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
        <div class="relative group animate-fade-in order-2 lg:order-1">
          <div class="absolute inset-0 bg-primary-600 rounded-3xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform"></div>
          <div class="relative z-10 glass rounded-3xl p-4 border-2 border-white/50">
            <img 
              :src="ziadImage" 
              alt="Ziad Al-Oraiqi Professional Profile" 
              loading="lazy"
              decoding="async"
              class="rounded-2xl hover:scale-105 transition-all duration-700 w-full h-[500px] object-cover"
            >
            <div class="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl" dir="ltr">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
                      <CodeBracketIcon class="w-6 h-6" />
                    </div>
                    <div class="text-left">
                      <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Active coding</p>
                      <p class="text-sm font-bold">100+ Commits/mo</p>
                    </div>
                  </div>
            </div>
          </div>
        </div>

        <div class="text-right space-y-8 animate-fade-in order-1 lg:order-2" dir="rtl">
          <h2 class="text-primary-600 font-black tracking-widest uppercase text-sm">من أنا والقصة خلف الكود</h2>
          <h1 class="text-4xl md:text-6xl font-black leading-tight text-slate-900 dark:text-white">
            أبني جسوراً بين <span class="text-primary-600">الفكرة</span> والواقع الرقمي.
          </h1>
          <div class="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              بدأت رحلتي في عالم برمجة مواقع الويب منذ أكثر من 2 سنوات، كان شغفي دائماً هو كيفية تحويل الأسطر البرمجية الجامدة إلى واجهات حيوية تتفاعل مع المستخدم وتلبي احتياجاته.
            </p>
            <p>
              أنا لا أقوم بمجرد البرمجة؛ بل أصمم تجارب. أؤمن أن كل بكسل له وزن، وكل حركة لها معنى، والكفاءة هي المعيار الحقيقي للجودة. تخصصت في برمجة مواقع الويب ب استخدام بيئة عمل Vue.js , Laravel لأنها تمنحني المرونة لصياغة واجهات مستخدم مدهشة وسلسة.
            </p>
          </div>
        </div>
      </section>



      <!-- Resume / Professional Details Section (Premium Redesign) -->
      <section class="space-y-24 reveal px-4" dir="rtl">
        <div class="text-right space-y-6 max-w-4xl animate-fade-in">
          <h3 class="text-primary-500 font-bold text-lg tracking-widest flex items-center gap-3">
             <span class="w-8 h-1 bg-primary-500 rounded-full"></span>
             الخبرة والتعليم
          </h3>
          <h2 class="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
             السيرة الذاتية و الخبرات والمؤهلات <span class="bg-gradient-to-l from-primary-600 to-indigo-600 bg-clip-text text-transparent">التميز المهني</span> .
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">
            "أصمم وأطور حلول الويب المتقدمة ببراعة في بيئة Laravel & Vue. أركز على تقديم تجارب مستخدم استثنائية وبنية تحتية برمجية صلبة، مع شغف دائم بتوظيف أحدث التقنيات لضمان نجاح المشاريع واستدامتها تقنياً وجمالياً."
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          <!-- Glass Background Blur for the whole section -->
          <div class="absolute inset-0 bg-primary-500/5 blur-[100px] -z-10 rounded-full hidden lg:block"></div>

          <!-- Column 1: Experience -->
          <div class="space-y-12 lg:space-y-16">
            <div class="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-12">
               <div class="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg shadow-primary-500/20 lg:rotate-6 group-hover:rotate-0 transition-transform">
                  <BriefcaseIcon class="w-6 h-6 lg:w-8 lg:h-8 text-white" />
               </div>
               <div>
                  <h3 class="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">الخبرة المهنية</h3>
                  <div class="h-1.5 w-16 lg:w-24 bg-primary-500 mt-2 rounded-full opacity-50"></div>
               </div>
            </div>

            <div class="space-y-10 lg:space-y-12 relative">
              <!-- Animated Timeline Line -->
              <div class="absolute right-6 lg:right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-primary-300 to-transparent rounded-full opacity-20"></div>
              
              <div 
                v-for="(exp, index) in experienceData" 
                :key="exp.title" 
                class="relative pr-14 lg:pr-20 group"
              >
                <!-- Pulsing Glow Marker -->
                <div class="absolute right-[11px] lg:right-[22px] top-0">
                  <div class="relative flex items-center justify-center">
                    <div class="absolute w-8 h-8 lg:w-12 lg:h-12 bg-primary-500/20 rounded-full animate-ping"></div>
                    <div class="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full border-[3px] lg:border-4 border-white dark:border-slate-950 bg-primary-500 z-10 shadow-lg"></div>
                  </div>
                </div>

                <!-- Content Card -->
                <div class="glass-card group-hover:translate-x-[-5px] lg:group-hover:translate-x-[-10px] transition-all duration-500 p-6 lg:p-8 rounded-3xl lg:rounded-[2rem] border border-white/40 dark:border-white/10 shadow-xl hover:shadow-primary-500/10">
                  <div class="flex flex-wrap items-center justify-between gap-3 mb-4 lg:mb-6">
                    <span class="inline-flex items-center gap-2 px-3 py-1 lg:px-5 lg:py-2 rounded-xl lg:rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 font-bold text-xs lg:text-sm">
                      <CheckCircleIcon class="w-3 h-3 lg:w-4 lg:h-4" />
                      {{ exp.company }}
                    </span>
                    <span class="text-primary-500 font-black text-sm lg:text-lg bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-lg lg:rounded-xl">
                      {{ exp.date }}
                    </span>
                  </div>
                  <h4 class="text-xl lg:text-2xl font-black mb-3 lg:mb-4 text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                    {{ exp.title }}
                  </h4>
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-base lg:text-lg">
                    {{ exp.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Column 2: Education & Skills -->
          <div class="space-y-12 lg:space-y-16">
            <div class="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-12">
               <div class="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg shadow-cyan-500/20 lg:-rotate-6 group-hover:rotate-0 transition-transform">
                  <AcademicCapIcon class="w-6 h-6 lg:w-8 lg:h-8 text-white" />
               </div>
               <div>
                  <h3 class="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">التعليم والمؤهلات</h3>
                  <div class="h-1.5 w-16 lg:w-24 bg-cyan-500 mt-2 rounded-full opacity-50"></div>
               </div>
            </div>

            <div class="space-y-10 lg:space-y-12 relative">
              <!-- Animated Timeline Line -->
              <div class="absolute right-6 lg:right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-cyan-300 to-transparent rounded-full opacity-20"></div>

              <div 
                v-for="edu in educationData" 
                :key="edu.title" 
                class="relative pr-14 lg:pr-20 group"
              >
                <!-- Pulsing Glow Marker -->
                <div class="absolute right-[11px] lg:right-[22px] top-0">
                  <div class="relative flex items-center justify-center">
                    <div class="absolute w-8 h-8 lg:w-12 lg:h-12 bg-cyan-500/20 rounded-full animate-ping"></div>
                    <div class="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full border-[3px] lg:border-4 border-white dark:border-slate-950 bg-cyan-500 z-10 shadow-lg"></div>
                  </div>
                </div>

                <!-- Content Card -->
                <div class="glass-card group-hover:translate-x-[-5px] lg:group-hover:translate-x-[-10px] transition-all duration-500 p-6 lg:p-8 rounded-3xl lg:rounded-[2rem] border border-white/40 dark:border-white/10 shadow-xl hover:shadow-cyan-500/10">
                  <div class="flex flex-wrap items-center justify-between gap-3 mb-4 lg:mb-6">
                    <span class="inline-flex items-center gap-2 px-3 py-1 lg:px-5 lg:py-2 rounded-xl lg:rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs lg:text-sm">
                      <AcademicCapIcon class="w-3 h-3 lg:w-4 lg:h-4" />
                      {{ edu.institution }}
                    </span>
                    <span class="text-cyan-600 font-black text-sm lg:text-lg bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-lg lg:rounded-xl">
                      {{ edu.date }}
                    </span>
                  </div>
                  <h4 class="text-xl lg:text-2xl font-black mb-3 lg:mb-4 text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                    {{ edu.title }}
                  </h4>
                  <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-base lg:text-lg">
                    {{ edu.description }}
                  </p>
                </div>
              </div>

              <!-- Extra Section: Languages -->
              <div class="pt-12 pr-0 lg:pr-20">
                <div class="relative">
                  <div class="absolute top-0 right-[-10px] lg:right-[-68px] w-10 h-10 lg:w-12 lg:h-12 bg-indigo-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 z-10 translate-y-[-50%] lg:translate-y-0">
                    <LanguageIcon class="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div class="glass p-6 lg:p-10 rounded-3xl lg:rounded-[2.5rem] border border-white/50 dark:border-white/5 shadow-2xl space-y-6 lg:space-y-8 overflow-hidden relative group">
                    <!-- Decor Circles -->
                    <div class="absolute -top-10 -left-10 w-32 h-32 lg:w-40 lg:h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div class="absolute -bottom-10 -right-10 w-32 h-32 lg:w-40 lg:h-40 bg-primary-500/10 rounded-full blur-3xl"></div>

                    <h3 class="text-xl lg:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                      اللغات المتقنة
                    </h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <div v-for="lang in languagesData" :key="lang.name" class="p-4 lg:p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/60 dark:border-white/10 group/lang hover:bg-gradient-to-l hover:from-primary-600 hover:to-indigo-600 transition-all duration-500">
                        <p class="text-base lg:text-lg font-black text-slate-900 dark:text-white group-hover/lang:text-white mb-2">{{ lang.name }}</p>
                        <div class="flex items-center gap-2">
                           <div class="flex-1 h-2 lg:h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div class="h-full bg-primary-600 group-hover/lang:bg-white transition-all duration-1000" :style="{ width: lang.name === 'اللغة العربية' ? '100%' : '75%' }"></div>
                           </div>
                           <span class="text-xs lg:text-sm font-bold text-primary-600 dark:text-primary-400 group-hover/lang:text-white">{{ lang.level }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Download Button Centered -->
        <div class="flex justify-center pt-8 reveal">
           <a 
             href="/CV-lang.pdf" 
             download="Ziad-AlOraiqi-CV.pdf"
             class="relative group w-full max-w-sm lg:max-w-none"
           >
             <div class="absolute inset-0 bg-primary-600 rounded-2xl lg:rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div class="relative flex items-center justify-center gap-3 lg:gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 lg:px-16 lg:py-6 rounded-2xl lg:rounded-[2rem] font-black text-lg lg:text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 border border-white/20">
               <span class="text-sm lg:text-xl">تحميل ملف الخبرات (PDF)</span>
               <div class="w-8 h-8 lg:w-10 lg:h-10 bg-primary-600 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
                 <DocumentArrowDownIcon class="w-5 h-5 lg:w-6 lg:h-6 text-white" />
               </div>
             </div>
           </a>
        </div>
      </section>



    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}

.animate-pulse-glow {
  animation: pulse-glow 10s ease-in-out infinite;
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

.glass-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.dark .glass-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
