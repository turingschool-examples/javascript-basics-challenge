exports.longestString = function(array) {
  var wordLengthArray = []

  for (var i = 0; i < array.length; i++) {
    wordLengthArray.push(array[i].length);
  };

  var stupidNum = Math.max(...wordLengthArray)
  var indexPos = 0

  for (var i = 0; i < wordLengthArray.length; i++) {
    if (wordLengthArray[i] === stupidNum) {
      var indexPos = i
    }
  }

  return array[indexPos];
}
