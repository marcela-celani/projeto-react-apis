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

    const [pokedex, setPokedex] = useState([])
    
    const addToPokedex = (id) => {
        const newItem = pokemon.find((pokemon) => id === pokemon.data.id)
        
        if (pokedex.some((item) => item.data.id === newItem.data.id)) {
            alert('o pokémon já está na pokedex');
        } else {
            setPokedex([...pokedex, newItem]);
            alert('o pokémon foi adicionado');
        }     
    }

    const removeFromPokedex = (id) => {
        const removeItem = pokedex.filter((pokemon) => {
            return (id !== pokemon.data.id)
        })

        setPokedex(removeItem)
        alert('o pokémon foi removido da pokedex');
    }
    
    
  
    // const pokemonType = pokemon.map((item) => {
    //     const type = item.data.types
    //     .map((item) => item.type.name)
    //     .join(' ')
    //     .split(" ")

    //     return type
    // })

    // console.log(pokemonType)


    // let backgroundColor;
  
    // switch (pokemonType[0]) {
    //   case "grass":
    //     backgroundColor = "#729F92";
    //     break;
    //   case "poison":
    //     backgroundColor = "#AD61AE";
    //     break;
    //   case "fire":
    //     backgroundColor = "#EAAB7D";
    //     break;
    //   case "water":
    //     backgroundColor = "#71C3FF";
    //     break;
    //   case "bug":
    //     backgroundColor = "#76A866";
    //     break;
    //   case "normal":
    //     backgroundColor = "#BF9762";
    //     break;
    //   case "dragon":
    //     backgroundColor = "#004170";
    //     break;
    //   case "ghost":
    //     backgroundColor = "#67547f";
    //     break;
    //   case "rock":
    //     backgroundColor = "#b7b8cd";
    //     break;
    //   case "ice":
    //     backgroundColor = "#94dbd3";
    //     break;
    //   case "psychic":
    //     backgroundColor = "#f986a9";
    //     break;
    //   case "electric":
    //     backgroundColor = "#eed272";
    //     break;
    //   case "fighting":
    //     backgroundColor = "#da9a8b";
    //     break;
    //   case "ground":
    //     backgroundColor = "#7d685c";
    //     break;
    //   case "fairy":
    //     backgroundColor = "#ffc3e1";
    //     break;
  
    //   default:
    //     backgroundColor = "transparent";
    // }

    

    const saveLocalStorage = () => {
        const string = JSON.stringify(pokedex);
        localStorage.setItem("Pokedex", string);
    }

    const getItemsLocalStorage = () => {
        const parse = JSON.parse(localStorage.getItem("Pokedex"));
    
        if (parse) {
          setPokedex(parse);
        }
    };

    useEffect(() => {
        saveLocalStorage();
    }, [pokedex]); 

    useEffect(() => {
        getItemsLocalStorage();
    }, []);
    
    // useEffect(() => {
    //     getItemsLocalStorage();
    // }, []);
    
 

    return(
        <PokemonContext.Provider value={{ pokemon, setPokedex,  getPokemons, pokedex,  addToPokedex, removeFromPokedex, getItemsLocalStorage }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;