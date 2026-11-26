import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'

const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: localStorage.getItem('locale') || 'ar',
    fallbackLocale: 'ar',
    globalInjection: true,
    messages: {
        en,
        ar
    }
})

export default i18n
