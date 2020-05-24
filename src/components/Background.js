import React from 'react';
import '..//stylesheets/App.css';
import pokelogo from '../images/pokelogo.png';

function Background() {
  return (
    <div className='logo'>
      <img className='hola' src={pokelogo} alt='Pokemon' />
    </div>
  );
}

export default Background;
