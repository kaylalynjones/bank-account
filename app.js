
var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var sum = 0;
var dif = 0;
var debt;
var Sbalance = 1000;
var Nbalance;
var deposit = [];
var withdrawn = [];

var response =prompt('Would you like to Deposit(d), Withdraw(w), Quit(q)');

while (response != 'q') {
 var amount =prompt('How much?(00.00)');
 amount = parseFloat(amount);
  if(response === 'd'){
    deposit.push(amount);
  } else if(response === 'w') {
    withdrawn.push(amount);
  }
  var response = prompt('Would you like to Deposit(d), Withdraw(w), Quit(q)');
}

for(var d = 0; d < deposit.length; d++){
      sum += deposit[d];
}
for(var w = 0; w < withdrawn.length; w++){
      dif += withdrawn[w];
}

//if(response === 'q'){
//  console.log('See you next time');
//}

var Nbalance = Sbalance + sum - dif;
Nbalance = Nbalance.toFixed(2);

if(Nbalance < 0){
  debt = Nbalance - 50;
  console.log(chalk.red('You have overdrawn, We charged a fee of: 50.00.'));
  console.log('Starting Balance is: ' + Sbalance);
  console.log(chalk.green('Deposits: '+ deposit.join(" ") +' = ' + sum));
  console.log(chalk.red('Withdrawn: '+ withdrawn.join(" ") + ' = ' + dif));
  console.log(chalk.red('Ending Balance: ' + debt));
} else {
  console.log('Starting Balance is: ' + Sbalance);
  console.log(chalk.green('Deposits: '+ deposit.join(" ") +' = ' + sum));
  console.log(chalk.red('Withdrawn: '+ withdrawn.join(" ") + ' = ' + dif));
  console.log(chalk.cyan('Ending Balance: ' + Nbalance));
}

