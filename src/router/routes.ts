import MentorsView from '../views/mentors/MentorsView.vue'
import MentorDetailsView from '../views/mentors/MentorDetailsView.vue'
import MentorsRegisterView from '../views/mentors/MentorsRegisterView.vue'

export const routes = [
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
  },
  {
    path: '/mentors/register',
    name: 'mentor-register',
    component: MentorsRegisterView
  }
]
