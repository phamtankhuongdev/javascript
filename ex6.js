// node js readline
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Please enter a year: ', (answer) => {
  // TODO: Log the answer in a database
  var b = parseInt(answer);
  if (b % 400 == 0)
  {
      console.log(b+" is a leap year");
  }else
  {
      if (b % 4 == 0 && b % 100 != 0) {
          console.log(b+" is a leap year");
      }
      console.log(b+" is not a leap year");
  }

  rl.close();
});