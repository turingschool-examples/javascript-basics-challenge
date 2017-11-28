
var list = [2,3,4]

function total(array) {
  var sum = 0;

  if (array.length == 0) {
    return null;
  } else {
    for (var i = 0; i <= array.length -1; i++) {
      sum  = array[i] + sum
    }
    return sum
  }
};

module.exports = total

console.log(total(list))
