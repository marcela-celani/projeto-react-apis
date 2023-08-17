import React, { useContext, useEffect } from "react";
import { Container, Titulo, Button, ContainerArea } from "./pokedexStyle";
import Header from "../../Components/Header/Header";
import { PokemonContext } from "../../contexts/PokemonContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import modalremover from "../../assets/modalremover.png";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/cordinator";

const PokedexPage = () => {
  const {
    pokedex,
    getPokemons,
    addToPokedex,
    removeFromPokedex,
    closeModal,
    isOpen,
    getItemsLocalStorage,
  } = useContext(PokemonContext);

  const navigate = useNavigate()

  useEffect(() => {
    getItemsLocalStorage();
  }, []);

  return (
    <ContainerArea>
      <Header />
        <Titulo>Meus Pokémons</Titulo>
        <Container>
          {pokedex.length === 0 ? (
            <div>
              <h2>Você não possui pokémons na sua pokedex. </h2>
              <Button onClick={()=> goToHome(navigate)}>Capturar Pokémons!</Button>
            </div>
          ) : (
            pokedex.map((item) => {
              const types = item.data.types.map((types) => types.type.name);
              return (
                <PokemonCard
                  getPokemons={getPokemons}
                  pokemon={item}
                  image={
                    item.data.sprites.other["official-artwork"].front_default
                  }
                  name={item.data.name}
                  id={item.data.id}
                  key={item.data.id}
                  type={types}
                  addToPokedex={addToPokedex}
                  removeFromPokedex={removeFromPokedex}
                />
              );
            })
          )}
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent top={'35%'}>
              <img src={modalremover} alt="" />
              <ModalCloseButton />
            </ModalContent>
          </Modal>
        </Container>
    </ContainerArea>
  );
};

export default PokedexPage;
