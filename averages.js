// total from array
function getSum(total, num) {
  return total + num;
}

function getTotal(array) {
  return array.reduce(getSum);
}

// mean from an array

function calculateAverage(array) {
  return (array.reduce(getSum) / array.length);
}

// median from an array

function getMedian(array) {
  var median = 0, size = array.length
  array.sort();
  if(array.length % 2 === 0) {
    median = (array[(size / 2) - 1] + array[size / 2]) / 2;
  }
  else {
    median = array[(size - 1) / 2];
  }
  return median
}




module.exports = { calculateAverage:calculateAverage, getTotal:getTotal, getMedian:getMedian }
