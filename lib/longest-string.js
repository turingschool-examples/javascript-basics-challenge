const longestString = (array) => {
  if (!Array.isArray(array) || !array.length) {
    return "null"
  } else {
    var longest = ""
    array.forEach((word) => {
      if (word.length > longest.length) {
        longest = word
      }
    })
    return longest
  }
}


module.exports = longestString
