function factorial(num) {
  var total = 1
  for(i=1; i <= num && num >= 0; i++)
  { total *= i }
  return total
}

module.exports = factorial
