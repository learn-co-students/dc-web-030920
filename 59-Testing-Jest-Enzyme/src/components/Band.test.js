import React from 'react'
import { shallow } from 'enzyme'
import Band from './Band'

const mockProps = {
  name: 'Aerosmith',
  id: 1,
  deleteBand: jest.fn()
}

describe('Band', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Band {...mockProps} />)

    expect(wrapper).toMatchSnapshot()
  })
})