var pry = require('pryjs');

function factorial(number){
  var total = 1;
  for (var i = 0; i < number; i++) {
    total = total * (i+1);
  }
  return total;
}

module.exports = factorial;
