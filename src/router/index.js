import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Index')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/pages/projects/Index')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('@/pages/skills/Index')
    },
    {
      path: '/shorten',
      name: 'Shorten',
      component: () => import('@/pages/shorten/Index')
    },
    {
      path: '/shorten/:alias',
      name: 'Shorten Redirect',
      component: () => import('@/pages/shorten/Redirect')
    },
    {
      path: '/404',
      component: () => import('@/pages/404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
