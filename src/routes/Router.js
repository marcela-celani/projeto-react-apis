import React from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import PokedexPage from '../Pages/PokedexPage/PokedexPage';
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage';
import PokemonListPage from '../Pages/PokemonListPage/PokemonListPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Footer from '../Components/Footer/Footer';

const Router = () => {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path='/' element={<PokemonListPage/>} />
        <Route path='/pokedex' element={<PokedexPage/>} />
        <Route path='/pokemondetails/:id' element={<PokemonDetailPage/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default Router
