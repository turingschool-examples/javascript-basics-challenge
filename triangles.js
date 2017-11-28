var pry = require('pryjs');

function isTriangle(side1, side2, side3) {
  var squaredSide1 = Math.pow(side1, 2)
  var squaredSide2 = Math.pow(side2, 2)
  var squaredSide3 = Math.pow(side3, 2)
  if ((side1 < 0) || (side2 < 0) || (side3 < 0)) {
    return "False, because a triangle can't have 0 negative sides";
  } else if ((side1 == 0) || (side2 == 0) || (side3 == 0)) {
    return "False, because a triangle can't have 0 length sides"
  } else if ((side1 == side2) && (side1 == side3)) {
    return "True, an equilateral triangle"
  } else if ((squaredSide1 + squaredSide2) == squaredSide3) {
    return "True, a right triangle"
  } else if ((squaredSide1 + squaredSide3) == squaredSide2) {
    return "True, a right triangle"
  } else if ((squaredSide2 + squaredSide3) == squaredSide1) {
    return "True, a right triangle"
  } else {
    return "False, no such triangle exists"
  }
};

module.exports = isTriangle
