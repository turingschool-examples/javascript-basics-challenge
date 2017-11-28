function longestString(array) {
  if (array.length === 0) {
    return null
  } else {
    var charCount = 0
    var strings
    array.forEach(function (word) {
      if (word.length > charCount) {
        charCount = word.length
        strings = word
      }
    })
  }
  return strings
}

module.exports = longestString
