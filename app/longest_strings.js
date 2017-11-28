exports.longestString = function(array) {
  if (array[0] === undefined) {
    return null;
  }
  var firstLength = array[0].length;
  var word = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > firstLength) {
      firstLength = array[i].length;
      word = array[i];
    }
  }
  return word;
};
