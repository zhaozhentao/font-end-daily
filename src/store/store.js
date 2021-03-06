import Vue from 'vue'
import Vuex from 'vuex'
import home from '../views/home/home'
import login from '../views/login/login'
import signup from '../views/signup/signup'
import blogCreate from '../views/blog/blog_create_edit'
import blog from '../views/blog/blog'
import blogOperate from '../components/blog_operate/blog_operate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    login,
    signup,
    blogCreate,
    blog,
    blogOperate
  }
})
