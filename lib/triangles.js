function isTriangle(side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return false
  } else if (side1 === side2 && side1 === side3) {
    return true
  } else if (validSides(side1, side2, side3)) {
    return true
  } else {
    return false
  }
}

function validSides(side1, side2, side3) {
  var allSides = [side1, side2, side3];
  var ordered = allSides.sort(function (a, b) {
    return a - b;
  })
  return ordered[0] + ordered[1] > ordered[2] ? true : false;
}
module.exports = {
  isTriangle
}
