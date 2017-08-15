function factorial(integer) {
  if(integer < 0) {
    return "Error. Number must be a positive integer";
  } else {
    let result = 1;
    for(i = 1; i < integer + 1; i++) {
      result *= i;
    }
    return result;
  }
}

module.exports = factorial
