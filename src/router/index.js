import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: 'home',
          component: () => import('../pages/Home.vue')
        },
        {
          path: 'students',
          component: () => import('../pages/Students.vue')
        },
        {
          path: 'accounts',
          component: () => import('../pages/Accounts.vue')
        },
        {
          path: 'user-setting',
          component: () => import('../pages/Setting.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
