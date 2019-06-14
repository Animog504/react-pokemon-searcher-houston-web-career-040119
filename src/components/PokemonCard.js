import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flipCard: false
    }
  }

  flipCard = () => {
    this.setState({
      flipCard: !this.state.flipCard
    })
  }

  render() {
    let cardSide
    if(this.state.flipCard===true){
      cardSide = this.props.pokemon.sprites.back
    }else{
      cardSide = this.props.pokemon.sprites.front
    }
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={cardSide} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
