import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import movie from './modules/movie'
import detail from './modules/detail'
import star from './modules/star'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    movie,
    detail,
    star
  },
  strict: debug
})
