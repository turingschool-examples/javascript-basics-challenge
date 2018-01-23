function total(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0)
}

function mean(arr) {
  var numElements = arr.length;
  var sum = total(arr);
  return sum / numElements;
}

function median(arr) {
  var numElements = arr.length;
  var sorted = arr.sort((a, b) => a - b);
  if (numElements % 2 === 1) {
    return sorted[(numElements - 1) / 2];
  } else {
    var middleTwo = sorted.splice((numElements / 2) - 1, 2);
    return mean(middleTwo);
  }
}

function mode(arr) {
  var countResults = {}
  arr.forEach(function(num) {
    if (countResults[num]) {
      countResults[num]+= 1;
    } else {
      countResults[num] = 1;
    }
  })

  var frequencies = Object.values(countResults);
  var maxFrequency = Math.max(...frequencies)

  Object.keys(countResults).forEach(function(key) {
    if (countResults[key] !== maxFrequency) {
      delete countResults[key];
    }
  });

  return countResults;
}

module.exports = {
  total,
  mean,
  median,
  mode
}
