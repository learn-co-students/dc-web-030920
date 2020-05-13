import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = e => {
    // this.state = {type: e.target.value}
    this.setState({filters: {
      type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    const { type } = this.state.filters
    let url = '/api/pets'

    // if (this.state.filters.type !== 'all') {
    //   url = `/api/pets?type=${this.state.filters.type}`
    // }

    if (type !== 'all') {
      url = `/api/pets?type=${type}`
    }

    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({ pets: pets}))
  }

  onAdoptPet = id => {
    // map over my pets array
    // check the pet's id
    // if that pet's id matches the id passed in, update that pet's isAdopted property to true AND return that updated pet
    // otherwise return the pet
    
    const updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        // pet.isAdopted = true 👈 another way to do this!!
        return {...pet, isAdopted: true}
      }
      return pet
    })
    this.setState({ pets: updatedPets })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType} 
                filters={this.state.filters}
                myAwesomeClickHandler={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
