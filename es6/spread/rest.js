/*
 *  Rest Operator 💪
 *
 *  its exacly the oposite to the spread, this operator take the 'rest' of
 *  the values, and put them into an array
 */

function convertCurrency(rate, ...amounts) {
  return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(7100, 150, 200, 100, 500, 300);
console.log(amounts);
