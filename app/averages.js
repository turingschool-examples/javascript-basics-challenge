exports.totalAverage = function(array) {
  var newArray = array.reduce(function(total,start) {
    return total + start;
  }, 0);
  return newArray;
};

exports.meanAverage = function(array) {
  var newArray = array.reduce(function(total,start) {
    return total + start;
  }, 0);
  return newArray / array.length;
};

exports.medianAverage = function(array) {
  var index1 = (array.length / 2) - 1;
  var index2 = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return (array[index1] + array[index1 + 1]) / 2;
  }
  else {
    return array[index2];
  }
};

exports.modeAverage = function(array) {
  var newHash = {}

  for (i = 0; i < array.length; i++) {
    if (newHash[array[i]]) {
      newHash[array[i]] = value + 1
    }
    else {
      emptyHash[array[i]] = 1
    }
  }
  return newHash
  // find the max value of the given properties in the hash
};
