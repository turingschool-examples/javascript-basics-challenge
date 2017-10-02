pry = require('pryjs');

function longestString(array){
  var length = 0;
  var word;
  array.forEach(function(string){
    var newStringLength = string.length;
    if(newStringLength > length){
      word = string;
    }
  });
  return word
};

module.exports = longestString
