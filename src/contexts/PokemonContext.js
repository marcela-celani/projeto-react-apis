import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
    
    const [pokemon, setPokemon] = useState([])
    

    useEffect(()=> {
        getPokemons()
    }, [])

    let arrayPokemon = []

    const getPokemons = async () => {
        
        for (let i=1; i <= 150; i++){
            arrayPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        await axios
        .all(arrayPokemon.map((item) => axios.get(item)))
        .then((resp) => setPokemon(resp))
        .catch((error) => console.log('erro', error))

    }

    const [pokedex, setPokedex] = useState('')
    
    const addToPokedex = (id) => {
        const newItem = pokemon.find((pokemon) => id === pokemon.data.id)
        
        if(pokedex.includes(newItem)) {
            setPokedex([...pokedex])
            alert('o pokémon já está na pokedex')
        } else {
            setPokedex([...pokedex, newItem])
            alert('o pokémn foi add')
        }

     
          
    }

    const saveLocalStorage = () => {
        const String = JSON.stringify(pokedex);
        localStorage.setItem("Pokedex", String);
    };
    const getItemsLocalStorage = () => {
        const Parse = JSON.parse(localStorage.getItem("Pokedex"));
    
        if (Parse) {
          setPokedex(Parse);
        }
      };
    
    useEffect(() => {
        getItemsLocalStorage();
      }, []);
    
      useEffect(() => {
        saveLocalStorage();
      }, [pokedex]); 
    

    return(
        <PokemonContext.Provider value={{pokemon, setPokedex,  getPokemons, pokedex,  addToPokedex}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;