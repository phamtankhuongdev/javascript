const prompt = require('prompt-sync')();
var a = prompt("Enter a random string: ");
function checkStartsWithJava(b) {
    if (b.startsWith("Java")) {
        console.log(b+" starts with Java");
    } else {
        console.log(b+" doesn't start with Java");
    }
}
checkStartsWithJava(a);