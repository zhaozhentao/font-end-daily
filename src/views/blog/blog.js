import axios from 'axios'

const state = {
  count: 0
}

const mutations = {}

const actions = {
  getBlog (store, data) {
    return new Promise((resolve, reject) => {
      axios.get('/api/blogs/' + data).then(function (response) {
        resolve(response.data)
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
