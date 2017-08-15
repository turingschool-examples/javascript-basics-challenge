class rectangle {
  area(rectangle) {
    return rectangle["width"] * rectangle["height"];
  }

  perimeter(rectangle) {
    return (rectangle["width"] * 2) + (rectangle["height"] * 2);
  }

  isSquare(rectangle) {
    return rectangle["height"] === rectangle["width"]
  }

  diagonal(rectangle) {
    return Math.sqrt(this.squared(rectangle["width"]) + this.squared(rectangle["height"]));
  }

  squared(side) {
    return side * side;
  }
}

module.exports = rectangle;
