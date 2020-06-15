import React from 'react'
import Bands from './Bands'
import Band from './Band'
import { shallow } from 'enzyme'

describe('Bands', () => {
  it('should render Band components', () => {
    const mockBands = [
      { id: 1, name: 'Draaaaaake is cancelled' },
      { id: 2, name: 'Slayah' }
    ]

    const wrapper = shallow(<Bands bands={mockBands} />)
    expect(wrapper.find(Band).length).toBe(mockBands.length)
  })
})
