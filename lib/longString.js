function longString(sugArray) {
  var stringLength = 0;
  var longest;

  for(var i = 0; i < sugArray.length; i++) {
    if(sugArray[i].length > stringLength) {
      var string = sugArray[i].length;
      longest = sugArray[i];
    }
  }
  return longest
}

module.exports = longString;
