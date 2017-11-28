function isTriangle(num1, num2, num3) {
  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    return false;
  } else if (Math.pow(num1, 2) + Math.pow(num2, 2) === Math.pow(num3, 2)) {
    return true;
  } else if (Math.pow(num2, 2) + Math.pow(num3, 2) === Math.pow(num1, 2)) {
    return true;
  } else if (Math.pow(num3, 2) + Math.pow(num1, 2) === Math.pow(num2, 2)) {
    return true;
  } else if (num1 === num2 && num1 === num3 && num2 === num3) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isTriangle }
