
var list = [1,2,2,4,4,5,6,8]

function mode(array) {
  var count = {};

  for (var i = 0; i < array.length; i++) {
    if (count[array[i]]) {
      count[array[i]] += 1
    } else {
      count[array[i]] = 1
    }
  }
  return count;
}

module.exports = mode

console.log(mode(list))
