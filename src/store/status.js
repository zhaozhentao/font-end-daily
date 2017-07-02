const state = {
  loading: false
}

const mutations = {
  loading (state) {
    state.loading = true
  },
  finish (state) {
    state.loading = false
  }
}

const actions = {
  loading ({commit}) {
    commit('loading')
  },
  finish ({commit}) {
    commit('finish')
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
