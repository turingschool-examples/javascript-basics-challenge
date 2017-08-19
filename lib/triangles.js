class Triangle {
  constructor(x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z
  }

  isTriangle() {
    var sides = [this.x, this.y, this.z]

    if(this.x === this.y && this.y === this.z) {
      return "true, an equilateral triangle";
    }

    if(this.x === 0 || this.y === 0 || this.z === 0) {
      return "false, because a triangle can't have 0 length sides"
    }

    if(this.x < 0 || this.y < 0 || this.z < 0) {
      return "false, because a triangle can't have negative length sides"
    }
  }
}

module.exports = Triangle
