function isTriangle(x, y, z) {
  var sideLengths = [x,y,z]

  if (sideLengths.includes(0)) {
    return false
  } else if (containsNegative(sideLengths)) {
    return false
  }
}

function containsNegative(numbers) {
  var firstNegative = numbers.find(function(num) { num < 0 })
  if (firstNegative === undefined) {
    return true
  } else {
    return false
  }
}

module.exports = isTriangle
