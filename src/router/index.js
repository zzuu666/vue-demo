import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Detail from '@/components/Detail'
import Star from '@/components/Star'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/star',
      name: 'Star',
      component: Star
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
