import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
    
    const [pokemon, setPokemon] = useState([])

    useEffect(()=> {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        
        let arrayPokemon = []

        for (let i=1; i <= 20; i++){
            arrayPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        await axios
        .all(arrayPokemon.map((item) => axios.get(item)))
        .then((resp) => setPokemon(resp))
        .catch((error) => console.log('erro', error))

    }

    console.log(pokemon)

    return(
        <PokemonContext.Provider value={{pokemon, getPokemons}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;