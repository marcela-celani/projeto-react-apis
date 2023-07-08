import React from 'react'
import {Container} from './headerStyle'

const HeaderDetails = ({tela, setTela}) => {
  return (
    <Container>
      <a href="">Todos os Pokémons</a>
      <h1>Pokémon Logo</h1>
      <button onClick={setTela('PokedexPage')}>Voltar à Pokédex</button>
    </Container>
  )
}

export default HeaderDetails
