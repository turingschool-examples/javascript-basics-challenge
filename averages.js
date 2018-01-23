var total = function(arr) {
  return arr.reduce((a, b) => a + b, 0)
}

var mean = function(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length
}

var median = function(arr) {
  while (arr.length > 2) {
    arr.shift();
    arr.pop();
  }
  return mean(arr)
}

var mode = function(arr) {
  resultObject = {}
  arr.forEach(function(element) {
    if (resultObject[element]) {
      resultObject[element] += 1;
    } else {
      resultObject[element] = 1;
    }
  });
  return resultObject
}

module.exports = { total: total, mean: mean, median: median, mode: mode }
