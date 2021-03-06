// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/store'
import './message/zh_CN'
var VueMaterial = require('vue-material')

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
Vue.use(VeeValidate, {
  locale: 'zh_CN'
})

document.cookie.split(';').forEach(function (value, index, array) {
  if (value.split('=')[0] === 'token' || value.split('=')[0] === ' token') {
    axios.defaults.headers.common['Authorization'] = 'Bearer' + value.split('=')[1]
  }
})

Vue.filter('time', function (value) {
  function format (m) {
    return m < 10 ? '0' + m : m
  }

  var time = new Date(parseInt(value))
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()

  return y + '/' + format(m) + '/' + format(d)
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(function () {
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
