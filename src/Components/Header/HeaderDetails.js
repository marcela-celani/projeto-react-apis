import React from 'react'
import {Container , Logo, Button} from './headerStyle'
import logo from '../../assets/logo.png'

const HeaderDetails = ({tela, setTela}) => {
  return (
    <Container>
      <a href="">Todos os Pokémons</a>
      <Logo src={logo} />
      <Button className='red' onClick={setTela('PokedexPage')}>Excluir da Pokédex</Button>
    </Container>
  )
}

export default HeaderDetails
