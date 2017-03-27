import Vue from 'vue'
import Item from '@/components/Item'

describe('Item.vue', () => {
  it('It should render with different props', () => {
    // let component = Vue.extend(Item)
    // let vm = new component({
    //   propsData: {
    //     title: 'hello'
    //   }
    // }).$mount()
    let vm = new Vue({
      template: `
      <div>
        <Item :title="title"></Item>
      </div>
      `,
      components: {
        Item
      },
      data () {
        return {
          title: 'Hello'
        }
      }
    })
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.title').textContent).toBe('Hello')
    })
    // expect(vm.$el.querySelector('.title').textContent).toBe('Hello')
  })
})

