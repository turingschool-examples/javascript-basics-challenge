var pry = require('pryjs')

function longestString(words) {
  var word = "c";

  for (var i = 0; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i]
    }
  }
  return word;
}

module.exports = longestString
