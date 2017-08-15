function longestString(strings) {
  var currentLongest;
  if (strings == []) {
    return null;
  } else {
    var max = 0;
    strings.forEach(function(string) {
      if (string.length > max) {
        max = string.length;
        currentLongest = string;
      }
    });
    return currentLongest;
  }
}

module.exports = longestString