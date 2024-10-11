const prompt = require('prompt-sync')();
var a = prompt("Enter a number:");
const checkrange401000 = (a) => {
    console.log((a >= 40 && a <= 1000)?true:false);
};
let b = parseInt(a);
checkrange401000(b);