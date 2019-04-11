import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'

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
    },
    {
      path: '/school',
      name: 'school',
      meta: { title: '控件库' },
      component: Layout,
      children: [
        {
          path: '/schoolDetial',
          component: () => import('@/views/school/index'),
          name: 'schoolDetial',
          redirect: '/schoolInfo',
          children: [
            {
              path: '/schoolInfo',
              component: () => import('@/views/school/detail'),
              name: 'schoolInfo'
            }
          ]
        }
      ]
    }
  ]
})
