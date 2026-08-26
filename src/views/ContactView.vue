<script setup>
import { ref } from 'vue'
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  PhoneIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  UserIcon,
  InformationCircleIcon
} from '@heroicons/vue/24/outline'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const submitted = ref(false)
const loading = ref(false)

const submitForm = async () => {
  if (!name.value || !email.value) return
  
  loading.value = true
  // Simulate professional API latency
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log({ 
    name: name.value, 
    email: email.value, 
    subject: subject.value, 
    message: message.value 
  })
  
  submitted.value = true
  loading.value = false
  
  // Reset fields with a slight delay for smooth transition
  setTimeout(() => {
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  }, 300)
  
  // Keep success message for 8 seconds for luxury feel
  setTimeout(() => {
    submitted.value = false
  }, 8000)
}

const contactInfo = [
  {
    title: 'رقم الهاتف',
    value: '775932431',
    link: 'https://wa.me/967775932431',
    icon: PhoneIcon,
    color: 'from-emerald-500 to-teal-500',
    delay: '0'
  },
  {
    title: 'البريد الإلكتروني',
    value: 'zeiadalriqi@gmail.com',
    link: 'mailto:zeiadalriqi@gmail.com',
    icon: EnvelopeIcon,
    color: 'from-blue-500 to-cyan-500',
    delay: '100'
  },
  {
    title: 'الموقع',
    value: ' اليمن , صنعاء',
    link: '#',
    icon: MapPinIcon,
    color: 'from-purple-500 to-pink-500',
    delay: '200'
  }
]
</script>

<template>
  <div class="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
    <!-- Sophisticated Background Glows -->
    <div class="absolute top-[-10%] right-[-10%] w-200 h-200 bg-primary-500/10 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-indigo-500/10 blur-[120px] rounded-full -z-10 animate-pulse-slow-reverse"></div>

    <div class="max-w-7xl mx-auto space-y-20">
      <header class="text-center space-y-6 reveal" dir="rtl">
        <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-black text-sm tracking-widest uppercase">
          <InformationCircleIcon class="w-5 h-5" />
          <span>متاح رسمياً للمشاريع</span>
        </div>
        <h1 class="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          لنحوّل <span class="bg-linear-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">رؤيتك</span> <br> 
          إلى واقع رقمي.
        </h1>
        <p class="text-slate-500 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
          سواء كنت تبحث عن بناء تطبيق او موقع جديد أو تحسين تجربة حالية، أنا هنا لأحول أفكارك إلى تجربة مستخدم لا تُنسى.
        </p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" dir="rtl">
        <!-- Sidebar: Info Cards & Quick Chat -->
        <div class="lg:col-span-4 space-y-8">
          <div 
            v-for="info in contactInfo" 
            :key="info.title" 
            class="group glass p-8 rounded-4xl border border-white/20 dark:border-white/5 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 reveal"
            :style="{ transitionDelay: info.delay + 'ms' }"
          >
            <a :href="info.link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-6">
              <div :class="`w-16 h-16 bg-linear-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500 text-white` ">
                <component :is="info.icon" class="w-8 h-8" />
              </div>
              <div class="text-right">
                <p class="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{{ info.title }}</p>
                <p class="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">{{ info.value }}</p>
              </div>
            </a>
          </div>

          <!-- Ultra-Luxury Quick Chat -->
          <div class="relative group reveal overflow-hidden rounded-[3rem]" style="transition-delay: 200ms">
            <div class="absolute inset-0 bg-linear-to-br from-primary-600 to-indigo-700"></div>
            <div class="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div class="relative p-10 space-y-8 text-white">
              <div class="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                <ChatBubbleLeftRightIcon class="w-10 h-10" />
              </div>
              <div class="space-y-4">
                <h3 class="text-3xl font-black">دردشة سريعة؟</h3>
                <p class="text-primary-100 text-lg leading-relaxed font-bold"> تواصل معي مباشرة عبر المنصات التالية للرد الفوري.</p>
              </div>
              <div class="flex gap-4">
                 <a href="https://wa.me/967775932431" target="_blank" rel="noopener noreferrer" class="flex-1 bg-white/10 hover:bg-white/20 py-4 rounded-2xl backdrop-blur-xl font-black transition-all border border-white/10 text-center">WhatsApp</a>
                 <a href="https://www.linkedin.com/in/zeiad-al-ariqi-91b431376/" target="_blank" rel="noopener noreferrer" class="flex-1 bg-white/10 hover:bg-white/20 py-4 rounded-2xl backdrop-blur-xl font-black transition-all border border-white/10 text-center">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Form: Legendary Interactive Form -->
        <div class="lg:col-span-8 reveal" style="transition-delay: 300ms">
          <div class="glass p-8 md:p-14 rounded-[3.5rem] border border-white/20 dark:border-white/5 shadow-2xl relative overflow-hidden">
            <!-- Form Success Overlay -->
            <Transition name="success-slide">
              <div v-if="submitted" class="absolute inset-0 z-50 glass bg-white/95 dark:bg-slate-950/95 flex flex-col items-center justify-center p-10 text-center">
                <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-green-500/40 animate-bounce-slow">
                   <CheckBadgeIcon class="w-16 h-16" />
                </div>
                <h2 class="text-4xl font-black mb-4">وصلت الرسالة بنجاح!</h2>
                <p class="text-xl text-slate-500 max-w-md font-bold">شكراً لثقتك. سأقوم بمراجعة طلبك والرد عليك شخصياً خلال 24 ساعة كحد أقصى.</p>
                <button @click="submitted = false" class="mt-10 px-8 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-black hover:bg-primary-600 hover:text-white transition-all">إرسال رسالة أخرى</button>
              </div>
            </Transition>

            <form @submit.prevent="submitForm" class="space-y-10 relative">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <!-- Name Input -->
                <div class="relative group">
                  <input 
                    v-model="name" 
                    type="text" 
                    id="name"
                    required
                    class="peer w-full bg-slate-50/50 dark:bg-slate-900/50 border-b-2 border-slate-200 dark:border-slate-800 px-6 pt-10 pb-4 rounded-t-2xl focus:border-primary-500 transition-all outline-none font-black text-lg"
                    placeholder=" "
                  >
                  <label 
                    for="name"
                    class="absolute right-6 top-6 text-slate-400 font-black uppercase tracking-widest text-sm transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-lg peer-focus:top-6 peer-focus:text-sm peer-focus:text-primary-600 cursor-text"
                  >
                    الاسم الكامل
                  </label>
                  <UserIcon class="absolute left-6 top-10 w-6 h-6 text-slate-300 group-focus-within:text-primary-500 transition-colors" />
                </div>

                <!-- Email Input -->
                <div class="relative group">
                  <input 
                    v-model="email" 
                    type="email" 
                    id="email"
                    required
                    class="peer w-full bg-slate-50/50 dark:bg-slate-900/50 border-b-2 border-slate-200 dark:border-slate-800 px-6 pt-10 pb-4 rounded-t-2xl focus:border-primary-500 transition-all outline-none font-black text-lg"
                    placeholder=" "
                  >
                  <label 
                    for="email"
                    class="absolute right-6 top-6 text-slate-400 font-black uppercase tracking-widest text-sm transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-lg peer-focus:top-6 peer-focus:text-sm peer-focus:text-primary-600 cursor-text"
                  >
                    البريد الإلكتروني
                  </label>
                  <EnvelopeIcon class="absolute left-6 top-10 w-6 h-6 text-slate-300 group-focus-within:text-primary-500 transition-colors" />
                </div>
              </div>

              <!-- Subject Input -->
              <div class="relative group">
                <input 
                  v-model="subject" 
                  type="text" 
                  id="subject"
                  required
                  class="peer w-full bg-slate-50/50 dark:bg-slate-900/50 border-b-2 border-slate-200 dark:border-slate-800 px-6 pt-10 pb-4 rounded-t-2xl focus:border-primary-500 transition-all outline-none font-black text-lg"
                  placeholder=" "
                >
                <label 
                  for="subject"
                  class="absolute right-6 top-6 text-slate-400 font-black uppercase tracking-widest text-sm transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-lg peer-focus:top-6 peer-focus:text-sm peer-focus:text-primary-600 cursor-text"
                >
                  الموضوع
                </label>
              </div>

              <!-- Message Input -->
              <div class="relative group">
                <textarea 
                  v-model="message" 
                  id="message"
                  required
                  rows="5"
                  class="peer w-full bg-slate-50/50 dark:bg-slate-900/50 border-b-2 border-slate-200 dark:border-slate-800 px-6 pt-10 pb-4 rounded-t-2xl focus:border-primary-500 transition-all outline-none font-black text-lg resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  for="message"
                  class="absolute right-6 top-6 text-slate-400 font-black uppercase tracking-widest text-sm transition-all peer-placeholder-shown:top-10 peer-placeholder-shown:text-lg peer-focus:top-6 peer-focus:text-sm peer-focus:text-primary-600 cursor-text"
                >
                  رسالتك
                </label>
              </div>

              <div class="pt-6">
                <button 
                  type="submit" 
                  :disabled="loading"
                  class="relative w-full group/btn overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-6 rounded-4xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div class="absolute inset-0 bg-linear-to-r from-primary-600 to-cyan-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                  
                  <template v-if="loading">
                    <div class="relative flex items-center gap-3">
                       <svg class="animate-spin h-6 w-6 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                         <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       <span class="text-xl">جاري المعالجة...</span>
                    </div>
                  </template>
                  <template v-else>
                    <span class="relative text-xl">بدء المحادثة الآن</span>
                    <PaperAirplaneIcon class="relative w-6 h-6 group-hover/btn:-translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                  </template>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Luxury Success Animation */
.success-slide-enter-active,
.success-slide-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.success-slide-enter-from {
  opacity: 0;
  transform: translateY(100px) scale(0.9);
}

.success-slide-leave-to {
  opacity: 0;
  transform: translateY(-100px) scale(0.9);
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1) translate(0, 0); }
  50% { opacity: 0.5; transform: scale(1.1) translate(20px, -20px); }
}

@keyframes pulse-slow-reverse {
  0%, 100% { opacity: 0.2; transform: scale(1) translate(0, 0); }
  50% { opacity: 0.4; transform: scale(1.1) translate(-30px, 30px); }
}

.animate-pulse-slow {
  animation: pulse-slow 15s ease-in-out infinite;
}

.animate-pulse-slow-reverse {
  animation: pulse-slow-reverse 18s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); }
}
</style>
