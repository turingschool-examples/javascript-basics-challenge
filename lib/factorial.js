module.exports = {factorial}

function factorial(num){
  var factorial = 1
  for(var i = 2; i <= num; i++){
    factorial *= i
  }
  return factorial
}
