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
    let now = state.stars.slice()
    now.push(info)
    state.stars = now
  },
  decreaseStar (state, id) {
    let index = -1
    for (let i = 0, len = state.stars.length; i < len; i++) {
      if (state.stars[i].id === id) {
        index = i
      }
    }
    if (index > -1) {
      let now = state.stars.slice()
      now.splice(index, 1)
      state.stars = now
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
