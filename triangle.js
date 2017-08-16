class isTriangle {
  theTriangle(side1, side2, side3) {
    if (this.isZero(side1, side2, side3)) {
      return "A triangle cannot have a missing side!";
    }
    else if (this.isNegative(side1, side2, side3)) {
      return "A triangle cannot have negative side!";
    }
    else if (this.isEquilateral(side1, side2, side3)) {
      return "This is an equilateral triangle"
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

  
}
