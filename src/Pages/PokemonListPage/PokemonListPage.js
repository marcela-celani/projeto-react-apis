import React from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container } from './pokemonListStyle'
import HeaderPokemonlist from '../../Components/Header/HeaderPokemonlist'

const PokemonListPage = ({tela, setTela}) => {
  return (
    <>
      <HeaderPokemonlist tela={tela} setTela={setTela}/>
      <h1>Todos os Pokémons</h1>
      <Container>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
        <PokemonCard tela={tela} setTela={setTela}/>
      </Container>
    </>
  )
}

export default PokemonListPage
