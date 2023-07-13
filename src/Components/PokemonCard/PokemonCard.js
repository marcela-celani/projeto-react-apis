import React from "react";
import {
  Card,
  ButtonCapturar,
  ContainerButton,
  ContainerId,
  ImgPoke,
} from "./pokemonCardStyle";

import Route from '../../routes/Router'

const PokemonCard = ({ addToPokedex, image, type, id, name }) => {
  let backgroundColor;

  const pokemonTypes = type.split(" ");

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
    case "ghost":
      backgroundColor = "#67547f";
      break;
    case "rock":
      backgroundColor = "#b7b8cd";
      break;
    case "ice":
      backgroundColor = "#94dbd3";
      break;
    case "psychic":
      backgroundColor = "#f986a9";
      break;
    case "electric":
      backgroundColor = "#eed272";
      break;
    case "fighting":
      backgroundColor = "#da9a8b";
      break;
    case "ground":
      backgroundColor = "#7d685c";
      break;
    case "fairy":
      backgroundColor = "#ffc3e1";
      break;

    default:
      backgroundColor = "transparent";
  }

  return (
    <>
      <Card style={{ backgroundColor }}>
        <ContainerId>
          <div className="etiqueta">
            <h4>{id < 10 ? `#0${id}` : `#${id}`}</h4>
            <h2>{`${name}`.charAt(0).toUpperCase() + `${name}`.slice(1)}</h2>
            <h3>{type}</h3>
          </div>
          <ImgPoke src={image} alt="" />
        </ContainerId>
        <ContainerButton>
          <div>
            <a href="/pokemondetails">detalhes</a>
          </div>
          <div>
            <ButtonCapturar onClick={()=> addToPokedex(id)}>Capturar!</ButtonCapturar>
          </div>
        </ContainerButton>
      </Card>
    </>
  );
};

export default PokemonCard;
