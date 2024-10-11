const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
const check2numbers = (a, b) => {
    if (a % 7 == 0 && a % 11 == 0) {
        console.log(true);
    } else {
        console.log((b % 7 == 0 && b % 11 == 0)?true:false);
    }
};
let c = parseInt(a);
let d = parseInt(b);
check2numbers(c, d);