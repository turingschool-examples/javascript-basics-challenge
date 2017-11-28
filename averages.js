var pry = require('pryjs');

function total(numbers){
  var sum = numbers.reduce(function(total, number){
    return total + number;
  }, 0);
  return sum;
}

function mean(numbers){
  var sum = numbers.reduce(function(total, number){
    return total + number;
  }, 0);
  average = sum/numbers.length;
  return average;
}

function median(numbers){
  var sorted = numbers.sort(function(a,b){
    return a - b;
  });
  var middle = (sorted.length/2)
  if (sorted.length % 2 == 0) {
    var medianA = sorted[middle];
    var medianB = sorted[middle -1];
    return ((medianA + medianB)/2);
  } else {
    return sorted[middle - .5];
  }
}

function mode(numbers){
  var modes = [];
  var count = [];
  var number;
  var i;
  var maxIndex = 0;

  for (var i = 0; i < numbers.length; i++) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for(i in count) if (count.hasOwnProperty(i)) {
    if (count[i] === maxIndex) {
      modes.push(Number(i));
    }
  }
  var modeReturn = {};
  modes.forEach(function(number){
    modeReturn[number] = count[number]
  });
  return modeReturn;
}

module.exports = {total: total, mean: mean, median: median, mode: mode}
