import React from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container } from './pokedexStyle'
import HeaderPokedex from '../../Components/Header/HeaderPokedex'

const PokedexPage = ({tela, setTela}) => {
  return (
    <>
      <HeaderPokedex tela={tela} setTela={setTela}/>
      <h1>Meus Pokémons</h1>
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

export default PokedexPage
