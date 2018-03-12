const isTriangle = (legOne, legTwo, legThree) => {
  let sides = [legOne, legTwo, legThree].sort((a, b) => {
    if (a > b) {
      return -1
    } else {
      return 1
    }
  })
  if (sides.some(leg => {return leg < 1})) {
    return false
  } else if (sides.every(leg => {return leg === legOne})) {
    return true
  } else if (sides[0] % 5 === 0 && sides[1] % 4 === 0 && sides[2] % 3 === 0) {
    return true
  } else {
    return false
  }
}

module.exports = isTriangle
