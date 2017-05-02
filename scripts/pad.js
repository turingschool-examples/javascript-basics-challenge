var pry = require('pryjs');

Array.prototype.pad = function(value, arg) {
  if (value == 0 || value <= this.length ) {
    var newArray = this
    return newArray
  }
  var toPad = value - this.length
    for (var i = 0; i < toPad; i++) {
      if (arg == undefined) {
        this.push(null)
      } else {
        this.push(arg)
      };
    };
    return this
};
