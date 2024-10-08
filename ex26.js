const prompt = require('prompt-sync')();
var a = prompt("Enter a give string:");
function createString(b)
{
    return b.at(-3)+b.at(-2)+b.at(-1)+b+b.at(-3)+b.at(-2)+b.at(-1);
}
console.log(createString(a));