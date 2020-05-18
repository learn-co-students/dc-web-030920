import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    
    // why would we want to set up state for the pokemon form here?
    // set up validations
    // set local state for this form because the rest of the application does not need to update or re-render when the form inputs are updated. The rest of the app needs to update ONLY when the pokemon is ready to be added to the database (i.e. onSubmit of the form)
    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    // structure the pokemonObj in the same way that it is saved in our database
    const pokemonObj = {
      name: this.state.name,
      stats: [{
        value: this.state.hp,
        name: 'hp'
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    this.props.createPokemon(pokemonObj)
  }

  render() {
    const { name, hp, frontUrl, backUrl } = this.state

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name}  onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  value={hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
