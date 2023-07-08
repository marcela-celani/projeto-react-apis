import React from 'react'
import {Container} from './headerStyle'

const HeaderPokedex = ({tela, setTela}) => {
  return (
    <Container>
        <button onClick={(e)=> setTela('PokemonListPage')}>Todos os Pokémons</button>
        <h1>Pokémon Logo</h1>
        <h1></h1>
    </Container>
  )
}

export default HeaderPokedex
