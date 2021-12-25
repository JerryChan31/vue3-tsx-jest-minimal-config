/** * @jest-environment jsdom */
import { mount } from '@vue/test-utils'
import Button from './Button'

describe('Button', () => {
  it('render', () => {
    const wrapper = mount(Button)
    expect(wrapper.get('button'))
  })
})
