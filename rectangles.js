
module.exports = {
  area: function (rectangle) {
    return (rectangle.width * rectangle.height)
  },

  perimeter: function (rectangle) {
    return (rectangle.width * 2) + (rectangle.height * 2)
  },

  diagonal: function(rectangle) {
    var sum = Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2)
    return Math.sqrt(sum).toFixed(2)
  },

  isSquare: function(rectangle) {
    return (rectangle.width === rectangle.height)
  }
}
