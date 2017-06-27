function longestString(array){
  var longest = array[0]
  for(var i = 1; i<array.length; i++){
    if(array[i].length > longest.length){
      longest = array[i]
    }
  }
  return longest
}

module.exports = longestString