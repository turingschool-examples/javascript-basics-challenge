function isTriangle(triangle) {
  if (triangle.sideOne == 0 || triangle.sideTwo == 0 || triangle.sideThree == 0) {
    return false;
  }
}

module.exports = isTriangle
