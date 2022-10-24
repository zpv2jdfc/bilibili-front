import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../components/user/UserProfile.vue'
import HomePage from '../components/HomePage/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/profile",
      component: UserProfile
    },
  ]
})

export default router
