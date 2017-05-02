
var total = Array.prototype.total = function() {
  var array = this;
  array.reduce(function (a, b) {
    return a + b;
  }, 0)
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

exports.total = total;
exports.mean = mean;
