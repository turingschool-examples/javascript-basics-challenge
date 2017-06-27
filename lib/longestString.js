function longestString(data) {
  var max = 0
  var max_word = null
  data.forEach(function(element){
    if(element.length > max) {
      max = element.length
      max_word = element
    }
  })
  return max_word
}

module.exports = longestString
