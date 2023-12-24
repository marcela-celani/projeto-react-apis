import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {Container , Logo, Button, LinkPage } from './headerStyle'
import logo from '../../assets/logo.png'
import icone from '../../assets/arrow.png'
import icone2 from '../../assets/arrow2.png'
import {goToHome, goToPokedex} from '../../routes/cordinator'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useMediaQuery } from '@chakra-ui/react'

const Header = ({id}) => {

const {addToPokedex, removeFromPokedex, pokedex} = useContext(PokemonContext);
const [isMobile] = useMediaQuery("(max-width: 767px)");
const navigate = useNavigate()

const location = useLocation()

  return (
    <>
    {location.pathname === '/pokedex' &&
        <Container>
        <div>
          <div>
            {isMobile ? null : <img className='icone' src={icone} alt=''/>}
          </div>
          <div>
            {isMobile ? <LinkPage onClick={()=> goToHome(navigate)}><img className='icone' src={icone} alt=''/></LinkPage> : <LinkPage onClick={()=> goToHome(navigate)}>Todos os Pokémons</LinkPage>}
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
        {isMobile ? <LinkPage onClick={()=>goToPokedex(navigate)}><img className='icone' src={icone2} alt=''/></LinkPage> : <Button className='blue' onClick={()=>goToPokedex(navigate)}>Pokédex</Button>}
        
        </Container>
    :
    location.pathname.includes('/pokemondetails') &&
    <Container>
      <div>
        <div>
        {isMobile ? null : <img className='icone' src={icone} alt=''/>}
        </div>
        <div>
        {isMobile ? <LinkPage onClick={()=> goToHome(navigate)}><img className='icone' src={icone} alt=''/></LinkPage> : <LinkPage onClick={()=> goToHome(navigate)}>Todos os Pokémons</LinkPage>}
        </div>
      </div>
      <Logo src={logo} />
      {
      pokedex.some((item) => item.data.id === id) ? 
      isMobile ? <Button onClick={()=> removeFromPokedex(id)} className='red'> X </Button> : <Button onClick={()=> removeFromPokedex(id)} className='red'>Excluir da Pokédex</Button>
      : 
      isMobile ? <Button onClick={()=> addToPokedex(id)} className='blue'>+</Button> : <Button onClick={()=> addToPokedex(id)} className='blue'>Adicionar a Pokédex</Button>
      }
    </Container>
    }
    </>
  )
}

export default Header
