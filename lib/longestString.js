function longestString(array){

  var longest_word = "";
  if (array.length === 0) {
    return null;
  }
  else{

  array.forEach(function(word) {
    if(word.length > longest_word.length){
      longest_word = word;
    }
  })
  return longest_word
}

}
module.exports = { longestString}
