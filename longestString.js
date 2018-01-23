function longestString(words){
  var longest = 0
  var longestWord = ""
  words.forEach(function(word){
   if (word.length > longest){
     longest = word.length;
     longestWord = word;
   }
  })
  return longestWord;
}

module.exports = {longestString}