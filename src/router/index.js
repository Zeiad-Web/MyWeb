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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title.replace('My Portfolio', 'زياد العريقي') : 'Ziad Al-Oraiqi'
    next()
})

export default router
