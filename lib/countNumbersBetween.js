function countNumbersBetween(arr, lower, upper) {
  var count = 0
  arr.forEach(function(num) {
    if (num >= lower && num <= upper) {
      count += 1
    }
  })
  return count
}

module.exports = {
  countNumbersBetween
}
