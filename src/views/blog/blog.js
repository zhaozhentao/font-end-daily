import axios from 'axios'
import loadingBus from '../../bus/loadingbus'

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
