import React from 'react'
import { Container , Logo, Button } from './headerStyle'
import logo from '../../assets/logo.png'

const HeaderPokemonlist = ({tela, setTela}) => {
  return (
    <Container>
        <h1></h1>
        <Logo src={logo} />
        <Button className='blue' onClick={(e)=> setTela('PokedexPage')}>Pokédex</Button>
    </Container>
  )
}

export default HeaderPokemonlist
