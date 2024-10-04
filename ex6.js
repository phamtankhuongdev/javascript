// node js readline
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

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