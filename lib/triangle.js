function isTriangle(side1, side2, side3) {
  if (verifyPythagoreanTriple(side1, side2, side3)) {
    return true;
  } else if (verifyPythagoreanTriple(side1, side3, side2)) {
    return true;
  } else if (verifyPythagoreanTriple(side2, side1, side3)) {
    return true;
  } else if (verifyPythagoreanTriple(side2, side3, side1)) {
    return true;
  } else if (verifyPythagoreanTriple(side3, side1, side2)) {
    return true;
  } else if (verifyPythagoreanTriple(side3, side2, side1)) {
    return true;
  } else {
    return false;
  }
}

function verifyPythagoreanTriple(side1, side2, side3) {
  if ( (Math.pow(side1, 2) + Math.pow(side2, 2) ) == Math.pow(side3, 2) ) {
    return true;
  } else {
    return false;
  }
}

module.exports = isTriangle;
