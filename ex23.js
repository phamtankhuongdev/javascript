const prompt = require('prompt-sync')();
var a = prompt("Enter a string:");
function newString(params) {
    var c = params.charAt(0);
    var b = params.replace(c,params.charAt(params.length - 1));
    var d = b.replace(/.$/,c);
    return d;
}
console.log(newString(a));