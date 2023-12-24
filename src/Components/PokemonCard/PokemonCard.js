import React, { useContext } from "react";
import {
  Card,
  ButtonCapturar,
  ContainerButton,
  ContainerId,
  ImgPoke,
  ButtonExcluir,
  ButtonDetalhes
} from "./pokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/cordinator";
import { PokemonContext } from "../../contexts/PokemonContext";


const PokemonCard = ({ addToPokedex, removeFromPokedex, image, type, id, name }) => {

  const {background, backgroundImg} = useContext(PokemonContext)

  const backgroundColor = background(type[0])

  const navigate = useNavigate()
  const location = useLocation()
  
  return (
    <>
      <Card style={{ backgroundColor }}>
        <ContainerId>
          <div className="etiqueta">
            <h4>{id < 10 ? `#0${id}` : `#${id}`}</h4>
            <h2>{`${name}`.charAt(0).toUpperCase() + `${name}`.slice(1)}</h2>
            <div className="type-container">
              {type.length === 1 ? 
              <img src={backgroundImg(type[0])} alt="imagem"/> 
              : 
              <span>
                <img src={backgroundImg(type[0])} alt="imagem"/>
                <img src={backgroundImg(type[1])} alt="imagem"/>
              </span>}
            </div>
          </div>
          <ImgPoke src={image} alt="imagem" />
        </ContainerId>
        <ContainerButton>
          <div>
            <ButtonDetalhes onClick={()=> goToDetails(navigate, id)}>Detalhes</ButtonDetalhes>
          </div>


          {location.pathname === '/' &&
          <div>
            <ButtonCapturar onClick={()=> addToPokedex(id)}>Capturar!</ButtonCapturar>
          </div>
          }

          {location.pathname === '/pokedex' &&
          <div>
            <ButtonExcluir onClick={()=> removeFromPokedex(id)}>Excluir</ButtonExcluir>
          </div>
          }

        </ContainerButton>
      </Card>
    </>
  );
};

export default PokemonCard;
