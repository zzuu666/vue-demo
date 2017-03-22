import api from '../../api/movie'

const state = {
  details: {},
  loading: true
}

const getters = {
  getDetails: state => state.details
}

const actions = {
  getMovieDetail ({ commit }) {
    api.getMovieDetail((data) => {
      commit('updateDetails', data)
    })
  }
}

const mutations = {
  updateDetails (state, subjects) {
    state.details = subjects
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

