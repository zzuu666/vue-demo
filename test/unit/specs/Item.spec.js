import Vue from 'vue'
import Vuex from 'vuex'
import options from '@/store/modules/star'
import Item from '@/components/Item'

Vue.use(Vuex)

describe('Item.vue', () => {
  it('Test component with vuex', () => {
    const state = {
      stars: [
        {
          id: '100000',
          title: 'Iron Man'
        }
      ]
    }
    const { getters } = options
    let store = new Vuex.Store({
      state,
      getters
    })
    let propsData = {
      id: '100000',
      title: 'Iron Man',
      img: 'https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2414358483.webp',
      directors: [],
      casts: [],
      rating: 9.0,
      starMovie: Function,
      cancelMovie: Function
    }
    let Component = Vue.extend(Item)
    let vm = new Component({
      store,
      propsData
    }).$mount()
    expect(vm.$el.querySelector('.title').textContent).to.equal('Iron Man')
  })
})

