function isRightTriangle (side1, side2, side3) {
  if (side1 <= 0 || side2 <= 0 || side3 <= 0){
        return false;
    } else if ((Math.pow(side1, 2) + Math.pow(side2, 2)) === Math.pow(side3, 2)) {
        return true;
    } else if ((Math.pow(side1, 2) + Math.pow(side3, 2)) === Math.pow(side2, 2)) {
        return true;
    } else if ((Math.pow(side3, 2) + Math.pow(side2, 2)) === Math.pow(side1, 2)) {
        return true;
    } else if ((Math.pow(side2, 2) + Math.pow(side1, 2)) === Math.pow(side3, 2)) {
        return true;
    } else if ((Math.pow(side3, 2) + Math.pow(side1, 2)) === Math.pow(side2, 2)) {
        return true;
    } else if ((Math.pow(side2, 2) + Math.pow(side3, 2)) === Math.pow(side1, 2)) {
        return true;
    } else {
        return false;
    }
}

module.exports = isRightTriangle
