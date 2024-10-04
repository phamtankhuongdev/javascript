import {createInterface} from 'node:readline';
import {stdin as input, stdout as output} from 'node:process';
 const rl = createInterface({input, output});
 rl.question('nhap nhiet do theo do C:',(a)=>{
    var f = (9/5)*a + 32;
    console.log(a+'\u00B0'+"C is "+f+'\u00B0'+"F");
    rl.question('nhap nhiet do theo do F: ',(b)=>{
        var c = (5/9)*(b-32);
        console.log(b+'\u00B0'+"F is "+c+'\u00B0'+"C");
        rl.close();
    });
 });