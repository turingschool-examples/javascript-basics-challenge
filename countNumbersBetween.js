function countNumbersBetween(arr, lower, upper) {
  count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] >= lower && arr[i] <= upper) {
      count++;
    }
  }
  return count;
}

module.exports = countNumbersBetween
