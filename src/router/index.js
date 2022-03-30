import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
      meta: { transition: 'slideUp' },
    },
    {
      path: '/signup',
      name: 'SignupView',
      component: SignupView,
      meta: { transition: 'slideUp' },
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView,
    },
  ]
})

export default router
