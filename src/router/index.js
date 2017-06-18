import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App.components.Home,
      name: 'index'
    },
    {
      path: '/auth/login',
      component: App.components.Login,
      name: 'login'
    }
  ]
})
