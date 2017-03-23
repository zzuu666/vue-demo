import api from '../../api/_movie'

const state = {
  details: {},
  loading: true
}

const getters = {
  getDetails: state => state.details
}

const actions = {
  getMovieDetail ({ commit }, { id }) {
    api.getMovieDetail(id, (data) => {
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

