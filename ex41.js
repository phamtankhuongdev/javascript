const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");
const check3Number = (a, b, c) => {
    if (a == b && b == c) {
        console.log(30);
    } else {
        console.log(( a==b || a==c || b== c)?40:20);
    }
}
check3Number(a, b, c);