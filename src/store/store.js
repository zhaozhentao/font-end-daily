import Vue from 'vue'
import Vuex from 'vuex'
import count from '../views/home/home'
import login from '../views/login/login'
import signup from '../views/signup/signup'
import blogCreate from '../views/blog/blog_create'
import blog from '../views/blog/blog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count,
    login,
    signup,
    blogCreate,
    blog
  }
})
