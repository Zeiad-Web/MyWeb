<script setup>
import { ref, nextTick, watch } from 'vue'
import { useLanguageStore } from '../stores/language'
import { getGeminiResponse } from '../utils/gemini'
const languageStore = useLanguageStore()
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const messageInput = ref('')
const messages = ref([
  { 
    id: 1, 
    text: 'مرحباً! 👋 أنا مساعدك الذكي. اسألني عن البرمجة، تطوير المواقع، المشاريع، أو أي موضوع آخر وسأحاول مساعدتك.', 
    isBot: true 
  }
])
const inputRef = ref(null)
const messagesContainer = ref(null)

watch(() => languageStore.locale, (locale) => {
  if (messages.value.length === 1 && messages.value[0].isBot) {
    messages.value[0].text = locale === 'ar'
      ? 'مرحباً! 👋 أنا مساعدك الذكي. اسألني عن البرمجة، تطوير المواقع، المشاريع، أو أي موضوع آخر وسأحاول مساعدتك.'
      : 'Hello! 👋 I am your smart assistant. Ask me about programming, web development, projects, or any other topic.'
  }
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      inputRef.value?.focus()
      scrollToBottom()
    })
  }
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const isThinking = ref(false)

const keywords = {
  greeting: ['هلا', 'مرحبا', 'السلام عليكم', 'سلام', 'hi', 'hello', 'hey', 'أهلاً', 'صباح الخير', 'مساء الخير', 'كيفك', 'شخبارك', 'كيف الحال', 'مرحبتين'],
  projects: ['مشاريع', 'اعمالك', 'أعمالك', 'مشروع', 'projects', 'work', 'سابقة اعمال', 'نماذج', 'معرض', 'بورتفوليو', 'portfolio', 'إنجازاتك', 'بنيت', 'صممت'],
  services: ['خدماتك', 'الخدمات', 'خدمة', 'بتسوي', 'تعمل', 'مجالك', 'services', 'what do you do', 'تصميم', 'برمجة', 'تطوير', 'تطبيق', 'موقع'],
  contact: ['تواصل', 'رقم', 'ايميل', 'بريد', 'contact', 'email', 'واتساب', 'واتس', 'whatsapp', 'موبايل', 'تلفون', 'هاتفك', 'حساباتك'],
  price: ['سعر', 'بكم', 'تكلفة', 'فلوس', 'price', 'cost', 'الميزانية', 'تكاليف', 'أسعار', 'كم يكلف', 'دفع', 'budget'],
  tech: ['تقنيات', 'لغات', 'vue', 'react', 'tech', 'stack', 'تكنولوجيا', 'نود', 'node', 'nuxt', 'vuejs', 'مكتبات', 'أدواتك'],
  experience: ['خبرة', 'سنين', 'متى بدأت', 'مستواك', 'خبرتك', 'experience', 'سنوات'],
  who: ['من انت', 'مين انت', 'who are you', 'bot', 'اسمك', 'عرفني', 'عنك', 'من زياد', 'مين زياد', 'نبذة', 'عن زياد'],
  thanks: ['شكرا', 'يسلمو', 'يعطيك العافية', 'مشكور', 'عفوا', 'ما قصرت', 'thank you', 'thanks'],
  hire: ['توظيف', 'نوظفك', 'شغل', 'فريلانسر', 'دوام', 'وظيفة', 'عمل', 'متاح', 'hire', 'freelance'],
  location: ['من وين', 'مكانك', 'وينك', 'بلدك', 'يمن', 'اليمن', 'مقيم', 'location', 'where are you'],
  resume: ['سيرة', 'سيرتك', 'ذاتية', 'cv', 'resume', 'مؤهلاتك', 'شهاداتك'],
  time: ['كم ياخذ', 'وقت', 'مده', 'مدة', 'زمن', 'متى تخلص', 'time', 'duration', 'اسبوع', 'شهر'],
  social: ['جيت هب', 'جتهب', 'github', 'لينكد', 'linkedin', 'منصات', 'سوشال'],
  languages: ['عربي', 'لغة', 'انجليزي', 'english', 'arabic', 'لغات وتحدث'],
  maintenance: ['صيانة', 'دعم', 'تعديل', 'تعديلات', 'support', 'maintenance', 'اصلاح'],
  availability: ['متواجد', 'موجود', 'الان', 'متصل', 'اونلاين', 'فاضي', 'مشغول'],
  hosting: ['استضافة', 'هوستنج', 'سيرفر', 'هوست', 'رفع', 'نشر', 'hosting', 'server', 'deploy', 'دومين'],
  payment: ['دفع', 'فيزا', 'تحويل', 'باي بال', 'paypal', 'payment', 'طريقة الدفع', 'أقساط'],
  meetings: ['اجتماع', 'مكالمة', 'زوم', 'zoom', 'meeting', 'ميتنج', 'مناقشة', 'نتصل', 'ميت'],
  design: ['تصميم', 'figma', 'مصمم', 'ui', 'ux', 'ديزاين', 'واجهات', 'فوتوشوب'],
  seo: ['سيو', 'بحث', 'جوجل', 'seo', 'تصدر', 'ارشفة', 'تسويق', 'محركات'],
  discounts: ['خصم', 'تخفيض', 'عرض', 'عروض', 'خصومات', 'بلاش', 'مجاني'],
  issues: ['عطل', 'خطأ', 'مايشتغل', 'يعلق', 'خربان', 'ايرور', 'error', 'bug']
}

const getBotResponse = (input) => {
  const text = input.toLowerCase()
  
  if (keywords.greeting.some(k => text.includes(k))) {
    return 'وعليكم السلام ورحمة الله! 👋 يا أهلاً وسهلاً بك في موقعي. كيف يمكنني مساعدتك أو توجيهك اليوم؟'
  }
  
  if (keywords.who.some(k => text.includes(k))) {
    return 'أنا المساعد الذكي الخاص بزياد العريقي 🤖! زياد هو مطور واجهات ويب وتطبيقات متكاملة (Full-Stack)، مُتخصص في تحويل الأفكار إلى واقع رقمي مبهر. ✨'
  }

  if (keywords.projects.some(k => text.includes(k))) {
    return 'لقد عملت على العديد من المشاريع الرائعة! يمكنك تصفح قسم "المشاريع" لرؤية الإبداع في التصميم والبرمجة. هل تبحث عن نوع محدد ببالك؟'
  }

  if (keywords.services.some(k => text.includes(k))) {
    return 'نقدم خدمات رقمية متكاملة! من برمجة وتطوير المواقع، إلى المتاجر الإلكترونية وتطبيقات الويب المخصصة. كل ذلك بأحدث التقنيات وأفضل معايير الجودة. 💡'
  }
  
  if (keywords.contact.some(k => text.includes(k))) {
    return 'أسعد جداً بتواصلك! يمكنك إرسال رسالة لي مباشرة عبر صفحة "تواصل معي" وسأرد عليك سريعاً، أو تواصل معي فوراً عبر أيقونة الواتساب أسفل الشاشة. 📞'
  }
  
  if (keywords.price.some(k => text.includes(k))) {
    return 'تختلف التكلفة بناءً على حجم المشروع والمميزات المطلوبة. أرسل لي تفاصيل فكرتك عبر نموذج التواصل، وسأقوم بالرد بعرض سعر دقيق وبأفضل قيمة ممكنة. 💎'
  }
  
  if (keywords.tech.some(k => text.includes(k))) {
    return 'أستخدم أحدث التقنيات العالمية: في الواجهات (Vue.js, Nuxt.js, TailwindCSS) وفي الخلفية (.Laravel / Node.js) وغيرها لضمان أداء خرافي لمشروعك! 💻'
  }

  if (keywords.experience.some(k => text.includes(k))) {
    return 'أمتلك خبرة عملية احترافية في بناء تطبيقات ومواقع ويب حديثة، وأنجزت العديد من المشاريع الناجحة بفضل الله. 🏆'
  }

  if (keywords.hire.some(k => text.includes(k))) {
    return 'أنا متاح حالياً للعمل الحر (Freelance) واستقبال المشاريع الجديدة! تواصل معي عبر الواتس لنتحدث عن تفاصيل مشروعك القادم وتأكد أنك ستحصل على نتيجة تبهرك. 🤝'
  }

  if (keywords.location.some(k => text.includes(k))) {
    return 'أنا متواجد في اليمن، صنعاء 🇾🇪. وأعمل مع عملاء من مختلف أنحاء العالم عن بُعد بكل سلاسة واحترافية.'
  }

  if (keywords.resume.some(k => text.includes(k))) {
    return 'بالتأكيد! يمكنك الاطلاع على سيرتي الذاتية في قسم "عنّي" للتعرف أكثر على مؤهلاتي الأكاديمية والعملية واهتماماتي. 📄'
  }

  if (keywords.time.some(k => text.includes(k))) {
    return 'تعتمد مدة إنجاز العمل على حجم المشروع. المشاريع البسيطة تأخذ أياماً، والكبيرة قد تحتاج لأسابيع. تواصل معي لتحديد مدة زمنية دقيقة لمشروعك! ⏱️'
  }

  if (keywords.social.some(k => text.includes(k))) {
    return 'يسعدني تواصلك! روابط حساباتي في LinkedIn ومستودعاتي في GitHub موجودة في أسفل الموقع. لا تتردد في متابعتي. 🔗'
  }

  if (keywords.languages.some(k => text.includes(k))) {
    return 'أتحدث اللغتين العربية والإنجليزية بطلاقة! ويمكنني تلبية احتياجات مشروعك واستهداف جمهورك بأي منهما. 🌍'
  }

  if (keywords.maintenance.some(k => text.includes(k))) {
    return 'نعم بكل تأكيد! أقدم خدمات صيانة ودعم فني مستمر بعد تسليم أي مشروع لضمان استقرار أعمالك بأعلى كفاءة ممكنة. 🛠️'
  }

  if (keywords.availability.some(k => text.includes(k))) {
    return 'أنا أحرص على التواجد والرد السريع على عملائي. اترك لي رسالة عبر الواتساب وسأرد عليك بأقرب فرصة ممكنة إن شاء الله! 🕒'
  }

  if (keywords.hosting.some(k => text.includes(k))) {
    return 'نعم! يمكنني التكفل برفع المشروع على أفضل السيرفرات السحابية (Hosting) ومساعدتك في حجز النطاق (Domain) ليصبح موقعك جاهزاً للإطلاق للجمهور. 🚀'
  }

  if (keywords.payment.some(k => text.includes(k))) {
    return 'أوفر وسائل دفع مرنة تناسب العميل، سواء بالتحويل البنكي أو الحوالات المباشرة. عادة ما يتم الدفع على دفعات (مقدم، عند التسليم). دعنا نتواصل للاتفاق! 💳'
  }

  if (keywords.meetings.some(k => text.includes(k))) {
    return 'طبعاً يسعدني ذلك! يمكننا ترتيب اجتماع صوتي/مرئي عبر Zoom أو Google Meet لمناقشة كل تفاصيل ومتطلبات مشروعك بكل وضوح. 🗓️'
  }

  if (keywords.design.some(k => text.includes(k))) {
    return 'أنا أقوم بالبرمجة وتحويل التصاميم (Figma/Adobe XD) إلى كود واقعي وتفاعلي (Front-end)، ويمكنني اقتراح وتحسين تصاميم واجهة المستخدم (UI/UX) لمشروعك! 🎨'
  }

  if (keywords.seo.some(k => text.includes(k))) {
    return 'بالتأكيد! يتم بناء المواقع بأفضل الممارسات لتهيئتها لمحركات البحث (SEO)، مما يضمن أرشفة ظهور موقعك بشكل ممتاز على جوجل. 🔍'
  }

  if (keywords.discounts.some(k => text.includes(k))) {
    return 'أسعاري دائماً مدروسة لتقديم أعلى قيمة مقابل التكلفة. تواصل معي لمناقشة الميزانية وهنالك دائماً مرونة ترضي الطرفين! 💯'
  }

  if (keywords.issues.some(k => text.includes(k))) {
    return 'نعتذر إن واجهتك أي مشكلة. يرجى التقاط صورة للخطأ والتواصل معي فوراً عبر زر الواتساب وسأقوم بفحصه وإصلاحه بأسرع وقت! 🔧'
  }

  if (keywords.thanks.some(k => text.includes(k))) {
    return 'العفو يا غالي وفِي خدمتك دائماً! لا تتردد أبداً في طرح أي استفسار آخر في أي وقت. 😊'
  }

  return 'عذراً، لم أستطع تحديد طلبك بدقة 🤔. هل يمكنك توضيح سؤالك أكثر؟ يمكنك سؤالي عن: خدماتي، مشاريعي، تكلفة التطوير، الدعم الفني، أو كيف نتواصل!'
}

const sendMessage = async () => {
  if (!messageInput.value.trim() || isThinking.value) return

  // Add User Message
  const userText = messageInput.value
  messages.value.push({
    id: Date.now(),
    text: userText,
    isBot: false
  })

  messageInput.value = ''
  isThinking.value = true
  nextTick(scrollToBottom)

  try {
    // استخدم الذكاء الاصطناعي للأسئلة المفتوحة، مع الاحتفاظ بالردود المحلية كخطة بديلة.
    const aiResponse = await getGeminiResponse(userText)
    messages.value.push({
      id: Date.now() + 1,
      text: aiResponse || getBotResponse(userText),
      isBot: true
    })
  } catch (error) {
    console.error('Chatbot error:', error)
    messages.value.push({
      id: Date.now() + 1,
      text: getBotResponse(userText),
      isBot: true
    })
  } finally {
    isThinking.value = false
    nextTick(scrollToBottom)
  }
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[200] flex flex-col items-end" :dir="languageStore.direction">
    <!-- Chat Window -->
    <Transition name="scale-up">
      <div 
        v-if="isOpen" 
        class="mb-4 w-[90vw] md:w-[400px] h-[70vh] md:h-[500px] glass rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col overflow-hidden fixed bottom-6 right-6 md:relative md:bottom-0 md:right-0 inset-x-4 md:inset-x-auto top-4 md:top-auto z-[210] origin-bottom-right"
      >
        <!-- Header -->
        <div class="p-6 bg-slate-900 text-white flex justify-between items-center relative overflow-hidden shrink-0">
           <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-indigo-600 opacity-95"></div>
           <div class="relative flex items-center gap-3">
             <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
               <SparklesIcon class="w-7 h-7 text-yellow-300 animate-pulse" />
             </div>
             <div>
               <h3 class="font-black text-lg leading-tight">{{ languageStore.locale === 'ar' ? 'المساعد الذكي' : 'Smart assistant' }}</h3>
               <p class="text-[10px] text-primary-200 font-bold flex items-center gap-1">
                 <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                 {{ languageStore.locale === 'ar' ? 'متاح للخدمة الآن' : 'Available now' }}
               </p>
             </div>
           </div>
           <button @click="toggleChat" class="relative w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors active:scale-90">
             <XMarkIcon class="w-6 h-6" />
           </button>
        </div>

        <!-- Messages Area -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-5 space-y-6 bg-white/80 backdrop-blur-sm scroll-smooth">
          <div 
            v-for="msg in messages" 
            :key="msg.id" 
            class="flex items-start gap-3"
            :class="msg.isBot ? 'flex-row' : 'flex-row-reverse'"
          >
            <div 
              class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-black/5"
              :class="msg.isBot ? 'bg-white' : 'bg-primary-600'"
            >
              <SparklesIcon v-if="msg.isBot" class="w-6 h-6 text-primary-600" />
              <div v-else class="text-white text-xs font-black">أنت</div>
            </div>
            
            <div 
              class="max-w-[85%] p-4 rounded-3xl text-sm font-bold leading-relaxed shadow-md transition-all hover:shadow-lg"
              :class="[
                msg.isBot 
                  ? 'bg-white text-slate-700 rounded-tr-none border border-slate-100' 
                  : 'bg-gradient-to-br from-primary-600 to-indigo-600 text-white rounded-tl-none'
              ]"
            >
              {{ msg.text }}
            </div>
          </div>
          
          <!-- Typing Indicator -->
          <div v-if="isThinking" class="flex items-start gap-3 flex-row">
            <div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-black/5 bg-white">
              <SparklesIcon class="w-6 h-6 text-primary-600 animate-pulse" />
            </div>
            <div class="p-4 rounded-3xl text-sm font-bold bg-white text-slate-700 rounded-tr-none border border-slate-100">
               <span class="flex gap-1" dir="ltr">
                  <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                  <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                  <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
               </span>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-white border-t border-slate-100 shrink-0">
          <form @submit.prevent="sendMessage" class="relative flex items-center gap-3">
            <div class="relative flex-1">
              <input 
                ref="inputRef"
                v-model="messageInput"
                type="text" 
                :placeholder="languageStore.locale === 'ar' ? 'اكتب سؤالك هنا...' : 'Type your question...'" 
                class="w-full bg-slate-100 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold text-sm"
              >
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                <!-- Decorative element if needed -->
              </div>
            </div>
            <button 
              type="submit" 
              class="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center hover:bg-primary-700 active:scale-95 transition-all shadow-xl shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!messageInput.trim() || isThinking"
            >
              <PaperAirplaneIcon class="w-6 h-6 -rotate-90 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- FAB Toggle Button -->
    <button 
      @click="toggleChat"
      class="w-16 h-16 bg-gradient-to-br from-primary-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary-600/40 hover:scale-110 active:scale-95 transition-all duration-300 group relative z-[220]"
    >
      <div class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-bounce flex items-center justify-center text-[10px] font-black" v-if="!isOpen">
        1
      </div>
      <ChatBubbleLeftRightIcon class="w-8 h-8 group-hover:rotate-12 transition-transform" />
    </button>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
}

.scale-up-enter-active,
.scale-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.scale-up-enter-from,
.scale-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
  transform-origin: bottom right;
}
</style>
