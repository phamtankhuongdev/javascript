const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
function numberCloses100(c, d) {
    var e = (Math.abs(100-c)>Math.abs(100-d))?d:c;
    console.log(e+" is closed to 100");
}
numberCloses100(a, b);