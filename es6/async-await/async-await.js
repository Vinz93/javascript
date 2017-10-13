const fetch = require('node-fetch');
const url = `http://pokeapi.co/api/v2/pokemon/10/`;

async function getPokemon() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json.name);
}

getPokemon();
