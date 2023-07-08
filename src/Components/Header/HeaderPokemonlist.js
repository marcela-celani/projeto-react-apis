import React from 'react'
import { Container } from './headerStyle'

const HeaderPokemonlist = ({tela, setTela}) => {
  return (
    <Container>
        <h1></h1>
        <h1>Pokémon Logo</h1>
        <button onClick={(e)=> setTela('PokedexPage')}>Pokédex</button>
    </Container>
  )
}

export default HeaderPokemonlist
