import React from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';
import Pokemon from './Pokemon.js';

const PokeList = (props) => {
  console.log(props.pokemons);
  const pokemonLis = props.pokemons.map((pokemon) => {
    console.log(pokemon);
    return (
      <li key={pokemon.id}>
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });

  return (
    <div>
      Mi lista de Pokemons
      <ul>{pokemonLis}</ul>
    </div>
  );
};
export default PokeList;
