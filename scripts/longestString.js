function longestString(array) {
  let lgth = 0
  let longest;

  for (var i = 0; i < array.length; i++) {
    if (array.length === 0) {
      return null
    } else (array[i].length > lgth)
    lgth = array[i].length
    longest = array[i]
  }
  return longest
}

module.exports = longestString
