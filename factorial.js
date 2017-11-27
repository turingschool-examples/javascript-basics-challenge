function factorial(num) {
  if (num === 0) {
    return 1;
  } else if (num < 0) {
    return "number must be non-negative";
  } else {
    var result = 1;
    for(var i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};


module.exports = { factorial }
