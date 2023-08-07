import React, { useContext } from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container , Titulo } from './pokemonListStyle'
import { PokemonContext } from '../../contexts/PokemonContext'
import Header from '../../Components/Header/Header'

const PokemonListPage = () => {
  
  const {pokemon, addToPokedex, removeFromPokedex} = useContext(PokemonContext)


  return (
    <>
      <Header />
      <Titulo>Todos os Pokémons</Titulo>
      <Container>
        {pokemon.map((item) => {

          const types = item.data.types
            .map((types) => types.type.name)

          return(
          <PokemonCard 
            pokemon={item}
            image={item.data.sprites.other['official-artwork'].front_default}
            name={item.data.name}
            id={item.data.id}
            key={item.data.id}
            type={types}
            addToPokedex={addToPokedex}
            removeFromPokedex={removeFromPokedex} />
          )
        })}
      </Container>
    </>
  )
}

export default PokemonListPage
