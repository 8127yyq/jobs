import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import Info from '@/components/info/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      component: Main
    },
    {
      path: '/main/:id',
      component: Info
    },
    {
      path: '/',
      redirect: '/main'
    }
  ]
})
