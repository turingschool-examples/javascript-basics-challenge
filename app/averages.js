exports.total = function(array) {
  var numTotal = array.reduce(function(start, nextNum) {
     return start + nextNum;
  }, 0);
  return numTotal;
}

exports.mean = function(array) {
  var numTotal = array.reduce(function(start, nextNum) {
     return start + nextNum;
  }, 0);
  return numTotal / array.length;
}

exports.median = function(array) {
  var sortedArray = array.sort(function(a, b) {
    return a-b
  });
  var middleIndex = array.length / 2;
  if (array.length % 2) {
    var centerNum = (sortedArray[middleIndex] + sortedArray[middleIndex + 1]) / 2;
    return centerNum;
  }
  else {
    return sortedArray[middleIndex + 1];
  }
}







// total - returns the total of all the values in the array
// mean - returns the mean (average) of the array
// median - returns the median of the array
// mode- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency
