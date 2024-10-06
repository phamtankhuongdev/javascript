import { createInterface } from 'node:readline';
import { stdin as input, stdout as output} from 'node:process';
const rl = createInterface({input,output});
rl.question('Enter a first number:',(a)=>{
    let b = (a==50)?true:false;
    rl.question('Enter a second number:',(c)=>{
        console.log("Checking a pair number");
        if (b==false) {
            let d = (c==50)?true:false;
            if (d == false) {
                if (c + a == 50) {
                    console.log("true");
                }else
                {
                    console.log("false");
                }
            } else {
                console.log("true");
            }
        } else {
            console.log("true");
        }
        rl.close();
    });
});