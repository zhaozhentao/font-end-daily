import axios from 'axios'

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
    return new Promise((resolve, reject) => {
      axios.get('/api/blogs', data).then(function (response) {
        store.commit('blogs', response.data)
      }).catch(function () {
        reject()
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
