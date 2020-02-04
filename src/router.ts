import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/funca',
      name: 'funca',
      component: () => import('./views/Func-A.vue'),
    },
    {
      path: '/funcb',
      name: 'funcb',
      component: () => import('./views/Func-B.vue'),
    },
    {
      path: '/funcc',
      name: 'funcc',
      component: () => import('./views/Func-C.vue'),
    },
    {
      path: '/funcd',
      name: 'funcd',
      component: () => import('./views/Func-D.vue'),
      children: [
        {
          path: '/dchild1',
          name: 'dchild1',
          component: () => import('./views/Func-D/D-child1.vue'),
        },
        {
          path: '/dchild2',
          name: 'dchild2',
          component: () => import('./views/Func-D/D-child2.vue'),
        },
      ],
    },
    {
      path: '/funce',
      name: 'funce',
      component: () => import('./views/Func-E.vue'),
    },
    {
      path: '/funcx',
      name: 'funcx',
      component: () => import('./views/Func-X.vue'),
    },
  ],
});
