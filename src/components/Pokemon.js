import React from 'react';
import '../stylesheets/App.css';

const Pokemon = (props) => {
  console.log(props);
  // console.log('me han clicado en POKEMON');
  // const [disabled, setEnabled] = useState(true);
  const enabledClass = props.pokemon.enabled === true ? 'enabled' : '';
  console.log(enabledClass);
  const handleClick = () => {
    // setEnabled(!disabled);
    props.handleClickEnPokemon(props.pokemon.id);
  };

  return (
    <div className={`card ${enabledClass}`} onClick={handleClick}>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <p className='name'>{props.pokemon.name}</p>
      <ul>
        {props.pokemon.types.map(function algo(type, index) {
          return <li key={index}>{type}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
