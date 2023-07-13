import React from 'react'
import { Container , Logo, Button } from './headerStyle'
import logo from '../../assets/logo.png'

const HeaderPokemonlist = ({goToPokedex}) => {
  return (
    <Container>
        <h1></h1>
        <Logo src={logo} />
        <Button className='blue' onClick={()=>goToPokedex()}>Pokédex</Button>
    </Container>
  )
}

export default HeaderPokemonlist
