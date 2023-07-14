import React from 'react'
import { useLocation } from 'react-router-dom'
import {Container , Logo, Button, LinkPage } from './headerStyle'
import logo from '../../assets/logo.png'
import icone from '../../assets/arrow.png'

const Header = ({goToPokedex, goToHome}) => {

const location = useLocation()

  return (
    <>
    {location.pathname === '/pokedex' &&
        <Container>
        <div>
          <div>
            <img className='icone' src={icone} alt=''/>
          </div>
          <div>
            <LinkPage onClick={()=> goToHome()}>Todos os Pokémons</LinkPage>
          </div>
        </div>
        <Logo src={logo} />
        <h1></h1>
        </Container>
    }

    {location.pathname === '/' ?
        
        <Container>
        <h1></h1>
        <Logo src={logo} />
        <Button className='blue' onClick={()=>goToPokedex()}>Pokédex</Button>
        </Container>
    :
    location.pathname.includes('/pokemondetails') &&
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
    }
    </>
  )
}

export default Header
