// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/store'
import './message/zh_CN'

Vue.config.productionTip = false

Vue.use(VeeValidate, {
  locale: 'zh_CN'
})

axios.defaults.baseURL = process.env.baseUrl
document.cookie.split(';').forEach(function (value, index, array) {
  if (value.split('=')[0] === 'token' || value.split('=')[0] === ' token') {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + value.split('=')[1]
  }
})

Vue.mixin({
  data: function () {
    return {
      baseUrl: process.env.baseUrl
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: {App}
})
