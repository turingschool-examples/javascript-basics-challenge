function total(arr) {
  return arr.reduce(function(a, b) { return a + b; }, 0);
}

function mean(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function median(arr) {
  sorted = arr.sort(function(a, b) {
    return a - b;
  });
  var half = Math.floor((sorted.length - 1) / 2);
  if((sorted.length % 2) === 0) {
    return (sorted[half + 1] + sorted[half]) / 2.0;
  } else {
    return sorted[half];
  }
}

function mode(arr) {
  mapping = {};
  for(var i = 0; i < arr.length; i++) {
    mapping[arr[i]] = (mapping[arr[i]] || 0) + 1;
  }
  mode = Object.keys(mapping).reduce(function(a, b) {
    return mapping[a] > mapping[b] ? a : b;
  });
  output = {};
  output[mode] = mapping[mode];
  return output;
}


module.exports = {
  total: total,
  mean: mean,
  median: median,
  mode: mode
};

// 3. Averages

// Write a function for each of the following. Each function will take an Array as the one argument..

//     total - returns the total of all the values in the array
//     mean - returns the mean (average) of the array
//     median - returns the median of the array
//     mode- returns an object representing the mode(s) of the array with the property being the mode and the value being the frequency

// Don't forget to write tests for each function!