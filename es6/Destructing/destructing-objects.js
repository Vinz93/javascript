const profile = {
  name: 'Vincenzo',
  username: 'vinz93',
  age: 24,
  social: {
    twitterProfile: 'vinzps',
    facebookProfile: 'vincenzo.bianco',
  },
}

/*  simple destruct */
const { name, age } = profile;
console.log(name, age);

/* destruct and rename  */
const { twitterProfile:tweet = `default`, facebookProfile:fb } = profile.social;
console.log(tweet, fb);

/* default values  */
const { twitterProfile:tweet2, facebookProfile:fb2 , gplus = `default`} = profile.social;
console.log(tweet2, fb2, gplus);

/* example when you only take what you need  */

function convertCADCurrency(amount) {
  const converted = {
    USD: amount * 0.76,
    GPB: amount * 0.53,
    AUD: amount * 1.01,
    MEX: amount * 13.30
  };
  return converted;
}

const { USD, MEX } = convertCADCurrency(670);
console.log(`670 CAD = ${USD} USD =  ${MEX} MEX`);

/* destruct the params and have default values */

function tipCalc({ total = 100, tip = 0.15, tax = 0.16 } = {}) {
  console.log(`
  =================================
                Bill 💸
  =================================
        Subtotal: ${total}
        tip: ${tip *total}
        tax: ${ tax * total}
        ---------------------
        Total: ${total + (tip * total) + (tax * total)}
  =================================
  `);
  return total + (tip * total) + (tax * total);
}

const bill = tipCalc({ tip: 0.10, total: 22500 });
