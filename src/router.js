import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'clean' },
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Home
    },
    {
      path: '/registers',
      name: 'registers',
      component: () => import('./views/Registers.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    },
  ]
})
