const prompt = require('prompt-sync')();
var a = prompt("Enter a string: ");
let b = "";
for (let i = 0; i < a.length; i++) {
    let c = a[i].charCodeAt(0);
    b += String.fromCharCode(c + 1);
}
console.log(b);