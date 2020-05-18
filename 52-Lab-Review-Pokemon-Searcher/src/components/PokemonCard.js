import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  // set up state for the toggle on each card.
  // the only part of the app that needs to keep track of if the card is clicked is the card itself.
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  // invoking this function in the render because we want the hp.value return to render to the DOM
  getHp = () => {
    const hp = this.props.pokemon.stats.find(s => s.name === 'hp')
    return hp.value
  }

  handleClick = () => {
    // set the toggle equal to the opposite of what it currently is
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    // we're pulling out the name key from our pokemon prop and we're able to use it as a variable on like 35. The name variable is equal to this.props.pokemon.name
    const { name, sprites: { front, back } } = this.props.pokemon
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.toggle ? back : front} />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
