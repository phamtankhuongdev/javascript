const prompt = require('prompt-sync')();
var a = prompt("Enter a string: ");
const loopReverse = (a) =>{
    let b = "";
    let i = a.length - 1;
    while (i >= 0) {
        let c = a[i];
        b += c;
        i--;
    }
    console.log(b);
};
loopReverse(a);