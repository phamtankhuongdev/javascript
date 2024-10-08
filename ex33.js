const prompt = require('prompt-sync')();
var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");
function checkTwoNumbersInRange(c, d) {
    var e = (c >= 40 && c <=60)?1:0;
    var f = (d >= 40 && d <=60)?1:0;
    var g = (c >=70 && c <= 100)?1:0;
    var h = (d >=70 && d <= 100)?1:0;
    if (e == 1 && f == 1) {
        console.log(c+" and "+d+" are in range from 40 to 60");
    } else {
        if (g == 1 && h == 1) {
            console.log(c+" and "+d+" are in range from 70 to 100");
        } else {
            console.log(c+" and "+d+" aren't in range[40..60] or [70..100]");
        }
    }
}
checkTwoNumbersInRange(a, b);