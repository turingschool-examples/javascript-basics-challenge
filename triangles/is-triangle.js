class isTriangle {
  response(side1, side2, side3) {
    if (this.zeroSides(side1, side2, side3)) {
      return "false, because a triangle can't have 0 length sides";
    } else if (this.isNegative(side1, side2, side3)) {
      return "false, because a triangle can't have negative length sides";
    } else if (this.isEqualateral(side1, side2, side3)) {
      return "true, an equilateral triangle";
    } else if (this.isRight(side1, side2, side3)) {
      return "true, a right triangle";
    } else if (this.compareSides(side1, side2, side3)) {
      return true;
    } else {
      return false;
    }
  }

  compareSides(side1, side2, side3) {
    if ((side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1) {
      return true;
    }
  }

  isNegative(side1, side2, side3) {
    if (side1 > 0 && side2 > 0 && side3 > 0) {
      return false;
    } else {
      return true;
    }
  }

  zeroSides(side1, side2, side3) {
    if (side1 === 0 || side2 === 0 || side3 === 0) {
      return true;
    } else {
      return false;
    }
  }

  isEqualateral(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return true;
    } else {
      return false;
    }
  }

  isRight(side1, side2, side3) {
    if (this.pythagorean(side1, side2, side3) || this.pythagorean(side1, side3, side2) || this.pythagorean(side2, side3, side1)) {
      return true;
    } else {
      return false;
    }
  }

  pythagorean(a, b, c) {
    if ((a * a) + (b * b) === (c * c)) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = isTriangle;
