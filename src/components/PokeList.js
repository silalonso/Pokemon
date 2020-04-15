import React from 'react';
import '..//stylesheets/App.css';
// import pokemons from '../data/pokemons.js';
import Pokemon from './Pokemon.js';

const PokeList = (props) => {
  console.log(props);
  // const pokemonLis = pokemons.map((pokemon, index) => {
  return (
    <>
      <Pokemon />
    </>
  );
};

//   return (
//     <div>
//       Mi lista de Pokemons
//       <ul>{pokemonLis}</ul>
//     </div>
//   );
export default PokeList;
