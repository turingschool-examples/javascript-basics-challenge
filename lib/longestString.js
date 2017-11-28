function longestString(array) {
  if(array.length === 0) {
    return null;
  }

  var longest = ""

  array.forEach(function (string) {
    if(string.length > longest.length) {
      longest = string
    }
  })
  return longest;
}

module.exports = longestString;