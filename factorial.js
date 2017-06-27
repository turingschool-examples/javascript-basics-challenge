var pry = require('pryjs');

function factorial(n) {
  var total = 1;
  for(i = n; i > 1; i--) {
    total *= i;
  }
  return total;
}

module.exports = factorial
