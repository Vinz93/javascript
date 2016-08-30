// ES6 allows to use default values
function gettings(name = "vinz", msg = "hello, ") {
  console.log(msg + name);
}
 gettings();
 //hello, vinz
 gettings("Bill","Fuck You! ");
 //Fuck You! Bill

// function default
 function recive(complete = () => console.log("complete")) {
   complete();
 }
recive();

recive(() => console.log("hey i like ES6"));
