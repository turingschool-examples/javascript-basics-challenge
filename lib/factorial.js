function factorial(num) {
  var total = 1
  while(num > 0){
    total *= num
    num = num -1
  }
  return total
}

module.exports = factorial
