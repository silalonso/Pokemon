import React, { useState } from 'react';
import '../stylesheets/App.css';
import pokemonsApi from '../data/pokemons.js';
import PokeList from './PokeList';

const App = () => {
  const [pokemons, setPokemons] = useState(pokemonsApi);
  console.log(pokemons);

  const handleClickEnApp = (id) => {
    console.log('clickado', id);
    const foundItem = pokemons.find((pokemon) => pokemon.id === id);
    foundItem.enabled = !foundItem.enabled;
    console.log(pokemons);
    setPokemons([...pokemons]);
  };

  // const foo = [
  //   {
  //     evolution: null,
  //     id: 1,
  //     name: 'bulbasaur',
  //     types: (2)[('poison', 'grass')],
  //     url:
  //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  //     enabled: true
  //   },
  // ];

  return (
    <div>
      <h1 className='titulo'> Mi lista de Pokemons </h1>
      <PokeList pokemons={pokemons} handleClickEnPL={handleClickEnApp} />
    </div>
  );
};

export default App;
