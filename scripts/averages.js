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

function median(data) {
  // eval(pry.it);
  var m = data.sort()

  var middle = Math.floor((m.length - 1) / 2);
   if (m.length % 2) {
            return m[middle];
   } else {
       return (m[middle] + m[middle + 1]) / 2.0;
    }
};
module.exports = {total, mean, median};
