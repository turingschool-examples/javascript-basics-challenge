function longestString(array) {
  if (array.length === 0) {
    return null
  }

  return array.sort(function(a,b) {
    return b.length - a.length
  })[0]
}

module.exports = longestString
