// old notation
var gettings = function (name, message) {
  return console.log(name + message);
}

gettings("Vincenzo"," ready for ES6?");

// new ES6  arrow notation

var  arrowGetting = (name,message) => {
  return name + message;
}
// more simple

 var arrowGetting = (name,message) => name + message;

 arrowGetting("Vincenzo ","Welcome to arrow functions");
 // even more simple with one param

 var square = x => x * x;

 console.log("the area of teh square is : ", square(5));
