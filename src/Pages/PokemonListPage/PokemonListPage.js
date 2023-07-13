import React, { useContext } from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container , Titulo } from './pokemonListStyle'
import HeaderPokemonlist from '../../Components/Header/HeaderPokemonlist'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useNavigate } from 'react-router-dom'

const PokemonListPage = () => {
  
  const {pokemon, getPokemons, pokedex, addToPokedex} = useContext(PokemonContext)

  const navigate = useNavigate()

  const goToPokedex = () => {
    navigate('/pokedex')
  }
  

  
  return (
    <>
      <HeaderPokemonlist goToPokedex={goToPokedex} />
      <Titulo>Todos os Pokémons</Titulo>
      <Container>
        {pokemon.map((item) => {

          const types = item.data.types
            .map((types) => types.type.name)
            .join(' ')

          return(
          <PokemonCard 
            getPokemons={getPokemons}
            pokemon={item}
            image={item.data.sprites.other['official-artwork'].front_default}
            name={item.data.name}
            id={item.data.id}
            key={item.data.id}
            type={types}
            addToPokedex={addToPokedex} />
          )
        })}
      </Container>
    </>
  )
}

export default PokemonListPage
