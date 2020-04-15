import React, { useState } from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';
import PokeList from './PokeList';

const App = () => {
  const [losPokemons /*, setPokemons*/] = useState(pokemons);
  console.log(pokemons);
  return (
    <div>
      <PokeList pokemons={losPokemons} />
    </div>
  );
};

export default App;
