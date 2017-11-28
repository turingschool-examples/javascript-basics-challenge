function factorial(int) {
  if(int < 0 || isNaN(int)) {
    return null;
  } else if(int === 0) {
    return 1;
  } else {
    return int * factorial(int - 1)
  }
}

module.exports = factorial;