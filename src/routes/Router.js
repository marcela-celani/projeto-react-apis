import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from '../Pages/PokedexPage/PokedexPage';
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage';
import PokemonListPage from '../Pages/PokemonListPage/PokemonListPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonListPage/>} />
        <Route path='pokedex' element={<PokedexPage/>} />
        <Route path='pokemondetails' element={<PokemonDetailPage/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
