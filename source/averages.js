pry = require('pryjs')

function total(array) {
  return array.reduce((sum, num) => sum + num)
}

function mean(array) {
  return (total(array) / array.length)
}

module.exports = {
  total,
  mean
}

// total - returns the total of all the values in the array
// mean - returns the mean (average) of the array
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property
//       being the mode and the value being the frequency
