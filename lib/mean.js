
var list = [2,4,6,8,10,12]

function mean(array) {
  var total = 0;
  if (array.length ==0) {
    return null;
  } else {
    for(var i = 0; i < array.length; i++) {
      total += array[i];
    }
  }
  var avg = total / array.length;
  return avg;
}

module.exports = mean

console.log(mean(list))
