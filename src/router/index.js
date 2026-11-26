import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    '/': { title: 'زياد العريقي — مطور ويب', description: 'الموقع الشخصي لزياد العريقي، مطور واجهات ويب وتطبيقات حديثة.' },
    '/about': { title: 'من أنا — زياد العريقي', description: 'تعرف على خبرة زياد العريقي ومهاراته ومسيرته في تطوير الويب.' },
    '/skills': { title: 'المهارات — زياد العريقي', description: 'التقنيات والأدوات التي يستخدمها زياد العريقي في بناء المنتجات الرقمية.' },
    '/projects': { title: 'المشاريع — زياد العريقي', description: 'استعرض نماذج من مشاريع الويب والتطبيقات التي نفذها زياد العريقي.' },
    '/services': { title: 'الخدمات — زياد العريقي', description: 'خدمات تطوير المواقع والتطبيقات والواجهات الرقمية.' },
    '/contact': { title: 'تواصل معي — زياد العريقي', description: 'تواصل مع زياد العريقي لمناقشة مشروعك أو فكرتك التقنية.' },
    '/blog': { title: 'مدونة البرمجة — زياد العريقي', description: 'مقالات عملية عن البرمجة وتطوير الويب وJavaScript وواجهات API.' },
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

router.beforeEach((to, from, next) => {
    const meta = pageMeta[to.path] || { title: 'زياد العريقي — مطور ويب', description: 'موقع زياد العريقي الشخصي.' }
    const canonical = `${window.location.origin}${to.path}`
    document.title = meta.title
    document.documentElement.lang = 'ar'
    document.documentElement.dir = 'rtl'
    setMeta('description', meta.description)
    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:locale', 'ar_YE', 'property')
    setMeta('twitter:site', '@ZeiadWeb')
    setMeta('robots', 'index, follow')
    setLink('canonical', canonical)
    next()
})

export default router
