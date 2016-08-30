//   Objects

// 4.1
box = {width : 6 , height : 4  , volume : 23 ,
    material: "metal" , destination : "orlando" , "# books" : 0
}

console.log('Box object :', box);

// Los objetos de pueden manpular con  la syntaxis del dot
// ejm box.volume = 23
console.log('Box volume: ', box.volume);

//tambien esta la notacion de los corchetes
// esta notacion tiene la utilidad que los nombres de las
// propiedades sons strings
// ejem box["material"] o box["# books"]
 console.log('# books :', box["# books"]);

addBook(box,"vincenzo", "dont believe in limits");
addBook(box,"heue","arnold");
console.log(box);
function addBook(box , name , writer) {
   box["# books"]++;
   box['book' + box["# books"]] = {title: name , auhor : writer };
 }


 // 4.2 Exmple 2 Functions in objects

var aquarium = {
  Nemo:{type: "fish" , species: "clowfish", length: 2.1},
  dory:{type: "fish" , species: "blue fish", length: 4.1},
  star:{type: "equinoderm" , species: "starfish", length: 5.1},
  "coral castle": {type: "eviroment", material : " coquina", moves: "false"},

  addCritter : function(name , type, species , length){
    this[name] = {type : type , species : species , length : length};
  },
  takeOut : function (name) {
    this[name].name = name;
    var temp = this[name];
    delete this[name];
    return temp
  }
};

// 4.3 se pueden anadir propiedades a los objetos en cualquier momento
aquarium.countFish = function () {
  var numFish = 0;
  for( key in this ){
    if( this[key].type == "fish" ){
      numFish++;
    }
  }
  return numFish;
}

aquarium.addCritter("marlyn","fish","swordfish","33.2");
var toy = aquarium.takeOut("coral castle");

console.log('aquarium : ', aquarium);
console.log('this object is out :', toy);

console.log('Count fish function return :', aquarium.countFish());
