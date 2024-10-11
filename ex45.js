const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
const check2numbers = (a, b) => {
    if (a == 15) {
        console.log(true);
    } else {
        if (b == 15) {
            console.log(true); 
        } else {
            if (Math.abs(a - b) == 15) {
                console.log(true);
            }
            else{
                console.log((a+b == 15)?true:false);
            }
        }
    }
};
let c = parseInt(a);
let d = parseInt(b);
check2numbers(c, d);