// import React from 'react';
import '../stylesheets/App.css';
import React, { useState } from 'react';
import Pokemon from './Pokemon.js';

const PokeList = (props) => {
  const pokemonLis = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon
          pokemon={pokemon}
          handleClickEnPokemon={props.handleClickEnPL}
        />
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
