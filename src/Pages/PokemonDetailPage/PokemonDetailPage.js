import React, { useContext, useEffect, useState } from "react";
import { Container, Panel, Titulo, Moves, Stats } from "./pokemonDetailStyle";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PokemonContext } from "../../contexts/PokemonContext";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import modalcapturar from "../../assets/modalcapturar.png";
import modalremover from "../../assets/modalremover.png";

const PokemonDetailPage = () => {
  const { background, backgroundImg, closeModal, isOpen, pokedex } =
    useContext(PokemonContext);
  const [pokemonDetails, setPokemonDetails] = useState("");
  const [type, setType] = useState([]);

  const params = useParams();

  const getPokemonDetails = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((resp) => {
        setPokemonDetails(resp.data);
        setType(resp.data.types);
      })
      .catch((error) => console.log("erro", error));
  };

  useEffect(() => {
    getPokemonDetails(params.id);
  }, []);

  const backgroundColor = background(type[0]?.type?.name);

  const types = type.map((item) => {
    return item.type.name;
  });

  return (
    <Container>
      <Header id={pokemonDetails.id} />
      <Titulo>Detalhes</Titulo>
      <Panel style={{ backgroundColor }}>
        <img
          className="imgfrente"
          src={pokemonDetails?.sprites?.front_default}
          alt="imagem de frente"
        />
        <img
          className="imgcostas"
          src={pokemonDetails?.sprites?.back_default}
          alt="imagem de costas"
        />
        <div className="stats">
          <h3>Base Stats:</h3>
          {pokemonDetails?.stats?.map((item, index) => {
            return (
              <Stats key={index}>
                <div className="coluna">
                  {item.stat.name === "hp" ? (
                    <div>
                      <span className="name">HP</span>
                    </div>
                  ) : item.stat.name === "attack" ? (
                    <div>
                      <span>Attack</span>
                    </div>
                  ) : item.stat.name === "defense" ? (
                    <div>
                      <span>Defense</span>
                    </div>
                  ) : item.stat.name === "special-attack" ? (
                    <div>
                      <span>Sp. Atk.</span>
                    </div>
                  ) : item.stat.name === "special-defense" ? (
                    <div>
                      <span>Sp. Def.</span>
                    </div>
                  ) : (
                    <div>
                      <span>Speed</span>
                    </div>
                  )}
                </div>
                <div className="barra">
                  {item.stat.name === "hp" ? (
                    <div>
                      <span>{item.base_stat}</span>
                      <progress value={item.base_stat} max="250" />
                    </div>
                  ) : item.stat.name === "attack" ? (
                    <div>
                      <span>{item.base_stat}</span>
                      <progress value={item.base_stat} max="134" />
                    </div>
                  ) : item.stat.name === "defense" ? (
                    <div>
                      <span>{item.base_stat}</span>
                      <progress value={item.base_stat} max="180" />
                    </div>
                  ) : item.stat.name === "special-attack" ? (
                    <div>
                      <span>{item.base_stat}</span>
                      <progress value={item.base_stat} max="154" />
                    </div>
                  ) : item.stat.name === "special-defense" ? (
                    <div>
                      <span>{item.base_stat}</span>
                      <progress value={item.base_stat} max="125" />
                    </div>
                  ) : (
                    <div>
                      <span>{item.base_stat}</span>
                      <progress value={item.base_stat} max="140" />
                    </div>
                  )}
                </div>
              </Stats>
            );
          })}
          <Stats>
            <div className="coluna">Total</div>
            <div className="barra">
              <div>
                {pokemonDetails?.stats?.reduce((total, item) => {
                  return total + item.base_stat;
                }, 0)}
              </div>
            </div>
          </Stats>
        </div>
        <div className="name">
          <div>
            <h4>
              {pokemonDetails.id < 10
                ? `#0${pokemonDetails.id}`
                : `#${pokemonDetails.id}`}
            </h4>
            <h2>
              {`${pokemonDetails.name}`.charAt(0).toUpperCase() +
                `${pokemonDetails.name}`.slice(1)}
            </h2>
            <div className="type-container">
              {types.length === 1 ? (
                <img src={backgroundImg(types[0])} alt="img" />
              ) : (
                <span>
                  <img src={backgroundImg(types[0])} alt="img" />
                  <img src={backgroundImg(types[1])} alt="img" />
                </span>
              )}
            </div>
          </div>
        </div>
        <img
          className="imggeral"
          src={pokemonDetails?.sprites?.other["official-artwork"].front_default}
          alt="imagem geral"
        />
        <div className="moves">
          <h3>Moves:</h3>
          <Moves>
            {pokemonDetails?.moves?.map((item, index) => {
              return (
                <p key={index}>
                  {item.move.name.split("-").map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1) + " ";
                  })}
                </p>
              );
            })}
          </Moves>
        </div>
      </Panel>

      {pokedex.some((item) => item.data.id === pokemonDetails.id) ? (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent top={"35%"}>
            <img src={modalcapturar} alt="" />
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent top={"35%"}>
            <img src={modalremover} alt="" />
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default PokemonDetailPage;
