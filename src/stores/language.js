import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import i18n from '../i18n'

export const useLanguageStore = defineStore('language', () => {
    const locale = ref(localStorage.getItem('locale') || 'ar')
    const direction = ref(locale.value === 'ar' ? 'rtl' : 'ltr')

    const setLanguage = (lang) => {
        locale.value = lang
    }

    const toggleLanguage = () => {
        setLanguage(locale.value === 'en' ? 'ar' : 'en')
    }

    watch(locale, (val) => {
        localStorage.setItem('locale', val)
        i18n.global.locale.value = val
        document.documentElement.lang = val
        direction.value = val === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.dir = direction.value
        window.dispatchEvent(new CustomEvent('language-changed', { detail: val }))
    }, { immediate: true })

    return { locale, direction, setLanguage, toggleLanguage }
})
