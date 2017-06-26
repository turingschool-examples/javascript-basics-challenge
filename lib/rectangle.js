class Rectangle {
  area(rectangle) {
    return rectangle.width * rectangle.height
  }
  perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2
  }
  diagonal(rectangle) {
    const cSquared = rectangle.width**2 + rectangle.height**2
    return Math.sqrt(cSquared)
  }
  isSquare(rectangle) {
    if(rectangle.width == rectangle.height) {
      return true
    } else {
      return false
    }
  }
}

module.exports = Rectangle
