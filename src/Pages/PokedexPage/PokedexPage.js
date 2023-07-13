import React, { useContext } from "react";
import { Container, Titulo } from "./pokedexStyle";
import HeaderPokedex from "../../Components/Header/HeaderPokedex";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../contexts/PokemonContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokedexPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const { pokedex, getPokemons, addToPokedex } =
    useContext(PokemonContext);

  return (
    <>
      <HeaderPokedex goToHome={goToHome} />
      <Titulo>Meus Pokémons</Titulo>
      <Container>
        {pokedex.length === 0
          ? "vazio"
          : pokedex.map((item) => {
              const types = item.data.types
                .map((types) => types.type.name)
                .join(" ");

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
                />
              );
            })}
      </Container>
    </>
  );
};

export default PokedexPage;
