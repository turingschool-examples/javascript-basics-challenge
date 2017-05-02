function longestString(words){
  if(words.length == 0){
    return null
  }
  else{
    var longestWord = String();
    words.forEach(function(word){
      if(word.length > longestWord.length){
        longestWord = word;
      }
    })
    return longestWord;
  }
}

module.exports = longestString;
