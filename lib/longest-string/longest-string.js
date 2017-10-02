function longestString(array) {
  if (array === []) {
    return null;
  } else {
    let maxValue = 0;
    let longestWord;
    array.forEach(function(word) {
      if (word.length > maxValue) {
        longestWord = word;
        maxValue     = word.length;
      }
    })
    return longestWord;
  }
}

module.exports = longestString;
