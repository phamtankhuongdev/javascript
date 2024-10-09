const prompt = require('prompt-sync')();
var a = prompt("Enter a random score: ");
var b = prompt("Is it a final exam : ");
function checkAPlus(score, is_exam) {
    if (is_exam ) {
        if (score >= 90 && score <= 100) {
            console.log("A+ score for final exam");
        } else {
            console.log("Not A+ score for final exam");
        }
    } else {
        if (score >= 89 && score <= 100) {
            console.log("A+ score");
        } else {
            console.log("Not A+ score");
        }
    }
}
checkAPlus(a, b);