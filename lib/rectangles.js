module.exports = Rectangles

function Rectangles(rectangle) {
  this.area = function Area(rectangle) {
    var area = (rectangle.width * rectangle.height);
    return area;
  };

  this.perimeter = function Perimeter(rectangle) {
    var perimeter = ((rectangle.width + rectangle.height) * 2);
    return perimeter
  };

  this.diaganol = function Diaganol(rectangle) {
    var diaganol = Math.sqrt(
      (Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))
    )
    return diaganol;
  };

  this.isSquare = function Square(rectangle) {
    if (rectangle.width === rectangle.height) {
      return true
    } else {
      return false
    }
  }
}
