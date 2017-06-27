/*jshint esversion: 6 */

Array.prototype.total = function() {
  var sum = 0;

  for(var i = 0; i < this.length; i++) {
    sum += this[i];
  }

  return sum;
};

Array.prototype.mean = function() {
  return this.total() / this.length;
};

Array.prototype.median = function() {
  var sortedList = this.sort(function(a, b) {
    return a - b;
  });

  if(this.length % 2 !== 0) {
    var oddPosition = Math.floor(this.length / 2);
    return sortedList[oddPosition];
  } else {
    var evenPosition = this.length / 2;
    return (sortedList[evenPosition] + sortedList[evenPosition - 1]) / 2;
  }
};

Array.prototype.mode = function() {
  var list = this.sort(function(a, b) {
    return a - b;
  });

  var result = {};
  var count = 1;
  var modes = [];

  for(var i = 0; i < this.length; i++) {
    var num = list[i];

    if(result[num] == null) {
      result[num] = 1;
    } else {
      result[num]++;
    }

    if(result[num] > count) {
      modes = [num];
      count = result[num];
    } else if(result[num] === count) {
      modes.push(num);
      count = result[num];
    }
  }

  var finalResult = {};

  modes.forEach(function(mode) {
    finalResult[mode] = count;
  });

  return finalResult;
};
