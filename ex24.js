const prompt = require('prompt-sync')();
var a = prompt("Enter a give string:");
function createString(b)
{
    return b.charAt(0)+b+b.charAt(0);
}
console.log(createString(a));