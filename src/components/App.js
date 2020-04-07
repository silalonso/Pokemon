import React from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';
import PokeList from './PokeList';

const App = () => {
  return (
    <div>
      <PokeList pokemons={pokemons} />
    </div>
  );
};

export default App;
