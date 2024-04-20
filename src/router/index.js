import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from '../views/Admin.vue'
import StatView from '../views/StatView.vue'
import ProfileUser from '../views/ProfileUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Admin
    },

    {
      path: '/statistics/:id',
      name: 'statistics',
      component: StatView,
      props: true
    },

    {
      path: '/profileuser/:id',
      name: 'profileuser',
      component: ProfileUser,
      props: true
    }
  ]
})

export default router
