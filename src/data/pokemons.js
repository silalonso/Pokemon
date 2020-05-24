const pokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    types: ['poison', 'grass'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 2,
    name: 'ivysaur',
    types: ['poison', 'grass'],
    evolution: 'bulbasaur',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    id: 3,
    name: 'venusaur',
    types: ['poison', 'grass'],
    evolution: 'ivysaur',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: 4,
    name: 'charmander',
    types: ['fire'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 5,
    name: 'charmeleon',
    types: ['fire'],
    evolution: 'charmander',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    id: 6,
    name: 'charizard',
    types: ['flying', 'fire'],
    evolution: 'charmeleon',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    id: 7,
    name: 'squirtle',
    types: ['water'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: 8,
    name: 'wartortle',
    types: ['water'],
    evolution: 'squirtle',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    id: 9,
    name: 'blastoise',
    types: ['water'],
    evolution: 'wartortle',
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
  {
    id: 10,
    name: 'caterpie',
    types: ['bug'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
  },
  {
    id: 11,
    name: 'metapod',
    types: ['bug'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
  },
  {
    id: 12,
    name: 'butterfree',
    types: ['bug', 'flying'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
  },
  {
    id: 13,
    name: 'weedle',
    types: ['bug', 'poison'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
  },
  {
    id: 14,
    name: 'kakuna',
    types: ['bug', 'poison'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
  },
  {
    id: 15,
    name: 'beedrill',
    types: ['bug', 'poison'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
  },
  {
    id: 16,
    name: 'pidgey',
    types: ['normal', 'flying'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
  },
  {
    id: 17,
    name: 'pidgeotto',
    types: ['normal', 'flying'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
  },
  {
    id: 18,
    name: 'pidgeot',
    types: ['normal', 'flying'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
  },
  {
    id: 19,
    name: 'rattata',
    types: ['normal'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
  },
  {
    id: 20,
    name: 'raticate',
    types: ['normal'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
  },
  {
    id: 21,
    name: 'spearow',
    types: ['normal', 'flying'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
  },
  {
    id: 22,
    name: 'fearow',
    types: ['normal', 'flying'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
  },
  {
    id: 23,
    name: 'ekans',
    types: ['poison'],
    evolution: null,
    url:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
  },
];

export default pokemons;
