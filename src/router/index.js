import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Index')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/pages/blog/Index')
    },
    {
      path: '/blog/:slug',
      name: 'BlogPosts',
      component: () => import('@/pages/blog/Show')
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
