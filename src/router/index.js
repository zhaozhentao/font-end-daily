import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App.components.Home,
      name: 'index'
    },
    {
      path: '/home',
      component: App.components.Movies,
      name: 'home'
    }
  ]
})
