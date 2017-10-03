var pry = require('pryjs');

function median(array) {
  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return array;
  } else if (array.length === 2) {
    let sum = array[0] + array[1]
    return sum/2;
  } else {
    let sorted = bubbleSort(array);
    if ((sorted.length % 2) === 1) {
      let midpoint = Math.floor(sorted.length/2)
      return sorted[midpoint];
    } else {
      let midpoint   = sorted.length/2
      let lowerBound = sorted[midpoint -1]
      let upperBound = sorted[midpoint]
      let toDivide = lowerBound + upperBound
      return toDivide/2
    }
  }
}

function bubbleSort(array) {
  let arrLength = array.length
  do {
    for (var i = 0; i < arrLength - 1; i++) {
      if (array[i] > array[i+1]) {
        let toSwap = array[i];
        array[i] = array[i+1];
        array[i+1] = toSwap;
        swapped = true
      }
    }
  } while(arrLength--);
  return array;
};

module.exports = median
