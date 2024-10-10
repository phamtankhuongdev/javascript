const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");
const checking3Numbers = (a, b, c) => {
    var d;
    if (a > 20) {
        d = (b > a || c>a)?`Your numbers meet our requirement`:`Your numbers don't meet our requirement`;
    } else {
        if (b > 20) {
        d = (a > b || c > b)?`Your numbers meet our requirement`:`Your numbers don't meet our requirement`;
        } else {
            if (c > 20) {
                d = (a > c || b > c)?`Your numbers meet our requirement`:`Your numbers don't meet our requirement`;
            } else {
                d = `Your numbers don't meet our requirement`;
            }
        }
    }
    console.log(d);
};
let e = parseInt(a);
let f = parseInt(b);
let g = parseInt(c);
checking3Numbers(e, f, g);