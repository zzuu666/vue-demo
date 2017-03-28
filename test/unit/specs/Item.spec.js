import Vue from 'vue'
import Vuex from 'vuex'
import options from '@/store/modules/star'
import Item from '@/components/Item'

Vue.use(Vuex)

describe('Item.vue', () => {
  it('Test component with vuex', (done) => {
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
      title: 'Iron Man'
    }
    let Component = Vue.extend(Item)
    let vm = new Component({
      store,
      propsData
    }).$mount()
    setTimeout(() => {
      console.log(vm.$el)
      done()
    }, 0)
    
    // expect(vm.$el.querySelector('.title').textContent).to.equal('Iron Man')
  })
})

