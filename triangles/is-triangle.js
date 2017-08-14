var isTriangle = function(side1, side2, side3) {
  if (zeroSides(side1, side2, side3)) {
    return "false, because a triangle can't have 0 length sides";
  } else if (isNegative(side1, side2, side3)) {
    return "false, because a triangle can't have negative length sides";
  } else if (isEqualateral(side1, side2, side3)) {
    return "true, an equilateral triangle";
  } else if (isRight(side1, side2, side3)) {
    return "true, a right triangle";
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

zeroSides = function(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0) {
    return true;
  } else {
    return false;
  }
}

isEqualateral = function(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return true;
  } else {
    return false;
  }
}

isRight = function(side1, side2, side3) {
  if (pythagorean(side1, side2, side3) || pythagorean(side1, side3, side2) || pythagorean(side2, side3, side1)) {
    return true;
  } else {
    return false;
  }
}

pythagorean = function(a, b, c) {
  if ((a * a) + (b * b) === (c * c)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isTriangle;
