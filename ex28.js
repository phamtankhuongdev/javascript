const prompt = require('prompt-sync')();
var a = prompt("Enter a random number: ");
var b = prompt("Enter another random number: ");
function checkRange5099(c, d) {
    let e = (c >= 50 && c <= 99)?1:0;
    let f = (d >= 50 && d <= 99)?1:0;
    if (e==1 && f==1) {
        console.log(c+" and "+d+" are in range from 50 to 99");
    } else {
        console.log(c+" and "+d+" aren't in range from 50 to 99");
    }
}
checkRange5099(a, b);