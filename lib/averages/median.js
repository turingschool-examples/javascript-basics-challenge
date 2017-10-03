var pry = require('pryjs')
function median(arr) {
  var arr = arr.sort();
  var arrHalf = (arr.length/2);
  var twoNumbers = []
  if(arr.length % 2 == 0) {
    twoNumbers.push(arr[arrHalf], arr[arrHalf + 1]);
    return twoNumbers;
  } else {
    return arr[arrHalf - 0.5];
  };
};
module.exports = median;
