const fetch = require('node-fetch');
const url = `http://pokeapi.co/api/v2/pokemon/`;


async function fetchPokemon(pokemon) {
  const response = await fetch(`${url}${pokemon}/`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();

}

async function getPokemon() {
  try {
    const pokemon = await fetchPokemon('2');
    console.log(pokemon.name);
  } catch (e) {
    console.log('Error: ',e);
  }
}

getPokemon();


/* await es equivalente a un Promise.resolve() */
