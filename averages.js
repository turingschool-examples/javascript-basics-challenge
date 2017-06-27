
Array.prototype.sum = function() {
  var total = 0;
  for (var i = 0; i < this.length; i++) {
    total += this[i];
  }
  return total;
};

Array.prototype.mean = function() {
  var mean = Math.round((this.sum() / this.length) * 100) / 100;
  return mean;
};

Array.prototype.median = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  if(this.length % 2 === 0) {
    return this[this.length/2];
  }
  else
    var first = this[this.length / 2 + 0.5];
    var second = this[this.length / 2 - 0.5];
    var median = (first + second) / 2;
    return median;
};

Array.prototype.mode = function() {
  var mode = [];
  var max = 0;
  var counter = {};
  for(var i in this) {
    counter[this[i]] = (counter[this[i]] || 0) + 1;
    if(counter[this[i]] > max) {
      max = counter[this[i]];
      mode = {
        [this[i]]: counter[this[i]]
      }
      // var pry = require('pryjs');
      // eval(pry.it);
    }
  }
  return mode;
};

module.extends = Array
