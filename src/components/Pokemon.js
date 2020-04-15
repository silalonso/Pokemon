import React from 'react';
import '..//stylesheets/App.css';
import pokemons from '../data/pokemons.js';

const Pokemon = (props) => {
  console.log(props);
  console.log(props.pokemon.name);
  // const pokemon = pokemons.map((pokemon) => {
  return (
    <li className='card'>
      <img src={props.pokemon.url} alt={props.name} />
      <p className='name'>{props.pokemon.name}</p>
      <ul>
        {props.pokemon.types.map(function algo(type) {
          return <li key={type.index}>{type}</li>;
        })}
      </ul>
    </li>
  );
};

export default Pokemon;
