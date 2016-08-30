
var stdout = process.stdout;
function main(N,a) {
    var n = parseInt(N);
    arr = a.split(' ');
    arr.reverse();
    var res = "";
    arr = arr.map(function (i) {
      res += i + " ";
    });
    stdout.write(res);
}

main("4","1 2 3 4");
