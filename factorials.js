function factorial(num) {
  if (num === 0) {
    return 1;
  }

  if (num < 0) {
    return undefined;
  }

  else {
    for (var i = num; --i; ) {
      num *= i;
    }
    return num;
  }
}


module.exports = {
  factorial
}
