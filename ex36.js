const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");
function checkLastDigit3(d, e, f)
{
    var g = d%10;
    var h = e%10;
    var i = f%10;
    if (g == h && h == i) {
        console.log(d+" and "+e+" and "+f+" have the same last digit");
    } else {
        console.log(d+" and "+e+" and "+f+" don't have the same last digit");
    }
}
checkLastDigit3(a, b, c);