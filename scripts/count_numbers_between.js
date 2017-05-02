var pry = require('pryjs');

function countNumbersBetween(array, lower, upper){
  var count = 0
  array.forEach (function(integer) {
    if (integer >= lower && integer <= upper) {
      count += 1
    }
  });
  return count
};

module.exports = {countNumbersBetween};
