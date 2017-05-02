var pry = require('pryjs');

function longestString(array) {
  var longest = 0
  var answer
  array.forEach(function(word){
    if (word.length > longest) {
      answer = word
      longest = word.length
    };
  });
  return answer
};

module.exports = {longestString};
