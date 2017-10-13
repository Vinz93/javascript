import co from "co";
import fetch from 'node-fetch';
// const co = require('co');

// co(function* () {
//   let bullbasour;
//   // let response = yield fetch( `http://pokeapi.co/api/v2/pokemon/1/` );
//    bullbasour = yield 2;
//   console.log(bullbasour);
//   return bullbasour;
// }).then(res => console.log(res));
// console.log('me');

const coroutine = gen => {
  const generator = gen();
  const handle = res => {
    if(res.done) return Promise.resolve(res.value);
    return Promise.resolve(res.value)
      .then(res => handle(generator.next()));
  }

  return handle(generator.next());
}


function* fetchQuote(){
  console.log('sop');
  let response = yield fetch( `http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json` );
  console.log(response.json());
  let pokemon = yield response.json();

  return pokemon
}
const quoteFetcher = coroutine(fetchQuote);


quoteFetcher.then( (pokemon) => { console.log( pokemon ) } );

// co(function* () {
//   let acum = 0;
//   acum += yield 1;
//   acum += yield 2;
//   acum += yield 3;
//
//   return acum;
// }).then( res => console.log(res))
