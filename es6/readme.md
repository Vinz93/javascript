# ES6 Basics
Algunos de los cambios en el ECMAScript 2015

## Arrow Functions
 Ejemplo de la antigua syntaxis
```js
var gettings = function (name, message) {
  return name + message;
}

```
Ahora reescribimos la funcion con la nuevas syntaxis de ES6

```js
var gettings =  (name, message) => {
  return name + message ;
}

```
incluso estas funciones pueden ser más simples en una sola linea,
el return esta implicito.

```js
 var arrowGetting = (name,message) => name + message;

```
cuando se tiene un solo parametro, incluso nos podemos ahorrar el colocar
los parentesis.

```js
 var square = x => x * x;
```
Con las arrow functions, se elimina el problema para tener acceso a otros scopes,
que se encuentra afuera. El clásico var that = this;

```js
var deliveryBoy = {
  name: "Vincenzo",
  handleMessage: function (message,handler) {
    handler(message);
  },
  recive: function () {
    this.handleMessage("Hello, ", message => console.log(message + this.name));
  }
}
```
## Variables

### Let
 Permite usar el block scoping y evita el hoisting,
 let variables are scoped to the nearest block.
 Existe un problema comun, con los callbacks, dentro de un for loop, var i sube
 con el hoisting y es compartida para todas la iteraciones, los callbacks son
 ejecutados al final de las iteraciones por lo que todos tienen acceso a la misma
 variable "i", con el ultimo valor que tuvo en su ultima iteracion, con let no
 se comparte la variable "i", se crea una nueva en cada iteracion.


###  Const
 Las Variables declaradas con Const solo son readable, si se intentan cambiar
 arrojan un error.

 Es comun usar Const, para variables como API, API_SECRET, PORT.


### Default values for functions parameters

 Con ES6 se pueden asignar valores por defecto a los argumentos en una funcion.
```js
function gettings(name = "vinz", msg = "hello, ") {
  console.log(msg + name);
}
 gettings();
 //hello, vinz
 gettings("Bill","Fuck You! ");
 //Fuck You! Bill
```
Incluso se pueden asignar funciones por defecto

```js
// function default
 function recive(complete = () => console.log("complete")) {
   complete();
 }
recive();
//complete
recive(() => console.log("hey i like ES6"));
// hey i like ES6

```
