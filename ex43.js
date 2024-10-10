const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");
const checking3Numbers = (a, b, c) =>{
    var d = ( a%10 == b%10 || b%10 == c%10 || a%10 == c%10)?`${a}, ${b}, ${c} has the same right most digit`:`${a}, ${b}, ${c} dosesn't have the same right most digit`;
    console.log(d);
};
let d = parseInt(a);
let e = parseInt(b);
let f = parseInt(c);
checking3Numbers(d, e, f);