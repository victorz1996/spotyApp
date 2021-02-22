import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Bootstrapvue from 'bootstrap-vue'
import loading from '../components/Loading.vue'

let wrapper
beforeEach(() => {
  Vue.use(Bootstrapvue)
  wrapper = shallowMount(loading)
})

describe('Loading', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('HTMl renderizado structure esperada', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
