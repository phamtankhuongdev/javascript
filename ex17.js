import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const rl = createInterface({input,output});
rl.question('Enter a random number:',(a)=>{
    let b = (a<=19)?Math.abs(a-19):3*Math.abs(19-a);
    console.log(b);
    rl.close();
})