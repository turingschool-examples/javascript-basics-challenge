function longestString(array) {
  var longest = ""
  array.forEach(function (string) {
    if (string.length > longest.length) {
      longest = string
    }
  })
  return longest;
}

module.exports = longestString
