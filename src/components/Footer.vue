<script setup>
import { useLanguageStore } from '../stores/language'

const langStore = useLanguageStore()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative mt-20 bg-slate-200 dark:bg-slate-950 pt-20 pb-10 overflow-hidden text-right" :dir="langStore.direction">
    <!-- Decorative Background Elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg">
              Z
            </div>
            <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">زياد العريقي</span>
          </div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {{ langStore.locale === 'ar' ? 'احول الأفكار إلى واقع رقمي مدهش. متخصص في بناء تجارب مستخدم استثنائية تجمع بين الجمال والأداء العالي.' : 'I turn ideas into remarkable digital experiences, creating user journeys that combine beauty and performance.' }}
          </p>
          <div class="flex gap-4">
            <!-- Social Icons Mini -->
            <a href="https://www.linkedin.com/in/zeiad-al-ariqi-91b431376/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full glass border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/Zeiad-Web" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full glass border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <span class="sr-only">GitHub</span>
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full glass border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <span class="sr-only">Facebook</span>
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
             <a href="https://wa.me/967775932431" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full glass border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              <span class="sr-only">WhatsApp</span>
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>

        <!-- Sitemap -->
        <div>
          <h3 class="text-slate-900 dark:text-white font-black text-lg mb-6">{{ langStore.locale === 'ar' ? 'الصفحات' : 'Pages' }}</h3>
          <ul class="space-y-4">
            <li><RouterLink to="/" class="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors flex items-center gap-2 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-primary-600"></span>{{ langStore.locale === 'ar' ? 'الرئيسية' : 'Home' }}</RouterLink></li>
            <li><RouterLink to="/services" class="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors flex items-center gap-2 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-primary-600"></span>{{ langStore.locale === 'ar' ? 'الخدمات' : 'Services' }}</RouterLink></li>
            <li><RouterLink to="/projects" class="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors flex items-center gap-2 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>{{ langStore.locale === 'ar' ? 'المشاريع' : 'Projects' }}</RouterLink></li>
            <li><RouterLink to="/about" class="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors flex items-center gap-2 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>{{ langStore.locale === 'ar' ? 'عني' : 'About' }}</RouterLink></li>
            <li><RouterLink to="/contact" class="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors flex items-center gap-2 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>{{ langStore.locale === 'ar' ? 'تواصل معي' : 'Contact' }}</RouterLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-slate-900 dark:text-white font-black text-lg mb-6">{{ langStore.locale === 'ar' ? 'خدماتي' : 'Services' }}</h3>
          <ul class="space-y-4">
            <li class="text-slate-600 dark:text-slate-400 font-medium hover:text-primary-600 transition-colors cursor-default">{{ langStore.locale === 'ar' ? 'تطوير مواقع الويب المخصصة' : 'Custom web development' }}</li>
            <li class="text-slate-600 dark:text-slate-400 font-medium hover:text-primary-600 transition-colors cursor-default">{{ langStore.locale === 'ar' ? 'خدمات التجارة الإلكترونية' : 'E-commerce solutions' }}</li>
            <li class="text-slate-600 dark:text-slate-400 font-medium hover:text-primary-600 transition-colors cursor-default">{{ langStore.locale === 'ar' ? 'استضافة وإدارة السحابة' : 'Cloud hosting and management' }}</li>
            <li class="text-slate-600 dark:text-slate-400 font-medium hover:text-primary-600 transition-colors cursor-default">{{ langStore.locale === 'ar' ? 'تحويل الأفكار لمنتجات رقمية' : 'Turning ideas into digital products' }}</li>
            <li class="text-slate-600 dark:text-slate-400 font-medium hover:text-primary-600 transition-colors cursor-default">{{ langStore.locale === 'ar' ? 'أنظمة إدارة الأعمال ERP/CRM' : 'ERP/CRM business systems' }}</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-slate-900 dark:text-white font-black text-lg mb-6">{{ langStore.locale === 'ar' ? 'معلومات التواصل' : 'Contact information' }}</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 font-medium group cursor-pointer hover:text-primary-600 transition-colors">
              <div class="mt-1 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg text-primary-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </div>
              <span dir="ltr"><a href="mailto:zeiadalriqi@gmail.com">zeiadalriqi@gmail.com</a></span>
            </li>
            <li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 font-medium group cursor-pointer hover:text-primary-600 transition-colors">
              <div class="mt-1 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg text-primary-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <span dir="ltr"><a href="https://wa.me/967775932431">+967 775 932 431</a></span>
            </li>
            <li class="flex items-start gap-3 text-slate-600 dark:text-slate-400 font-medium group cursor-pointer hover:text-primary-600 transition-colors">
              <div class="mt-1 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg text-primary-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <span>{{ langStore.locale === 'ar' ? 'اليمن، صنعاء' : 'Sana’a, Yemen' }}</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Copyright -->
      <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-center items-center relative">
        <!-- Subtle Glow Center -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent shadow-[0_0_10px_2px_rgba(14,165,233,0.3)]"></div>
        
        <p class="text-base md:text-lg font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <span>{{ langStore.locale === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved' }} &copy; {{ currentYear }}</span>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600 font-black hover:scale-105 transition-transform cursor-default">زياد العريقي</span>
        </p>
      </div>
    </div>
  </footer>
</template>
