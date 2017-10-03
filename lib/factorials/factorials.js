const pry = require('pryjs');

function factorial(number) {
  var factorialNumbers = [];
  var n = number;
  while(n > 0) {
    factorialNumbers.push(n);
    n --;
  };
  return factorialNumbers.reduce((sum, value) => sum * value);
};
module.exports = factorial;
