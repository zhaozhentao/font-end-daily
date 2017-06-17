import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import api from './modules/api'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count,
    api
  }
})
