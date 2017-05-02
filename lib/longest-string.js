function longestString(array){
  for(var i = 0; i < array.length; i++){
    var longestString = array[0]
    var currentElementLength = array[i].length;
    if(currentElementLength > longestString.length) {
      longestString = array[i];
    };
  };
  return longestString;
};

module.exports = longestString;
