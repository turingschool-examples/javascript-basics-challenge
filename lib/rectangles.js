module.exports = {
  area: function area(object) {
    return object.width * object.height
  },

  perimeter: function perimeter(object) {
    return (object.width + object.height) * 2
  },

  diagonal: function diagonal(object) {
    return Math.sqrt(object.width**2 + object.height**2)
  },

  isSquare: function isSquare(object) {
    if (object.width === object.height) {
      return true
    } else {
      return false
    }
  }
}