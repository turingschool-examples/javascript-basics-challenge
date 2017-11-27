module.exports = {
    area: function area(rectangle) {
      return rectangle.width * rectangle.height;
    },
    perimeter: function perimiter(rectangle) {
      return (rectangle.width * 2) + (rectangle.height * 2)
    },
    diagonal: function diagonal(rectangle) {
      return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2));
    },
    isSquare: function isSquare(rectangle) {
      if (rectangle.width === rectangle.height) {
        return true
      } else {
        return false
      }
    }
}
