var pry = require('pryjs');

function total(array) {
  var sum = array.reduce(function (total, number) {
    return total + number;
  }, 0);
return sum
};

function mean(array) {
  var total = array.reduce(function (total, number) {
    return total + number;
  }, 0);
  var length = array.length
  return total / length
};

function median(array) {
  var m = array.sort()

  var middle = Math.floor((m.length - 1) / 2);
   if (m.length % 2) {
            return m[middle];
   } else {
       return (m[middle] + m[middle + 1]) / 2.0;
    }
};

function mode(arr) {
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    });
    return mode;
};

module.exports = {total, mean, median, mode};
