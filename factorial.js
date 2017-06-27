/*jshint esversion: 6 */

function factorial(num) {
  if(num == 0) {
    return 1;
  }

  var factors = [];

  while(num > 0) {
    factors.push(num);
    num--;
  }

  var factorial = factors.reduce(function(total, num) {
    return total * num;
  }, 1);

  return factorial;
}

module.exports = factorial;
