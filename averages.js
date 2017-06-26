var pry = require('pryjs');

Array.prototype.total = function () {
  var total = 0;

  for(i = 0; i < this.length; i++ ) {
    var total = total + this[i]
  }
  return total;
};

Array.prototype.mean = function () {
  return (this.total() / this.length);
};

Array.prototype.median = function () {
  var sorted = this.sort(function (a, b) {
    return a - b
  });
  var length = this.length;

  if(length % 2 === 0) {
    return (sorted[length/2] + (sorted[length/2 - 1])) / 2
  } else {
    return sorted[Math.floor(length/2)]
  }
};

Array.prototype.mode = function() {
  var obj = {}
  for(i = 0; i < this.length; i++) {
    obj[this[i]] = (obj[this[i]] || 0) + 1
  };
  // eval(pry.it)
  return obj;
};

module.exports = Array
