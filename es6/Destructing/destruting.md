## Destruting examples :clipboard:

### Destruting arrays
```js
const profile = ['Vincenzo', 24, 'vinzb9'];
const [name, age, instagram] = profile;
/* name = Vincenzo , age = 24, instagram  = vinzb9 */

const data = 'Basketball,Sports,90210,23,me,men,to';
const [sport, category, idTeam, inventory] = data.split(',');
/* sport = Basketball, category = Sports, idTeam = 90210 */

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = team;
/*    ... <-rest operator 🍭
      players = ['Sarah', 'Keegan', 'Riker']
 */
```
### Destruting objects
```js
const profile = {
  name: 'Vincenzo',
  username: 'vinz93',
  age: 24,
  social: {
    twitterProfile: 'vinzps',
    facebookProfile: 'vincenzo.bianco',
  },
}

const { name, age } = profile;

const { twitterProfile:tweet, facebookProfile:fb } = profile.social;

const { twitterProfile:t2, facebookProfile:fb2 , gplus = `default`} = profile.social;

```
### Destruting functions
Multiple returns and named defaults
only take what you need
```js
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

/* destruct the params and have default values */

function tipCalc({ total = 100, tip = 0.15, tax = 0.16 } = {}) {
  return total + (tip * total) + (tax * total);
}
const bill = tipCalc({ tip: 0.10, total: 22500 });
```
