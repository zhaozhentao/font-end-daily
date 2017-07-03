import axios from 'axios'
import loadingBus from '../../bus/loadingbus'
import eventBus from '../../bus/eventbus'

const state = {
  count: 0
}

const mutations = {}

const actions = {
  getBlog (store, data) {
    loadingBus.$emit('loading')
    return new Promise((resolve, reject) => {
      axios.get('/api/blogs/' + data).then(function (response) {
        resolve(response.data)
        loadingBus.$emit('finish_loading')
      }).catch(function () {
        reject()
        loadingBus.$emit('finish_loading')
        eventBus.$emit('toast', '加载失败')
      })
    })
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
