function isTriangle(side1, side2, side3) {
  var sortSides = [side1, side2, side3].sort(function (side1, side2) {return side1 - side2})
  var shortSide1 = sortSides[0]
  var shortSide2 = sortSides[1]
  var longSide = sortSides[2]
  if ((shortSide1 + shortSide2) <= longSide) {
    return false
  } else {
    return true
  }
}

module.exports = isTriangle;
