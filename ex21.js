const prompt = require('prompt-sync')();
var a = prompt("Enter a string:");
function checkString(params) {
    if (params.startsWith("Py")) {
        return params;
    } else {
        return "Py"+ params;
    }
}
console.log(checkString(a));