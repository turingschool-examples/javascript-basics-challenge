exports.countNumbersBetween = function(array,low,high) {
  var numCount = 0

  for (var i = 0; i < array.length; i++) {
    if (array[i] >= low && array[i] <= high) {
      numCount += 1
    }
  }
  return numCount;
}
