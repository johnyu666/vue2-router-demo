import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserManager from '../views/user/UserManager.vue'
import Detail from '../views/user/Detail.vue'
import Setting from '../views/user/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("../views/HomeView.vue")
    },
    {
      path: '/users/:id',
      name: 'users',
      component: UserManager,
      children:[
        {path:'detail',name:'detail',component:Detail},
        {path:'setting',name:'setting',component:Setting}
      ]
    }
  ]
})

export default router
