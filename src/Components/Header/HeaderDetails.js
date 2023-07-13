import React from 'react'
import {Container , Logo, Button, LinkPage} from './headerStyle'
import logo from '../../assets/logo.png'
import icone from '../../assets/arrow.png'

const HeaderDetails = () => {
  return (
    <Container>
      <div>
        <div>
          <img className='icone' src={icone} alt=''/>
        </div>
        <div>
          <LinkPage href='/'>Todos os Pokémons</LinkPage>
        </div>
      </div>
      <Logo src={logo} />
      <Button className='red'>Excluir da Pokédex</Button>
    </Container>
  )
}

export default HeaderDetails
