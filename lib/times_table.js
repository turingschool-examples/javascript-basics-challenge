module.exports = function(num) {
  let multiplier = 1;
  let result = '';
  while (multiplier <= num) {
    for (let i = 1; i <= 5; i++) {
      result += (multiplier * i) + ' '
    }
    multiplier++;
    result += '\n';
  }
  return result;
}
