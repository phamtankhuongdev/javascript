const prompt = require('prompt-sync')();
var a = prompt("Enter the first number:");
var b = prompt("Enter the second number:");
function checkPN(params,parims) {
    let a =(params>0)?1:0;
    let b =(parims<0)?1:0;
    if (a == 1 && b ==1 || a==0 && b==0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkPN(a, b));