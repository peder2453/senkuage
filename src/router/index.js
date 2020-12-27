import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: () => import('../views/Agreement.vue')
  },
  {
    path: '/administrati',
    name: 'Administrati',
    component: () => import('../views/Administrati.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
