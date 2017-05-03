pry = require('pryjs')

var total = Array.prototype.total = function() {
  var array = this;
  var total = array.reduce(function (a, b) {
    return a + b;
  }, 0)
  return total
}

var mean = Array.prototype.mean = function() {
  var array = this;
  length = array.length
  sum = array.reduce(function (a, b) {
    return a + b;
  }, 0)
  return sum / length
}

var median = Array.prototype.median = function() {
  var array = this;
  var sorted = array.sort(function(a,b) {
    return a - b;
  });
  var length = array.length
  var medianIndex = Math.floor(length / 2)
  return sorted[medianIndex]
}

var mode = Array.prototype.mode = function() {
  var array = this;
  var occurances = {};
  var max = 0;
  var final;

  array.forEach( function(e) {
      if (occurances[e]) {
        occurances[e]++
      } else {
        occurances[e] = 1
      }

      if (occurances[e] > max) {
        max = occurances[e];
        final = max;
      }
    });
  return final;
}

exports.total = total;
exports.mean = mean;
exports.median = median;
exports.mode = mode;
