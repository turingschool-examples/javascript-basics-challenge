function longestString(array){
  if(typeof array != "undefined" && array != null && array.length > 0){
    var longest = 0;
    var string = "";
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > longest) {
        longest = array[i].length;
        string = array[i];
      }
    }
    return string;
  }
}

  module.exports = longestString
