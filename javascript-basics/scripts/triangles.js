function isTriangle(side1,side2,side3) {
  if ((side1 > 0, side2 > 0, side3 > 0) && (checkPythagorean(side1,side2,side3))) {
    return true
  }
  else {
    return false
  }
}

function pythagorean(num1,num2) {
  return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
}

function checkPythagorean(num1,num2,num3) {
  if ((pythagorean(num1, num2) === num3) || (pythagorean(num1, num3) === num2) || (pythagorean(num3, num2) === num1)) {
    return true
  }
  else {
    return false
  }
}

module.exports = {isTriangle, pythagorean, checkPythagorean}
