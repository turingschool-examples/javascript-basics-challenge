function longestString(arr) {
  var longestWord = ''
  arr.forEach(function(word) {
    word.length > longestWord.length ? longestWord = word : longestWord
  })
  return longestWord
}

// function longestString(arr) {
//   var longestWord = ''
//   for (var i = 0; i < arr.length; i++) {
//     arr[i].length > longestWord.length ? longestWord = arr[i] : longestWord
//   }
//   return longestWord
// }

module.exports = {
  longestString
}
