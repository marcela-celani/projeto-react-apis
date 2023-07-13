import React from 'react'
import {Container, Logo, LinkPage} from './headerStyle'
import logo from '../../assets/logo.png'
import icone from '../../assets/arrow.png'

const HeaderPokedex = () => {
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
        <h1></h1>
    </Container>
  )
}

export default HeaderPokedex
