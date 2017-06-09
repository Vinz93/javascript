// ========= Callback Asyncronous ===========

function add(x, y, callback) {
    setTimeout(function() {
        callback(x + y);
    }, 100);
}

var startTime = Date.now();

add(5, 2, function(result) {
    add(3, result, function(result) {
        console.log(result);
        console.log("time : ", Date.now() - startTime);
    });
});

// ========= Promise ===========

function mult(x, y) {
    return setTimeout(function() {
        return x * y;
    }, 100);
}

//=== Promise chaining ===
var startTime = Date.now();

mult(5, 5)
    .then(function(result) {
        return mult(result, 2);
    })
    .then(function(result) {
        return mult(result, 7);
    })
    .then(function(result) {
        console.log("Promise result: ", result);
        console.log("time : ", Date.now() - startTime);
    });
