import React from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';

const Pokemon = (props) => {
  console.log(props);
  console.log(props.pokemon.name);
  // const pokemon = pokemons.map((pokemon) => {
  return (
    <>
      <img src={props.pokemon.url} alt={props.name} />
      <p>{props.pokemon.name}</p>
      <ul>
        {props.pokemon.types.map(function algo(type) {
          return <li key={type.index}>{type}</li>;
        })}
      </ul>
    </>
  );
};

export default Pokemon;
