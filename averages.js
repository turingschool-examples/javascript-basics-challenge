function total(array) {
  return array.reduce( function(subtotal, num) {
    subtotal += num
    return subtotal
  }, 0)
}

function mean(array) {
  return total(array) / array.length
}

function median(array) {
  array.sort(function(a,b) { return a-b })
  count = array.length / 2
  var medianIndex = Math.floor(count)

  if (Number.isInteger(count)) {
    return mean([array[medianIndex - 1], array[medianIndex]])
  } else {
    return array[medianIndex]
  }
}
// pry = require('pryjs')
// eval(pry.it)

module.exports = {
  total,
  mean,
  median
}
