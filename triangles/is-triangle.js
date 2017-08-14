var isTriangle = function(side1, side2, side3) {
  if (compareSides(side1, side2, side3)) {
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

module.exports = isTriangle;
