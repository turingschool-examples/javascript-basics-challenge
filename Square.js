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

  diagonal() {
    return Math.sqrt(this.width * this.width + this.height * this.height)
  }
}

module.exports = Square
