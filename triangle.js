class isTriangle {
  theTriangle(side1, side2, side3) {
    if (this.isZero(side1, side2, side3)) {
      return "A triangle cannot have a missing side!";
    }
    else if (this.isNegative(side1, side2, side3)) {
      return "A triangle cannot have negative side!";
    }
    else if (this.isEquilateral(side1, side2, side3)) {
      return "This is an equilateral triangle";
    }
    else if (this.isRight(side1, side2, side3)) {
      return "This is a proper right triangle!";
    }
    else {
      return false;
    }
  }

  isZero(side1, side2, side3) {
    if (side1 === 0 || side2 === 0, || side3 === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isNegative(side1, side2, side3) {
    if (side1 < 0 || side2 < 0 || side3 < 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isEquilateral(side1, side2, side3) {
    if (side1 === side2 ===side3) {
      return true;
    }
    else {
      return false;
    }
  }

  isRight(side1, side2, side3) {
    if (this.theTheorum(side1, side2, side3) || this.theTheorum(side1, side3, side2) || this.theTheorum(side2, side3, side1)) {
      return true;
    }
    else {
      return false;
    }
  }

  theTheorum(a, b, c) {
    if ((a * a) + (b * b) === (c * c)) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = isTriangle;
