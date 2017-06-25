import axios from 'axios'

const state = {
  time: 0,
  user: null
}

const mutations = {
  add (state) {
    state.time++
  },
  user (state, data) {
    state.user = data
  }
}

const actions = {
  add ({commit}) {
    commit('add')
  },
  getUserInfo ({commit}) {
    axios.get('/api/user')
      .then(function (response) {
        commit('user', response)
      })
  }
}

const getters = {
  even: state => state.time % 2 === 0 ? 'even' : 'odd'
}

export default {
  state,
  mutations,
  actions,
  getters
}
