// import React from 'react';
import '..//stylesheets/App.css';
import React, { useState } from 'react';
import Pokemon from './Pokemon.js';

const PokeList = (props) => {
  const [disabled, setEnabled] = useState(true);
  const handleClickEnPL = () => {
    console.log('me han clicado en pokelist');
    setEnabled(!disabled);
  };
  const clicked = disabled ? '' : 'enabled';
  const pokemonLis = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon pokemon={pokemon} handleClick={handleClickEnPL} />
      </li>
    );
  });

  return (
    <div>
      <ul className='container'>{pokemonLis}</ul>
    </div>
  );
};

export default PokeList;
