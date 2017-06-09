'use strict'

var array = [1,2,3,4,5];

var stdout = process.stdout;
stdout.write("============= Arrays Prototipes====== \n\n");

stdout.write("Array : " + array + "\n");

stdout.write("Length: " + array.length + "\n");
//5
stdout.write("Array.pop(): " + array.pop() + " Array: "+ array + "\n");
//5
stdout.write("Array.push(6): " + array.push(6) + " Array: "+ array + "\n");
// 1 2 3 4 6
stdout.write("Array.shift(): " + array.shift() + " Array: "+ array +  "\n");

stdout.write("Array.reverse(): " + array.reverse() +" Array: "+ array +  "\n");

stdout.write("Array.sort(): " + array.sort() +" Array: "+ array +  "\n\n");

stdout.write("============= Arrays Reduce =========== \n\n");

var reduce = array.reduce(function(valorAnterior, valorActual, indice, vector){
  console.log("ant: ",valorAnterior, "act:",valorActual,"indice: ",indice, "vector:",vector);
  return valorAnterior + valorActual;
});

stdout.write("\n");
stdout.write("Array.reduce() 'anterior + actual' : "+ reduce + "\n\n");

stdout.write("============= Arrays Map =========== \n\n");

var map = array.map(function (i) {
  return i*2;
});

stdout.write(array+" Array.map() 'i*2' : "+ map + "\n\n");
