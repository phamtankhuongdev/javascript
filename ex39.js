const prompt = require('prompt-sync')();
var a = prompt("Enter the first number : ");
var b = prompt("Enter the second number : ");
const returnSum = (c, d) => {
    const e = parseInt(c) + parseInt(d);
    let f = (e >= 50)?1:0;
    let g = (e <= 80)?1:0;
    return ((f == 1) && (g == 1))?65:80;
}
console.log(returnSum(a, b));