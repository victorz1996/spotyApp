import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Bootstrapvue from 'bootstrap-vue'
import navbar from '../components/Navbar.vue'

let wrapper
beforeEach(() => {
  Vue.use(Bootstrapvue)
  wrapper = shallowMount(navbar)
})

describe('Navbar', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('HTMl renderizado structure esperada', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
