function countNumbersBetween(array, lowerBound, upperBound) {
  var numbers = array.filter(function(number) {
    return lowerBound <= number && number <= upperBound
  })
  return numbers.length
}

module.exports = countNumbersBetween