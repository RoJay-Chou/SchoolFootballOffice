import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/index'),
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: () => import('@/views/login/login'),
          name: 'LoginList'
        },
        {
          path: '/forget',
          component: () => import('@/views/login/forget'),
          name: 'LoginForget'
        }
      ]
    }
  ]
})
