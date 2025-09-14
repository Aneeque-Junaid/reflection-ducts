import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: HomeView, // Services are on the home page
    },
    {
      path: '/process',
      name: 'process',
      component: HomeView, // Process is on the home page
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: HomeView, // Reviews are on the home page
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView, // Contact is on the home page
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../components/PrivacyPolicyView.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../components/TermsView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
