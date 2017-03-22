import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/movie/subject/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
