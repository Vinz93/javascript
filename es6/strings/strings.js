/*
 *  String templates
 */

 const dolarExchage = 7100;
 const dolars = 500;

console.log(`hey ${dolars} USD are ${dolars * dolarExchage} BFs`);

const people = [
  {
    name: 'Jon',
    dolar: 500,
  },
  {
    name: 'Peter',
    dolar: 1700,
  },
  {
    name: 'Dan',
    dolar: 3000,
  },
]

const htmlTemplete = `
  <ul class="people">
    ${people
      .map(p => `
        <li>
        ${p.name} has ${p.dolar}$ thats is = ${p.dolar * dolarExchage}
        </li>
      `)
      .join('')
    }
  </ul>
`;

console.log(htmlTemplete);

const dict = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  JS: 'JavaScript'
};

/*
 * Tagged Templates
 *  Strings ist an array of every string chunk of teh template,
 *   values are all the variables inside teh template, ...values capture all
 */
function addAbbreviations(strings, ...values) {
  const abbreviated = values.map(value => {
    if(dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr>`
    }
    return value;
  });

  return strings.reduce((sentence, string, i) => {
    return sentence + string + (abbreviated[i] || '');
  }, '');
}

const first = 'Byron';
const last = 'Essert';
const sentence = addAbbreviations`
    Hi my name is ${first} ${last}
  and I love to code ${'JS'},
  ${'HTML'}
  and ${'CSS'}
  all day and all night long!
`
console.log(sentence);


/*
 * New String Methods
 * .startsWith()
 *
 * .endsWith()
 *
 * .includes()
 *
 * .repeat()
 */
 const accountNumber = '825242631RT0001';
 console.log(`${accountNumber} startsWith 825? ${accountNumber.startsWith('825')}`);
 console.log(`${accountNumber} startsWith RT after 9? ${accountNumber.startsWith('RT',9)}`);
 console.log(`${accountNumber} endsWith 825? ${accountNumber.endsWith('825')}`);
 console.log(`${accountNumber} endsWith 001? ${accountNumber.endsWith('001')}`);
 console.log(`${accountNumber} includes RT? ${accountNumber.includes('RT')}`);
