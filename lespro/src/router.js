import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
// import UsersList from '@/views/Users.vue'
// import UserEdit from '@/views/UserEdit.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
      // component: UsersList
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      // component: UserEdit
      component: () => import('@/views/UserEdit.vue')
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
