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

exports.mode = function(array) {
  var sortedArray = array.sort(function(a, b) {
    return a-b
  });
  var freqArray = []
  for (var i = 0; i < sortedArray.length; i++) {
    if (i === 0) {
      var count = 1;
      freqArray.push(count);
    }
    else if (sortedArray[i] === sortedArray[i-1]) {
      count += 1;
      freqArray.push(count);
    }
    else {
      count = 1;
      freqArray.push(count);
    }
  };

  var stupidNum = Math.max(...freqArray)
  var indexPos = 0

  for (var i = 0; i < freqArray.length; i++) {
    if (freqArray[i] === stupidNum) {
      var indexPos = i
    }
  }

  return array[indexPos]

}
