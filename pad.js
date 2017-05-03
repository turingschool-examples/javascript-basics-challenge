pry = require('pryjs')

var pad = Array.prototype.pad = function(min, pad) {
  var array = this;

  if (array.length <= min) {
    return array
  } else {
    array.fill(pad)
  }
}

exports.pad = pad;