var isTriangle = function(side1, side2, side3) {
  if (isNegative(side1, side2, side3)) {
    return "false, because a triangle can't have negative length sides"
  } else if (compareSides(side1, side2, side3)) {
    return true;
  } else {
    return false;
  }
}

compareSides = function(side1, side2, side3) {
  if ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1) {
    return true;
  }
}

isNegative = function(side1, side2, side3) {
  if (side1 > 0 && side2 > 0 && side3 > 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = isTriangle;
