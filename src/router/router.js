import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signIn from '@/components/signIn'
import home from '@/components/home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn

    },
    {
      path: '/',
      redirect: '/signIn'

    }
  ]
})
