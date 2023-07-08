import React from "react";
import { useState } from "react";
import PokedexPage from './Pages/PokedexPage/PokedexPage';
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage';
import PokemonListPage from './Pages/PokemonListPage/PokemonListPage';


function App() {

  const [tela, setTela] = useState('PokemonListPage')

  const renderizarTela = () => {
    if (tela === 'PokemonListPage'){
      return <PokemonListPage tela={tela} setTela={setTela}/>
    } else if (tela === 'PokedexPage') {
      return <PokedexPage tela={tela} setTela={setTela}/>
    } else if (tela === 'PokemonDetailPage') {
      return <PokemonDetailPage tela={tela} setTela={setTela}/>
    } else {
      console.log('Página de erro')
    }
  }

  return (
    <>
      {renderizarTela()}
    </>
  );
}

export default App;
