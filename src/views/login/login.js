import axios from 'axios'

const state = {
  time: 0,
  data: null
}

const mutations = {
  add (state) {
    state.time++
  },
  loaded (state, data) {
    state.data = data
  }
}

const actions = {
  add ({commit}) {
    commit('add')
  },
  loadData ({commit}) {
    axios.get('http://localhost:8080/api/my')
      .then(function (response) {
        commit('loaded', response)
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
