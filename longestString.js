function longestString(arr) {
  if (arr.length > 0) {
    var longest = arr.sort(function(a,b) {
      return a.length > b.length;
    })
    return longest;
  } else {
    return null
  }
}

module.exports = longestString
