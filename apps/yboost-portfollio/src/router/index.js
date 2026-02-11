import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import { getSavedAuthMode, useAuthMode } from '../composables/useAuthMode'
import { applyUnlockFromQuery } from '../utils/unlockLink'

const getRuntimeBase = () => {
    if (import.meta.env.PROD) return import.meta.env.BASE_URL
    if (typeof window === 'undefined') return '/'
    if (window.location.pathname.startsWith('/portfolio/')) return '/portfolio/'
    return '/'
}

const router = createRouter({
    history: createWebHistory(getRuntimeBase()),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/index', name: 'portfolio', component: PortfolioView, meta: { requiresAuth: true } },
        { path: '/:pathMatch(.*)*', redirect: { name: 'home' } }
    ],
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0, behavior: 'smooth' }
    }
})

router.beforeEach(async (to) => {
    const applied = await applyUnlockFromQuery(to.query)
    if (applied) {
        const { initFromSession } = useAuthMode()
        initFromSession()

        const paramName = import.meta.env.VITE_UNLOCK_QUERY_PARAM || 'k'
        const q = { ...to.query }
        delete q[paramName]
        return { name: 'home', query: q, replace: true }
    }

    if (!to.meta.requiresAuth) return true
    const mode = getSavedAuthMode()
    if (mode === 'locked') return { name: 'home' }
    return true
})

export default router
