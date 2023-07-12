import React from 'react'
import {Container, Logo} from './headerStyle'
import logo from '../../assets/logo.png'

const HeaderPokedex = ({tela, setTela}) => {
  return (
    <Container>
        <button onClick={(e)=> setTela('PokemonListPage')}>Todos os Pokémons</button>
        <Logo src={logo} />
        <h1></h1>
    </Container>
  )
}

export default HeaderPokedex
