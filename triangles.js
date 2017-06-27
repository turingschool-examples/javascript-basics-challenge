var pry = require('pryjs')

function isTriangle(a, b, c) {
  var isValid = a <= b || b <= c || c <= a
  var lengthsWork = (a + b > c) && (b + c > a) && (c + a > b)

  return isValid && lengthsWork
}

module.exports = {isTriangle}
