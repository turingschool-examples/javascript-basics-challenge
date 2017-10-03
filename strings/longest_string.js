function longestString(array){
  var length = 0;
  var word;
  if(array.length == 0){
    return null
  }
  array.forEach(function(string){
    var newStringLength = string.length;
    if(newStringLength > length){
      word = string;
    }
  });
  return word
};

module.exports = longestString
