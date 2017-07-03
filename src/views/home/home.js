import axios from 'axios'
import loadingBus from '../../bus/loadingbus'

const state = {
  blogs: null
}

const mutations = {
  blogs (state, data) {
    state.blogs = data
  }
}

const actions = {
  blogs (store, data) {
    loadingBus.$emit('loading')
    return new Promise((resolve, reject) => {
      axios.get('/api/blogs', data).then(function (response) {
        store.commit('blogs', response.data)
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
