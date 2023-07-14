import React from 'react'
import { Container, Panel } from './pokemonDetailStyle'
import Header from '../../Components/Header/Header'


const PokemonDetailPage = () => {
  return (
    <Container>
      <Header />
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
