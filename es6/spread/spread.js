/*
 *   Spread Operator 💪
 */

const ford = ['ka', 'Explorer', 'Fiesta'];
const toyota = ['meru', 'corolla', 'yaris'];

/* Merge all the brands in a new array */

const all = [...ford, 'aveo', ...toyota];
const shallCopy = [...all];
console.log('some cards', shallCopy);

/* works with all iterables */

const name = "Vinz";
console.log([...name]);

/* imutables delete*/

const comments = [
  { id: 209384, text: 'I love your dog!' },
  { id: 523423, text: 'Cuuute! 🐐' },
  { id: 632429, text: 'You are so dumb' },
  { id: 192834, text: 'its so big!' },
];
const id = 632429;
const commentIndex = comments.findIndex(comment => comment.id === id);

const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];
console.log(newComments);
