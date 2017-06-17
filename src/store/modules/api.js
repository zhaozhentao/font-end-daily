const state = {
  time: 0
}

const mutations = {
  add (state) {
    state.time++
  }
}

const actions = {
  add ({commit}) {
    commit('add')
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
