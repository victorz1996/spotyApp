import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Bootstrapvue from 'bootstrap-vue'
import error from '../components/Error.vue'

let wrapper
beforeEach(() => {
  Vue.use(Bootstrapvue)
  wrapper = shallowMount(error, {
    propsData: {
      mensaje: 'Error',
    },
  })
})

describe('Error', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('HTMl renderizado structure esperada', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('Probando mensaje de error', () => {
    expect(wrapper.vm.mensaje).toBe('Error')
  })
})
