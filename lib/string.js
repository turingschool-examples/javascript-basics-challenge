function longestString(array){
  if (array == []){
    return null;
  }
  else {
    let letterCount = 0;
    let longest;
    array.forEach(function(string){
      if (string.length > letterCount){
        longest     = string;
        letterCount = longest.length;
      }
    });
  return longest;
  };
};
module.exports = longestString;
