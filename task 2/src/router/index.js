import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
      props: (route) => {
        if (route.query.data) {
          return { data: JSON.parse(route.query.data) };
        } else {
          return { data: {} }; 
        }
      }
    }
  ] 
})

export default router
