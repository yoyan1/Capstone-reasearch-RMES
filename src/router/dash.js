import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const dashRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admn',
      name: 'admn',
      component: () => import('../views/AdminAuth.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboardiew.vue')
    }
  ]
})

export default dashRouter
