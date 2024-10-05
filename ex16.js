import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const rl = createInterface({input,output});
rl.question('Enter 1st number:',(a)=>{
    rl.question('Enter 2nd number:',(b)=>{
        let c = (a==b)?3*a:parseInt(a)+parseInt(b);
        console.log(c);
        rl.close();
    })
})