function isTriangle(num1,num2,num3) {
  var pair1 = num1 + num2;
  var pair2 = num2 + num3;
  var pair3 = num1 + num3;

  if (num1 <= 0 || num2 <= 0 || num3 <= 0 ) {
    return false;
  }
  else if (pair1 > num3 && pair2 > num1 && pair3 && num2) {
    return true;
  }
  else {
    return false;
  }
}



module.exports = {
  isTriangle
}
