function longestString(array) {
  var sortedArr = array.sort(function(a, b){
    return b.length - a.length
  })
  return sortedArr[0]
}

module.exports = longestString
