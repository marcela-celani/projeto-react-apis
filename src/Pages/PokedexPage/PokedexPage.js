import React, { useContext, useEffect } from "react";
import { Container, Titulo } from "./pokedexStyle";
import Header from "../../Components/Header/Header";
import { PokemonContext } from "../../contexts/PokemonContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokedexPage = () => {

  const { pokedex, getPokemons, addToPokedex, removeFromPokedex, getItemsLocalStorage} = useContext(PokemonContext);

  useEffect(() => {
    getItemsLocalStorage();
}, []);

  return (
    <>
      <Header />
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
                  removeFromPokedex={removeFromPokedex}
                />
              );
            })}
      </Container>
    </>
  );
};

export default PokedexPage;
