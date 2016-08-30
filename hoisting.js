/* =================================================================
                           Hoisting
=================================================================*/


/*=============================================================================
first : memory is set aside for all necessary variables and declared functions

1 -Hosting to the top variables
2- Hoisting to the top functions
3- Runs the executable code in order

****** the function Expressions are never hoisted, they are treaten like executable code *******
=============================================================================*/

function sumOfSquares(a, b) {
  var x = add(a*a, b*b);
  return x;
  function add(c,d) {
    var a = c + d;
    return a;
  }
}

/* ========== js loads like this  ====================
      1- Hosting variables
       var x = undefined
      2- Hoisting functions
        function add(c ,d ){...};
      3-Run the executable code
        x = add(a*a,b*b); return x;
====================================================*/

 console.log("Hoisting example 1: ",sumOfSquares(3,2));

/* ================ Other example ================== */
 function getMisteryNumber() {
   function chooseMystery() {
     console.log("an the mistery number is ..",5);
   }

   return chooseMystery();

   function chooseMystery() {
     console.log("an the mistery number is ..",12);

   }
 }

getMisteryNumber();
// ============ Hoisting example 2 ===========================
// we need to declare de var in the top , if we dont do that the var status will be
// undefined, because functions Expressions are not hoisted.

function capacityStatus(numPassagers, capacity) {
    // Its necessary declare this first, because the functions Expressions
    // are not Hoisted
    var seatsAvail = function() {
        console.log('the are ' + (capacity - numPassagers) + ' seats.');
        return true;
    }

    var noSeats = function() {
        console.log('no seats left');
        return false;
    }

    if (numPassagers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }
}
capacityStatus(60, 60);


// Hosting example 3
// our code load first the functions and then the execute de staments of
//the code
function capacityStatus(numPassagers, capacity) {

    if (numPassagers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }
    // Hosting to the to fist
    function seatsAvail() {
        console.log('the are ' + (capacity - numPassagers) + ' seats.');
        return true;
    }

    function noSeats() {
        console.log('no seats left');
        return false;
    }
}
capacityStatus(6, 60);
