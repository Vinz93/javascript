## Async Await

it's basically just syntactic sugar on top of Promises.

The `async/await` syntax allows you to still use Promises, but it eliminates the need for providing a callback to the chained then() methods. The value that would have been sent to the then() callback is instead returned directly from the asynchronous function, just as if it were a synchronous blocking function.

```js

const data = await someFetch();  
```

The `async` keyword is used when you're defining a function that contains asynchronous code. This is an indicator that a Promise is returned from the function and should therefore be treated as asynchronous.

```js

async function getPokemon(id) {
  const pokemon = await fetchPokemon(id);
  console.log(`Pokemon name ${pokemon.name}`);
}
```
### Secuencially & Parallel Excecution

#### Secuencially

```js
async function showUserandRepos(account) {
  const user = await fetchGithub(`/users/${account}`);
  const repos = await fetchGithub(`/users/${account}/repos`);
}
```


Now the only problem is that each request.get() call is executed in series (meaning each call has to wait until the previous call has finished before executing), so we have to wait longer for the code to complete execution before getting our results. The better option would be to run the HTTP GET requests in parallel. This can still be done by utilizing Promise.all() like we would have done before. Just replace the for loop with a .map() call and send the resulting array of Promises to Promise.all()

#### Parallel

```js
async function concurrent(account) {
  const userPromise = fetchGithub(`/users/${account}`);
  const reposPromise = fetchGithub(`/users/${account}/repos`);
  const [user, repos] = [await userPromise, await reposPromise];
}
```

```js
async function concurrent(account) {
  const [user, repos] = await Promise.all([
    fetchGithub(`/users/${account}`),
    fetchGithub(`/users/${account}/repos`)
  ]);
}
```
