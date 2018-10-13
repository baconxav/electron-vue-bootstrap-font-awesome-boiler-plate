import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/Test').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/test2',
      name: 'test2',
      component: require('@/components/Test2').default
    }
  ]
})
