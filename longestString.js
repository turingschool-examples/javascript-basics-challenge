function longestString(array) {
  var longest = 0;
  var longestString = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest && typeof array[i] ==="string") {
      longest = array[i].length;
      longestString = array[i];
    }
  }
  return longestString;
}
module.exports = {
  longestString: longestString
}
