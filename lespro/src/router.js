import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      name: 'home',
      // component: Home
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/index.html',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue') // динамический импорт в chank (webpack + vue)
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('@/views/Slots.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:id', // динамический маршрут
      name: 'edit',
      component: () => import('@/views/UserEdit.vue'),
      meta: {
        requiresAuth: true // дополнительный флаг для ограничения авторизованного пользователя
      }
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/views/UserAdd.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    }
  ]
})
// хук выполняется перед каждой навигацией (https://router.vuejs.org/ru/guide/advanced/meta.html)
const token = false // сюда должны приходить данные логики вхождения на сайт в зависимости от условия
// сюда должны приходить данные логики вхождения на сайт в зависимости от условия
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if (token === true) {
      next({
        path: '/login', // страница для авторизации
        query: {
          redirect: to.fullPath
        } // страница куда перекинет после авторизации
      })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
})

export default router
