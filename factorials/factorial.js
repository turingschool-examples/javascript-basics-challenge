function factorial(integer){
  if(Number.isInteger(integer) && integer > 0){
    var factorialIntegers = []
    for(var i = integer; i > 0; i--){
      factorialIntegers.push(i)
    }
    return factorialIntegers.reduce(function(product, num){
      return product * num
    }, 1);
  }
};

module.exports = factorial
