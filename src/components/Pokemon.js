import React from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';

const Pokemon = () => {
  const pokemonLis = pokemons.map((pokemon, index) => {
    return (
      <li key={index}>
        <img src={pokemon.url} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <ul>
          {pokemon.types.map(function algo(type) {
            return <li> {type}</li>;
          })}
        </ul>
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

export default Pokemon;
