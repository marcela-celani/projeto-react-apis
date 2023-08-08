import React, { useContext } from 'react'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container , Titulo } from './pokemonListStyle'
import { PokemonContext } from '../../contexts/PokemonContext'
import modalcapturar from '../../assets/modalcapturar.png'

import Header from '../../Components/Header/Header'
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'

const PokemonListPage = () => {
  
  const {pokemon, addToPokedex, removeFromPokedex, closeModal, isOpen} = useContext(PokemonContext)

  

  return (
    <>
      <Header />
      <Titulo>Todos os Pokémons</Titulo>
      <Container>
        {pokemon.map((item) => {

          const types = item.data.types
            .map((types) => types.type.name)

          return(
          <PokemonCard 
            pokemon={item}
            image={item.data.sprites.other['official-artwork'].front_default}
            name={item.data.name}
            id={item.data.id}
            key={item.data.id}
            type={types}
            addToPokedex={addToPokedex}
            removeFromPokedex={removeFromPokedex} />
          )
        })}
      </Container>

      
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <img src={modalcapturar} alt="" />
          <ModalCloseButton />
        </ModalContent>
      </Modal>
   
    </>
  )
}

export default PokemonListPage
