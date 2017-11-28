function longestString(arr) {
  var longestLength = 0;
  var longest;
  for(i = 0; i < arr.length; i++) {
    if(arr[i].length > longestLength) {
      longestLength = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}

module.exports = longestString;