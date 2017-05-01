
function longestString(array){
  var words = {};
  var length = 0;
  var longestWord;

  array.forEach(function findLongestWord(word){
    words[word] = word.length;

    if(length < words[word]){
      length = words[word];
      longestWord = word;
    };
  });
return longestWord
};

module.exports = longestString