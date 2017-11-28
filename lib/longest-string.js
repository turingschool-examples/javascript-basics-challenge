longestString = (array) => {
  longest = ""
  if(array.length === 0) {
    longest = null
  }
  else {
    array.forEach(function(word) {
      if(word.length > longest.length) {
        longest = word
      }
    })
  }
  return longest
}

module.exports = longestString
