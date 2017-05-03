
var longestString = function(array) {
  var maxLength = 0;
  var longestString = null

  array.forEach(function(string) {
    if (string.length > maxLength) {
      maxLength = string.length;
      longestString = string;
    }
  });
  return longestString;
}

exports.longestString = longestString;