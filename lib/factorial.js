function factorial(number) {
  for (var answer = 1; number > 0; number--) {
    answer *= number;
  }
  return answer
}

module.exports = factorial;
