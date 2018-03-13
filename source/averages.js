pry = require('pryjs')

function isOdd(num) {
   return (num % 2 === 1) ? true : false
}

function total(array) {
  return array.reduce((sum, num) => sum + num)
}

function mean(array) {
  return (total(array) / array.length)
}

function median(array) {
  array = array.sort((a, b) => a - b);
  var middleIndex = (Math.ceil(array.length / 2)) - 1
  if (isOdd(array.length)) {
    return array[middleIndex]
  } else {
    return mean([array[middleIndex], array[middleIndex + 1]])
  }
}

// function mode(array) {
//   var counts = {};
//   for (var i = 0; i < array.length; i++) {
//     var num = array[i];
//     counts[num] = counts[num] ? counts[num] + 1 : 1;
//   }
//
// }

module.exports = {
  total,
  mean,
  median
}

// total - returns the total of all the values in the array
// mean - returns the mean (average) of the array
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property
//       being the mode and the value being the frequency
