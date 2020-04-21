import React, { useState } from 'react';
import '..//stylesheets/App.css';

const Pokemon = (props) => {
  console.log(props.handleClick);
  console.log('me han clicado en POKEMON');
  const [disabled, setEnabled] = useState(true);
  const clicked = disabled ? '' : 'enabled';
  // const handleClick = () => {
  //   setEnabled(!disabled);
  // };
  props.handleClick();

  return (
    <div className='card' id={clicked} onClick={props.handleClick}>
      <img src={props.pokemon.url} alt={props.name} />
      <p className='name'>{props.pokemon.name}</p>
      <ul>
        {props.pokemon.types.map(function algo(type) {
          return <li key={type.index}>{type}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
