// 5.1  Prototypes

var lion =  " lion lion alk in zion";
var fish = " fish lorem ish plis";
var witch = " three sad witches";

// Todos los Objetos heredan propiedades del Object Prototype
// a su vez : Arrays , Strings , numbers , functions tienen sus propias
// propiedades mas las que posee el Object Prototype
// podemos crear nuevas propiedades para que puedan ser reusadas

String.prototype.countAll = function (letter) {
  var letterCount = 0
  for(var i = 0 ; i < this.length ; i++){
    if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
      letterCount++;
    }
  }
  return letterCount;
};

alert('String prototype counting letters : ' + lion.countAll("i"));
alert('String prototype counting letters : ' + fish.countAll("l"));

// 5.2 Prototypes herencia y constructores

function Shoe(size , gender , color , construtStyle){
  this.size = size;
  this.gender = gender;
  this.color = color;
  this.construction = construtStyle;

}

Shoe.prototype = {
  putOn: function () {
    alert("Your " + this.construction + " 'S on!");
  },
  takeOff: function () {
    alert("Phew! Somebody's size "+ this.size + "'S are fragrant! ");
  }
}

var beachShoe = new Shoe(10,"woman", "blue","flipflop");
beachShoe.takeOff();

var boots = new Shoe(10,"men", "brown","Timberland");
boots.putOn();

// 5.3 Object prototype propiedades (Overring)

var Tornado = function (category, affectedAreas , windGust) {
  this.category = category;
  this.affectedAreas = affectedAreas;
  tis.windGust = windGust;
};

var cities = [["kansas City", 45678],["Miami",98989],["Orlando",98798]];
var twister = new ("f5",cities, 220);

// overring valueOf only in object Tornado
// por default solo devuelve el valor del objeto. sus propiedades.

Tornado.prototype.valueOf = function () {
  var sum = 0;
  for (var i = 0; i < this.affectedAreas.length; i++) {
    sum += this.affectedAreas[i][1];
  }
  return sum;
};

console.log('people affected by the twister :',twister.valueOf());

// Overring to string method
Tornado.prototype.toString = function () {
  var list = "";
  for (var i = 0; i < this.affectedAreas.length; i++) {
    if(i < this.affectedAreas.length -1 ){
      list = list + this.affectedAreas[i][0]+ ", ";
    } else {
      list = list +"and " + this.affectedAreas[i][0];
    }
}
    return " This tornado has been classified as an "+ this.category + ", with wind gust up to" +
    this.windGust + "mph . Affeted areas are: "+ list +", potencial ffecting a population of "+ this.valueOf()
    + " .";

}

//twister.constructor retorna el constructores
//twister.constructor.prototype === .__proto__ retorna los prototypes modificados
// hasOwnPorperty() ayuda a identificar la ubicacion de una propiedades

 Object.prototype.finfOwnerOfProperty = function (propName) {
   var currentObject = this;
   while(currentObject !== null){
     if(currentObject.hasOwnPorperty(propName)){
       return currentObject;
     }else{
       currentObject = currentObject.__proto__;
     }
   }
   return "no property found";
 };

twister.finfOwnerOfProperty("valueOf");

// Task hacer un metodo para los strings que ayude a buscar coincidencias de String
// en otros string para hacer busquedas.
