const prompt = require('prompt-sync')();
var a = prompt("Enter a given string:");
var b = prompt("Enter an index of string you want to replace:");
function modifyString(params, index) {
    return params.replace(params[index],"");
}
console.log(modifyString(a,b));