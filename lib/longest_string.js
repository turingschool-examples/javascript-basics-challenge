
var examples = ["this is the longest", "shortest", "mediumest"]

function longestString(array) {
  var long = array[0];

  if (array === []) {
    return null;
  } else {
    for (i = 0; i < array.length; i++) {
      if (array[i].length > long.length) {
        long = array[i];
      }
    }
  }
  return long;
}

module.exports = longestString

console.log(longestString(examples))
