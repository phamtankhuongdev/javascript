const prompt = require('prompt-sync')();
var a = prompt("Enter a random number: ");
var b = prompt("Enter another random number: ");
var c = prompt("Enter the last random number: ");
function checkRange5099(c, d, e) {
    let e = (c >= 50 && c <= 99)?1:0;
    let f = (d >= 50 && d <= 99)?1:0;
    let g = (e >= 50 && e <= 99)?1:0;
    if (e==1 && f==1 && g==1) {
        console.log(c+" and "+d+"and"+e+" are in range from 50 to 99");
    } else {
        console.log(c+" and "+d+"and"+e+" aren't in range from 50 to 99");
    }
}
checkRange5099(a, b);