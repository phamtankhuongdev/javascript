const prompt = require('prompt-sync')();
var a = prompt("Enter a string: ");
let e = a.length;
let f = a.slice(1,e);
if (a[0].toUpperCase() && f.toLowerCase()) {
    console.log(a);
} else {
    let i = 0;
    let b = "";
    while ( i <= a.length - 1) {
        if (i > 0) {
            b += (a[i].toLowerCase());
        } else {
            b += (a[i].toUpperCase());
        }
        i++;
    }
    console.log(b);
    
}