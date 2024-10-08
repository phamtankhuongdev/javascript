const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
function checkRange(c, d) {
    let e = (c >= 40 && c <= 60)?1:0;
    let f = (d >= 40 && d <= 60)?1:0;
    if (e==1 && f==1) {
        console.log((c > d)?c+" is the largest number":d+" is the largest number");
    } else {
        console.log("Your numbers don't fit the range");
    }
}
checkRange(a, b);