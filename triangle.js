function isTriangle (side1, side2, side3) {
  if (checkZero(side1, side2, side3) === false || checkNegative(side1, side2, side3) === false || checkSides(side1, side2, side3) === false) {
    return false 
  } else {
    return true 
  }
};

function checkZero (side1, side2, side3) {
  if (side1 === 0 || side2 ===0 || side3 ===0 ) {
    return false
  } else {
    return true
  }
};

function checkNegative (side1, side2, side3) {
  if (side1 < 0 || side2 < 0 || side3 < 0) {
    return false
  } else {
    return true
  }
};

function checkSides (side1, side2, side3) {
  if ((side1 + side2) < side3) {
    return false
  } else if ((side2 + side3) < side1) {
    return false
  } else if ((side1 + side3) < side2) {
    return false
  } else {
    return true
  }
};

module.exports = {isTriangle, checkZero, checkNegative, checkSides};
