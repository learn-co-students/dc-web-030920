import React from 'react'
import manageBand from './manageBand'

describe('manageBand', () => {
  it('handles @@INIT', () => {
    const action = { type: '@@INIT'}

    expect(manageBand(undefined, action)).toEqual({ bands: [] })
  })

  it('handles ADD_BAND', () => {
    const action = { type: 'ADD_BAND', name: 'One Direction'}

    const result = manageBand({ bands: []}, action)

    expect(result.bands).toBeDefined()
    expect(result.bands.length).toBe(1)
    expect(result.bands[0].name).toEqual(action.name)
  })

  it('handles DELETE_BAND', () => {
    const mockState = {
      bands: [
        { id: 1, name: 'BoyzIIMen' },
        { id: 2, name: 'The Beatles' }
      ]
    }

    const action = {type: 'DELETE_BAND', id: 2}

    const result = manageBand(mockState, action)

    expect(result.bands).toBeDefined()
    expect(result.bands.length).toBe(mockState.bands.length - 1)
  })
})