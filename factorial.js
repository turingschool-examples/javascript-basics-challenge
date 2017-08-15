var pry = require('pryjs');

function factorial(num) {
  if (num === 0) {
    return 1
  } else {
    var values = [...Array(num + 1).keys()];
    values.splice(0, 1);
    return values.reduce(function(sum, value) {
      return sum * value;
    });
  }
}

module.exports = factorial