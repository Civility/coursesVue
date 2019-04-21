import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/UserEdit.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/views/UserAdd.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     // if(!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
