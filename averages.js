var pry = require('pryjs');

function total(array) {
  var sum = 0
  array.forEach(function(num) {
    sum += num;
  })
  return sum;
}

function mean(array) {
  return total(array)/array.length;
}

function median(array) {
  var sorted = array.sort()
  if (sorted.length % 2 != 0 ) {
    var index = (sorted.length/2) - .5
    return sorted[index];
  } else {
    var indexes = new Array((sorted.length/2) - .5, (sorted.length/2) + .5)
    return mean(indexes);
  }
}

function mode(array) {
  var modeCounts = new Object()
  array.forEach(function (num) {
      if (num in modeCounts) {
          modeCounts[num] += 1;
      } else {
          modeCounts[num] = 1;
      }
  });
  return modeCounts;
}

module.exports = {total, mean, median, mode}
