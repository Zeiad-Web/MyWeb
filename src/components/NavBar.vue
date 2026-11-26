<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import LangToggle from './LangToggle.vue'
import { useLanguageStore } from '../stores/language'

const mobileMenuOpen = ref(false)
const langStore = useLanguageStore()

const navigation = [
  { name: 'Home', href: '/', arName: 'الرئيسية' },
  { name: 'About', href: '/about', arName: 'عني ' },
  { name: 'Skills', href: '/skills', arName: 'المهارات' },
  { name: 'Projects', href: '/projects', arName: 'المشاريع' },
  { name: 'Services', href: '/services', arName: ' الخدمات' },
  { name: 'Blog', href: '/blog', arName: 'المدونة' },
  { name: 'Contact', href: '/contact', arName: 'تواصل معي' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global" dir="rtl">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5 flex items-center gap-2 group transition-all duration-300 hover:scale-105">
          <!-- Fantastic SVG Logo -->
          <div class="relative flex items-center justify-center w-10 h-10 group">
            <div class="absolute inset-0 bg-primary-600 rounded-xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
            <div class="absolute inset-0 bg-cyan-500 rounded-xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
            <div class="relative z-10 glass rounded-xl w-full h-full flex items-center justify-center border border-white/50 shadow-lg group-hover:shadow-primary-500/50 transition-all duration-500">
              <svg class="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 7L12 12L3 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 12H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="flex flex-col -space-y-1">
            <div class="font-black text-2xl tracking-tight leading-none">
              <span class="text-primary-600">Ziad</span>
              <span class="text-slate-900">Web</span>
            </div>
            <span class="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-center mt-1">Creative Developer</span>
          </div>
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
          active-class="text-primary-600"
        >
          {{ langStore.locale === 'en' ? item.name : item.arName }}
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
        <LangToggle />
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 end-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" dir="rtl">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5 flex items-center gap-2 group" @click="mobileMenuOpen = false">
            <!-- Fantastic SVG Logo -->
            <div class="relative flex items-center justify-center w-10 h-10 group">
              <div class="absolute inset-0 bg-primary-600 rounded-xl rotate-6 opacity-20"></div>
              <div class="absolute inset-0 bg-cyan-500 rounded-xl -rotate-6 opacity-20"></div>
              <div class="relative z-10 glass rounded-xl w-full h-full flex items-center justify-center border border-white/50 shadow-lg">
                <svg class="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 7L12 12L3 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 12H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col -space-y-1">
              <div class="font-black text-2xl tracking-tight leading-none">
                <span class="text-primary-600">Ziad</span>
                <span class="text-slate-900">Web</span>
              </div>
            </div>
          </RouterLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                active-class="text-primary-600 bg-gray-50"
                @click="mobileMenuOpen = false"
              >
                {{ langStore.locale === 'en' ? item.name : item.arName }}
              </RouterLink>
            </div>
            <div class="py-6 flex gap-4">
              <LangToggle />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
