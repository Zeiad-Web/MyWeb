<script setup>
import { ref, nextTick } from 'vue'
import { useLanguageStore } from '../stores/language'
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
    text: 'مرحباً! 👋 أنا المساعد الذكي الخاص بالموقع. كيف يمكنني مساعدتك اليوم؟', 
    isBot: true 
  }
])
const inputRef = ref(null)
const messagesContainer = ref(null)

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

const keywords = {
  greeting: ['هلا', 'مرحبا', 'السلام عليكم', 'سلام', 'hi', 'hello', 'hey'],
  projects: ['مشاريع', 'اعمالك', 'أعمالك', 'مشروع', 'projects', 'work'],
  contact: ['تواصل', 'رقم', 'ايميل', 'بريد', 'contact', 'email'],
  price: ['سعر', 'بكم', 'تكلفة', 'فلوس', 'price', 'cost'],
  tech: ['تقنيات', 'لغات', 'vue', 'react', 'tech', 'stack'],
  who: ['من انت', 'مين انت', 'who are you', 'bot']
}

const getBotResponse = (input) => {
  const text = input.toLowerCase()
  
  if (keywords.greeting.some(k => text.includes(k))) {
    return 'وعليكم السلام! 👋 يا هلا فيك. تفضل، أنا هنا للإجابة على استفساراتك حول الموقع أو خدماتي.'
  }
  
  if (keywords.projects.some(k => text.includes(k))) {
    return 'بالتأكيد! يمكنك تصفح قسم "المشاريع" من القائمة العلوية لرؤية أحدث أعمالي. هل تبحث عن نوع محدد؟ (تطبيقات، مواقع، متاجر)'
  }
  
  if (keywords.contact.some(k => text.includes(k))) {
    return 'يمكنك التواصل معي مباشرة عبر صفحة "تواصل معي" أو عبر البريد الإلكتروني: contact@portfolio.com'
  }
  
  if (keywords.price.some(k => text.includes(k))) {
    return 'تعتمد التكلفة على تفاصيل ومميزات المشروع. أنصحك بملء نموذج التواصل وسأقوم بتقديم عرض سعر دقيق خلال 24 ساعة. 💼'
  }
  
  if (keywords.tech.some(k => text.includes(k))) {
    return 'أنا متخصص في بناء الواجهات باستخدام Vue.js & Tailwind CSS، بالإضافة إلى خبرة في الـ Backend باستخدام Node.js. 💻'
  }

  if (keywords.who.some(k => text.includes(k))) {
    return 'أنا مساعد آلي ذكي 🤖، تم برمجتي لمساعدتك أثناء تصفحك لهذا الموقع الجميل!'
  }

  return 'عذراً، لم أفهم تماماً. هل يمكنك صياغة السؤال بطريقة أخرى؟ أو يمكنك اختيار أحد المواضيع: المشاريع، التكلفة، التواصل.'
}

const sendMessage = () => {
  if (!messageInput.value.trim()) return

  // Add User Message
  messages.value.push({
    id: Date.now(),
    text: messageInput.value,
    isBot: false
  })

  const userText = messageInput.value
  messageInput.value = ''
  nextTick(scrollToBottom)

  // Simulate thinking delay
  setTimeout(() => {
    messages.value.push({
      id: Date.now() + 1,
      text: getBotResponse(userText),
      isBot: true
    })
    nextTick(scrollToBottom)
  }, 600)
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[200] flex flex-col items-end" :dir="languageStore.direction">
    <!-- Chat Window -->
    <Transition name="scale-up">
      <div 
        v-if="isOpen" 
        class="mb-4 w-[90vw] md:w-[400px] h-[70vh] md:h-[500px] glass rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-2xl flex flex-col overflow-hidden fixed bottom-6 right-6 md:relative md:bottom-0 md:right-0 inset-x-4 md:inset-x-auto top-4 md:top-auto z-[210] origin-bottom-right"
      >
        <!-- Header -->
        <div class="p-6 bg-slate-900 text-white flex justify-between items-center relative overflow-hidden shrink-0">
           <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-indigo-600 opacity-95"></div>
           <div class="relative flex items-center gap-3">
             <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
               <SparklesIcon class="w-7 h-7 text-yellow-300 animate-pulse" />
             </div>
             <div>
               <h3 class="font-black text-lg leading-tight">المساعد الذكي</h3>
               <p class="text-[10px] text-primary-200 font-bold flex items-center gap-1">
                 <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                 متاح للخدمة الآن
               </p>
             </div>
           </div>
           <button @click="toggleChat" class="relative w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors active:scale-90">
             <XMarkIcon class="w-6 h-6" />
           </button>
        </div>

        <!-- Messages Area -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-5 space-y-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm scroll-smooth">
          <div 
            v-for="msg in messages" 
            :key="msg.id" 
            class="flex items-start gap-3"
            :class="msg.isBot ? 'flex-row' : 'flex-row-reverse'"
          >
            <div 
              class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-black/5"
              :class="msg.isBot ? 'bg-white dark:bg-slate-800' : 'bg-primary-600'"
            >
              <SparklesIcon v-if="msg.isBot" class="w-6 h-6 text-primary-600" />
              <div v-else class="text-white text-xs font-black">أنت</div>
            </div>
            
            <div 
              class="max-w-[85%] p-4 rounded-3xl text-sm font-bold leading-relaxed shadow-md transition-all hover:shadow-lg"
              :class="[
                msg.isBot 
                  ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tr-none border border-slate-100 dark:border-slate-700' 
                  : 'bg-gradient-to-br from-primary-600 to-indigo-600 text-white rounded-tl-none'
              ]"
            >
              {{ msg.text }}
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <form @submit.prevent="sendMessage" class="relative flex items-center gap-3">
            <div class="relative flex-1">
              <input 
                ref="inputRef"
                v-model="messageInput"
                type="text" 
                placeholder="كيف يمكنني مساعدتك؟" 
                class="w-full bg-slate-100 dark:bg-slate-800 px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-primary-500/20 transition-all font-bold text-sm"
              >
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                <!-- Decorative element if needed -->
              </div>
            </div>
            <button 
              type="submit" 
              class="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center hover:bg-primary-700 active:scale-95 transition-all shadow-xl shadow-primary-500/30"
              :disabled="!messageInput.trim()"
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
      <div class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-bounce flex items-center justify-center text-[10px] font-black" v-if="!isOpen">
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

.dark .glass {
  background: rgba(15, 23, 42, 0.9);
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
