function isTriangle(sideOne, sideTwo, sideThree) {
  if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
    return false;
  } else if ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isTriangle
