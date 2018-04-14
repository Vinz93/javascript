## Arrays

### Prototypes

#### Mutator methods

- **Pop**

 Removes the last element from an array and returns that element. This method changes the length of the array.

 ```js
  let arr = [1, 2, 3, 4];
  const res = arr.pop();
  // res: 4  arr: [1, 2, 3]
 ```
- **Shift**

  Removes the first element from an array and returns that removed element. This method changes the length of the array.

 ```js
  let arr = [1, 2, 3, 4];
  const res = arr.shift();
  // res: 1  arr: [2, 3, 4]
 ```
- **Push**

 Adds one or more elements to the end of an array and returns the new length of the array.

 ```js
  let arr = [1, 2, 3, 4];
  const newLength = arr.push(5);
  // res: 5  arr: [1, 2, 3, 4, 5]
 ```
- **Reverse**

 Reverses an array.

 ```js
  let arr = [1, 2, 3, 4];
  const newLength = arr.reverse();
  // arr: [4, 3, 2, 1]
 ```

#### Mutator methods

 - **forEach**

 Executes a provided function once for each array element.

  ```js
  arr1.forEach((element, index, array) => {
      /* Executes one for each element */
      console.log(element === array[index]);
  });
  ```
// sort
Map
Reduce
filter

links
