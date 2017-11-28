
var list = [2,4,5,1,6]

function median(array) {
  var median = 0;
  var arrayLength = array.length;

  array.sort()

  if (arrayLength % 2 === 0) {
    median = (array[arrayLength / 2 - 1] + array[arrayLength / 2]);
  } else {
    median = array[(arrayLength - 1) / 2];
  }
  return median;
}


module.exports = median
console.log(median(list))
