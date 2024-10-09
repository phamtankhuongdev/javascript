const prompt = require('prompt-sync')();
var a = prompt("Enter a random string: ");
function transformString(b) {
    if (b.length >= 3) {
        return b[0].toLowerCase() + b[1].toLowerCase() + b[2].toLowerCase() + b.slice(3);
    } else {
       return b.toUpperCase();
    }
}
console.log(transformString(a));