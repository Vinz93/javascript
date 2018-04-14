/* =========================================
      Funcion anonima pasada como parametro 1.1
============================================*/
console.log("1) Funcion anonima pasada como paramentro en una variable.\n\n");
  var gettings = function(){
    console.log("hello world, var function\n");
  };

  hello(gettings);

  function hello(msg) {
    msg();
  }



  /* ======================================================
        Funtion Expressions with Arrays and Map()  1.2
  ========================================================= */
console.log("2) function Map  arr.map(function(){..}).\n\n");

  var numbers = [1,2,3,4];

  var results = numbers.map(function (arrayCell) { return arrayCell * 2;  });
  console.log('fun map in a array i*2 : ', results,"\n");

  var filterodd = numbers.map(function (i) {
    if (i % 2 == 0) {
      return i;
    }
  });

  console.log('map siempre devuelve la misma cantidad de elementos, filterodd : ', filterodd,"\n");



  /* ======================================================
            Arrays as queue                 1.3
  ========================================================= */

  var parkRides = [["Sheikra",40],["Scorpion Ride",20],["Manta",30],["Kraken",40]];
  var fastPass = ["Manta","Sheikra","Kraken","Manta"];
  var wantsRide = "Kraken";

// invocando la funcion atraves de una variable
var ticket =  buildTicket(parkRides,fastPass,wantsRide);
ticket();
//se puede invocar de esta manera
buildTicket(parkRides,fastPass,wantsRide)();
function buildTicket (allRides, passRides,pick) {
    if(pick == passRides[0]){
      passRides.shift();
      return function () {
        console.log('A tickect is printing for ' + pick + "!");
      };
    } else {
      for (var i = 0; i < allRides.length; i++) {
        if(allRides[i][0] == pick){
          return function () {
            console.log('A tickect is printing for ' + pick + "!\n" +
              'Your wait time is about ' + allRides[i][1] + " minutes.");
          };
        }
      }
    }
  };
