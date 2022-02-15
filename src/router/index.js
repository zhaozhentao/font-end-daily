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
    },
    {
      path: '/signup',
      component: App.components.Signup,
      name: 'signup'
    },
    {
      path: '/blog/create',
      component: App.components.BlogCreate,
      name: 'blog_create'
    },
    {
      path: '/blogs/:id',
      component: App.components.Blog,
      name: 'blog_detail'
    },
    {
      path: '/blog/:id/edit',
      component: App.components.BlogCreate,
      name: 'blog_edit'
    },
    {
      path: '/goods/create',
      component: App.components.GoodCreate,
      name: 'goods_create'
    }
  ]
})
