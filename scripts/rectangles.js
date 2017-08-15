class Rectangle {
  constructor(height, width) {
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height;
  }

  perimeter(rectangle) {
    return this.width * 2 + this.height * 2
  }

  diagonal(rectangle) {
    return Math.sqrt((Math.pow(this.height, 2) + Math.pow(this.width, 2)))
  }
  isSquare(rectangle) {
    return this.width === this.height
  }

}

module.exports = Rectangle
