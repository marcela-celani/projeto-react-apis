import React from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container , Titulo } from './pokemonListStyle'
import HeaderPokemonlist from '../../Components/Header/HeaderPokemonlist'

const PokemonListPage = ({tela, setTela}) => {
  return (
    <>
      <HeaderPokemonlist tela={tela} setTela={setTela}/>
      <Titulo>Todos os Pokémons</Titulo>
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
