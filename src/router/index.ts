import { createRouter, createWebHistory } from 'vue-router'
import MentorsView from '../views/mentors/MentorsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/mentors'
    },
    {
      path: '/mentors',
      name: 'mentors',
      component: MentorsView
    }
  ]
})

export default router
