import React from 'react'
import HeaderDetails from '../../Components/Header/HeaderDetails'
import { Container, Panel } from './pokemonDetailStyle'


const PokemonDetailPage = () => {
  return (
    <Container>
      <HeaderDetails/>
      <h1>Detalhes</h1>
      <Panel>
        <div className='imgfrente'>img pokemon frente</div>
        <div className='imgcostas'>img pokemon costas</div>
        <div className='stats'>Base stats</div>
        <div className='name'>Identificador</div>
        <div className='imggeral'>img geral pokemon</div>
        <div className='moves'>Moves</div>
      </Panel>
    </Container>
  )
}

export default PokemonDetailPage
