import { createContext, useEffect, useState } from "react";
import axios from "axios";
import bug from '../assets/types-image/bug.png'
import dark from '../assets/types-image/dark.png'
import dragon from '../assets/types-image/dragon.png'
import electric from '../assets/types-image/electric.png'
import fairy from '../assets/types-image/fairy.png'
import fighting from '../assets/types-image/fighting.png'
import fire from '../assets/types-image/fire.png'
import flying from '../assets/types-image/flying.png'
import ghost from '../assets/types-image/ghost.png'
import grass from '../assets/types-image/grass.png'
import ground from '../assets/types-image/ground.png'
import ice from '../assets/types-image/ice.png'
import normal from '../assets/types-image/normal.png'
import poison from '../assets/types-image/poison.png'
import psychic from '../assets/types-image/psychic.png'
import rock from '../assets/types-image/rock.png'
import steel from '../assets/types-image/steel.png'
import water from '../assets/types-image/water.png'
import { useDisclosure } from "@chakra-ui/react";

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

    
    // Estado para controlar a abertura/fechamento do modal
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
      setIsOpen(true)
    }
    const closeModal = () => {
      setIsOpen(false)
    }
    
    const addToPokedex = (id) => {
        const newItem = pokemon.find((pokemon) => id === pokemon.data.id)
        
        if (pokedex.some((item) => item.data.id === newItem.data.id)) {
            // alert('o pokémon já está na pokedex');
            openModal()
        } else {
            setPokedex([...pokedex, newItem]);
            // alert('o pokémon foi adicionado');
            openModal()
        }     
    }

    const removeFromPokedex = (id) => {
        const removeItem = pokedex.filter((pokemon) => {
            return (id !== pokemon.data.id)
        })

        setPokedex(removeItem)
        // alert('o pokémon foi removido da pokedex');
        openModal()
    }
    
    
    const background = (type) => {

        let backgroundColor;
      
        switch (type) {
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

        return backgroundColor
    
    }


    const backgroundImg = (type) => {

      let image;
    
      switch (type) {
        case "grass":
          image = grass;
          break;
        case "poison":
          image = poison;
          break;
        case "fire":
          image = fire;
          break;
        case "water":
          image = water;
          break;
        case "bug":
          image = bug;
          break;
        case "normal":
          image = normal;
          break;
        case "dragon":
          image = dragon;
          break;
        case "ghost":
          image = ghost;
          break;
        case "rock":
          image = rock;
          break;
        case "ice":
          image = ice;
          break;
        case "psychic":
          image = psychic;
          break;
        case "electric":
          image = electric;
          break;
        case "fighting":
          image = fighting;
          break;
        case "ground":
          image = ground;
          break;
        case "fairy":
          image = fairy;
          break;
        case "flying":
          image = flying;
          break;
    
        default:
          image = "transparent";
      }

      return image
  
  }
    

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
    

    return(
        <PokemonContext.Provider value={{ pokemon, setPokedex,  getPokemons, pokedex,  addToPokedex, removeFromPokedex, background, backgroundImg, getItemsLocalStorage, openModal, closeModal, isOpen }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;