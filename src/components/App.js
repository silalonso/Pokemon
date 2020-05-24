import React, { useState } from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';
import PokeList from './PokeList';
import Background from './Background';

const App = () => {
  const [losPokemons /*, setPokemons*/] = useState(pokemons);
  // console.log(pokemons);

  return (
    <div>
      <Background />
      <h1 className='titulo'> Personal pokedex </h1>
      <PokeList pokemons={losPokemons} />
    </div>
  );
};

export default App;
