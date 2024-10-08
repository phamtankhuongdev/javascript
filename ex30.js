const prompt = require('prompt-sync')();
var a = prompt("Enter a random string: ");
function checkScript4(b) {
    if (b.indexOf("Script") == 4) {
        console.log(b.slice(0, 4));
    } else {
        console.log(b);
    }
}
checkScript4(a);