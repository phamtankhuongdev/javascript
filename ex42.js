const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");
const checking3Numbers = (a, b, c)=>{
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if ( a-b < 0 && b-c < 0) {
        console.log(`${a}, ${b}, ${c} is in strict mode`);
    } else {
        console.log(`${a}, ${b}, ${c} is in soft mode`);
    }
};
checking3Numbers(a, b, c);