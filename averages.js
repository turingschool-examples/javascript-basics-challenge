
Array.prototype.sum = function() {
  var total = 0;
  for (var i = 0; i < this.length; i++) {
    total += this[i];
  }
  return total;
};

Array.prototype.mean = function() {
  var mean = (this.sum() / this.length);
  return mean;
};

Array.prototype.median = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  if(this.length % 2 == 0) {
    return this[this.length/2];
  }
  else
    var first = this[this.length / 2 + 0.5]
    var second = this[this.length / 2 - 0.5]
    var median = (first + second) / 2
  // var pry = require('pryjs');
  // eval(pry.it);
    return median;
}



module.extends = Array
