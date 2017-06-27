function longestString(array) {
  var lengths = array.map(function(element) {
    return element.length
  })
  
  longest = Math.max.apply(null, lengths)
  function findLongest(string) {
    return string.length == longest
  }
  return array.find(findLongest)
}


module.exports = longestString
