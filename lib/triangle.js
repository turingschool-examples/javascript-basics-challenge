const isTriangle = (side1, side2, side3) => {
  let sum1 = side1 + side2;
  let sum2 = side2 + side3;
  let sum3 = side3 + side1;
  if(side1 <= 0 || side2 <= 0 || side3 <= 0) {
    return false;
  } else if (sum1 > side3 && sum2 > side1 && sum3 > side2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isTriangle;
