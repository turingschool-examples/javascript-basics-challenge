function isTriangle(num1, num2, num3) {
  return ((num1 + num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1))
};

module.exports = {
  isTriangle: isTriangle,
}
