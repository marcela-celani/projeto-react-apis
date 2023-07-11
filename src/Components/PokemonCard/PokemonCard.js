import React from 'react'
import { Card, ButtonDetalhes, ButtonCapturar, ContainerButton,ContainerId } from './pokemonCardStyle'
import pokeball from '../../assets/pokeball.png'

const PokemonCard = ({tela, setTela, image, type, id, name }) => {

  let backgroundColor;

  const pokemonTypes = type.split(' ')
  
  switch (pokemonTypes[0]) {

      case "grass":
        backgroundColor = "#729F92";
        break;
      case "poison":
        backgroundColor = "#AD61AE";
        break;
      case "fire":
        backgroundColor = "#EAAB7D";
        break;
      case "water":
        backgroundColor = "#71C3FF";
        break;
      case "bug":
        backgroundColor = "#76A866";
        break;
      case "normal":
        backgroundColor = "#BF9762";
        break;
      case "dragon":
        backgroundColor = "#004170";
        break;
      default:
        backgroundColor = "transparent";
  } 

  return (
    <>
      <Card style={{backgroundColor}}>
        <ContainerId>
          <div>
            <h4>{id < 10 ? `#0${id}` : `#${id}`}</h4>
            <h2>{`${name}`.charAt(0).toUpperCase() + `${name}`.slice(1)}</h2>
            <h3>{type}</h3>
          </div>
          <div>
            <img className='pokemon' src={image} alt=''/>
            {/* <img className='pokeball' src={pokeball} alt='' /> */}
          </div>
        </ContainerId>
        <ContainerButton>
          <div>
            <ButtonDetalhes onClick={(e)=> setTela('PokemonDetailPage')}>detalhes</ButtonDetalhes>
          </div>
          <div>
            <ButtonCapturar>Capturar!</ButtonCapturar>
          </div>
        </ContainerButton>
      </Card>
    </>
  )
}

export default PokemonCard
