const state = {
  movies: []
}

const actions = {
  increment () {
    state.movies.push('one')
  }
}

const mutations = {}

export default {
  state,
  actions,
  mutations
}

