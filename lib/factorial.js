function factorial(int) {
  if(int === 0 || int === 1) {
    return 1;
  }
  for(i = int - 1; i >= 1; i--) {
    int *= i
  }
  return int;
}

module.exports = factorial;