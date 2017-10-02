var pry = require('pryjs');

function mean(array) {
  let sum = 0;
  if (array.length === 0) {
    return null;
  } else {
    for (var i = 0; i <= array.length -1; i++) {
      sum = array[i] + sum
    }
    return sum/array.length
  }
}

module.exports = mean
