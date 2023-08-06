import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Container , Logo, Button, LinkPage } from './headerStyle'
import logo from '../../assets/logo.png'
import icone from '../../assets/arrow.png'
import {goToHome, goToPokedex} from '../../routes/cordinator'
import { PokemonContext } from '../../contexts/PokemonContext'

const Header = ({id}) => {

const {addToPokedex, removeFromPokedex, pokedex} = useContext(PokemonContext);

const navigate = useNavigate()

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
            <LinkPage onClick={()=> goToHome(navigate)}>Todos os Pokémons</LinkPage>
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
        <Button className='blue' onClick={()=>goToPokedex(navigate)}>Pokédex</Button>
        </Container>
    :
    location.pathname.includes('/pokemondetails') &&
    <Container>
      <div>
        <div>
          <img className='icone' src={icone} alt=''/>
        </div>
        <div>
        <LinkPage onClick={()=> goToHome(navigate)}>Todos os Pokémons</LinkPage>
        </div>
      </div>
      <Logo src={logo} />
      {
      pokedex.some((item) => item.data.id === id) ? 
      <Button onClick={()=> removeFromPokedex(id)} className='red'>Excluir da Pokédex</Button> 
      : 
      <Button onClick={()=> addToPokedex(id)} className='blue'>Adicionar a Pokédex</Button>
      }
    </Container>
    }
    </>
  )
}

export default Header
