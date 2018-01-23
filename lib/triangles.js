module.exports = {
  isTriangle: function isTriangle(side1, side2, side3) {
    if (side1 === 0 && side2 === 0 && side3 === 0) {
      return false
    } else if ([side1, side2, side3].some(v => v < 0)) {
      return false
    } else if (side1===side2 && side2===side3) {
      return true
    } else if ((side1**2 + side2**2 === side3**2) || (side2**2 + side3**2 === side1**2)) {
      return true
    } else {
      return false
    }
  }
}