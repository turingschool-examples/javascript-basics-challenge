


module.exports = {
  area: function area(shape) {
    return shape.width * shape.height;
  },

  perimeter: function perimeter(shape) {
    return (shape.width * 2) + (shape.height * 2)
  },

  diagonal: function diagonal(shape) {
    var temp = Math.pow(shape.width, 2) + Math.pow(shape.height,2)
    return Math.sqrt(temp)
  },

  isSquare: function isSquare(shape) {
    return shape.width == shape.height;
  }
}
