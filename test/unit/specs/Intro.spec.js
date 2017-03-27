import Vue from 'vue'
import Intro from '@/components/common/Introduce'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}

describe('Test Intro Module with different props', () => {
  it('Test One', () => {
    let props = {
      name: 'Tim',
      avatar: 'Tim-avatar',
      alt: 'Tim-alt'
    }
    let vm = getRenderedText(Intro, props)
    expect(vm.querySelector('.name').textContent).to.equal('Tim')
  })
})
