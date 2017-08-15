function total(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function mean(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    var mean = (total += arr[i]) / arr.length;
  }
  return mean;
}

function median(arr) {
  arr.sort( function(a, b) {
    return a - b;
  });

  var half = Math.floor(arr.length / 2);

  if(arr.length % 2 === 0) {
    return arr[half];
  } else {
    return (arr[half - 1] + arr[half]) / 2.0;
  }
}

function mode(arr) {
  var mostFreq = 1;
  var count = 0;
  var element;
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (mostFreq < count) {
        mostFreq = count;
        element = arr[i];
      }
    }
    count = 0;
  }
  result[mostFreq[0]] = count[mostFreq[0]];
  return result;
}

module.exports = {total, mean, median, mode}
