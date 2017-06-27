


function factorial(num) {
  if (num === 0) return 1;
  var sum = 1
  for (num; num > 0; num--) {
    sum = num * sum
  }
  return sum
}
module.exports = factorial
