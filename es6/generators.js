function* generator() {
  console.log('lorem');
  yield 'hey';
  console.log('ipsum');
  yield 'ho';
  console.log('dolor');
  yield 'lets';
}

const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
