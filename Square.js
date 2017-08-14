class Square {
  constructor(dimensions) {
    this.width = dimensions.width
    this.height = dimensions.height
  }

  area() {
    return this.width * this.height
  }

  perimeter() {
    return this.width * 2 + this.height * 2
  }
}

module.exports = Square
