import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    this.doFetch()
  }

  doFetch(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        allPokemon: data,
      })
    })

  }
  render() {
    return ( 
      // {<condition> ? <everything> : "loading..."}
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.allPokemon}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
