import React, { useState } from 'react';
import '..//stylesheets/App.css';

const Pokemon = (props) => {
  const [disabled, setEnabled] = useState(true);
  const clicked = disabled ? '' : 'enabled';

  return (
    <li className='card' id={clicked} onClick={() => setEnabled(!disabled)}>
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
