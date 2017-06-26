var pry = require('pryjs');

function countNumbersBetween(arr, lower, upper) {
  var total = 0

  arr.forEach(function(element) {
    // eval(pry.it)
    if(lower <= element && element <= upper) {
      total++
    }
  })
  return total;
}

module.exports = countNumbersBetween
