import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../i18n'
import { useProjectsStore } from '../stores/projects'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { title: 'الصفحة الرئيسية - My Portfolio' }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            meta: { title: 'عني - My Portfolio' }
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import('../views/SkillsView.vue'),
            meta: { title: 'مهاراتي - My Portfolio' }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/ProjectsView.vue'),
            meta: { title: 'مشاريعي - My Portfolio' }
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('../views/ServicesView.vue'),
            meta: { title: ' خدماتي - My Portfolio' }
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/ContactView.vue'),
            meta: { title: 'تواصل معي -  My Portfolio' }
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue'),
            meta: { title: 'مدونتي - My Portfolio' }
        },
        {
            path: '/projects/:slug',
            name: 'project-details',
            component: () => import('../views/ProjectDetailsView.vue'),
            meta: { title: 'Project Details - My Portfolio' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue'),
            meta: { title: '404 - Page Not Found' }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

const pageMeta = {
    ar: {
        '/': ['زياد العريقي — مطور ويب', 'الموقع الشخصي لزياد العريقي، مطور واجهات ويب وتطبيقات حديثة.'],
        '/about': ['من أنا — زياد العريقي', 'تعرف على خبرة زياد العريقي ومهاراته ومسيرته في تطوير الويب.'],
        '/skills': ['المهارات — زياد العريقي', 'التقنيات والأدوات التي يستخدمها زياد العريقي في بناء المنتجات الرقمية.'],
        '/projects': ['المشاريع — زياد العريقي', 'استعرض نماذج من مشاريع الويب والتطبيقات التي نفذها زياد العريقي.'],
        '/services': ['الخدمات — زياد العريقي', 'خدمات تطوير المواقع والتطبيقات والواجهات الرقمية.'],
        '/contact': ['تواصل معي — زياد العريقي', 'تواصل مع زياد العريقي لمناقشة مشروعك أو فكرتك التقنية.'],
        '/blog': ['مدونة البرمجة — زياد العريقي', 'مقالات عملية عن البرمجة وتطوير الويب وJavaScript وواجهات API.'],
    },
    en: {
        '/': ['Zeiad Al-Oraiqi — Web Developer', 'The personal portfolio of Zeiad Al-Oraiqi, a frontend web and application developer.'],
        '/about': ['About Me — Zeiad Al-Oraiqi', 'Learn about Zeiad Al-Oraiqi\'s experience, skills, and journey in web development.'],
        '/skills': ['Skills — Zeiad Al-Oraiqi', 'Technologies and tools Zeiad Al-Oraiqi uses to build digital products.'],
        '/projects': ['Projects — Zeiad Al-Oraiqi', 'Explore web and application projects built by Zeiad Al-Oraiqi.'],
        '/services': ['Services — Zeiad Al-Oraiqi', 'Websites, applications, and digital interface development services.'],
        '/contact': ['Contact — Zeiad Al-Oraiqi', 'Get in touch with Zeiad Al-Oraiqi to discuss your project or technical idea.'],
        '/blog': ['Programming Blog — Zeiad Al-Oraiqi', 'Practical articles about programming, web development, JavaScript, and APIs.'],
    }
}

const setMeta = (name, content, attribute = 'name') => {
    let tag = document.head.querySelector(`meta[${attribute}="${name}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
}

const setLink = (rel, href) => {
    let tag = document.head.querySelector(`link[rel="${rel}"]`)
    if (!tag) {
        tag = document.createElement('link')
        tag.setAttribute('rel', rel)
        document.head.appendChild(tag)
    }
    tag.setAttribute('href', href)
}

const setJsonLd = (data) => {
    let tag = document.head.querySelector('script[data-seo-jsonld]')
    if (!tag) {
        tag = document.createElement('script')
        tag.type = 'application/ld+json'
        tag.dataset.seoJsonld = 'true'
        document.head.appendChild(tag)
    }
    tag.textContent = JSON.stringify(data)
}

const getMeta = (to) => {
    const locale = i18n.global.locale.value === 'en' ? 'en' : 'ar'
    const base = pageMeta[locale][to.path] || pageMeta[locale]['/']
    const project = to.name === 'project-details'
        ? useProjectsStore().getProjectBySlug(to.params.slug)
        : null
    return project
        ? {
            title: `${project.title} — Zeiad Al-Oraiqi`,
            description: project.description,
            type: 'article',
            image: project.image,
        }
        : { title: base[0], description: base[1], type: 'website', image: '/logo.png' }
}

const updateSeo = (to) => {
    const meta = getMeta(to)
    const locale = i18n.global.locale.value === 'en' ? 'en' : 'ar'
    const canonical = `https://ziadweb.com${to.path === '/' ? '/' : to.path}`
    document.title = meta.title
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    setMeta('description', meta.description)
    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:type', meta.type, 'property')
    setMeta('og:locale', locale === 'ar' ? 'ar_YE' : 'en_US', 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:image', `https://ziadweb.com${meta.image}`, 'property')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', `https://ziadweb.com${meta.image}`)
    setMeta('twitter:site', '@ZeiadWeb')
    setMeta('robots', 'index, follow')
    setLink('canonical', canonical)
    setJsonLd({
        '@context': 'https://schema.org',
        '@type': meta.type === 'article' ? 'CreativeWork' : 'WebPage',
        name: meta.title,
        description: meta.description,
        url: canonical,
        image: `https://ziadweb.com${meta.image}`,
        ...(meta.type === 'website' ? {
            isPartOf: { '@type': 'WebSite', name: 'ZeiadWeb', url: 'https://ziadweb.com/' },
            about: { '@type': 'Person', name: 'زياد العريقي', jobTitle: 'Web Developer', url: 'https://ziadweb.com/about' }
        } : {})
    })
}

router.beforeEach((to, from, next) => {
    updateSeo(to)
    next()
})

if (typeof window !== 'undefined') {
    window.addEventListener('language-changed', () => updateSeo(router.currentRoute.value))
}

export default router
