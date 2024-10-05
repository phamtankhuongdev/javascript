import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const rl = createInterface({input,output});
rl.question('Enter a random number:',(a)=>{
    let b = (a<=13)?13-a:2*Math.abs(13-a);
    console.log(b);
    rl.close();
})