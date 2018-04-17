## Closure

- Is the combination of a function and the lexical environment within which that function was declared.

- Wraps the entire environment, binding necessary
variables from other scopes.

```js
function testClosure() {
    const x = 3;
    function innerFunc() {
        return x;
    }
    return innerFunc;
}
const checkLocalX = testClosure();
checkLocalX();  /* returns 3 */
```
In the example above, the inner function can access the outer function's variables, because they "feel" like global variables. Notice that the local variable **x** is now bound within **checkLocalX**.

### Car factory example
The example above shows, how a local scope is created when we call the function **carFactory()**, and how the **id** it's saved and incremented every time we called the closures.

```js
function carFactory(model) {
    let id = 0;
    return function(owner) {
        id++;
        return {
          owner,
          model,
          id,
        }
    };
}
const teslaFabric = carFactory('Tesla');
const fourRunnerFabric = carFactory('4runner');
teslaFabric('Vincenzo');
/* owner: Vincenzo, model: Tesla, id: 1 */
teslaFabric('Barbara');
/* owner: Barbara, model: Tesla, id: 2 */
fourRunnerFabric('Vincenzo');
/* owner: Vincenzo, model: 4runner, id: 1  */
```
[Try it in jsbin](http://jsbin.com/cahowol/2/edit?html,js,output)

### Resources

- [Closures - Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
