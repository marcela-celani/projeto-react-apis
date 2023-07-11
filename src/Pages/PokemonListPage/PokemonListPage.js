import React, { useContext } from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container , Titulo } from './pokemonListStyle'
import HeaderPokemonlist from '../../Components/Header/HeaderPokemonlist'
import { PokemonContext } from '../../contexts/PokemonContext'

const PokemonListPage = ({tela, setTela}) => {
  
  const {pokemon, getPokemons} = useContext(PokemonContext)
  
  return (
    <>
      <HeaderPokemonlist tela={tela} setTela={setTela}/>
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
            image={item.data.sprites.other.dream_world.front_default}
            name={item.data.name}
            id={item.data.id}
            key={item.data.id}
            type={types}
            tela={tela} 
            setTela={setTela}/>
          )
        })}
      </Container>
    </>
  )
}

export default PokemonListPage
