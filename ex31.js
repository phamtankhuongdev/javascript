const prompt = require('prompt-sync')();
let array = [];
for (let i = 0; i < 3; i++) {
    var a = prompt("Enter a["+i+"]: ");
    array[i] = a;
}
var max = array[0];
array.forEach((b)=>{
    if(b > max)
    {
        max = b;
    }
})
console.log(max);