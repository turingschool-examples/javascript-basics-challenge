var pry = require('pryjs')
function mean(arr) {
  var sum = arr.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return sum / arr.length;
};

module.exports = mean;
