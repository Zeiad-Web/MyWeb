<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import LangToggle from '../LangToggle.vue'
import { useLanguageStore } from '@/stores/language'
import BaseButton from '../atoms/BaseButton.vue'

const mobileMenuOpen = ref(false)
const langStore = useLanguageStore()

const navigation = [
  { name: 'Home', href: '/', arName: 'الرئيسية' },
  { name: 'About', href: '/about', arName: 'من أنا' },
  { name: 'Skills', href: '/skills', arName: 'المهارات' },
  { name: 'Projects', href: '/projects', arName: 'المشاريع' },
  { name: 'Services', href: '/services', arName: ' الخدمات' },
  { name: 'Contact', href: '/contact', arName: 'تواصل معي' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <nav class="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
      <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5 font-bold text-2xl text-primary-600 font-mono tracking-tighter">
          &lt;M /&gt;
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-8">
        <RouterLink 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          class="text-sm font-medium leading-6 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
          active-class="text-primary-600 dark:text-primary-400"
        >
          {{ langStore.locale === 'en' ? item.name : item.arName }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
        <LangToggle />
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-colors duration-300">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5 font-bold text-2xl text-primary-600 dark:text-primary-400" @click="mobileMenuOpen = false">
            Portfolio.
          </RouterLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = false">
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
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                active-class="text-primary-600 dark:text-primary-400 bg-gray-50 dark:bg-gray-800"
                @click="mobileMenuOpen = false"
              >
                {{ langStore.locale === 'en' ? item.name : item.arName }}
              </RouterLink>
            </div>
            <div class="py-6 flex gap-4 justify-center">
              <LangToggle />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
