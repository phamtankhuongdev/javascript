const prompt = require('prompt-sync')();
var a = prompt("Enter a number: ");
function divide5OrSeven(b) {
    if (b % 3 == 0) {
        return 1;
    } else {
        if (b % 7 == 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
if (divide5OrSeven(a)) {
    console.log(a+" can divide 3 or 7");
} else {
    console.log(a+" cann't divide 3 or 7");
}