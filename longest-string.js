function longestString(arr) {
  var strLength = 0;
  var longest;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > strLength) {
      var strLength = arr[i].length;
      longest = arr[i];
    }
    if (arr === []) {
      return null;
    }
  }
  return longest;
}

module.exports = longestString
