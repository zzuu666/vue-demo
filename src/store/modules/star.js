const state = {
  stars: []
}

const getters = {
  getStars: state => state.stars
}

const actions = {
  increaseStar ({ commit }, { id, title }) {
    commit('increaseStar', {
      id,
      title
    })
  },
  decreaseStar ({ commit }, { id }) {
    commit('decreaseStar', id)
  }
}

const mutations = {
  increaseStar (state, info) {
    let now = state.stars.slice().push(info)

    state.stars = now
  },
  decreaseStar (state, id) {
    let index = state.stars.indexOf(id)

    if (index > -1) {
      let now = state.stars.slice().splice(index, 1)
      state.stars = now
    }
  }
}