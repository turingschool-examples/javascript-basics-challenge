function factorial(num) {
  for(var answer = 1; num > 0; num--){
    answer *= num;
  }
  return answer
}

module.exports = factorial;
