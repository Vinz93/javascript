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

### Resources

- [Clousures - Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
