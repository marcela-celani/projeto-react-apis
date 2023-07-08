import React from 'react'
import { Card } from './pokemonCardStyle'

const PokemonCard = ({tela, setTela}) => {

  return (
    <>
      <Card>
        <h2>POKE CARD</h2>
        <div>
          <button onClick={(e)=> setTela('PokemonDetailPage')}>detalhes</button>
          <button>capturar</button>
        </div>
      </Card>
    </>
  )
}

export default PokemonCard
