module.exports = {factorial}

function factorial(number) {
  var factorial = 1
  for(var i=2; i <= number; i++){
    factorial *= i
  }
  return factorial
};
