import React, { useContext, useEffect, useState } from 'react'
import { Container, Panel, Titulo } from './pokemonDetailStyle'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { PokemonContext } from '../../contexts/PokemonContext'


const PokemonDetailPage = () => {

  const {background, backgroundImg} = useContext(PokemonContext)
  const [pokemonDetails, setPokemonDetails] = useState('');
  const [type, setType] = useState([])

  const params = useParams()

  const getPokemonDetails = (id) => {
        
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((resp) => {
      setPokemonDetails(resp.data)
      setType(resp.data.types)
  })
    .catch((error) => console.log('erro', error))
  }

  useEffect(()=> {
    getPokemonDetails(params.id)
  },[])

  const backgroundColor = background(type[0]?.type?.name)

  const types = type.map((item)=> {
    return(item.type.name)
  })

  return (
    
    <Container>
      <Header id={pokemonDetails.id}/>
      <Titulo>Detalhes</Titulo>
      <Panel style={{ backgroundColor }}>
        <img className='imgfrente' src={pokemonDetails?.sprites?.front_default} alt='imagem de frente'/>
        <img className='imgcostas' src={pokemonDetails?.sprites?.back_default} alt='imagem de costas'/>
        <div className='stats'>
          <h3>Base Stats</h3>
          {pokemonDetails?.stats?.map((item, index)=> {
            return (
              <div key={index}>
                <span>
                {item.stat.name}
                </span>
                <span>
                 {item.base_stat}
                </span>
              </div>
            )
          })}
        </div>
        <div className='name'>
          <div>
            <h4>{pokemonDetails.id < 10 ? `#0${pokemonDetails.id}` : `#${pokemonDetails.id}`}</h4>
            <h2>{`${pokemonDetails.name}`.charAt(0).toUpperCase() + `${pokemonDetails.name}`.slice(1)}</h2>
            <div>{types.length === 1 ? <img src={backgroundImg(types[0])} alt="img"/> : <div><img src={backgroundImg(types[0])} alt="img"/><img src={backgroundImg(types[1])} alt="img"/></div>}</div>
          </div>
        </div>
        <img className='imggeral' src={pokemonDetails?.sprites?.other['official-artwork'].front_default} alt='imagem geral'/>
        <div className='moves'>
        <h3>Moves</h3>
          {pokemonDetails?.moves?.map((item, index)=> {
            return (
              <div key={index}>
                {item.move.name}
              </div>
            )
          })}
        </div>
      </Panel>
    </Container>
  )
}

export default PokemonDetailPage
