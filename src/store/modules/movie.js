import api from '../../api/_movie'

const state = {
  movies: [],
  loading: true
}

const getters = {
  getMovies: state => state.movies
}

const actions = {
  getInTheaterMovies ({ commit }) {
    api.getInTheaterMovies((data) => {
      commit('updateMovies', data)
    })
  }
}

const mutations = {
  updateMovies (state, { subjects }) {
    state.movies = subjects
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
