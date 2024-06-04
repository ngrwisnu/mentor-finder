import { createRouter, createWebHistory } from 'vue-router'
import MentorsView from '../views/mentors/MentorsView.vue'
import MentorDetailsView from '../views/mentors/MentorDetailsView.vue'

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
    },
    {
      path: '/mentors/:id',
      props: true,
      name: 'mentor-details',
      component: MentorDetailsView
    }
  ]
})

export default router
