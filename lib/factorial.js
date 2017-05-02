module.exports = function(num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num -= 1;
  }
  return result;
}
