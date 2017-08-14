function checkForZeroOrNegativeLength(sides) {
  let flag = true
  sides.forEach((side) => {
    if (side <= 0) {
      console.log(side)
      flag = false
    }
  })
  return flag
}

function checkForUnequalLengths(sides) {
  sides.sort((a,b) => {
    return a - b
  })
  if (sides[0] + sides[1] <= sides[2]) {
    return false
  } else {
    return true
  }
}

function isTriangle(a, b, c) {
  sides = [a, b, c]
  let aTriangle = checkForZeroOrNegativeLength(sides)

  if (aTriangle === false) {
    return false
  } else {
    aTriangle = checkForUnequalLengths(sides)
  }
  return aTriangle
}

var exports = module.exports = { isTriangle, checkForZeroOrNegativeLength }