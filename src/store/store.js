import Vue from 'vue'
import Vuex from 'vuex'
import count from '../views/home/home'
import api from '../views/login/login'
import signup from '../views/signup/signup'
import config from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    count,
    api,
    signup
  }
})
