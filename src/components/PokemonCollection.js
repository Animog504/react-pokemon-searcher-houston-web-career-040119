import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        
        <h1>Hello From Pokemon Collection</h1>
        <br></br>
        {this.props.pokemons.map(pokemon => {
         return <PokemonCard pokemon={pokemon}/>
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
