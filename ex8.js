const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input,output});
rl.question('Please guest a number from 1 to 10: ',(answer)=>{
    if (answer == (Math.floor(Math.random * 10)+1)) {
        console.log("Good Work");
    } else
        console.log("not matched");
    rl.close();
})