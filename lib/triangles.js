class Triangle {
  constructor(x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z
  }

  isTriangle() {
    var sides = [this.x, this.y, this.z]

    if(this.x == this.y && this.y == this.z) {
      return "true, an equilateral triangle";
    }
  }
}

module.exports = Triangle
