var rectangle = { width: 10, height: 20 }

var area = function(rectangle) {
  return rectangle.width * rectangle.height
}

var perimeter = function(rectangle) {
  return rectangle.width * 2 + rectangle.height * 2
}

var diagonal = function(rectangle) {
  return Math.sqrt(Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2))
}

var isSquare = function(rectangle) {
  if (rectangle.height === rectangle.width) {
    return true
  } else {
    return false
  }
}

module.exports = { area, perimeter, diagonal, isSquare }