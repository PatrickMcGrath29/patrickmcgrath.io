import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
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
      path: '/urls',
      name: 'URL Shortner',
      component: () => import('@/pages/url-shortner/Index')
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
});
