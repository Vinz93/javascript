# Redux
SPA's have become increasingly complicated, our code must manage **more state** than ever before. This state can include `server responses` and cached data, as well as `locally created data` that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

When a system is opaque and `non-deterministic`, it's **hard** to **reproduce bugs** or **add new features**. You no longer understand what happens in your app as you have lost control over the when, why, and how of its state.

This complexity is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: `mutation and asynchronicity`.This is where Redux enters.


## Three Principles

### 1. Single source of truth

The **state** of your whole application is stored in an object tree within a single **store**.

Everything that changes in your whole application including the **data** and the **UI state**, are contained in a single object we call the state.

### 2. State is read-only
The only way to change the state is to emit an **action**, an object describing what happened.

The second principle of Redux is that the **state tree is read only**. Any time you want to change the state, you have to **dispatch an action**. An action is a plain JS object describing the change. Just like the state is the minimal representation of the data, the action is the minimal representation of the change to that data.

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

```js
store.dispatch({
  type: 'FETCH_PROFILES',
  ids: [9,3,6],
})
```

### 3. Changes are made with pure functions
To specify how the state tree is transformed by actions, you write pure reducers.

**Reducers** are just pure functions that take the **previous state** and an **action**, and **return the next state** of the whole application. Remember to return new state objects, instead of mutating the previous state.

UI layer is most predictable when it is described as a pure function of the application's state.


## Concepts

### Pure and Impure functions

A **Pure function** always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.

The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.

```js
function square(x) {
  return x * x;
}
function squareAll(items) {
  return items.map(square);
}
```
In the above example, a new array is returned instead of modifying the items that was passed in.

```js
const tax = 20;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice;
}
```
 the function above *depends on an **external*** tax variable, a pure function can not depend on outside variables, so is **impure**

____
## Bibliography
+ [Egghead.io Redux Course Notes](https://github.com/eggheadio/egghead.io_redux_course_notes)
+ [Redux three principles](http://redux.js.org/docs/introduction/ThreePrinciples.html)
+ [Pure functions](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
