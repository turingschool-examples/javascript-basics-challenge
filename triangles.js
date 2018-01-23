function isTriangle(x, y, z) {
  let sideLengths = [x,y,z]

  if (containsNonPositive(sideLengths)) {
    return false
  } else if (legalLengths(x,y,z)) {
    return true
  } else {
    return false
  }
}

function containsNonPositive(numbers) {
  let illegalLength = numbers.find(function(num) { return num <= 0 })

  return isEmpty(illegalLength)
}

function legalLengths(x,y,z) {
  let total = x + y + z
  illegalLength = [x,y,z].find(function(num) { return (total - (2 * num)) <= 0 })

  return !(isEmpty(illegalLength))
}

function isEmpty(value) {
  if (value === undefined) {
    return false
  } else {
    return true
  }
}

module.exports = isTriangle
