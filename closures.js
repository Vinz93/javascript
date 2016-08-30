/* ======================================================
        Closure     "Simple test"        2
========================================================= */
/* A closure wraps the entire evironment, binding necessary
variables from other scopes, in this case the x, from closureTest */

function clouseTest() {
    var x = 3;

    function innerFunction() {
        return x;
    }
    return innerFunction;
}
var checkLocalX = clouseTest();
console.log("\n return the external variable x : ", checkLocalX(), "\n");

/* ======================================================
        Closure     "Simple test 2"        2
========================================================= */

console.log("Other test for closures \n");
/* The counter its part of the evironment of the internal function
so when we call the internal function the external variable 'counter' (global)
increments */

function test() {
    var counter = 0;
    return function(x, y) {
        var response = {};
        response.counter = counter++;
        response.result = x + y;
        return (response);
    }
}
// an firts instance
var testClosure1 = test();
// second instances with diferent evironment
var testClosure2 = test();

console.log("results for testing 1 - 1 iteracion ", testClosure1(1, 3));
console.log("results for testing 1 - 2 iteraciones", testClosure1(3, 6));
console.log("results for testing 2 - 1 iteracion ", testClosure2(9, 7));
console.log("results for testing 2 - 2 iteraciones", testClosure2(2, 4));


/* ======================================================
        Closure     "Constrotion zones"        2.1
========================================================= */
console.log("\n 1) Closure 'Construction Zones' \n\n");
//
// var getSubmarineTicket = buildCoverTicketMaker('Submarine');
// var getAirplaneTicket = buildCoverTicketMaker('Airplane');
// var getBattleshipTicket = buildCoverTicketMaker('Battleship');
//
// getBattleshipTicket('Mario');
// getAirplaneTicket('Vincenzo');
// getSubmarineTicket('Adam');
//
// function buildCoverTicketMaker(transport){
//    return function(name){
//      console.log('Here is your transportation ticket via the '+ transport + '.\n' +
//      'welcome to the cold Clousures Cove, '+name +' !');
//    };
// }


/* ======================================================
        Closure     "Tracker on our fuctions"        2.2
========================================================= */
console.log("\n 2) Closure 'Tracker on our Functions' \n\n");

var getSubmarineTicket = buildCoverTicketMaker('Submarine');
var getRocketTicket = buildCoverTicketMaker('Rocket');

getSubmarineTicket('Vincenzo');
getSubmarineTicket('Adam');
getRocketTicket('Jhonny T');

function buildCoverTicketMaker(transport) {
    var passagerNumber = 0;
    return function(name) {
        passagerNumber++;
        console.log('Here is your transportation ticket via the ' + transport + '.\n' +
            'welcome to the cold Clousures Cove, ' + name + ' ! \n' +
            'your are the passager # ' + passagerNumber);
    };
}


/* ======================================================
        Closure     "Return Mistakes"        2.3
========================================================= */
console.log("\n 3) Closure 'Return Mistakes' \n\n");
var passagerArray = ['leia', 'boba', 'han', 'luke'];

assingTorpedo('luke', passagerArray)();

function assingTorpedo(name, passagerArray) {
    for (var i = 0; i < passagerArray.length; i++) {
        if (passagerArray[i] == name) {
            return function() {
                console.log('wow, ' + name + '! \n' +
                    'Man yor post at toprpedo #' + (i + 1) + "! \n");
            };
        }
    }
}
