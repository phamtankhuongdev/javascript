const prompt = require('prompt-sync')();
var a = prompt("Enter the first number : ");
var b = prompt("Enter the second number : ");
const check2NumbersCondition = (a, b) =>{
    if (a == 8 || b == 8) {
        console.log("One of your numbers are 8");
    } else {
        if ((Math.abs(parseInt(a) - parseInt(b)) || Math.abs(parseInt(b) - parseInt(a))) == 8) {
            console.log("your difference are 8");
        } else
        {
            var c = (parseInt(a) + parseInt(b) == 8)?"Your sum is eight":" Your number don't meet our require";
            console.log(c);
        }
    }
}
check2NumbersCondition(a, b);