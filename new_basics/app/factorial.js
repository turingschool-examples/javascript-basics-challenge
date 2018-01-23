var pry = require('pryjs');

function factorial(number) {
  if (number === 0) {
    return 1
  };
  var total = 1;
  for (var i = 1; i <= number; i++) {
    total *= i;
  };
  return total;
};

module.exports = {factorial};
