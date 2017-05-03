pry = require('pryjs')

var pad = Array.prototype.pad = function(num, pad) {
  var array = this;
  var length = array.length

  if (num == 0) {
    return array
  } else if (length <= num) {
    return array
  }
    else {
    array.(pad, num, num.length)
  }
}

exports.pad = pad;