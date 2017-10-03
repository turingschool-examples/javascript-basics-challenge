function isTriangle(side1, side2, side3){
  if (Math.sign(side1) === 1 && Math.sign(side2) === 1 && Math.sign(side3) === 1){
    if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = isTriangle;
