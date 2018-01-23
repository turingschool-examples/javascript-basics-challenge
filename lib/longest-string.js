function longestString(array) {
  if (array.length != 0) {
    var sorted = array.sort(function(a, b) {
      return b.length - a.length
    })
    return sorted[0]
  } else {
    return null
  }
}

module.exports = {
  longestString
}
