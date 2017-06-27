function countNumbersBetween(array, lBound, uBound) {
  var count = 0
  for(var i = 0; i < array.length; i++) {
    if (array[i] >= lBound &&  array[i] <= uBound) {
      count++
    }
  }
  return count
}
module.exports = countNumbersBetween;
