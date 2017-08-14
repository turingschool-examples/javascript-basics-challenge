function checkForZeroOrNegativeLength(sides) {
  sides.forEach((side) => {
    if (side <= 0) {
      return false
    }
  })
  return true
}

function isTriangle(a, b, c) {
  sides = [a, b, c]
  return checkForZeroOrNegativeLength(sides)
}

let triangleChecker = exports = { isTriangle, checkForZeroOrNegativeLength }