import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home';
import Create from '@/pages/Create';
import Quiz from '@/pages/Quiz';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/quiz/:id',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
