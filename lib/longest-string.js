function longestString(array) {
  var stringLength = 0;
  var longest;
  for (i = 0; i < array.length; i++) {
    if (array[i].length > stringLength) {
      stringLength = array[i].length;
      longest = array[i];
    }
  }
  return longest;
}

module.exports = longestString;
