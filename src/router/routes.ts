import MentorsView from '../views/mentors/MentorsView.vue'
import MentorDetailsView from '../views/mentors/MentorDetailsView.vue'
import MentorsContactView from '../views/mentors/MentorsContactView.vue'
import MentorsRegisterView from '../views/mentors/MentorsRegisterView.vue'
import RequestsView from '../views/requests/RequestsView.vue'
import LoginView from '../views/auth/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/mentors'
  },
  {
    path: '/mentors',
    children: [
      {
        path: '',
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
        path: '/mentors/:id/contact',
        props: true,
        name: 'mentor-contact',
        component: MentorsContactView
      }
    ]
  },
  {
    path: '/requests',
    name: 'requests',
    component: RequestsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register/mentors',
    name: 'mentor-register',
    component: MentorsRegisterView
  },
  {
    path: '/:notFound+',
    name: 'not-found',
    component: NotFoundView
  }
]
