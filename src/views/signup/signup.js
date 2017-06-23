import axios from 'axios'

const state = {
  data: null
}

const mutations = {
  signup (state, data) {
    state.data = data
  }
}

const actions = {
  signup (store, data) {
    return new Promise((resolve, reject) => {
      axios.post('/api/signup', {
        name: data.name,
        github_name: data.github_name,
        email: data.email,
        password: data.password
      })
        .then(function (response) {
          resolve(response)
        })
        .catch(function () {
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
