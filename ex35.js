const prompt = require('prompt-sync')();
var a = prompt("Enter a random string: ");
var b = prompt("Enter a character: ");
function checkCharacterString(c, d) {
    var e = (c == d.at(1))?1:0;
    var f = (c == d.at(2))?1:0;
    var g = (c == d.at(3))?1:0;
    if (e == 1 || f==1 || g==1) {
        console.log(c+" exists between 2nd to 4nd position in "+d);
    } else {
        console.log(c+" doesn't exist between 2nd to 4nd position in "+d);
    }
}
checkCharacterString(b, a);