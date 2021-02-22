import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Bootstrapvue from 'bootstrap-vue'
import card from '../components/Card.vue'

let wrapper
beforeEach(() => {
  Vue.use(Bootstrapvue)
  wrapper = shallowMount(card, {
    propsData: {
      item: {
        images: [],
      },
    },
  })
})

describe('Card', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('HTMl renderizado structure esperada', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
