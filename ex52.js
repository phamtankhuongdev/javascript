const text = "w3resource";
let i = 0;
let j = text.length - 1;
let b = text;
let n = 10;
while (n > 0 ) {
    let c = b.charAt(j);
    b = b.slice(i, j);
    b = c + b;
    console.log(b);
    n -= 1;
}