class Triangle {
  constructor(x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z
  }

  isTriangle() {
    if(this.x == this.y && this.y == this.z) {
      return true; //equilateral
    }
  }
}




module.exports = Triangle
